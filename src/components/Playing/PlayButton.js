import React from "react";
import "../styles/PlayButton.css";

export default class PlayButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
		};
	}

	onClick = (e) => {
		e.preventDefault();
		this.setState(() => ({
			value: this.props.turn,
		}));
		this.props.updateProgress(this.props.r, this.props.c, this.props.turn);
	};

	render() {
		if (this.state.value === "") {
			return (
				<button className="EnabledPlayButton" onClick={this.onClick}>
					{this.state.value}
				</button>
			);
		} else {
			return (
				<button
					disabled={true}
					className="DisabledPlayButton"
					onClick={this.onClick}
				>
					{this.state.value}
				</button>
			);
		}
	}
}
