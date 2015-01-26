function populateDoctors($dom, doctorsArr) {

    var options = '';

    for (var docCount = 0; docCount < doctorsArr.length; docCount++) {
        var doc = doctorsArr[docCount];

        options += '<option>' + doc.name + '</option>';
    }

    $dom.append(options);

}

function constructPatientData() {

    return {
        name: $('#input-name').val(),
        age: Number($('#input-age').val()),
        mobile: Number($('#input-mobile').val()),
        email: $('#input-email').val(),
        registrationDate: $('#input-date').val(),
        doctor: $('#input-name').val()
    };

}

function populatePatients(patientsArr) {

    var $table = $('#patient-list-table');

    var tbody = '<tbody>';

    for (var patientCount = 0; patientCount < patientsArr.length; patientCount++) {
        var patient = patientsArr[patientCount];

        tbody += '<tr>' +
            '<td>' + patient.name + '</td>' +
            '<td>' + patient.age + '</td>' +
            '<td>' + patient.mobile + '</td>' +
            '</tr>';
    }

    tbody += '</tbody>';
    $table.append(tbody);

}