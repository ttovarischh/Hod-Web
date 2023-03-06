import styled from "styled-components";
import { FlexBox, Panama, Large, Note } from "../components";
import A_Button from "../components/A_Button";
import { Link } from "react-router-dom";
import useAuth from "../authContext/useAuth";

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

export default function Home() {
  // async function getCurrentUser() {
  //   const value = localStorage.getItem("@AuthData");
  //   console.log(value);
  // }
  const { user, logout } = useAuth();

  const getCurrentUser = () => {
    logout(user!.email);
  };

  return (
    <HomeWrapper>
      <PPWrapper>
        <Panama color="#4C4C4C">Ход Web</Panama>
        {user && <Large color="white">Hello, {user!.username}</Large>}
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
      {!user ? (
        <FlexBox direction="column" style={{ gap: 20 }}>
          <Note color="white">Чтобы начать игру надо войти в аккаунт:</Note>
          <FlexBox alignItems="center" style={{ gap: 42 }}>
            <Link to="login">
              <A_Button solid handleButtonClick={() => console.log("Clicked")}>
                Войтииии
              </A_Button>
            </Link>
            <Note color="white">или</Note>
            <A_Button handleButtonClick={getCurrentUser}>
              Зарегестрироваться
            </A_Button>
          </FlexBox>
        </FlexBox>
      ) : (
        <FlexBox direction="column" style={{ gap: 20 }}>
          <Note color="white">Пора отправляться в новое приключение?</Note>
          <FlexBox alignItems="center" style={{ gap: 42 }}>
            <Link to="login">
              <A_Button handleButtonClick={getCurrentUser}>
                Выйти из акка
              </A_Button>
              <Note color="white">или</Note>
              <A_Button solid handleButtonClick={() => console.log("Clicked")}>
                Начать игру
              </A_Button>
            </Link>
          </FlexBox>
        </FlexBox>
      )}
      <MainImage
        style={{
          backgroundImage: "url(" + require("../images/dragon.png") + ")",
        }}
      ></MainImage>
    </HomeWrapper>
  );
}
