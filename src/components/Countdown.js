import { useEffect, useState } from "react";
import ball from '../images/ball.png';


function Countdown(props) {
    const { winner } = props;
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(countdown-1);
        }, 1000);

        return () => clearInterval(interval);
    }, [countdown]);

    return (
        <div className="countdown-div">
                {countdown > 0 ? (
                    <div className="countdown-inner">
                        <img src={ball} alt="ball" className="ball" />
                        <h2 className="countdown">{countdown}</h2>
                    </div>
                ) : (
                    <div className="winner">
                        <p className="winner-txt">You're betting on</p>
                        <h1 className="winner-title">{winner}</h1>
                        {/* display the picture or logo of the winner here */}
                    </div>
                )}
        </div>
    )
}

export default Countdown;