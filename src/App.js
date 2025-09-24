import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

export const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("0");

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleClear = () => {
    setCurrentNumber("0");
    setOperation("");
  };

  const handleSumNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      handleClear();
      setOperation("+");
    } else {
      const calc = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(calc));
      setFirstNumber("0");
      setOperation("");
    }
  };

  const handleMinusNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      handleClear();
      setOperation("-");
    } else {
      const calc = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(calc));
      setFirstNumber("0");
      setOperation("");
    }
  };

  const handleTimesNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      handleClear();
      setOperation("x");
    } else {
      const calc = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(calc));
      setFirstNumber("0");
      setOperation("");
    }
  };

  const handleDivNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      handleClear();
      setOperation("/");
    } else {
      const calc = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(calc));
      setFirstNumber("0");
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumber();
          break;
        case "-":
          handleMinusNumber();
          break;
        case "x":
          handleTimesNumber();
          break;
        case "/":
          handleDivNumber();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="/" onClick={handleDivNumber} />
          <Button label="C" onClick={handleClear} />
          <Button label="CA" onClick={handleClear} />
        </Row>

        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="x" onClick={handleTimesNumber} />
        </Row>

        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="-" onClick={handleMinusNumber} />
        </Row>

        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="+" onClick={handleSumNumber} />
        </Row>

        <Row>
          <Button label="." onClick={() => handleAddNumber(".")} />
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
