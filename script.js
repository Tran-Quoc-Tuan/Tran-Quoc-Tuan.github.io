document.write("Hello world");

var request = new XMLHttpRequest();
request.open("GET", "https://limitless-bastion-11970.herokuapp.com/");
try {
  console.log(request.readyState);
  request.setRequestHeader('Access-Control-Allow-Origin', '*');
  request.send();
  console.log(request.responseText);
  console.log("Success");
}
catch(err) {
  console.log(err.message);
}
