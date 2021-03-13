var request = new XMLHttpRequest();
request.open("GET", "https://limitless-bastion-11970.herokuapp.com/");
try {
  request.send();
}
catch(err) {
  console.log(err.message);
}
