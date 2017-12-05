//Type your code here
var afb = 1;
function onCapture(){
  afb ++;
  var basicProperties = {id: "image"+afb,img: this.view.Camera0b5b12a35786b44.rawbytes, isVisible:true };	
  var layoutProperties = {width: 100, height:20};
  var platformSpecificProperties = {};
  
  var image1 = new kony.ui.Image(basicProperties, layoutProperties, platformSpecificProperties);
  alert("Image visibility is ::"+image1.isVisible);
}