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
import { Link } from "react-router-dom";

const AuthWrapper = styled(FlexBox)`
  // display: grid;
  // grid-template-columns: 1fr 1fr 1fr;
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

const Card = styled(FlexBox)`
  box-shadow: -6px 2px 13px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  transition: all 0.5s ease;
  &:hover {
    z-index: 1000;
    box-shadow: -6px 2px 13px rgba(0, 0, 0, 0.8);
    align-self: flex-start;
    transition: all 0.5s ease;
    transform: scale(1) !important;
  }
`;

const colourStyles: StylesConfig<any> = {
  container: (styles) => ({
    ...styles,
    width: "100%",
  }),
  control: (styles) => ({
    ...styles,
    backgroundColor: "#0E0E0E",
    color: "yellow",
    height: 150,
    border: "none",
    width: "100%",
    borderRadius: 0,
  }),
  valueContainer: (styles) => ({
    ...styles,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    height: 150,
    width: "100%",
  }),
  singleValue: (styles) => ({
    ...styles,
    height: "100%",
    width: "100%",
    marginBottom: 0,
    position: "absolute",
  }),
  placeholder: (styles) => ({
    fontSize: 11,
    lineHeight: "13px",
    textAlign: "center",
    color: "#4C4C4C",
  }),
  menu: (styles) => ({
    ...styles,
    margin: 0,
    backgroundColor: "#1A1A1A",
    borderRadius: 0,
  }),
  menuList: (styles) => ({
    ...styles,
    padding: 0,
    maxHeight: "517px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    columnGap: 20,
    rowGap: 20,
    paddingLeft: 50,
    paddingRight: 50,
    justifyItems: "center",
    justifyContent: "center",
    alignContent: "center",
  }),
  option: (styles) => ({
    ...styles,
    display: "inline-block",
    width: 150,
    height: 150,
    padding: 0,
    border: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#EDF2DC",
    borderRadius: 12,
    overflow: "hidden",
    ":active": {
      ...styles,
      backgroundColor: "red",
    },
  }),

  // option: (styles, { data, isDisabled, isFocused, isSelected }) => {
  //   const color = chroma(data.color);
  //   return {
  //     ...styles,
  //     backgroundColor: isDisabled
  //       ? undefined
  //       : isSelected
  //       ? data.color
  //       : isFocused
  //       ? color.alpha(0.1).css()
  //       : undefined,
  //     color: isDisabled
  //       ? '#ccc'
  //       : isSelected
  //       ? chroma.contrast(color, 'white') > 2
  //         ? 'white'
  //         : 'black'
  //       : data.color,
  //     cursor: isDisabled ? 'not-allowed' : 'default',

  //     ':active': {
  //       ...styles[':active'],
  //       backgroundColor: !isDisabled
  //         ? isSelected
  //           ? data.color
  //           : color.alpha(0.3).css()
  //         : undefined,
  //     },
  //   };
  // },
  // input: (styles) => ({ ...styles, ...dot() }),
  // placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  // singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

const url = require("../../images/Vector.png");
const url2 = "https://ttovarischh.github.io/WikiMEDIUMM/images/img.png";

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

const InfoFlexBox = styled(FlexBox)`
  height: 55px;
  width: calc(392px - 16px);
  background-color: ${({ theme }) => theme.input.fill};
  border-radius: 9px;
  flex-direction: column;
  justify-content: center;
  padding-left: 16px;
  gap: 2px;
`;

const PlayerInfo = styled.p`
  color: ${({ theme }) => theme.input.text};
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.011em;
  margin: 0;
`;

const PlayerAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FlyingLabel = styled.p`
  font-size: 11px;
  line-height: 11px;
  letter-spacing: -0.011em;
  color: ${({ theme }) => theme.input.placeholder};
  margin: 0;
`;

export default function Create() {
  const [isEmpty, setIsEmpty] = useState(false);
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

  const handleSubmit = (event: any) => {
    axios
      .post("http://localhost:3000/api/v1/games/" + code + "/players", {
        player: {
          name: newPlayer.name,
          username: newPlayer.username,
          language: newPlayer.language,
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
        handleClick();
        setNewPlayer(initialState);
      });
  };

  const dateTime = new Date().toJSON();
  const [code, setCode] = useState("KY816");

  // useEffect(() => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       game: {
  //         name: "HELLO",
  //       },
  //     }),
  //   };
  //   fetch("http://localhost:3000/api/v1/games", requestOptions).then(
  //     (response) => response.json()
  //   );
  // }, []);

  useEffect(() => {
    axios
      .post(
        "http://localhost:3000/api/v1/games",
        {
          game: {
            name: dateTime,
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
        setCode(response.data.code);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  // warning!

  // function handleClick() {
  //   axios
  //     .post(
  //       "http://localhost:3000/api/v1/games",
  //       {
  //         game: {
  //           name: "Kill meh!",
  //         },
  //       },
  //       {
  //         headers: {
  //           method: "no-cors",
  //           "Access-Control-Allow-Origin": "http://localhost:3006",
  //         },
  //       }
  //     )
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .finally(() => setLoading(false));
  // }

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

  const handleSelectChange = (selectedOption: any) => {
    setNewPlayer((prevState) => {
      return {
        ...prevState,
        imagestring: selectedOption.value,
      };
    });
    console.log(newPlayer);
  };

  const handleInputChange = (event: any) => {
    setIsEmpty(false);
    const { name, value } = event.target;
    console.log(newPlayer);
    setNewPlayer((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const list = () => {
    return gameData.map((player: any, index: any) => {
      return (
        <Card
          style={{
            position: "absolute",
            left: 24 * index,
            transform: `scale(${
              index == gameData.length - 1
                ? 1
                : 1 - 0.025 * (gameData.length - index)
            })`,
          }}
        >
          <M_Card
            type="chCreate"
            key={player.id}
          >
            <FlexBox direction="column">
              <PlayerAvatarWrapper>
                <PlayerAvatar src={`${player.imagestring}`} alt="new" />
              </PlayerAvatarWrapper>
              <FlexBox
                direction="column"
                style={{
                  gap: 6,
                  marginTop: 18,
                  marginLeft: 14,
                  marginRight: 14,
                }}
              >
                <InfoFlexBox>
                  <PlayerInfo>{player.name}</PlayerInfo>
                  <FlyingLabel className="ppmedium">Имя персонажа</FlyingLabel>
                </InfoFlexBox>
                <InfoFlexBox>
                  <PlayerInfo>{player.username}</PlayerInfo>
                  <FlyingLabel className="ppmedium">Имя игрока</FlyingLabel>
                </InfoFlexBox>
                <InfoFlexBox>
                  <PlayerInfo>{player.ins}</PlayerInfo>
                  <FlyingLabel className="ppmedium">
                    Проницательность // Insight
                  </FlyingLabel>
                </InfoFlexBox>
                <InfoFlexBox>
                  <PlayerInfo>{player.inv}</PlayerInfo>
                  <FlyingLabel className="ppmedium">
                    Расследование // Investigation
                  </FlyingLabel>
                </InfoFlexBox>
                <InfoFlexBox>
                  <PlayerInfo>{player.perc}</PlayerInfo>
                  <FlyingLabel className="ppmedium">
                    Восприятие // Perception
                  </FlyingLabel>
                </InfoFlexBox>
                <InfoFlexBox style={{ marginBottom: 34 }}>
                  <PlayerInfo>{player.language}</PlayerInfo>
                  <FlyingLabel className="ppmedium">Языки</FlyingLabel>
                </InfoFlexBox>
                <A_Button
                  warning
                  handleButtonClick={() => console.log("Это был пранк")}
                >
                  Удалить
                </A_Button>
              </FlexBox>
            </FlexBox>
          </M_Card>
        </Card>
      );
    });
  };

  return (
    <>
      {isLoading ? (
        <A_Loader></A_Loader>
      ) : (
        <AuthWrapper className="AuthWrapper">
          {gameData.length > 0 ? (
            <CardStack
              className="CardStakc"
              style={{ width: 24 * (gameData.length - 1) + 420 }}
            >
              {list()}
            </CardStack>
          ) : (
            <BlankColumn></BlankColumn>
          )}
          <ActionWrapper direction="column">
            <M_Card type="chCreate">
              <FlexBox direction="column">
                <Select
                  options={options}
                  styles={colourStyles}
                  name="imagestring"
                  onChange={handleSelectChange}
                  formatOptionLabel={(country) => (
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        width: "100%",
                        height: "100%",
                      }}
                      className="country-option"
                    >
                      <img
                        src={country.image}
                        alt="country-image"
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  )}
                  isSearchable={false}
                  placeholder={
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        marginTop: "32px",
                      }}
                    >
                      <img
                        style={{ width: 22, height: 28 }}
                        src={url}
                        alt="country-image"
                      />
                      <p>Выберите аватар</p>
                    </div>
                  }
                  components={{
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }}
                />
                <div
                  style={{ paddingLeft: 14, paddingRight: 14, paddingTop: 18 }}
                >
                  <A_Input
                    name="name"
                    type="text"
                    placeholder="Почта"
                    onChange={handleInputChange}
                    label="Имя игрока"
                    style={{ marginBottom: 6 }}
                    value={newPlayer.name}
                  ></A_Input>
                  <A_Input
                    name="username"
                    type="text"
                    placeholder="Пароль"
                    onChange={handleInputChange}
                    className={isEmpty ? "empty" : ""}
                    label="Имя игрока"
                    style={{ marginBottom: 6 }}
                    value={newPlayer.username}
                  ></A_Input>
                  <A_Input
                    name="ins"
                    ins
                    type="number"
                    placeholder="Пароль"
                    onChange={handleInputChange}
                    className={isEmpty ? "empty" : ""}
                    label="Проницательность"
                    style={{ marginBottom: 6 }}
                    value={newPlayer.ins}
                  ></A_Input>
                  <A_Input
                    name="inv"
                    type="number"
                    placeholder="Пароль"
                    onChange={handleInputChange}
                    className={isEmpty ? "empty" : ""}
                    label="Расследование"
                    style={{ marginBottom: 6 }}
                    value={newPlayer.inv}
                    inv
                  ></A_Input>
                  <A_Input
                    name="perc"
                    type="number"
                    perc
                    placeholder="Пароль"
                    onChange={handleInputChange}
                    className={isEmpty ? "empty" : ""}
                    label="Восприятие"
                    style={{ marginBottom: 6 }}
                    value={newPlayer.perc}
                  ></A_Input>
                  <A_Input
                    name="language"
                    type="text"
                    placeholder="Пароль"
                    onChange={handleInputChange}
                    className={isEmpty ? "empty" : ""}
                    label="Языки"
                    style={{ marginBottom: 40 }}
                    value={newPlayer.language}
                  ></A_Input>
                  <A_Button
                    disabled={
                      newPlayer.username === "" ||
                      newPlayer.name === "" ||
                      newPlayer.ins === "" ||
                      newPlayer.inv === "" ||
                      newPlayer.perc === "" ||
                      newPlayer.language === "" ||
                      newPlayer.imagestring === ""
                    }
                    handleButtonClick={handleSubmit}
                  >
                    Добавить
                  </A_Button>
                </div>
              </FlexBox>
            </M_Card>
          </ActionWrapper>
          <O_Tracker step="gamecreation">
            <Link to="../game" state={{ code: code }}>
              <A_Button
                solid
                handleButtonClick={() => console.log("Next Step")}
                disabled={gameData.length < 1}
              >
                Продолжить
              </A_Button>
            </Link>
          </O_Tracker>
        </AuthWrapper>
      )}
    </>
  );
}
