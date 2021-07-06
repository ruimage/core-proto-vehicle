# Train 🚄 or Truck 🚚

![sceenshot](readme-assets/truck.jpeg)

### Release 0

So welcome to the world of trains and trucks! Right now everything is chaotic here and every person is only thinking about himself and his own constructor function. It's time to bring some order and optimize the process! 💪👮🤘

You need to get familiar with the file `train-or-truck` and the tests in the folder `spec`.

You may have already noticed that the constructor function `Vehicle` doesn't apply anywhere. Whereas `Train` and `Truck` repeat each other and are overloaded with properties and methods.

```js
function Vehicle(driver) {
  this.driver = driver;
  this.speed = 0;
}
```

Тебе нужно решить какие свойства и методы уникальны и нужны только в конкретной функции-конструкторе, а какие общие для `Train` и `Truck`.

### Release 1

Время действовать✨

You are supposed to assign methods and properties common to `Train` and `Truck` in constructor function `Vehicle`. And accordingly remove unnecessary things from the `Train` and `Truck`.

### Release 2

Tough!
Now let's deal with inheritance. You need to implementt inheritance. Define what should be in `prototype`, and what should be `constuctor`.

> p.s. Take a look at the tests.

> з.ы. Don't forget   
> **npm install** to install project dependencies. 
> **npm test для** to run tests.

