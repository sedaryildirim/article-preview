let userInfo = document.getElementById('one');
let shareInfo = document.getElementById('two');
let shareIcon = document.getElementById('three');
let shareIconTwo = document.getElementById('four');

shareIcon.addEventListener('click', function(){
      shareInfo.style.display = "flex"
      userInfo.style.display = "none"
      shareIcon.style.display = ""
});

shareIcon.addEventListener('click', function(){
   if (window.innerWidth > 800){
      shareInfo.classList.toggle("show")
      userInfo.style.display = "flex"
      shareIcon.style.display = ""
   }
});

shareIconTwo.addEventListener('click', function(){
   userInfo.style.display = "flex";
   shareInfo.style.display = "none";
   shareIcon.style.display = "";
});


