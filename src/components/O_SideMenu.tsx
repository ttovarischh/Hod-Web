import React, { FC } from "react";
import styled from "styled-components";
import { FlexBox } from "./FlexBox";
import A_Button from "./A_Button";
import { Breadcrumb } from "./StyledFont";
import A_Icon from "./A_Icon";
import { Panama, Large } from "./StyledFont";
import O_Tracker from "./O_Tracker";
import { useEffect, useState } from "react";
import axios from "axios";
import { EffectText, SuperSmallText } from "./StyledFont";
import { CardText } from "./StyledFont";

type SMProps = {
  disabled?: boolean;
  children?: React.ReactNode;
  code?: string;
  handleButtonCLick?: any;
  isLeftOpened?: any;
  isRightOpened?: any;
  type?: string;
};

const SMWrapper = styled(FlexBox)`
  top: 0;
  position: absolute;
  height: 100%;
  flex-direction: column;
  transition: all 0.5s ease;
`;
const CodeText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin-top: 21px;
`;

const ActionWrapper = styled(FlexBox)`
  position: relative;
  width: 355px;
  height: 70px;
  justify-content: flex-end;
  background: #0e0e0e;
`;

const Chevrone = styled(FlexBox)`
  position: absolute;
  left: 100%;
  width: 62px;
  height: 70px;
  cursor: pointer;
`;

const ChevroneTwo = styled(FlexBox)`
  position: absolute;
  right: 100%;
  width: 62px;
  height: 70px;
  cursor: pointer;
`;

const EffectsWrapper = styled(FlexBox)`
  flex-direction: column;
  width: 355px;
  height: calc(100% - 70px);
  background: #0e0e0e;
`;

const EffectWrapper = styled(FlexBox)`
  gap: 14px;
  margin-left: 32px;
  margin-bottom: 14px;
  cursor: pointer;
`;

const Input = styled.textarea`
  width: 270px;
  height: 360px;
  background: #1c1c1c;
  border: 1px solid #262626;
  border-radius: 10px;
  padding: 12px;
`;

const O_SideMenu = (props: SMProps) => {
  const [effectsData, setEffectsData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/effects")
      .then(({ data }) => {
        setEffectsData(data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const list = () => {
    return effectsData.map((effect) => {
      return (
        <EffectWrapper key={effect.id}>
          <A_Icon iconName={effect.image}></A_Icon>
          <FlexBox direction="row">
            <EffectText>{effect.name}</EffectText>
            <FlexBox style={{ marginLeft: 1 }}>
              <SuperSmallText>&#40;{effect.id}&#41;</SuperSmallText>
            </FlexBox>
          </FlexBox>
        </EffectWrapper>
      );
    });
  };

  if (props.type == "left") {
    return (
      <SMWrapper
        style={{
          left: props.isLeftOpened ? 0 : -345,
          zIndex: 1001,
        }}
      >
        <ActionWrapper onClick={props.handleButtonCLick}>
          <Chevrone className="Chev">
            <svg
              width="62"
              height="70"
              viewBox="0 0 62 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H33.4603L62 35L33.4603 70H0V0Z" fill="#0E0E0E" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0171 24.8889V45.971C10.0058 46.0717 10 46.174 10 46.2777C10 47.7812 11.2188 49 12.7223 49H33.1281C33.6803 49 34.1281 48.5523 34.1281 48V46.3456V45L34.1285 22C34.1285 21.4477 33.6808 21 33.1285 21H13.906C11.7582 21 10.0171 22.7411 10.0171 24.8889ZM13.5171 23.7696C13.5171 23.1512 12.933 22.6793 12.45 23.0655C11.9152 23.4931 11.5727 24.151 11.5727 24.8889V42.789C11.5727 43.2645 12.0745 43.5555 12.55 43.5555V43.5555V43.5555C13.0841 43.5555 13.5171 43.1225 13.5171 42.5883V23.7696ZM31.8403 45C32.3113 45 32.5755 45.5424 32.2853 45.9132L32.2592 45.9466C32.1085 46.1392 32.1145 46.4113 32.2737 46.597V46.597C32.5591 46.93 32.3225 47.4444 31.8839 47.4444H12.7223C12.0779 47.4444 11.5556 46.9221 11.5556 46.2777C11.5556 45.6334 12.0779 45 12.7223 45H31.8403ZM21.3266 33.6712C20.2501 33.0825 18.8188 32.8129 16.983 32.8129C18.8188 32.8129 20.2501 32.5433 21.3266 31.9546C22.1056 31.5286 22.6988 30.9355 23.1248 30.1565C23.7135 29.08 23.9831 27.6486 23.9831 25.8128C23.9831 27.6486 24.2527 29.08 24.8414 30.1565C25.2674 30.9355 25.8605 31.5286 26.6396 31.9546C27.716 32.5433 29.1474 32.8129 30.9832 32.8129C29.1474 32.8129 27.716 33.0825 26.6396 33.6712C25.8605 34.0973 25.2674 34.6904 24.8414 35.4694C24.2527 36.5459 23.9831 37.9773 23.9831 39.813C23.9831 37.9773 23.7135 36.5459 23.1248 35.4694C22.6988 34.6904 22.1056 34.0973 21.3266 33.6712ZM22.3949 38.8135C22.4331 39.3644 22.8752 39.813 23.4275 39.813H23.9831H24.5387C25.0909 39.813 25.533 39.3644 25.5712 38.8135C25.6899 37.1011 26.123 36.123 26.7081 35.5379C27.2932 34.9528 28.2712 34.5197 29.9836 34.4011C30.5346 34.3629 30.9832 33.9208 30.9832 33.3685V32.8129V32.2574C30.9832 31.7051 30.5346 31.263 29.9836 31.2248C28.2712 31.1062 27.2932 30.673 26.7081 30.088C26.123 29.5029 25.6899 28.5248 25.5712 26.8124C25.533 26.2614 25.0909 25.8128 24.5387 25.8128H23.9831H23.4275C22.8752 25.8128 22.4331 26.2615 22.3949 26.8124C22.2763 28.5248 21.8432 29.5029 21.2581 30.088C20.673 30.673 19.695 31.1062 17.9826 31.2248C17.4316 31.263 16.983 31.7051 16.983 32.2574V32.8129V33.3685C16.983 33.9208 17.4316 34.3629 17.9826 34.4011C19.695 34.5197 20.673 34.9528 21.2581 35.5379C21.8432 36.123 22.2763 37.1011 22.3949 38.8135Z"
                fill="#7C7C7C"
              />
            </svg>
          </Chevrone>
        </ActionWrapper>
        <EffectsWrapper>
          <FlexBox style={{ marginLeft: 32, marginBottom: 20 }}>
            <CardText color="#7C7C7C">Эффекты</CardText>
          </FlexBox>
          {list()}
        </EffectsWrapper>
      </SMWrapper>
    );
  }
  return (
    <SMWrapper
      style={{
        right: props.isRightOpened ? 0 : -345,
        zIndex: 1001,
      }}
    >
      <ActionWrapper onClick={props.handleButtonCLick}>
        <ChevroneTwo className="Chev">
          <svg
            width="62"
            height="70"
            viewBox="0 0 62 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_546_28365)">
              <path
                d="M62 0H28.5397L-5.96046e-08 35L28.5397 70H62V0Z"
                fill="#0E0E0E"
              />
              <path
                d="M54 48V29.9319C54 29.4803 53.6973 29.0847 53.2614 28.9666L52.4749 28.7536C48.555 27.692 45.2437 25.0861 43.2878 21.5471C43.1046 21.2156 42.7607 21 42.382 21H37.618C37.2393 21 36.8954 21.2156 36.7122 21.5471C34.7563 25.0861 31.445 27.692 27.5251 28.7536L26.7386 28.9666C26.3027 29.0847 26 29.4803 26 29.9319V48C26 48.5523 26.4477 49 27 49H35.7781C36.3304 49 36.7781 48.5523 36.7781 48V47.4444V39.0002C36.7781 37.2206 38.2207 35.778 40.0003 35.778C41.7799 35.778 43.2225 37.2206 43.2225 39.0002V47.4444V48C43.2225 48.5523 43.6702 49 44.2225 49H53C53.5523 49 54 48.5523 54 48Z"
                fill="#7C7C7C"
              />
            </g>
            <defs>
              <clipPath id="clip0_546_28365">
                <rect width="62" height="70" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </ChevroneTwo>
      </ActionWrapper>
      <EffectsWrapper>
        <FlexBox style={{ alignSelf: "center" }}>
          <Input
            className="ppmedium"
            placeholder="Запишите все, что нужно!"
          ></Input>
        </FlexBox>
        <FlexBox
          justifyContent="center"
          style={{ width: 292, alignSelf: "center" }}
        >
          <FlexBox direction="column" justifyContent="center" alignItems="center" style={{marginTop: 54, marginBottom: 24}}>
            <A_Icon iconName="qr"></A_Icon>
            <CodeText className="ppmedium">{props.code}</CodeText>
          </FlexBox>
          <A_Button small solid handleButtonClick={props.handleButtonCLick}>
            Завершить сессию
          </A_Button>
        </FlexBox>
      </EffectsWrapper>
    </SMWrapper>
  );
};

export default O_SideMenu;
