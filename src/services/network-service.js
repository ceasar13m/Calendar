export  function getEvent(date) {
    let requestBody = {
        date: date
    };

   return  fetch('http://localhost:8080/get-events', {
        method: 'POST',
        body: JSON.stringify(requestBody)
    })

}

export  function getEventsCounts(date) {
    let requestBody = {
        date: date
    };

    return  fetch('http://localhost:8080/get-events-counts', {
        method: 'POST',
        body: JSON.stringify(requestBody)
    })

}

export async function addEvent(event) {

    let response = fetch('http://localhost:8080/add-event', {
        method: 'POST',
        body: JSON.stringify(event)
    });

    return response.status;
}

export async function deleteEvent(event) {
    let response = fetch('http://localhost:8080/delete-event', {
        method: 'POST',
        body: JSON.stringify(event)
    });

    return response.status;
}