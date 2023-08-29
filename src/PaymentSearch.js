import React from "react";
import "./PaymentSearch.css"

function PaymentSearch({searchValue,setSearchValue}) {

  return(
    <input placeholder="Tarea a nombre de cliente"
    className="paymentSearch"
    value={searchValue}
    onChange={(event)=>{
      setSearchValue(event.target.value);
      //console.log(event.target.value);


    }}
    />
  );
}

export { PaymentSearch };
