export function dateAsString(date){
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ob ${date
        .toTimeString()
        .substring(0, 5)}`
}