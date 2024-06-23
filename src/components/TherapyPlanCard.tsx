import React, { useState } from 'react';
import ExerciseDetails from './ExerciseDetails.tsx';
import { TherapyPlan } from "../scripts/get_treatment_plan.ts";
import './TherapyPlanCard.css';

interface TherapyPlanCardProps {
  plan: TherapyPlan;
  showDescriptions: boolean;
}

const colorIntensity = (value: number) => {
  if (value < 0 || value > 10) {
    throw new Error("Value must be between 0 and 10");
  }

  const startColor = { r: 0, g: 255, b: 0 };  // Green
  const endColor = { r: 255, g: 0, b: 0 };    // Red

  const ratio = value / 10;

  const interpolatedColor = {
    r: Math.round(startColor.r + (endColor.r - startColor.r) * ratio),
    g: Math.round(startColor.g + (endColor.g - startColor.g) * ratio),
    b: Math.round(startColor.b + (endColor.b - startColor.b) * ratio),
  };

  const toHex = (c) => c.toString(16).padStart(2, '0');
  return `#${toHex(interpolatedColor.r)}${toHex(interpolatedColor.g)}${toHex(interpolatedColor.b)}`;
}

const TherapyPlanCard: React.FC<TherapyPlanCardProps> = ({ plan, showDescriptions }) => {
  const [expandedExercise, setExpandedExercise] = useState<string | null>(null);
  const intensityValue1 = plan.IntensityLevels[3]?.Intensity ?? 0;
  const intensityValue2 = plan.IntensityLevels[2]?.Intensity ?? 0;
  const intensityValueUn = (intensityValue1 + intensityValue2) / 2;
  const intensityValue = intensityValueUn > 5 ? Math.ceil(intensityValueUn) : Math.floor(intensityValueUn);
  const intensityColor = colorIntensity(intensityValue);

  return (
    <div className="therapy-plan-card">
      {expandedExercise ? (
        <>
          <button
            className="back-button"
            onClick={() => setExpandedExercise(null)}
          >
            Hide Details
          </button>
          <ExerciseDetails details={plan.Exercises[expandedExercise].ExpandableDetails} />
        </>
      ) : (
        <>
          <div className="big-number" style={{ color: intensityColor }}>
            {intensityValue}/10 intensity
          </div>

          <h2>{plan.PlanName}</h2>
          <p>Overview: {plan.Overview}</p>

          <h3>Exercises:</h3>
          {Object.entries(plan.Exercises).map(([type, exercise]) => (
            <div key={type} className="exercise-item">
              <div className="exercise-info">
                <h4>{type}</h4>
                {showDescriptions && <p>{exercise.ConciseOverview}</p>}
              </div>
              <button
                className="expand-button"
                onClick={() => setExpandedExercise(type)}
              >
                Show Details
              </button>
            </div>
          ))}


        </>
      )}
    </div>
  );
};

export default TherapyPlanCard;
