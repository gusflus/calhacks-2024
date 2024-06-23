import React from "react";
import "./ImpactAreas.css";

const ImpactAreas = ({
  setCurrentPage,
}: {
  setCurrentPage: (_: string) => void;
}) => {
  return (
    <div className="impact-areas">
      <h2>Impact Areas</h2>
      <p>This is a more detailed view of the systems impacted by the stroke.</p>
      <div className="images">
        <div className="im-cap">
          <img
            src={require("../assets/mri_stroke_label.png")}
            alt="mri_stroke_label"
          />
          <p>Outlined impacted area of the brain.</p>
        </div>
      </div>
      <p>
        The stroke has impacted the left hemisphere of the brain, which has
        caused a partial loss of motor function in the right side of the body.
        It has also affected the ability to speak and understand language. The
        stroke has also caused some cognitive impairment.
      </p>
    </div>
  );
};

export default ImpactAreas;
