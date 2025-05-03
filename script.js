function calculateMortgage() {
    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interest').value) / 100 / 12;
    const payments = parseInt(document.getElementById('years').value) * 12;
    const x = Math.pow(1 + interestRate, payments);
    const monthly = (principal * x * interestRate) / (x - 1);
    if (!isNaN(monthly)) {
      document.getElementById('result').textContent = 'Monthly Payment: $' + monthly.toFixed(2);
    } else {
      document.getElementById('result').textContent = 'Please enter valid values.';
    }
  }
  
