let todoList = (function() {
  let list = [];

  function add(str) {
    if (typeof str === 'string') {
        list.push(str);
    } else {
        console.error('Некоректний тип даних. Очікується рядок.');
    }
  }

    function del(i) {
        if (i >= 0 && i < list.length) {
            list.splice(i, 1);
        } else {
            console.error('Такого індексу не існує.');
        }
    }

  function show() {
    return list;
  }

  return {
    add,
    del,
    show
  };
})();

//Перевірки:
todoList.add("do some task");
console.log(todoList.show()); // ["do some task"]

todoList.del(0);
console.log(todoList.show()); // []

todoList.add("do other task");
todoList.add("read a book");
console.log(todoList.show()); // ["do other task", "read a book"]

todoList.add(123); // error: некоректний тип даних. Очікується рядок.
todoList.del(3); //error: такого індексу не існує