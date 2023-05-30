import React from "react";
import styled from "styled-components";
import type { InputHTMLAttributes } from "react";
import { FlexBox } from "../Common/FlexBox";
import A_Icon from "./A_Icon";
import A_Tag from "./A_Tag";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  name: string;
  type: string;
  placeholder: string;
  label: string;
  value?: any;
  perc?: boolean;
  ins?: boolean;
  inv?: boolean;
  languages?: boolean;
  tags?: any;
  handleCrossPress?: any;
  handleTextChange?: any;
  removeTag?: any;
}

// print('u r so hot (*__*' )')

const FlyingLabel = styled.label`
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.011em;
  position: absolute;
  left: 16px;
  top: 18px;
  margin: 0;
  padding: 0;
  transition: all 0.5s ease;
  color: ${({ theme }) => theme.input.placeholder};
  pointer-events: none;
`;

const Label = styled.label`
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.011em;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.input.placeholder};
  pointer-events: none;
  margin-bottom: 12px;
`;

const InputWrapper = styled.input`
  border: none;
  outline: none;
  padding-bottom: 16px;
  padding-left: 16px;
  width: 392px;
  height: 38px;
  background-color: ${({ theme }) => theme.input.fill};
  border-radius: 9px;
  color: ${({ theme }) => theme.input.text};
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.011em;
  ::placeholder {
    color: ${({ theme }) => theme.input.fill};
  }
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 40px #0e0e0e inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.input.text};
  }
  :focus {
    outline: 1px solid;
    outline-color: ${({ theme }) => theme.input.simple_border};
    label {
      font-size: 11px;
      line-height: 11px;
      letter-spacing: -0.011em;
      color: ${({ theme }) => theme.input.placeholder};
    }
  }
  &:not(:placeholder-shown) ~ label {
    font-size: 11px;
    line-height: 11px;
    letter-spacing: -0.011em;
    color: ${({ theme }) => theme.input.placeholder};
    top: 32px;
  }
`;

const InputFlexBox = styled(FlexBox)`
  .empty {
    outline: 1px solid;
    outline-color: ${({ theme }) => theme.input.err_border};
    color: ${({ theme }) => theme.input.err_text};
  }
  position: relative;
  :focus-within {
    label {
      font-size: 11px;
      line-height: 11px;
      letter-spacing: -0.011em;
      color: ${({ theme }) => theme.input.placeholder};
      top: 32px;
    }
  }
`;

const IconWrapper = styled(FlexBox)`
  position: absolute;
  right: 12px;
  top: 11.5px;
`;

const TextAreaFlexBox = styled(FlexBox)`
  position: relative;
  background-color: #0e0e0e;
  border-radius: 9px;
  padding-top: 12px;
  padding-left: 16px;
  padding-bottom: 12px;
  margin-bottom: 18px;
  max-width: 392px;
  &:focus-within {
    outline: 1px solid;
    outline-color: ${({ theme }) => theme.input.simple_border};
  }
`;

const PlayerRealInputWrapper = styled.input`
  border: none;
  height: 35px;
  background-color: ${({ theme }) => theme.input.fill};
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.011em;
  color: #383838;
  width: 120px;
  padding: 0;
  :focus {
    outline: none;
  }
`;

const TagsScroll = styled(FlexBox)`
  gap: 8px;
  max-height: 35px;
  max-width: calc(100% - 120px);
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: none; 
  -ms-overflow-style: none; 
  &::-webkit-scrollbar {
    display: none; 
  }
`;

const A_Input = ({
  name,
  type,
  placeholder,
  label,
  value,
  perc,
  ins,
  inv,
  languages,
  handleTextChange,
  tags,
  handleCrossPress,
  removeTag,
  ...rest
}: InputProps) => {
  if (languages) {
    return (
      <TextAreaFlexBox>
        <Label className="ppmedium">Языки</Label>
        <FlexBox
          style={{ width: "100%", maxWidth: "100%", flexWrap: "nowrap" }}
        >
          <TagsScroll style={{ marginRight: tags.length === 0 ? 0 : 6 }}>
            {tags.map((tag: any, index: any) => (
              <A_Tag create language removeTag={() => removeTag(index)} key={index}>
                {tag}
              </A_Tag>
            ))}
          </TagsScroll>
          <PlayerRealInputWrapper
            placeholder="Впишите..."
            value={value}
            autoCapitalize="none"
            autoComplete="off"
            onChange={(e) => handleTextChange(e.target.value)}
            {...rest}
          />
        </FlexBox>
      </TextAreaFlexBox>
    );
  }
  return (
    <InputFlexBox direction="column" style={{ gap: 10 }}>
      <InputWrapper
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        {...rest}
      ></InputWrapper>
      <FlyingLabel className="ppmedium">{label}</FlyingLabel>
      {perc && (
        <IconWrapper>
          <A_Icon iconName="perception"></A_Icon>
        </IconWrapper>
      )}
      {ins && (
        <IconWrapper>
          <A_Icon iconName="insight"></A_Icon>
        </IconWrapper>
      )}
      {inv && (
        <IconWrapper>
          <A_Icon iconName="investigation"></A_Icon>
        </IconWrapper>
      )}
    </InputFlexBox>
  );
};

export default A_Input;
