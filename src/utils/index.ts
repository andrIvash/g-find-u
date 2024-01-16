export const sanitize = (str: string|null|undefined) => {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
        "(": '',
        ")": ''
    };
    const reg = /[&<>"'/()]/ig;
    let result: string;
    try {
        result = str.replace(reg, (match)=>(map[match]));
    } catch (e) {
        console.log("can' sanitize")
    }
    return result;
}