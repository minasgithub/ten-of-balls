import { useState } from "react";
import Countdown from "./Countdown";

function SpinTheBall(props) {
    const { players, teams } = props;
    const [winner, setWinner] = useState('');
    const [isCountingDown, setIsCountingDown] = useState(false);

    const generatePlayer = () => {
        let ind = Math.floor(Math.random()*(players.length));
        setWinner(players[ind].name);
        setIsCountingDown(true);
    }

    const generateTeam = () => {
       let ind = Math.floor(Math.random()*(teams.length));
       setWinner(teams[ind].full_name);
       setIsCountingDown(true);
    }

    return (
        <>
        {isCountingDown ? (
            <Countdown winner={winner} />
        ) : (
            <div className="layout">
                <div className="layout-inner">
                    <h2 className="title">SPIN THE BALL</h2>
                    <p>Ready to take your chances?</p>
                    <p>Looking for interesting player or team to bet on for the coming season?</p>
                    <p>
                        Lean back and let the Spin-the-Ball-Generator select a candidate for you, 
                        whether it be an all-star, an up-and-comer, or a black horse underdog.
                    </p>
                    <p>
                        Unleash the Generator by clicking on one of the buttons below and strap on 
                        your seatbelt for the coming season.
                    </p>
                    <div className="spin-btns">
                        <button onClick={generatePlayer} className="spin-btn">Select a player</button>
                        <button onClick={generateTeam} className="spin-btn">Select a team</button>
                    </div>
                    <p className="disclaimer">DISCLAIMER</p>
                    <p>
                        This game is meant for entertainment purposes. If the result makes you feel woozy,
                        please trust your gut instinct and do not act on it.
                    </p>
                </div>
            </div>
        )}
        </>
    )
}

export default SpinTheBall;