import React, { useState, useEffect  } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './Grid.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



var flag=0;
var ids="1";
const e = React.createElement;
const cont=document.querySelector('#chatbody');
const sending=document.getElementById('message');
var userString="Shikhar"
var currInput="";



document.getElementById("messagesend").onclick = InputValues;

window.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
      InputValues();
  }
}, false);

class UserMessage extends React.Component{
 render(){
   return e(
     'div',{className:'UserReplies'},userString
   );
 } 
}

// IQ Test

class ThankYouIQ extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Thank you for taking our IQ test '+'\n'+'Your Score is : ')
    );
  }
}

class ThirdQuestion extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Q3. Water is to a pipe as ? is to a wire.'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,ThankYouIQ,'ThankYouIQ')}},'electricity'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,ThankYouIQ,'ThankYouIQ')}},'heat'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,ThankYouIQ,'ThankYouIQ')}},'gas')
    );
  }
}


class SecondQuestion extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Q2. Which answer expresses the meaning opposite of that of the specified word best?'+'\n'+'Tough'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,ThirdQuestion,'SecondQuestion')}},'masculine'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,ThirdQuestion,'SecondQuestion')}},'tender'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,ThirdQuestion,'SecondQuestion')}},'strong')
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
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,SecondQuestion,'SecondQuestion')}},'17'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,SecondQuestion,'SecondQuestion')}},'21'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,SecondQuestion,'SecondQuestion')}},'19')

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
      e('div',{className:'chatting'},'Your Answers have been recorded '+'\n'+'Thank You For Giving The Survey')
    );
  }
}


class Recommendation extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'How likely Are you to recommend this company?'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,ThankYouSurvey,'ThankYouSurvey')}},'Very likely'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,ThankYouSurvey,'ThankYouSurvey')}},'Somewhat likely'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,ThankYouSurvey,'ThankYouSurvey')}},'Not at all likely')
    );
  }
}


class DeliveryQuesion extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      <div id='image'><img src={logo} height={10}/><span>  GridBot</span></div>,
      e('div',{className:'chatting'},'Among these Features which ones do you like ?'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,Recommendation,'Recommendation')}},'Delivery Time'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,Recommendation,'Recommendation')}},'Variety in Products'),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,Recommendation,'Recommendation')}},'Customer Service')
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
      e('button',{className:'bgrp',onClick:function() {AddComponent(ids++,DeliveryQuesion,'DeliveryQuesion')}},'1'),
      e('button',{className:'bgrp',onClick:function() {AddComponent(ids++,DeliveryQuesion,'DeliveryQuesion')}},'2'),
      e('button',{className:'bgrp',onClick:function() {AddComponent(ids++,DeliveryQuesion,'DeliveryQuesion')}},'3'),
      e('button',{className:'bgrp',onClick:function() {AddComponent(ids++,DeliveryQuesion,'DeliveryQuesion')}},'4'),
      e('button',{className:'bgrp',onClick:function() {AddComponent(ids++,DeliveryQuesion,'DeliveryQuesion')}},'5'),
      e('button',{className:'bgrp',onClick:function() {AddComponent(ids++,DeliveryQuesion,'DeliveryQuesion')}},'6'),
      e('button',{className:'bgrp',onClick:function() {AddComponent(ids++,DeliveryQuesion,'DeliveryQuesion')}},'7'),
      e('button',{className:'bgrp',onClick:function() {AddComponent(ids++,DeliveryQuesion,'DeliveryQuesion')}},'8'),
      e('button',{className:'bgrp',onClick:function() {AddComponent(ids++,DeliveryQuesion,'DeliveryQuesion')}},'9'),
      e('button',{className:'bgrp',onClick:function() {AddComponent(ids++,DeliveryQuesion,'DeliveryQuesion')}},'10'))
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
      e('div',{className:'chatting'},'Thank You!! Your Registration is complete')
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

var dae=new Date().toLocaleString();

const Example =() => {
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    dae=startDate.toLocaleString();
  });
  return (
    <DatePicker selected={startDate} onChange={(date) => {setStartDate(date);}}  />
  );
};

class UserDate extends React.Component{
  render(){
    return e(
      'div',{className:'Question'},
      e('div',{className:'youclass'},'You'),
      e('br'),
      e('div',{className:'UserReplies', id:'dd'},dae),
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
      e('div',{id:'Date'},<Example/>),
      e('button',{className:'butt',onClick:function() {AddComponent(++ids,UserDate,'UserDate');
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
      e('div',{className:'chatting'},'Thank You, Now please Enter Your Number ')
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
      e('div',{className:'chatting'},'Hi I am a bot Kindly Select one of the following options : '),
      e('div',{}, 
      e('button',{className:'butt',onClick:function() {sending.placeholder='Enter Name : for eg - Shikhar Saini';AddComponent('0',ApplyCreditCard,'Name')}},'💳 Apply Credit Card'),
      e('button',{className:'butt',onClick:function() {AddComponent('0',StartSurvey,'Name')}},'📝 Customer Survey'),
      e('button',{className:'butt',onClick:function() {AddComponent('0',StarterIQtest,'Name')}},'🧠 IQ Test'),
      )
    );
  }
}


ReactDOM.render(e(ZerothQuestion),cont);

function AddComponent(x,y,z){
  var a=document.getElementById("chatbody");
  var b=document.createElement("div");
  let align=document.createAttribute("id");
  align.value="new"+x;
  currInput=z;
  let place="#new"+x;
  b.setAttributeNode(align);
  a.appendChild(document.createElement("br"));
  a.appendChild(document.createElement("br"));
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
      ReactDOM.render(e(UserMessage),document.querySelector("#userreply"+ids));
      ids++;
      inputbar.value="";
      flag=0;
      if(currInput=="Name")
      {sending.placeholder='Enter Number : for eg - 987*******';AddComponent(ids,Number,'Number');}
      else if(currInput=="Number")
      {sending.placeholder='Enter DOB : for eg - DD/MM/YYYY';AddComponent(ids,DOB,'DOB');}
      else if(currInput=="DOB")
      {sending.placeholder='Enter Pancard Number : for eg - 102083055';AddComponent(ids,PanCard,'PanCard');}
      else if(currInput=="PanCard")
      {sending.placeholder=' ';AddComponent(ids,ThankYou,'ThankYou');}
      cont.scrollTop = cont.scrollHeight;
    }
  }
}