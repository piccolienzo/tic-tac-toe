import React from "react";
import PlayerRegister from "./PlayerRegister";
import GameBoard from "./Playing/GameBoard";

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = { player1: "", player2: "" };
		this.setPlayerNames = this.setPlayerNames.bind(this);
	}

	setPlayerNames = (player1Name, player2Name) => {
		this.setState(() => ({
			player1: player1Name,
			player2: player2Name,
		}));
	};

	render() {
		if (this.state.player1 === "" || this.state.player2 === "") {
			return <PlayerRegister onSubmitNames={this.setPlayerNames} />;
		} else {
			return (
				<GameBoard
					player1={this.state.player1}
					player2={this.state.player2}
				></GameBoard>
			);
		}
	}
}
