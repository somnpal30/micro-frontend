export interface IEventHandler<T> {
  clickHandler(handler: { (data?: T): void }) : boolean;
}
