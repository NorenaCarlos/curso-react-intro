import "./Payment.css";
function Payment(props) {
  var counter = props.payments;
  return(
    <tr onClick={()=>{
      console.log("le diste click al Loan "+ props.loanId);
      const index = counter.findIndex((payment)=>payment.loanId==props.loanId)
      counter[index].lastPaid="29/8/2023";
      props.setPayments(counter);
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
