import React from "react";
import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
};

const UnderlinedButtonLink = styled.a`
  text-decoration: underline;
  color: #7c7c7c !important;
  cursor: pointer;
  font-size: 18px;
  line-height: 22px;
  text-decoration-line: underline;
  transition: all 0.5s ease;
  margin-top: 24px;
  margin-bottom: 30px;
  &:hover {
    color: white !important;
  }
`;

const A_UnderlinedButton = (props: ButtonProps) => {
  return (
    <UnderlinedButtonLink className="ppbook">
      {props.children}
    </UnderlinedButtonLink>
  );
};

export default A_UnderlinedButton;
