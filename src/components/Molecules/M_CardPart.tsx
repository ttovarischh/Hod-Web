import styled from "styled-components";
import { FlexBox, B_Text } from "../Common";
import A_Icon from "../Atoms/A_Icon";
import A_Tag from "../Atoms/A_Tag";
import M_StatSet from "./M_StatSet";

type BСProps = {
  info?: any;
  label?: any;
  ins?: boolean;
  inv?: boolean;
  perc?: boolean;
  langs?: boolean;
  small?: boolean;
  states?: boolean;
  playerName?: any;
  username?: any;
  handlePlusClick?: any;
};

const InfoFlexBox = styled(FlexBox)`
  width: calc(392px - 16px);
  background-color: ${({ theme }) => theme.input.fill};
  border-radius: 9px;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const PlayerInfo = styled.p`
  color: ${({ theme }) => theme.input.text};
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.011em;
  margin: 0;
`;

const FlyingLabel = styled.p`
  font-size: 11px;
  line-height: 11px;
  letter-spacing: -0.011em;
  color: ${({ theme }) => theme.input.placeholder};
  margin: 0;
`;

const IconWrapper = styled(FlexBox)`
  position: absolute;
  right: 12px;
  top: 11.5px;
`;

const Label = styled.p`
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.011em;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.input.placeholder};
  pointer-events: none;
  margin-bottom: 6px;
`;

const TagsScroll = styled(FlexBox)`
  gap: 6px;
  max-height: 35px;
  min-height: 35px;
  max-width: calc(100% - 16px);
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const NamesCifWrapper = styled(FlexBox)`
  flex-direction: column;
  justify-content: space-between;
  height: 201px;
  width: 232px;
`;

const NamesWrapper = styled(FlexBox)`
  margin-left: 20px;
  margin-top: 4px;
  flex-direction: column;
`;

const M_CardPart = ({
  info,
  label,
  ins,
  inv,
  perc,
  langs,
  small,
  states,
  playerName,
  username,
  handlePlusClick,
  ...rest
}: BСProps) => {
  if (playerName) {
    return (
      <NamesCifWrapper>
        <NamesWrapper>
          <B_Text color="#A4A4AC">{playerName}</B_Text>
          <B_Text color="#7C7C7C">{username}</B_Text>
        </NamesWrapper>
        <M_StatSet ins={ins} perc={perc} inv={inv} />
      </NamesCifWrapper>
    );
  }
  return (
    <InfoFlexBox
      style={{
        marginBottom: small ? 0 : langs ? 18 : 0,
        height: langs ? "auto" : 55,
        paddingTop: small ? 0 : langs ? 12 : 0,
        paddingLeft: small ? 0 : langs ? 16 : 16,
        paddingBottom: small ? 0 : langs ? 12 : 0,
        flexWrap: states ? "nowrap" : "wrap",
        gap: (states || langs) && small ? 6 : 2,
      }}
    >
      {!langs && !states && (
        <>
          <PlayerInfo>{info}</PlayerInfo>
          <FlyingLabel className="ppmedium">{label}</FlyingLabel>
        </>
      )}
      {langs && <Label className="ppmedium">Языки</Label>}
      {states && <Label className="ppmedium">Состояния</Label>}
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
      {states && (
        <TagsScroll>
          {info.length > 0 &&
            info.map((subinfo: any, index: any) => (
              <A_Tag language={langs} create={states} key={index}>
                {subinfo.name}
              </A_Tag>
            ))}
          <A_Tag plus handlePlusClick={handlePlusClick} />
        </TagsScroll>
      )}
      {langs && (
        <TagsScroll>
          {info.length > 0 &&
            info.map((subinfo: any, index: any) => (
              <A_Tag language={langs} create={states} key={index}>
                {subinfo}
              </A_Tag>
            ))}
        </TagsScroll>
      )}
    </InfoFlexBox>
  );
};

export default M_CardPart;
