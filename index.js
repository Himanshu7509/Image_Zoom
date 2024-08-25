let ImgSize = document.getElementById("imgSize");
let numSize = document.getElementById("SizeNum");
let Msg = document.getElementById("msg");
let imageSize = 300; 
let size = 5;


function increasePic() {

  if(imageSize < 400 && size < 85){
    imageSize += 5;
    size += 5;
    Msg.textContent = "";
  }
  else{
     Msg.textContent = "Max width reached";
  }
  
  ImgSize.style.width = imageSize + "px";
  numSize.textContent = `| ${imageSize}px |`;
  
}

function decreasePic() {
  if(imageSize >= 200 && size >= -150){
    imageSize -= 5;
    size -= 5;
    Msg.textContent = "";
  }
  else{
    Msg.textContent = "Min width reached";
 }
  ImgSize.style.width = imageSize + "px";
  numSize.textContent = `| ${imageSize}px |`;
}