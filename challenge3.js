const basicSalary = 40000;
const benefits = 8000;

function netsalary(Basicsalary, Benefits) {
    const taxRates = {
        //  corresponding tax rates
        Rates: [
          { min: 0, max: 24000, rate: 10 },
          { min: 24001, max: 32333, rate: 25 },
          { Above: 32333, rate: 30 },
        ],
      
    
      };
    
      const grossSalary = basicSalary + benefits;

      // Calculate tax
      const tax = 0;
    
      if (grossSalary <= 24000) {
        tax = (grossSalary * taxRates.Rates[0].rate) / 100;
      } else if (grossSalary > 24000 && grossSalary <= 32333) {
        tax =
          (24000 * taxRates.Rates[0].rate +
            (grossSalary - 24000) * taxRates.Rates[1].rate) /
          100;
      } else {
        tax =
          (24000 * taxRates.Rates[0].rate +
            (32333 - 24000) * taxRates.Rates[1].rate +
            (grossSalary - 32333) * taxRates.Rates[2].rate) /
          100;
      }
    
      // Calculating net salary
      const netSalary = grossSalary - tax;
    
    
      return {
        grossSalary,
        tax,
        netSalary,
      };
    }
    const result = netsalary(basicSalary, benefits);
    
    console.log("Gross Salary:", result.grossSalary);
    console.log("Tax:", result.tax);
    console.log("Net Salary:", result.netSalary);   

