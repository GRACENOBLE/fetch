import Weathercard from "@/components/weathercard";
import React from "react";

const Page = async () => {
  const lat = 0.34062893652562987;
  const lon = 32.5695129608989;
  const key = process.env.MY_WEATHER_API_KEY;
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`
  )
    .then((res) => res.json())
    .then((res) => res.list);
  return (
    <div className="flex flex-wrap">
      {data.map(({ weather, dt_txt }: { weather: any; dt_txt: string }) => (
        <Weathercard description={weather[0].description} time={dt_txt} />
      ))}
    </div>
  );
};

export default Page;
