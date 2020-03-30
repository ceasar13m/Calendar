export  function getEvent(date) {
    let requestBody = {
        date: date.getTime()
    };

   return  fetch('http://ec2-3-87-201-249.compute-1.amazonaws.com:8080/get-events', {
        method: 'POST',
        body: JSON.stringify(requestBody)
    })

}

export  function getEventsCounts(date) {
    let requestBody = {
        date: date.getTime()
    };

    return  fetch('http://ec2-3-87-201-249.compute-1.amazonaws.com:8080/get-events-counts', {
        method: 'POST',
        body: JSON.stringify(requestBody)
    })

}

export async function addEvent(event) {
    event.date = event.date.getTime();
    let response = fetch('http://ec2-3-87-201-249.compute-1.amazonaws.com:8080/add-event', {
        method: 'POST',
        body: JSON.stringify(event)
    });
    return response.status;
}

export async function deleteEvent(event) {
    event.date = event.date.getTime();
    let response = fetch('http://ec2-3-87-201-249.compute-1.amazonaws.com:8080/delete-event', {
        method: 'POST',
        body: JSON.stringify(event)
    });

    return response.status;
}

