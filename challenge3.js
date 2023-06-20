function netsalary() {
  const basicSalary = parseFloat(prompt("Enter the basic salary:"));
  const benefits = parseFloat(prompt("Enter the benefits:"));

  const taxRates = {
    rates: [
      { min: 0, max: 24000, rate: 10 },
      { min: 24001, max: 32333, rate: 25 },
      { above: 32333, rate: 30 },
    ],
  };

  const grossSalary = basicSalary + benefits;

  let tax = 0;

  for (const rate of taxRates.rates) {
    if (grossSalary > rate.min) {
      if (rate.max && grossSalary > rate.max) {
        tax += (rate.max - rate.min + 1) * (rate.rate / 100);
      } else {
        tax += (grossSalary - rate.min + 1) * (rate.rate / 100);
      }
    } else {
      break;
    }
  }

  const nhifDeductions = 0.02 * grossSalary; // NHIF deductions (2% of gross salary)
  const nssfDeductions = 0.05 * grossSalary; // NSSF deductions (5% of gross salary)
  const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

  return {
    grossSalary,
    tax,
    nhifDeductions,
    nssfDeductions,
    netSalary,
  };
}

const result = netsalary();

console.log("Gross Salary:", result.grossSalary);
console.log("Tax:", result.tax);
console.log("NHIF Deductions:", result.nhifDeductions);
console.log("NSSF Deductions:", result.nssfDeductions);
console.log("Net Salary:", result.netSalary);
