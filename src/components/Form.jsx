import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Review from "./Review";
import Submit from "./Submit"; 
import "../styles/form.css";

const Form = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    city: "",
    zip: "",
    username: "",
    password: "",
    confirmPassword: "",
    profileImage: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        profileImage: URL.createObjectURL(file),
      });
    }
  };

  // validation function
  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
      if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
      if (!formData.dob) newErrors.dob = "Date of Birth is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
    }

    if (step === 2) {
      if (!formData.email.trim()) newErrors.email = "Email is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone is required";
      if (!formData.address.trim()) newErrors.address = "Address is required";
      if (!formData.country.trim()) newErrors.country = "Country is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.zip.trim()) newErrors.zip = "Zip Code is required";
    }

    if (step === 3) {
      if (!formData.username.trim()) newErrors.username = "Username is required";
      if (!formData.password) newErrors.password = "Password is required";
      if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm Password is required";

      if (
        formData.password &&
        formData.confirmPassword &&
        formData.password !== formData.confirmPassword
      ) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    if (validateStep()) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return <Submit />;
  }

  return (
    <div className="main-wrapper">
      <div className="form-container">
        <h1 className="form-heading">Create Your Profile</h1>

        {/* STEP WIZARD */}
        <div className="stepper">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="step-wrapper">
              <div className={`step-circle ${step >= item ? "active" : ""}`}>{item}</div>
              {item !== 4 && <div className={`step-line ${step > item ? "active-line" : ""}`}></div>}
            </div>
          ))}
        </div>

        {/* FORM STEPS */}
        {step === 1 && <Step1 formData={formData} handleChange={handleChange} errors={errors} />}
        {step === 2 && <Step2 formData={formData} handleChange={handleChange} errors={errors} />}
        {step === 3 && (
          <Step3
            formData={formData}
            handleChange={handleChange}
            handleImageChange={handleImageChange}
            errors={errors}
          />
        )}
        {step === 4 && <Review formData={formData} />}

        {/* BUTTONS */}
        <div className="button-area">
          {step > 1 && (
            <button className="btn prev-btn" onClick={prevStep}>
              Previous
            </button>
          )}

          {step < 4 && (
            <button className="btn next-btn" onClick={nextStep}>
              Next
            </button>
          )}

          {step === 4 && (
            <button className="btn submit-btn" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
