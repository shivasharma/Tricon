﻿/// <reference path="../knockout-3.4.0.js" />
/// <reference path="../jquery-3.1.1.min.js" />

function AuthorFormViewModel() {
    var self = this;

    self.saveCompleted = ko.observable(false);
    self.sendiing = ko.observable(false);

    self.author = {
        firstName: ko.observable(),
        lasttName: ko.observable(),
        biography: ko.observable()
    };

    self.ValidateAndSave = function (form) {
        if (!$(form).Valid())
            return false;
        self.sendiing(true);
        // include the anti forgery token
        self.author.__RequestVerificationToken = form[0].value;

        $.ajax({
            url: 'Create',
            type: 'post',
            contentType: 'application/x-www-form-urlencoded',
            data: ko.toJS(self.author)
        })
    .success(self.successfulSave)
    .error(self.errorSave)
    .complete(function () { self.sending(false) });
    };
    self.successfulSave = function () {
        self.saveCompleted(true);

        $('.body-content').prepend('<div class="alert alert-success"> <strong>Success!</strong> The new author has been saved.</div>');
        setTimeout(function () { location.href = './'; }, 1000);
    };

    self.errorSave = function () {
        $('.body-content').prepend(
              '<div class="alert alert-danger <strong>Error!</strong> There was an error creating the author.</div>');
    };
}