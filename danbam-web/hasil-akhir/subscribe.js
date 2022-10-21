$(".slide").hide()

var currentImage = $(".slide").first()
var currentIndex = 0
currentImage.show()

$("#nextBtn").click(function(){
    currentImage.hide()
    if(currentIndex == $(".slide").length-1){
        currentIndex = 0
        currentImage = $(".slide").first()
    }else{
        currentIndex+=1
        currentImage = currentImage.next()
    }
    currentImage.fadeIn(500)
    currentImage.show()
})

$("#prevBtn").click(function(){
    currentImage.hide()
    if(currentIndex == 0){
        currentIndex = $(".slide").length-1
        currentImage = $(".slide").last()
    }else{
        currentIndex -=1
        currentImage = currentImage.prev()
    }
    currentImage.fadeIn(500)
    currentImage.show()
})

let inputarea = document.getElementById("reservation-form")
inputarea.addEventListener("submit",(e)=>{
    e.preventDefault()
    alert ("Make sure everything is filled and correct. If there is an empty one then we will fill it randomly and will be charged.")


    
let reservationForm = document.forms['reservation-form']
    let firstnameTransaction = reservationForm['firstname']
    let lastnameTransaction = reservationForm['lastname']
    let subjectTransaction = reservationForm['subject']
    let countyTransaction = reservationForm['country']
    // let reservationError = document.getElementById('reservation-Error');
    // reservationError.innerText = firstnameTransaction.value
}) 

function validateForm() {
    var x = document.forms["reservation-form"]["firstname"].value;
    if (x == "") {
      alert("First name must be filled out.");
      return false;
    }

    var x = document.forms["reservation-form"]["lastname"].value;
    if (x == "") {
      alert("Last name must be filled out.");
      return false;
    }

    var x = document.forms["reservation-form"]["numberofguest"].value;
    if (x <= 1 && x >= 10) {
      alert("Must Between 1 - 10.");
      return false;
    }

    var x = document.forms["reservation-form"]["subject"].value;
    if (x =="") {
      alert("Messages must be filled out.");
      return false;
    }

  }