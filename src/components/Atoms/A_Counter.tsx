import React, { useContext } from "react";
import styled from "styled-components";
import { FlexBox } from "../Common/FlexBox";
import { ThemeContext } from "styled-components";
import { Big_Panama, D_Text } from "../Common";

type Props = {
  children: React.ReactNode;
  header: string;
};

const CountFlexbox = styled(FlexBox)``;

const A_Counter = (props: Props) => {
  const theme = useContext(ThemeContext);
  return (
    <CountFlexbox direction="column">
      <Big_Panama>{props.children}</Big_Panama>
      <D_Text color={theme.text.grey}>{props.header}</D_Text>
    </CountFlexbox>
  );
};

export default A_Counter;
