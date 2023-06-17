import styled from "styled-components";
import { FlexBox } from "../../components/Common";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { consumer } from "../../constants";
import axios from "axios";
import A_Loader from "../../components/Atoms/A_Loader";
import O_Tracker from "../../components/Organisms/O_Tracker";
import O_Modal from "../../components/Organisms/O_Modal";
import O_SideMenu from "../../components/Organisms/O_SideMenu";
import O_Card from "../../components/Organisms/O_Card";
import O_EffectList from "../../components/Organisms/O_EffectList";
import InactiveGame from "../MainFlow/InactiveGame";

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
  overflow-x: auto;
  padding-top: 3px;
  padding-bottom: 3px;
`;

const CardsScroll = styled(FlexBox)`
  flex-wrap: nowrap;
  overflow: visible;
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
  const [isBottomOpened, setIsBottomOpened] = useState(false);
  const [isEffectsOpened, setEffectsOpened] = useState(false);
  const [finalModalVisible, setFinalModalVisible] = useState(false);
  const [gameData, setGameData] = useState<any>([]);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [isOld, setIsOld] = useState(false);
  const [effectsData, setEffectsData] = useState<any[]>([]);
  const [selectedPlayerEffects, setSelectedPlayerEffects] = useState<any[]>([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const { t } = useTranslation();
  const [playerEffects, setPlayerEffects] = useState({});

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
    console.log(code);

    const getEffects = axios.get("http://localhost:3000/api/v1/effects");
    const getGames = axios.get("http://localhost:3000/api/v1/games/" + code);

    Promise.all([getEffects, getGames])
      .then(([effectsResponse, gamesResponse]) => {
        const effectsData = effectsResponse.data;
        const gamesData = gamesResponse.data;

        setEffectsData(effectsData);
        setGameData(gamesData);

        const playerEffectsObject = gamesData.players.reduce(
          (acc: any, player: any) => {
            acc[player.id] = player.effects;
            return acc;
          },
          {}
        );
        setPlayerEffects(playerEffectsObject);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
    const subscription = consumer.subscriptions.create(
      { channel: "PlayereffectsChannel" },
      {
        received(data: any) {
          const { type, payload } = data;
          if (type === "ADD_EFFECT") {
            const { player_id, effect } = payload;
            setPlayerEffects((prevState: any) => {
              return {
                ...prevState,
                [player_id]: [...prevState[player_id], effect],
              };
            });
          } else if (type === "REMOVE_EFFECT") {
            const { player_id, effect } = payload;
            setPlayerEffects((prevState: any) => {
              const updatedPlayerEffects = prevState[player_id].filter(
                (e: any) => e.id !== effect.id
              );
              return {
                ...prevState,
                [player_id]: updatedPlayerEffects,
              };
            });
          }
        },
      }
    );
    const gameSubscription = consumer.subscriptions.create(
      { channel: "GamesChannel" },
      {
        received(data: any) {
          if (data.code === code) {
            setGameData(data);
          }
        },
      }
    );
    return () => {
      subscription.unsubscribe();
      gameSubscription.unsubscribe();
    };
  }, []);

  const handleButtonClick = (player: any) => {
    new Promise<void>((resolve) => {
      // @ts-ignore
      setSelectedPlayerEffects(playerEffects[player.id]);
      setSelectedPlayerId(player.id);
      resolve();
    }).then(() => {
      setEffectsOpened(true);
    });
  };

  const handleCrossClick = () => {
    setSelectedPlayerEffects([]);
    setEffectsOpened(false);
  };

  const handleTrackerButtonClick = () => {
    axios
      .patch(`http://localhost:3000/api/v1/games/${code}`, {
        game: {
          fight: true,
        },
      })
      .then((response) => {})
      .catch((error) => console.error(error))
      .finally(() => {
        navigate(`/game/${code}/initiative`);
      });
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
          effects={playerEffects}
          superSmall={index >= 3}
          handlePlusClick={() => handleButtonClick(player)}
          playerId={player.id}
          code={code}
        />
      );
    });
  };

  const handleFinishGame = () => {
    axios
      .patch(`http://localhost:3000/api/v1/games/${code}`, {
        game: {
          active: false,
        },
      })
      .then((response) => {})
      .catch((error) => console.error(error))
      .finally(() => {
        navigate(`/`);
      });
  };

  if (isLoading) {
    return <A_Loader />;
  }

  if (finalModalVisible) {
    return (
      <O_Modal
        handleButtonCLick={handleFinishGame}
        code={code}
        header={t("common:theEnd")}
        textA={t("common:willDelete")}
        one={t("common:final")}
        three={t("common:mainPage")}
        buttonText={t("common:out")}
      ></O_Modal>
    );
  }

  if (!gameData.active) {
    return <InactiveGame />;
  }

  return (
    <AuthWrapper className="AuthWrapper">
      {isEffectsOpened && (
        <O_EffectList
          effectsData={effectsData}
          handleCloseModal={() => setEffectsOpened(false)}
          playerEffects={selectedPlayerEffects}
          code={code}
          playerId={selectedPlayerId}
        />
      )}
      {isModalOpened && !isOld && (
        <>
          <O_Modal
            handleButtonCLick={() => setIsModalOpened(false)}
            code={code}
            header={t("common:done")}
            textA={t("common:allSaved")}
            textB={t("common:urCode")}
            one={t("common:chCreation")}
            three={t("common:game")}
            buttonText={t("common:continue")}
          ></O_Modal>
        </>
      )}
      {!isModalOpened && (
        <>
          {effectsData && (
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
            handleFinishSession={() => setFinalModalVisible(true)}
          ></O_SideMenu>
          <O_SideMenu
            type="bottom"
            code={code}
            isBottomOpened={isBottomOpened}
            isRightOpened={isRightOpened}
            handleButtonCLick={() => setIsBottomOpened(!isBottomOpened)}
            handleFinishSession={() => setFinalModalVisible(true)}
          ></O_SideMenu>
        </>
      )}
      <RealBlur
        style={{
          background:
            isLeftOpened || isRightOpened || isEffectsOpened || isBottomOpened
              ? "rgba(0, 0, 0, 0.8)"
              : "transparent",
          zIndex:
            isLeftOpened || isRightOpened || isEffectsOpened || isBottomOpened
              ? 1000
              : -1,
        }}
      ></RealBlur>
      <CardsScrollWrapper>
        <CardsScroll>{list()}</CardsScroll>
      </CardsScrollWrapper>
      <O_Tracker
        offsetRight={70}
        buttonText={t("common:toFight")}
        handleButtonClick={handleTrackerButtonClick}
      />
    </AuthWrapper>
  );
}
