
let imgObject = [
    "kollag1-fotor-20240219165144.png",
    "kollag2-fotor-2024021916521.png",
    "kollag3-fotor-20240219165218.png",
  ];
  
  let mainImg = 0;
  let prevImg = imgObject.length - 1;
  let nextImg = 1;
  
  function loadGallery() {
  
    let mainViewImg = document.getElementById("mainView_img");
    mainViewImg.src = imgObject[mainImg];
  
    let leftView = document.getElementById("leftView");
    leftView.style.background ="url(" + imgObject[prevImg] + ")";
    
    let rightView = document.getElementById("rightView");
    rightView.style.background = "url(" + imgObject[nextImg] + ")";
    
    let linkTag = document.getElementById("linkTag")
    linkTag.href = imgObject[mainImg];
  
  };
  
  function scrollRight() {
    
    prevImg = mainImg;
    mainImg = nextImg;
    if (nextImg >= (imgObject.length -1)) {
      nextImg = 0;
    } else {
      nextImg++;
    }; 
    loadGallery();
  };
  
  function scrollLeft() {
    nextImg = mainImg
    mainImg = prevImg;
     
    if (prevImg === 0) {
      prevImg = imgObject.length - 1;
    } else {
      prevImg--;
    };
    loadGallery();
  };
  
  function autoScroll() {
      interval = setInterval(scrollRight, 3000); // Измените интервал по вашему усмотрению (в данном случае - 3 секунды)
  }
    
  document.getElementById("navRight").addEventListener("click", scrollRight);
  document.getElementById("navLeft").addEventListener("click", scrollLeft);
  document.getElementById("rightView").addEventListener("click", scrollRight);
  document.getElementById("leftView").addEventListener("click", scrollLeft);
  document.addEventListener('keyup',function(e){
      if (e.keyCode === 37) {
      scrollLeft();
    } else if(e.keyCode === 39) {
      scrollRight();
    }
  });
  loadGallery();
  autoScroll();
  
  
  