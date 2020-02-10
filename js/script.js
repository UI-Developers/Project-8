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

function createModal(element) {
	return document.createElement(element);
}

fetch("https://randomuser.me/api/?results=12")
	.then((resp) => resp.json())
	.then(function (data) {
		let users = data.results;
		 users.map(function (user) {
			
			var employeeID = user.id.value;
			let col = createUser('div');
			let	cardContainer = createUser('div');
			let	card = createUser('div');
			let	img = createUser('img');
			let	memberText = createUser('div');
			let	name = createUser('h3');
			let	email = createUser('p');
			let	city = createUser('p');

				col.className = 'col';
				cardContainer.className = 'card-container';
				cardContainer.id = employeeID;
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

			let simpleModal = createModal('div');
			let	modalContent = createModal('div');
			let	modalHeader = createModal('div');
			let	modalBtn = createModal('span');
			let	modalBody = createModal('div');
			let	modalImg = createModal('img');
			let	modalName = createModal('h3');
			let	modalEmail = createModal('p');
			let	modalCity = createModal('p');
			let	modalSeparator = createModal('div');
			let	modalFooter = createModal('div');
			let	modalPhone = createModal('p');
			let	modalAddress = createModal('p');
			let	modalDOB = createModal('p');

				simpleModal.className = 'modal';
				simpleModal.id = 'simpleModal' + employeeID;
				modalContent.className = 'modal-content';
				modalHeader.className = 'modal-header';
				modalBtn.className = 'closeBtn';
				modalBody.className = 'modal-body';
				modalImg.className = 'img-modal';
				modalSeparator.className = 'separator';
				modalFooter.className = 'modal-footer';

				modalImg.src = user.picture.large;
				modalName.innerHTML = `${user.name.first} ${user.name.last}`;
				modalEmail.innerHTML = `${user.email}`;
				modalCity.innerHTML = `${user.location.city}`;
				modalPhone.innerHTML = `${user.phone}`;
				modalAddress.innerHTML = `${user.location.street.number} ${user.location.street.name}` + ", " +  `${user.location.state} ${user.location.postcode}`;
				modalDOB.innerHTML = `${user.dob.date.slice(0,10).split("-").reverse().join("/")}`;

				append(simpleModal, modalContent),
				append(modalContent, modalHeader),
				append(modalHeader, modalBtn),
				append(modalContent, modalBody),
				append(modalBody, modalImg),
				append(modalBody, modalName),
				append(modalBody, modalEmail),
				append(modalBody, modalCity),
				append(modalContent, modalSeparator),
				append(modalContent, modalFooter),
				append(modalFooter, modalPhone),
				append(modalFooter, modalAddress),
				append(modalFooter, modalDOB),
				append(document.querySelector('.modalShell'), simpleModal);

				cardContainer.addEventListener('click', () => {
					simpleModal.style.display = 'block';
				});

				modalBtn.addEventListener('click', () => {
					simpleModal.style.display = 'none';
				});

				window.addEventListener('click', () => {
					if (event.target == simpleModal) {
				    simpleModal.style.display = 'none';
				  }
				});
		});
	})

	.catch(function (error) {
		console.log(error);
	});
	


