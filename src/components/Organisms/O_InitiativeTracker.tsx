import styled from "styled-components";
import { FlexBox } from "../Common";
import A_Button from "../Atoms/A_Button";
import A_Tracker from "../Atoms/A_Tracker";
import A_SmallTracker from "../Atoms/A_SmallTracker";
import { useTranslation } from "react-i18next";

type ButtonProps = {
  players?: any;
  turn?: any;
  handleNextTurn?: any;
  handleFinishFight?: any;
  activePlayerIndex?: any;
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
  activePlayerIndex,
}: ButtonProps) => {
  const { t } = useTranslation();

  return (
    <MiddleTracker>
      <A_Tracker
        data={players}
        activePlayerIndex={activePlayerIndex}
      ></A_Tracker>
      <A_SmallTracker turn={turn} />
      <FlexBox style={{ gap: 20, marginRight: 66 }}>
        <A_Button handleButtonClick={handleNextTurn} tracker>
          {t("common:nextTurn")}
        </A_Button>
        <A_Button handleButtonClick={handleFinishFight} secondary tracker>
          {t("common:fightFalse")}
        </A_Button>
      </FlexBox>
    </MiddleTracker>
  );
};

export default O_InitiativeTracker;
