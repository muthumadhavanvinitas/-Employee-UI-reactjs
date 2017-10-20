import firebase from 'firebase'
 var config = {
    apiKey: "AIzaSyDmc-2hvs6Y7-H-L6Cmpb3N4zzO1F_Q_BI",
    authDomain: "service-88a00.firebaseapp.com",
    databaseURL: "https://service-88a00.firebaseio.com",
    projectId: "service-88a00",
    storageBucket: "",
    messagingSenderId: "147273489577"
  };
  var fire = firebase.initializeApp(config);
export default fire;

/*for(var date in emp)
  {
  let dob = {
    
    
  };
  var dr = [];
  dr.push(dob);
  this.setState({ mess: dr.concat(this.state.mess)});console.log(this.state.mess);
}*/

 /*firebaseRef.orderByKey().on("child_added",snap=>{
           
            this.setState({
             fname: snap.child("fname").val(),
             lname: snap.child("lname").val(),
             DOB:snap.child("DOB").val(),
            email:snap.child("email").val()
              });*/
          
           /*<Table.Cell><ul>
        {
           this.state.mess.map( message => <li key={message.dobs}></li> )
        } 
        </ul></Table.Cell>*/

        /*handleRemove()
{
  var firebaseRef=fire.database('https://mydb-de288.firebaseio.com/').ref('/messages/details/');
   firebaseRef.on('value', snapshot => {
    var fnr = snapshot.child("fname").val();
    var lnr = snapshot.child("lname").val();
    this.setState({
      fname:fnr,
      lname:lnr
    });
})*/