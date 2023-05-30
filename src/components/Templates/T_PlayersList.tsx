import styled from "styled-components";
import { FlexBox } from "../Common";
import O_CreationCard from "../Organisms/O_CreationCard";

const BlankColumn = styled.div`
  width: 292px;
  height: 100%;
`;

const CardStack = styled.div`
  position: relative;
  height: 100%;
  max-width: 50%;
`;

const Card = styled(FlexBox)`
  box-shadow: -6px 2px 13px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  transition: all 0.5s ease;
  &:hover {
    z-index: 1000;
    box-shadow: -6px 2px 13px rgba(0, 0, 0, 0.8);
    align-self: flex-start;
    transition: all 0.5s ease;
    transform: scale(1) !important;
  }
`;

type ComponentProps = {
  context: string;
  code?: string;
  data?: any;
  handleDeleteNewPlayer?: any;
};

export default function T_PlayersList(props: ComponentProps) {
  const { data } = props;

  const list = () => {
    return data.map((player: any, index: any) => {
      let langs = player.language.split(" ");
      return (
        <Card
          key={player.id}
          style={{
            position: "absolute",
            left: 24 * index,
            transform: `scale(${
              index === data.length - 1 ? 1 : 1 - 0.025 * (data.length - index)
            })`,
          }}
        >
          <O_CreationCard
            show
            name={player.name}
            username={player.username}
            ins={player.ins}
            inv={player.inv}
            perc={player.perc}
            langs={langs}
            imagestring={player.imagestring}
            handleDeleteNewPlayer={() => props.handleDeleteNewPlayer(player.id)}
          />
        </Card>
      );
    });
  };

  if (props.context == "create") {
    return (
      <>
        {data.length > 0 ? (
          <CardStack
            className="CardStakc"
            style={{ width: 24 * (data.length - 1) + 420 }}
          >
            {list()}
          </CardStack>
        ) : (
          <BlankColumn></BlankColumn>
        )}
      </>
    );
  }

  return <></>;
}
