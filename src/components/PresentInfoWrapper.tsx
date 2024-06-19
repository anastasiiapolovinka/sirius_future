import React, { FC } from "react";
import Button from "./Button";

const PresentInfoWrapper: FC = () => {
   return (
      <div className="present-info-wrapper">
         <div className="present-info-title">Учитесь бесплатно</div>
         <p className="present-info">
            Приводите друзей с детьми заниматься в Sirius Future 
            и получайте подарки!
         </p>
         <Button className="present-info-button txt-small">Узнать</Button>
      </div>
   )
}

export default PresentInfoWrapper;