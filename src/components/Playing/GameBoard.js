import React from "react";

import PlayTable from "./PlayTable";
import PlayerInfo from "./PlayerInfo";

const turns = {
	player1: "O",
	player2: "X",
};

export default class GameBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = { turn: turns.player1, p1Score: 0, p2Score: 0, winner: "" };
		this.toggleTurn = this.toggleTurn.bind(this);
		this.haveWinner = this.haveWinner.bind(this);
	}

	toggleTurn = () => {
		if (this.state.turn === turns.player1) {
			this.setState({
				turn: turns.player2,
			});
		} else {
			this.setState({
				turn: turns.player1,
			});
		}
	};

	haveWinner = (winner) => {
		this.setState(() => ({
			winner: winner,
		}));
		this.toggleTurn();
	};
	render() {
		return (
			<React.Fragment>
				<PlayerInfo
					player={this.props.player1}
					turn={this.state.turn === "O"}
					char="O"
					score={this.state.p1Score}
					win={this.state.winner === "O"}
				></PlayerInfo>
				<PlayTable
					turn={this.state.turn}
					toggleTurn={this.toggleTurn}
					haveWinner={this.haveWinner}
					win={this.state.winner === "O" || this.state.winner === "X"}
				></PlayTable>
				<PlayerInfo
					player={this.props.player2}
					turn={this.state.turn === "X"}
					char="X"
					score={this.state.p2Score}
					win={this.state.winner === "X"}
				></PlayerInfo>
			</React.Fragment>
		);
	}
}