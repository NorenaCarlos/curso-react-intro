import "./Payment.css";
import { LastPay } from "./LastPay";

function Payment({payments, setPayments, client, loanId}) {
  var counter = payments;
  var index = counter.findIndex(count => count.loanId === loanId);
  var hoy = new Date();
  hoy=hoy.toLocaleDateString();
  return(
    <tr onClick={()=>{
      const index = counter.findIndex((payment)=>payment.loanId === loanId);
      counter[index].lastPaid=hoy;
      setPayments(counter);
    }}>
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
        <LastPay
        payments={payments}
        setPayments={setPayments}
        loanId = {payments[index].loanId}
        />
      </td>
    </tr>
  );
}

export { Payment };
