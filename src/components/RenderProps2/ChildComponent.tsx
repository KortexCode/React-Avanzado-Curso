
import React from "react";

type ChildComponentProps = {
  data: string[],
}

const ChildComponent: React.FC<ChildComponentProps> = ({data}) => {
  return (
    <>
      {data.map((item) => <li key={item}>{item}</li>)}
    </>
  );
};

export default ChildComponent;

