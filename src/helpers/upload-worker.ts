import {API_URL} from './constants';

function uploadFile(data: FormData) {
    const request: XMLHttpRequest = new XMLHttpRequest();
    request.open('POST', API_URL);
    request.upload.addEventListener('progress', function(e) {
        const percentCompleted: number = (e.loaded / e.total) * 100;
        // progressElement.innerText = `uploaded ${percentCompleted.toFixed(0)} %`;
    });
    request.addEventListener('load', function(e) {
        console.log(request.status);
        console.log(request.response);
    });
    request.send(data);
}
