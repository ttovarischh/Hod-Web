import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { FlexBox } from "../../components/Common";
import styled from "styled-components";
import A_Button from "../../components/Atoms/A_Button";
import useAuth from "../../authContext/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { ThemeContext } from "styled-components";
import A_Loader from "../../components/Atoms/A_Loader";
import A_Counter from "../../components/Atoms/A_Counter";
import A_InactiveField from "../../components/Atoms/A_InactiveField";
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

export default function Profile() {
  const [isLoading, setLoading] = useState(true);
  const [effectsData, setEffectsData] = useState<any[]>([]);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  const { t } = useTranslation();

  const doLogout = () => {
    logout(user!.email);
    navigate("/");
  };

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

  const filteredGames = effectsData.filter((game) => !game.active);

  if (isLoading) {
    return <A_Loader></A_Loader>;
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
      <FlexBox direction="column" style={{ gap: 12 }}>
        <A_InactiveField header={t("common:email")}>
          {user!.email}
        </A_InactiveField>
        <A_InactiveField header={t("common:password")}>∗∗∗∗∗∗∗</A_InactiveField>
        <A_InactiveField header={t("common:nick")}>
          {user!.username}
        </A_InactiveField>
      </FlexBox>
      <FlexBox alignItems="center" style={{ gap: 42 }}>
        <Link to="../settings">
          <A_Button solid>{t("common:settings")}</A_Button>
        </Link>
        <A_Button secondary handleButtonClick={doLogout}>
          {t("common:logout")}
        </A_Button>
      </FlexBox>
      <MainImage
        style={{
          backgroundImage: "url(" + require("../../images/bird.png") + ")",
        }}
      ></MainImage>
    </ProfileWrapper>
  );
}
