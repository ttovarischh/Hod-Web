import React from "react";
import styled from "styled-components";
import { FlexBox } from "../Common/FlexBox";
import { H_Text, B_Text } from "../Common";
import A_Icon from "./A_Icon";

type Props = {
  language?: boolean;
  children?: React.ReactNode;
  create?: boolean;
  removeTag?: any;
  plus?: boolean;
  handlePlusClick?: any;
};

const Wrapper = styled(FlexBox)`
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const TagWrapper = styled(Wrapper)`
  padding: 6px 20px;
  background: #383838;
  border-radius: 35px;
  flex-wrap: nowrap;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;

const LanguageTagWrapper = styled(Wrapper)`
  padding: 8px 12px;
  background: #383838;
  border-radius: 10px;
  flex-wrap: nowrap;
`;

const CrossWrapper = styled.div`
  cursor: pointer;
`;

const PlusIcon = styled(FlexBox)`
  cursor: pointer;
  background: #edf2dc;
  border-radius: 56px;
  width: 54.4px;
  height: 30px;
  justify-content: center;
  align-content: center;
  opacity: 0.5;
  transition: all 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;

const A_Tag = ({
  language,
  children,
  create,
  removeTag,
  plus,
  handlePlusClick,
  ...rest
}: Props) => {
  if (language) {
    return (
      <LanguageTagWrapper>
        <H_Text capitalize>{children}</H_Text>
        {create && (
          <CrossWrapper onClick={removeTag}>
            <A_Icon iconName="TagCross" />
          </CrossWrapper>
        )}
      </LanguageTagWrapper>
    );
  }
  if (plus) {
    return (
      <PlusIcon onClick={handlePlusClick}>
        <A_Icon iconName="TagPlus" />
      </PlusIcon>
    );
  }
  return (
    <TagWrapper>
      {create ? (
        <>
          <CrossWrapper onClick={removeTag}>
            <A_Icon fill="#7C7C7C" iconName="TagCross" />
          </CrossWrapper>
          <H_Text color="#EDF2DC">{children}</H_Text>
        </>
      ) : (
        <B_Text color="#EDF2DC">{children}</B_Text>
      )}
    </TagWrapper>
  );
};

export default A_Tag;
