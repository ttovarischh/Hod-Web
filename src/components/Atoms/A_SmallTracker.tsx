import styled from "styled-components";
import { FlexBox, J_Text, D_Text } from "../Common";
import { useTranslation } from "react-i18next";

type Props = {
  turn: any;
};

const Wrapper = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
`;

const A_SmallTracker = ({ turn }: Props) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <D_Text>{turn}</D_Text>
      <J_Text>{t("common:turn")}</J_Text>
    </Wrapper>
  );
};

export default A_SmallTracker;
