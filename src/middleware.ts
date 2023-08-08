import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  matcher: '/:lng*'
}

const cookieName = 'i18next'

export function middleware(req:NextRequest) {
  //   // // Check if there is any supported locale in the pathname
  //   const pathname = req.nextUrl.pathname
  //   const pathnameIsMissingLocale = languages.every(
  //     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  //   )
  //   console.log({pathname,pathnameIsMissingLocale,languages})
   
  //   // Redirect if there is no locale
  //   if (pathnameIsMissingLocale) {
  //     // const locale = getLocale(req)
   
  //     // e.g. incoming request is /products
  //     // The new URL is now /en-US/products
  //     // return NextResponse.redirect(
  //     //   new URL(`/${fallbackLng}/${pathname}`, req.url)
  //     // )
  //     return  NextResponse.redirect(new URL(`/404`, req.url))
  //   }
  let lng
  const cookiesObj = req.cookies.get(cookieName)
  if (cookiesObj && req.cookies.has(cookieName)) lng = acceptLanguage.get(cookiesObj.value)
  // console.log({lng})
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng

  if (req.nextUrl.pathname === '/') { 
    return NextResponse.redirect(new URL(`/${lng}`, req.url))
  }

  if (req.headers.has('referer')) {
    const referer = req.headers.get('referer')
    if (referer){
      const refererUrl = new URL(referer)
      const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
      const response = NextResponse.next()
      if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
      return response
    }
  }

  return NextResponse.next()
}