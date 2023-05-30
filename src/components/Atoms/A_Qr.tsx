import styled from "styled-components";
import { FlexBox, B_Text } from "../Common";
import QRCode from "qrcode.react";

type Props = {
  code: any;
};

const QrWrapper = styled(FlexBox)`
  width: 156px;
  height: 156px;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const Corner = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
`;

const CodeText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  margin-top: 21px;
`;

const A_Qr = ({ code }: Props) => {
  return (
    <FlexBox
      style={{ flexDirection: "column", marginTop: 54, marginBottom: 24 }}
      justifyContent="center"
      alignItems="center"
    >
      <QrWrapper>
        <QRCode
          value={`http://localhost:3006/game/${code}`}
          bgColor="#0E0E0E"
          fgColor="#FFFFFF"
          size={121}
        />
        <Corner
          style={{
            top: 0,
            left: 0,
            borderTop: "2px solid white",
            borderLeft: "2px solid white",
          }}
        />
        <Corner
          style={{
            top: 0,
            right: 0,
            borderTop: "2px solid white",
            borderRight: "2px solid white",
          }}
        />
        <Corner
          style={{
            bottom: 0,
            left: 0,
            borderBottom: "2px solid white",
            borderLeft: "2px solid white",
          }}
        />
        <Corner
          style={{
            bottom: 0,
            right: 0,
            borderBottom: "2px solid white",
            borderRight: "2px solid white",
          }}
        />
      </QrWrapper>
      <B_Text center offsetTop={21}>
        {code}
      </B_Text>
    </FlexBox>
  );
};

export default A_Qr;
