class ClientsService{
  constructor(){
    this.clients = [];
    this.generate();
  }
  generate(){
    this.clients = [
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
      {clientId:17,name:"David Davalos",cc:"1723456789",cellphone:"3124567817",address:"Calle 1 #01-17"}]
  }
  create(){

  }
  find(){
    return(this.clients);
  }
  findOne(clientId){
    return(this.clients.find(client=>
      client.clientId == clientId
    ));
  }
}

module.exports = ClientsService;
