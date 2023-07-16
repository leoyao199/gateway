export interface IImage {
  url: string
}

export interface IImageRes {
  attributes: IImage
}

export interface IEvent {
  content: string,
  createdAt: string,
  location: string,
  name: string,
  openForRegistration: boolean,
  publishedAt: string,
  date: boolean,
  updatedAt: string,
  coverImage: { data: IImageRes },
  country: string
}

export interface IEventRes {
  attributes: IEvent,
  id: number
}