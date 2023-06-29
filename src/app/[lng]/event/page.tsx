'use client'
import GWHeader from "@/component/GWHeader";
import { usePathname, useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import GWStaffDirectory from "@/component/GWStaffDirectory";
import image1 from '../../../../public/image1.jpg';
import image2 from '../../../../public/image2.jpg';
import image3 from '../../../../public/image3.jpg';
import GWServices from "@/component/GWServices";
import GWEventList from "@/component/GWEvent";
import Image from "next/image";
import bg from "../../../../public/formImage.jpg"
export default function EventListPage({params: {lng}}){
  const router = useRouter()
  const headerData = [
    {text: 'About us', onClick: () => router.push(`/${lng}`)},
    {text: 'Our Services', onClick: () => router.push(`/${lng}`)},
    {text: 'Articles', onClick: () => router.push(`/${lng}/articles`)},
    {text: 'Event', onClick: () => router.push(`/${lng}/event`)},
    {text: 'Contact us', onClick: () => router.push(`/${lng}`)},
  ];
  const eventData = [
    {
      imageSource: image1,
      title: 'Globevisa Taiwan Pathway Roadshow',
      containerSizer: NaN,
      content: `May 06, 1:00 PM – 6:00 PM
      Taiwan, Floor 27, Uni-President International Building, No.9, Songgao Road, Xinyi District, Taipei, Taiwan, PRC`,
      onClick: ()=>router.push(`event/${'Globevisa Taiwan Pathway Roadshow'}`)
    },
    {
      imageSource: image2,
      title: 'Globevisa Singapore EB-5 Marriott DTLA Seminar',
      containerSizer: NaN,
      content: 'Pedro Fernandes',
      onClick: ()=>router.push(`event/${'Globevisa Taiwan Pathway Roadshow'}`)
    },
    {
      imageSource: image3,
      title: 'Globevisa Malaysia Pathways Roadshow',
      containerSizer: NaN,
      content: 'Stella Ornelas',
      onClick: ()=>router.push(`event/${'Globevisa Taiwan Pathway Roadshow'}`)
    },
    {
      imageSource: image1,
      title: 'Globevisa Taiwan EB-5 Marriott DTLA Seminar',
      containerSizer: NaN,
      content: 'Lawyer',
      onClick: ()=>router.push(`event/${'Globevisa Taiwan Pathway Roadshow'}`)
    },
  ];

  return (
    <div>
      <GWHeader data={headerData} />
      <Image src={bg} alt="" style={{width:'100%'}}/>
      <GWEventList data={eventData} backgroundColor={""} title={"Up coming Event"}/>
    </div>
  )
}