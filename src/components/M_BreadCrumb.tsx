import React, { FC } from "react";
import styled from "styled-components";
import { FlexBox } from "./FlexBox";
import A_Button from "./A_Button";
import { Breadcrumb } from "./StyledFont";
import A_Icon from "./A_Icon";

type BСProps = {
  children?: React.ReactNode;
};

const BCWrapper = styled(FlexBox)`
  width: 100%;
  height: 24px;
  gap: 8px;
  cursor: pointer;
`;

const M_BreadCrumb = (props: BСProps) => {
  return (
    <BCWrapper>
        <Breadcrumb color="#7C7C7C">←</Breadcrumb>
        <Breadcrumb color="#7C7C7C">{props.children}</Breadcrumb>
    </BCWrapper>
  );
};

export default M_BreadCrumb;
