/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой он отключен аннотацией eslint-disable */

var a = 17;
function example() {
  var a = 1;
  console.log(a);
  if (false) {
    var a;
  }
}
example();
console.log(a);
