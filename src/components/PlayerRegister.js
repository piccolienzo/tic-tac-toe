import React from "react";
import PlayerNameInput from "./PlayerNameInput";
import "./styles/PlayerRegister.css";

export default class PlayerRegister extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			player1: "player1",
			player2: "player2",
		};
		this.onPlayerNameChange = this.onPlayerNameChange.bind(this);
	}

	onPlayerNameChange = (player, name) => {
		this.setState({
			[player]: name,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.player1 === "") {
			this.setState = { player1: "player1" };
		}
		if (this.state.player2 === "") {
			this.setState = { player2: "player2" };
		}

		this.props.onSubmitNames(this.state.player1, this.state.player2);
	};
	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.onSubmit} className="FormRegister">
					<div>
						<PlayerNameInput
							playerName={this.state.player1}
							player="player1"
							onPlayerNameChange={this.onPlayerNameChange}
						/>
					</div>

					<div>
						<PlayerNameInput
							playerName={this.state.player2}
							player="player2"
							onPlayerNameChange={this.onPlayerNameChange}
						/>
					</div>
					<button type="submit" onClick={this.onSubmit}>
						Play
					</button>
				</form>
			</React.Fragment>
		);
	}
}
