document.getElementById('uploadButton').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function() {
    const file = this.files[0];
    const allowedFileType = 'application/pdf';

    if (file && file.type === allowedFileType) {
        // Here, you can handle the file upload logic.
        console.log('File selected:', file.name);
    } else {
        alert('Please select a PDF file.');
    }
});
