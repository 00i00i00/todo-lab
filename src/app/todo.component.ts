import { Component, Input } from '@angular/core';
import { filterQueryId } from '@angular/core/src/view/util';
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
  filteredTodo = [...this.todo];
  // filteredTodo = this.todo.slice();


  addTask = () => {
    const newItem = {
      task: this.taskInput,
      completed: false,
    };
  
    this.todo.push(newItem);
    this.filterSearch();
    this.taskInput = null;
    
  }


removeTask = item => {
  const index = this.todo.indexOf(item);
  this.todo.splice(index, 1);
  this.filterSearch();
}

completeTask = item => {
  const index = this.todo.indexOf(item);
  this.todo[index].completed = true;
  this.filterSearch();
  
  }

filterSearch = () => {
const lower = this.filterInput ? this.filterInput.toLowerCase(): '';
this.filteredTodo = this.todo.filter(item => item.task.toLowerCase().includes(lower));
}

}
