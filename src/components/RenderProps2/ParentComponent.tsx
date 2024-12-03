import React, { useState } from "react";

interface ParentComponentProps {
    render: (data: string[]) => React.ReactNode;
}


const ParentComponent: React.FC<ParentComponentProps> = ({render}) => {
    const [data] = useState<string[]>(["Elf🧝‍♂️", "Un-Dead💀","Nocturne🧛‍♂️", "Human Mage🧙‍♂️", "Human Assasing🥷","Human Warrior🤴"])

    return (
    <>
        <h1>Choose a charactert</h1>
        <ul>{render(data)}</ul>
    </>)
};

export default ParentComponent;