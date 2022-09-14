let new_button = $("#new_todo");
let todo_list_div = $("#ft_list");

let todo_cookies = document.cookie;
if (todo_cookies.length !== 0) {
  todo_cookies = todo_cookies.split(";");
  todo_cookies.forEach((text) => {
    text = text.split("=");
    insert_new_todo(text[0], text[1]);
  });
}

$(document).ready(function () {
  new_button.click(function () {
    let todo_text = prompt("Enter todo list");
    if (todo_text.trim() === "") {
      return;
    }

    let id = new Date().getTime();
    document.cookie = id + "=" + todo_text + ";";
    insert_new_todo(id, todo_text);
  });
});

function insert_new_todo(id, text) {
  let todo = $("<button type='button'></button>").text(text);
  todo.click(function () {
    let is_confirm = confirm("Do you want to delete me?");
    if (is_confirm) {
      todo.remove();
      document.cookie = id + "=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
  });
  todo_list_div.prepend(todo);
}
