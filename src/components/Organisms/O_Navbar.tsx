import styled from "styled-components";
import { FlexBox, H_Text } from "../Common";
import { Link } from "react-router-dom";
import A_Icon from "../Atoms/A_Icon";
import useAuth from "../../authContext/useAuth";

const NavBar = styled(FlexBox)`
  position: absolute;
  opacity: 0.5;
  top: 0;
  left: 0;
  height: 80px;
  width: calc(100vw - 132px);
  padding-left: 66px;
  padding-right: 66px;
  align-items: center;
  justify-content: space-between;
  a {
    color: white !important;
  }
`;

const O_Navbar = (props: any) => {
  const { user } = useAuth();
  return (
    <NavBar>
      <Link to={`/`} style={{ textDecoration: "none" }}>
        <A_Icon iconName="logo" fill="white"></A_Icon>
      </Link>
      {user ? (
        <Link to={`account`} style={{ textDecoration: "none" }}>
          <H_Text medium>{user!.username}</H_Text>
        </Link>
      ) : (
        <Link to={`login`} style={{ textDecoration: "none" }}>
          <H_Text medium>Войти</H_Text>
        </Link>
      )}
    </NavBar>
  );
};

export default O_Navbar;
