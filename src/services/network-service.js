export function getEventsForMonth(date) {
    let requestBody = {
        date: date
    };


    return fetch('http://localhost:8080/get-month-events', {
        method: 'POST',
        body: JSON.stringify(requestBody)
    })

}


export async function addEvent(events) {

    let response = await fetch('http://localhost:8080/add-event', {
        method: 'POST',
        body: JSON.stringify(events)
    });

    let json = response.status;
    console.log(json);
}