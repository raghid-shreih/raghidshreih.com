import { type ContactMessage } from "@shared/schema";

export interface IStorage {
  saveContactMessage(message: ContactMessage): Promise<void>;
}

export class MemStorage implements IStorage {
  private messages: ContactMessage[] = [];

  async saveContactMessage(message: ContactMessage): Promise<void> {
    this.messages.push(message);
    console.log(`Contact message received from ${message.name} (${message.email}): ${message.subject}`);
  }
}

export const storage = new MemStorage();
