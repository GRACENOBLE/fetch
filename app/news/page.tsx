import Newscard from "@/components/newscard";
import React from "react";

const page = async () => {
  const key = process.env.MY_API_KEY;
  const data = await fetch(
    `https://newsapi.org/v2/everything?q=tesla&from=2024-07-08&sortBy=publishedAt&apiKey=${key}`
  )
    .then((res) => res.json())
    .then((res) => res.articles);

  return (
    <div className="grid grid-cols-4">
      {data.map(
        ({
          urlToImage,
          title,
          description,
        }: {
          urlToImage: string;
          title: string;
          description: string;
        }) => (
          <Newscard image={urlToImage} title={title} description={description} />
        )
      )}
    </div>
  );
};

export default page;
