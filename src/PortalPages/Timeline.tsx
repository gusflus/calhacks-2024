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
  const dataset = [
    {
      easy: 0,
      mild: 0,
      medium: 0,
      moderate: 0,
      intense: 0,
      time: "0",
    },
    {
      easy: 4,
      mild: 6,
      medium: 6,
      moderate: 8,
      intense: 10,
      time: "1",
    },
    {
      easy: 10,
      mild: 13,
      medium: 14,
      moderate: 17,
      intense: 18,
      time: "2",
    },
    {
      easy: 12,
      mild: 18,
      medium: 19,
      moderate: 23,
      intense: 25,
      time: "3",
    },
    {
      easy: 15,
      mild: 21,
      medium: 23,
      moderate: 27,
      intense: 30,
      time: "4",
    },
    {
      easy: 20,
      mild: 28,
      medium: 30,
      moderate: 38,
      intense: 42,
      time: "6",
    },
    {
      easy: 23,
      mild: 33,
      medium: 35,
      moderate: 46,
      intense: 52,
      time: "8",
    },
    {
      easy: 25,
      mild: 37,
      medium: 39,
      moderate: 52,
      intense: 60,
      time: "10",
    },
    {
      easy: 28,
      mild: 40,
      medium: 42,
      moderate: 57,
      intense: 66,
      time: "12",
    },
    {
      easy: 33,
      mild: 45,
      medium: 50,
      moderate: 67,
      intense: 78,
      time: "16",
    },
    {
      easy: 37,
      mild: 50,
      medium: 56,
      moderate: 73,
      intense: 86,
      time: "20",
    },
    {
      easy: 40,
      mild: 52,
      medium: 60,
      moderate: 75,
      intense: 90,
      time: "24",
    },
  ];

  const getColors = () => {
    return dataset.map((_, i) => (i === intensity ? "#eb9617" : "#86868655"));
  };

  const valueFormatter = (value: number | null) => `${value}% recovered`;

  return (
    <div className="timeline">
      <h2>Timeline</h2>
      <p>This is a timeline of the patient's recovery.</p>
      <div className="images">
        <div className="im-cap">
          <LineChart
            dataset={dataset}
            xAxis={[
              {
                scaleType: "linear",
                dataKey: "time",
                valueFormatter: (time) => `week ${time}`,
                id: "time",
              },
            ]}
            series={[
              { dataKey: "easy", label: "easy track", valueFormatter },
              { dataKey: "mild", label: "mild track", valueFormatter },
              { dataKey: "medium", label: "medium track", valueFormatter },
              { dataKey: "moderate", label: "moderate track", valueFormatter },
              { dataKey: "intense", label: "intense track", valueFormatter },
            ]}
            colors={getColors()}
            width={1000}
            height={500}
          >
            {/* <ChartsReferenceLine
              axisId="time"
              x={2}
              label="Week 2"
              labelAlign="middle"
              lineStyle={{ stroke: "red", strokeWidth: 2 }}
            />
            <ChartsReferenceLine
              axisId="time"
              x={5}
              label="Week 5"
              labelAlign="middle"
              lineStyle={{ stroke: "blue", strokeWidth: 2 }}
            /> */}
          </LineChart>
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
    </div>
  );
};

export default Timeline;
