export function millstominandseconds(millis){
    const min = Math.floor(millis/60000);
    const seconds = ((millis % 60000)/1000).toFixed(0);
    return seconds == 60 ? min + 1 + ":00" : min + ":" +(seconds < 10 ? "0" : "") + seconds;
}