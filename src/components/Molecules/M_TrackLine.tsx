import styled from "styled-components";
import { FlexBox, J_Text } from "../Common";
import A_Icon from "../Atoms/A_Icon";

type Props = {
  one?: any;
  two?: any;
  three?: any;
  active?: any;
};

const TrackerHeader = styled(FlexBox)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const M_TrackLine = ({ one, two, three, active }: Props) => {
  return (
    <TrackerHeader>
      <J_Text color={active === "one" ? "white" : "#7C7C7C"}>{one}</J_Text>
      {two && (
        <>
          <A_Icon iconName="smallArrow"></A_Icon>
          <J_Text color={active === "two" ? "white" : "#7C7C7C"}>{two}</J_Text>
        </>
      )}
      <A_Icon iconName="smallArrow"></A_Icon>
      <J_Text color={active === "three" ? "white" : "#7C7C7C"}>{three}</J_Text>
    </TrackerHeader>
  );
};

export default M_TrackLine;
