let a = prompt();

if (a != null && a.trim() != '' && !isNaN(a)) {
    let b = prompt();
    if (b != null && b.trim() != '' && !isNaN(b)) {
        let c = prompt();
        if (c != null && c.trim() != '' && !isNaN(c)) {   
            let array = [a , b , c]
            function compareNumbers(b, a) {
                    return a - b;
            }
            let e = String(array.sort(compareNumbers))

            console.log(e)
        }
    }
}
