import styled from "styled-components";
import { FlexBox } from "./FlexBox";
import { HeaderFooter } from "./StyledFont";
import { Link } from "react-router-dom";
import A_Icon from "./A_Icon";
import useAuth from "../authContext/useAuth";

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
          <HeaderFooter>{user!.username}</HeaderFooter>
        </Link>
      ) : (
        <Link to={`login`} style={{ textDecoration: "none" }}>
          <HeaderFooter>Профиль</HeaderFooter>
        </Link>
      )}
    </NavBar>
  );
};

export default O_Navbar;
