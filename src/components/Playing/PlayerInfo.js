import React from "react";
import "../styles/PlayerInfo.css";

export default class PlayerInfo extends React.Component {
	render() {
		if (this.props.win) {
			return (
				<div className="PlayerInfo PlayerInfoWin ">
					{this.props.player + " WON"}
				</div>
			);
		} else {
			if (this.props.turn) {
				return (
					<div className="PlayerInfo PlayerInfoTurn ">
						{this.props.player + "'s turn ( " + this.props.char + " )"}
					</div>
				);
			} else {
				return (
					<div className="PlayerInfo PlayerInfoNotTurn ">
						{this.props.player + "( " + this.props.char + " )"}
					</div>
				);
			}
		}
	}
}
