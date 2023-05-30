import React from "react";
import { FlexBox } from "../Common/FlexBox";
import { E_Text, F_Text } from "../Common";

type Props = {
  children: React.ReactNode;
  header: string;
};

const A_InactiveField = (props: Props) => {
  return (
    <FlexBox direction="column">
      <F_Text>{props.header}</F_Text>
      <E_Text>{props.children}</E_Text>
    </FlexBox>
  );
};

export default A_InactiveField;
