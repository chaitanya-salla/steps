import { useState } from "react";

const messages = ["Learn React", "Apply for Jobs", "Invest your new Income"];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const next = () => {
    if (step < 3) setStep(step + 1);
  };

  const prev = () => {
    if (step > 1) setStep(step - 1);
  };

  const show = () => {
    setIsOpen(isOpen ? false : true);
  };

  return (
    <>
      <button className="close" onClick={show}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}{" "}
          </p>
          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={prev}
            >
              Previous
            </button>
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={next}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
