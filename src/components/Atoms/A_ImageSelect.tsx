import { G_Text } from "../Common";

const A_ImageSelect = (props: any) => {
  const url = require("../../images/Vector.png");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "32px",
      }}
    >
      <img
        style={{ width: 22, height: 28, objectFit: "contain" }}
        src={url}
        alt="placeholder-image"
      />
      <G_Text color="#7C7C7C" center offsetTop={6}>
        Выберите аватар
      </G_Text>
    </div>
  );
};

export default A_ImageSelect;
