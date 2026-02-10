import React from "react";

const Step1 = ({ formData, handleChange, errors }) => {
  return (
    <div className="form-section">
      <h3 className="section-title">Personal Information</h3>

      {/* First Name */}
      <div className="input-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
          placeholder="Enter your first name"
        />
        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
      </div>

      {/* Last Name */}
      <div className="input-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
          placeholder="Enter your last name"
        />
        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
      </div>

      {/* Date of Birth */}
      <div className="input-group">
        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className={`form-control ${errors.dob ? "is-invalid" : ""}`}
        />
        {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
      </div>

      {/* Gender */}
      <div className="input-group">
        <label>Gender</label>
        <select
          name="gender"
          class="form-control"
          value={formData.gender}
          onChange={handleChange}
          className={`form-control ${errors.gender ? "is-invalid" : ""}`}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
      </div>
    </div>
  );
};

export default Step1;
