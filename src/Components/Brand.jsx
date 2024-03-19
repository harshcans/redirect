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
      }, 5000);
      return () => clearInterval(countdownInterval);
    } else {
      history.push("/");
    }
  }, [id, history]);

  return (
    <div>
<p> Till then Join Our Telegram Channel -   <a href="https://t.me/teamcalibre">@TeamCalibre</a> </p>
      <p>Redirecting in {countdown} seconds...</p>

&nbsp;
&nbsp;
&nbsp;
<p> Till then Join Our Telegram Channel -   <a href="https://t.me/teamcalibre">@TeamCalibre</a> </p>
    </div>
  );
};

export default Brand;
