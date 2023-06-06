import { useContext } from "react";
import styled from "styled-components";
import { FlexBox } from "../Common/FlexBox";
import { ThemeContext } from "styled-components";

type Props = {
  wide?: boolean;
  imagestring: any;
};

const WidePlayerAvatarWrapper = styled(FlexBox)`
  width: 100%;
  height: 150px;
  background: #0e0e0e;
  justify-content: flex-start;
`;

const WidePlayerAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PlayerAvatarWrapper = styled(FlexBox)`
  width: 166px;
  height: 201px;
  background: #0e0e0e;
  justify-content: flex-start;
  border-radius: 20px;
  overflow: hidden;
`;

const PlayerAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const A_Avatar = ({ wide, imagestring }: Props) => {
  const theme = useContext(ThemeContext);
  if (wide) {
    return (
      <WidePlayerAvatarWrapper>
        <WidePlayerAvatar src={`${imagestring}`} alt="new" />
      </WidePlayerAvatarWrapper>
    );
  }
  return (
    <PlayerAvatarWrapper>
      <PlayerAvatarWrapper>
        <PlayerAvatar src={`${imagestring}`} alt="new" />
      </PlayerAvatarWrapper>
    </PlayerAvatarWrapper>
  );
};

export default A_Avatar;
