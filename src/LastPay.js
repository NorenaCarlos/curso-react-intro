import React from "react";
function LastPay({payments, setPayments, loanId}) {
  const index = payments.findIndex((payment)=>payment.loanId === loanId);
  const [lastPay, setLastPay]= React.useState(payments[index].lastPaid)
  var hoy = new Date();
  hoy=hoy.toLocaleDateString();
  var counter = payments;
  return(
    <p onClick={()=>{
      console.log("le diste click al Loan "+ loanId);
      counter[index].lastPaid=hoy;
      setPayments(counter)
      setLastPay(hoy);
    }}>{lastPay}</p>
  );
}

export { LastPay };
