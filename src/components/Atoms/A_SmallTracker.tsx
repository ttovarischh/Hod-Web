import styled from "styled-components";
import { FlexBox, J_Text, D_Text } from "../Common";

type Props = {
  turn: any;
};

const Wrapper = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
`;

const A_SmallTracker = ({ turn }: Props) => {
  return (
    <Wrapper>
      <D_Text>{turn}</D_Text>
      <J_Text>раунд</J_Text>
    </Wrapper>
  );
};

export default A_SmallTracker;
