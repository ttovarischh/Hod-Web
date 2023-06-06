import styled from "styled-components";
import { FlexBox } from "../Common/FlexBox";
import { J_Text } from "../Common/StyledFont";
import { useTranslation } from "react-i18next";

const BCWrapper = styled(FlexBox)`
  width: 100%;
  height: 24px;
  gap: 8px;
  cursor: pointer;
  margin-top: 100px;
`;

const M_J_Text = (props: any) => {
  const { t } = useTranslation();
  return (
    <BCWrapper>
      <J_Text color="#7C7C7C">←</J_Text>
      <J_Text color="#7C7C7C">{t("common:back")}</J_Text>
    </BCWrapper>
  );
};

export default M_J_Text;
