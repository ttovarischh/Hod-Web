import React, { FC } from "react";
import styled from "styled-components";
import { FlexBox } from "../Common/FlexBox";
import A_Button from "../Atoms/A_Button";
import { Panama, D_Text } from "../Common/StyledFont";
import O_Tracker from "./O_Tracker";

type ButtonProps = {
  step: string;
  disabled?: boolean;
  children?: React.ReactNode;
  code?: string;
  handleButtonCLick?: any;
};

const ModalWrapper = styled(FlexBox)`
  width: calc(100% - 132px);
  height: calc(100% - 160px);
  position: absolute;
  z-index: 1000;
  justify-content: flex-end;
  flex-direction: column;
  background: black;
  padding-left: 66px;
  padding-right: 132px;
  margin-top: 16px;
`;

const PPWrapper = styled(FlexBox)`
  position: relative;
  width: 884px;
  padding-top: 85px;
  gap: 39px;
`;

const O_Modal = (props: ButtonProps) => {
  if (props.step == "gamecreated") {
    return (
      <ModalWrapper>
        <PPWrapper>
          <Panama>Готово</Panama>
          <D_Text>
            Вся нужная информация сохранена, драконы отправлены в подземелья
            и всё готово к приключению. Карточки игроков будут в центре,
            а QR-код для присоединения в меню слева.
          </D_Text>
          <D_Text>Код сессии: {props.code}</D_Text>
        </PPWrapper>
        <FlexBox
          justifyContent="flex-end"
          style={{ width: "100%", marginTop: 65, marginBottom: 65 }}
        >
          <O_Tracker
            header
            one="Создание персонажей"
            three="Игра"
            handleButtonClick={props.handleButtonCLick}
            active="three"
            buttonText="Продолжить"
          />
        </FlexBox>
      </ModalWrapper>
    );
  }
  return <></>;
};

export default O_Modal;
