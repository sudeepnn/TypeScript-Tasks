"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateHealthInsurancePremium(factors) {
    var basePremium = 1000;
    if (factors.age < 18) {
        basePremium += 200;
    }
    else if (factors.age >= 18 && factors.age <= 45) {
        basePremium += 500;
    }
    else if (factors.age > 45 && factors.age <= 65) {
        basePremium += 1000;
    }
    else {
        basePremium += 1500;
    }
    switch (factors.healthCondition.toLowerCase()) {
        case "excellent":
            basePremium -= 100;
            break;
        case "good":
            break;
        case "fair":
            basePremium += 300;
            break;
        case "poor":
            basePremium += 600;
            break;
        default:
            basePremium += 200;
    }
    if (factors.smoker) {
        basePremium += 800;
    }
    else {
        basePremium -= 200;
    }
    if (factors.bmi < 18.5) {
        basePremium += 100;
    }
    else if (factors.bmi >= 18.5 && factors.bmi < 25) {
        basePremium -= 100;
    }
    else if (factors.bmi >= 25 && factors.bmi < 30) {
        basePremium += 300;
    }
    else {
        basePremium += 500;
    }
    switch (factors.location.toLowerCase()) {
        case "urban":
            basePremium += 200;
            break;
        case "suburban":
            basePremium += 100;
            break;
        case "rural":
            basePremium += 50;
            break;
        default:
            basePremium += 100;
    }
    switch (factors.coverageType.toLowerCase()) {
        case "basic":
            basePremium += 100;
            break;
        case "standard":
            basePremium += 300;
            break;
        case "premium":
            basePremium += 500;
            break;
        default:
            basePremium += 200;
    }
    return basePremium;
}
var healthFactors = {
    age: 35,
    healthCondition: "good",
    smoker: false,
    bmi: 24,
    location: "urban",
    coverageType: "standard",
};
var healthFactors1 = {
    age: 50,
    healthCondition: "fair",
    smoker: true,
    bmi: 28,
    location: "suburban",
    coverageType: "premium",
};
var healthFactors2 = {
    age: 22,
    healthCondition: "excellent",
    smoker: false,
    bmi: 22,
    location: "rural",
    coverageType: "basic",
};
var premium = calculateHealthInsurancePremium(healthFactors);
console.log("The calculated health insurance premium is: $".concat(premium));
var premium1 = calculateHealthInsurancePremium(healthFactors1);
console.log("The calculated health insurance premium is: $".concat(premium1));
var premium2 = calculateHealthInsurancePremium(healthFactors2);
console.log("The calculated health insurance premium is: $".concat(premium2));
