import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

interface ExpandableDetail {
  Phase: string;
  Description: string;
  Intensity: number;
  Time: string;
  Note?: string; // Optional property
}

// Define an interface for each type of exercise
interface ExerciseDetail {
  ConciseOverview: string;
  ExpandableDetails: ExpandableDetail[];
}

// Define the interface for each therapy plan
interface TherapyPlan {
  PlanName: string;
  Duration: string;
  Overview: string;
  Exercises: {
    Memory: ExerciseDetail;
    Cognitive: ExerciseDetail;
    Balance: ExerciseDetail;
  };
  IntensityLevels: { Week: number; Intensity: number }[];
}

// Define the InputData interface with treatmentOptions being an array of TherapyPlans
interface InputData {
  treatmentOptions: TherapyPlan[];
  patientFeedback: string;
}

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

export const getTreatmentPlan = async (inputData: InputData): Promise<string | undefined> => {
  const prompt = generatePrompt(inputData);
  try {
    console.log("prompt: ", prompt);
    const response = await openai.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "gpt-3.5-turbo",
    });

    if (response.choices && response.choices.length > 0) {
      return response.choices[0].message.content?.trim();
    } else {
      return 'No suitable compromise plan could be generated.';
    }
  } catch (error) {
    console.error('Error getting treatment plan', error);
    throw new Error('An error occurred while generating the plan.');
  }
};

const generatePrompt = (inputData: InputData): string => {

  return `
    The following is a JSON list of treatment care options recommended by a doctor for a patient:
    "${JSON.stringify(inputData.treatmentOptions)}"
    
    The patient has expressed the following concerns about these options:
    "${JSON.stringify(inputData.patientFeedback)}"
    
    Please provide JSON compromise plans that addresses the patient's concerns while adhering to the general philosophy of necessary therapy, providing different plans with varying intensity.
  `;
};
