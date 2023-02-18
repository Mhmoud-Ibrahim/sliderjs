var lightBoxContainer =document.getElementById('lightBoxContainer')
var imgList =Array.from(document.querySelectorAll('.item img'));
var closeBtn = document.getElementById('closeBtn');
var currentSlidIndex;
for(i=0;i<imgList.length;i++){
    imgList[i].addEventListener('click',function(eventInfo){
        lightBoxContainer.style.display = "flex"
       currentSlidIndex = imgList.indexOf(eventInfo.target);
      var imgSrc = eventInfo.target.getAttribute('src') ;
    lightBoxContainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`
    })
}
closeBtn.addEventListener('click',function(){
    lightBoxContainer.style.display= "none"
})
 function slide(step){
    currentSlidIndex = currentSlidIndex+step;
    if(currentSlidIndex == imgList.length){
                currentSlidIndex = 0;
            }
    if(currentSlidIndex < 0){
                currentSlidIndex = imgList.length-1;
            }
    var imgSrc =imgList[currentSlidIndex].getAttribute('src');
    lightBoxContainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`
 }

closeBtn.nextElementSibling.addEventListener('click',function(){ slide(1)})
closeBtn.previousElementSibling.addEventListener('click',function(){ slide(-1)})