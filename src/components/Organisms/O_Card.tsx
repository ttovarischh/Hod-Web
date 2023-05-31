import styled from "styled-components";
import { FlexBox } from "../Common";
import A_Avatar from "../Atoms/A_Avatar";
import M_CardPart from "../Molecules/M_CardPart";

type Props = {
  monster?: boolean;
  imagestring?: any;
  playerName?: any;
  username?: any;
  inv?: any;
  perc?: any;
  ins?: any;
  langs?: any;
  effects?: any;
  playerEffects?: any;
  superSmall?: boolean;
  handlePlusClick?: any;
};

const PcCardWrapper = styled(FlexBox)`
  flex-direction: column;
  background: #0e0e0e;
  border-radius: 20px;
  overflow: hidden;
  width: 420px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const BottomStates = styled(FlexBox)`
  padding: 12px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 24px;
`;

const UpperStates = styled(FlexBox)`
  gap: 2px;
  padding: 6px;
  padding-right: 14px;
  background: #1c1c1c;
  border-bottom-left-radius: 20px;
  border-ottom-right-radius: 20px;
`;

const O_Card = ({
  monster,
  imagestring,
  playerName,
  username,
  inv,
  perc,
  ins,
  langs,
  playerEffects,
  effects,
  superSmall,
  handlePlusClick,
  ...rest
}: Props) => {
  return (
    <PcCardWrapper>
      <UpperStates>
        <A_Avatar imagestring={imagestring} />
        <M_CardPart
          playerName={playerName}
          username={username}
          ins={ins}
          perc={perc}
          inv={inv}
        />
      </UpperStates>
      {!superSmall && (
        <BottomStates>
          <M_CardPart
            states
            small
            info={effects}
            handlePlusClick={handlePlusClick}
          />
          <M_CardPart langs small info={langs} />
        </BottomStates>
      )}
    </PcCardWrapper>
  );
};

export default O_Card;
