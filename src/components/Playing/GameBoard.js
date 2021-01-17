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
		this.restart = this.restart.bind(this);
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
		setTimeout(
			() =>
				this.setState(() => ({
					winner: winner,
				})),
			1000
		);
	};

	restart = () => {
		this.setState(() => ({
			turn: turns.player1,
			p1Score: 0,
			p2Score: 0,
			winner: "",
		}));
	};

	makeDraw = () => {
		setTimeout(
			() =>
				this.setState(() => ({
					winner: "D",
				})),
			1000
		);
	};
	render() {
		return (
			<React.Fragment>
				<div>
					{this.state.winner === "D" ? (
						<PlayerInfo
							restart={this.restart}
							draw={true}
							player={this.props.player1}
							turn={this.state.turn === "O"}
							char="O"
							score={this.state.p1Score}
							win={this.state.winner === "O"}
							lose={this.state.winner === "X"}
						/>
					) : (
						<PlayerInfo
							draw={false}
							restart={this.restart}
							player={this.props.player1}
							turn={this.state.turn === "O"}
							char="O"
							score={this.state.p1Score}
							win={this.state.winner === "O"}
							lose={this.state.winner === "X"}
						/>
					)}
				</div>

				{this.state.winner === "X" || this.state.winner === "O" ? (
					<span></span>
				) : this.state.winner === "D" ? (
					<span></span>
				) : (
					<div>
						<PlayTable
							turn={this.state.turn}
							toggleTurn={this.toggleTurn}
							haveWinner={this.haveWinner}
							makeDraw={this.makeDraw}
							win={this.state.winner === "O" || this.state.winner === "X"}
						/>
					</div>
				)}

				<div>
					{this.state.winner === "D" ? (
						<span></span>
					) : (
						<PlayerInfo
							draw={false}
							restart={this.restart}
							player={this.props.player2}
							turn={this.state.turn === "X"}
							char="X"
							score={this.state.p2Score}
							win={this.state.winner === "X"}
							lose={this.state.winner === "O"}
						/>
					)}
				</div>
			</React.Fragment>
		);
	}
}
