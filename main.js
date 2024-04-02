import inquirer from "inquirer";
let todo = ["usaid", "sohaib"];
async function createtodo(todo) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "select the operation",
            choices: ["add", "update", "view", "delete"],
        });
        if (ans.select == "add") {
            let addtodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "add item in to do list",
            });
            todo.push(addtodo.todo);
            todo.forEach(todos => console.log(todos));
        }
        if (ans.select == "update") {
            let updatetodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "update item in to do list",
                choices: todo.map(items => items)
            });
            let addtodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "add item in to do list",
            });
            let newtodo = todo.filter(val => val !== updatetodo.todo);
            todo = [...newtodo, addtodo.todo];
            todo.forEach(todos => console.log(todos));
        }
        if (ans.select == "view") {
            console.log("****TO DO LIST ****");
            todo.forEach(todos => console.log(todos));
            console.log("*******************");
        }
        if (ans.select == "delete") {
            let deletetodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "delete item from to do list",
                choices: todo.map(items => items)
            });
            let newtodo = todo.filter(val => val !== deletetodo.todo);
            todo = [...newtodo];
            todo.forEach(todos => console.log(todos));
        }
    } while (true);
}
createtodo(todo);
