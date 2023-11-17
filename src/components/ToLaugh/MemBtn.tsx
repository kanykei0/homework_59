import React from "react";

interface Props {
  onClick: (amount: number) => void;
}

const MemBtn: React.FC<Props> = React.memo(({ onClick }) => {
  return (
    <button onClick={() => onClick(5)} className="btn btn-success">
      memchiki
    </button>
  );
});

export default MemBtn;
