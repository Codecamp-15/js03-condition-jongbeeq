let browser = prompt()
let message

message =
    browser == "Edge"
        ? "You've got the Edge!"
        : browser == ("Chrome" || "Firefox" || "Safari" || "Opera")
        ? "Okay we support these browsers too"
        :"We hope that this page looks ok!"

alert(message)