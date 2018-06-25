$(document).ready(function () {
    $('input[type=file]').change(function () {
        $('#btnUpload').show();
        $('#divFiles').html('');
        for (var i = 0; i < this.files.length; i++) { //Progress bar and status label's for each file genarate dynamically
            var fileId = i;
            $("#divFiles").append('<div style="width: 100%;margin: auto;">' +
                '<div class="progress-bar progress-bar-striped active" id="progressbar_' + fileId + '" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div>' +
                '<input type="button" class="btn btn-danger" style="display:none;" id="cancel_' + fileId + '" value="cancel">' +
                // '<p class="progress-status" style="width: 80%; text-align: center;overflow: auto;" id="status_' + fileId + '"></p>' +
                '<p id="notify_' + fileId + '"></p>' +
                '</div>'+
            '</div>');
        }
    })
});

function uploadFile() {
    var file = document.getElementById("fileUploader");//All files
    for (var i = 0; i < file.files.length; i++) {
        uploadSingleFile(file.files[i], i);
    }
    $('#submit').show();
}

function uploadSingleFile(file, i) {
    var fileId = i;
    var ajax = new XMLHttpRequest();
    //Progress Listener
    ajax.upload.addEventListener("progress", function (e) {
        var percent = (e.loaded / e.total) * 100;
        $("#status_" + fileId).text(Math.round(percent) + "% uploaded, please wait...");
        $('#progressbar_' + fileId).css("width", percent + "%")
        $("#notify_" + fileId).text(file.name+" : Uploaded " + (e.loaded / 1048576).toFixed(2) + " MB of " + (e.total / 1048576).toFixed(2) + " MB ");
    }, false);
    //Load Listener
    ajax.addEventListener("load", function (e) {
        $("#status_" + fileId).text(event.target.responseText);
        $('#progressbar_' + fileId).css("width", "100%")

        //Hide cancel button
        var _cancel = $('#cancel_' + fileId);
        _cancel.hide();
    }, false);
    //Error Listener
    ajax.addEventListener("error", function (e) {
        $("#status_" + fileId).text("Upload Failed");
    }, false);
    //Abort Listener
    ajax.addEventListener("abort", function (e) {
        $("#status_" + fileId).text("Upload Aborted");
    }, false);

    ajax.open("POST", "/api/upload/UploadFiles"); // Your API .net, php

    var uploaderForm = new FormData(); // Create new FormData
    uploaderForm.append("file", file); // append the next file for upload
    ajax.send(uploaderForm);

    //Cancel button
    var _cancel = $('#cancel_' + fileId);
    _cancel.show();

    _cancel.on('click', function () {
        ajax.abort();
    })
}