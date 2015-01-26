$(function () {

    // Register patient btn click - show form
    $('#register-option-btn').click(function (event) {

        $('#action-center').load('templates/register.html', function (data) {

            $.ajax({
                url: '/doctors',
                dataType: 'jsonp',
                success: function (data) {
                    ApplicationContext.doctors = data;
                    populateDoctors($('#input-doc'), data);
                }
            });

        });

    });

    // Register user submit
    $('body').on('click', '#register-submit-btn', function () {

        var patient = constructPatientData();

        $.post( "/patient", patient, function () {

            alertify.success("Patient registered.");

        });

    });

    // Manage patients
    $('#manage-option-btn').click(function () {

        $('#action-center').load('templates/patientlist.html', function (data) {

            $.ajax({
                url: '/patients',
                dataType: 'jsonp',
                success: function (data) {
                    ApplicationContext.patients = data;
                    populatePatients(data);
                }
            });

        });

    });

});