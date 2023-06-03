import { FlexBox, H_Text } from "../components/Common";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "En" },
  { code: "ru", label: "Ru" },
];

const Selector = () => {
  const { t, i18n } = useTranslation();
  const selectedLanguageCode = i18n.language;

  const setLanguage = (code: any) => {
    return i18n.changeLanguage(code);
  };

  return (
    <FlexBox>
      {LANGUAGES.map((language, index) => {
        const selectedLanguage = language.code === selectedLanguageCode;
        return (
          <FlexBox
            key={language.code}
            style={{ cursor: selectedLanguage ? "not-allowed" : "pointer" }}
            onClick={() => {
              setLanguage(language.code);
            }}
          >
            <H_Text underline={selectedLanguage}>{language.label}</H_Text>
            {index == 0 && (
              <H_Text offsetLeft={4} offsetRight={4}>
                /
              </H_Text>
            )}
          </FlexBox>
        );
      })}
    </FlexBox>
  );
};

export default Selector;
