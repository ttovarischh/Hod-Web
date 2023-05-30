import React, { FC } from "react";
import styled from "styled-components";
import { FlexBox } from "../Common/FlexBox";
import A_Button from "../Atoms/A_Button";
import { J_Text } from "../Common/StyledFont";
import A_Icon from "../Atoms/A_Icon";
import { Link } from "react-router-dom";

type ButtonProps = {
  step: string;
  disabled?: boolean;
  children?: React.ReactNode;
  code?: any;
  handleButtonClick?: any;
};

const TrackerWrapper = styled(FlexBox)`
  width: 292px;
  flex-direction: column;
  gap: 12px;
  align-self: flex-end;
  button {
    width: 292px !important;
  }
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
          <J_Text color="white">Создание персонажей</J_Text>
          <A_Icon iconName="smallArrow"></A_Icon>
          <J_Text color="#7C7C7C">Игра</J_Text>
        </TrackerHeader>
        <A_Button
          solid
          handleButtonClick={props.handleButtonClick}
          disabled={props.disabled}
        >
          Продолжить
        </A_Button>
        {props.disabled && (
          <J_Text color="#7C7C7C">
            Сначала надо создать хотя бы одного персонажа
          </J_Text>
        )}
      </TrackerWrapper>
    );
  } else if (props.step == "gamecreated") {
    return (
      <TrackerWrapper>
        <TrackerHeader>
          <J_Text color="#7C7C7C">Создание персонажей</J_Text>
          <A_Icon iconName="smallArrow"></A_Icon>
          <J_Text color="white">Игра</J_Text>
        </TrackerHeader>
        {props.children}
      </TrackerWrapper>
    );
  }
  return <></>;
};

export default O_Tracker;
