import React from "react";


var fecha = new Date();
const añoActual = fecha.getFullYear();
const hoy = fecha.getDate();
const mesActual = fecha.getMonth() + 1;
fecha= `${añoActual}/${mesActual}/${hoy}`;

function collectedLoanToday(payments){
  var hoy = new Date();
  const paid = payments.filter(payment=>new Date(payment.lastPaid).toLocaleDateString()===hoy.toLocaleDateString()).length;
  console.log(paid);
  return paid;
}

function LastPay({payments, setPayments, loanId, loansPaid, setLoansPaid}) {
  const index = payments.findIndex((payment)=>payment.loanId === loanId);
  const [lastPay, setLastPay]= React.useState(payments[index].lastPaid)
  var counter = payments;
  return(
    <p onClick={()=>{
      console.log("le diste click al Loan "+ loanId);
      counter[index].lastPaid=fecha;
      setPayments(counter);
      setLastPay(fecha);
      setLoansPaid(collectedLoanToday(payments));
    }}>{lastPay}</p>
  );
}

export { LastPay };
