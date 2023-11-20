import OurServicesContent from "./OurServicesContent";



export default function OurServicesPage ({params: {lng}}:{params: {lng:string}}){
  return (
    <main>
      <OurServicesContent lng={lng}/>

    </main>
  )
}