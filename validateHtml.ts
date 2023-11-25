async function isValidHtml(html:string) {
    const val = html.split("<></>")
    if(val.length % 2 == 0){
        return true
    }
}