import styled from "styled-components";
import { FlexBox } from "../../components/Common";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../authContext/useAuth";
import axios from "axios";
import { useEffect } from "react";
import A_Loader from "../../components/Atoms/A_Loader";
import O_Tracker from "../../components/Organisms/O_Tracker";
import T_PlayersList from "../../components/Templates/T_PlayersList";
import O_CreationCard from "../../components/Organisms/O_CreationCard";

const Wrapper = styled(FlexBox)`
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
  padding-left: 66px;
  padding-right: 66px;
  transition: all 1s all;
`;

const options = [
  {
    value: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/dwarf1.png",
    label: "Dwarf1",
    image: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/dwarf1.png",
  },
  {
    value: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/dwarf2.png",
    label: "Dwarf2",
    image: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/dwarf2.png",
  },
  {
    value: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/elf1.png",
    label: "Elf1",
    image: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/elf1.png",
  },
  {
    value: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/elf2.png",
    label: "Elf2",
    image: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/elf2.png",
  },
  {
    value: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/elf3.png",
    label: "Elf3",
    image: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/elf3.png",
  },
  {
    value: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/elf4.png",
    label: "Elf4",
    image: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/elf4.png",
  },
  {
    value: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/halfling1.png",
    label: "Halfling1",
    image: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/halfling1.png",
  },
  {
    value: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/halfling2.png",
    label: "Halfling1",
    image: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/halfling2.png",
  },
  {
    value: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/halfling3.png",
    label: "Halfling1",
    image: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/halfling3.png",
  },
  {
    value: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/human1.png",
    label: "Human1",
    image: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/human1.png",
  },
  {
    value: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/human2.png",
    label: "Human2",
    image: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/human2.png",
  },
  {
    value: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/orc1.png",
    label: "Orc1",
    image: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/orc1.png",
  },
  {
    value: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/orc2.png",
    label: "Ork2",
    image: "https://ttovarischh.github.io/WikiMEDIUMM/images/hod/orc2.png",
  },
];

export default function Create() {
  const location = useLocation();
  const { code } = location.state;
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
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(true);
  const [players, setPlayers] = useState<any[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const handleTextChange = (text: string) => {
    if (!text.endsWith(" ")) {
      setInputValue(text);
      console.log(inputValue);
      console.log(tags);
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === " ") {
      event.preventDefault();
      addTag();
    }
  };

  const addTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  useEffect(() => {
    fetchInitialPlayers();
    console.log(code);
  }, []);

  const fetchInitialPlayers = async () => {
    const response = await fetch(
      `http://localhost:3000/api/v1/games/${code}/players`
    );
    const data = await response.json();
    setPlayers(data);
    setLoading(false);
  };

  const handlePostNewPlayer = (event: any) => {
    const tagsString = tags.join(" ");
    axios
      .post("http://localhost:3000/api/v1/games/" + code + "/players", {
        player: {
          name: newPlayer.name,
          username: newPlayer.username,
          language: tagsString,
          inv: newPlayer.inv,
          ins: newPlayer.ins,
          perc: newPlayer.perc,
          imagestring: newPlayer.imagestring,
        },
      })
      .then(function (response) {
        console.log("Done post");
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setNewPlayer(initialState);
        setTags([]);
        setSelectedOption(null);
        handleFetchCreated();
      });
  };

  function handleFetchCreated() {
    axios
      .get("http://localhost:3000/api/v1/games/" + code + "/players")
      .then(({ data }) => {
        setPlayers(data);
        console.log("Done get");
        console.log(players);
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  }

  function handleDeleteNewPlayer(playerId: any) {
    axios
      .delete(
        "http://localhost:3000/api/v1/games/" + code + "/players/" + playerId
      )
      .then(({ data }) => {
        console.log("Done delete");
      })
      .catch((error) => console.error(error))
      .finally(() => {});
  }

  const handleSelectChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
    setNewPlayer((prevState) => {
      return {
        ...prevState,
        imagestring: selectedOption.value,
      };
    });
    console.log(newPlayer);
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    console.log(newPlayer);
    setNewPlayer((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  if (isLoading) {
    return <A_Loader />;
  }

  return (
    <Wrapper className="AuthWrapper">
      <T_PlayersList
        context="create"
        code={code}
        data={players}
        handleDeleteNewPlayer={handleDeleteNewPlayer}
      />
      <O_CreationCard
        options={options}
        handleSelectChange={handleSelectChange}
        handleInputChange={handleInputChange}
        handlePostNewPlayer={handlePostNewPlayer}
        disabled={
          newPlayer.username === "" ||
          newPlayer.name === "" ||
          newPlayer.ins === "" ||
          newPlayer.inv === "" ||
          newPlayer.perc === "" ||
          newPlayer.imagestring === "" ||
          tags.length == 0
        }
        name={newPlayer.name}
        username={newPlayer.username}
        ins={newPlayer.ins}
        inv={newPlayer.inv}
        perc={newPlayer.perc}
        language={newPlayer.language}
        inputValue={inputValue}
        handleTextChange={handleTextChange}
        handleKeyPress={handleKeyPress}
        tags={tags}
        removeTag={removeTag}
        selectedOption={selectedOption}
      />
      <O_Tracker
        header
        one="Создание персонажей"
        three="Игра"
        disabled={players.length < 1}
        handleButtonClick={() => navigate(`/game/${code}`)}
        note="Сначала надо создать хотя бы одного персонажа"
        active="one"
        buttonText="Продолжить"
      />
    </Wrapper>
  );
}
