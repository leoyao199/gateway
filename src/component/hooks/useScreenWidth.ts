import { globalVariable } from "@/app/global";
import { useWindowSize } from "./useWindowSize";

export default function useScreenWidth (){
  const {innerHeight, innerWidth} = useWindowSize()
  if (innerWidth > globalVariable.maxScreenWidth){
    return globalVariable.maxScreenWidth
  } else if (innerWidth > globalVariable.smallScreenWidth){
    return innerWidth
  } else {
    return globalVariable.smallScreenWidth
  }
}