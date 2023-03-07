import styled from "styled-components";
import { FlexBox } from "./FlexBox";
import { Circles } from "react-loader-spinner";

const LoaderWrapper = styled(FlexBox)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: black;
  justify-content: center;
  align-content: center;
`;

const A_Loader = (props: any) => {
  return (
    <LoaderWrapper>
      <Circles
        height="120"
        width="120"
        color="#2520FF"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderWrapper>
  );
};

export default A_Loader;
