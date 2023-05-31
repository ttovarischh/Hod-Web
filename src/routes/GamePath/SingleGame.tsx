import styled from "styled-components";
import { FlexBox } from "../../components/Common";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../authContext/useAuth";
import axios from "axios";
import A_Loader from "../../components/Atoms/A_Loader";
import O_Tracker from "../../components/Organisms/O_Tracker";
import O_Modal from "../../components/Organisms/O_Modal";
import M_BreadCrumb from "../../components/Molecules/M_BreadCrumb";
import O_SideMenu from "../../components/Organisms/O_SideMenu";
import { useParams } from "react-router-dom";
import O_Card from "../../components/Organisms/O_Card";
import O_EffectList from "../../components/Organisms/O_EffectList";

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
  flex-wrap: nowrap;
`;

const CardsScrollWrapper = styled(FlexBox)`
  width: 100%;
  min-width: 100%;
  height: 100%;
  align-items: center;
`;

const CardsScroll = styled(FlexBox)`
  width: 100%;
  flex-wrap: wrap;
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
  const [isEffectsOpened, setEffectsOpened] = useState(false);
  const [gameData, setGameData] = useState<any>([]);
  const { user, login, loading, error } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [isOld, setIsOld] = useState(false);
  const [effectsData, setEffectsData] = useState<any[]>([]);
  const [selectedPlayerEffects, setSelectedPlayerEffects] = useState<any[]>([]);

  useEffect(() => {
    if (gameData && gameData.created_at) {
      const createdAt = new Date(gameData.created_at);
      const currentTime = new Date();
      const timeDifferenceInSeconds = Math.floor(
        (currentTime.getTime() - createdAt.getTime()) / 1000
      );

      if (timeDifferenceInSeconds > 600) {
        setIsOld(true);
        setIsModalOpened(false);
      }
    }
  }, [gameData]);

  useEffect(() => {
    console.log(gameData.players);
  }, [gameData]);

  useEffect(() => {
    console.log(code);

    const getEffects = axios.get("http://localhost:3000/api/v1/effects");
    const getGames = axios.get("http://localhost:3000/api/v1/games/" + code);

    Promise.all([getEffects, getGames])
      .then(([effectsResponse, gamesResponse]) => {
        const effectsData = effectsResponse.data;
        const gamesData = gamesResponse.data;

        setEffectsData(effectsData);
        setGameData(gamesData);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        console.log("Done get");
        console.log(effectsData);
        setLoading(false);
      });
  }, []);

  const handleButtonClick = (player: any) => {
    new Promise<void>((resolve) => {
      setSelectedPlayerEffects(player.effects);
      resolve();
    }).then(() => {
      setEffectsOpened(true);
    });
  };

  const handleCrossClick = () => {
    setSelectedPlayerEffects([]);
    setEffectsOpened(false);
  };

  // axios
  //   .patch(`http://localhost:3000/api/v1/games/${code}`, {
  //     game: {
  //       fight: true,
  //     },
  //   })
  //   .then((response) => {})
  //   .catch((error) => console.error(error))
  //   .finally(() => {
  //     navigate(`/game/${code}/initiative`);
  //   });

  const handleTrackerButtonClick = () => {
    navigate(`/game/${code}/initiative`);
  };

  const list = () => {
    return gameData.players.map((player: any, index: any) => {
      let langs: any[] = [];
      if (player.language) {
        langs = player.language.split(" ");
      }
      return (
        <O_Card
          key={index}
          imagestring={player.imagestring}
          playerName={player.name}
          username={player.username}
          perc={player.perc}
          ins={player.ins}
          inv={player.inv}
          langs={langs}
          effects={player.effects}
          superSmall={index >= 3}
          handlePlusClick={() => handleButtonClick(player)}
        />
      );
    });
  };

  if (isLoading) {
    return <A_Loader />;
  }

  return (
    <AuthWrapper className="AuthWrapper">
      {isEffectsOpened && (
        <O_EffectList
          effectsData={effectsData}
          handleCloseModal={() => setEffectsOpened(false)}
          playerEffects={selectedPlayerEffects}
        />
      )}
      {isModalOpened && !isOld && (
        <>
          <FlexBox style={{ marginLeft: 66 }}>
            <M_BreadCrumb>Назад</M_BreadCrumb>
          </FlexBox>
          <O_Modal
            handleButtonCLick={handleCrossClick}
            step="gamecreated"
            code={code}
          ></O_Modal>
        </>
      )}
      {!isModalOpened && (
        <>
          <FlexBox style={{ left: 66, position: "absolute" }}>
            <M_BreadCrumb>Назад</M_BreadCrumb>
          </FlexBox>
          {effectsData && ( // Render O_SideMenu only if effectsData is available
            <O_SideMenu
              code={code}
              isRightOpened={isRightOpened}
              handleButtonCLick={() => setIsRightOpened(!isRightOpened)}
            />
          )}
          <O_SideMenu
            type="left"
            isLeftOpened={isLeftOpened}
            handleButtonCLick={() => setIsLeftOpened(!isLeftOpened)}
            effectsData={effectsData}
          ></O_SideMenu>
        </>
      )}
      <RealBlur
        style={{
          background:
            isLeftOpened || isRightOpened || isEffectsOpened
              ? "rgba(0, 0, 0, 0.8)"
              : "transparent",
          zIndex: isLeftOpened || isRightOpened || isEffectsOpened ? 1000 : -1,
        }}
      ></RealBlur>
      <CardsScrollWrapper>
        <CardsScroll>{list()}</CardsScroll>
      </CardsScrollWrapper>
      <O_Tracker
        offsetRight={70}
        buttonText="В режим инициативы"
        handleButtonClick={handleTrackerButtonClick}
      />
    </AuthWrapper>
  );
}
