import React from "react";

const Review = ({ formData }) => {
  return (
    <div className="form-section">
      <h2 className="extra">Review Your Details</h2>

      <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
      <p><strong>Date of Birth:</strong> {formData.dob}</p>
      <p><strong>Gender:</strong> {formData.gender}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Address:</strong> {formData.address}</p>
      <p><strong>Country:</strong> {formData.country}</p>
      <p><strong>City:</strong> {formData.city}</p>
      <p><strong>Zip:</strong> {formData.zip}</p>
      <p><strong>Username:</strong> {formData.username}</p>
      
    </div>
  );
};

export default Review;