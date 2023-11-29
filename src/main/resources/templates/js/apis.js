//WE NEED API CALL THAT PULLS ALL CARDS FROM A SPECIFIC USER ID, THE API CALL NEEDS TO RETURN EACH POST ID ALSO FOR THE USER

// PostController
function getAllPosts ()
{
	fetch('/api/post/getAllPost', {
	  method: 'GET',
	  headers: {
	    'Content-Type': 'application/json',
	  }
	})
	  .then(response => response.json())
	  .then(data => {
	    console.log('api.js getAllPosts: need implementation, ' +
	    'data should be a json array with all posts: \n\n' + data.tostring());
	    // Handle success response from the server
	  })
	  .catch((error) => {
	    console.error('Error:', error);
	    // Handle error
	  });
}

function getPostsByUser(user_id){
	fetch('/api/post/getPostByUser?user_id='+user_id, {
	  method: 'GET',
	  headers: {
	    'Content-Type': 'application/json',
	    'Access-Control-Allow-Origin': '*',
	  },
	  body: JSON.stringify(sending)
	})
	.then(response => response.json())
	  .then(data => {
	    console.log('api.js getPostsByUser: need implementation, ' +
	    'data should be a json array with all posts of the user: \n\n' + data.tostring());
	    // Handle success response from the server
	  })
	  .catch((error) => {
	    console.error('Error:', error);
	    // Handle error
	  });
}

function getPostsByID(post_id){
	fetch('/api/post/getPostByID?post_id='+post_id, {
	  method: 'GET',
	  headers: {
	    'Content-Type': 'application/json',
	    'Access-Control-Allow-Origin': '*',
	  },
	  body: JSON.stringify(sending)
	})
	.then(response => response.json())
	  .then(data => {
	    console.log('api.js getPostsByID: need implementation, ' +
	    'data should be a json of the post: \n\n' + data.tostring());
	    // Handle success response from the server
	  })
	  .catch((error) => {
	    console.error('Error:', error);
	    // Handle error
	  });
}

function addPost(){
	// all info about the post
	const postTitle = "";
	const imageUrl_ = "";
	const itemPrice_ = "";
	const description_ = '';
	const seller_ = '';
	const sold_ = '';
	const user_id = '';
	sending = {
		"postTitle": postTitle,
		"imageUrl_": imageUrl_,
		"itemPrice_": itemPrice_,
		"description_": description_,
		"seller_": seller_,
		"sold_": sold_,
		"user_id": user_id,		
	};
	fetch('/api/post/addPost', {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'text/plain',
	    'Access-Control-Allow-Origin': '*',
	  },
	  body: JSON.stringify(sending)
	})
	.then(response => response.text())
	  .then(data => {
	    console.log('api.js addPost: returns the id of the added post:' + data);
	    // Handle success response from the server
	  })
	  .catch((error) => {
	    console.error('Error:', error);
	    // Handle error
	  });
}

function deletePost(postId){
	fetch('/api/post/deletePost?postID='+postId, {
	  method: 'DELETE',
	  headers: {
	    'Content-Type': 'text/plain',
	    'Access-Control-Allow-Origin': '*',
	  },
	})
	.then(response => response.text())
	  .then(data => {
	    console.log('api.js deletePost: \n returns:' + data);
	    // Handle success response from the server
	  })
	  .catch((error) => {
	    console.error('Error:', error);
	    // Handle error
	  });
}

function test(xxx)
{
	const sending = {
		"test1": xxx,
		"test2": "okkkk"
	}; // this does not matter
	fetch('/api/post/PostTest?test1='+xxx, {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'text/plain',
	    'Access-Control-Allow-Origin': '*',
	  },
	  body: JSON.stringify(sending)
	})
	  .then(response => response.text())
	  .then(data => {
	    document.getElementById("testing").innerHTML = data;
	    // Handle success response from the server
	  })
	  .catch((error) => {
	    console.error('Error:', error);
	    // Handle error
	  });
}



// UserController

function getAllUsers ()
{
	fetch('/api/user/getAllUsers', {
	  method: 'GET',
	  headers: {
	    'Content-Type': 'application/json',
	  }
	})
	  .then(response => response.json())
	  .then(data => {
	    console.log('api.js getAllUsers: need implementation, ' +
	    'data should be a json array with all posts: \n\n' + data.tostring());
	    // Handle success response from the server
	  })
	  .catch((error) => {
	    console.error('Error:', error);
	    // Handle error
	  });
}

function getUsers(ID){
	fetch('/api/user/getUserByID?ID='+ID, {
	  method: 'GET',
	  headers: {
	    'Content-Type': 'application/json',
	    'Access-Control-Allow-Origin': '*',
	  },
	  body: JSON.stringify(sending)
	})
	.then(response => response.json())
	  .then(data => {
	    console.log('api.js getUsers: need implementation, ' +
	    'data should be a json of the post: \n\n' + data.tostring());
	    // Handle success response from the server
	  })
	  .catch((error) => {
	    console.error('Error:', error);
	    // Handle error
	  });
}

function addUser(){
	// all info about the User
	const username = "";
	const password_ = "";
	const email_ = "";
	sending = {
		"username": username,
		"password_": password_,
		"email_": email_,	
	};
	fetch('/api/user/addUser', {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'text/plain',
	    'Access-Control-Allow-Origin': '*',
	  },
	  body: JSON.stringify(sending)
	})
	.then(response => response.text())
	  .then(data => {
	    console.log('api.js addUser: returns the id of the added user:' + data);
	    // Handle success response from the server
	  })
	  .catch((error) => {
	    console.error('Error:', error);
	    // Handle error
	  });
}

function validateUser(){
	// all info about the User
	const username = "";
	const password_ = "";
	const email_ = "";
	sending = {
		"username": username,
		"password_": password_,
		"email_": email_,	
	};
	fetch('/api/user/validateUser', {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'text/plain',
	    'Access-Control-Allow-Origin': '*',
	  },
	  body: JSON.stringify(sending)
	})
	.then(response => response.text())
	  .then(data => {
	    console.log('api.js validateUser: returns the message of validation: ' + data);
	    // 1 means found, -1 means username incorrect, 0 means password incorrect
	  })
	  .catch((error) => {
	    console.error('Error:', error);
	    // Handle error
	  });
}

function deleteUser(userID){
	fetch('/api/post/deletePost?userID='+userID, {
	  method: 'DELETE',
	  headers: {
	    'Content-Type': 'text/plain',
	    'Access-Control-Allow-Origin': '*',
	  },
	})
	.then(response => response.text())
	  .then(data => {
	    console.log('api.js deleteUser: \n returns a message:' + data);
	    // Handle success response from the server
	  })
	  .catch((error) => {
	    console.error('Error:', error);
	    // Handle error
	  });
}


// test(201); this work