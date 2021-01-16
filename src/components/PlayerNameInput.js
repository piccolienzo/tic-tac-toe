import React from "react";
import "./styles/PlayerNameInput.css";
export default class PlayerNameInput extends React.Component {
	constructor(props) {
		super(props);
		this.onChange = this.onChange.bind(this);
		this.state = {
			playerName: this.props.playerName,
		};
	}

	onChange = (e) => {
		this.setState({ playerName: [e.target.value] });
		this.props.onPlayerNameChange(this.props.player, e.target.value);
	};

	render() {
		return (
			<React.Fragment>
				<label className="Label" htmlFor={this.props.player}>
					{this.props.player.toUpperCase()}
				</label>
				<br />
				<input
					className="Input"
					id={this.props.player}
					type="text"
					value={this.state.playerName}
					onChange={this.onChange}
				></input>
			</React.Fragment>
		);
	}
}
