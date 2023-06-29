'use client'
import { usePathname } from "next/navigation"

export default function EventPage(){
  const path = usePathname()
  
  return (
    <div>{path}</div>
  )
}

