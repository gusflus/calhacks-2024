import React from 'react';

interface ExerciseDetailsProps {
  details: ExpandableDetail[];
}

const ExerciseDetails: React.FC<ExerciseDetailsProps> = ({ details }) => {
  return (
    <div className="exercise-details">
      {details.map((detail, index) => (
        <div key={index}>
          <h5>{detail.Phase}</h5>
          <p>Description: {detail.Description}</p>
          <p>Intensity: {detail.Intensity}</p>
          <p>Time: {detail.Time}</p>
          {detail.Note && <p>Note: {detail.Note}</p>}
        </div>
      ))}
    </div>
  );
};

export default ExerciseDetails;