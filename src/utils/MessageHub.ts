import EventEmitter from 'events';

/**
 * Centralized Message system
**/

export const MessageHub = new EventEmitter();

export enum EventType {
  Toggle = 'toggle'
}

export interface IMessage {
  eventType: string;
}

export interface IToogleMessage extends IMessage {
  state: number;
}

export class MessageHubControllers {
  static Toggle(data: any) {
    MessageHub.emit(EventType.Toggle, data)
  }
}