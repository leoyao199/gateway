export default async function (url:string, cache?: RequestCache, headers?: HeadersInit){
  if (!cache){
    cache = 'no-store'
  }
  headers = {'Authorization':`bearer ${process.env.TOKEN}`, ...headers}
  // console.log(url)
  const res =  await fetch(url, { cache , headers})
  return res
}
