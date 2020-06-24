var searchHotel = document.querySelector(".button-search-of-hotel");
var modalWin = document.querySelector(".modal");
var form = document.querySelector(".button-search");
var datearr = document.querySelector("[name=date_of_arrival]");
var datedep = document.querySelector("[name=date_of_departure]");
var amountInp = document.querySelector("[name=amount]");
var storage = localStorage.getItem("amountInp");

searchHotel.addEventListener("click", function () {
   	modalWin.classList.toggle('modal-none');
   	modalWin.classList.toggle('modal-show');
   	datearr.focus();
   	if (storage) {
   		amountInp.value = storage;
   	}
   });

   	form.addEventListener("submit", function (evt){
   		if (!datearr.value || !datedep.value || !amountInp.value) {
   		evt.preventDefault();
   		console.log("Нужно ввести дату и количество");
   	} else {
   		localStorage.setItem("amountInp", amountInp.value);
   	}	
   });

   	window.addEventListener("keydown" function(evt) {
   		if (evt.keyCode === 27 {
   			if (modalWin.classList.contains"modal-show")) {
   			evt.preventDefault();
   			modalWin.classList.remove("modal-show");
   		}
   	});