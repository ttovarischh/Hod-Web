import styled from "styled-components";
import { FlexBox, Panama, E_Text, D_Text } from "../components/Common";
import A_Button from "../components/Atoms/A_Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../authContext/useAuth";
import { useTranslation } from "react-i18next";

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

const PPWrapper = styled(FlexBox)`
  position: relative;
  width: 884px;
  padding-top: 85px;
  gap: 39px;
`;

const MainImage = styled.div`
  position: absolute;
  background-size: auto 100vh;
  height: 100%;
  width: 972px;
  right: 0;
  background-repeat: no-repeat;
  background-position: center right;
  top: 0px;
  pointer-events: none;
`;

export default function Home() {
  const { user } = useAuth();
  const dateTime = new Date().toJSON();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!user!.jwt) {
      console.log("Error: missing token");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/v1/games", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user!.jwt}`,
          jti: `${user!.jti}`,
          "Authorization-Session": `Bearer ${user!.jwt}`,
        },
        body: JSON.stringify({
          game: {
            name: dateTime,
          },
          session: user!.jwt,
        }),
      });
      const data = await response.json();
      console.log(`Game with a name ${dateTime} created successfully!`);
      console.log(data);
      navigate("/create", { state: { code: data.code } });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <HomeWrapper>
      <PPWrapper>
        <Panama>{t("common:name")}</Panama>
        <D_Text>{t("common:hello")}</D_Text>
        <D_Text>{t("common:hello1")}</D_Text>
      </PPWrapper>
      <FlexBox direction="column" style={{ gap: 20, marginBottom: 16 }}>
        <E_Text>{user ? t("common:start") : t("common:doLogin")}</E_Text>
        <FlexBox alignItems="center" style={{ gap: 42 }}>
          {!user ? (
            <>
              <Link to="login">
                <A_Button
                  solid
                  handleButtonClick={() => console.log("Clicked")}
                >
                  {t("common:login")}
                </A_Button>
              </Link>
              <E_Text>{t("common:or")}</E_Text>
              <Link to="registration">
                <A_Button
                  secondary
                  handleButtonClick={() => console.log("Clicked")}
                >
                  {t("common:signUp")}
                </A_Button>
              </Link>
            </>
          ) : (
            <>
              <A_Button handleButtonClick={handleSubmit}>
                {t("common:createGame")}
              </A_Button>
            </>
          )}
        </FlexBox>
      </FlexBox>
      <MainImage
        style={{
          backgroundImage: "url(" + require("../images/dragon.png") + ")",
        }}
      ></MainImage>
    </HomeWrapper>
  );
}
