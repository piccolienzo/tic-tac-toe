import React from "react";

export default class PlayButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "G",
		};
	}

	onClick = (e) => {
		e.preventDefault();
		this.setState(() => ({
			value: this.props.turn,
		}));
		this.props.updateProgress(this.props.r, this.props.c, this.props.turn);

		this.props.toggleTurn();
	};

	render() {
		if (this.state.value === "G") {
			return (
				<button
					style={{
						backgroundColor: "black",
						color: "black",
						borderColor: "black",
						width: "30px",
						height: "30px",
						textAlign: "center",
						verticalAlign: "middle",
					}}
					onClick={this.onClick}
				>
					{this.state.value}
				</button>
			);
		} else {
			return (
				<button
					disabled={true}
					style={{
						backgroundColor: "black",
						color: "white",
						borderColor: "black",
						width: "30px",
						height: "30px",
						textAlign: "center",
						verticalAlign: "middle",
					}}
					onClick={this.onClick}
				>
					{this.state.value}
				</button>
			);
		}
	}
}
