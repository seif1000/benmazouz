import '../scss/main.scss';

const toogle = document.querySelector('.toggler');
const navbar = document.querySelector('header');


toogle.addEventListener('click',()=>{
    if(!toogle.classList.contains('change')){
        toogle.classList.add('change');
     }else{
         toogle.classList.remove('change')
     }
     if(!navbar.classList.contains('response')){
        navbar.classList.add('response');
     }else{
         navbar.classList.remove('response')
     }
})

const width = {
    html:90,
    css:80,
    sass:65,
    boots:80,
    js:80,
    react:80,
    firbase:45,
    UI:75,
    git:60,

}
window.onscroll =function(){
    if(window.pageYOffset>=200 ){
        setTimeout(() => {
            widthPercent();
        },800);
       
    }
}
const widthPercent = ()=>{
    for(let lang in width){
        document.querySelector(`.${lang} .inner`).style.width=`${width[lang]}%`;
        document.querySelector(`.${lang} .inner`).innerHTML=`${width[lang]}%`;
    }
}


  
  var config = {
    apiKey: "AIzaSyAdbxi8lgWr_d6V9oQY-zbEyNJFn497XUw",
    authDomain: "portfolio-3163a.firebaseapp.com",
    databaseURL: "https://portfolio-3163a.firebaseio.com",
    projectId: "portfolio-3163a",
    storageBucket: "portfolio-3163a.appspot.com",
    messagingSenderId: "104630881178"
  };
  firebase.initializeApp(config);




let messageRef = firebase.database().ref('messages');
document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
  e.preventDefault();
  const name = getId('name');
  const company = getId('company');
  const email = getId('email');
  const Phone  = getId('Phone');
  const message = getId('message');

 saveMessage(name,company,email,Phone,message);
 document.querySelector('.alert').style.opacity = '1';


 setTimeout(function(){
   document.querySelector('.alert').style.opacity = '0';
 },3000);


 document.getElementById('contactForm').reset();
 
}
function getId(id){
  return document.getElementById(id).value;
}

function saveMessage(name,company,email,Phone,message){

 let NewmessageRef = messageRef.push();
 NewmessageRef.set({
     name:name,
     company:company,
     email:email,
     Phone:Phone,
     message:message
 })

}
