// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {

                    event.preventDefault()
                    event.stopPropagation()
                } else {
                    let submitButton = form.getElementsByTagName("button")[0];
                    
                    submitButton.disabled = true;

                    // add animated spinning icon
                    let spinIcon = document.createElement("i");
                    spinIcon.className += "fas fa-circle-notch fa-spin";
                    submitButton.prepend(spinIcon);

                    // create the ajax request here
                    setTimeout(function () {
                        // get messages
                        let errorMessage = form.getElementsByClassName("alert-danger")[0].parentElement;
                        let successMessage = form.getElementsByClassName("alert-success")[0].parentElement;

                        // clear the message if exists
                        errorMessage.classList.add("d-none");
                        successMessage.classList.add("d-none");

                        // add success message
                        successMessage.classList.remove("d-none");

                        // or add error message based on the fetch result

                        // reset the form
                        form.reset();

                        // reset bootstrap validation
                        form.classList.remove("was-validated");


                        submitButton.removeChild(spinIcon);
                        submitButton.disabled = false;
                    }, 4000);

                    event.preventDefault();
                }

                form.classList.add('was-validated')
            }, false)
        });
})()