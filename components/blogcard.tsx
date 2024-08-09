import Image from 'next/image';
import React from 'react'

const Blogcard = ({
  image,
  title,
  description,
}: {
  image:string;
  title:string;
  description:string;
}) => {
  return <div className=' h-90'>
    <Image src={image} alt={''} width={1000} height={1000}/>
    <h3 className='font-bold text-xs py-4'>{title}</h3>
    <p className='line-clamp-3'>{description}</p>

  </div>;
};

export default Blogcard
