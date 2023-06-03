import { FlexBox } from "../Common/FlexBox";
import A_Icon from "../Atoms/A_Icon";
import { K_Text } from "../Common";
import M_Tooltip from "./M_Tooltip";
import styled from "styled-components";
import { useState } from "react";

type Props = {
  stat: any;
  iconName: any;
};

const TooltipStatWrapper = styled(FlexBox)`
  position: relative;
`;

const M_MonsterAvatar = ({ stat, iconName }: Props) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  return (
    <TooltipStatWrapper>
      {iconName === "insight" && (
        <M_Tooltip
          opacity={isTooltipVisible ? 1 : 0}
          ru="Проницательность"
          eng="Insigt"
        />
      )}
      {iconName === "investigation" && (
        <M_Tooltip
          opacity={isTooltipVisible ? 1 : 0}
          ru="Расследование"
          eng="Investigation"
        />
      )}
      {iconName === "perception" && (
        <M_Tooltip
          opacity={isTooltipVisible ? 1 : 0}
          ru="Восприятие"
          eng="Perception"
        />
      )}

      <FlexBox
        direction="column"
        alignItems="center"
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseOut={() => setTooltipVisible(false)}
        style={{ cursor: "help" }}
      >
        <A_Icon width={24} iconName={iconName} fill="#A4A4AC" />
        <K_Text>{stat}</K_Text>
      </FlexBox>
    </TooltipStatWrapper>
  );
};

export default M_MonsterAvatar;
