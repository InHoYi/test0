function myFunction() {
    var copyText = document.getElementById("CopyContact");
  var textToCopy = copyText.innerText;
  
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      console.log('Text copied to clipboard');
    })
    .catch((error) => {
      console.error('Could not copy text: ', error);
    });
}

function closeWindow() {
  if (confirm("이 창을 종료하시겠습니까?")) {
      window.close();
  }
}

/********************************************MENU******************************************/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "#161617";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "15px";
  document.body.style.backgroundColor = "#161617";
}

/********************************************MENU******************************************/