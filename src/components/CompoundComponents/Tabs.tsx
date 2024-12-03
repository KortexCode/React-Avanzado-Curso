import React, { ReactElement, ReactNode, useState } from "react";
import classes from "./CompoundComponents.module.css";

interface TabsProps {
  children: ReactNode[];
}

const Tabs: React.FC<TabsProps> = ({children}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  } 
  //Sacamos todos los children en un array aparte con el objetivo de manejar dicho array con la lógica necesaria, además se valida si es realmente un elemento de React
  const tabElements = React.Children.toArray(children).filter((child): child is ReactElement => React.isValidElement(child));

  return (
    <div className={classes.Tabs}>
      <ul>
        {tabElements.map((child, index) => {
          return (
            <li key={child.props.label} className={`${index === activeIndex ? classes.TabActive : ""}`} onClick={() => handleTabClick(index)}>
              {child.props.label}
            </li>
          )
        })}
      </ul>
      <p className={`${classes.TabContent}`}>
        {tabElements[activeIndex]}
      </p>
    </div>
  );
};

export default Tabs;
