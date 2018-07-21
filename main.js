function Loadjason(file,callback) {
  var x = new XMLHttpRequest();
  x.overrideMimeType("application/json");
  x.open("GET",file,true);
  x.onreadystatechange=function(){
    if(x.readyState === 4 && x.status == "200"){
      callback(x.responseText);
    }
  };
  x.send(null);
}

Loadjason("data.json",function(text) {
  var data = JSON.parse(text);
  console.log(data);
  basics(data.details);
  basics1(data.career);
})

var child1 = document.querySelector(".child1");
var child2 = document.querySelector(".child2");

function basics(det) {
  var image = document.createElement("img");
  image.src = det.image;
  child1.appendChild(image);

  var name = document.createElement("h3");
  name.textContent = det.name;
  child1.appendChild(name);

  var phno = document.createElement("h3");
  phno.textContent = det.phno;
  child1.appendChild(phno);

  var email = document.createElement("a");
  email.href = "mailto:sagideepak0@gmail.com";
  email.textContent = det.email;
  child1.appendChild(email);

  var add = document.createElement("h3");
  add.textContent = "Address";
  child1.appendChild(add);
 child1.appendChild(document.createElement("hr"))


  var Address = document.createElement("h3");
  Address.textContent = det.Address;
  child1.appendChild(Address);
}
  function basics1(det1){
    var heading = document.createElement("h2");
    heading.textContent = det1.heading;
    child2.appendChild(heading);
   child2.appendChild(document.createElement("hr"))

   var info = document.createElement("h3");
   info.textContent = det1.info;
   child2.appendChild(info);

  }
