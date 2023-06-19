import styled from "styled-components";
import { FlexBox } from "../../components/Common";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../authContext/useAuth";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { consumer } from "../../constants";
import A_Loader from "../../components/Atoms/A_Loader";
import O_Tracker from "../../components/Organisms/O_Tracker";
import O_SideMenu from "../../components/Organisms/O_SideMenu";
import { useParams } from "react-router-dom";
import O_Card from "../../components/Organisms/O_Card";
import O_EffectList from "../../components/Organisms/O_EffectList";
import O_CreationCard from "../../components/Organisms/O_CreationCard";
import T_MonstersList from "../../components/Templates/T_MonstersList";
import InactiveGame from "../MainFlow/InactiveGame";
import O_Modal from "../../components/Organisms/O_Modal";
import O_InitiativeTracker from "../../components/Organisms/O_InitiativeTracker";

const AuthWrapper = styled(FlexBox)`
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: relative;
  direction: column;
  align-content: center;
  flex-direction: column;
  transition: all 1s all;
  flex-wrap: nowrap;
`;

const Side = styled(FlexBox)`
  width: 100%;
  min-width: 100%;
  align-items: center;
`;

const HeroSide = styled(Side)<{ allPlayersHaveInitiative?: boolean }>`
  background: ${(props) =>
    !props.allPlayersHaveInitiative
      ? "#000000"
      : "linear-gradient(0deg, rgba(37, 32, 255, 0.15) 0%, rgba(37, 32, 255, 0) 100%)"};
`;

const NpcSide = styled(Side)<{ allPlayersHaveInitiative?: boolean }>`
  background: ${(props) =>
    !props.allPlayersHaveInitiative
      ? "#000000"
      : "linear-gradient( 180deg, rgba(255, 64, 64, 0.15) 0%, rgba(255, 64, 64, 0) 100%)"};
`;

const CardsScroll = styled(FlexBox)`
  flex-wrap: nowrap;
  overflow: visible;
  gap: 20px;
  :first-child {
    padding-left: 66px;
  }
  :last-child {
    padding-right: 66px;
  }
`;

const CardsScrollWrapper = styled.div`
  overflow-x: auto;
  padding-top: 3px;
  padding-bottom: 3px;
`;

const RealBlur = styled(FlexBox)`
  height: 100%;
  width: 100%;
  transition: all 0.5s ease;
  position: absolute;
  left: 0;
  top: 0;
`;

const MonsterCreationWrapper = styled(FlexBox)`
  height: 88%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`;

export default function FullInitiative() {
  const { code } = useParams<{ code: any }>();
  const [isLeftOpened, setIsLeftOpened] = useState(false);
  const [isRightOpened, setIsRightOpened] = useState(false);
  const [isBottomOpened, setIsBottomOpened] = useState(false);
  const [isEffectsOpened, setEffectsOpened] = useState(false);
  const [isMonsterCreationOpened, setMonsterCreationOpened] = useState(false);
  const [gameData, setGameData] = useState<any>([]);
  const [monsterData, setMonsterData] = useState<any>([]);
  const [newInitiative, setNewInitiative] = useState("");
  const [playerEffects, setPlayerEffects] = useState({});
  const [monsterEffects, setMonsterEffects] = useState({});
  const { t } = useTranslation();
  const { user, login, loading, error } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [isOld, setIsOld] = useState(false);
  const [effectsData, setEffectsData] = useState<any[]>([]);
  const [selectedPlayerEffects, setSelectedPlayerEffects] = useState<any[]>([]);
  const [selectedPlayerId, setSelectedPlayerId] = useState(null);
  const [isSelectedMonster, setIsSelectedMonster] = useState(false);
  const [finalModalVisible, setFinalModalVisible] = useState(false);
  const [newMonster, setNewMonster] = useState({
    name: "",
    hp: "",
    armor: "",
  });
  const [initialState, setInitialState] = useState({
    name: "",
    hp: "",
    armor: "",
  });

  const [sortedList, setSortedList] = useState<any>([]);
  const [activePlayerIndex, setActivePlayerIndex] = useState<null | number>(
    null
  );

  const handleNextPlayer = () => {
    const activePlayer = sortedList[activePlayerIndex!];
    let nextPlayerIndex = activePlayerIndex! + 1;
    if (nextPlayerIndex >= sortedList.length) {
      nextPlayerIndex = 0;
    }
    const nextPlayer = sortedList[nextPlayerIndex];
    let url = `http://localhost:3000/api/v1/games/${code}/players/${activePlayer.id}`;
    if (activePlayer.armor) {
      url = `http://localhost:3000/api/v1/games/${code}/monsters/${activePlayer.id}`;
    }
    axios
      .patch(url, {
        [activePlayer.armor ? "monster" : "player"]: {
          active: false,
        },
      })
      .then((response1) => {
        console.log(response1);
        let url = `http://localhost:3000/api/v1/games/${code}/players/${nextPlayer.id}`;
        if (nextPlayer.armor) {
          url = `http://localhost:3000/api/v1/games/${code}/monsters/${nextPlayer.id}`;
        }
        axios
          .patch(url, {
            [nextPlayer.armor ? "monster" : "player"]: {
              active: true,
            },
          })
          .then((response2) => {
            console.log(response2);
            setActivePlayerIndex(nextPlayerIndex);
            if (
              nextPlayerIndex === 0 &&
              activePlayerIndex === sortedList.length - 1
            ) {
              axios
                .patch(`http://localhost:3000/api/v1/games/${code}`, {
                  game: {
                    turn: gameData.turn + 1,
                  },
                })
                .then((response3) => {
                  console.log(response3);
                })
                .catch((error) => {
                  console.error(error);
                });
            }
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setNewMonster((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    if (gameData.monsters && gameData.monsters.length < 1) {
      setMonsterCreationOpened(true);
    }
  }, [gameData]);

  useEffect(() => {
    const getEffects = axios.get("http://localhost:3000/api/v1/effects");
    const getGames = axios.get("http://localhost:3000/api/v1/games/" + code);
    const getMonsters = axios.get(
      "http://localhost:3000/api/v1/games/" + code + "/monsters"
    );

    Promise.all([getEffects, getGames, getMonsters])
      .then(([effectsResponse, gamesResponse, monstersResponse]) => {
        const effectsData = effectsResponse.data;
        const gamesData = gamesResponse.data;
        const monsterData = monstersResponse.data;

        setEffectsData(effectsData);
        setGameData(gamesData);
        setMonsterData(monsterData);

        //

        const players = gamesData.players || [];
        const monsters = gamesData.monsters || [];
        const combinedList = [...players, ...monsters];
        const sortedList = combinedList.sort(
          (a, b) => b.initiative - a.initiative
        );
        setSortedList(sortedList);

        const activeIndex = sortedList.findIndex(
          (item) => item.active === true
        );
        if (activeIndex >= 0) {
          setActivePlayerIndex(activeIndex);
        } else {
          const firstItem = sortedList[0];
          const patchUrl = firstItem.armor
            ? `http://localhost:3000/api/v1/games/${code}/monsters/${firstItem.id}`
            : `http://localhost:3000/api/v1/games/${code}/players/${firstItem.id}`;
          axios
            .patch(patchUrl, {
              [firstItem.armor ? "monster" : "player"]: {
                active: true,
              },
            })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => console.error(error))
            .finally(() => {
              setActivePlayerIndex(0);
            });
        }

        //

        const playerEffectsObject = gamesData.players.reduce(
          (acc: any, player: any) => {
            acc[player.id] = player.effects;
            return acc;
          },
          {}
        );
        setPlayerEffects(playerEffectsObject);
        const monsterEffectsObject = gamesData.monsters.reduce(
          (acc: any, monster: any) => {
            acc[monster.id] = monster.effects;
            return acc;
          },
          {}
        );
        setMonsterEffects(monsterEffectsObject);
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
    const monsterSubscription = consumer.subscriptions.create(
      { channel: "MonsterEffectsChannel" },
      {
        received(data: any) {
          const { type, payload } = data;
          if (type === "ADD_EFFECT") {
            const { monster_id, effect } = payload;
            setMonsterEffects((prevState: any) => {
              return {
                ...prevState,
                [monster_id]: [...prevState[monster_id], effect],
              };
            });
          } else if (type === "REMOVE_EFFECT") {
            const { monster_id, effect } = payload;
            setMonsterEffects((prevState: any) => {
              const updatedPlayerEffects = prevState[monster_id].filter(
                (e: any) => e.id !== effect.id
              );
              return {
                ...prevState,
                [monster_id]: updatedPlayerEffects,
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
      monsterSubscription.unsubscribe();
      gameSubscription.unsubscribe();
    };
  }, []);

  const handleButtonClick = (player: any) => {
    new Promise<void>((resolve) => {
      setSelectedPlayerEffects(player.effects);
      setSelectedPlayerId(player.id);
      if (player.armor) {
        setIsSelectedMonster(true);
      }
      resolve();
    }).then(() => {
      setEffectsOpened(true);
    });
  };

  const handleCrossClick = () => {
    setSelectedPlayerEffects([]);
    setEffectsOpened(false);
  };

  const [allPlayersHaveInitiative, setAllPlayersHaveInitiative] =
    useState(false);

  useEffect(() => {
    if (gameData && gameData.players && gameData.monsters) {
      const allHaveInitiative =
        gameData.players.every((player: any) => player.initiative > 0) &&
        gameData.monsters.every((monster: any) => monster.initiative > 0);
      setAllPlayersHaveInitiative(allHaveInitiative);
    }
  }, [gameData]);

  const list2 = () => {
    return gameData.monsters
      .sort((a: any, b: any) => b.initiative - a.initiative)
      .map((player: any, index: any) => {
        return (
          <O_Card
            key={index}
            imagestring={player.imagestring}
            playerName={player.name}
            username={player.username}
            perc={player.perc}
            ins={player.ins}
            inv={player.inv}
            effects={monsterEffects}
            handlePlusClick={() => handleButtonClick(player)}
            fight
            code={code}
            conc={player.conc}
            playerId={player.id}
            initiativeSet={player.initiative > 0}
            handleInitiativeInputChange={() => console.log("U type")}
            initiative={newInitiative}
            monster
            armor={player.armor}
            hp={player.hp}
            active={player.active}
          />
        );
      });
  };

  const list = () => {
    return gameData.players
      .sort((a: any, b: any) => b.initiative - a.initiative)
      .map((player: any, index: any) => {
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
            handlePlusClick={() => handleButtonClick(player)}
            fight
            code={code}
            conc={player.conc}
            playerId={player.id}
            initiativeSet={player.initiative > 0}
            handleInitiativeInputChange={() => console.log("U type")}
            initiative={newInitiative}
            active={player.active}
          />
        );
      });
  };

  const handlePostNewMonster = (event: any) => {
    axios
      .post("http://localhost:3000/api/v1/games/" + code + "/monsters", {
        monster: {
          name: newMonster.name,
          armor: newMonster.armor,
          hp: newMonster.hp,
        },
      })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setNewMonster(initialState);
      });
  };

  function handleDeleteNewMonster(playerId: any) {
    axios
      .delete(
        "http://localhost:3000/api/v1/games/" + code + "/monsters/" + playerId
      )
      .then(({ data }) => {
        console.log("Done delete");
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  }

  const handleConcClick = () => {
    axios
      .patch(`http://localhost:3000/api/v1/games/${code}`, {
        game: {
          fight: false,
        },
      })
      .then((response) => {})
      .catch((error) => console.error(error))
      .finally(() => {
        navigate(`/game/${code}`);
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
      {isMonsterCreationOpened && (
        <MonsterCreationWrapper
          style={{ justifyContent: "space-around" }}
          alignItems="center"
        >
          <T_MonstersList
            context="create"
            code={code}
            data={gameData?.monsters}
            handleDeleteNewPlayer={handleDeleteNewMonster}
          />
          <O_CreationCard
            monster
            handleInputChange={handleInputChange}
            name={newMonster.name}
            armor={newMonster.armor}
            hp={newMonster.hp}
            disabled={
              newMonster.name === "" ||
              newMonster.armor === "" ||
              newMonster.hp === ""
            }
            handlePostNewPlayer={handlePostNewMonster}
          />
          <O_Tracker
            header
            one={t("common:npc")}
            two={t("common:initiative")}
            three={t("common:game")}
            active={isMonsterCreationOpened ? "one" : "two"}
            buttonText={t("common:continue")}
            note={t("common:oneNpc")}
            disabled={gameData.monsters.length < 1}
            offsetBottom={116}
            zIndex={10001}
            handleButtonClick={() => setMonsterCreationOpened(false)}
          />
        </MonsterCreationWrapper>
      )}
      {isEffectsOpened && (
        <O_EffectList
          effectsData={effectsData}
          handleCloseModal={handleCrossClick}
          playerEffects={selectedPlayerEffects}
          playerId={selectedPlayerId}
          monster={isSelectedMonster}
          code={code}
        />
      )}
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
      <RealBlur
        style={{
          background:
            isLeftOpened ||
            isRightOpened ||
            isEffectsOpened ||
            isMonsterCreationOpened ||
            isBottomOpened
              ? "rgba(0, 0, 0, 0.8)"
              : "transparent",
          zIndex:
            isLeftOpened ||
            isRightOpened ||
            isEffectsOpened ||
            isMonsterCreationOpened ||
            isBottomOpened
              ? 1000
              : -1,
        }}
      ></RealBlur>
      <HeroSide allPlayersHaveInitiative={allPlayersHaveInitiative}>
        <CardsScrollWrapper>
          <CardsScroll style={{ marginBottom: 12 }}>{list()}</CardsScroll>
        </CardsScrollWrapper>
      </HeroSide>
      {allPlayersHaveInitiative && (
        <O_InitiativeTracker
          players={sortedList}
          turn={gameData.turn}
          handleNextTurn={handleNextPlayer}
          activePlayerIndex={activePlayerIndex}
          handleFinishFight={handleConcClick}
        />
      )}
      <NpcSide allPlayersHaveInitiative={allPlayersHaveInitiative}>
        <CardsScrollWrapper>
          <CardsScroll style={{ marginTop: 12 }}>{list2()}</CardsScroll>
        </CardsScrollWrapper>
      </NpcSide>
    </AuthWrapper>
  );
}
