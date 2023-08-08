import GWHeaderContent from "./GWHeaderContent";

export default function GWHeader({lng, dictionary}:{lng:string,dictionary:Record<string,string>}){
  return (
    <GWHeaderContent lng={lng} dictionary={dictionary}/>
  )
}