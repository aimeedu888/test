const createCardU = (user, title, imgFilePath, details, price, id) => {
	const card = document.createElement("div");
	card.dataset.id = id;
	card.classList.add("card", "p-1");
	card.style.width = "20rem";
	card.style.height = "22rem";

	//create img container and img
	const imgContainer = document.createElement("div");
	imgContainer.classList.add("img-container");

	const img = document.createElement("img");
	img.src = imgFilePath;
	img.alt = "Image of User clothing";

	imgContainer.appendChild(img);

	//create card body
	const cardBody = document.createElement("div");
	imgContainer.classList.add("card-body");

	const cardTitle = document.createElement("h5");
	cardTitle.classList.add("card-title");
	cardTitle.innerHTML = title;

	const cardDetails = document.createElement("p");
	cardDetails.classList.add("card-text");
	cardDetails.innerHTML = details;

	const cardUser = document.createElement("p");
	cardUser.classList.add("card-text", "font-weight-bold");
	cardUser.innerHTML = "Contacts: " + user;

	const cardEditContainer = document.createElement("div");
	cardEditContainer.classList.add("card-edit-container", "d-flex", "flex-row", "align-items-center", "justify-content-between");


	const priceTag = document.createElement("p");
	priceTag.classList.add("price-tag");
	priceTag.innerHTML = "$" + price;

	cardEditContainer.appendChild(priceTag);

	cardBody.appendChild(cardTitle);
	cardBody.appendChild(cardDetails);
	cardBody.appendChild(cardUser);
	cardBody.appendChild(cardEditContainer);

	card.appendChild(imgContainer);
	card.appendChild(cardBody);

	//create column for card to be in
	const column = document.createElement("div");
	column.classList.add("col-3", "d-flex", "align-items-center", "justify-content-center", "mb-4");
	column.appendChild(card);
	return column;
}
function checkLoggedIn() {
	const signedIn = localStorage.getItem('currentUser');
	console.log(typeof signedIn);
	if (signedIn != "-1") {
		console.log("logged in ");
		document.getElementById("closet-link").style.visibility = "block";
		document.getElementById("logout-link").style.visibility = "block";
		document.getElementById("sign-up-link").style.visibility = "none";
	}
	else {
		console.log("guest");
		document.getElementById("closet-link").style.visibility = "none";
		document.getElementById("logout-link").style.visibility = "none";
		document.getElementById("sign-up-link").style.visibility = "block";
	}
}

function clearLocalStorage() {
	localStorage.clear();
}

const renderInitialPosts = () => {
	//CALL GETALLPOSTS HERE AND USE LOOP TO KEEP MAKING NEWCARDS FOR ALL POSTS
	const newCard = createCardU("username", "TITLE", "IMAGE", "DETAILS DETAILS DETAILS DETAILS DETAILS DETAILS DETAILS DETAILS", 12.99, 1);
	const cardContainerRow = document.getElementById("posts-container");
	cardContainerRow.appendChild(newCard);
}

renderInitialPosts();
renderInitialPosts();
renderInitialPosts();
renderInitialPosts();
renderInitialPosts();
