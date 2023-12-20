export interface IImage {
  url: string
  formats : {thumbnail:{url:string}}
}

export interface IImageRes {
  attributes: IImage
}

export interface IEvent {
  content: string,
  vn_content: string,
  createdAt: string,
  name: string,
  vn_name: string,
  openForRegistration: boolean,
  publishedAt: string,
  date: string,
  vn_date: string,
  updatedAt: string,
  coverImage: { data: IImageRes },
  coverImagePreview?: { data: IImageRes },
  country: string
  vn_country: string

}

export interface IEventRes {
  attributes: IEvent,
  id: number
}

export interface IArticle {
  content: string,
  author: string,
  title: string,
  description: string,
  vn_content: string,
  vn_title: string,
  vn_description: string,
  coverImage: { data: IImageRes },
  date: string
  tags: {data:ITagRes[]}
  coverImagePreview?: { data: IImageRes },
  relatedArticle? : IArticleRes[]
}

export interface IArticleRes {
  attributes: IArticle,
  id: number
}

export interface ITag {
  en_name: string,
  vn_name: string,
}

export interface ITagRes {
  attributes: ITag
  id: number
}