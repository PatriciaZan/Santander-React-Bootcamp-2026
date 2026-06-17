import type React from "react";
import inspirations from "../data/inspirations";
import FancyText from "./FancyText";
import { useState } from "react";
import Color from "./Color";

export default function InspirationGenerator({
  children,
}: React.PropsWithChildren) {
  const [index, setIndex] = useState(0);

  const inspiration = inspirations[index];

  console.log(inspiration);

  const handleSuffle = () => {
    setIndex(Math.floor(Math.random() * inspirations.length));
  };

  return (
    <>
      {inspiration.type === "quote" ? (
        <>
          <p>Your inspiration quote is: </p>
          <FancyText text={inspiration.value} author={inspiration.author} />
        </>
      ) : (
        <>
          <p>Your inspiration color is: </p>
          <Color value={inspiration.value} />
        </>
      )}

      <button onClick={handleSuffle} className="button-quote">
        New Quote
      </button>

      {children}
    </>
  );
}
