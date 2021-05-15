const root = document.querySelector("#root");

async function doRequest() {
  let url = "http://localhost:3000/users";
  let res = await fetch(url);

  if (res.ok) {
    let json = await res.json();

    return json;
  } else {
    return `HTTP error: ${res.status}`;
  }
}

let userList = document.createElement("ul");
doRequest().then((data) => {
  data.map((user) => {
    let userListItem = document.createElement("li");
    console.log(user);
    userListItem.textContent = `User #id ${user.id}, email: ${user.email}, name :${user.firstName} ${user.lastName}, state: ${user.state}`;
    userList.append(userListItem);
  });
});

root.append(userList);
