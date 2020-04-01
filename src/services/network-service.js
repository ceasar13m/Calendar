const Url = "http://ec2-3-87-201-249.compute-1.amazonaws.com";
const Port = "8080";

export  function getEvent(date) {
    let requestBody = {
        date: date.getTime()
    };

   return  fetch(`${Url}:${Port}/get-events`, {
        method: 'POST',
        body: JSON.stringify(requestBody)
    })

}

export  function getEventsCounts(date) {
    let requestBody = {
        date: date.getTime()
    };

    return  fetch(`${Url}:${Port}/get-events-counts`, {
        method: 'POST',
        body: JSON.stringify(requestBody)
    })

}

export async function addEvent(event) {
    event.date = event.date.getTime();
    let response = fetch(`${Url}:${Port}/add-event`, {
        method: 'POST',
        body: JSON.stringify(event)
    });
    return response.status;
}

export async function deleteEvent(event) {
    event.date = event.date.getTime();
    let response = fetch(`${Url}:${Port}/delete-event`, {
        method: 'POST',
        body: JSON.stringify(event)
    });

    return response.status;
}

