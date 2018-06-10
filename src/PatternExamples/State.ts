// ------------------------------ Steps of the action ------------------------------

interface State {
  action: Action;

  // 1
  startAction();

  // 2
  pendingAction();

  // 2
  finishAction();

  // 3
  cancelAction();
}


// ------------------------------ Main class ------------------------------

export class Action {

  public actionStartedState: State;
  public actionPendingState: State;
  public actionFinishedState: State;
  public actionCancelledState: State;

  public currentState: State;

  constructor() {
    this.actionStartedState = new ActionStartedState(this);
    this.actionPendingState = new ActionPendingState(this);
    this.actionFinishedState = new ActionFinishedState(this);
    this.actionCancelledState = new ActionCancelledState(this);

    // launch the action
    this.setState(this.actionStartedState);
  }


  public setState(state: State) {
    this.currentState = state;
  }


  public getState(): State {
    return this.currentState;
  }
}


class ActionStartedState implements State {

  action: Action;


  constructor(action: Action) {
    this.action = action;
  }


  startAction() {
    console.log('ActionStartedState - Action already started');
  }


  pendingAction() {
    console.log('ActionStartedState - Action pending');
    this.action.setState(this.action.actionPendingState);
  }


  finishAction() {
    console.log('ActionStartedState - Action finished');
    this.action.setState(this.action.actionFinishedState);
  }


  cancelAction() {
    console.log('ActionStartedState - Action cancelled!');
    this.action.setState(this.action.actionCancelledState);
  }
}


class ActionPendingState implements State {

  action: Action;


  constructor(action: Action) {
    this.action = action;
  }


  startAction() {
    console.log('ActionPendingState - Action already started');
  }


  pendingAction() {
    console.log('ActionPendingState - Action already pending');
  }


  finishAction() {
    console.log('ActionPendingState - Action finished');
    this.action.setState(this.action.actionFinishedState);
  }


  cancelAction() {
    console.log('ActionPendingState - Action cancelled!');
    this.action.setState(this.action.actionCancelledState);
  }
}


class ActionFinishedState implements State {

  action: Action;


  constructor(action: Action) {
    this.action = action;
  }


  startAction() {
    console.log('ActionFinishedState - Oh oh! Action is already finished');
  }


  pendingAction() {
    console.log('ActionFinishedState - Ho! Action is already finished');
  }


  finishAction() {
    console.log('ActionFinishedState - Action already finished');
  }


  cancelAction() {
    console.log('ActionFinishedState - Action cancelled!');
    this.action.setState(this.action.actionCancelledState);
  }

}


class ActionCancelledState implements State {

  action: Action;


  constructor(action: Action) {
    this.action = action;
  }


  startAction() {
    console.log('ActionCancelledState - Sorry, Action has been cancelled');
  }


  pendingAction() {
    console.log('ActionCancelledState - Sorry, Action has been cancelled');
  }


  finishAction() {
    console.log('ActionCancelledState - Sorry, Action has been cancelled');
  }


  cancelAction() {
    console.log('ActionCancelledState - Action already cancelled!');
    this.action.setState(this.action.actionCancelledState);
  }

}


// ------------------------------ Execution ------------------------------

let action = new Action();

action.getState().pendingAction();
action.getState().cancelAction();
action.getState().finishAction();

console.log('Action state: ' + (<any> action.getState()).constructor.name);
