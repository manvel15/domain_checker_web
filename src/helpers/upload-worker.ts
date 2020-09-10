function uploadFile(data: FormData, url: string) {
    const request: XMLHttpRequest = new XMLHttpRequest();
    request.open( 'POST', url );
    request.upload.addEventListener('progress', function(e) {
        const percentCompleted: number = (e.loaded / e.total) * 100;
        postMessage(percentCompleted);
    });
    request.addEventListener('load', function(e) {
        console.log(request.status);
        console.log(request.response);
    });
    request.send(data);
}

self.addEventListener('message', (event: MessageEvent) => {
    const file: File = event.data.file;
    const url: string = event.data.API_URL;
    const formData: FormData = new FormData();
    formData.append('domain_list', file);
    uploadFile(formData, url);
}, false);
