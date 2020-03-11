export async function getEventsForMonth(date) {
    let requestBody = {
        date: date
    };


    let response = await fetch('http://localhost:8080/get-month-events', {
        method: 'POST',
        body: JSON.stringify(requestBody)
    });

    // let json = await response.json();
    let json =  response.status;
    console.log(json);
}



export async function addEvent(event) {

    let response = await fetch('http://localhost:8080/add-event', {
        method: 'POST',
        body: JSON.stringify(event)
    });

    let json =  response.status;
    console.log(json);
}