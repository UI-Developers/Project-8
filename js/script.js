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

function createUser(element) {
	return document.createElement(element);
}

function append(parent, element) {
	return parent.appendChild(element);
}

fetch("https://randomuser.me/api/?results=12")
	.then((resp) => resp.json())
	.then(function (data) {
		let users = data.results;
		 users.map(function (user) {
			
			let col = createUser('div'),
				cardContainer = createUser('div'),
				card = createUser('div'),
				img = createUser('img'),
				memberText = createUser('div'),
				name = createUser('h3'),
				email = createUser('p');
				city = createUser('p');

				col.className = 'col';
				cardContainer.className = 'card-container';
				card.className = 'card modalBtn';
				img.src = user.picture.medium;
				memberText.className = 'members-text';
				city.className = 'location';

				name.innerHTML = `${user.name.first} ${user.name.last}`;
				email.innerHTML = `${user.email}`;
				city.innerHTML = `${user.location.city}`;

				append(col, cardContainer),
				append(cardContainer, card),
				append(card, img),
				append(card, memberText),
				append(memberText, name),
				append(memberText, email),
				append(memberText, city),
				append(document.querySelector('.livesearch'), col);
		});


		// GET MODAL ELEMENT
		const modal = document.getElementById('simpleModal');
		// GET OPEN MODAL BUTTON
		const modalBtn = document.getElementsByClassName('modalBtn');
		// GET CLOSE BUTTON
		const closeBtn = document.getElementsByClassName('closeBtn')[0];

		// LISTEN FOR OPEN CLICK
		for (let i = 0; i < modalBtn.length; modalBtn[i++].addEventListener('click', openModal));
		// LISTEN FOR CLOSE CLICK
		closeBtn.addEventListener('click', closeModal);
		// LISTEN FOR OUTSIDE CLICK
		window.addEventListener('click', outsideClick);

		// FUNCTION TO OPEN MODAL
		function openModal() {
		  modal.style.display = 'block';
		}

		// FUNCTION TO CLOSE MODAL
		function closeModal() {
		  modal.style.display = 'none';
		}

		// FUNCTION TO CLOSE MODAL IF OUTSIDE CLICK
		function outsideClick(event) {
		  if (event.target == modal) {
		    modal.style.display = 'none';
		  }
		}
	})

	.catch(function (error) {
		console.log(error);
	});
	


