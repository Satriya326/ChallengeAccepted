class Super {
  static whoami() {
    return "Super";
  }
  lognameA() {
    console.log(Super.whoami());
  }
  lognameB() {
    console.log(this.constructor.whoami());
  }
}
class Sub extends Super {
  static whoami() {
    return "Sub";
  }
}
new Sub().lognameA(); // Super
new Sub().lognameB(); // Sub

console.log(lognameA)