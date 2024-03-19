import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

const Brand = () => {
  const { id } = useParams();
  const history = useHistory();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const externalLink = localStorage.getItem(id);
    if (externalLink) {
      const countdownInterval = setInterval(() => {
        setCountdown((countdown) => countdown - 1);
      }, 1000);
      setTimeout(() => {
        window.location.href = externalLink;
      }, 10000);
      return () => clearInterval(countdownInterval);
    } else {
      history.push("/");
    }
  }, [id, history]);

  return (
    <div className="countdown-container">
      <div className="countdown-circle">
        <svg className="countdown-svg">
          <circle
            className="countdown-progress"
            strokeWidth="10"
            stroke="#f1c40f"
            fill="transparent"
            r="50"
            cx="60"
            cy="60"
            style={{
              strokeDashoffset: `${(10 - count) * (314 / 10)}px`, // Circumference of circle: 2πr = 2*3.14*50 = 314
            }}
          />
        </svg>
        <div className="countdown-text">{countdown}</div>
      </div>
    </div>

&nbsp;
&nbsp;
&nbsp;
<p> Till then Join Our Telegram Channel -   <a href="https://t.me/teamcalibre">@TeamCalibre</a> </p>
    </div>
  );
};

export default Brand;
