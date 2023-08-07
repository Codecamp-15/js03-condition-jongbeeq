let a = prompt()


if (a === null || a.trim() === '' || isNaN(a)) {
    alert('Invalid number')
} else {
    let b = prompt()
    if(b === null || b.trim() === '' || isNaN(b)) {
        alert('Invalid number')
    } else {
        let c = +a + +b
        alert(c)
    }
}





