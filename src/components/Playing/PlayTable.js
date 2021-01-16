import React from "react";
import PlayButton from "./PlayButton";
import "../styles/PlayTable.css";

export default class PlayTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gameProgress: [
				["", "", ""],
				["", "", ""],
				["", "", ""],
			],
		};
		this.updateProgress = this.updateProgress.bind(this);
	}

	updateProgress = (row, col, char) => {
		let newProgress = this.state.gameProgress.slice();

		newProgress[row - 1][col - 1] = char;

		this.setState(() => ({
			gameProgress: newProgress.slice(),
		}));

		this.verifyWinner(char);
	};

	verifyWinner = (char) => {
		let cont = 0;
		let progress = this.state.gameProgress.slice();
		let havewinner = false;

		if (
			progress[0][0] + progress[1][1] + progress[2][2] ===
			char + char + char
		) {
			havewinner = true;
		}
		if (
			progress[0][2] + progress[1][1] + progress[2][0] ===
			char + char + char
		) {
			havewinner = true;
		}

		for (let row = 0; row < 3; row++) {
			cont = 0;
			for (let col = 0; col < 3; col++) {
				if (progress[row][col] === char) {
					cont++;
					console.log(progress[row][col]);
					if (cont === 3) {
						havewinner = true;

						break;
					}
				}
			}
		}
		for (let row = 0; row < 3; row++) {
			cont = 0;
			for (let col = 0; col < 3; col++) {
				if (progress[col][row] === char) {
					cont++;
					console.log(progress[row][col]);
					if (cont === 3) {
						havewinner = true;
						break;
					}
				}
			}
		}
		if (havewinner) {
			this.props.haveWinner(char);
		} else {
			this.props.toggleTurn();
		}
	};

	render() {
		return (
			<React.Fragment>
				<table className="PlayTable">
					<tbody>
						<tr>
							<td>
								<PlayButton
									c={1}
									r={1}
									turn={this.props.turn}
									updateProgress={this.updateProgress}
								/>
							</td>
							<td>
								<PlayButton
									c={2}
									r={1}
									turn={this.props.turn}
									updateProgress={this.updateProgress}
								/>
							</td>
							<td>
								<PlayButton
									c={3}
									r={1}
									turn={this.props.turn}
									updateProgress={this.updateProgress}
								/>
							</td>
						</tr>
						<tr>
							<td>
								<PlayButton
									c={1}
									r={2}
									turn={this.props.turn}
									updateProgress={this.updateProgress}
								/>
							</td>
							<td>
								<PlayButton
									c={2}
									r={2}
									turn={this.props.turn}
									updateProgress={this.updateProgress}
								/>
							</td>
							<td>
								<PlayButton
									c={3}
									r={2}
									turn={this.props.turn}
									updateProgress={this.updateProgress}
								/>
							</td>
						</tr>
						<tr>
							<td>
								<PlayButton
									c={1}
									r={3}
									turn={this.props.turn}
									updateProgress={this.updateProgress}
								/>
							</td>
							<td>
								<PlayButton
									c={2}
									r={3}
									turn={this.props.turn}
									updateProgress={this.updateProgress}
								/>
							</td>
							<td>
								<PlayButton
									c={3}
									r={3}
									turn={this.props.turn}
									updateProgress={this.updateProgress}
								/>
							</td>
						</tr>
					</tbody>
				</table>
			</React.Fragment>
		);
	}
}
