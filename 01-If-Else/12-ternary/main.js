let a = prompt()


if (a >= 0 && a <= 100) {
    message =
        a >= 80
        ? "A"
        : a >= 70
        ? "B"
        : a >= 60
        ? "C"
        : a >= 50
        ? "D"
        : "F"

    alert(message)
}