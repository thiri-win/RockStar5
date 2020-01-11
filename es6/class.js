class User {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log('Hello, My name is '+ this.name +' and age is ' + this.age + '.');
    }
}

class Student extends User {

}

var tom = new User('Tom',24);
tom.say();

var kim = new Student('Kim',40);
kim.say();