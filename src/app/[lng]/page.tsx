'use client';
import bg from '../../../public/index_1.png';
import why_canada from '../../../public/why_canada.jpg';
import why_australia from '../../../public/why_australia.jpg';
import image1 from '../../../public/image1.jpg';
import image2 from '../../../public/image2.jpg';
import image3 from '../../../public/image3.jpg';
import kid1 from '../../../public/kid1.jpg';
import kid2 from '../../../public/kid2.jpg';
import staff1 from '../../../public/staff1.jpg';
import staff2 from '../../../public/staff2.jpg';
import staff3 from '../../../public/staff3.jpg';
import staff4 from '../../../public/staff4.jpg';
import formImage from '../../../public/formImage.jpg';
import GWHeader from '@/component/GWHeader';
import GWFullWidthImage from '@/component/GWFullWidthImage';
import {useTranslation} from 'react-i18next';
import GWHalfWidthImage from '@/component/GWHalfWidthImage';
import GWServices from '@/component/GWServices';
import GWStaffDirectory from '@/component/GWStaffDirectory';
import GWForm from '@/component/GWForm';
import {Ref, RefObject, useRef} from 'react';
import { useRouter } from 'next/navigation'

export default function Home({params: {lng}}) {
  const languageList = ['en', 'vn']
  const router = useRouter()
  const {t} = useTranslation(lng);
  const ourServicesData = [
    {
      imageSource: image1,
      title: 'Immigration services',
      containerSizer: NaN,
      content:
        "Our visa application services are designed to help you navigate the complex process of applying for a visa. Whether you're a skilled worker, a family member of a Canadian or Australian citizen, or a student, we can help you determine the right visa for your needs and assist you with the application process.",
    },
    {
      imageSource: image2,
      title: 'Property Investment',
      containerSizer: NaN,
      content:
        'We understand that investing in property can be a complex process, which is why we provide comprehensive support and guidance to help you make informed decisions. Our team of experts will help you identify the best investment opportunities based on your goals and budget, and guide you through the buying process.',
    },
    {
      imageSource: image3,
      title: 'Language Enhancement',
      containerSizer: NaN,
      content:
        'At Getaway, we partner with a reputable English language school to provide language enhancement services to our clients. Our services include language courses and assistance with settling into your new environment. We are committed to providing comprehensive support to ensure your immigration journey is a success.',
    },
  ];
  const OurTeamData = [
    {
      imageSource: staff1,
      title: 'Managing Partner',
      containerSizer: NaN,
      name: 'Francisco Andrade',
    },
    {
      imageSource: staff2,
      title: 'Senior Partner',
      containerSizer: NaN,
      name: 'Pedro Fernandes',
    },
    {
      imageSource: staff3,
      title: 'Partner',
      containerSizer: NaN,
      name: 'Stella Ornelas',
    },
    {
      imageSource: staff4,
      title: 'Celine Guajardo',
      containerSizer: NaN,
      name: 'Lawyer',
    },
  ];
  if (!languageList.includes(lng)){
    router.push(`/en`)
  }
  const ContactRef = useRef<HTMLDivElement>(null);
  const AboutUsRef = useRef<HTMLDivElement>(null);
  const OurServicesRef = useRef<HTMLDivElement>(null);

  const handleRedirect = (ref: RefObject<HTMLDivElement>) => {
    ref && ref.current && ref.current.scrollIntoView({behavior: 'smooth'});
  };

  const headerData = [
    {text: 'About us', onClick: () => handleRedirect(AboutUsRef)},
    {text: 'Our Services', onClick: () => handleRedirect(OurServicesRef)},
    {text: 'Articles', onClick: () => router.push(`/${lng}/articles`)},
    {text: 'Event', onClick: () => router.push(`/${lng}/event`)},
    {text: 'Contact us', onClick: () => handleRedirect(ContactRef)},
  ];
  return (
    <main>
      <GWHeader data={headerData} />
      <GWFullWidthImage imagePath={bg} text={'text'} onClick={()=>handleRedirect(ContactRef)}/>
      <GWHalfWidthImage
        backgroundColor={'rgb(245, 245, 239)'}
        context={{
          title: '#Why Canada?',
          content:
            'Canada is consistently ranked as one of the best countries in the world to live in. It offers a high standard of living, with excellent healthcare, education, and social services. Canadians enjoy a strong sense of community, safety, and personal freedom.',
          onPress: () => {},
        }}
        imageSource={why_canada}
      />
      <GWHalfWidthImage
        backgroundColor={'#FFFFFF'}
        context={{
          title: '#Why Australia?',
          content:
            'Australia is a country of stunning natural beauty, from its pristine beaches to its vast outback, tropical rainforests, and diverse wildlife. The country is home to the Great Barrier Reef, Uluru, the Whitsunday Islands, and many other natural wonders that attract visitors from all over the world.',
          onPress: () => {},
        }}
        imageSource={why_australia}
        mirror
      />
      <div ref={OurServicesRef}>
        <GWServices
          title={'Our Services'}
          data={ourServicesData}
          backgroundColor="rgb(245, 245, 239)"
        />
      </div>
      <GWHalfWidthImage
        backgroundColor={'rgb(245, 245, 239)'}
        context={{
          title: 'Language Enhancement',
          content:
            'At Getaway, we partner with a reputable English language school to provide language enhancement services to our clients. Our services include language courses and assistance with settling into your new environment. We are committed to providing comprehensive support to ensure your immigration journey is a success.',
          onPress: () => {},
        }}
        imageSource={[kid1, kid2]}
      />
      <div ref={AboutUsRef}>
        <GWStaffDirectory
          data={OurTeamData}
          backgroundColor={'#28282B'}
          title={'Our Team'}
          titleStyle={{color: '#FFFFFF'}}
        />
      </div>
      <div ref={ContactRef}>
        <GWForm imageSource={formImage} />
      </div>
    </main>
  );
}
