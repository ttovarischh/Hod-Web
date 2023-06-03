import styled from "styled-components";
import { FlexBox } from "../../components/Common";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../authContext/useAuth";
import axios from "axios";
import A_Loader from "../../components/Atoms/A_Loader";
import O_Tracker from "../../components/Organisms/O_Tracker";
import O_SideMenu from "../../components/Organisms/O_SideMenu";
import { useParams } from "react-router-dom";
import O_Card from "../../components/Organisms/O_Card";
import O_EffectList from "../../components/Organisms/O_EffectList";
import O_CreationCard from "../../components/Organisms/O_CreationCard";
import T_MonstersList from "../../components/Templates/T_MonstersList";
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

const HeroSide = styled(Side)`
  background: linear-gradient(
    0deg,
    rgba(37, 32, 255, 0.15) 0%,
    rgba(37, 32, 255, 0) 100%
  );
`;

const NpcSide = styled(Side)`
  background: linear-gradient(
    180deg,
    rgba(255, 64, 64, 0.15) 0%,
    rgba(255, 64, 64, 0) 100%
  );
`;

const CardsScroll = styled(FlexBox)`
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 20px;
  :first-child {
    padding-left: 66px;
  }
  :last-child {
    padding-right: 66px;
  }
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

const MonsterCard = styled.div`
  width: 420px !important;
  height: 321px !important;
  background: blue;
`;

export default function FullInitiative() {
  const { code } = useParams<{ code: any }>();
  const [isLeftOpened, setIsLeftOpened] = useState(false);
  const [isRightOpened, setIsRightOpened] = useState(false);
  const [isEffectsOpened, setEffectsOpened] = useState(false);
  const [isMonsterCreationOpened, setMonsterCreationOpened] = useState(false);
  const [gameData, setGameData] = useState<any>([]);
  const [monsterData, setMonsterData] = useState<any>([]);
  const [newInitiative, setNewInitiative] = useState("");

  const { user, login, loading, error } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [isOld, setIsOld] = useState(false);
  const [effectsData, setEffectsData] = useState<any[]>([]);
  const [selectedPlayerEffects, setSelectedPlayerEffects] = useState<any[]>([]);

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

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    console.log(newMonster);
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
    console.log(gameData.players);
  }, [gameData]);

  useEffect(() => {
    console.log(code);

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

  const list2 = () => {
    return gameData.monsters.map((player: any, index: any) => {
      return (
        <O_Card
          key={index}
          imagestring={player.imagestring}
          playerName={player.name}
          username={player.username}
          perc={player.perc}
          ins={player.ins}
          inv={player.inv}
          effects={player.effects}
          handlePlusClick={() => handleButtonClick(player)}
          fight
          code={code}
          conc={player.conc}
          playerId={player.id}
          // initiativeSet={player.initiative > 0}
          initiativeSet
          handleInitiativeInputChange={() => console.log("U type")}
          initiative={newInitiative}
          monster
        />
      );
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
          effects={player.effects}
          handlePlusClick={() => handleButtonClick(player)}
          fight
          code={code}
          conc={player.conc}
          playerId={player.id}
          initiativeSet={player.initiative > 0}
          handleInitiativeInputChange={() => console.log("U type")}
          initiative={newInitiative}
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
        handleFetchCreated();
      });
  };

  function handleFetchCreated() {
    axios
      .get("http://localhost:3000/api/v1/games/" + code + "/monsters")
      .then(({ data }) => {
        setMonsterData(data);
        console.log("Done get");
        console.log(monsterData);
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  }

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

  if (isLoading) {
    return <A_Loader />;
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
            one="НПС"
            two="Инициатива"
            three="Игра"
            active={isMonsterCreationOpened ? "one" : "two"}
            buttonText="Продолжить"
            note="Сначала надо создать хотя бы одного НПС"
            disabled={monsterData.length < 1}
            offsetBottom={116}
          />
        </MonsterCreationWrapper>
      )}
      {isEffectsOpened && (
        <O_EffectList
          effectsData={effectsData}
          handleCloseModal={() => setEffectsOpened(false)}
          playerEffects={selectedPlayerEffects}
        />
      )}
      {/* {isModalOpened && !isOld && (
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
      )} */}
      <>
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
      <RealBlur
        style={{
          background:
            isLeftOpened ||
            isRightOpened ||
            isEffectsOpened ||
            isMonsterCreationOpened
              ? "rgba(0, 0, 0, 0.8)"
              : "transparent",
          zIndex:
            isLeftOpened ||
            isRightOpened ||
            isEffectsOpened ||
            isMonsterCreationOpened
              ? 1000
              : -1,
        }}
      ></RealBlur>
      <HeroSide>
        <CardsScroll style={{ marginBottom: 12 }}>{list()}</CardsScroll>
      </HeroSide>
      <O_InitiativeTracker players={gameData.players} turn={gameData.turn} />
      <NpcSide>
        <CardsScroll style={{ marginTop: 12 }}>{list2()}</CardsScroll>
      </NpcSide>
    </AuthWrapper>
  );
}
