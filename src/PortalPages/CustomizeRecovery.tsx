import React from "react";
import "./PortalPage.css";
import TherapyPlanSelector from '../components/TherapyPlanSelector.tsx';

const therapyPlans = {
  "TherapyPlans": [
    {
      "PlanName": "Standard Recovery Plan",
      "Duration": "9+ weeks",
      "Overview": "This plan focuses on memory, cognitive, and balance exercises to support your recovery process.",
      "Exercises": {
        "Memory": {
          "ConciseOverview": "Engage in memory recall activities with increasing in complexity over 9+ weeks.",
          "ExpandableDetails": [
            {
              "Phase": "Week 1-4",
              "Description": "Simple memory games like recalling daily events for 10-15 minutes each day to enhance your memory retention and recall skills.",
              "Intensity": 2,
              "Time": "10-15 min/day"
            },
            {
              "Phase": "Week 5-8",
              "Description": "Recall more complex information like phone numbers or addresses for 15-20 minutes a day to improve your short-term memory.",
              "Intensity": 4,
              "Time": "15-20 min/day"
            },
            {
              "Phase": "Week 9+",
              "Description": "Focus on advanced memory exercises like recalling detailed past events and sequences of information for 20-30 minutes, 3-4 times a week, to further strengthen your memory capacity.",
              "Intensity": 6,
              "Time": "20-30 min, 3-4 times/week"
            }
          ]
        },
        "Cognitive": {
          "ConciseOverview": "Participate in cognitive tasks starting with simple puzzles and progressing to complex problem-solving activities over 9+ weeks.",
          "ExpandableDetails": [
            {
              "Phase": "Week 1-4",
              "Description": "Engage in activities such as solving simple puzzles or reading aloud for 15-20 minutes daily to help stimulate your cognitive functions.",
              "Intensity": 2,
              "Time": "15-20 min/day"
            },
            {
              "Phase": "Week 5-8",
              "Description": "Incorporate more challenging cognitive tasks such as advanced puzzles, memory recall exercises, and strategy games like chess for 20-30 minutes, 4-5 times a week, to build on your cognitive progress.",
              "Intensity": 4,
              "Time": "20-30 min, 4-5 times/week"
            },
            {
              "Phase": "Week 9+",
              "Description": "Participate in problem-solving tasks, strategic games, and possibly group discussions or book reading sessions for 30-45 minutes, 3-4 times a week, to further enhance your cognitive health and maintain sharpness.",
              "Intensity": 6,
              "Time": "30-45 min, 3-4 times/week"
            }
          ]
        },
        "Balance": {
          "ConciseOverview": "Perform balance exercises to improve stability, starting with basic tasks and moving to more challenging activities over 9+ weeks.",
          "ExpandableDetails": [
            {
              "Phase": "Week 1-4",
              "Description": "Focus on simple balance activities like standing on one foot or walking heel-to-toe for 5-10 minutes daily to improve your stability and coordination.",
              "Intensity": 2,
              "Time": "5-10 min/day"
            },
            {
              "Phase": "Week 5-8",
              "Description": "Try incorporating more dynamic balance activities, such as gentle challenges and practice standing on unstable surfaces for 10-15 minutes, 3-4 times a week, to increase your balance and coordination skills, along with balancing with balance balls.",
              "Intensity": 4,
              "Time": "10-15 min, 3-4 times/week"
            },
            {
              "Phase": "Week 9+",
              "Description": "Include more complex balance tasks like coordination exercises, such as reaching for objects while standing or using an exercise ball, for 15-20 minutes, 2-3 times a week.",
              "Intensity": 6,
              "Time": "15-20 min, 2-3 times/week",
              "Note": "Alternative to exercise ball: balance board or standing balance exercises."
            }
          ]
        }
      },
      "IntensityLevels": [
        {
          "Week": 1,
          "Intensity": 2
        },
        {
          "Week": 3,
          "Intensity": 3
        },
        {
          "Week": 5,
          "Intensity": 4
        },
        {
          "Week": 7,
          "Intensity": 5
        },
        {
          "Week": 9,
          "Intensity": 6
        }
      ]
    },
    {
      "PlanName": "Moderate Intensity Plan",
      "Duration": "9+ weeks",
      "Overview": "This plan is designed for moderate intensity with a focus on progressive cognitive and balance improvements.",
      "Exercises": {
        "Memory": {
          "ConciseOverview": "Start with moderate complexity memory tasks and gradually increase difficulty over 9+ weeks.",
          "ExpandableDetails": [
            {
              "Phase": "Week 1-4",
              "Description": "Recall phone numbers or short stories for 10-15 minutes each day to boost memory retention.",
              "Intensity": 3,
              "Time": "10-15 min/day"
            },
            {
              "Phase": "Week 5-8",
              "Description": "Engage in detailed memory recall tasks for 15-20 minutes daily to enhance memory complexity.",
              "Intensity": 5,
              "Time": "15-20 min/day"
            },
            {
              "Phase": "Week 9+",
              "Description": "Perform advanced memory exercises, like recalling detailed sequences and events, for 20-30 minutes, 4-5 times a week, to significantly improve memory capacity.",
              "Intensity": 7,
              "Time": "20-30 min, 4-5 times/week"
            }
          ]
        },
        "Cognitive": {
          "ConciseOverview": "Focus on moderately challenging cognitive activities, increasing complexity over 9+ weeks.",
          "ExpandableDetails": [
            {
              "Phase": "Week 1-4",
              "Description": "Engage in memory recall and moderate puzzles for 15-20 minutes daily to stimulate cognitive functions.",
              "Intensity": 3,
              "Time": "15-20 min/day"
            },
            {
              "Phase": "Week 5-8",
              "Description": "Incorporate complex puzzles and problem-solving tasks for 20-30 minutes, 4-5 times a week, to build cognitive skills.",
              "Intensity": 5,
              "Time": "20-30 min, 4-5 times/week"
            },
            {
              "Phase": "Week 9+",
              "Description": "Participate in advanced cognitive activities, such as strategy games and detailed reading, for 30-45 minutes, 4-5 times a week, to enhance cognitive sharpness.",
              "Intensity": 7,
              "Time": "30-45 min, 4-5 times/week"
            }
          ]
        },
        "Balance": {
          "ConciseOverview": "Perform balance exercises starting with moderate tasks and progressing to more complex activities over 9+ weeks.",
          "ExpandableDetails": [
            {
              "Phase": "Week 1-4",
              "Description": "Practice standing on one foot or balance board exercises for 5-10 minutes daily to improve balance.",
              "Intensity": 3,
              "Time": "5-10 min/day"
            },
            {
              "Phase": "Week 5-8",
              "Description": "Incorporate dynamic balance activities such as heel-to-toe walking and unstable surface balancing for 10-15 minutes, 3-4 times a week, to enhance coordination.",
              "Intensity": 5,
              "Time": "10-15 min, 3-4 times/week"
            },
            {
              "Phase": "Week 9+",
              "Description": "Perform complex balance tasks, like reaching while standing or using a balance board, for 15-20 minutes, 3-4 times a week, to maximize stability and coordination.",
              "Intensity": 7,
              "Time": "15-20 min, 3-4 times/week",
              "Note": "Alternative to exercise ball: balance board or standing balance exercises."
            }
          ]
        }
      },
      "IntensityLevels": [
        {
          "Week": 1,
          "Intensity": 3
        },
        {
          "Week": 3,
          "Intensity": 4
        },
        {
          "Week": 5,
          "Intensity": 5
        },
        {
          "Week": 7,
          "Intensity": 6
        },
        {
          "Week": 9,
          "Intensity": 7
        }
      ]
    },
    {
      "PlanName": "High Intensity Plan",
      "Duration": "9+ weeks",
      "Overview": "This plan targets high intensity cognitive and balance exercises with rapid progression.",
      "Exercises": {
        "Memory": {
          "ConciseOverview": "Start with high complexity memory tasks and increase intensity quickly over 9+ weeks.",
          "ExpandableDetails": [
            {
              "Phase": "Week 1-4",
              "Description": "Engage in detailed memory recall and sequence tasks for 15-20 minutes daily to boost memory.",
              "Intensity": 4,
              "Time": "15-20 min/day"
            },
            {
              "Phase": "Week 5-8",
              "Description": "Perform advanced memory exercises such as detailed event recall for 20-25 minutes daily to enhance memory capacity.",
              "Intensity": 6,
              "Time": "20-25 min/day"
            },
            {
              "Phase": "Week 9+",
              "Description": "Focus on high complexity memory tasks, such as complex sequences and detailed past events, for 25-30 minutes, 4-5 times a week, to significantly improve memory function.",
              "Intensity": 8,
              "Time": "25-30 min, 4-5 times/week"
            }
          ]
        },
        "Cognitive": {
          "ConciseOverview": "Focus on highly challenging cognitive activities, with a steep increase in difficulty over 9+ weeks.",
          "ExpandableDetails": [
            {
              "Phase": "Week 1-4",
              "Description": "Solve complex puzzles and engage in detailed reading for 20-25 minutes daily to stimulate cognitive functions.",
              "Intensity": 4,
              "Time": "20-25 min/day"
            },
            {
              "Phase": "Week 5-8",
              "Description": "Incorporate high complexity problem-solving tasks and strategy games for 25-30 minutes, 4-5 times a week, to enhance cognitive abilities.",
              "Intensity": 6,
              "Time": "25-30 min, 4-5 times/week"
            },
            {
              "Phase": "Week 9+",
              "Description": "Participate in advanced cognitive activities like strategic games and group discussions for 30-45 minutes, 5-6 times a week, to maintain and sharpen cognitive skills.",
              "Intensity": 8,
              "Time": "30-45 min, 5-6 times/week"
            }
          ]
        },
        "Balance": {
          "ConciseOverview": "Perform balance exercises starting with moderate tasks and progressing to high complexity activities over 9+ weeks.",
          "ExpandableDetails": [
            {
              "Phase": "Week 1-4",
              "Description": "Practice balancing on one foot or using a balance board for 10-15 minutes daily to improve stability.",
              "Intensity": 4,
              "Time": "10-15 min/day"
            },
            {
              "Phase": "Week 5-8",
              "Description": "Incorporate dynamic balance activities such as walking on uneven surfaces and advanced balance tasks for 15-20 minutes, 4-5 times a week, to enhance coordination and balance.",
              "Intensity": 6,
              "Time": "15-20 min, 4-5 times/week"
            },
            {
              "Phase": "Week 9+",
              "Description": "Engage in high complexity balance exercises like multi-directional balance tasks and coordination drills for 20-25 minutes, 5-6 times a week, to maximize balance and prevent falls.",
              "Intensity": 8,
              "Time": "20-25 min, 5-6 times/week",
              "Note": "Alternative to exercise ball: balance board or standing balance exercises."
            }
          ]
        }
      },
      "IntensityLevels": [
        {
          "Week": 1,
          "Intensity": 4
        },
        {
          "Week": 3,
          "Intensity": 5
        },
        {
          "Week": 5,
          "Intensity": 6
        },
        {
          "Week": 7,
          "Intensity": 7
        },
        {
          "Week": 9,
          "Intensity": 8
        }
      ]
    },
    {
      "PlanName": "Flexible Intensity Plan",
      "Duration": "9+ weeks",
      "Overview": "A flexible plan to adjust intensity based on individual progress in cognitive and balance exercises.",
      "Exercises": {
        "Memory": {
          "ConciseOverview": "Start with low to medium complexity memory tasks, adjustable based on progress over 9+ weeks.",
          "ExpandableDetails": [
            {
              "Phase": "Week 1-4",
              "Description": "Recall simple events and engage in memory games for 10-15 minutes each day to assess initial memory retention.",
              "Intensity": 2,
              "Time": "10-15 min/day"
            },
            {
              "Phase": "Week 5-8",
              "Description": "Increase complexity with detailed memory tasks and short story recall for 15-20 minutes daily, adjusting intensity as needed.",
              "Intensity": 4,
              "Time": "15-20 min/day"
            },
            {
              "Phase": "Week 9+",
              "Description": "Focus on complex memory exercises and event sequences for 20-30 minutes, 3-4 times a week, adjusting for progress.",
              "Intensity": 6,
              "Time": "20-30 min, 3-4 times/week"
            }
          ]
        },
        "Cognitive": {
          "ConciseOverview": "Engage in cognitive tasks that can be easily scaled in difficulty based on progress over 9+ weeks.",
          "ExpandableDetails": [
            {
              "Phase": "Week 1-4",
              "Description": "Start with basic puzzles and reading for 15-20 minutes daily, with adjustments based on initial cognitive assessment.",
              "Intensity": 2,
              "Time": "15-20 min/day"
            },
            {
              "Phase": "Week 5-8",
              "Description": "Incorporate moderate to complex cognitive tasks such as puzzles and memory recall for 20-30 minutes, 4-5 times a week, with flexibility for increased difficulty.",
              "Intensity": 4,
              "Time": "20-30 min, 4-5 times/week"
            },
            {
              "Phase": "Week 9+",
              "Description": "Engage in advanced cognitive exercises and strategy games for 30-45 minutes, 3-4 times a week, with intensity adjustments based on progress.",
              "Intensity": 6,
              "Time": "30-45 min, 3-4 times/week"
            }
          ]
        },
        "Balance": {
          "ConciseOverview": "Perform balance exercises with flexible intensity, progressing to more challenging tasks over 9+ weeks.",
          "ExpandableDetails": [
            {
              "Phase": "Week 1-4",
              "Description": "Practice basic balance tasks like standing on one foot for 5-10 minutes daily, with room for progression.",
              "Intensity": 2,
              "Time": "5-10 min/day"
            },
            {
              "Phase": "Week 5-8",
              "Description": "Incorporate more dynamic balance activities such as heel-to-toe walking and unstable surface balancing for 10-15 minutes, 3-4 times a week, with flexibility for increased difficulty.",
              "Intensity": 4,
              "Time": "10-15 min, 3-4 times/week"
            },
            {
              "Phase": "Week 9+",
              "Description": "Include complex balance tasks like reaching while standing or using a balance board for 15-20 minutes, 2-3 times a week, with intensity adjustments based on progress.",
              "Intensity": 6,
              "Time": "15-20 min, 2-3 times/week",
              "Note": "Alternative to exercise ball: balance board or standing balance exercises."
            }
          ]
        }
      },
      "IntensityLevels": [
        {
          "Week": 1,
          "Intensity": 2
        },
        {
          "Week": 3,
          "Intensity": 3
        },
        {
          "Week": 5,
          "Intensity": 4
        },
        {
          "Week": 7,
          "Intensity": 5
        },
        {
          "Week": 9,
          "Intensity": 6
        }
      ]
    }
  ]
};

const CustomizeRecovery = ({
  setCurrentPage,
}: {
  setCurrentPage: (_: string) => void;
}) => {
  return (
    <div>
      <h2>Choose your recovery strategy</h2>
      <TherapyPlanSelector treatmentOptions={therapyPlans.TherapyPlans} />
    </div>
  );
};

export default CustomizeRecovery;
