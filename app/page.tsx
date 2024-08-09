import Blogcard from "@/components/blogcard";
import React from "react";

const page = async () => {
  const data = await fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((res) => res.products);
  return (
    <div className="grid grid-cols-4">
      {data.map(
        ({
          thumbnail,
          title,
          description,
        }: {
          thumbnail: string;
          title: string;
          description: string;
        }) => (
          <Blogcard
            key={title}
            image={thumbnail}
            title={title}
            description={description}
          />
        )
      )}
    </div>
  );
};

export default page;
