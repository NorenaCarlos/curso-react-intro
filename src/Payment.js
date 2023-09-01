import "./Payment.css";
import { LastPay } from "./LastPay";

function Payment({payments, setPayments, client, loanId, loansPaid, setLoansPaid}) {
  var counter = payments;
  var index = counter.findIndex(count => count.loanId === loanId);
  return(
    <tr>
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
        loansPaid={loansPaid}
        setLoansPaid={setLoansPaid}
        payments={payments}
        setPayments={setPayments}
        loanId = {payments[index].loanId}
        />
      </td>
    </tr>
  );
}

export { Payment };
