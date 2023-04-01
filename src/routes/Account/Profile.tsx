import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { FlexBox, Big_Panama, Note, Large } from "../../components";
import styled from "styled-components";
import A_Button from "../../components/A_Button";
import useAuth from "../../authContext/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { ThemeContext } from "styled-components";
import A_Loader from "../../components/A_Loader";

const ProfileWrapper = styled(FlexBox)`
  padding-top: 88px;
  padding-left: 66px;
  padding-right: 66px;
  width: 100%;
  height: calc(100vh - 176px);
  justify-content: space-between;
`;

const CountFlexbox = styled(FlexBox)``;
const UserInfo = styled(FlexBox)``;

const Label = styled.p`
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.011em;
  color: #a4a4ac;
  margin: 0;
  margin-bottom: 4px;
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
  console.log(filteredGames);

  return (
    <>
      {isLoading ? (
        <A_Loader></A_Loader>
      ) : (
        <ProfileWrapper direction="column">
          <FlexBox style={{ gap: 80 }}>
            <CountFlexbox direction="column">
              <Big_Panama>{effectsData!.length}</Big_Panama>
              <Large color={theme.text.grey}>игр сыграно</Large>
            </CountFlexbox>
            <CountFlexbox direction="column">
              <Big_Panama>{filteredGames!.length}</Big_Panama>
              <Large color={theme.text.grey}>игр проведено</Large>
            </CountFlexbox>
          </FlexBox>
          <UserInfo direction="column" style={{ gap: 12 }}>
            <FlexBox direction="column">
              <Label className="ppmedium">Почта</Label>
              <Note>{user!.email}</Note>
            </FlexBox>
            <FlexBox direction="column">
              <Label className="ppmedium">Пароль</Label>
              <Note>∗∗∗∗∗∗∗</Note>
            </FlexBox>
            <FlexBox direction="column">
              <Label className="ppmedium">Никнейм</Label>
              <Note>{user!.username}</Note>
            </FlexBox>
          </UserInfo>
          <FlexBox alignItems="center" style={{ gap: 42 }}>
            <Link to="../settings">
              <A_Button solid>Редактировать профиль</A_Button>
            </Link>
            <Note>или</Note>
            <A_Button handleButtonClick={doLogout}>Выйти из профиля</A_Button>
          </FlexBox>
          <MainImage
            style={{
              backgroundImage: "url(" + require("../../images/bird.png") + ")",
            }}
          ></MainImage>
        </ProfileWrapper>
      )}
    </>
  );
}
