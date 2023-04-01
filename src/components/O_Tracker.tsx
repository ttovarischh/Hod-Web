import React, { FC } from "react";
import styled from "styled-components";
import { FlexBox } from "./FlexBox";
import A_Button from "./A_Button";
import { Breadcrumb } from "./StyledFont";
import A_Icon from "./A_Icon";

type ButtonProps = {
  step: string;
  disabled?: boolean;
  children?: React.ReactNode;
};

const TrackerWrapper = styled(FlexBox)`
  width: 292px;
  flex-direction: column;
  gap: 12px;
  align-self: flex-end;
`;

const TrackerHeader = styled(FlexBox)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const O_Tracker = (props: ButtonProps) => {
  if (props.step == "gamecreation") {
    return (
      <TrackerWrapper>
        <TrackerHeader>
          <Breadcrumb color="white">Создание персонажей</Breadcrumb>
          <A_Icon iconName="smallArrow"></A_Icon>
          <Breadcrumb color="#7C7C7C">Игра</Breadcrumb>
        </TrackerHeader>
        {props.children}
      </TrackerWrapper>
    );
  } else if (props.step == "gamecreated") {
    return (
      <TrackerWrapper>
      <TrackerHeader>
        <Breadcrumb color="#7C7C7C">Создание персонажей</Breadcrumb>
        <A_Icon iconName="smallArrow"></A_Icon>
        <Breadcrumb color="white">Игра</Breadcrumb>
      </TrackerHeader>
      {props.children}
    </TrackerWrapper>
    )
  }
  return <></>;
};

export default O_Tracker;
