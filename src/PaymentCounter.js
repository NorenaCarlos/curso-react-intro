import React from "react";
import "./PaymentCounter.css";

function PaymentCounter({collected, payments, setPayments}) {
  var hoy = new Date();
  hoy=hoy.toLocaleDateString();
  return(
    <h1>
      Han cobrado {collected} de {payments.length} pagos pendientes por cobrar
    </h1>
  );
}

export { PaymentCounter };
