import { LineChart } from "@mui/x-charts/LineChart";
import React from "react";
import "./Timeline.css";

const Timeline = ({
  setCurrentPage,
  intensity = 0,
}: {
  setCurrentPage: (_: string) => void;
  intensity: number;
}) => {
  const mildTrack = {
    xData: [0, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24],
    yData: [0, 6, 15, 18, 22, 30, 35, 38, 42, 50, 56, 60],
  };
  const moderateTrack = {
    xData: [0, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24],
    yData: [0, 8, 17, 23, 27, 38, 46, 52, 57, 67, 73, 75],
  };
  const intenseTrack = {
    xData: [0, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24],
    yData: [0, 10, 18, 25, 30, 42, 52, 60, 66, 78, 86, 90],
  };

  const tracks = [mildTrack, moderateTrack, intenseTrack];

  return (
    <div className="timeline">
      <h2>Timeline</h2>
      <p>This is a timeline of the patient's recovery.</p>
      <div className="images">
        <div className="im-cap">
          <LineChart
            xAxis={[{ data: tracks[intensity].xData }]}
            series={[
              {
                data: tracks[0].yData,
              },
              {
                data: tracks[1].yData,
              },
              {
                data: tracks[2].yData,
              },
            ]}
            width={1000}
            height={500}
          />
          <p>Recovery timeline of the brain.</p>
        </div>
      </div>
      <p>
        The patient has been recovering well since the stroke. The following is
        a timeline of the patient's recovery:
      </p>
      <ul>
        <li>Week 1: Patient was admitted to the hospital.</li>
        <li>Week 2: Patient underwent a series of tests.</li>
        <li>Week 3: Patient started physical therapy.</li>
        <li>Week 4: Patient started speech therapy.</li>
        <li>Week 5: Patient started occupational therapy.</li>
        <li>Week 6: Patient started cognitive therapy.</li>
        <li>Week 7: Patient started recreational therapy.</li>
        <li>Week 8: Patient was discharged from the hospital.</li>
      </ul>
      <br />
      <p>
        It is currently {new Date().toDateString()}. The patient is currently in
        the recovery phase. The patient is expected to make a full recovery
        within the next few months.
      </p>
    </div>
  );
};

export default Timeline;
