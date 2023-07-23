import { NextRequest, NextResponse } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages } from './app/i18n/settings'

acceptLanguage.languages(languages)

export const config = {
  matcher: '/:lng*'
}

const cookieName = 'i18next'

export function middleware(req:NextRequest) {
  let lng
  const cookiesObj = req.cookies.get(cookieName)
  if (cookiesObj && req.cookies.has(cookieName)) lng = acceptLanguage.get(cookiesObj.value)
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