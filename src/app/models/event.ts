export class Event {
  constructor(
    public eventId: number,
    public eventTypeId: number,
    public worldId: number,
    public name: string,
    public shortDescription: string,
    public longDescription: string,
    public visibility: number,
    public startDate: string,
    public endDate: string,
    public organizerUrl: string,
    public capacity: number
  ) {}
}
