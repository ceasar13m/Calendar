let closeWindow = () => {
    let thisWindow = document.getElementById('window');
    thisWindow.style.display = 'none';

    let bgLayerId = document.getElementById('bgLayerId');
    bgLayerId.style.display = 'none';
}


export default closeWindow;