import { ChartsReferenceLine } from "@mui/x-charts/ChartsReferenceLine";
import { LineChart } from "@mui/x-charts/LineChart";
import React from "react";
import "./Timeline.css"; // Assuming you'll use the same CSS file

const CheckIn = ({
  setCurrentPage,
  intensity = 2,
  currentWeek = 4,
  nextCheckInWeek = 8,
}: {
  setCurrentPage: (_: string) => void;
  intensity: number;
  currentWeek: number;
  nextCheckInWeek: number;
}) => {
  const dataset = [
    { easy: 0, mild: 0, medium: 0, moderate: 0, intense: 0, time: "0" },
    { easy: 4, mild: 6, medium: 6, moderate: 8, intense: 10, time: "1" },
    { easy: 10, mild: 13, medium: 14, moderate: 17, intense: 18, time: "2" },
    { easy: 12, mild: 18, medium: 19, moderate: 23, intense: 25, time: "3" },
    { easy: 15, mild: 21, medium: 23, moderate: 27, intense: 30, time: "4" },
    { easy: 20, mild: 28, medium: 30, moderate: 38, intense: 42, time: "6" },
    { easy: 23, mild: 33, medium: 35, moderate: 46, intense: 52, time: "8" },
    { easy: 25, mild: 37, medium: 39, moderate: 52, intense: 60, time: "10" },
    { easy: 28, mild: 40, medium: 42, moderate: 57, intense: 66, time: "12" },
    { easy: 33, mild: 45, medium: 50, moderate: 67, intense: 78, time: "16" },
    { easy: 37, mild: 50, medium: 56, moderate: 73, intense: 86, time: "20" },
    { easy: 40, mild: 52, medium: 60, moderate: 75, intense: 90, time: "24" },
  ];

  const getColors = () => {
    return dataset.map((_, i) => (i === intensity ? "#eb9617" : "#86868655"));
  };

  const valueFormatter = (value: number | null) => `${value}% recovered`;

  return (
    <div className="timeline">
      <h2>Check-In</h2>
      <p>
        Below is your current progress and next check-in on your projected
        recovery track.
      </p>
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
            <ChartsReferenceLine
              axisId="time"
              x={currentWeek}
              label="Current Week"
              labelAlign="middle"
              lineStyle={{ stroke: "green", strokeWidth: 2 }}
            />
            <ChartsReferenceLine
              axisId="time"
              x={nextCheckInWeek}
              label="Next Check-in"
              labelAlign="middle"
              lineStyle={{ stroke: "blue", strokeWidth: 2 }}
            />
          </LineChart>
        </div>
      </div>
      <p>
        You are currently on week {currentWeek} of your recovery journey. Your
        next check-in is scheduled for week {nextCheckInWeek}.
      </p>
      <p>
        Your recovery is progressing according to the selected intensity track.
        Remember that actual recovery may vary based on individual factors.
      </p>
      <p>
        If you need assistance before your next check-in, please don't hesitate
        to contact your medical professional.
      </p>
    </div>
  );
};

export default CheckIn;
