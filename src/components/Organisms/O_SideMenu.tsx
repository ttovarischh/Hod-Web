import React from "react";
import styled from "styled-components";
import { FlexBox } from "../Common/FlexBox";
import A_Button from "../Atoms/A_Button";
import A_Icon from "../Atoms/A_Icon";
import { useEffect, useState } from "react";
import axios from "axios";
import { A_Text } from "../Common/StyledFont";
import A_Qr from "../Atoms/A_Qr";
import O_EffectCard from "./O_EffectCard";
import M_ListItem from "../Molecules/M_ListItem";
import M_Textarea from "../Molecules/M_Textarea";

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

const O_SideMenu = (props: SMProps) => {
  const [effectsData, setEffectsData] = useState<any[]>([]);
  const [selectedEffect, setSelectedEffect] = useState<any>(null);
  const [note, setNote] = useState("");

  const handleEffectClick = (effect: any) => {
    setSelectedEffect(effect);
  };

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setNote(value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/effects")
      .then(({ data }) => {
        setEffectsData(data);
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  }, []);

  const list = () => {
    return effectsData.map((effect) => {
      return (
        <M_ListItem effect={effect} handleEffectClick={handleEffectClick} />
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
            <A_Icon iconName="Chevrone" />
          </Chevrone>
        </ActionWrapper>
        <EffectsWrapper>
          <FlexBox style={{ marginLeft: 32, marginBottom: 20 }}>
            <A_Text color="#7C7C7C">Эффекты</A_Text>
          </FlexBox>
          {list()}
        </EffectsWrapper>
        {props.isLeftOpened && (
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
        right: props.isRightOpened ? 0 : -345,
        zIndex: 1001,
      }}
    >
      <ActionWrapper onClick={props.handleButtonCLick}>
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
          <A_Qr code={props.code} />
          <A_Button small solid handleButtonClick={props.handleButtonCLick}>
            Завершить сессию
          </A_Button>
        </FlexBox>
      </EffectsWrapper>
    </SMWrapper>
  );
};

export default O_SideMenu;
