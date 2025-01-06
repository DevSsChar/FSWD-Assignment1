// Problem 1: Task Management System
// Objective: Create a system to manage daily tasks dynamically.
// Tasks:
// Create an array of task objects. Each object should contain:
// title (string): The name of the task.
// status (string): Either "Pending" or "Completed".
// priority (number): A value between 1 (low priority) and 5 (high priority).
// Write the following functions:
// Add Task: Use an arrow function to add a new task object to the array.
// Filter by Status: Use filter() to return all tasks based on their status.
// Find High Priority Task: Use find() to get the first task with a priority of 5.
// Use map() to create a list of task titles with their status, formatted as:
// "Task: [Title], Status: [Status]".
// Use template literals to log the details of all tasks in a readable format.
const task=[
    {
        title: "T255",
        status: "Pending",
        priority: 3
    },
    {
        title: "T25",
        status: "Pending",
        priority: 4
    }
]
const addTask=(title1,priority1,status1=false)=>{
    task.push({title:title1,status:status1,priority:priority1});
    console.log(`Task: ${title1}, status: ${status1}, priority: ${priority1}`)
}
function filterByStatus(status) {
    const tasks=task.filter((item)=>item.status==status);
    console.log(`Tasks that are ${status} are:`,tasks);
}
function findHighPriorityTask() {
    const high=task.find((item)=>item.priority==5);
    console.log(`High Priority task is ${high.title}`);
}
function displayTasks() {
    return task.map((item)=>`Task: ${item.title}, Status: ${item.status}, Priority: ${item.priority}`);
}
addTask("T55",5,true)
filterByStatus("Pending")
findHighPriorityTask()
const tasks=displayTasks()
tasks.forEach((info)=>console.log(info));
