import styled from "styled-components";
import { FlexBox, A_Text, C_Text, J_Text, B_Text } from "../Common";
import A_Icon from "../Atoms/A_Icon";

type ButtonProps = {
  effect: {
    id: number;
    name: string;
    descr: string;
  };
  handleCloseModal?: any;
};

const Wrapper = styled(FlexBox)`
  position: absolute;
  left: calc(61vw - 374px);
  top: 20vh;
  width: 748px;
  padding: 20px;
  flex-direction: column;
  background: #0e0e0e;
  border: 1px solid #262626;
  box-shadow: 2px 2px 13px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const EffectHeader = styled(FlexBox)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 21px;
`;

const TextWrapper = styled(FlexBox)`
  width: 93%;
`;

const DescrRow = styled(FlexBox)`
  flex-wrap: nowrap;
`;

const O_EffectCard = ({ effect, handleCloseModal }: ButtonProps) => {
  const extractFirstSentence = (text: string) => {
    const dotIndex = text.indexOf(".");
    if (dotIndex !== -1) {
      return text.substring(0, dotIndex + 1);
    }
    return text;
  };

  const supersplit = () => {
    let text = effect.descr;
    const dotIndex = text.indexOf(".");
    let descr = text.substring(dotIndex + 1).trim();
    const descrArray = descr.split(". ");
    return descrArray.map((descrOne: string, index: any) => {
      return (
        <DescrRow key={index}>
          <J_Text offsetTop={2} offsetRight={24}>
            ({index + 1})
          </J_Text>
          <FlexBox style={{ width: "100%" }}>
            <B_Text color="#A4A4AC">{descrOne}.</B_Text>
          </FlexBox>
        </DescrRow>
      );
    });
  };

  return (
    <>
      {effect && effect.name && (
        <Wrapper>
          <EffectHeader style={{ alignItems: "baseline" }}>
            <A_Text>{effect.name}</A_Text>
            <FlexBox style={{ cursor: "pointer" }} onClick={handleCloseModal}>
              <A_Icon fill="#7C7C7C" iconName="TagCross" />
            </FlexBox>
          </EffectHeader>
          <TextWrapper>
            <C_Text offsetBottom={51}>
              {extractFirstSentence(effect.descr)}
            </C_Text>
          </TextWrapper>
          <TextWrapper>{supersplit()}</TextWrapper>
        </Wrapper>
      )}
    </>
  );
};

export default O_EffectCard;
