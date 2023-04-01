import styled, { keyframes } from "styled-components";
import { FlexBox } from "../../components";
import A_Button from "../../components/A_Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import A_Input from "../../components/A_Input";
import useAuth from "../../authContext/useAuth";
import M_Card from "../../components/M_Card";
import Select, { StylesConfig } from "react-select";
import axios from "axios";
import { useEffect } from "react";
import A_Loader from "../../components/A_Loader";
import O_Tracker from "../../components/O_Tracker";
import { useLocation } from "react-router-dom";
import O_Modal from "../../components/O_Modal";
import M_BreadCrumb from "../../components/M_BreadCrumb";
import { CardText } from "../../components";
import O_SideMenu from "../../components/O_SideMenu";

const AuthWrapper = styled(FlexBox)`
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 176px);
  padding-top: 88px;
  padding-bottom: 88px;
  overflow: hidden;
  position: relative;
  direction: column;
  align-content: center;
  button {
    width: 100%;
  }
  flex-direction: column;
  // padding-left: 66px;
  // padding-right: 66px;
  transition: all 1s all;
`;

const BlankColumn = styled.div`
  width: 292px;
  height: 100%;
`;

const ActionWrapper = styled(FlexBox)`
  z-index: 100;
  a {
    text-decoration: underline;
  }
`;

const Lang = styled(FlexBox)`
  padding: 8px 12px;
  background: #383838;
  border-radius: 10px;
  justify-content: center;
  align-content: center;
`;

const PlayerAvatarWrapper = styled(FlexBox)`
  width: 100%;
  height: 150px;
  background: #0e0e0e;
  justify-content: flex-start;
`;

const CardStack = styled.div`
  position: relative;
  height: 100%;
  max-width: 50%;
`;

const CardsScroll = styled(FlexBox)`
  width: fit-content;
  flex-wrap: nowrap;
  gap: 20px;
  :first-child {
    margin-left: 66px;
  }
  :last-child {
    margin-right: 66px;
  }
`;

const RealBlur = styled(FlexBox)`
  height: 100%;
  width: 100%;
  position: relative;
  transition: all 0.5s ease;
  position: absolute;
  left: 0;
  top: 0;
`;

export default function SingleGame() {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(true);
  const [isLeftOpened, setIsLeftOpened] = useState(false);
  const [isRightOpened, setIsRightOpened] = useState(false);
  const [gameData, setGameData] = useState<any[]>([]);
  const { user } = useAuth();
  const [newPlayer, setNewPlayer] = useState({
    name: "",
    username: "",
    ins: "",
    inv: "",
    perc: "",
    language: "",
    imagestring: "",
  });
  const [initialState, setInitialState] = useState({
    name: "",
    username: "",
    ins: "",
    inv: "",
    perc: "",
    language: "",
    imagestring: "",
  });
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const location = useLocation();
  const { code } = location.state;

  function handleClick() {
    axios
      .get("http://localhost:3000/api/v1/games/" + code + "/players")
      .then(({ data }) => {
        setGameData(data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        console.log("Done get");
        console.log(gameData);
      });
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/games/" + code + "/players")
      .then(({ data }) => {
        setGameData(data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        console.log("Done get");
        console.log(gameData);
      });
  }, []);

  const list = () => {
    return gameData.map((player: any, index: any) => {
      let langs: any[] = [];
      if (player.language) {
        langs = player.language.split(" ");
      }
      return (
        <M_Card
          type="gameMode"
          key={player.id}
          imagestring={player.imagestring}
          playerName={player.name}
          userName={player.username}
          perc={player.perc}
          ins={player.ins}
          inv={player.inv}
        >
          {langs &&
            langs.map((sublang: any) => (
              <Lang>
                <CardText>{sublang}</CardText>
              </Lang>
            ))}
        </M_Card>
      );
    });
  };

  return (
    <>
      {isLoading ? (
        <A_Loader></A_Loader>
      ) : (
        <AuthWrapper className="AuthWrapper">
          {isModalOpened && (
            <>
              <FlexBox style={{ marginLeft: 66 }}>
                <M_BreadCrumb>Назад</M_BreadCrumb>
              </FlexBox>
              <O_Modal
                handleButtonCLick={() => setIsModalOpened(false)}
                step="gamecreated"
                code={code}
              ></O_Modal>
            </>
          )}
          <O_SideMenu
            code={code}
            isRightOpened={isRightOpened}
            handleButtonCLick={() => setIsRightOpened(!isRightOpened)}
          ></O_SideMenu>
          <O_SideMenu
            type="left"
            isLeftOpened={isLeftOpened}
            handleButtonCLick={() => setIsLeftOpened(!isLeftOpened)}
          ></O_SideMenu>
          <RealBlur
            style={{
              background:
                isLeftOpened || isRightOpened
                  ? "rgba(0, 0, 0, 0.78)"
                  : "transparent",
              zIndex: isLeftOpened || isRightOpened ? 1000 : -1,
            }}
          ></RealBlur>
          <FlexBox style={{ width: "100%", overflow: "scroll" }}>
            <CardsScroll>{list()}</CardsScroll>
          </FlexBox>
          <FlexBox style={{ marginRight: 66, alignSelf: "flex-end" }}>
            <O_Tracker disabled={gameData.length < 1} step="gamecreated">
              <A_Button
                solid
                small
                handleButtonClick={() => console.log("Next Step")}
              >
                В режим инициативы
              </A_Button>
            </O_Tracker>
          </FlexBox>
        </AuthWrapper>
      )}
    </>
  );
}
