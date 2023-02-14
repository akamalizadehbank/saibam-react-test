import React from "react";
import spinnerImg from "../../assets/images/spinner.gif"

const SpinnerComponent=()=>{
    return(
        <div className="d-flex justify-content-center align-items-center background-color: #92a8d1">
             <img src={spinnerImg} alt="spinner"/>
        </div>
    )
}

export default SpinnerComponent