let blue = document.getElementById("blue");
let red = document.getElementById("red");
let pink = document.getElementById("pink");
let orange = document.getElementById("orange");

    blue.addEventListener('click', function () {
        document.getElementById('box').style.backgroundColor = "blue";
    
      red.addEventListener('click', function(){
        document.getElementById('box').style.backgroundColor = "red";
      })

      pink.addEventListener('click', function(){
        document.getElementById('box').style.backgroundColor = "pink";
      })

      orange.addEventListener('click', function(){
        document.getElementById('box').style.backgroundColor = "orange";
      })

    });

