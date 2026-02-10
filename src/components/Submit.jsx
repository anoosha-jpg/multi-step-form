import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const Submit = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="submit-body">
      {showConfetti && <Confetti width={dimensions.width} height={dimensions.height} recycle={false} />}
      <div className="success-container">
        <div className="success-icon">✔️</div>
        <h1 className="success-heading">Your Profile is Ready!</h1>
        <p className="success-text">
         Thank you for creating your profile.
         <br />
         You can now continue and explore more features.
        </p>
        <button className="home-btn" onClick={goHome}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Submit;
