import { getTimeInfo, normalizeNum } from "./utils/time";
import "./App.css";

const App = () => {
  const renderFooter = () => {
    return (
      <div id="footer">
        {/* TODO: image loader */}
        <img id="logo" src="./assets/logo_figure.png" width={30} height={30} />
        <span style={{ marginTop: 6, fontSize: 12 }}>
          Powered by
          <a
            href="https://www.notion.so/roll-roll-go/s-Home-1beed66eeff84a3cabc455bee81c7237"
            target="_blank"
          >
            RollRollGo
          </a>
        </span>
      </div>
    );
  };

  const renderClock = () => {
    const { year, month, date, day, hour, minute, second } = getTimeInfo();
    return (
      <div className="circle" id="clock">
        <div id="date">
          {year}.{normalizeNum(month)}.{normalizeNum(date)}
        </div>
        <div id="time" style={{ fontSize: 24, lineHeight: 32 }}>
          {normalizeNum(hour)}:{normalizeNum(minute)}:{normalizeNum(second)}
        </div>
        <div id="day" style={{ fontSize: 16 }}>{day}</div>
      </div>
    );
  };

  return (
    <div id="container">
      <div className="circle" id="year-progress">
        <div className="circle" id="month-progress">
          <div className="circle" id="week-progress">
            <div className="circle" id="day-progress">
              {renderClock()}
            </div>
          </div>
        </div>
      </div>
      {renderFooter()}
    </div>
  );
};

export default App;
