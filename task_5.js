let arr = [1, 3, 5, 7, 9];

/* Вывод длины массива */
console.log(arr.length);

/* Вывод элементов методом FOR */
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

/* Вывод элементов методом FOREACH */
arr.forEach(function (item) {
    console.log(item);
});

