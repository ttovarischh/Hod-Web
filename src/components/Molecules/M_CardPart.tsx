import styled from "styled-components";
import { FlexBox, B_Text } from "../Common";
import A_Icon from "../Atoms/A_Icon";
import A_Tag from "../Atoms/A_Tag";
import M_StatSet from "./M_StatSet";
import A_Toggle from "../Atoms/A_Toggle";
import A_Stat from "../Atoms/A_Stat";
import { useTranslation } from "react-i18next";

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
  toggleConc?: any;
  id?: any;
  conc?: any;
  code?: any;
  monster?: boolean;
  armor?: any;
  handleRemoveTag?: any;
};

const MonsterArmorImg = styled.div`
  position: absolute;
  background-size: contain;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center bottom;
  pointer-events: none;
`;

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

const MonsterArmorFlexBox = styled(FlexBox)`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 146px;
  right: 0px;
  justify-content: center;
  align-items: flex-end;
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

const NamesCifWrapper = styled(FlexBox)<{ monster?: boolean }>`
  flex-direction: column;
  justify-content: space-between;
  height: ${(props) => (props.monster ? "auto" : "201px")};
  margin-bottom: ${(props) => (props.monster ? "13px" : "0px")};
  width: 232px;
`;

const NamesWrapper = styled(FlexBox)<{ monster?: boolean }>`
  margin-left: ${(props) => (props.monster ? "0px" : "20px")};
  margin-top: ${(props) => (props.monster ? "14px" : "4px")};
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
  toggleConc,
  id,
  conc,
  code,
  monster,
  armor,
  handleRemoveTag,
  ...rest
}: BСProps) => {
  const { t } = useTranslation();
  if (playerName) {
    return (
      <NamesCifWrapper monster={monster}>
        <NamesWrapper monster={monster}>
          <B_Text color="#A4A4AC">{playerName}</B_Text>
          {!monster && <B_Text color="#7C7C7C">{username}</B_Text>}
        </NamesWrapper>
        {!monster && <M_StatSet ins={ins} perc={perc} inv={inv} />}
      </NamesCifWrapper>
    );
  }
  if (toggleConc) {
    return (
      <FlexBox alignItems="center" style={{ gap: 12 }}>
        <A_Toggle monster={monster} playerId={id} active={conc} code={code} />
        <Label style={{ marginBottom: 0 }} className="ppmedium">
          {t("common:conc")}
        </Label>
      </FlexBox>
    );
  }
  if (armor) {
    return (
      <MonsterArmorFlexBox>
        <MonsterArmorImg
          style={{
            backgroundImage:
              "url(" + require("../../images/monsterAvatar.png") + ")",
          }}
        />
        <FlexBox style={{ marginBottom: 10 }}>
          <A_Stat iconName="ArmorIcon" stat={armor} />
        </FlexBox>
      </MonsterArmorFlexBox>
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
      {langs && <Label className="ppmedium">{t("common:langs")}</Label>}
      {states && <Label className="ppmedium">{t("common:states")}</Label>}
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
              <A_Tag
                language={langs}
                create={states}
                key={index}
                removeTag={() => handleRemoveTag(subinfo.id)}
              >
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
