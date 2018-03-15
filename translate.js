// Google Translate keyword search
(() => {
    let strRaw = "%s";
    let strArray = strRaw.split("%20");
    if (strRaw === "") {
        location = "http://translate.google.com/";
    } else if (strArray.length === 1) {
        location = `http://translate.google.com/translate?prev=_t&hl=en&ie=UTF-8&u=${location.href}&sl=auto&tl=${strArray[0]}`;
    } else if (strArray.length === 2) {
        location = `http://translate.google.com/translate?prev=_t&hl=en&ie=UTF-8&u=${location.href}&sl=${strArray[0]}&tl=${strArray[1]}`;
    } else {
        const text = encodeURIComponent(strArray.slice(2).join(" "));
        location = `http://translate.google.com/translate_t?sl=${strArray[0]}&tl=${strArray[1]}#${strArray[0]}|${strArray[1]}|${text}`;
    }
})()