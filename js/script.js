$('#search').on('keyup', function(){
  const value = $('#search').val().toLowerCase();
  const list = document.querySelector('.livesearch');
  const h3 = list.getElementsByTagName("h3");
  const location = list.getElementsByClassName('location'); 
  for (let i = 0; i < h3.length; i++) {
  	for (let i = 0; i < location.length; i++) {
	    const employeeName = h3[i].innerHTML.toLowerCase();
	    const locationName = location[i].innerHTML.toLowerCase();
	    const col = document.getElementsByClassName('col');  
	    if (employeeName.indexOf(value) > -1 || locationName.indexOf(value) > -1){
	        col[i].style.display = "";
	    } else {
	        col[i].style.display = "none";
	    }
	  }
  } 
});

// $('#search').on('keyup', function(){
// const value = $(this).val().toLowerCase();
// 	$(".livesearch").filter(function() {
// 	if ($(this).text().toLowerCase().indexOf(value) > -1) {
// 		console.log(value);
// 		const employeeName = document.getElementsByTagName('h3');
// 		for (let i = 0; i < employeeName.length; i++){
// 			var caption = employeeName[i].innerHTML.toLowerCase();
// 			if (caption.indexOf(value) > -1) {
// 		    	col.style.display = " ";
// 		    } else {
// 		    	var memberText = employeeName[i].parentNode;
// 		    	var card = memberText.parentNode;
// 		    	var cardContainer = card.parentNode;
// 		    	var col = cardContainer.parentNode;
// 		        col.style.display = "none";
// 		    }
// 		}	
//       }
//  	});
// });




// // GET MODAL ELEMENT
// const modal = document.getElementById('simpleModal');
// // GET OPEN MODAL BUTTON
// const modalBtn = document.getElementsByClassName('modalBtn')[0];
// // GET CLOSE BUTTON
// const closeBtn = document.getElementsByClassName('closeBtn')[0];

// // LISTEN FOR OPEN CLICK
// modalBtn.addEventListener('click', openModal);
// // LISTEN FOR CLOSE CLICK
// closeBtn.addEventListener('click', closeModal);
// // LISTEN FOR OUTSIDE CLICK
// window.addEventListener('click', outsideClick);

// // FUNCTION TO OPEN MODAL
// function openModal() {
//   modal.style.display = 'block';
// }

// // FUNCTION TO CLOSE MODAL
// function closeModal() {
//   modal.style.display = 'none';
// }

// // FUNCTION TO CLOSE MODAL IF OUTSIDE CLICK
// function outsideClick(event) {
//   if (event.target == modal) {
//     modal.style.display = 'none';
//   }
// }

