window.onload = function(){ 
    document.getElementById("showAll").onclick = function () {
        var radioButtonGroup = document.getElementsByName("exercises");
        var checkedRadio = Array.from(radioButtonGroup).find(
          (radio) => radio.checked
        );
        alert("You have selected : " + checkedRadio.value);
      };
    };
    
