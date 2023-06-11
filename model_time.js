const data =  require("./data.json");

function formatTimeFromNumericToObject(time) {
    const minutes = time.split(":")[0];
    const secondes = time.split(":")[1];
    return {
        "minutes": parseInt(minutes),
        "secondes": parseInt(secondes)
    };
}
function addAllTimePlaylist(allTimesFormated) {
    const totalMinutes = allTimesFormated.reduce((accumulator, currentValue ) => accumulator + currentValue.minutes, 0);
    const totalSecondes = allTimesFormated.reduce((accumulator, currentValue ) => accumulator + currentValue.secondes, 0);
    return {
        "totalMinutes": totalMinutes,
        "totalSecondes": totalSecondes
    }
}
function extractMinutesFromSecondes(totalTime) {
    const secondes = totalTime.totalSecondes % 60
    const minutes = Math.floor(totalTime.totalSecondes / 60)
    return {
        "totalMinutes": minutes,
        "totalSecondes": secondes
    }
}
function extractHoursFromMinutes(totalTime) {
    const hours = Math.floor((totalTime.totalMinutes) / 60)
    const minutes = totalTime.totalMinutes % 60

    return {
        "totalHours": hours,
        "totalMinutes": minutes
    }
}
function showHoursMinustesSecondes(totalTime) {
    const extractHoursAndRemainsMinutes = extractHoursFromMinutes(totalTime)
    const secondes = extractMinutesFromSecondes(totalTime).totalSecondes
    const minutes = extractHoursAndRemainsMinutes.totalMinutes
    const hours = extractHoursAndRemainsMinutes.totalHours

    console.log(`hours : ${hours}\nminutes : ${minutes}\nsecondes : ${secondes}`);
}



function main () {
    const formatedTimeAllPlaylist = data.map(t => formatTimeFromNumericToObject(t));
    const totalMinutesAndSecondes = addAllTimePlaylist(formatedTimeAllPlaylist);
    showHoursMinustesSecondes(totalMinutesAndSecondes);
}

main()







