import styled from "styled-components";
import { FlexBox, Panama, Large, Note } from "../components";

const PrivacyWrapper = styled(FlexBox)`
  width: 100%;
  padding-left: 66px;
  padding-right: 66px;
  padding-top: 96px;
  padding-bottom: 181px;
  overflow: hidden;
  position: relative;
  direction: column;
`;

const PPWrapper = styled(FlexBox)`
  position: relative;
  width: 884px;
  padding-top: 85px;
  gap: 39px;
  margin-bottom: 180px;
`;

const MainImage = styled.div`
  position: absolute;
  background-size: 64vw auto;
  height: 100%;
  width: 924px;
  height: 1392px;
  left: -17vw;
  top: 20vw;
  pointer-events: none;
`;

export default function About() {
  return (
    <PrivacyWrapper direction="column">
      <MainImage
        style={{
          backgroundImage: "url(" + require("../images/lady.png") + ")",
        }}
      ></MainImage>
      <PPWrapper style={{ width: "65vw" }}>
        <Panama color="#4C4C4C">О проекте</Panama>
        <Large color="white">
          &laquo;Ход&raquo;&nbsp;&mdash; это приложение-трекер для отслеживания
          инициативы, количества ходов и&nbsp;продолжительных состояний для
          игроков в&nbsp;нри.
        </Large>
      </PPWrapper>

      <FlexBox direction="column" style={{ marginLeft: "auto", marginRight: 0 }}>
        <PPWrapper style={{ width: "57vw", paddingTop: 248 }}>
          <Panama color="#4C4C4C">Для Мастеров</Panama>
          <Large color="white">
            Сделай свои игры более дружелюбными к&nbsp;новичкам, показав
            им&nbsp;больше информации и&nbsp;помоги опытным игрокам улучшить
            свои тактики
          </Large>
          <FlexBox>
            <FlexBox direction="column" style={{ width: "50%" }}>
              <FlexBox style={{ gap: 31, marginTop: 26, flexWrap: "nowrap" }}>
                <Note color="white">
                  Теперь не&nbsp;надо спрашивать языки и&nbsp;пассивные
                  характеристики, они всегда под рукой
                </Note>
              </FlexBox>
              <FlexBox style={{ gap: 25, marginTop: 24, flexWrap: "nowrap" }}>
                <Note color="white">
                  Делись информацией об&nbsp;эффектах, наложенных
                  на&nbsp;персонажей и&nbsp;нпс
                </Note>
              </FlexBox>
            </FlexBox>

            <FlexBox direction="column" style={{ width: "50%" }}>
              <FlexBox style={{ gap: 31, marginTop: 26, flexWrap: "nowrap" }}>
                <Note color="white">
                  Отслеживай концентрацию и&nbsp;пс, и&nbsp;нпс
                </Note>
              </FlexBox>
              <FlexBox style={{ gap: 25, marginTop: 24, flexWrap: "nowrap" }}>
                <Note color="white">
                  Сохраняй порядок инициативы, контролируй хп&nbsp;монстров
                  на&nbsp;одном экране
                </Note>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </PPWrapper>
        <PPWrapper style={{ width: "57vw", paddingTop: 248, marginBottom: 0 }}>
          <Panama color="#4C4C4C">Для Игроков</Panama>
          <Large color="white">
            Погрузись в&nbsp;игру, следя за&nbsp;информацией о&nbsp;всей пати.
            Не&nbsp;пропускай изменения в&nbsp;состояниях и&nbsp;действуй
            эффективнее
          </Large>
          <FlexBox>
            <FlexBox direction="column" style={{ width: "50%" }}>
              <FlexBox style={{ gap: 31, marginTop: 26, flexWrap: "nowrap" }}>
                <Note color="white">
                  Легко узнавай, кто из&nbsp;других игроков знает нужный язык
                </Note>
              </FlexBox>
              <FlexBox style={{ gap: 25, marginTop: 24, flexWrap: "nowrap" }}>
                <Note color="white">
                  Теперь проще выбрать, кто пойдёт вперёд, все пассивные
                  характеристики партии на&nbsp;одном экране
                </Note>
              </FlexBox>
            </FlexBox>

            <FlexBox direction="column" style={{ width: "50%" }}>
              <FlexBox style={{ gap: 31, marginTop: 26, flexWrap: "nowrap" }}>
                <Note color="white">
                  Следи за&nbsp;эффектами, которые наложены на&nbsp;союзников
                  и&nbsp;меняй свою тактику в&nbsp;зависимости от&nbsp;ситуации
                </Note>
              </FlexBox>
              <FlexBox style={{ gap: 25, marginTop: 24, flexWrap: "nowrap" }}>
                <Note color="white">
                  Понятно, кто из&nbsp;врагов под какими состояниями находится
                </Note>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </PPWrapper>
      </FlexBox>
    </PrivacyWrapper>
  );
}
