import styled from "styled-components";
import { FlexBox } from "../Common";
import A_Avatar from "../Atoms/A_Avatar";
import M_CardPart from "../Molecules/M_CardPart";
import A_Input from "../Atoms/A_Input";

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
  fight?: boolean;
  conc?: any;
  code?: any;
  playerId?: any;
  initiativeSet?: boolean;
  handleInitiativeInputChange?: any;
  initiative?: any;
};

const PcCardWrapper = styled(FlexBox)<{ fight?: boolean; monster?: boolean }>`
  flex-direction: column;
  background: #0e0e0e;
  border-radius: 20px;
  width: 420px;
  transition: all 0.5s ease;

  &:hover {
    ${(props) => !props.fight && `transform: scale(1.05);`}
  }
`;

const BottomStates = styled(FlexBox)`
  padding: 12px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 24px;
`;

const UpperStates = styled(FlexBox)<{
  initiativeSet?: boolean;
  monster?: boolean;
}>`
  gap: 2px;
  padding: 6px;
  padding-right: 14px;
  padding-left: ${(props) => (props.monster ? "12px" : "6px")};
  background: #1c1c1c;
  border-radius: 20px;
  border-bottom-left-radius: ${(props) =>
    props.initiativeSet ? "20px" : "0px"};
  border-bottom-right-radius: ${(props) =>
    props.initiativeSet ? "20px" : "0px"};
  flex-flow: row;
  width: -webkit-fill-available;
  position: relative;
`;

const InputWrapper = styled(FlexBox)`
  background: #1c1c1c;
  align-content: center;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
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
  fight,
  conc,
  code,
  playerId,
  initiativeSet,
  handleInitiativeInputChange,
  initiative,
  ...rest
}: Props) => {
  return (
    <PcCardWrapper fight={fight} monster={monster} {...rest}>
      <UpperStates initiativeSet={initiativeSet} monster={monster}>
        {!monster && (
          <>
            <A_Avatar imagestring={imagestring} />
            <M_CardPart
              playerName={playerName}
              username={username}
              ins={ins}
              perc={perc}
              inv={inv}
            />
          </>
        )}
        {monster && (
          <>
            <FlexBox direction="column">
              <FlexBox style={{ width: !initiativeSet ? 400 : 232 }}>
                <M_CardPart
                  playerName={playerName}
                  username={username}
                  ins={ins}
                  perc={perc}
                  inv={inv}
                  monster={monster}
                />
              </FlexBox>
              {initiativeSet && (
                <A_Input
                  name="initiative"
                  type="text"
                  placeholder="Очки здоровья"
                  onChange={handleInitiativeInputChange}
                  label="Очки здоровья"
                  value={initiative}
                  maxLength={2}
                  hpInput={true}
                  hp={0}
                ></A_Input>
              )}
            </FlexBox>
            {initiativeSet && (
              <>
                <FlexBox style={{ height: 20, width: 139 }} />
                <M_CardPart armor={19} />
              </>
            )}
          </>
        )}
        {/* {monster && <A_Avatar monster={monster} imagestring={imagestring} />} */}
      </UpperStates>

      {fight && !initiativeSet && (
        <InputWrapper>
          <A_Input
            name="initiative"
            type="text"
            placeholder="Инициатива"
            onChange={handleInitiativeInputChange}
            label="Инициатива"
            value={initiative}
            maxLength={2}
            style={{ width: 380, marginLeft: 11 }}
            special
          ></A_Input>
        </InputWrapper>
      )}
      {!superSmall && initiativeSet && (
        <BottomStates>
          <M_CardPart
            states
            small
            info={effects}
            handlePlusClick={handlePlusClick}
          />

          {fight && initiativeSet && (
            <FlexBox>
              <M_CardPart toggleConc conc={conc} id={playerId} code={code} />
            </FlexBox>
          )}
          {!fight && <M_CardPart langs small info={langs} />}
        </BottomStates>
      )}
    </PcCardWrapper>
  );
};

export default O_Card;
