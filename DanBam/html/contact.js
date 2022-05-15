document.querySelector("#submit").addEventListener('click',function(){
  let name= document.querySelector("#name").value;
  if(name.length<2){
      alert("Please enter your name");
  }else{
      console.log(name);
  }

  let Email= document.querySelector("#email").value;
  if(Email.length<5){
      alert("Please enter your e-mail");
  }else{
      console.log(Email);
  }
  
  document.querySelectorAll(".gender").forEach(function(){
      let male = document.getElementById('genderMale').value;
      let female = document.getElementById('genderFemale').value;
      if(document.getElementById('genderMale').checked) {
          console.log(male);
        }else if(document.getElementById('genderFemale').checked){
          console.log(female);
        }else{
            alert("Please choose your gender");
        }
  })
    let location= document.querySelector('#locationlist').value;
    if(location == ""){
        alert("Please choose your city");
    }else{
        console.log(location);
    }

    var msg = document.forms["contactForm"]["message"].value;
    if(msg.length<1){
        alert("Please input your message");
        return false;
    }else{
        console.log(msg);
    }

})