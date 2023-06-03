import styled from "styled-components";
import { FlexBox, B_Text, H_Text } from "../Common";
import A_Icon from "../Atoms/A_Icon";

type Props = {
  ru: any;
  eng: any;
  opacity?: any;
};

const TooltipWrapper = styled(FlexBox)`
  width: 267px;
  justify-content: center;
  position: absolute;
  z-index: 10003;
  bottom: 90px;
  left: -105px;
  transition: all 0.5s ease;
`;

const TooltipBody = styled(FlexBox)`
  flex-direction: column;
  width: 100%;
  background: #2520ff;
  border-radius: 10px;
  padding: 10px;
  gap: 4px;
`;

const M_Tooltip = ({ ru, eng, opacity }: Props) => {
  return (
    <TooltipWrapper style={{ opacity: opacity }}>
      <TooltipBody>
        <B_Text>{ru}</B_Text>
        <H_Text color="#A4A4AC">{eng}</H_Text>
      </TooltipBody>
      <A_Icon iconName="Tooltip" />
    </TooltipWrapper>
  );
};

export default M_Tooltip;
