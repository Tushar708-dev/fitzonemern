// Pure helper functions for health maths (no database here - easy to read & test).

// BMI = weight(kg) / height(m)^2, rounded to 1 decimal
function calculateBmi(heightCm, weightKg) {
  const heightM = heightCm / 100;
  return Math.round((weightKg / (heightM * heightM)) * 10) / 10;
}

// Returns a label and a "tone" (used to colour the result card)
function bmiCategory(bmi) {
  if (bmi < 18.5) return { label: "Underweight", tone: "info" };
  if (bmi < 25) return { label: "Normal weight", tone: "good" };
  if (bmi < 30) return { label: "Overweight", tone: "warn" };
  return { label: "Obese", tone: "bad" };
}

// How much each activity level multiplies your resting calories
const ACTIVITY_LEVELS = {
  sedentary: { label: "Sedentary (little or no exercise)", factor: 1.2 },
  light: { label: "Light (exercise 1-3 days/week)", factor: 1.375 },
  moderate: { label: "Moderate (exercise 3-5 days/week)", factor: 1.55 },
  active: { label: "Very active (exercise 6-7 days/week)", factor: 1.725 },
};

// Mifflin-St Jeor equation: estimates daily calories needed to MAINTAIN weight.
function maintenanceCalories({ weightKg, heightCm, age, gender, activity }) {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  const bmr = gender === "female" ? base - 161 : base + 5;
  const factor = (ACTIVITY_LEVELS[activity] || ACTIVITY_LEVELS.sedentary).factor;
  return Math.round(bmr * factor);
}

module.exports = { calculateBmi, bmiCategory, maintenanceCalories, ACTIVITY_LEVELS };
