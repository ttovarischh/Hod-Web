import styled from "styled-components";
import { FlexBox, Panama, D_Text, E_Text } from "../../components/Common";

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
  right: -17vw;
  top: 20vw;
  pointer-events: none;
  background-repeat: no-repeat;
`;

export default function PrivacyPolicy() {
  return (
    <PrivacyWrapper direction="column">
      <MainImage
        style={{
          backgroundImage: "url(" + require("../../images/demon.png") + ")",
        }}
      ></MainImage>
      <PPWrapper style={{ width: "65vw" }}>
        <Panama>Политика</Panama>
        <D_Text>
          Для корректной работы сервиса мы&nbsp;собираем, обрабатываем
          и&nbsp;храним информацию, связанную с&nbsp;приложением Ход (веб
          и&nbsp;мобильная версии).
        </D_Text>
        <D_Text>
          На&nbsp;этой странице собрана подробная информация о&nbsp;том, как
          мы&nbsp;обращаемся с&nbsp;личными данными пользователей.
        </D_Text>
      </PPWrapper>
      <FlexBox direction="column" style={{ width: "58vw", marginBottom: 180 }}>
        <D_Text>Что мы собираем</D_Text>
        <FlexBox style={{ gap: 31, marginTop: 26, flexWrap: "nowrap" }}>
          <E_Text>1</E_Text>
          <E_Text>
            Информацию, связанную с аккаунтом Ход: email, пароль,
            имя пользователя.
          </E_Text>
        </FlexBox>
        <FlexBox style={{ gap: 25, marginTop: 24, flexWrap: "nowrap" }}>
          <E_Text>2</E_Text>
          <E_Text>
            Информацию о&nbsp;девайсе, с&nbsp;которого заходят на&nbsp;сайт.
            (IP-адреса, уникальные идентификаторы устройств, возможности
            обработки, производитель и&nbsp;модель, язык и&nbsp;другие
            региональные настройки,географическое положение, разрешение экрана
            и&nbsp;аналогичные настройки).
          </E_Text>
        </FlexBox>
        <FlexBox style={{ gap: 25, marginTop: 24, flexWrap: "nowrap" }}>
          <E_Text>3</E_Text>
          <E_Text>
            Мы&nbsp;используем файлы cookie, для автоматического сбора
            и&nbsp;хранения информации о&nbsp;том, как пользователи
            взаимодействуют с&nbsp;Ход, а&nbsp;также об&nbsp;используемом
            устройстве.
          </E_Text>
        </FlexBox>
        <FlexBox style={{ gap: 25, marginTop: 24, flexWrap: "nowrap" }}>
          <E_Text>4</E_Text>
          <E_Text>
            Мы&nbsp;собираем информацию от&nbsp;третьих лиц, чтобы помочь нам
            определить, откуда пользователь подключается к&nbsp;сайту.
          </E_Text>
        </FlexBox>
      </FlexBox>
      <FlexBox direction="column" style={{ width: "58vw" }}>
        <D_Text>Как мы используем информацию</D_Text>
        <FlexBox style={{ gap: 31, marginTop: 26, flexWrap: "nowrap" }}>
          <E_Text>
            Мы&nbsp;используем информацию, которую мы&nbsp;собираем (как
            отдельно, так и&nbsp;в&nbsp;сочетании с&nbsp;другой информацией,
            собранной в&nbsp;соответствии с&nbsp;этим уведомлением), чтобы
            помочь нам управлять нашим сервисом, улучшать сайт и&nbsp;общаться
            с&nbsp;вами.
          </E_Text>
        </FlexBox>
        <FlexBox style={{ gap: 25, marginTop: 24, flexWrap: "nowrap" }}>
          <E_Text>
            Мы не передаём собранную информацию третьим лицам без согласия
            пользователей, если передача не описана в условиях предоставления
            сервиса.
          </E_Text>
        </FlexBox>
      </FlexBox>
      <FlexBox direction="column" style={{ width: "60vw", marginTop: 180 }}>
        <D_Text>
          Мы&nbsp;обязуемся защищать информацию о&nbsp;пользователях
          и&nbsp;соблюдать наши обязательства в&nbsp;отношении применимых
          законов о&nbsp;защите данных, но&nbsp;не&nbsp;можем абсолютно
          гарантировать безопасность любых данных, которые мы&nbsp;получаем.
          Решив поделиться информацией с&nbsp;нами, вы&nbsp;признаете этот риск.
        </D_Text>
      </FlexBox>
    </PrivacyWrapper>
  );
}
