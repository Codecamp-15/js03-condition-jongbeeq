let a = prompt()

if (a === null || a.trim() === '' || isNaN(a)) {
    alert("Invalid number");
}else if (a > 0) {
    alert("Positive number");
}else if (a === 0) {
    alert("Zero");
}else if (a < 0) {
    alert("Negative number");
}
