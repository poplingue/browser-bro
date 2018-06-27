interface Value {
  value: string;
}

export interface EventValue extends Value {
  target: Value;
}
