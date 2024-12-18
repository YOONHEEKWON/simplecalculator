import { useState } from "react";
import "./App.css";

function CalculatorApp() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [calcSign, setCalcSign] = useState(null);

  const handleClick = (num) => {
    // 연산자 버튼 클릭했는지, 안했는지 여부판단 조건
    if (calcSign === null) {
      setFirstNumber((prev) => prev + num);
    } else {
      setSecondNumber((prev) => prev + num);
    }
  };

  const handleSignClick = (sign) => {
    if (sign === "ac") {
      setFirstNumber("");
      setSecondNumber("");
      setCalcSign(null);
    } else if (sign === "=") {
      if (firstNumber && secondNumber && calcSign) {
        let result;
        if (calcSign === "plus") {
          result = Number(firstNumber) + Number(secondNumber);
        } else if (calcSign === "minus") {
          result = Number(firstNumber) - Number(secondNumber);
        } else if (calcSign === "multiply") {
          result = Number(firstNumber) * Number(secondNumber);
        } else if (calcSign === "divide") {
          result = Number(firstNumber) / Number(secondNumber);
        }

        setFirstNumber(result.toString());
        setSecondNumber("");
        setCalcSign(null);
      }
    } else {
      setCalcSign(sign);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-96">
        {/* Display */}
        <div className="mb-6">
          <div className="bg-gray-200 text-gray-800 text-right rounded-lg p-4 text-2xl font-mono">
            {firstNumber}
            {calcSign && (
              <span>
                {calcSign === "plus"
                  ? "+"
                  : calcSign === "minus"
                  ? "-"
                  : calcSign === "multiply"
                  ? "×"
                  : "÷"}
              </span>
            )}
            {secondNumber}
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2">
          {/* Row 1 */}
          <button
            onClick={() => handleSignClick("ac")}
            className="col-span-3 bg-red-400 hover:bg-red-500 text-white font-semibold py-3 rounded-lg shadow"
          >
            AC
          </button>

          <button
            onClick={() => handleSignClick("divide")}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg shadow"
          >
            ÷
          </button>

          {/* Row 2 */}
          <button
            onClick={() => handleClick(7)}
            className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 rounded-lg shadow"
          >
            7
          </button>
          <button
            onClick={() => handleClick(8)}
            className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 rounded-lg shadow"
          >
            8
          </button>
          <button
            onClick={() => handleClick(9)}
            className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 rounded-lg shadow"
          >
            9
          </button>
          <button
            onClick={() => handleSignClick("multiply")}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg shadow"
          >
            ×
          </button>

          {/* Row 3 */}
          <button
            onClick={() => handleClick(4)}
            className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 rounded-lg shadow"
          >
            4
          </button>
          <button
            onClick={() => handleClick(5)}
            className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 rounded-lg shadow"
          >
            5
          </button>
          <button
            onClick={() => handleClick(6)}
            className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 rounded-lg shadow"
          >
            6
          </button>
          <button
            onClick={() => handleSignClick("minus")}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg shadow"
          >
            -
          </button>

          {/* Row 4 */}
          <button
            onClick={() => handleClick(1)}
            className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 rounded-lg shadow"
          >
            1
          </button>
          <button
            onClick={() => handleClick(2)}
            className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 rounded-lg shadow"
          >
            2
          </button>
          <button
            onClick={() => handleClick(3)}
            className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 rounded-lg shadow"
          >
            3
          </button>
          <button
            onClick={() => handleSignClick("plus")}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg shadow"
          >
            +
          </button>

          {/* Row 5 */}
          <button
            onClick={() => handleClick(0)}
            className="col-span-3 bg-gray-200 hover:bg-gray-300 text-black font-semibold py-3 rounded-lg shadow"
          >
            0
          </button>

          <button
            onClick={() => handleSignClick("=")}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded-lg shadow"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorApp;
