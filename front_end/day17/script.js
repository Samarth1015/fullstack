let task_perform = prompt("what you want to do in to-do List ");
let to_do_list = [];

while (task_perform != "quit") {
  switch (task_perform) {
    case "list":
      console.log(to_do_list);
      break;
    case "add":
      to_do_list.push(prompt("add the task"));
      break;
    case "delete":
      let check = prompt("which task you want to delete");
      if (to_do_list.includes(check)) {
        to_do_list.splice(to_do_list.indexOf(check), 1);
      } else {
        console.log("enter valid activity ");
      }
      break;
    default:
      console.log("No valid choice given");
      break;
  }
  task_perform = prompt("what next you want to do , write quit to exit  ");
}
