import "./PaymentCounter.css";
function PaymentCounter(props) {
  return(
    <h1>
      Han cobrado {props.completed} de {props.total} pagos pendientes por cobrar
    </h1>
  );
}

export { PaymentCounter };
