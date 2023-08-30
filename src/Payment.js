import "./Payment.css";
import { LastPay } from "./LastPay";
var hoy = new Date();
hoy=hoy.toLocaleDateString();
function Payment({payments, setPayments, client, loanId}) {
  var counter = payments;
  var index = counter.findIndex(count => count.loanId === loanId);

  return(
    <tr /*onClick={()=>{
      console.log("le diste click al Loan "+ loanId);
      const index = counter.findIndex((payment)=>payment.loanId === loanId);
      counter[index].lastPaid=hoy;
      setPayments(counter);
      console.log(payments);
    }}*/>
      <td>
        <p>{payments[index].loanId}</p>
      </td>
      <td>
        <p>{payments[index].interest}</p>
      </td>
      <td>
        <p>{payments[index].Nfees}</p>
      </td>
      <td>
        <p>{payments[index].loanAmount}</p>
      </td>
      <td>
        <p>{payments[index].clientId}</p>
      </td>
      <td>
        <p>{payments[index].lenderId}</p>
      </td>
      <td>
        <p>{client.name}</p>
      </td>
      <td>
        <LastPay lastPay={payments[index].lastPaid}
        payments={payments}
        setPayments={setPayments}
        loanId = {payments[index].loanId}
        hoy = {hoy}
        />
      </td>
    </tr>
  );
}

export { Payment };
