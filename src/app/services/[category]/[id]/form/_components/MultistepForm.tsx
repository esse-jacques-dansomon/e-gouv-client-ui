"use client";
import React from "react";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import Step6 from "./step6";
import { useState } from "react";

const MultistepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = () => {
    alert("Formulaire soumis");
  };

  return (
    <div className="container mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      {step === 1 && <Step1 nextStep={nextStep} />}
      {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <Step4 nextStep={nextStep} prevStep={prevStep} />}
      {step === 5 && <Step5 nextStep={nextStep} prevStep={prevStep} />}
      {step === 6 && <Step6 prevStep={prevStep} handleSubmit={handleSubmit} />}
    </div>
  );
};

export default MultistepForm;
