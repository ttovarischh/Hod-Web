import styled from "styled-components";
import { FlexBox } from "../Common";
import A_Button from "../Atoms/A_Button";
import A_Tracker from "../Atoms/A_Tracker";
import A_SmallTracker from "../Atoms/A_SmallTracker";

type ButtonProps = {
  players?: any;
  turn?: any;
  handleNextTurn?: any;
  handleFinishFight?: any;
};

const MiddleTracker = styled(FlexBox)`
  width: 100%;
  height: 72px;
  background: #0e0e0e;
  align-items: center;
  justify-content: space-between;
`;

const O_InitiativeTracker = ({
  players,
  turn,
  handleNextTurn,
  handleFinishFight,
}: ButtonProps) => {
  return (
    <MiddleTracker>
      <A_Tracker data={players}></A_Tracker>
      <A_SmallTracker turn={turn} />
      <FlexBox style={{ gap: 20, marginRight: 66 }}>
        <A_Button handleButtonClick={handleNextTurn} tracker>
          Следующий ход
        </A_Button>
        <A_Button handleButtonClick={handleFinishFight} secondary tracker>
          Выйти из инициативы
        </A_Button>
      </FlexBox>
    </MiddleTracker>
  );
};

export default O_InitiativeTracker;
