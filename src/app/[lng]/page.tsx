import GWLandingContent from "@/component/GWLandingContent";


export default function Home({params: {lng}}:{params: {lng:string}}) {
  return (
    <GWLandingContent lng={lng}/>
  )
}