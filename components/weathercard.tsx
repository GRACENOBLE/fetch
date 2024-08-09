import React from "react";

const Weathercard = ({ description, time }: { description: string; time: string }) => {
  return (
    <div className="dorder px-4 py-2 border rounded-full">
      weather: {description}
      time: {time}
    </div>
  );
};

export default Weathercard;
