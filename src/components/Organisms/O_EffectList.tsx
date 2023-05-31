import styled from "styled-components";
import { FlexBox, A_Text, H_Text } from "../Common";
import A_Icon from "../Atoms/A_Icon";
import A_Tag from "../Atoms/A_Tag";

type ButtonProps = {
  effectsData?: any;
  handleCloseModal?: any;
  playerEffects?: any;
};

const Wrapper = styled(FlexBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  gap: 40px;
  position: absolute;
  width: 900px;
  top: 18vh;
  left: calc(50vw - 450px);
  background: #0e0e0e;
  border: 1px solid #262626;
  border-radius: 20px;
  z-index: 1002;
`;

const EffectHeader = styled(FlexBox)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Row = styled(FlexBox)`
  gap: 12px;
  max-width: 97%;
`;

const Column = styled(FlexBox)`
  flex-direction: column;
  gap: 16px;
`;

const O_EffectList = ({
  effectsData,
  handleCloseModal,
  playerEffects,
}: ButtonProps) => {
  const secondRow = [
    "Истощен: уровень 1",
    "Истощен: уровень 2",
    "Истощен: уровень 3",
    "Истощен: уровень 4",
    "Истощен: уровень 5",
    "Истощен: уровень 6",
  ];
  const thirdRow = ["+1к4", "+1к6", "+1к8", "-1к4", "-1к6", "-1к8"];
  const list = () => {
    return effectsData
      ?.filter(
        (effect: any) =>
          playerEffects &&
          !playerEffects.some(
            (playerEffect: any) => playerEffect.id === effect.id
          )
      )
      .map((effect: any, index: any) => {
        return <A_Tag key={index}>{effect.name}</A_Tag>;
      });
  };
  const listB = () => {
    return secondRow.map((effect: any, index: any) => {
      return <A_Tag key={index}>{effect}</A_Tag>;
    });
  };
  const listC = () => {
    return thirdRow.map((effect: any, index: any) => {
      return <A_Tag key={index}>{effect}</A_Tag>;
    });
  };

  return (
    <>
      {effectsData && (
        <Wrapper>
          <FlexBox>
            <EffectHeader style={{ alignItems: "baseline" }}>
              <A_Text>Состояния</A_Text>
              <FlexBox style={{ cursor: "pointer" }} onClick={handleCloseModal}>
                <A_Icon fill="#7C7C7C" iconName="TagCross" />
              </FlexBox>
            </EffectHeader>
            <Row>{list()}</Row>
          </FlexBox>
          <Column>
            <H_Text color="#A4A4AC">Истощение</H_Text>
            <Row>{listB()}</Row>
          </Column>
          <Column>
            <H_Text color="#A4A4AC">Эффекты заклинаний и способностей</H_Text>
            <Row style={{ maxWidth: "100%" }}>{listC()}</Row>
          </Column>
        </Wrapper>
      )}
    </>
  );
};

export default O_EffectList;
