import {API_URL} from './helpers/constants';

document.addEventListener('DOMContentLoaded', () => {
  const data: FormData = new FormData();
  const uploadBtn: HTMLButtonElement = <HTMLButtonElement>document.getElementById('upload');
  const fileInput: HTMLInputElement = <HTMLInputElement>document.getElementById('file');
  const progressElement: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('progress');

  uploadBtn.addEventListener('click', () => {
    if (fileInput.files.length) {
      const file: File = fileInput.files[0];
      data.append('domain_list', file);
      const worker = new Worker('helpers/upload-worker.ts');
      // uploadFile(data);
      console.log(API_URL);
    }
  });


});

