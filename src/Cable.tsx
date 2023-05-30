import React, { Fragment, FC } from "react";
import { ActionCable } from "react-actioncable-provider";

interface Conversation {
  id: number;
}

interface Props {
  games: any;
  handleReceivedPlayer: any;
}

const Cable: FC<Props> = ({ games, handleReceivedPlayer }) => {
  return (
    <Fragment>
      {games.map((game: any) => {
        return (
          <ActionCable
            key={game.id}
            channel={{
              channel: "PlayersChannel",
              game: game.id,
            }}
            onReceived={handleReceivedPlayer}
          />
        );
      })}
    </Fragment>
  );
};

export default Cable;
