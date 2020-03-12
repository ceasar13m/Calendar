export function getEventsForMonth(date) {
    let requestBody = {
        date: date
    };


    let response = fetch('http://localhost:8080/get-month-events', {
        method: 'POST',
        body: JSON.stringify(requestBody)
    });

    // let json = await response.json();
    let json =  response.status;
    console.log(json);
}



export  function addEvent(events) {

    let response = fetch('http://localhost:8080/add-event', {
        method: 'POST',
        body: JSON.stringify(events)
    });

    let json =  response.status;
    console.log(json);
}