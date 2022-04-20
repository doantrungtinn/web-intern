function openPage(pageName, elmnt, color) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }


  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
  }

  document.getElementById(pageName).style.display = "block";


  elmnt.style.backgroundColor = color;
}


document.getElementById("defaultOpen").click();
// var radios = document.querySelectorAll('.radio-element');

// for (var i = 0, length = radios.length; i < length; i++) {
//     if (radios[i].checked) {
//         // do whatever you want with the checked radio
//         alert(radios[i].value);

//         // only one radio can be logically checked, don't check the rest
//         break;
//     }
// }
const radios = document.querySelectorAll(".radio-element")
const buttons = document.querySelectorAll(".tablink")

for (let index = 0; index < radios.length; index++) {
  const element = radios[index];
  element.onchange = function () {
      buttons[index].click();
  }
}


for (let index = 0; index < buttons.length; index++) {
  const element = buttons[index];

  element.onclick = function () {
      radios[index].click();
      if (index==0){
          openPage('Home', this, 'red');
      }

      if (index==1){
          openPage('News', this, 'green');
      }

      if (index==2){
          openPage('Contact', this, 'blue');
      }


  }

  
}
