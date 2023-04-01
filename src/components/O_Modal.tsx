import React, { FC } from "react";
import styled from "styled-components";
import { FlexBox } from "./FlexBox";
import A_Button from "./A_Button";
import { Breadcrumb } from "./StyledFont";
import A_Icon from "./A_Icon";
import { Panama, Large } from "./StyledFont";
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
          <Large>
            Вся нужная информация сохранена, драконы отправлены в подземелья
            и всё готово к приключению. Карточки игроков будут в центре,
            а QR-код для присоединения в меню слева.
          </Large>
          <Large>
            Код сессии: {props.code}
          </Large>
        </PPWrapper>
        <FlexBox
          justifyContent="flex-end"
          style={{ width: "100%", marginTop: 65, marginBottom: 65 }}
        >
          <O_Tracker step="gamecreated">
            {/* <Link to="../game" state={{ code: code }}> */}
            <A_Button solid handleButtonClick={props.handleButtonCLick}>
              Продолжить
            </A_Button>
            {/* </Link> */}
          </O_Tracker>
        </FlexBox>
      </ModalWrapper>
    );
  }
  return <></>;
};

export default O_Modal;
