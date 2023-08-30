function LastPay({lastPay, payments, setPayments, loanId, hoy}) {
  return(
    <p onClick={()=>{
      console.log("le diste click al Loan "+ loanId);
      const index = payments.findIndex((payment)=>payment.loanId === loanId);
      var counter = payments;
      counter[index].lastPaid=hoy;
      setPayments(counter);
      console.log(payments);
    }}>{lastPay}</p>
  );
}

export { LastPay };
