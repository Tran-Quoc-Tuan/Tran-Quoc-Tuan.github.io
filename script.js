var request = new XMLHttpRequest();
request.open("GET", "https://limitless-bastion-11970.herokuapp.com/Ảnh/");
console.log("Hello");
try {
  console.log(request.readyState);
  request.send();
  console.log("Success");
}
catch(err) {
  console.log(err.message);
}
