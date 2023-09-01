import React from "react";
import "./PaymentCounter.css";

function PaymentCounter({loansPaid, setLoansPaid, payments, setPayments}) {
  return(
    <h1>
      Han cobrado {loansPaid} de {payments.length} pagos pendientes por cobrar
    </h1>
  );
}

export { PaymentCounter };
