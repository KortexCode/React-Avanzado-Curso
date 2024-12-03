import Tab from "./Tab";
import Tabs from "./Tabs";

export const CompoundComponents = () => {
  return (
    <Tabs>
      <Tab label={"Elf"}>
        🧝‍♀️
      </Tab>
      <Tab label={"Goblin"}>
        🧌
      </Tab>
      <Tab label={"Un-dead"}>
        🧟‍♂️
      </Tab>
      <Tab label={"Human"}>
        🤴
      </Tab>
    </Tabs>
  );
};
