import EventEmitter from 'events';

/**
 * Centralized Message system
**/

export const MessageHub = new EventEmitter();

export enum EventType {
  Toggle = 'toggle',
  Details = 'show-details',
  FilterByPhase = 'filter-by-phase',
  FilterByType = 'filter-by-type',
  ShowElementDisplay = 'show-element-display'
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

  static ShowDetails(data: any) {
    MessageHub.emit(EventType.Details, data);
  }

  static ShowElementOnDisplay(data: any){
    MessageHub.emit(EventType.ShowElementDisplay, data)
  }

  static FilterByPhase(data: any ){
    MessageHub.emit(EventType.FilterByPhase, data);
  }

  static FilterByType(data: any){
    MessageHub.emit(EventType.FilterByType, data);
  }
}