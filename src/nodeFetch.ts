import { HTTP_METHOD } from "next/dist/server/web/http"

export default async function (url:string, cache?: RequestCache, headers?: HeadersInit, body?: BodyInit, method?: HTTP_METHOD){
  if (!cache){
    cache = 'no-store'
  }
  headers = {'Authorization':`bearer ${process.env.TOKEN}`,'Content-Type':"application/json", ...headers}
  // console.log(url)
  const res =  await fetch(url, { cache , headers, body, method})
  return res
}
