var calculator = (function () {
  var myField = document.getElementById('inpt');

  function print (e) {
    var addInfo = e.target.textContent;
    myField.value += addInfo;
  }
  function captureInput() {
    // var button = document.getElementsByTagName('button');
    // var calcField = document.getElementById('inpt');
    // for(var i=0; i<button.length; i++){
    //   button[i].addEventListener('click', function(e){
    //     var putInfo = e.target.textContent;
    //     if (e == '7') {
    //       calcField.value += putInfo;
    //     } else if (e == 8) {
    //       calcField.value += putInfo;
    //     }
    //
    //
    //   },false);
    // }
    container.addEventListener('click', print, false);
  }
  return {
    captureInput:captureInput,

  };
})();
