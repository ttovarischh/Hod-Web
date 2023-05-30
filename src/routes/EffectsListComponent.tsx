import styled from "styled-components";
import { FlexBox } from "../components/Common";
import { useState, useEffect } from "react";
import { ActionCable, ActionCableConsumer } from "react-actioncable-provider";
import { API_ROOT } from "../constants";
import Cable from "../Cable";
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

export default function EffectsListComponent() {
  const [isLoading, setLoading] = useState(true);
  const [code, setCode] = useState("HB236");
  const [games, setGames] = useState<any[]>([]);
  const [players, setPlayers] = useState<any[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    fetchGames();
  }, []);

  useEffect(() => {
    fetchPlayers();
  }, [games]);

  const fetchPlayers = async () => {
    const response = await fetch(
      "http://localhost:3000/api/v1/games/HB236/players"
    );
    const data = await response.json();
    setPlayers(data);
    setLoading(false);
  };

  const fetchGames = async () => {
    const response = await fetch("http://localhost:3000/api/v1/games");
    const data = await response.json();
    setGames(data);
  };

  const handleReceivedGames = (response: any) => {
    console.log(response);
    setGames((prevState) => [...prevState, response]);
  };

  const handleReceivedPlayer = (response: any) => {
    console.log(response);
    console.log(response.game_code);

    if (response.game_code === code) {
      setPlayers((prevState) => [...prevState, response]);
    } else {
      console.log("Broadcasted player is not from here!");
    }
  };

  // setPlayers((prevState) => [...prevState, response]);

  // setGames((prevState) => [...prevState, response]);
  // const updatedPlayers = games.map((game: any) => {
  //   if (response.game_id === 1) {
  //     return {
  //       ...game,
  //       player: [...game.players, response],
  //     };
  //   } else {
  //     return game;
  //   }
  // });
  // setGames(updatedGames);
  // setPlayers((prevState) => [...prevState, updatedPlayers]);

  //   const handleReceivedPlayer = (response: any) => {
  //     const { player } = response;
  //     const gamesData = [...gamesData];
  //     const game = games.find(
  //       game => game.id === player.game_id
  //     );
  //     game.players = [...games.players, player];
  //     setGames(games)
  //     // this.setState({ conversations });
  //   };

  // const handleReceivedPlayer = (response: any) => {
  //   const updatedGames = games.map((game: any) => {
  //     if (game.id === response.game_id) {
  //       return {
  //         ...game,
  //         player: [...game.players, response],
  //       };
  //     } else {
  //       return game;
  //     }
  //   });
  //   setGames(updatedGames);
  // };

  //   const handleSubmit = async (e: any) => {
  //     e.preventDefault();
  //     const body = "NEWgame";

  //     await fetch("http://localhost:3000/api/v1/games", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         game: {
  //           name: body,
  //         },
  //       }),
  //     });
  //     console.log(games);
  //   };

  //   console.log(user!.jwt);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!user!.jwt) {
      console.log("Error: missing token");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/games/HB236/players",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user!.jwt}`,
            jti: `${user!.jti}`,
            "Authorization-Session": `Bearer ${user!.jwt}`,
          },
          body: JSON.stringify({
            player: {
              name: "ХЭЛЛОУ ВОРЛД",
            },
            session: user!.jwt,
          }),
        }
      );
      console.log("Game created successfully!");
      //   console.log(await response.json());
    } catch (error) {
      // @ts-ignore
      console.log(`Error: ${error.message}`);
    }
  };

  //   const handleSubmit = async (e: any) => {
  //     e.preventDefault();
  //     const body = "NEWgame";

  //     if (!user!.jwt) {
  //       console.log("Error: missing token");
  //       return;
  //     }

  //     try {
  //       const response = await fetch("http://localhost:3000/api/v1/games", {
  //         method: "POST",
  //         credentials: "include",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${user!.jwt}`,
  //           jti: `${user!.jti}`,
  //           "Authorization-Session": `Bearer ${user!.jwt}`,
  //           //   "X-CSRF-Token": csrfToken,
  //         },
  //         body: JSON.stringify({
  //           game: {
  //             name: body,
  //           },
  //           session: user!.jwt,
  //         }),
  //       });

  //       if (!response.ok) {
  //         throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  //       }

  //       console.log("Game created successfully!");
  //       console.log(await response.json());
  //     } catch (error) {
  //       // @ts-ignore
  //       console.log(`Error: ${error.message}`);
  //     }
  //   };

  // await fetch("http://localhost:3000/api/v1/games", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${user!.jwt}`,
  //     jti: `${user!.jti}`, // assuming user.jti is the jti value you retrieved from the login response
  //   },
  //   body: JSON.stringify({
  //     game: {
  //       name: body,
  //     },
  //   }),
  // });

  // console.log(games);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <HomeWrapper>
      {/* <ActionCableConsumer
        channel={{ channel: "GamesChannel" }}
        onReceived={handleReceivedGames}
      /> */}
      <ActionCableConsumer
        channel={{ channel: "PlayersChannel" }}
        onReceived={handleReceivedPlayer}
      />
      <button onClick={handleSubmit}>ADD GAME</button>
      <h2 style={{ color: "white", margin: 0 }}>GAMES:</h2>
      <FlexBox style={{ height: "20vh", width: "100%" }}>
        {mapData(games)}
      </FlexBox>
      <h2 style={{ color: "white" }}>PLAYERS FROM GAME_1:</h2>
      <FlexBox style={{ height: "40vh", width: "100%" }}>
        {mapData(players)}
      </FlexBox>
      {/* {games.length ? (
        <Cable games={games} handleReceivedPlayer={handleReceivedPlayer} />
      ) : null} */}
    </HomeWrapper>
  );
}

const mapData = (datas: any[]) => {
  if (!datas || datas.length === 0) {
    return <div>No datas found.</div>;
  }

  return datas.map((data: any) => (
    <FlexBox key={data.id}>
      <p style={{ color: "white", marginRight: 8 }}>{data.name}</p>
    </FlexBox>
  ));
};
