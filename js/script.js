let userInfo = document.getElementById('one');
let shareInfo = document.getElementById('two');
let shareIcon = document.getElementById('three');
let shareIconTwo = document.getElementById('four');

shareIcon.addEventListener('click', function(){
   userInfo.style.display = "none";
   shareInfo.style.display = "flex";
   shareIcon.style.display = "none";
});

shareIcon.addEventListener('click', function(){
   if (window.innerWidth > 800){
      shareInfo.style.display = "none"
      userInfo.style.display = "flex"
      shareIcon.style.display = ""
   }

});

shareIconTwo.addEventListener('click', function(){
   userInfo.style.display = "flex";
   shareInfo.style.display = "none";
   shareIcon.style.display = "";
});


