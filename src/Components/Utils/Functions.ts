export function capitalizeFirstChar(str : string) {
    // Verifica se la stringa è vuota o nulla
    if (!str) {
        return str;
    }
    //Primo char in maiusc
    const firstChar = str.charAt(0).toUpperCase();
    const restOfStr = str.slice(1);
    return firstChar + restOfStr;
}