import { Component, Input } from '@angular/core';
interface Item {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  taskInput: string;
  todo: Item[] = [{task: 'Walk the dog.', completed: false}, {task: "Go to the store.", completed: true}, {task: 'Get gas.', completed: false}, {task: 'Wash the car.', completed: false}];
  filterInput: string;
  todoNew: Item[];
  todoKeep: Item[];

  addTask = () => {
    const newItem = {
      task: this.taskInput,
      completed: false,
    };
  
    this.todo.push(newItem);
    this.taskInput = null;
    
  }


removeTask = (index) => {
this.todo.splice(index, 1);
}

completeTask = (index) => {
this.todo[index].completed = true;
}

filterSearch = () => {
this.todoKeep = JSON.parse(JSON.stringify(this.todo));
if (this.filterInput === '' || this.filterInput === null) {
  this.todo = this.todoKeep;
console.log(this.todoKeep);

}

if (this.filterInput !== null) {
this.filterInput = this.filterInput.toLowerCase();
this.todo = this.todo.filter(item => item.task.toLowerCase().includes(this.filterInput));
} 
}

}
