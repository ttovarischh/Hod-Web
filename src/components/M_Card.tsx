import React from "react";
import styled from "styled-components";
import { FlexBox } from "./FlexBox";
import { CardText } from "./StyledFont";
import A_Icon from "./A_Icon";

type CardProps = {
  children: React.ReactNode;
  type?: string;
  imagestring?: any;
  playerName?: string;
  userName?: any;
  perc?: any;
  ins?: any;
  inv?: any;
};

const CardWrapper = styled(FlexBox)``;

const SmallCardWrapper = styled(FlexBox)`
  flex-direction: column;
  background: #0e0e0e;
  border-radius: 20px;
  overflow: hidden;
  width: 420px;
`;

const InputsWrapper = styled(FlexBox)`
  background-color: #1c1c1e;
  padding-bottom: 20px;
  border-radius: 20px;
  overflow: hidden;
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

const BottomStates = styled(FlexBox)`
  padding: 12px;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const StatesWrapper = styled(FlexBox)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 12px;
`;

const States = styled(FlexBox)``;

const PlusIcon = styled(FlexBox)`
  background: #edf2dc;
  border-radius: 56px;
  width: 54.4px;
  height: 30px;
  justify-content: center;
  align-content: center;
`;

const Lang = styled(FlexBox)`
  padding: 8px 12px;
  background: #383838;
  border-radius: 10px;
  justify-content: center;
  align-content: center;
`;

const M_Card = (props: CardProps) => {
  if (props.type == "chCreate") {
    return (
      <CardWrapper>
        <InputsWrapper>{props.children}</InputsWrapper>
      </CardWrapper>
    );
  } else if (props.type == "chGet") {
    return (
      <CardWrapper>
        <InputsWrapper>{props.children}</InputsWrapper>
      </CardWrapper>
    );
  } else if (props.type == "gameMode") {
    return (
      <SmallCardWrapper>
        <FlexBox
          style={{
            gap: 2,
            padding: 6,
            paddingRight: 14,
            background: "#1c1c1c",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <PlayerAvatarWrapper>
            <PlayerAvatar src={`${props.imagestring}`} alt="new" />
          </PlayerAvatarWrapper>
          <FlexBox
            direction="column"
            justifyContent="space-between"
            style={{ height: 201, width: 232 }}
          >
            <FlexBox
              style={{ marginLeft: 20, marginTop: 4 }}
              direction="column"
            >
              <p
                className="ppmedium"
                style={{
                  fontSize: 20,
                  lineHeight: "24px",
                  margin: 0,
                  color: "#A4A4AC",
                }}
              >
                {props.playerName}
              </p>
              <p
                className="ppmedium"
                style={{
                  fontSize: 20,
                  lineHeight: "24px",
                  margin: 0,
                  color: "#7C7C7C",
                }}
              >
                {props.userName}
              </p>
            </FlexBox>
            <FlexBox
              justifyContent="space-between"
              style={{ marginLeft: 20, alignItems: "baseline", width: "90%" }}
            >
              <FlexBox direction="column" alignItems="center">
                <A_Icon iconName="investigation" fill="#A4A4AC" />
                <p
                  className="ppbook"
                  style={{
                    fontSize: 48,
                    lineHeight: "58px",
                    margin: 0,
                    marginTop: 1,
                    color: "white",
                  }}
                >
                  {props.inv}
                </p>
              </FlexBox>
              <FlexBox direction="column">
                <FlexBox style={{ alignSelf: "center", justifySelf: "center" }}>
                  <A_Icon iconName="perception" fill="#A4A4AC" />
                </FlexBox>
                <p
                  className="ppbook"
                  style={{
                    fontSize: 48,
                    lineHeight: "58px",
                    margin: 0,
                    marginTop: 1,
                    color: "white",
                  }}
                >
                  {props.perc}
                </p>
              </FlexBox>
              <FlexBox direction="column" alignItems="center">
                <A_Icon iconName="insight" fill="#A4A4AC" />
                <p
                  className="ppbook"
                  style={{
                    fontSize: 48,
                    lineHeight: "58px",
                    margin: 0,
                    marginTop: 1,
                    color: "white",
                  }}
                >
                  {props.ins}
                </p>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <BottomStates>
          <StatesWrapper>
            <CardText>Состояния</CardText>
            <States>
              <PlusIcon>
                <p
                  className="ppmedium"
                  style={{
                    fontSize: 30,
                    lineHeight: "14px",
                    color: "#1A1A1A",
                  }}
                >
                  +
                </p>
              </PlusIcon>
            </States>
          </StatesWrapper>
          <StatesWrapper style={{ marginTop: 24 }}>
            <CardText>Языки</CardText>
            <States style={{gap: 6}}>
              {props.children}
            </States>
          </StatesWrapper>
        </BottomStates>
      </SmallCardWrapper>
    );
  }
  return <></>;
};

export default M_Card;
