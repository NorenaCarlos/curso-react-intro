function PaymentList(props) {
  return(
    <table>
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
      </tr>
        {props.children}

    </table>
  );
}

export { PaymentList };
