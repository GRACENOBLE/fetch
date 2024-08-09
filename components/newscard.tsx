import Image from "next/image";
import React from "react";

const Newscard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div>
      {image && (
        <Image
          src={image}
          alt={title}
          width={1000}
          height={1000}
          className="h-96 object-cover"
        />
      )}
      <h3 className="bold font-sm">{title}</h3>
      <p className="line-clamp-3">{description}</p>
    </div>
  );
};

export default Newscard;
