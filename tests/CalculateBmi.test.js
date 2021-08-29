const bmiMethods = require("../BMI-Controller/CalculateBmi");

describe("CalculateBmi", () => {
  it(" Test For Underweight", () => {
    const userData = [
      {
        key: 0,
        value: {
          HeightCm: 175,
          WeightKg: 55,
        },
      },
    ];
    const result = bmiMethods.calculateBmi(userData);
    expect(result).toEqual({
      overWeightPeople: 0,
      overWeightPeoples: [],
      bMIResult: [
        {
          people: 0,
          bmi: 17.959183673469386,
          bmiCategory: "Underweight",
          healthRisk: "Malnutrition risk",
        },
      ],
    });
  });
  it(" Test For Normal weight", () => {
    const userData = [
      {
        key: 0,
        value: {
          HeightCm: 175,
          WeightKg: 75,
        },
      },
    ];
    const result = bmiMethods.calculateBmi(userData);
    expect(result).toEqual({
      overWeightPeople: 0,
      overWeightPeoples: [],
      bMIResult: [
        {
          people: 0,
          bmi: 24.489795918367346,
          bmiCategory: "Normal weight",
          healthRisk: "Low risk",
        },
      ],
    });
  });
  it(" Test For Overweight", () => {
    const userData = [
      {
        key: 0,
        value: {
          HeightCm: 167,
          WeightKg: 82,
        },
      },
    ];
    const result = bmiMethods.calculateBmi(userData);
    expect(result).toEqual({
      overWeightPeople: 1,
      overWeightPeoples: [{ HeightCm: 167, WeightKg: 82, people: 0 }],
      bMIResult: [
        {
          people: 0,
          bmi: 29.402273297715947,
          bmiCategory: "Overweight",
          healthRisk: "Enhanced risk",
        },
      ],
    });
  });
  it(" Test For Moderately obese", () => {
    const userData = [
      {
        key: 0,
        value: {
          HeightCm: 167,
          WeightKg: 90,
        },
      },
    ];
    const result = bmiMethods.calculateBmi(userData);
    console.log(result);
    expect(result).toEqual({
      overWeightPeople: 0,
      overWeightPeoples: [],
      bMIResult: [
        {
          people: 0,
          bmi: 32.2707877657858,
          bmiCategory: "Moderately obese",
          healthRisk: "Medium risk",
        },
      ],
    });
  });
  it(" Test For Severely obese", () => {
    const userData = [
      {
        key: 0,
        value: {
          HeightCm: 167,
          WeightKg: 110,
        },
      },
    ];
    const result = bmiMethods.calculateBmi(userData);
    expect(result).toEqual({
      overWeightPeople: 0,
      overWeightPeoples: [],
      bMIResult: [
        {
          people: 0,
          bmi: 39.442073935960416,
          bmiCategory: "Severely obese",
          healthRisk: "High risk",
        },
      ],
    });
  });
  it(" Test For Very severely obese", () => {
    const userData = [
      {
        key: 0,
        value: {
          HeightCm: 167,
          WeightKg: 159,
        },
      },
    ];
    const result = bmiMethods.calculateBmi(userData);
    expect(result).toEqual({
      overWeightPeople: 0,
      overWeightPeoples: [],
      bMIResult: [
        {
          people: 0,
          bmi: 57.01172505288824,
          bmiCategory: "Very severely obese",
          healthRisk: "Very High risk",
        },
      ],
    });
  });
});
