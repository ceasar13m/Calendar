import EventsWindow from "../window/eventsWindow/events-window";
import React from "react";

let openModalWindow = (date) => {
    let thisWindow = document.getElementById('window');
    thisWindow.style.display = 'block';

    let bgLayerId = document.getElementById('bgLayerId');
    bgLayerId.style.display = 'block';


    // let calendar = document.getElementById('calendar');
    // calendar.appendChild(<EventsWindow />);
}


export default openModalWindow;