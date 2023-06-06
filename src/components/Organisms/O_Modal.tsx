import styled from "styled-components";
import { FlexBox } from "../Common/FlexBox";
import { Panama, D_Text } from "../Common/StyledFont";
import O_Tracker from "./O_Tracker";
import M_J_Text from "../Molecules/M_BreadCrumb";

type ButtonProps = {
  code?: string;
  handleButtonCLick?: any;
  header: any;
  textA: any;
  textB?: any;
  one: any;
  three: any;
  buttonText: any;
};

const ModalWrapper = styled(FlexBox)`
  width: calc(100% - 132px);
  height: calc(100% - 160px);
  position: absolute;
  z-index: 1000;
  justify-content: space-between;
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

const O_Modal = ({
  code,
  handleButtonCLick,
  header,
  textA,
  textB,
  one,
  three,
  buttonText,
}: ButtonProps) => {
  return (
    <ModalWrapper>
      {!textB && <M_J_Text>Назад</M_J_Text>}
      <PPWrapper style={{ marginTop: textB ? 56 : 0 }}>
        <Panama>{header}</Panama>
        <D_Text>{textA}</D_Text>
        {textB && (
          <D_Text>
            {textB} {code}
          </D_Text>
        )}
      </PPWrapper>
      <FlexBox
        justifyContent="flex-end"
        style={{ width: "100%", marginTop: 65, marginBottom: textB ? 65 : 0 }}
      >
        <O_Tracker
          header
          one={one}
          three={three}
          handleButtonClick={handleButtonCLick}
          active="three"
          buttonText={buttonText}
        />
      </FlexBox>
    </ModalWrapper>
  );
};

export default O_Modal;
