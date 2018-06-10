// ------------------------------ Set of classes ------------------------------

class TaskOne {
  subTaskOne(){
    console.log('subTaskOne');
  }
  doSomething(){
    console.log('do something');
  }
}

class TaskTwo {
  subTaskTwo(){
    console.log('subTaskTwo');
  }
  doSomething(){
    console.log('do something');
  }
}

// ------------------------------ Facade class ------------------------------

class MasterTasks {
  private taskOne: TaskOne;
  private taskTwo: TaskTwo;

  constructor(taskOne: TaskOne, taskTwo: TaskTwo){
    this.taskOne = taskOne;
    this.taskTwo = taskTwo;
  }

  public multiSubTasks(){
    this.taskOne.subTaskOne();
    this.taskTwo.subTaskTwo();
  }

  public multiDoSomething(){
    this.taskOne.doSomething();
    this.taskTwo.doSomething();
  }
}

// ------------------------------ Execution ------------------------------

let t1 = new TaskOne();
let t2 = new TaskTwo();

let exe = new MasterTasks(t1, t2);

exe.multiSubTasks();
exe.multiDoSomething();
