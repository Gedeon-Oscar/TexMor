'use strict';

function disableButtons(buttons) {
    for (var i = 0; i < buttons.length; i++) {
        $(buttons[i]).addClass('disabled');
    }
};

function showLoader(button) {
    $(button).removeClass('d-none');
};

function showLoaderAndDisableButtons(button, buttons) {
    showLoader(button);
    disableButtons(buttons);
};

function showLoaderAndDisableButtons(button, buttons, requiredInputs) {
    if (requiredInputs != undefined) {
        for (var i = 0; i < requiredInputs.length; i++) {
            if ($(requiredInputs[i]).val() === "") return;
        }
    }
    showLoader(button);
    disableButtons(buttons);
};

function showToast(typeMsg, heading, msg) {
    var toastrCfg = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "250",
        "hideDuration": "1000",
        "timeOut": "3000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "slideDown",
        "hideMethod": "slideUp"
    };

    if (typeMsg === 'error') {
        toastr.error(msg, heading, toastrCfg);
    }
    if (typeMsg === 'success') {
        toastr.success(msg, heading, toastrCfg);
    }
    if (typeMsg === 'info') {
        toastr.info(msg, heading, toastrCfg);
    }
    if (typeMsg === 'warning') {
        toastr.warning(msg, heading, toastrCfg);
    }
};

