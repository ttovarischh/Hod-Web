import React, { FC } from "react";
import styled from "styled-components";
import type { InputHTMLAttributes } from "react";
import { HeaderFooter } from "./StyledFont";
import { FlexBox } from "./FlexBox";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
  type: string;
  placeholder: string;
  label: string;
}

const InputWrapper = styled.input`
  border: none;
  outline: none;
  padding-top: 8px;
  padding-bottom: 9px;
  padding-left: 14px;
  width: 392px;
  background: #151516;
  border-radius: 9px;
  color: white;
  ::placeholder {
    color: #ffffff;
    opacity: 0.1;
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 40px #151516 inset !important;
    -webkit-text-fill-color: white !important;
  }
`;

const A_Input = ({ name, type, placeholder, label, ...rest }: InputProps) => {
  return (
    <FlexBox direction="column" style={{ gap: 10 }}>
      <HeaderFooter color="#A4A4AC">{label}</HeaderFooter>
      <InputWrapper
        name={name}
        type={type}
        placeholder={placeholder}
        {...rest}
      ></InputWrapper>
    </FlexBox>
  );
};

export default A_Input;
