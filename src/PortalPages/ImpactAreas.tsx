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
        The stroke has impacted the left hemisphere of the brain. This has
        affected the patient's ability to:
      </p>
      <ul>
        <li>Understand and use language</li>
        <li>Recognize and identify objects</li>
        <li>Understand and use numbers</li>
        <li>Understand and use symbols</li>
        <li>Understand and use spatial relationships</li>
      </ul>
      <br />
      <p>The following are side effects that the patient may experience:</p>
      <ul>
        <li>Difficulty speaking</li>
        <li>Difficulty understanding speech</li>
        <li>Difficulty reading and writing</li>
        <li>Difficulty recognizing objects</li>
        <li>Difficulty with math</li>
        <li>Difficulty with memory</li>
        <li>Difficulty with problem solving</li>
        <li>Difficulty with attention</li>
        <li>Difficulty with perception</li>
      </ul>
    </div>
  );
};

export default ImpactAreas;
