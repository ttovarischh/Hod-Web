import styled from "styled-components";
import { FlexBox } from "../Common/FlexBox";
import { useState } from "react";
import axios from "axios";

type Props = {
  active: boolean;
  playerId: any;
  code: any;
};

const ToggleWrapper = styled(FlexBox)<{ active?: boolean }>`
  width: 70px;
  height: 30px;
  background: ${(props) => (!props.active ? "#383838" : "#F0FF00")};
  border-radius: 30px;
  padding: 3px;
`;

const Toggle = styled(FlexBox)<{ active?: boolean }>`
  cursor: pointer;
  width: 30px;
  height: 30px;
  background: ${(props) => (!props.active ? "#EDF2DC" : "#1A1A1A")};
  margin-left: ${(props) => (props.active ? "40px" : 0)};
  opacity: 0.8;
  transition: 0.5s ease all;
  border-radius: 30px;
  &:hover {
    opacity: 1;
  }
`;

const A_Toggle = ({ active, code, playerId }: Props) => {
  const [isActive, setIsActive] = useState(active);

  const handleToggleConc = (event: any) => {
    if (active) {
      axios
        .patch(
          `http://localhost:3000/api/v1/games/${code}/players/${playerId}`,
          {
            player: {
              conc: false,
            },
          }
        )
        .then((response) => {})
        .catch((error) => console.error(error))
        .finally();
    } else {
      axios
        .patch(
          `http://localhost:3000/api/v1/games/${code}/players/${playerId}`,
          {
            player: {
              conc: true,
            },
          }
        )
        .then((response) => {})
        .catch((error) => console.error(error))
        .finally();
    }
  };

  return (
    <ToggleWrapper active={isActive}>
      <Toggle active={isActive} onClick={handleToggleConc} />
    </ToggleWrapper>
  );
};

export default A_Toggle;
