import AboutUsContent from "./AboutUsContent"


export default function AboutUsPage ({params: {lng}}:{params: {lng:string}}){
  return (
    <main>
      <AboutUsContent lng={lng}/>

    </main>
  )
}