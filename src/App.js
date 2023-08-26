import { PaymentCounter } from './PaymentCounter';
import { PaymentSearch } from './PaymentSearch';
import { PaymentList } from './PaymentList';
import { Payment } from './Payment';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';
import { Login } from './Login';


const clients = [
  {clientId:1,name:"Catalina Meneses",cc:"123456789",cellphone:"3124567801",address:"Calle 1 #01-01"},
  {clientId:2,name:"Lina Areiza",cc:"223456789",cellphone:"3124567802",address:"Calle 1 #01-02"},
  {clientId:3,name:"Sandra Rico",cc:"323456789",cellphone:"3124567803",address:"Calle 1 #01-03"},
  {clientId:4,name:"Vanessa Isaza",cc:"423456789",cellphone:"3124567804",address:"Calle 1 #01-04"},
  {clientId:5,name:"Ana Conrado",cc:"523456789",cellphone:"3124567805",address:"Calle 1 #01-05"},
  {clientId:6,name:"Blanca Aristizabal",cc:"623456789",cellphone:"3124567806",address:"Calle 1 #01-06"},
  {clientId:7,name:"Camila Toro",cc:"723456789",cellphone:"3124567807",address:"Calle 1 #01-07"},
  {clientId:8,name:"Daniela Alcocer",cc:"823456789",cellphone:"3124567808",address:"Calle 1 #01-08"},
  {clientId:9,name:"Elizabeth Nadal",cc:"923456789",cellphone:"3124567809",address:"Calle 1 #01-09"},
  {clientId:10,name:"Flor Benitez",cc:"1023456789",cellphone:"3124567810",address:"Calle 1 #01-10"},
  {clientId:11,name:"Gisela Ortiz",cc:"1123456789",cellphone:"3124567811",address:"Calle 1 #01-11"},
  {clientId:12,name:"Harriet Bravo",cc:"1223456789",cellphone:"3124567812",address:"Calle 1 #01-12"},
  {clientId:13,name:"Isabel Ossa",cc:"1323456789",cellphone:"3124567813",address:"Calle 1 #01-13"},
  {clientId:14,name:"Abel Areiza",cc:"1423456789",cellphone:"3124567814",address:"Calle 1 #01-14"},
  {clientId:15,name:"Brahyan Bonilla",cc:"1523456789",cellphone:"3124567815",address:"Calle 1 #01-15"},
  {clientId:16,name:"Cesar Casas",cc:"1623456789",cellphone:"3124567816",address:"Calle 1 #01-16"},
  {clientId:17,name:"David Davalos",cc:"1723456789",cellphone:"3124567817",address:"Calle 1 #01-17"}
]
const lenders = [
  {lenderId:1,lenderUser:"aaaaaa1111",lenderEmail:"casadeprestamo1@admin.com",lenderName:"Guillermo Quiceno", cc:"1234567890",address:"Calle 2 #01-01",permisions:"111111",cellphone:"3134567892"},
  {lenderId:2,lenderUser:"bbbbbb1111",lenderEmail:"casadeprestamo2@admin.com",lenderName:"Patricio Duque", cc:"2234567890",address:"Calle 2 #01-02",permisions:"111111",cellphone:"3134567893"},
  {lenderId:3,lenderUser:"cccccc1111",lenderEmail:"casadeprestamo3@admin.com",lenderName:"Adrian Ocoro", cc:"3234567890",address:"Calle 2 #01-03",permisions:"111111",cellphone:"3134567894"}
]
const Loans = [
  {loanId:1,interest:20,Nfees:24,loanAmount:1000000,clientId:1,lenderId:1},
  {loanId:2,interest:20,Nfees:24,loanAmount:1000000,clientId:2,lenderId:2},
  {loanId:3,interest:20,Nfees:24,loanAmount:1000000,clientId:3,lenderId:3},
  {loanId:4,interest:20,Nfees:24,loanAmount:1000000,clientId:4,lenderId:1},
  {loanId:5,interest:20,Nfees:24,loanAmount:1000000,clientId:5,lenderId:2},
  {loanId:6,interest:20,Nfees:24,loanAmount:1000000,clientId:6,lenderId:3},
  {loanId:7,interest:20,Nfees:24,loanAmount:1000000,clientId:7,lenderId:1},
  {loanId:8,interest:20,Nfees:24,loanAmount:1000000,clientId:8,lenderId:2},
  {loanId:9,interest:20,Nfees:24,loanAmount:1000000,clientId:9,lenderId:3},
  {loanId:10,interest:20,Nfees:24,loanAmount:1000000,clientId:10,lenderId:1},
  {loanId:11,interest:20,Nfees:24,loanAmount:1000000,clientId:11,lenderId:2},
  {loanId:12,interest:20,Nfees:24,loanAmount:1000000,clientId:12,lenderId:3},
  {loanId:13,interest:20,Nfees:24,loanAmount:1000000,clientId:13,lenderId:1},
  {loanId:14,interest:20,Nfees:24,loanAmount:1000000,clientId:14,lenderId:2},
  {loanId:15,interest:20,Nfees:24,loanAmount:1000000,clientId:15,lenderId:3},
  {loanId:16,interest:20,Nfees:24,loanAmount:1000000,clientId:16,lenderId:1},
  {loanId:17,interest:20,Nfees:24,loanAmount:1000000,clientId:17,lenderId:2},
]
for (let i = 0; i < Loans.length; i++) {
  Loans[i].collectAmount = Loans[0].loanAmount*1.2;
  Loans[i].NPaymentDones = 0;
  Loans[i].collectedAmount = 0;
  Loans[i].lastPaid = "24/08/2023";
}
console.log(Loans);
const Payments = [{}]

function App() {
  return (
    <React.Fragment>
      <Login/>
      <PaymentCounter completed={4} total={5}/>
      <PaymentSearch/>

      <PaymentList>
        {Loans.map(Loan => (
          <Payment key={Loan.loanId}
          loanId={Loan.loanId}
          interest={Loan.interest}
          Nfees={Loan.Nfees}
          loanAmount={Loan.loanAmount}
          clientId={Loan.clientId}
          lenderId={Loan.lenderId}/>
        ))}
      </PaymentList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
