import React, { useState } from 'react';
import TherapyPlanCard from './TherapyPlanCard.tsx';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { CgSpinner } from 'react-icons/cg';
import './TherapyPlanSelector.css';
import { TherapyPlan } from "../scripts/get_treatment_plan.ts"
import { getTreatmentPlan } from '../scripts/get_treatment_plan.ts';

interface TherapyPlanSelectorProps {
  treatmentOptions: TherapyPlan[];
}

const TherapyPlanSelector: React.FC<TherapyPlanSelectorProps> = ({ treatmentOptions }) => {
  const [currentOptions, setCurrentOptions] = useState(treatmentOptions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDescriptions, setShowDescriptions] = useState(true);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const nextPlan = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentOptions.length);
  };

  const prevPlan = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + currentOptions.length) % currentOptions.length);
  };

  const getGptTreatment = async () => {
    console.log("welcome");
    const data = {
      treatmentOptions: currentOptions,
      patientFeedback: feedback
    };


    try {
      const treatmentPlan = await getTreatmentPlan(data);
      console.log('Response\n', treatmentPlan);
      return JSON.parse(treatmentPlan as any);
    } catch (error) {
      console.error('Failed to get treatment plan:', error);
    }



  }

  const handlePlanSelection = () => {
    console.log("Selected plan:", currentOptions[currentIndex]);
  };

  const handleNoPlanSelection = () => {
    setShowFeedbackForm(true);
  };

  const handleFeedbackSubmit = async () => {
    setIsLoading(true);
    // Simulating an API call or processing time
    console.log("Feedback submitted:", feedback);
    const treatmentPlan = await getGptTreatment();
    console.log(currentOptions);
    console.log("--");
    console.log(treatmentPlan);
    setCurrentOptions(treatmentPlan as any);
    setIsLoading(false);
    setShowFeedbackForm(false);
    setFeedback('');
    // Here you would typically update the plans based on the feedback




  };

  return (
    <div className="therapy-plan-selector">
      <div className="card-container">
        <button className="nav-button prev" onClick={prevPlan}>
          <FaChevronLeft />
        </button>
        <TherapyPlanCard
          plan={currentOptions[currentIndex]}
          showDescriptions={showDescriptions}
        />
        <button className="nav-button next" onClick={nextPlan}>
          <FaChevronRight />
        </button>
      </div>
      <div className="action-buttons">
        <button className="action-button select-plan" onClick={handlePlanSelection}>
          This plan looks great
        </button>
        <button className="action-button no-plan" onClick={handleNoPlanSelection}>
          None of these plans are for me
        </button>
      </div>
      {showFeedbackForm && (
        <div className="feedback-form">
          <textarea
            placeholder="What does your ideal therapy path look like? Your response is not shown to your doctor."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button className="update-plans-button" onClick={handleFeedbackSubmit} disabled={isLoading}>
            {isLoading ? <CgSpinner className="spinner" /> : 'Update Plans with AI'}
          </button>
        </div>
      )}
    </div>
  );
};

export default TherapyPlanSelector;