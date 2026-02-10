import React from "react";

const Step2 = ({ formData, handleChange, errors }) => {
  return (
    <div className="form-section">
      <h3 className="section-title">Contact Information</h3>

      {/* Email */}
      <div className="input-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          placeholder="Enter your email"
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      {/* Phone */}
      <div className="input-group">
        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          placeholder="Enter your phone number"
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>

      {/* Address */}
      <div className="input-group">
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className={`form-control ${errors.address ? "is-invalid" : ""}`}
          placeholder="Enter your address"
        />
        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
      </div>

      {/* Country */}
      <div className="input-group">
        <label>Country</label>
        <select
          name="country"
          class="form-control"
          value={formData.country}
          onChange={handleChange}
          className={`form-control ${errors.country ? "is-invalid" : ""}`}
        >
          <option value="">Select Country</option>
          <option value="Pakistan">Pakistan</option>
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="United Arab Emirates">UAE</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Turkey">Turkey</option>
          <option value="Finland">Finland</option>
          <option value="China">China</option>
          <option value="Japan">Japan</option>
          <option value="Oman">Oman</option>
          <option value="Qatar">Qatar</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Italy">Italy</option>
          <option value="South Korea">South Korea</option>
        </select>
        {errors.country && <div className="invalid-feedback">{errors.country}</div>}
      </div>

      {/* City */}
      <div className="input-group">
        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className={`form-control ${errors.city ? "is-invalid" : ""}`}
          placeholder="Enter your city"
        />
        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
      </div>

      {/* Zip / Postal Code */}
      <div className="input-group">
        <label>Zip / Postal Code</label>
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          className={`form-control ${errors.zip ? "is-invalid" : ""}`}
          placeholder="Enter zip code"
        />
        {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
      </div>
    </div>
  );
};

export default Step2;
