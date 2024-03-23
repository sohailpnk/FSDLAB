import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmivalue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmivalue);
    }
  };

  const getBMICategory = () => {
    if (bmi < 16) return 'Severe Thinness';
    if (bmi >= 16 && bmi < 17) return 'Moderate Thinness';
    if (bmi >= 17 && bmi < 18.5) return 'Mild Thinness';
    if (bmi >= 18.5 && bmi < 25) return 'Normal';
    if (bmi >= 25 && bmi < 30) return 'Overweight';
    if (bmi >= 30 && bmi < 35) return 'Obese Class I';
    if (bmi >= 35 && bmi < 40) return 'Obese Class II';
    if (bmi >= 40) return 'Obese Class III';
    return '';
  };

  const getMeterColor = () => {
    if (bmi < 16) return '#3498db';
    if (bmi < 17) return '#9b59b6';
    if (bmi < 18.5) return '#2ecc71';
    if (bmi < 25) return '#f1c40f';
    if (bmi < 30) return '#e67e22';
    if (bmi < 35) return '#e74c3c';
    if (bmi < 40) return '#c0392b';
    return '#96281b';
  };

  return (
    <div className="App">
      <h1 style={{ borderBottom: '2px solid #FFA500', paddingBottom: '10px', marginBottom: '20px', color: 'green' }}>BMI Calculator</h1>
      <div className="container">
        <div className="form-container">
          <label>
            Height (cm):
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
          </label>
          <label>
            Weight (kg):
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </label>
          <button
            onClick={calculateBMI}
            onMouseOver={(e) => (e.target.style.background = 'orange')}
            onMouseOut={(e) => (e.target.style.background = 'darkblue')}>check BMI</button>
          {bmi !== null && (
            <div className="result-container">
              <div className="meter" style={{ width: `${bmi * 3}px`, backgroundColor: getMeterColor() }}>
              </div>
            </div>
          )}
          <p>
            <strong>Your BMI is: {bmi}</strong>
          </p>
          <p>
            <strong>Category: {getBMICategory()}</strong>
          </p>
        </div>
        <div className="table-container">
          <h4>BMI Categories</h4>
          <table className="category-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>BMI Range (kg/m^2)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Severe Thinness</td>
                <td>&lt;16</td>
              </tr>
              <tr>
                <td>Moderate Thinness</td>
                <td>16-17</td>
              </tr>
              <tr>
                <td>Mild Thinness</td>
                <td>17-18.5</td>
              </tr>
              <tr>
                <td>Normal</td>
                <td>18.5-25</td>
              </tr>
              <tr>
                <td>Overweight</td>
                <td>25-30</td>
              </tr>
              <tr>
                <td>Obese Class I</td>
                <td>30-35</td>
              </tr>
              <tr>
                <td>Obese Class II</td>
                <td>35-40</td>
              </tr>
              <tr>
                <td>Obese Class III</td>
                <td>&gt;40</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;