import styled from "styled-components";
import { FlexBox } from "../Common";
import A_Stat from "../Atoms/A_Stat";

type Props = {
  ins: any;
  inv: any;
  perc: any;
};

const CifWrapper = styled(FlexBox)`
  justify-content: space-between;
  margin-left: 20px;
  align-items: baseline;
  width: 90%;
`;

const M_StatSet = ({ ins, inv, perc }: Props) => {
  return (
    <CifWrapper>
      <A_Stat stat={inv} iconName="investigation" />
      <A_Stat stat={perc} iconName="perception" />
      <A_Stat stat={ins} iconName="insight" />
    </CifWrapper>
  );
};

export default M_StatSet;
