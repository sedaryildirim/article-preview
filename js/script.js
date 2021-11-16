let userInfo = document.getElementById('one');
let shareInfo = document.getElementById('two');

userInfo.addEventListener('click', function(){
   userInfo = document.getElementById('one').style.display = "none";
   shareInfo = document.getElementById('two').style.display = "flex";
});

shareInfo.addEventListener('click', function(){
   userInfo = document.getElementById('one').style.display = "";
   shareInfo = document.getElementById('two').style.display = "none";
});


