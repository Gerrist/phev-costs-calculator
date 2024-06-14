import { useState } from 'react'
import './App.css'

function CostCalculator() {
    const [fuelCost, setFuelCost] = useState('');
    const [mileage, setMileage] = useState('');
    const [electricityPrice, setElectricityPrice] = useState('');
    const [electricityUsage, setElectricityUsage] = useState('');
    const [currency, setCurrency] = useState('EUR');

    const calculateGasCost = () => {
        const fuelCostFloat = parseFloat(fuelCost);
        const mileageFloat = parseFloat(mileage);
        if (!isNaN(fuelCostFloat) && !isNaN(mileageFloat)) {
            return (fuelCostFloat * mileageFloat / 100).toFixed(2);
        }
        return '0.00';
    };

    const calculateElectricCost = () => {
        const electricityPriceFloat = parseFloat(electricityPrice);
        const electricityUsageFloat = parseFloat(electricityUsage);
        if (!isNaN(electricityPriceFloat) && !isNaN(electricityUsageFloat)) {
            return (electricityPriceFloat * electricityUsageFloat / 100).toFixed(2);
        }
        return '0.00';
    };

    return (
        <div className="App">
            <h1>Cost per Kilometer Calculator</h1>
            <form>
                <div>
                    <label>
                        Currency:
                        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                            <option value="GBP">GBP</option>
                            {/* Add more currencies as needed */}
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Cost per Liter of Fuel ({currency}):
                        <input
                            type="number"
                            step="0.01"
                            value={fuelCost}
                            onChange={(e) => setFuelCost(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Mileage (liters per 100 km):
                        <input
                            type="number"
                            step="0.1"
                            value={mileage}
                            onChange={(e) => setMileage(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Electricity Price ({currency} per kWh):
                        <input
                            type="number"
                            step="0.01"
                            value={electricityPrice}
                            onChange={(e) => setElectricityPrice(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Electricity Usage (kWh per 100 km):
                        <input
                            type="number"
                            step="0.1"
                            value={electricityUsage}
                            onChange={(e) => setElectricityUsage(e.target.value)}
                        />
                    </label>
                </div>
            </form>
            <h2>Results</h2>
            <p>Gas Vehicle Cost per km: {currency} {calculateGasCost()}</p>
            <p>Electric Vehicle Cost per km: {currency} {calculateElectricCost()}</p>
        </div>
    );
}

function App() {
    return (
        <CostCalculator />
    )
}

export default App
