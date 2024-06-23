import { getTreatmentPlan } from './get_treatment_plan';
import { therapyPlans } from "../assets/therapy_plan"

const exampleData = {
  treatmentOptions: therapyPlans.TherapyPlans,
  patientFeedback: 'I find it difficult to attend physical therapy sessions due to my work schedule and I am uncomfortable with daily medication.'
};

const main = async () => {
  try {
    const treatmentPlan = await getTreatmentPlan(exampleData);
    console.log('Response\n', treatmentPlan);
  } catch (error) {
    console.error('Failed to get treatment plan:', error);
  }
};

main();
