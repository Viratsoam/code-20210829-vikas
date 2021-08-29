const bmiMethods = {
    //  Calculate-BMI
    calculateBmi:(userData) =>{
        let result = {
            overWeightPeople: 0,
            overWeightPeoples: [],
            bMIResult: []
        }
        for(let index=0;index<userData.length;index++){
            console.log(userData);
            const key = userData[index].key;
            const heightM = userData[index].value.HeightCm/100;
            const bmi = userData[index].value.WeightKg/(heightM*heightM);
            // to give more data, which can help to understand
            let tempObj = {};
            if(bmi<= 18.4){
                tempObj.people = key;
                tempObj.bmi = bmi;
                tempObj.bmiCategory = "Underweight";
                tempObj.healthRisk = "Malnutrition risk";
                result.bMIResult.push(tempObj);
            }else if(bmi>=18.5 && bmi<=24.9){
                tempObj.people = key;
                tempObj.bmi = bmi;
                tempObj.bmiCategory = "Normal weight";
                tempObj.healthRisk = "Low risk";
                result.bMIResult.push(tempObj);
            }else if(bmi>=25 && bmi<=29.9){
                tempObj.people = key;
                tempObj.bmi = bmi;
                tempObj.bmiCategory = "Overweight";
                tempObj.healthRisk = "Enhanced risk";
                result.bMIResult.push(tempObj);
                result.overWeightPeople= result.overWeightPeople + 1;
                // to give more clean data
                let tempVar = userData[index].value;
                tempVar.people = key;
                result.overWeightPeoples.push(tempVar);
            }else if(bmi>=30 && bmi<=34.9){
                tempObj.people = key;
                tempObj.bmi = bmi;
                tempObj.bmiCategory = "Moderately obese";
                tempObj.healthRisk = "Medium risk";
                result.bMIResult.push(tempObj);
            }else if(bmi>=35 && bmi<=39.9){
                tempObj.people = key;
                tempObj.bmi = bmi;
                tempObj.bmiCategory = "Severely obese";
                tempObj.healthRisk = "High risk";
                result.bMIResult.push(tempObj);
            }else{
                tempObj.people = key;
                tempObj.bmi = bmi;
                tempObj.bmiCategory = "Very severely obese";
                tempObj.healthRisk = "Very High risk";
                result.bMIResult.push(tempObj);
            }
        }
        return result;
    }
}

module.exports = bmiMethods;