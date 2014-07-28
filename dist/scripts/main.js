var i = 0;


var image1 = "http://i.imgur.com/e5C0z9Y.jpg";
var image2 = "http://i.imgur.com/Q0DIuhj.jpg";
var image3 = "http://i.imgur.com/BhDC8Zh.jpg";
var image4 = "http://i.imgur.com/uNlFR0v.jpg";

setInterval(function(){
  i+=1
  if(i == 0){
    $('#target').css('background-image','url('+ image1 +')');
  } else if(i == 1){
     $('#target').css('background-image','url('+ image2 +')');
  } else if(i == 2){
     $('#target').css('background-image','url('+ image3 +')');
  } else if(i == 3){
     $('#target').css('background-image','url('+ image4 +')');
  } else{
    i = 0;
  }
},3000);
