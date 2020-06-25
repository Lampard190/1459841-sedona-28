var searchHotel = document.querySelector(".button-search-of-hotel");
var modalWin = document.querySelector(".modal-show");
var searchForm = document.querySelector(".button-search");
var date = document.querySelector("input[type=text]");
var amountInp = document.querySelector("input[type=number]");
var storage = localStorage.getItem("amountInp");

searchHotel.addEventListener("click", function () {
   	modalWin.classList.toggle('modal-none');
   	date.focus();
   	if (storage) {
   		amountInp.value = storage;
   	}
   });

   	searchForm.addEventListener("submit", function (evt) {
   		if (!date.value && !amountInp.value) {
   		evt.preventDefault();
   		console.log("Нужно ввести дату и количество");
   	} else {
   		localStorage.setItem("amountInp", amountInp.value);
   	}	
  });

   	window.addEventListener("keydown", function(evt) {
   		if (evt.keyCode === 27) {
   			if (modalWin.classList.contains("modal-show")) {
          evt.preventDefault();
         	modalWin.classList.remove("modal-show");
        }   
   		}
   	});