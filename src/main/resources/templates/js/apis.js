//WE NEED API CALL THAT PULLS ALL CARDS FROM A SPECIFIC USER ID, THE API CALL NEEDS TO RETURN EACH POST ID ALSO FOR THE USER

// PostController
function getAllPosts ()
{
	return fetch('/api/post/getAllPost', {
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
	return fetch('/api/post/getPostByUser?user_id='+user_id, {
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
	return fetch('/api/post/getPostByID?post_id='+post_id, {
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
	return fetch('/api/post/addPost', {
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
	return fetch('/api/post/deletePost?postID='+postId, {
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

function test(xxx, xxx2)
{
	const sending = {
		"test1": xxx,
		"test2": "okkkk"
	}; // this does not matter
	return fetch('/api/post/PostTest?test1='+xxx+'&test2='+xxx2, {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'text/plain',
	    'Access-Control-Allow-Origin': '*',
	  },
	  body: JSON.stringify(sending)
	})
	  .then(response => response.text())
	  .then(data => {
	    console.log(data);
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
	return fetch('/api/user/getAllUsers', {
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
	return fetch('/api/user/getUserByID?ID='+ID, {
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

function addUser(username, password_, email_){
	// all info about the User
	sending = {
		"username": username,
		"password_" : password_,
		"email_": email_,
		"userid_": 1
	}
	para = '?username='+username+'&password='+password_+'&email='+email_;
	return fetch('/api/user/addUser', {
	  method: 'POST',
	  headers: {
	   'Content-Type': 'application/json',
	    'Access-Control-Allow-Origin': '*',
	  },
	 	body: JSON.stringify(sending)
	})
	.then(response => response.text())
	  .then(data => {
	    console.log('api.js addUser: returns the id of the added user:' + data);
	    return data;
	    // Handle success response from the server
	  })
	  .catch((error) => {
	    console.error('Error:', error);
	    // Handle error
	  });
}

function validateUser(username, password_, email_){
	// all info about the User
	para = 
		"?username="+ username+
		"&password="+ password_;
	return fetch('/api/user/validateUser', {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'text/plain',
	    'Access-Control-Allow-Origin': '*',
	  },
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
	return fetch('/api/post/deletePost?userID='+userID, {
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


test(201, "testing"); //this work