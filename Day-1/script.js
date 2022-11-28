
let form = document.getElementById("form");
let input = document.getElementById("mainInput");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Please enter some text";
        console.log("failure");
    } else {
        console.log("successs");
        msg.innerHTML = "";
        acceptData();
    }

};

let data = {};
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

let createPost = () => {
    posts.innerHTML += `
    <div>
      <h3 id="datastyle">${data.text}</h3>
      <span class="options">
      <i onClick="editPost(this)" class="glyphicon glyphicon-pencil" id="pencil"></i>
        <i onClick="deletePost(this)" class="glyphicon glyphicon-remove" id="remove"></i>
        <span>
    </div>
    `;
    input.value = "";
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};