import React, { useContext } from "react";
import styled from "styled-components";
import { FlexBox } from "../Common/FlexBox";
import { ThemeContext } from "styled-components";
import { H_Text } from "../Common";
import A_Icon from "./A_Icon";

type Props = {
  language?: boolean;
  children: React.ReactNode;
  create?: boolean;
  removeTag?: any;
};

const Wrapper = styled(FlexBox)`
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 4px;
`;

const LanguageTagWrapper = styled(Wrapper)`
  background: #383838;
  border-radius: 10px;
  flex-wrap: nowrap;
`;

const A_Tag = ({ language, children, create, removeTag, ...rest }: Props) => {
  const theme = useContext(ThemeContext);
  if (language) {
    return (
      <LanguageTagWrapper direction="row">
        <H_Text capitalize>{children}</H_Text>
        {create && (
          <div onClick={removeTag}>
            <A_Icon iconName="TagCross" />
          </div>
        )}
      </LanguageTagWrapper>
    );
  }
  return <Wrapper direction="column">{children}</Wrapper>;
};

export default A_Tag;
