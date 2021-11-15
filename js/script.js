let userInfo = document.getElementById('one');
let shareInfo = document.getElementById('two');

userInfo.addEventListener('click', function(){
   shareInfo = document.getElementById('two').style.display = "block";
   userInfo = document.getElementById('one').style.display = "none";

});