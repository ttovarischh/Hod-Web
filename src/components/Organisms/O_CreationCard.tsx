import styled from "styled-components";
import { FlexBox } from "../Common/FlexBox";
import A_Button from "../Atoms/A_Button";
import Select, { StylesConfig } from "react-select";
import A_ImageSelect from "../Atoms/A_ImageSelect";
import A_Input from "../Atoms/A_Input";
import A_ImageInSelector from "../Atoms/A_ImageInSelector";
import M_CardPart from "../Molecules/M_CardPart";
import A_Avatar from "../Atoms/A_Avatar";
import { useTranslation } from "react-i18next";

type Props = {
  options?: any;
  handleSelectChange?: any;
  handleInputChange?: any;
  handlePostNewPlayer?: any;
  handleDeleteNewPlayer?: any;
  disabled?: any;
  name?: any;
  username?: any;
  ins?: any;
  inv?: any;
  perc?: any;
  language?: any;
  tags?: any;
  inputValue?: any;
  handleTextChange?: any;
  handleKeyPress?: any;
  removeTag?: any;
  show?: boolean;
  imagestring?: any;
  langs?: any;
  selectedOption?: any;
  monster?: boolean;
  armor?: any;
  hp?: any;
};

const InputsWrapper = styled(FlexBox)`
  background-color: #1c1c1e;
  padding-bottom: 20px;
  border-radius: 20px;
  overflow: hidden;
  button {
    width: 100%;
  }
`;

const InfoWrapper = styled(FlexBox)`
  flex-direction: column;
  gap: 6px;
  margin-top: 18px;
  margin-left: 14px;
  margin-right: 14px;
`;

const O_CreationCard = ({
  options,
  handleSelectChange,
  handleInputChange,
  handlePostNewPlayer,
  handleDeleteNewPlayer,
  disabled,
  name,
  username,
  ins,
  inv,
  perc,
  language,
  tags,
  inputValue,
  handleTextChange,
  handleKeyPress,
  removeTag,
  show,
  imagestring,
  langs,
  selectedOption,
  monster,
  armor,
  hp,
}: Props) => {
  const colourStyles: StylesConfig<any> = {
    container: (styles) => ({
      ...styles,
      width: "100%",
    }),
    control: (styles) => ({
      ...styles,
      backgroundColor: "#0E0E0E",
      color: "yellow",
      height: 150,
      border: "none",
      width: "100%",
      borderRadius: 0,
    }),
    valueContainer: (styles) => ({
      ...styles,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
      height: 150,
      width: "100%",
    }),
    singleValue: (styles) => ({
      ...styles,
      height: "100%",
      width: "100%",
      marginBottom: 0,
      position: "absolute",
    }),
    placeholder: (styles) => ({
      fontSize: 11,
      lineHeight: "13px",
      textAlign: "center",
      color: "#4C4C4C",
    }),
    menu: (styles) => ({
      ...styles,
      margin: 0,
      backgroundColor: "#1A1A1A",
      borderRadius: 0,
    }),
    menuList: (styles) => ({
      ...styles,
      padding: 0,
      maxHeight: "517px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: 20,
      rowGap: 20,
      paddingLeft: 50,
      paddingRight: 50,
      justifyItems: "center",
      justifyContent: "center",
      alignContent: "center",
    }),
    option: (styles, { isSelected, isFocused }) => ({
      ...styles,
      display: "inline-block",
      width: 150,
      height: 150,
      padding: 0,
      border: 1,
      borderStyle: "solid",
      borderWidth: 1,
      borderColor: isSelected || isFocused ? "#2520FF" : "#EDF2DC",
      borderRadius: 12,
      backgroundColor: isSelected ? "#2520FF" : "transparent",
      cursor: "pointer",
      overflow: "hidden",
    }),
  };
  const { t } = useTranslation();

  if (show) {
    return (
      <FlexBox>
        <InputsWrapper>
          <FlexBox direction="column">
            {!monster && <A_Avatar wide imagestring={imagestring} />}
            <InfoWrapper>
              {!monster ? (
                <>
                  <M_CardPart info={name} label={t("common:playerName")} />
                  <M_CardPart
                    info={username}
                    label={t("common:playerUserName")}
                  />
                  <M_CardPart
                    ins
                    info={ins}
                    label="Проницательность // Insight"
                  />
                  <M_CardPart
                    inv
                    info={inv}
                    label="Расследование // Investigation"
                  />
                  <M_CardPart
                    perc
                    info={perc}
                    label="Восприятие // Perception"
                  />
                  <M_CardPart label={t("common:langs")} info={langs} langs />
                </>
              ) : (
                <>
                  <M_CardPart info={name} label={t("common:npcName")} />
                  <M_CardPart info={armor} label={t("common:armor")} />
                  <FlexBox style={{ marginBottom: 40 }}>
                    <M_CardPart info={hp} label={t("common:hp")} />
                  </FlexBox>
                </>
              )}
              <A_Button warning handleButtonClick={handleDeleteNewPlayer}>
                {t("common:delete")}
              </A_Button>
            </InfoWrapper>
          </FlexBox>
        </InputsWrapper>
      </FlexBox>
    );
  }

  return (
    <FlexBox
      style={{
        zIndex: monster ? 10009 : 1,
      }}
    >
      <InputsWrapper>
        <FlexBox direction="column">
          {!monster && (
            <Select
              options={options}
              styles={colourStyles}
              name="imagestring"
              onChange={handleSelectChange}
              value={selectedOption}
              formatOptionLabel={(country) => (
                <A_ImageInSelector src={country.image} />
              )}
              isSearchable={false}
              placeholder={<A_ImageSelect />}
              components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
            />
          )}
          <div style={{ paddingLeft: 14, paddingRight: 14, paddingTop: 18 }}>
            {!monster ? (
              <>
                <A_Input
                  name="name"
                  type="text"
                  placeholder={t("common:playerName")}
                  onChange={handleInputChange}
                  label={t("common:playerName")}
                  style={{ marginBottom: 6 }}
                  value={name}
                ></A_Input>
                <A_Input
                  name="username"
                  type="text"
                  placeholder={t("common:playerUserName")}
                  onChange={handleInputChange}
                  label={t("common:playerUserName")}
                  style={{ marginBottom: 6 }}
                  value={username}
                ></A_Input>
                <A_Input
                  name="ins"
                  ins
                  type="text"
                  maxLength={2}
                  placeholder={t("common:ins")}
                  onChange={handleInputChange}
                  label={t("common:ins")}
                  style={{ marginBottom: 6 }}
                  value={ins}
                ></A_Input>
                <A_Input
                  name="inv"
                  type="text"
                  maxLength={2}
                  placeholder={t("common:inv")}
                  onChange={handleInputChange}
                  label={t("common:inv")}
                  style={{ marginBottom: 6 }}
                  value={inv}
                  inv
                ></A_Input>
                <A_Input
                  name="perc"
                  perc
                  type="text"
                  maxLength={2}
                  placeholder={t("common:perc")}
                  onChange={handleInputChange}
                  label={t("common:perc")}
                  style={{ marginBottom: 6 }}
                  value={perc}
                ></A_Input>
                <A_Input
                  languages
                  name="language"
                  type="text"
                  placeholder={t("common:langs")}
                  handleTextChange={handleTextChange}
                  onKeyDown={handleKeyPress}
                  label={t("common:langs")}
                  value={inputValue}
                  tags={tags}
                  removeTag={removeTag}
                ></A_Input>
              </>
            ) : (
              <>
                <A_Input
                  name="name"
                  type="text"
                  placeholder={t("common:npcName")}
                  onChange={handleInputChange}
                  label={t("common:npcName")}
                  style={{ marginBottom: 6 }}
                  value={name}
                ></A_Input>
                <A_Input
                  name="armor"
                  type="text"
                  maxLength={2}
                  placeholder={t("common:armor")}
                  onChange={handleInputChange}
                  label={t("common:armor")}
                  style={{ marginBottom: 6 }}
                  value={armor}
                ></A_Input>
                <A_Input
                  name="hp"
                  type="text"
                  maxLength={2}
                  placeholder={t("common:hp")}
                  onChange={handleInputChange}
                  label={t("common:hp")}
                  style={{ marginBottom: 40 }}
                  value={hp}
                ></A_Input>
              </>
            )}

            <A_Button
              secondary
              disabled={disabled}
              handleButtonClick={handlePostNewPlayer}
            >
              {t("common:add")}
            </A_Button>
          </div>
        </FlexBox>
      </InputsWrapper>
    </FlexBox>
  );
};

export default O_CreationCard;
