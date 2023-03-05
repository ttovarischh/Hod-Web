import React, { FC } from "react";
import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  solid?: boolean;
  handleButtonClick(): any;
  disabled?: boolean;
  small?: boolean;
};

const BigButton = styled.button`
  padding: 0;
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  margin: 0;
  border: none;
  outline: none;
  padding-left: 74px;
  padding-right: 74px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
`;

const SolidButton = styled(BigButton)`
  color: ${(props) =>
    props.disabled
      ? props.theme.button.filled_disabled_text
      : props.theme.button.filled_text};
  background: ${(props) =>
    props.disabled
      ? props.theme.button.disabled_fill
      : props.theme.button.fill};
  &:hover {
    background: ${(props) =>
      props.disabled
        ? props.theme.button.disabled_fill
        : props.theme.button.hover};
  }
  &:active {
    background: ${(props) =>
      props.disabled
        ? props.theme.button.disabled_fill
        : props.theme.button.press_filled};
  }
`;

const HollowButton = styled(BigButton)`
  color: ${(props) =>
    props.disabled
      ? props.theme.button.border_disabled_text
      : props.theme.button.border};
  background: transparent;
  border: 1px solid;
  border-color: ${(props) =>
    props.disabled
      ? props.theme.button.disabled_border
      : props.theme.button.border};
  &:hover {
    border-color: ${(props) =>
      props.disabled
        ? props.theme.button.disabled_border
        : props.theme.button.hover};
    color: ${(props) =>
      props.disabled
        ? props.theme.button.border_disabled_text
        : props.theme.button.border_hover_text};
  }
  &:active {
    background: ${(props) =>
      props.disabled ? "transparent" : props.theme.button.press_border};
    border-color: ${(props) =>
      props.disabled
        ? props.theme.button.disabled_border
        : "transparent"};
  }
`;

const A_Button = (props: ButtonProps) => {
  if (props.solid) {
    return (
      <SolidButton
        className="PPMeduim"
        onClick={props.disabled ? undefined : props.handleButtonClick}
        disabled={props.disabled}
      >
        {props.children}
      </SolidButton>
    );
  } else {
    return (
      <HollowButton
        className="PPMeduim"
        onClick={props.disabled ? undefined : props.handleButtonClick}
        disabled={props.disabled}
      >
        {props.children}
      </HollowButton>
    );
  }
  return <></>;
};

export default A_Button;
