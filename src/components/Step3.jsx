import React from "react";

const Step3 = ({ formData, handleChange, handleImageChange, errors }) => {
  return (
    <div className="form-section">
      <h3 className="section-title">Account Setup</h3>

      {/* Username */}
      <div className="input-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={`form-control ${errors.username ? "is-invalid" : ""}`}
          placeholder="Enter your username"
        />
        {errors.username && <div className="invalid-feedback">{errors.username}</div>}
      </div>

      {/* Password */}
      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          placeholder="Enter your password"
        />
        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
      </div>

      {/* Confirm Password */}
      <div className="input-group">
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
      </div>

      {/* Profile Picture */}
      <div className="input-group">
        <label>Profile Picture</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="form-control"
        />
      </div>

      {/* Preview */}
      {formData.profileImage && (
        <div className="mb-3 text-center">
          <img
            src={formData.profileImage}
            alt="Preview"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "50%",
              border: "2px solid #4CAF50",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Step3;
