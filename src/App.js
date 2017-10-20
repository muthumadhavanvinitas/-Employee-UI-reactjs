import React, { Component } from 'react';
import { Sidebar,Radio,Dropdown,Segment,Checkbox,Table,Button,Message, Menu,List,Image, Icon, Header, Input,Dimmer,Grid,Form,Select,TextArea,Loader,Popup } from 'semantic-ui-react';
import { Link } from 'react-router'
import fire from './fire';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]
const opt = [
  { key: 'c', text: 'Net-Banking', value: 'net'},
  { key: 'A',text: 'Manual', value: 'man'},
]
const optio = [
  { key: 'ac', text: 'Accounts', value: 'account'},
  { key: 'it',text: 'Information Technology', value: 'info tech'},
  { key: 'cc',text: 'Manual', value: 'construc'},
]

class App extends Component {
  constructor(props) {
   super(props)
      
      this.state={

        key: '',
        active: false,
        empid: '',
        fname: '',
        lname: '',
        male: '',
        DOB: '',
        email: '',
        addre: '',
        phone: '',
        pan: '',
        city: '',
        coun: '',
        pin: '',
        week: '',
        father: '',
        anniv: '',
        emer: '',
        jbtype: '',
        dept: '',
        spouse_name: '',
        Mother_Name:'',
        search:''
        
        

      };
     this.state={mess: []};
     this.handleSub=this.handleSub.bind(this);
  }


   
state = { visible: false }
state = {active: false}
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
   radiotogg = () => this.setState({active: !this.state.active})
  handleclear()
  {
    this.setState({
    empid:'',
    active:false,
    fname:'',
    lname:'',
    male:'',
    DOB:'',
    email:'',
    addre:'',
    phone:'',
    pan:'',
    city: '',
    coun: '',
    pin: '',
    week: '',
    father: '',
    anniv:'',
    emer:'',
    jbtype: '',
    dept: '',
    spouse_name: '',
    Mother_Name:''


  });
  }
 
 handleUp(ky)
 {
  var firebaseRef=fire.database('https://service-88a00.firebaseio.com/').ref('/messages/details/'+ky);
   firebaseRef.on('value', snapshot => {
    var empid = snapshot.child("empid").val();
    var fname = snapshot.child("fname").val();
    var active = snapshot.child("active").val();
    var lname = snapshot.child("lname").val();
    var male = snapshot.child("male").val();
    var DOB = snapshot.child("DOB").val();
    var email = snapshot.child("email").val();
    var addre = snapshot.child("addre").val();
    var phone = snapshot.child("phone").val();
    var pan = snapshot.child("pan").val();
    var city = snapshot.child("city").val();
    var coun = snapshot.child("coun").val();
    var pin = snapshot.child("pin").val();
    var week = snapshot.child("week").val();
    var father = snapshot.child("father").val();
    var anniv = snapshot.child("anniv").val();
    var emer = snapshot.child("emer").val();
    var jbtype = snapshot.child("jbtype").val();
    var dept = snapshot.child("dept").val();
    var spouse_name = snapshot.child("Spouse_name").val();
    var Mother_Name = snapshot.child("Mother_Name").val();
 
    this.setState({
      key: ky,
      empid: empid,
       active:active,
      fname: fname,
      lname: lname,
      male: male,
      DOB: DOB,
      email: email,
      addre: addre,
      phone: phone,
      pan: pan,
      city: city,
      coun: coun,
      pin: pin,
      week: week,
      father: father,
      anniv: anniv,
      emer: emer,
      jbtype: jbtype ,
      dept: dept,
      spouse_name: spouse_name,
      Mother_Name: Mother_Name

    });
  })
 }
 handleFname(arg,event){console.log(arg); 

  this.setState({[arg]: event.target.value});
 }
 handleSearch(eve){
  this.setState({search:eve.target.value});

   var search = this.state.search
   var escp = search+'\uf8ff';
  var firebaseRef=fire.database('https://service-88a00.firebaseio.com/').ref('/messages/details/');
 if(search=this.state.search)
 {
    this.setState({mess: []});

  

  
  firebaseRef.orderByChild('fname').startAt(search).endAt(escp).on('value', snapshot => {console.log(snapshot.val());
    this.setState({search:''});
    var emp = snapshot.val();
     for(var key in emp)
     {
      const message = {
        k:key,
        ke:key,
        empid:emp[key].empid,
        fname:emp[key].fname,
        active:emp[key].active,
        lname:emp[key].lname,
        male:emp[key].male,
        DOB:emp[key].DOB,
        email:emp[key].email,
        addre:emp[key].addre,
        phone:emp[key].phone,
        pan:emp[key].pan,
        city:emp[key].city,
        coun:emp[key].coun,
        pin:emp[key].pin,
        week:emp[key].week,
        father:emp[key].father,
        anniv:emp[key].anniv,
        emer:emp[key].emer,
        jbtype:emp[key].jbtype,
        dept:emp[key].dept,
        spouse_name:emp[key].spouse_name,
        Mother_Name:emp[key].Mother_Name
      };
      var sr = [];
      sr.push(message);
      this.setState({ mess: sr.concat(this.state.mess)});
      
    }
  
 })

}
else if(search="")
{
  this.setState(this.state.message);
}

}
 handleUpdate()
 {
  var firebaseRef=fire.database('https://service-88a00.firebaseio.com/').ref('/messages/details/'+this.state.key);console.log(this.state.key);
  firebaseRef.set({empid: this.state.empid,active:this.state.active,fname: this.state.fname,spouse_name:this.state.spouse_name,Mother_Name: this.state.Mother_Name,addre: this.state.addre,pan: this.state.pan,anniv: this.state.anniv,emer: this.state.emer, father: this.state.father,lname: this.state.lname, week: this.state.week, DOB: this.state.DOB, active: this.state.active, email: this.state.email,phone: this.state.phone,city: this.state.city,coun: this.state.coun, pin: this.state.pin,jbtype: this.state.jbtype,dept: this.state.dept }); 
  alert('Updated:  Please Refresh the Page');
  this.setState({
    empid:'',
    fname:'',
    active:false,
    lname:'',
    DOB:'',
    email:'',
    pan: '',
    addre:'',
    phone: '',
    city: '',
    coun: '',
    pin: '',
    week: '',
    father:'',
    anniv:'',
    emer:'',
    jbtype: '',
     dept: '',
     spouse_name: '',
     Mother_Name:''

  });
 }

Delete()
 {
  var firebaseRef=fire.database('https://service-88a00.firebaseio.com/').ref('/messages/details/'+this.state.key);console.log(this.state.key);
  firebaseRef.set({empid: null,active: null,week: null,Spouse_name:null,Mother_Name:null,fname: null, lname: null, DOB: null, email: null,father: null, anniv: null,emer: null,addre: null, phone: null, pan: null,city: null,coun: null,pin: null,jbtype: null,dept: null}); 
  
  alert('Deleted: Please Refresh the Page');
  this.setState({
     empid:'',
    fname:'',
    active:false,
    lname:'',
    DOB:'',
    email:'',
    addre:'',
    phone:'',
    pan: '',
    city: '',
    coun: '',
    pin: '',
    week: '',
    father: '',
    anniv: '',
    emer: '',
    jbtype: '',
     dept: '',
     spouse_name:'',
     Mother_Name:''

  });

 }

 handleSub(event) {
  event.preventDefault();
   var firebaseRef=fire.database('https://service-88a00.firebaseio.com/').ref('/messages/details/');
  firebaseRef.push().set({empid:this.state.empid,spouse_name: this.state.spouse_name,Mother_Name:this.state.Mother_Name,fname: this.state.fname, active: this.state.active, lname: this.state.lname,anniv: this.state.anniv,emer: this.state.emer,father: this.state.father,week: this.state.week, city: this.state.city, DOB: this.state.DOB, email: this.state.email, addre: this.state.addre, phone: this.state.phone, pan: this.state.pan,coun: this.state.coun,pin: this.state.pin,dept: this.state.dept,jbtype: this.state.jbtype});
  alert('Your details has been Submitted');
  this.setState({
    empid:'',
    fname:'',
    lname:'',
    active:false,
    
    DOB:'',
    email:'',
    addre: '',
    phone:'',
    pan: '',
    city: '',
    coun: '',
    pin: '',
    week: '',
    father:'',
    emer: '',
    anniv:'',
    jbtype:'',
    dept:'',
    spouse_name:'',
    Mother_Name:''
  });
}



handleItemClick()
{
  alert('Already You are in the home page');

}

componentDidMount(){

   var firebaseRef=fire.database('https://service-88a00.firebaseio.com/').ref('/messages/details/').limitToLast(2);
    firebaseRef.on('value', snapshot => {
      var emp = snapshot.val();
     for(var key in emp)
     {
      const message = {
        k:key,
        ke:key,
        empid:emp[key].empid,
        fname:emp[key].fname,
        active:emp[key].active,
        lname:emp[key].lname,
        male:emp[key].male,
        DOB:emp[key].DOB,
        email:emp[key].email,
        addre:emp[key].addre,
        phone:emp[key].phone,
        pan:emp[key].pan,
        city:emp[key].city,
        coun:emp[key].coun,
        pin:emp[key].pin,
        week:emp[key].week,
        father:emp[key].father,
        anniv:emp[key].anniv,
        emer:emp[key].emer,
        jbtype:emp[key].jbtype,
        dept:emp[key].dept,
        spouse_name:emp[key].spouse_name,
        Mother_Name:emp[key].Mother_Name
      };
      var sr = [];
      sr.push(message);
      this.setState({ mess: sr.concat(this.state.mess)});
      this.setState({active:false});
    }
 });
}

render() {
   const { visible } = this.state
  const { value } = this.state
   const { active } = this.state;
   
  return (
    <div> 
      <Form>
        <Grid celled='internally'>
         <Grid.Row>
          <Grid.Column width={4}>
            <pre><Icon  name='list layout'  size='big' onClick={this.toggleVisibility}>Employees</Icon>                         <Popup
                    trigger={ <Icon name='add user' color='blue' size='big' onClick={this.handleclear.bind(this)}/> }
                    content='Click here and Fill The Form'
                     on='hover'/> </pre>
             <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted width='thin' onClick={this.toggleVisibility}>
             <Menu.Item name='Home' active={this.state.activeItem === 'Home'}  onClick={this.handleItemClick.bind(this,'Home')}>
               Home
             </Menu.Item>
             <Menu.Item>
               <Link to='/login'>Employee Login</Link>
             </Menu.Item>
             </Sidebar>
             <Sidebar.Pusher>
             </Sidebar.Pusher>
              </Grid.Column>
               <Grid.Column width={10}>
                <h3>Employee Info</h3>
                </Grid.Column>

            <Grid.Column width={2}>
              <pre>    <Dropdown icon='ellipsis vertical'  color='blue' size='large' >
                     <Dropdown.Menu>
                       <div align="center"><Dropdown.Item> 
                       <Button.Group basic vertical>
                         <Button><h5><Link to='/login'>Login</Link></h5></Button>
                        <Button  onClick={this.Delete.bind(this)}>Delete</Button>
                        </Button.Group>
                        </Dropdown.Item></div>
                       </Dropdown.Menu></Dropdown></pre>
            </Grid.Column>
            </Grid.Row>
               
              <Grid.Row>
          <Grid.Column width={4}>
           
                   <input type='search' placeholder='Search' ref='search'  onChange={this.handleSearch.bind(this)} />
                   
               
            {
              this.state.mess.map( message => <a href='#' onClick={this.handleUp.bind(this,message.k)}> <List animated celled size='medium'> <List.Item>
              <List.Icon name='user circle outline' size='large' verticalAlign='middle' /> <List.Content>
        <List.Header as='a'>{message.fname}{message.lname}</List.Header>  <List.Description as='a'>{message.email}</List.Description><List.Description as='a'>{message.city},{message.coun}</List.Description> </List.Content></List.Item></List></a>)
             
             }
           
            
          </Grid.Column>
                

                <Grid.Column width={5}>

                  <input type='hidden' placeholder='First name' visible={visible} ref='key' value={this.state.key} onChange={this.handleFname.bind(this,'key')} />
                <b>Employee Id</b><input type='text' ref='empid' placeholder='Employee Id' value={this.state.empid} onChange={this.handleFname.bind(this,'empid')} />
                <b>First Name</b><input type='text' ref='fname' placeholder='First name' value={this.state.fname} onChange={this.handleFname.bind(this,'fname')} />  
                <b>Email</b><input type='text' ref='email' placeholder='Email' value={this.state.email} onChange={this.handleFname.bind(this,'email')} />
                <b>SSN/PAN/ID</b><input type='text' placeholder='SSN/PAN/ID' ref='pan' value={this.state.pan} onChange={this.handleFname.bind(this,'pan')} />
                <b>Address</b><input type='text' ref='addre' placeholder='Enter your complete Address' value={this.state.addre} onChange={this.handleFname.bind(this,'addre')} />
                 <b>Country</b><input type='text'  placeholder='Country' ref='coun' value={this.state.coun} onChange={this.handleFname.bind(this,'coun')}/>
                 <b>Anniversary</b><input type='text'  placeholder='Anniversary' ref='anniv' value={this.state.anniv} onChange={this.handleFname.bind(this,'anniv')} />
                 <b>Father Name</b><input type='text'  placeholder='Father Name' ref='father' value={this.state.father} onChange={this.handleFname.bind(this,'father')}/>
                 <b>Emergency Contact phone</b><input type='text'  placeholder='Emergency  Contact number' ref='emer' value={this.state.emer} onChange={this.handleFname.bind(this,'emer')}/>
                 <b>Job Type</b><input type='text'  placeholder='Job type' ref='jbtype' value={this.state.jbtype} onChange={this.handleFname.bind(this,'jbtype')}/>
                 <b>Department</b><input type='text'  placeholder='department' ref='dept' value={this.state.dept} onChange={this.handleFname.bind(this,'dept')}/>
                  </Grid.Column>
            
            
                 
               <Grid.Column width={5}>
                 <b>Gender</b><select ><option>Male</option><option value='Female'>Female</option>value={this.state.male} ref='male'</select>
                 <b>Last Name</b><input type='text' ref='lname' placeholder='Last name' value={this.state.lname} onChange={this.handleFname.bind(this,'lname')}/>
                 <b>Date Of Birth</b><input type='text' ref='DOB' placeholder='Date of Birth' value={this.state.DOB} onChange={this.handleFname.bind(this,'DOB')}/>
                 <b>Mobile</b><input type='text' ref='phone' placeholder='Mobile' value={this.state.phone} onChange={this.handleFname.bind(this,'phone')} />
                 <b>City</b><input type='text'  placeholder='City' ref='city' value={this.state.city} onChange={this.handleFname.bind(this,'city')}/>
                 <b>Pin Code</b><input type='text'  placeholder='Pin code' ref='pin' value={this.state.pin} onChange={this.handleFname.bind(this,'pin')}/>
                 <b>Spouse Name</b><input type='text'  placeholder='Spouse Name' ref='spouse_name' value={this.state.spouse_name} onChange={this.handleFname.bind(this,'spouse_name')}/>                
                 <b>Mother Name</b><input type='text'  placeholder='Mother Name' ref='Mother_Name' value={this.state.Mother_Name} onChange={this.handleFname.bind(this,'Mother_Name')}/>
                 <b>Date of Hire</b><input type='date'  placeholder='Date of Hire'/>
                 <b>Week Off</b><input type='text'  placeholder='Ex:Monday-friday' ref='week' value={this.state.week} onChange={this.handleFname.bind(this,'week')} />
                 <b>Repoting No</b><input type='text'  placeholder='Reporting number'/>
               </Grid.Column> 
            
            <Grid.Column width={1}>
               <List celled>
              <Button.Group  vertical>
                <List.Item><Button onClick={this.handleItemClick}><h5>Service Restrictions</h5></Button></List.Item>
                <Button onClick={this.handleClear}><h5>Payroll settings </h5> </Button>
                <Button onClick={this.handleClear}><h5>product Restrictions </h5></Button>
               
                <Button onClick={this.handleUpdate.bind(this)}> Update</Button>
                <Button color='green' onClick={this.handleSub}>Save</Button>
             </Button.Group>
              </List> 
              <pre><center><Icon name= 'user circle outline' size='huge' color='red'></Icon></center></pre>
                <List><pre><List.Header>{this.state.fname}{this.state.lname}</List.Header>

                   <List.Description>
                                {this.state.phone}
                   </List.Description>
                   <List.Description>
                                Week-Off 
                   </List.Description>
                      <List.Description>
                                {this.state.week} 
                   </List.Description>
                   </pre>
                   </List>
               
                     <pre><b>Active</b><Checkbox
                      checked={active} visible={this.state.active} onClick={this.radiotogg}
                      toggle />
                         </pre>
                   <List bulleted horizontal></List>
                  </Grid.Column>
                  </Grid.Row>
                </Grid>

                </Form>
    
               </div>
  )
}
}
export default App;


