var i = 0;

function change() {
  var doc = document.getElementById("background");
  var color = ["#FFFFFF", "#FCE8E8", "#FAD1D1", "#F7BBBB", "#F4A4A4", "#F28D8D"];
  doc.style.backgroundColor = color[i];
  i = i + 1;

  if(i > color.length - 1) {
    i = 0;
  }
}

setInterval(change,2000);


function mainpicfunction() {
  document.getElementById("mainpic").src="http://res.cloudinary.com/simpleview/image/upload/v1519670032/clients/newyorkcity/Empire_State_Building_Observatory_manhattan_nyc_Julienne_Schaer_055_3f39d2d1-61fd-4d1b-b931-8590bf4c63a7.jpg";
}


function fact1function() {
  document.getElementById("fact1").innerHTML = "Approximately 800 languages are spoken in NYC.";
}

function fact2function() {
  document.getElementById("fact2").innerHTML = "Laid end to end, NYC Transit train tracks would stretch from NYC to Chicago.";
}

function fact3function() {
  document.getElementById("fact3").innerHTML = "New Yorkers bite 10 times more people than sharks do worldwide.";
}

function fact4function() {
  document.getElementById("fact4").innerHTML = "New Yorkers drink almost 7 times more coffee than other cities in the US.";
}

function fact5function() {
  document.getElementById("fact5").innerHTML = "Over 600,000 dogs live in New York City.";
}

function fact6function() {
  document.getElementById("fact6").innerHTML = "The average temperature of NYC pavement on a hot summer day is 150 degrees.";
}

function fact7function() {
  document.getElementById("fact7").innerHTML = "Traveling to every single stop of the NYC subway would take at least 21 hours.";
}

function fact8function() {
  document.getElementById("fact8").innerHTML = "New Yorkers bite 10 times more people than sharks do worldwide.";
}

function fact9function() {
  document.getElementById("fact9").innerHTML = "On a clear day, you can see five states from the Empire State Building observatories.";
}
