import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

Injectable()
export class MessagesRepository {

  async findOne(id: string){
    const content = await readFile("messages.json", "utf8");
    const message = JSON.parse(content);
    return message[id];
  }

  async findAll(){
    const content = await readFile("messages.json", "utf8");
    return JSON.parse(content);
  }

  async create(content: string){
    const contentDetail = await readFile("messages.json", "utf8");
    const messageDetail = JSON.parse(contentDetail);

    const id = Math.floor(Math.random() * 999);
    messageDetail[id] = { id: id, content: content };
    await writeFile("messages.json", JSON.stringify(messageDetail));
  }
}