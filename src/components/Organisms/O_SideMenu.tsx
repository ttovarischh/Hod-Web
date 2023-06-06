import React, { useState } from "react";
import styled from "styled-components";
import { FlexBox, A_Text } from "../Common";
import A_Button from "../Atoms/A_Button";
import A_Icon from "../Atoms/A_Icon";
import A_Qr from "../Atoms/A_Qr";
import O_EffectCard from "./O_EffectCard";
import M_ListItem from "../Molecules/M_ListItem";
import M_Textarea from "../Molecules/M_Textarea";
import { useTranslation } from "react-i18next";

type SMProps = {
  disabled?: boolean;
  children?: React.ReactNode;
  code?: string;
  handleButtonCLick?: any;
  isLeftOpened?: any;
  isRightOpened?: any;
  type?: string;
  effectsData?: any;
  handleFinishSession?: any;
};

const SMWrapper = styled(FlexBox)`
  top: 0;
  position: absolute;
  height: 100%;
  flex-direction: column;
  transition: all 0.5s ease;
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
  flex-flow: column;
`;

const O_SideMenu = ({
  disabled,
  children,
  code,
  handleButtonCLick,
  isLeftOpened,
  isRightOpened,
  type,
  effectsData,
  handleFinishSession,
}: SMProps) => {
  const [selectedEffect, setSelectedEffect] = useState<any>(null);
  const [note, setNote] = useState("");
  const { t } = useTranslation();

  const handleEffectClick = (effect: any) => {
    setSelectedEffect(effect);
  };

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setNote(value);
  };

  const list = () => {
    return effectsData?.map((effect: any, index: any) => {
      return (
        <M_ListItem
          key={index}
          effect={effect}
          handleEffectClick={handleEffectClick}
        />
      );
    });
  };

  if (type == "left") {
    return (
      <SMWrapper
        style={{
          left: isLeftOpened ? 0 : -345,
          zIndex: 1001,
        }}
      >
        <ActionWrapper onClick={handleButtonCLick}>
          <Chevrone className="Chev">
            <A_Icon iconName="Chevrone" />
          </Chevrone>
        </ActionWrapper>
        <EffectsWrapper>
          <FlexBox style={{ marginLeft: 32, marginBottom: 20 }}>
            <A_Text color="#7C7C7C">{t("common:effects")}</A_Text>
          </FlexBox>
          {list()}
        </EffectsWrapper>
        {isLeftOpened && (
          <O_EffectCard
            effect={selectedEffect}
            handleCloseModal={() => setSelectedEffect(null)}
          />
        )}
      </SMWrapper>
    );
  }
  return (
    <SMWrapper
      style={{
        right: isRightOpened ? 0 : -345,
        zIndex: 1001,
      }}
    >
      <ActionWrapper onClick={handleButtonCLick}>
        <ChevroneTwo className="Chev">
          <A_Icon iconName="ChevroneTwo" />
        </ChevroneTwo>
      </ActionWrapper>
      <EffectsWrapper>
        <M_Textarea handleInputChange={handleInputChange} value={note} />
        <FlexBox
          justifyContent="center"
          style={{ width: 292, alignSelf: "center" }}
        >
          <A_Qr code={code} />
          <A_Button small solid handleButtonClick={handleFinishSession}>
            {t("common:end")}
          </A_Button>
        </FlexBox>
      </EffectsWrapper>
    </SMWrapper>
  );
};

export default O_SideMenu;
