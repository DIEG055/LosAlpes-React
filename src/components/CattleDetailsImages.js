import React from "react";
import "./Styles/cattleDetails.scss";

function CattleDetailsImages(props) {
  return (
    <React.Fragment>
      <div className="cattleImages">
      {props.images.map((item, index) => {
        return (
            <div key={index} class="cattleImage__container">
              <img src={item} alt={index} />
            </div>
        );
      })}
      </div>
    </React.Fragment>
  );
}

export default CattleDetailsImages;
