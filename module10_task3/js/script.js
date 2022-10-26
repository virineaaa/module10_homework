const wsUri = "wss://echo-ws-service.herokuapp.com";
const inputMessage = document.querySelector('.input');
const btnSendMessage = document.querySelector('.j-btn-message');
const chatBox = document.querySelector('.chatBox');
const btnSendGeolocation = document.querySelector('.j-btn-geolocation');

let websocket = new WebSocket(wsUri); 

websocket.onopen = function(event) {
    console.log("CONNECTED");
};

websocket.onerror = function(event) {
    console.log(event.data)
};

websocket.onmessage = function(event) {
  console.log(event.data);
  addNewMessage(event.data, 'flex-start');
};

//event handler on button "btnSendMessage"
btnSendMessage.addEventListener('click',  () => {
    if (inputMessage.value!== "") {
        let message = inputMessage.value;
        //delay 800ms = 0,6sec
        setTimeout (websocketAnswer, 600);
        addNewMessage(message); 
    } else {
        console.log("Empty message");
    }   
});

//function for delayed response
function websocketAnswer () {
    let message = inputMessage.value;
    websocket.send(message);
    inputMessage.value = '';
}

//function for adding new massages
function addNewMessage(message, position='flex-end') {
        let newElement = `
        <p class='block__massage' style='align-self: ${position}'>
            ${message}
        </p>
    `;
    let chatHistory = chatBox.innerHTML;
    chatBox.innerHTML = chatHistory + newElement;
};

//determination of the geolocation
const error = () => {
    let error = "Mестоположение не может быть определено, откройте доступ." 
    addNewMessage(error);
}

const success = (geoposition) => {
    const latitude = geoposition.coords.latitude;
    const longitude = geoposition.coords.longitude;

    let geolocationLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    addGeolocationLink(geolocationLink);
}

//event handler on button "btnSendGeolocation"
btnSendGeolocation.addEventListener('click', () => {
    if (!navigator.geolocation) {
        console.log("Mестоположение недоступно ")
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    };
});

//function for adding geolocation link
function addGeolocationLink(geolocationLink) {
    let newElement = `
        <p class='block__massage' style='align-self: flex-end'> Текущая геолокация:&nbsp
            <a  href='${geolocationLink}' target='_blank' style='text-decoration: none'>перейти</a>
        </p>
    `;
    let chatHistory = chatBox.innerHTML;
    chatBox.innerHTML = chatHistory + newElement;
};
