import styled from "styled-components";
import { FlexBox, A_Text } from "../../components/Common";
import A_Button from "../../components/Atoms/A_Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../authContext/useAuth";
import M_Card from "../../components/Molecules/M_Card";
import axios from "axios";
import A_Loader from "../../components/Atoms/A_Loader";
import O_Tracker from "../../components/Organisms/O_Tracker";
import O_Modal from "../../components/Organisms/O_Modal";
import M_BreadCrumb from "../../components/Molecules/M_BreadCrumb";
import O_SideMenu from "../../components/Organisms/O_SideMenu";
import { useParams } from "react-router-dom";
import O_EffectCard from "../../components/Organisms/O_EffectCard";

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
  transition: all 1s all;
`;

const Lang = styled(FlexBox)`
  padding: 8px 12px;
  background: #383838;
  border-radius: 10px;
  justify-content: center;
  align-content: center;
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
  const { code } = useParams<{ code: any }>();

  const [isModalOpened, setIsModalOpened] = useState(true);
  const [isLeftOpened, setIsLeftOpened] = useState(false);
  const [isRightOpened, setIsRightOpened] = useState(false);

  // const [gameData, setGameData] = useState<any>(null);
  const [gameData, setGameData] = useState<any>([]);

  const { user, login, loading, error } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [isOld, setIsOld] = useState(false);

  useEffect(() => {
    if (gameData && gameData.created_at) {
      const createdAt = new Date(gameData.created_at);
      const currentTime = new Date();
      const timeDifferenceInSeconds = Math.floor(
        (currentTime.getTime() - createdAt.getTime()) / 1000
      );

      if (timeDifferenceInSeconds > 30) {
        setIsOld(true);
      }
    }
  }, [gameData]);

  useEffect(() => {
    console.log(gameData.players);
  }, [gameData]);

  useEffect(() => {
    console.log(code);
    axios
      .get("http://localhost:3000/api/v1/games/" + code)
      .then(({ data }) => {
        setGameData(data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        console.log("Done get");
        console.log(gameData);
        setLoading(false);
      });
  }, []);

  const list = () => {
    return gameData.players.map((player: any, index: any) => {
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
            langs.map((sublang: any, index: any) => (
              <Lang key={index}>
                <A_Text>{sublang}</A_Text>
              </Lang>
            ))}
        </M_Card>
      );
    });
  };

  if (isLoading) {
    return <A_Loader />;
  }

  return (
    <AuthWrapper className="AuthWrapper">
      {isModalOpened && !isOld && (
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
      {/* <FlexBox style={{ marginRight: 66, alignSelf: "flex-end" }}>
        <O_Tracker disabled={gameData.players.length < 1} step="gamecreated">
          <A_Button
            solid
            small
            handleButtonClick={() => console.log("Next Step")}
          >
            В режим инициативы
          </A_Button>
        </O_Tracker>
      </FlexBox> */}
    </AuthWrapper>
  );
}
