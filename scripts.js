const buttonFacebook = document.querySelector('.facebook')
const buttonInstagram = document.querySelector('.instagram')
const buttonTiktok = document.querySelector('.tiktok')
const buttonGmail = document.querySelector('.gmail')
const buttonWhatsapp = document.querySelector('.whatsapp')

buttonFacebook.addEventListener('mouseover', beat1)
buttonInstagram.addEventListener('mouseover', beat2)
buttonTiktok.addEventListener('mouseover', beat3)
buttonGmail.addEventListener('mouseover', beat4)
buttonWhatsapp.addEventListener('mouseover', beat5)

buttonFacebook.addEventListener('mouseout', remove1)
buttonInstagram.addEventListener('mouseout', remove2)
buttonTiktok.addEventListener('mouseout', remove3)
buttonGmail.addEventListener('mouseout', remove4)
buttonWhatsapp.addEventListener('mouseout', remove5)



function beat1(){
    buttonFacebook.classList.add('fa-beat')
 } 

function beat2(){
   buttonInstagram.classList.add('fa-beat')
} 

function beat3(){
    buttonTiktok.classList.add('fa-beat')
 } 

 function beat4(){
    buttonGmail.classList.add('fa-beat')
 } 

 function beat5(){
   buttonWhatsapp.classList.add('fa-beat')
} 


 function remove1(){
    buttonFacebook.classList.remove('fa-beat')
 } 

function remove2(){
   buttonInstagram.classList.remove('fa-beat')
} 

function remove3(){
    buttonTiktok.classList.remove('fa-beat')
 } 

 function remove4(){
    buttonGmail.classList.remove('fa-beat')
 } 


 function remove5(){
   buttonWhatsapp.classList.remove('fa-beat')
} 
