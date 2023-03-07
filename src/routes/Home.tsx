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
  align-content: space-around;
`;

const PPWrapper = styled(FlexBox)`
  position: relative;
  width: 884px;
  padding-top: 85px;
  gap: 39px;
`;

const MainImage = styled.div`
  position: absolute;
  background-size: auto 100vh;
  height: 100%;
  width: 972px;
  right: 0;
  background-repeat: no-repeat;
  background-position: center right;
  top: 0px;
  pointer-events: none;
`;

export default function Home() {
  const { user } = useAuth();

  return (
    <HomeWrapper>
      <PPWrapper>
        <Panama>Ход Web</Panama>
        <Large>
          Эта версия предназначена для тех мастеров, которые предпочитают вести
          игры с&nbsp;ноутбуком и&nbsp;им&nbsp;неудобно открывать Ход
          на&nbsp;телефоне.
        </Large>
        <Large>
          Здесь невозможно выступить в&nbsp;роли игрока и&nbsp;присоединиться
          к&nbsp;существующей сесии
        </Large>
      </PPWrapper>
      <FlexBox direction="column" style={{ gap: 20, marginBottom: 16 }}>
        <Note>
          {user
            ? "Пора отправляться в новое приключение?"
            : "Чтобы начать игру надо войти в аккаунт:"}
        </Note>
        <FlexBox alignItems="center" style={{ gap: 42 }}>
          {!user ? (
            <>
              <Link to="login">
                <A_Button
                  solid
                  handleButtonClick={() => console.log("Clicked")}
                >
                  Войти
                </A_Button>
              </Link>
              <Note>или</Note>
              <Link to="registration">
                <A_Button handleButtonClick={() => console.log("Clicked")}>
                  Зарегистрироваться
                </A_Button>
              </Link>
            </>
          ) : (
            <>
              <A_Button solid handleButtonClick={() => console.log("Clicked")}>
                Начать игру
              </A_Button>
            </>
          )}
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
