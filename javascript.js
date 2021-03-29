/* En kommentar 
som kan sträcka sig över flera rader.*/

//En kommentar på en rad.
function visaDialog(){
     alert('Glöm inte att hålla avstånd, trevlig resa!');
     changeText();
}

function changeText(){
    document.getElementById("demo").innerHTML = "Köp Godkänt!;";
}

function writeText(){
    var namn = document.getElementById("fnamn").value;
    document.getElementById("text").innerHTML = namn;
}

function bild(sw) {
    var pic;
    if (sw == 0) {
      pic = "Busskort.jpg"
    } else {
      pic = "Kort.jpg"
    }
    document.getElementById('myImage').src = pic;
  }