import styled from "styled-components";
import { FlexBox, Panama, Large, Note } from "../components";
import A_Button from "../components/A_Button";
import { Link } from "react-router-dom";
import useAuth from "../authContext/useAuth";
import axios from "axios";
import { useState } from "react";

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
  const [isLoading, setLoading] = useState(true);

  function handleClick() {
    axios
      .post(
        "http://localhost:3000/api/v1/games",
        {
          game: {
            name: "Kill meh!",
          },
        },
        {
          headers: {
            method: "no-cors",
            "Access-Control-Allow-Origin": "http://localhost:3006",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  axios.interceptors.request.use((x) => {
    console.log(JSON.stringify(x));
    return x;
  });

  // function handleClick() {
  //   (async () => {
  //     const rawResponse = await fetch("http://localhost:3000/api/v1/games", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         Accept: "application/json, text/plain, */*",

  //       },
  //       body: JSON.stringify({ game: { name: "MMMM" } }),
  //     });
  //     const content = await rawResponse.json();

  //     console.log(content);
  //   })();
  // }

  // {"adapter": ["xhr", "http"], "data": {"game": {"name": "2023-03-15T12:07:22.724Z"}}, "env": {"Blob": [Function Blob], "FormData": [Function FormData]}, "headers": {"Accept": "application/json, text/plain, */*"}, "maxBodyLength": -1, "maxContentLength": -1, "method": "post", "timeout": 0, "transformRequest": [[Function transformRequest]], "transformResponse": [[Function transformResponse]], "transitional": {"clarifyTimeoutError": false, "forcedJSONParsing": true, "silentJSONParsing": true}, "url": "http://localhost:3000/api/v1//games", "validateStatus": [Function validateStatus], "xsrfCookieName": "XSRF-TOKEN", "xsrfHeaderName": "X-XSRF-TOKEN"}

  async function postData(
    url = "http://localhost:3000/api/v1/games",
    data = { game: { name: "MMMM" } }
  ) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  // postData("http://localhost:3000/api/v1/games", {
  //   game: { name: "MMMM" },
  // }).then((data) => {
  //   console.log(data);
  // });

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
            ? "Пора отправляться в новое приключение:"
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
              <Link to="create">
                <A_Button
                  solid
                  handleButtonClick={() => console.log("Clicked")}
                >
                  Начать игру
                </A_Button>
              </Link>
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
