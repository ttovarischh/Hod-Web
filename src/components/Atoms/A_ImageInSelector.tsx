import React from "react";
import styled from "styled-components";
import { FlexBox } from "../Common/FlexBox";

type Props = {
  src: any;
};

const AvatarWrapper = styled(FlexBox)`
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

const Avatar = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const A_ImageInSelector = ({ src, ...rest }: Props) => {
  return (
    <AvatarWrapper>
      <Avatar src={src} alt="avatar" />
    </AvatarWrapper>
  );
};

export default A_ImageInSelector;
