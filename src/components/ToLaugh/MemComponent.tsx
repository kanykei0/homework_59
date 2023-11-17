import React from "react";
import { MemConf } from "../../type";

interface Props {
  jokes: MemConf[];
}

const MemComponent: React.FC<Props> = React.memo(({ jokes }) => {
  return (
    <>
      {jokes.map((joke, index) => (
        <div key={index} className="card my-3">
          <div className="card-body">{joke.value}</div>
        </div>
      ))}
    </>
  );
});

export default MemComponent;
