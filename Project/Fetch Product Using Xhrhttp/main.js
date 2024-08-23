const productListContainer = document.querySelector(".product-list-container");

//using XMLHttpRequest
function fetchProductAPiUsingXhrhttp() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      displayPosts(xhr.response);
    } else {
      console.log("Error Occured");
    }
  };
}

//using fetch

function callingApiUsinFetch() {
  const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  fetchRequest
    .then((response) => response.json())
    .then((result) => displayPosts(result))
    .catch((error) => console.log(error));
}

//using aync await
async function fetchAPiUsingAsyncAwait() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });
    const result = await response.json();
    if (result) {
      displayPosts(result);
    }
  } catch (error) {
    console.log(error);
  }
}

//using xhr and async-await and  promise

function helperMethod(method, url) {
  let promise = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };
  });
  return promise;
}

async function fetchAsyncAwaitAndXhr() {
  const response = await helperMethod(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (response) {
    displayPosts(response);
  } else {
    console.log("error occured");
  }
}

function displayPosts(posts) {
  productListContainer.innerHTML = posts
    .map(
      (postItem) => `<div class="post-Item">
        <h1>${postItem.title}</h1>
        <p>${postItem.body}</p>
        </div>`
    )
    .join(" ");
}

fetchAsyncAwaitAndXhr();
//fetchAPiUsingAsyncAwait();
//callingApiUsinFetch()
//fetchProductAPiUsingXhrhttp();
