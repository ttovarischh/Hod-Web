import styled from "styled-components";
import { FlexBox, Panama, Large, Note } from "../components";
import A_Button from "../components/A_Button";

const HomeWrapper = styled(FlexBox)`
  width: 100%;
  height: calc(100vh - 176px);
  padding-left: 66px;
  padding-right: 66px;
  padding-top: 88px;
  padding-bottom: 88px;
  overflow: hidden;
  position: relative;
  direction: column;
  align-content: center;
`;

const PPWrapper = styled(FlexBox)`
  position: relative;
  width: 884px;
  padding-top: 85px;
  gap: 39px;
  margin-bottom: 88px;
`;

const MainImage = styled.div`
  position: absolute;
  background-size: 70vw 100vh;
  height: 100%;
  width: 1482px;
  height: 1080px;
  left: 438px;
  top: 0px;
  pointer-events: none;
`;

const BB = styled.button`
  padding: 0;
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #1a1a1a;
  margin: 0;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.button.fill};
  padding-left: 74px;
  padding-right: 74px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 10px;
  &:active {
    background-color: red;
  }
`;

const PrimaryButton = styled(FlexBox)`
  // background: #f0ff00;
  padding-left: 74px;
  padding-right: 74px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.button.fill};
`;

const SecondaryButton = styled(FlexBox)`
  border: 1px solid #f0ff00;
  padding-left: 74px;
  padding-right: 74px;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 10px;
`;

const ButtonText = styled.p`
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #1a1a1a;
  margin: 0;
`;

export default function Home() {
  return (
    <HomeWrapper>
      <PPWrapper>
        <Panama color="#4C4C4C">Ход Web</Panama>
        <Large color="white">
          Эта версия предназначена для тех мастеров, которые предпочитают вести
          игры с&nbsp;ноутбуком и&nbsp;им&nbsp;не&nbsp;удобно открывать Ход
          на&nbsp;телефоне.
        </Large>
        <Large color="white">
          Здесь невозможно выступить в&nbsp;роли игрока и&nbsp;присоединиться
          к&nbsp;существующей сесии
        </Large>
      </PPWrapper>

      <FlexBox direction="column" style={{ gap: 20 }}>
        <Note color="white">Чтобы начать игру надо войти в аккаунт:</Note>
        <FlexBox alignItems="center" style={{ gap: 42 }}>
          <A_Button solid handleButtonClick={() => console.log("Clicked")}>Войтииии</A_Button>
          <Note color="white">или</Note>
          <A_Button handleButtonClick={() => console.log("Clicked")}>Зарегестрироваться</A_Button>
          {/* <SecondaryButton>
            <ButtonText style={{ color: "#F0FF00" }} className="PPMeduim">
              Зарегестрироваться
            </ButtonText>
          </SecondaryButton> */}
        </FlexBox>
      </FlexBox>
      <MainImage
        style={{
          backgroundImage: "url(" + require("../images/dragon.png") + ")",
        }}
      ></MainImage>
    </HomeWrapper>
  );
}
