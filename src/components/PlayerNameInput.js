import React from "react";

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
			<input
				type="text"
				value={this.state.playerName}
				onChange={this.onChange}
			></input>
		);
	}
}
