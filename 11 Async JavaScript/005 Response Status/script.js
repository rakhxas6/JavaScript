const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  //   console.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    console.log(request, request.responseText);
  } else if(request.readyState === 4){
    console.log("Couldn't fetch the data");
  } else {
      
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todoss/");
request.send();

//! Information Responses
//? Continue -------- 100

//! Successful Responses
//? Status OK -------- 200
//? Status Created -------- 201

//! Redirection Messages
//? Moved Permanently ----301

//!Client Error responses
//? Bad Request -------- 400
//? Unauthorized -------- 401
//? Payment Required -------- 402
//? Forbidden -------- 403
//! Not Found -------- 404
//? Method Not Allowed -------- 405
//? Forbidden -------- 403

//! Server error Responses
//? Internal Server Error -------- 500
