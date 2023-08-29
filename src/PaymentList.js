function PaymentList(props) {
  return(
    <table>
      <tbody>
        <tr>
          <th>
            Loan ID
          </th>
          <th>
            Interest
          </th>
          <th>
            N° fees
          </th>
          <th>
            Loan Amount
          </th>
          <th>
            Client ID
          </th>
          <th>
            Lender ID
          </th>
          <th>
            Client Name
          </th>
          <th>
            Last pay
          </th>
        </tr>
        {props.children}
      </tbody>


    </table>
  );
}

export { PaymentList };
