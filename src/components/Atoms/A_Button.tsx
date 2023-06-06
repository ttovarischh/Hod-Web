import React from "react";
import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  solid?: boolean;
  handleButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  small?: boolean;
  warning?: boolean;
  secondary?: boolean;
  tracker?: boolean;
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
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.5s ease;
  min-width: 257px;
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

const SmallButton = styled(SolidButton)`
  padding: 0;
  padding-top: 10px;
  padding-bottom: 10px;
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
      props.disabled ? props.theme.button.disabled_border : "transparent"};
  }
`;

const SmallHollowButton = styled(HollowButton)`
  padding: 0;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const RedHollowButton = styled(BigButton)`
  color: ${(props) =>
    props.disabled ? props.theme.button.border_disabled_text : "#FF4040"};
  background: transparent;
  border: 1px solid;
  border-color: ${(props) =>
    props.disabled ? props.theme.button.disabled_border : "#FF4040"};
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.5;
  }
`;

const A_Button = (props: ButtonProps) => {
  if (props.secondary && !props.tracker) {
    return (
      <HollowButton
        className="PPMeduim"
        onClick={props.disabled ? undefined : props.handleButtonClick}
        disabled={props.disabled}
      >
        {props.children}
      </HollowButton>
    );
  } else if (props.tracker && props.secondary) {
    return (
      <SmallHollowButton
        className="PPMeduim"
        onClick={props.disabled ? undefined : props.handleButtonClick}
        disabled={props.disabled}
      >
        {props.children}
      </SmallHollowButton>
    );
  }
  if (props.warning) {
    return (
      <RedHollowButton
        className="PPMeduim"
        onClick={props.disabled ? undefined : props.handleButtonClick}
        disabled={props.disabled}
      >
        {props.children}
      </RedHollowButton>
    );
  }
  if (props.tracker) {
    return (
      <SmallButton
        className="PPMeduim"
        onClick={props.disabled ? undefined : props.handleButtonClick}
        disabled={props.disabled}
      >
        {props.children}
      </SmallButton>
    );
  }
  return (
    <SolidButton
      className="PPMeduim"
      onClick={props.disabled ? undefined : props.handleButtonClick}
      disabled={props.disabled}
    >
      {props.children}
    </SolidButton>
  );
};

export default A_Button;
