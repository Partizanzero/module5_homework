function allEqual(arr) {
    return new Set(arr).size == 1;
}

console.log(allEqual([5, 5, 5, 5]));
console.log(allEqual(['a', 'a', 'b', 'a'])); 
