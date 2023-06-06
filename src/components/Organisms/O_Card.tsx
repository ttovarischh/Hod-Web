import styled from "styled-components";
import { FlexBox } from "../Common";
import A_Avatar from "../Atoms/A_Avatar";
import M_CardPart from "../Molecules/M_CardPart";
import A_Input from "../Atoms/A_Input";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useState } from "react";

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
  superSmall?: boolean;
  handlePlusClick?: any;
  fight?: boolean;
  conc?: any;
  code?: any;
  playerId?: any;
  initiativeSet?: boolean;
  handleInitiativeInputChange?: any;
  initiative?: any;
  armor?: any;
  hp?: any;
  active?: boolean;
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
  armor,
  hp,
  active,
  ...rest
}: Props) => {
  const { t } = useTranslation();
  const [newInitiative, setNewInitiative] = useState("");
  const [newHp, setNewHp] = useState("");

  const handleDeleteClick = (effect_id: any) => {
    axios
      .delete(
        `http://localhost:3000/api/v1/games/${code}/${
          monster ? `monsters` : `players`
        }/${playerId}/effects`,
        {
          data: { effect_id: effect_id },
        }
      )
      .then((response) => {})
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {});
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      axios
        .patch(
          `http://localhost:3000/api/v1/games/${code}/${
            monster ? "monsters" : "players"
          }/${playerId}`,
          {
            [monster ? "monster" : "player"]: {
              initiative: newInitiative,
            },
          }
        )
        .then((response) => {
          setNewInitiative("");
        })
        .catch((error) => console.error(error))
        .finally(() => {});
    }
  };

  const handleKeyHpPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // @ts-ignore
    const minus = hp - newHp;
    console.log(minus);
    if (event.key === "Enter") {
      axios
        .patch(
          `http://localhost:3000/api/v1/games/${code}/monsters/${playerId}`,
          {
            monster: {
              hp: minus,
            },
          }
        )
        .then((response) => {
          setNewHp("");
        })
        .catch((error) => console.error(error))
        .finally(() => {});
    }
  };

  return (
    <PcCardWrapper
      fight={fight}
      monster={monster}
      {...rest}
      style={{
        boxShadow:
          initiativeSet && active
            ? "0px 0px 9px 1px rgba(240, 255, 0, 0.5)"
            : "none",
      }}
    >
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
                  placeholder={t("common:hp")}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const { value } = event.target;
                    setNewHp(value);
                    console.log("UR INITIATIVE", newHp);
                  }}
                  onKeyDown={handleKeyHpPress}
                  label={t("common:hp")}
                  value={newHp}
                  maxLength={2}
                  hpInput={true}
                  hp={hp}
                ></A_Input>
              )}
            </FlexBox>
            {(initiativeSet || !fight) && (
              <>
                <FlexBox style={{ height: 20, width: 139 }} />
                <M_CardPart armor={armor} />
              </>
            )}
          </>
        )}
      </UpperStates>

      {fight && !initiativeSet && (
        <InputWrapper>
          <A_Input
            name="initiative"
            type="text"
            placeholder={t("common:initiative")}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const { value } = event.target;
              setNewInitiative(value);
              console.log("UR INITIATIVE", value);
            }}
            onKeyDown={handleKeyPress}
            label={t("common:initiative")}
            value={newInitiative}
            maxLength={2}
            style={{ width: 380, marginLeft: 11 }}
            special
          ></A_Input>
        </InputWrapper>
      )}
      {((!superSmall && initiativeSet) || !fight) && (
        <BottomStates>
          <M_CardPart
            states
            small
            info={effects[playerId]}
            handlePlusClick={handlePlusClick}
            handleRemoveTag={handleDeleteClick}
          />

          {fight && initiativeSet && (
            <FlexBox>
              <M_CardPart
                toggleConc
                conc={conc}
                id={playerId}
                code={code}
                monster={monster}
              />
            </FlexBox>
          )}
          {!fight && <M_CardPart langs small info={langs} />}
        </BottomStates>
      )}
    </PcCardWrapper>
  );
};

export default O_Card;
