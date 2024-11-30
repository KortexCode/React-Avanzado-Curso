import ParentComponent from "./ParentComponent";

export const RenderProps2 = () => {
  return (
    <div>
      <ParentComponent render={(data)=> data.map((item, index) => {
        return <li key={index}>{item}</li>
      })}>
        
      </ParentComponent>
    </div>
  );
};
