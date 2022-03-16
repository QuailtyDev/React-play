import PlayHeader from "common/playlists/PlayHeader";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getPlayById } from "meta/play-meta";
import CountDownTimer from "./CountDownTimer";

const CdTimerComp = () => {
  // The following code is to fetch the current play from the URL
  const location = useLocation();
  const { id } = location.state;
  const play = getPlayById(id);

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const [targetDate, setTargetDate] = useState(
    new Date(dateTimeAfterThreeDays)
  );

  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.value) {
      setTargetDate(new Date(event.target.value));
    } else {
      setTargetDate(new Date(dateTimeAfterThreeDays));
    }
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          <div className="countdown-container">
            <form>
              <label htmlFor="countdown-date-time">
                Select a Date and Time:
              </label>
              <input
                type="datetime-local"
                id="countdown-date-time"
                name="countdown-date-time"
                onChange={handleChange}
              />
            </form>
            <CountDownTimer targetDate={targetDate} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CdTimerComp;
