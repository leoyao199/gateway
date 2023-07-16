import Image, {StaticImageData} from 'next/image';
import {useWindowSize} from './hooks/useWindowSize';
import { useMemo, useState } from 'react';
import { globalVariable } from '@/app/global';
import GWButton from './GWButton';

export interface GWFormProps {
  imageSource: StaticImageData;
  maxWidth: number
}

export default function GWForm(props: GWFormProps) {
  const {innerHeight, innerWidth} = useWindowSize();
  const imgHeight = useMemo(()=>{
    if (innerWidth > globalVariable.smallScreenWidth){
      return 640
    } else {
      return innerWidth
    }
  },[innerWidth])
  const [result, setResult] = useState({})

  const questionnaire = [
    {label: 'Name', column: 'name'},
    {label: 'Email Address', column: 'email'},
    {label: 'Subject', column: 'subject'},
    {label: 'Message', column: 'message'},
  ];

  const questionFactory = (label:string, column: string, key:string, ) => {
    const baseSize = 15
    return (
      <div
        key={key}
        style={{borderBottom: '0.5px solid grey', marginBottom: 50}}>
        <input
          type="text"
          style={{
            height:
              innerWidth > globalVariable.smallScreenWidth
                ? 4 * baseSize
                : 2 * baseSize,
            width: '100%',
            backgroundColor: 'black',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            fontSize:
              innerWidth > globalVariable.smallScreenWidth
                ? 2 * baseSize
                : baseSize,
            color: '#FFFFFF',
          }}
          placeholder={label}
          onChange={e => setResult({...result, [column]: e.target.value})}
        />
      </div>
    );
  }

  const sendRequest = () => {
    // const data = 
  }

  return (
    <div
      style={{position: 'relative', display: 'flex', justifyContent: 'center', maxWidth: props.maxWidth??undefined}}>
      <Image
        src={props.imageSource}
        height={innerHeight}
        width={innerWidth}
        alt={''}
        style={{
          objectFit: 'cover',
          minHeight: innerWidth > globalVariable.smallScreenWidth ? 1080 : 640,
          maxWidth: props.maxWidth ? props.maxWidth : innerWidth ,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div
          style={{
            height: innerWidth > globalVariable.smallScreenWidth ? 700 : 500,
            width: innerWidth > globalVariable.smallScreenWidth ? 600 : innerWidth,
            backgroundColor: 'black',
            position: 'absolute',
          }}>
          <div style={{margin: innerWidth > globalVariable.smallScreenWidth  ? 70 : 35}}>
            {questionnaire.map((data, index) =>
              questionFactory(data.label, data.column, `question_${index}`),
            )}
            <div style={{display:'flex', justifyContent:'center'}}>
              <GWButton text={'Contact Us'} onClick={sendRequest}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
