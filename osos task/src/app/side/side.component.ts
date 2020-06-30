import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { DataCenterService} from '../data-center.service';
@Component({
  selector: 'app-side',
  template: ` 
  <input type="button" value="MENU" class="menu" #btn (click)="div_element(ele,btn)"/>
  <div id="myDIV" #ele> 
  <button class="button1"  > DAY 1 </button><br/>
  <br>
  <button class="button1"> DAY 2 </button><br>
  <br>
  <button class="button1"> DAY 3 </button><br>
  <br>
  <button class="button1"> DAY 4 </button><br>
  <br>
  <button class="button1"> DAY 5 </button><br>

  <div> <h2 class="todo"> TODO LIST </h2>



<div class="new"> <input type="text" #new_one/>
<button (click)="addTodo(new_one.value); new_one.value=''">+</button>  </div>

<table class="tab">
  <tr *ngFor="let todo of dataday1">
  <div *ngIf="todo.done; then ifblock; else elseblock;"> </div>
  <ng-template #ifblock>
    <td class="line">{{todo.label}}</td>
    </ng-template>
    <ng-template #elseblock>
    <td>{{todo.label}}</td>
    </ng-template>
    <td>
    <button (click)="deleteTodo(todo)">{{todo.done? '&#10005;':'&#10005;'}}</button>
    </td>
  <td><button (click) ="tick_undo(todo)" >
    {{todo.done? 'undo':'&#10003;'}}
  </button>
  </td>

 
  </tr>
</table>

  <br>
  </div>
  </div>


`,
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  todos=[
    {
    label:'task 1',
    done:false,
   
  },
  {
    label:'task 2',
    done:false,
    
  },
  {
    label:'task 3',
    done:false,
   
  }];
  addTodo(newTodl)
  {
    if(newTodl!="")
    {
    var newTodo={
      label:newTodl,
      done:false
    };
    this.dataday1.push(newTodo)
  }
  }
  tick_undo(todo)
  {
    if(todo.done==false){
      this.dataday1=this.dataday1.filter(t=>t.label!==todo.label)
      this.dataday1.push(todo)
    todo.done=true;
      todo.label.style.textDecoration="line-through";
      
    
    }
    else{
   
  //   this.todos=this.todos.filter(t=>t.label!==todo.label)
  //  todo.label.style.textDecoration="unset";
  //   this.todos.push(todo)
    todo.done=false;
    
  }
}
  deleteTodo(todo)
  {
    this.dataday1=this.dataday1.filter(t=>t.label!==todo.label)

  }
  // @Output()
  // notify:EventEmitter<string>=new EventEmitter<string>();
  // pass()
  // {
  //   this.notify.emit("from child day 1");
  // }


public dataday1=[];
  constructor(private _dataLocal:DataCenterService) { }

  ngOnInit(): void {
    this._dataLocal.datagetday1()
    .subscribe(data=>this.dataday1=data);
  }
  div_element(ele,btn) {
   // var x = document.getElementById("myDIV");
    if (ele.style.display === "block") {
      
      ele.style.display = "none";
      btn.value="MENU";
    } else {
      btn.value="CLOSE";
      ele.style.display = "block";
    }
  }
  div_disp(data){
      data.style.display="block"
  }

}
