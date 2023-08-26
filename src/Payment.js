function Payment(props) {
  return(
    <li>
      <p>{props.loanId}</p>
      <p>{props.interest}</p>
      <p>{props.Nfees}</p>
      <p>{props.loanAmount}</p>
      <p>{props.clientId}</p>
      <p>{props.lenderId}</p>
    </li>
  );
}

export { Payment };
