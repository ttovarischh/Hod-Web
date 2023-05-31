import { FlexBox } from "../Common/FlexBox";
import A_Icon from "./A_Icon";
import { K_Text } from "../Common";

type Props = {
  stat: any;
  iconName: any;
};

const A_Stat = ({ stat, iconName }: Props) => {
  return (
    <FlexBox direction="column" alignItems="center">
      <A_Icon width={24} iconName={iconName} fill="#A4A4AC" />
      <K_Text>{stat}</K_Text>
    </FlexBox>
  );
};

export default A_Stat;
