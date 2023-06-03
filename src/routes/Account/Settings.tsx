import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { FlexBox } from "../../components/Common";
import styled from "styled-components";
import A_Button from "../../components/Atoms/A_Button";
import useAuth from "../../authContext/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { ThemeContext } from "styled-components";
import A_Loader from "../../components/Atoms/A_Loader";
import A_Input from "../../components/Atoms/A_Input";
import A_Counter from "../../components/Atoms/A_Counter";
import A_UnderlinedButton from "../../components/Atoms/A_UnderlinedButton";
import { useTranslation } from "react-i18next";

const ProfileWrapper = styled(FlexBox)`
  padding-top: 88px;
  padding-left: 66px;
  padding-right: 66px;
  width: 100%;
  height: calc(100vh - 176px);
  justify-content: space-between;
`;

const MainImage = styled.div`
  position: absolute;
  background-size: auto 100vh;
  height: 100%;
  width: 972px;
  right: -100px;
  background-repeat: no-repeat;
  background-position: center right;
  top: 50px;
  pointer-events: none;
`;

export default function Settings() {
  const [isLoading, setLoading] = useState(true);
  const [effectsData, setEffectsData] = useState<any[]>([]);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();
  const [newUser, setNewUser] = useState({
    email: user!.email,
    password: "",
    username: user!.username,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/users/" + user!.id)
      .then(({ data }) => {
        setEffectsData(data.games);
        console.log(effectsData);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    console.log(newUser);
    setNewUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (newUser.email !== user!.email) {
      console.log("Email changed");
    } else if (newUser.username !== user!.username) {
      console.log("Username changed");
    }
    navigate("/account");
  };

  const filteredGames = effectsData.filter((game) => !game.active);

  if (isLoading) {
    return <A_Loader />;
  }

  return (
    <ProfileWrapper direction="column">
      <FlexBox style={{ gap: 80 }}>
        <A_Counter header={t("common:masteredGames")}>
          {effectsData!.length}
        </A_Counter>
        <A_Counter header={t("common:playedGames")}>
          {filteredGames!.length}
        </A_Counter>
      </FlexBox>
      <form
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          flex: 1,
          marginTop: 90,
        }}
      >
        <FlexBox direction="column" style={{ gap: 12 }}>
          <A_Input
            name="email"
            type="email"
            placeholder={user!.email}
            onChange={handleInputChange}
            label={user!.email}
            style={{ marginBottom: 12 }}
          ></A_Input>
          <A_Input
            name="password"
            type="password"
            placeholder="∗∗∗∗∗∗∗"
            onChange={handleInputChange}
            label="∗∗∗∗∗∗∗"
            style={{ marginBottom: 12 }}
          ></A_Input>
          <A_Input
            name="nickname"
            type="text"
            placeholder={user!.username}
            onChange={handleInputChange}
            label={user!.username}
            style={{ marginBottom: 12 }}
          ></A_Input>
        </FlexBox>
        <FlexBox direction="column" alignItems="center">
          <FlexBox alignItems="center" style={{ gap: 46 }}>
            <Link to="login">
              <A_Button secondary handleButtonClick={() => navigate(-1)}>
                {t("common:cancelSettings")}
              </A_Button>
            </Link>
            <A_Button handleButtonClick={handleSubmit}>
              {t("common:saveSettings")}
            </A_Button>
          </FlexBox>
          <A_UnderlinedButton>{t("common:deleteAccount")}</A_UnderlinedButton>
        </FlexBox>
      </form>
      <MainImage
        style={{
          backgroundImage: "url(" + require("../../images/bird.png") + ")",
        }}
      ></MainImage>
    </ProfileWrapper>
  );
}
