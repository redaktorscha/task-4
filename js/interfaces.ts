export interface ICat {
    [prop: string]: string | number;    
    name: string;
    weight: number;
    color: string;
    gender: string;
    age: number;       
}

export interface ISorted {
    state: boolean;
    prop: string;
}



export interface IEvent {
    target: HTMLElement | EventTarget | null;
  }