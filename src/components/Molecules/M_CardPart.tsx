import React, { FC } from "react";
import styled from "styled-components";
import { FlexBox } from "../Common/FlexBox";
import A_Icon from "../Atoms/A_Icon";
import A_Tag from "../Atoms/A_Tag";

type BСProps = {
  info?: any;
  label?: any;
  ins?: boolean;
  inv?: boolean;
  perc?: boolean;
  langs?: boolean;
};

const InfoFlexBox = styled(FlexBox)`
  width: calc(392px - 16px);
  background-color: ${({ theme }) => theme.input.fill};
  border-radius: 9px;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  flex-wrap: wrap;
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
  max-width: calc(100% - 16px);
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const M_CardPart = ({
  info,
  label,
  ins,
  inv,
  perc,
  langs,
  ...rest
}: BСProps) => {
  return (
    <InfoFlexBox
      style={{
        marginBottom: langs ? 18 : 0,
        height: langs ? "auto" : 55,
        paddingTop: langs ? 12 : 0,
        paddingLeft: langs ? 16 : 16,
        paddingBottom: langs ? 12 : 0,
      }}
    >
      {!langs && (
        <>
          <PlayerInfo>{info}</PlayerInfo>
          <FlyingLabel className="ppmedium">{label}</FlyingLabel>
        </>
      )}
      {langs && <Label className="ppmedium">Языки</Label>}
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
      {langs && (
        <TagsScroll>
          {info.map((sublang: any, index: any) => (
            <A_Tag language key={index}>
              {sublang}
            </A_Tag>
          ))}
        </TagsScroll>
      )}
    </InfoFlexBox>
  );
};

export default M_CardPart;
