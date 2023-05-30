import styled from "styled-components";
import { FlexBox, B_Text, G_Text } from "../Common";
import A_Icon from "../Atoms/A_Icon";

type Props = {
  effect: {
    id: any;
    name: any;
    image: any;
  };
  handleEffectClick: any;
};

const EffectWrapper = styled(FlexBox)`
  gap: 14px;
  margin-left: 32px;
  margin-bottom: 14px;
  cursor: pointer;
`;

const M_ListItem = ({ effect, handleEffectClick }: Props) => {
  return (
    <EffectWrapper key={effect.id} onClick={() => handleEffectClick(effect)}>
      <A_Icon iconName={effect.image}></A_Icon>
      <FlexBox direction="row">
        <B_Text>{effect.name}</B_Text>
        <FlexBox style={{ marginLeft: 1 }}>
          <G_Text>&#40;{effect.id}&#41;</G_Text>
        </FlexBox>
      </FlexBox>
    </EffectWrapper>
  );
};

export default M_ListItem;
