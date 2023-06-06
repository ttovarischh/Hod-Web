import styled from "styled-components";
import { FlexBox, A_Text } from "../Common";
import A_Icon from "./A_Icon";

type Props = {
  data?: any;
  activePlayerIndex?: any;
};

const Wrapper = styled(FlexBox)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(270deg, #0e0e0e 0%, rgba(14, 14, 14, 0) 100%);
`;

const TrackerFlexBox = styled(FlexBox)`
  position: relative;
  margin-left: 66px;
`;
const A_Tracker = ({ data, activePlayerIndex, ...rest }: Props) => {
  const renderPlayers = () => {
    const playersToShow = data.slice(activePlayerIndex, activePlayerIndex + 3);
    return playersToShow.map((player: any, index: any) => (
      <FlexBox key={index} style={{ gap: 15, marginRight: 15 }}>
        <A_Text key={player.id}>{player.name}</A_Text>
        <A_Icon width={19} height={19.5} iconName="smallArrow"></A_Icon>
      </FlexBox>
    ));
  };

  return (
    <TrackerFlexBox>
      {renderPlayers()}
      <Wrapper />
    </TrackerFlexBox>
  );
};

export default A_Tracker;
