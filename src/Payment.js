import "./Payment.css";
function Payment(props) {
  // var counter = props.paymentCounter;
  // props.setPaymentCounter(counter++)
  return(
    <tr onClick={()=>{
      console.log("le diste click al Loan "+ props.loanId);
    }}>
      <td>
        <p>{props.loanId}</p>
      </td>
      <td>
        <p>{props.interest}</p>
      </td>
      <td>
        <p>{props.Nfees}</p>
      </td>
      <td>
        <p>{props.loanAmount}</p>
      </td>
      <td>
        <p>{props.clientId}</p>
      </td>
      <td>
        <p>{props.lenderId}</p>
      </td>
      <td>
        <p>{props.client}</p>
      </td>
      <td>
        <p>{props.lastPaid}</p>
      </td>
    </tr>
  );
}

export { Payment };
