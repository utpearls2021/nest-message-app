import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message-dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor (public messagesService: MessagesService){}
  @Get()
  get(){
    return this.messagesService.findAll();
  }

  @Post()
  store(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get("/:id")
  async getById(@Param() id: any){
    const message = await this.messagesService.find(id.id);
    console.log("message", message);
    if (!message) {
      throw new NotFoundException ("message not found");
    }

    return message;
  }
}
