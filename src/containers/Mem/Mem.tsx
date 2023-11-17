import { useState, useEffect } from "react";
import MemComponent from "../../components/ToLaugh/MemComponent";
import MemBtn from "../../components/ToLaugh/MemBtn";
import { MemConf } from "../../type";

const URL = "https://api.chucknorris.io/jokes/random";

const Mem = () => {
  const [mem, setMem] = useState<MemConf[]>([]);

  const getMem = async (amount: number) => {
    let memsArr: MemConf[] = [];

    for (let i = 0; i < amount; i++) {
      const response = await fetch(URL);

      if (response.ok) {
        const data: MemConf = await response.json();
        memsArr.push(data);
      }
    }
    setMem(memsArr);
  };

  useEffect(() => {
    void getMem(5);
  }, []);

  return (
    <>
      <h2 className="my-5">Mems</h2>
      <div className="card my-5">
        <div className="card-body">
          <MemComponent jokes={mem} />
          <MemBtn onClick={(amount: number) => getMem(amount)} />
        </div>
      </div>
    </>
  );
};

export default Mem;
