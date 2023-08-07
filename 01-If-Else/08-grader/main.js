let a = prompt()

if (a >= 0 && a <= 100) {
    if (a >= 80) {
        alert('A');
    } else if (a >= 70) {
        alert('B');
    } else if (a >= 60) {
        alert('C')
    } else if (a >= 50) {
        alert('D')
    } else if (a < 50) {
        alert('F')
    }
}