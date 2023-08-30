import React from "react";
import "./PaymentCounter.css";

function PaymentCounter({payments, setPayments}) {
  var hoy = new Date();
  hoy=hoy.toLocaleDateString();
  const [collected, setCollected] = React.useState(payments.filter((payment)=>payment.lastPaid==hoy).length);
  return(
    <h1>
      Han cobrado {collected} de {payments.length} pagos pendientes por cobrar
    </h1>
  );
}

export { PaymentCounter };
