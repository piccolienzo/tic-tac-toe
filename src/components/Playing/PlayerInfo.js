import React from "react";
import "../styles/PlayerInfo.css";

export default class PlayerInfo extends React.Component {
	constructor(props) {
		super(props);
		this.restart = this.restart.bind(this);
	}

	restart = () => {
		this.props.restart();
	};

	render() {
		if (this.props.win) {
			return (
				<div>
					<div className="PlayerInfo PlayerInfoWin " onClick={this.restart}>
						<p>
							{this.props.player + " WON" + "\n"}

							<h6 style={{ fontSize: "0.15em" }}>Clic to reset</h6>
						</p>
					</div>
				</div>
			);
		} else if (this.props.lose) {
			return (
				<div className="PlayerInfo PlayerInfoLose " onClick={this.restart}>
					{this.props.player + " LOSE"}
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
