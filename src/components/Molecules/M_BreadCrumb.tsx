import React, { FC } from "react";
import styled from "styled-components";
import { FlexBox } from "../Common/FlexBox";
import A_Button from "../Atoms/A_Button";
import { J_Text } from "../Common/StyledFont";
import A_Icon from "../Atoms/A_Icon";

type BСProps = {
  children?: React.ReactNode;
};

const BCWrapper = styled(FlexBox)`
  width: 100%;
  height: 24px;
  gap: 8px;
  cursor: pointer;
`;

const M_J_Text = (props: BСProps) => {
  return (
    <BCWrapper>
        <J_Text color="#7C7C7C">←</J_Text>
        <J_Text color="#7C7C7C">{props.children}</J_Text>
    </BCWrapper>
  );
};

export default M_J_Text;
