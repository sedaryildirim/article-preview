let userInfo = document.getElementById('one');
let shareInfo = document.getElementById('two');
let shareIcon = document.getElementById('three');
let shareIconTwo = document.getElementById('four');

shareIcon.addEventListener('click', function(){
   userInfo = document.getElementById('one').style.display = "none";
   shareInfo = document.getElementById('two').style.display = "flex";
   shareIcon = document.getElementById('three').style.display = "none";
});

shareIconTwo.addEventListener('click', function(){
   userInfo = document.getElementById('one').style.display = "flex";
   shareInfo = document.getElementById('two').style.display = "none";
   shareIcon = document.getElementById('three').style.display = "";
});


