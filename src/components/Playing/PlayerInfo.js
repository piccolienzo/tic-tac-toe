import React from "react";

export default class PlayerInfo extends React.Component {
	render() {
		if (this.props.win) {
			return (
				<div style={{ backgroundColor: "red" }}>
					{this.props.player + " WON"}
				</div>
			);
		} else {
			if (this.props.turn) {
				return (
					<div style={{ backgroundColor: "greenyellow" }}>
						{this.props.player + "'s turn ( " + this.props.char + " )"}
					</div>
				);
			} else {
				return (
					<div style={{ backgroundColor: "gray" }}>
						{this.props.player + "( " + this.props.char + " )"}
					</div>
				);
			}
		}
	}
}
