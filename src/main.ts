import {API_URL} from './helpers/constants';
import * as workerPath from 'file-loader?name=[name].js!./helpers/upload-worker';

document.addEventListener('DOMContentLoaded', () => {

  const uploadBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('upload');
  const fileInput: HTMLInputElement = <HTMLInputElement>document.getElementById('file');
  const progressElement: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('progress');

  uploadBtn.addEventListener('click', () => {
    if (fileInput.files.length) {
      const file: File = fileInput.files[0];
      const worker = new Worker('./src/helpers/' + (<any>workerPath).default);
      worker.postMessage({file, API_URL});
      worker.onmessage = function(event){
        progressElement.innerText = `uploaded ${event.data.toFixed(0)} %`;
      };
      console.log(worker);
    }
  });
});

