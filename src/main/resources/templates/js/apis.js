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

function test(xxx)
{
	const sending = xxx;
	fetch('/api/post/PostTest', {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'text/plain',
	    'Access-Control-Allow-Origin': '*',
	  },
	  body: sending
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

test("csci201");
console.log("aaaaaaaaaa");