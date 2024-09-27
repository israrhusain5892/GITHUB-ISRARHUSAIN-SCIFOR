var typed = new Typed('.dev-text', {
    strings: ['full stack Web Developer','Mern Stack Developer'],
    typeSpeed: 100,
    backSpace:100,
    backDelay:1000,
    loop:true
  });


  var buttons=document.querySelectorAll('header nav ul li a');
  console.log(buttons)

  buttons.forEach(button=>{
     button.addEventListener('click',(e)=>{

      if(e.target.class="skill"){
         setTimeout(() => {  location.reload(); }, 500);
        
      }
      else if(e.target.class="about"){
        // console.log(e.target.class)
        location.reload();
        // setTimeout(() => {   }, 0);
     }
     else if(e.target.class="service"){
      location.reload();
      // setTimeout(() => {   }, 0);
   }
   else{
      // 
      location.reload();
   }
  



      
        
        
     })
  })



  const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('header nav ul');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});