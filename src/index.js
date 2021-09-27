import React, { useState, useEffect  } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './Grid.png';
import "react-widgets/styles.css";
import axios from "axios";
import Multiselect from "react-widgets/Multiselect";
import DatePicker from "react-widgets/DatePicker";
<DatePicker placeholder="m/dd/yy" />;





//Database Requirements
const credit = {};
const customersurvey = {};
const iqtest = {};
const login={};
const signup={};
var featurestosend={};
var UserId;
//End of Database Requirements




var IQScore=0;
var flag=0;
var ids="1";
var checkres=0;
const e = React.createElement;
const cont=document.querySelector('#chatbody');
const sending=document.getElementById('message');
var userString="Shikhar";
var currInput="";


<DatePicker
    defaultValue={new Date()}
    valueFormat={{ dateStyle: "medium" }}/>


document.getElementById("messagesend").onclick = InputValues;

window.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
      InputValues();
  }
}, false);


function SendToBackend(file,object){
  axios.post("http://localhost:5000/"+file +'/' +UserId, object).then((res) => {
    console.log(res.data);
  });
}

class UserMessage extends React.Component{
 render(){
   return e(
     'div',{className:'UserReplies'},userString
   );
 } 
}

class IQResponse extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      e('div',{className:'youclass'},'You'),
      e('br'),
      e('div',{className:'UserReplies', id:'dd'},userString),
      e('br'),
      e('br')
    );
  }
}
//


// IQ Test

class ThankYouIQ extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Thank you for taking our IQ test '),
      e('div',{className:'chatting'},'Your Score is : '+IQScore+'/3'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,ZerothQuestion,'ZerothQuestion');}},'Return To Menu')
    );
  }
}

class ThirdQuestion extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Q3. Water is to a pipe as ? is to a wire.'),
      e('button',{className:'butt',onClick:function() {iqtest.q3 = "electricity";IQScore++;iqtest.score=IQScore;userString='electricity';AddComponent(++ids,IQResponse,'IQResponse');SendToBackend('iqtest',iqtest);AddComponent(++ids,ThankYouIQ,'ThankYouIQ')}},'electricity'),
      e('button',{className:'butt',onClick:function() {iqtest.q3 = "heat";userString='heat';AddComponent(++ids,IQResponse,'IQResponse');SendToBackend(iqtest);AddComponent(++ids,ThankYouIQ,'ThankYouIQ')}},'heat'),
      e('button',{className:'butt',onClick:function() {iqtest.q3 = "gas";userString='gas';AddComponent(++ids,IQResponse,'IQResponse');SendToBackend(iqtest);AddComponent(++ids,ThankYouIQ,'ThankYouIQ')}},'gas')
    );
  }
}


class SecondQuestion extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Q2. Which answer expresses the meaning opposite of that of the specified word best?'+'\n'+'Tough'),
      e('button',{className:'butt',onClick:function() {iqtest.q2 = "masculine";userString='masculine';AddComponent(++ids,IQResponse,'IQResponse');AddComponent(++ids,ThirdQuestion,'SecondQuestion')}},'masculine'),
      e('button',{className:'butt',onClick:function() {iqtest.q2 = "tender";IQScore++;userString='tender';AddComponent(++ids,IQResponse,'IQResponse');AddComponent(++ids,ThirdQuestion,'SecondQuestion')}},'tender'),
      e('button',{className:'butt',onClick:function() {iqtest.q2 = "strong";userString='strong';AddComponent(++ids,IQResponse,'IQResponse');AddComponent(++ids,ThirdQuestion,'SecondQuestion')}},'strong')
    );
  }
}


class StarterIQtest extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Lets Begin Your IQ test '),
      e('div',{className:'chatting'},'Your First Question is Which number logically follows this series? : 4     6     9     6     14     6      ...'),
      e('button',{className:'butt',onClick:function() {IQScore=0;iqtest.q1 = 17;userString='17';AddComponent(++ids,IQResponse,'IQResponse');AddComponent(++ids,SecondQuestion,'SecondQuestion')}},'17'),
      e('button',{className:'butt',onClick:function() {IQScore=0;iqtest.q1 = 21;userString='21';AddComponent(++ids,IQResponse,'IQResponse');AddComponent(++ids,SecondQuestion,'SecondQuestion')}},'21'),
      e('button',{className:'butt',onClick:function() {IQScore=0;iqtest.q1 = 19;IQScore++;userString='19';AddComponent(++ids,IQResponse,'IQResponse');AddComponent(++ids,SecondQuestion,'SecondQuestion')}},'19')
    );
  }
}
//End of IQ test

// Customer Satisfaction


class ThankYouSurvey extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Your Answers have been recorded '+'\n'+'Thank You For Giving The Survey'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,ZerothQuestion,'ZerothQuestion');}},'Return To Menu')
    );
  }
}




class Recommendation extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'How likely Are you to recommend this company?'),
      e('button',{className:'butt',onClick:function() {customersurvey.recommendation = "Very likely";SendToBackend('survey',customersurvey);AddComponent(++ids,ThankYouSurvey,'ThankYouSurvey')}},'Very likely'),
      e('button',{className:'butt',onClick:function() {customersurvey.recommendation = "Somewhat likely";SendToBackend('survey',customersurvey);AddComponent(++ids,ThankYouSurvey,'ThankYouSurvey')}},'Somewhat likely'),
      e('button',{className:'butt',onClick:function() {customersurvey.recommendation = "Not at all likely";SendToBackend('survey',customersurvey);AddComponent(++ids,ThankYouSurvey,'ThankYouSurvey')}},'Not at all likely')
    );
  }
}


let Features = ['Customer Service', 'Variety in Products', 'Delivery Time', 'Offers'];
function Example() {
  const [value, setValue] = useState([])
  useEffect(() => {
    featurestosend=value;
    //console.log(featurestosend);
  });

  return (
    <Multiselect
      data={Features}
      value={value}
      onChange={value => setValue(value)}
    />
  )
}

class DeliveryQuesion extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Among these Features which ones do you like ?'),
      e('div',{id:'Multi'},<Example/>),
      e('button',{className:'butt',onClick:function() {customersurvey.feature = featurestosend;console.log(customersurvey.feature);AddComponent(++ids,Recommendation,'Recommendation')}},'Confirm Selection')
    );
  }
}


class StartSurvey extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Hello Let us begin with your survey'),
      e('div',{className:'chatting'},'How Would You Rate Your Delivery Experience?'),
      e('div',{className:'butt-grp'},
      e('button',{className:'bgrp',onClick:function() {customersurvey.rating = 1;AddComponent(++ids,DeliveryQuesion,'DeliveryQuesion')}},'1'),
      e('button',{className:'bgrp',onClick:function() {customersurvey.rating = 2;AddComponent(++ids,DeliveryQuesion,'DeliveryQuesion')}},'2'),
      e('button',{className:'bgrp',onClick:function() {customersurvey.rating = 3;AddComponent(++ids,DeliveryQuesion,'DeliveryQuesion')}},'3'),
      e('button',{className:'bgrp',onClick:function() {customersurvey.rating = 4;AddComponent(++ids,DeliveryQuesion,'DeliveryQuesion')}},'4'),
      e('button',{className:'bgrp',onClick:function() {customersurvey.rating = 5;AddComponent(++ids,DeliveryQuesion,'DeliveryQuesion')}},'5'),
      e('button',{className:'bgrp',onClick:function() {customersurvey.rating = 6;AddComponent(++ids,DeliveryQuesion,'DeliveryQuesion')}},'6'),
      e('button',{className:'bgrp',onClick:function() {customersurvey.rating = 7;AddComponent(++ids,DeliveryQuesion,'DeliveryQuesion')}},'7'),
      e('button',{className:'bgrp',onClick:function() {customersurvey.rating = 8;AddComponent(++ids,DeliveryQuesion,'DeliveryQuesion')}},'8'),
      e('button',{className:'bgrp',onClick:function() {customersurvey.rating = 9;AddComponent(++ids,DeliveryQuesion,'DeliveryQuesion')}},'9'),
      e('button',{className:'bgrp',onClick:function() {customersurvey.rating = 10;AddComponent(++ids,DeliveryQuesion,'DeliveryQuesion')}},'10'))
    );
  }
}


// End Of Customer Survey

//Apply For Credit Card

class ThankYou extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Thank You!! Your Registration is complete'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,ZerothQuestion,'ZerothQuestion');}},'Return To Menu')
    ); 
  }
}

class PanCard extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Thanks, Now just enter your Pan Card number')
    );
  }
}

var dae=new Date().toLocaleDateString();

function SelectDate({ initialValue }) {
  const [value, setValue] = useState(initialValue)
  useEffect(() => {
    dae=value.toLocaleDateString();
  });
  return (
    <DatePicker
      dropUp={true}
      value={value}
      onChange={value => setValue(value)}
    />
  )
}

class UserDate extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      e('div',{className:'youclass'},'You'),
      e('br'),
      e('div',{className:'UserReplies', id:'dd'},dae),
      e('br'),
      e('br')
    );
  }
}

class DOB extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Great, Now Please Select Your DOB'),
      e('div',{id:'Date'},<SelectDate initialValue={new Date()} />),
      e('button',{className:'butt',onClick:function() {credit.date = dae;AddComponent(++ids,UserDate,'UserDate');
      sending.placeholder='Enter Pancard Number : for eg - 102083055';AddComponent(++ids,PanCard,'PanCard');}}
      ,'Confirm Date'),
      );
  }
}

class Number extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Thank You '+userString+' , Now please Enter Your Number ')
    );
  }
}


class ApplyCreditCard extends React.Component{
  render(){
    return e(
      'div',{id:'Question2'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Thank You For Applying For Credit Card lets Start your registration '),
      e('div',{className:'chatting'}, 'Kindly Enter Your Name : ')
    );
  }
}

//End Of Credit Card

class ZerothQuestion extends React.Component{
  render(){
    return e(
      'div',{id:'Question1'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Kindly Select one of the following options : '),
      e('div',{}, 
      e('button',{className:'butt',onClick:function() {sending.placeholder='Enter Name : for eg - Shikhar Saini';AddComponent(++ids,ApplyCreditCard,'Name')}},'💳 Apply Credit Card'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,StartSurvey,'Name')}},'📝 Customer Survey'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,StarterIQtest,'Name')}},'🧠 IQ Test'),
      )
    );
  }
}

// Login Starts Here


class WrongPassword extends React.Component{
  render(){
    return e(
      'div',{className:'Questions'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Oops ☹️ You have entered wrong Email or Password'),
      e('div',{className:'chatting'},'Would you like to try again or return to menu'),
      e('button',{className:'butt',onClick:function(){AddComponent(++ids,LoginUsername,'LoginUsername');}},'Try Again'),
      e('button',{className:'butt',onClick:function(){AddComponent(++ids,LoginOrSignUp,'LoginOrSignUp');}},'Menu')
    );
  }
}

class LoginPassword extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Great 👏 Now Please Enter Your Password 🔒')
    )
  }
}

class LoginUsername extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Hi 👋 Nice to Meet you Again Please Enter Your Email ID')
    );
  }
}

class LoginOrSignUp extends React.Component{
  render(){
    return e(
      'div',{className:'Question '},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Hello 😃 My Name is GridBot I am a bot designed For your Service'),
      e('div',{className:'chatting'},'Kindly Select one of the following options : 👇'),
      e('button',{className:'butt',onClick:function(){sending.placeholder='Enter Email ID : ';AddComponent(++ids,LoginUsername,'LoginUsername')}},'Login'),
      e('button',{className:'butt',onClick:function(){AddComponent(++ids,SignUpStart,'SignUpStart')}},'Sign Up')
    );
  }
}

async function checkPassword (){
  console.log(login);
   await axios.post("http://localhost:5000/user/check",login).then(
    (res)=>{
      console.log(res.data.status);
      if(res.data.status)
        {UserId=res.data.data._id;
        AddComponent(ids,LoginComplete,'ZerothQuestion');}
       else
        {AddComponent(ids,WrongPassword,'WrongPassword');}
    }
  )
}

class LoginComplete extends React.Component{
  render(){
    return e(
      'div',{id:'Question1'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Congrats You have sucessfully Logged In 🥳'),
      e('div',{className:'chatting'},'Kindly Select one of the following options : '),
      e('div',{}, 
      e('button',{className:'butt',onClick:function() {sending.placeholder='Enter Name : for eg - Shikhar Saini';AddComponent(++ids,ApplyCreditCard,'Name')}},'💳 Apply Credit Card'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,StartSurvey,'Name')}},'📝 Customer Survey'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,StarterIQtest,'Name')}},'🧠 IQ Test'))
    );
  }
}


// Login Ends Here


// SignUp Starts Here
class SignUpStart  extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Welcome!! 😄 Let Us Begin Your Sign Up '),
      e('div',{className:'chatting'},'Please Enter A Unique Username ')
    );
  }
}

class SignUpPassword extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Great !! 🤗 Now Please Enter a Password ')
    );
  }
}

class SignUpComplete extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Thank You!! Your Sign Up is Complete ✨✨✨'),
      e('div',{className:'chatting'},'Now Choose From the Following Options : 👇'),
      e('div',{}, 
      e('button',{className:'butt',onClick:function() {sending.placeholder='Enter Name : for eg - Shikhar Saini';AddComponent(++ids,ApplyCreditCard,'Name')}},'💳 Apply Credit Card'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,StartSurvey,'Name')}},'📝 Customer Survey'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,StarterIQtest,'Name')}},'🧠 IQ Test'))
    );
  }
}

function SignUpBackend(){
  console.log(signup);
  axios.post("http://localhost:5000/user",signup).then(
    (res)=>{
      UserId= res.data.data._id;
      console.log(UserId);
      console.log(res.data);
    }
  )
}

// SignUp Ends Here


ReactDOM.render(e(LoginOrSignUp),cont);

function AddComponent(x,y,z){
  var a=document.getElementById("chatbody");
  var b=document.createElement("div");
  let align=document.createAttribute("id");
  align.value="new"+x;
  currInput=z;
  let place="#new"+x;
  b.setAttributeNode(align);
  a.appendChild(b);
  ReactDOM.render(e(y),document.querySelector(place));
  flag=1;
  cont.scrollTop = cont.scrollHeight;
}

function InputValues(){
  if(flag==1)
  {
    let inputbar=document.getElementById("message");
    userString=inputbar.value;
    if(userString.length>0)
    {
      let you=document.createElement("div");
      you.innerHTML="You";
      let youclass=document.createAttribute("class");
      youclass.value='youclass';
      you.setAttributeNode(youclass);
      cont.appendChild(you);
      let reply=document.createElement("div");
      cont.appendChild(document.createElement("br"));
      let att=document.createAttribute("id");
      att.value="userreply"+ids;
      reply.setAttributeNode(att);
      cont.appendChild(reply);
      cont.appendChild(document.createElement("br"));
      cont.appendChild(document.createElement("br"));
      ReactDOM.render(e(UserMessage),document.querySelector("#userreply"+ids));
      cont.appendChild(document.createElement("br"));
      ids++;
      inputbar.value="";
      flag=0;
      if(currInput=="Name")
      {credit.name = userString;sending.placeholder='Enter Number : for eg - 987*******';AddComponent(ids,Number,'Number');}
      else if(currInput=="Number")
      {credit.contact = userString;sending.placeholder='Enter DOB : for eg - DD/MM/YYYY';AddComponent(ids,DOB,'DOB');}
      else if(currInput=="PanCard")
      {credit.pancard = userString;sending.placeholder=' ';SendToBackend('credit',credit);AddComponent(ids,ThankYou,'ThankYou');}
      else if(currInput=="LoginUsername")
      {login.email=userString;sending.placeholder='Enter Password : ';AddComponent(ids,LoginPassword,'LoginPassword')}
      else if(currInput=='LoginPassword')
      {login.password=userString;sending.placeholder=' ';checkPassword();}
      else if(currInput=='SignUpStart')
      {signup.email=userString;AddComponent(ids,SignUpPassword,'SignUpPassword');}
      else if(currInput=='SignUpPassword')
      {signup.password=userString;SignUpBackend();AddComponent(ids,SignUpComplete,'SignUpComplete');}
      cont.scrollTop = cont.scrollHeight;
    }
  }
}