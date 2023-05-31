import React from "react";
import styled from "styled-components";
import { FlexBox } from "../Common/FlexBox";
import A_Button from "../Atoms/A_Button";
import { J_Text } from "../Common/StyledFont";
import M_TrackLine from "../Molecules/M_TrackLine";

type ButtonProps = {
  step?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  code?: any;
  handleButtonClick?: any;
  buttonText?: any;
  offsetRight?: any;
  header?: boolean;
  one?: any;
  two?: any;
  three?: any;
  active?: any;
  note?: any;
  offsetBottom?: any;
};

const TrackerWrapper = styled(FlexBox)`
  width: 292px;
  flex-direction: column;
  gap: 12px;
  align-self: flex-end;
  button {
    width: 292px !important;
  }
  z-index: 10001;
`;

const O_Tracker = (props: ButtonProps) => {
  return (
    <TrackerWrapper
      style={{
        marginRight: props.offsetRight ? props.offsetRight : 0,
      }}
    >
      {props.header && (
        <M_TrackLine
          active={props.active}
          one={props.one}
          two={props.two}
          three={props.three}
        />
      )}
      <A_Button
        solid
        handleButtonClick={props.handleButtonClick}
        disabled={props.disabled}
      >
        {props.buttonText}
      </A_Button>
      {props.note && props.disabled && (
        <J_Text color="#7C7C7C">{props.note}</J_Text>
      )}
    </TrackerWrapper>
  );
};

export default O_Tracker;
