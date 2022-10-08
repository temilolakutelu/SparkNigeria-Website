$(document).ready(function() {
    let searchParams = new URLSearchParams(window.location.search)
    let param = searchParams.get('token')
    $('input#userid').val(param)
    $('#message2').hide()
    var myInput = document.getElementById("psw");
    var capital = document.getElementById("capital");
    var length = document.getElementById("length");
    // When the user clicks on the password field, show the message box
    myInput.onfocus = function() {
        document.getElementById("message").style.display = "block";
    }



    // When the user clicks outside of the password field, hide the message box
    myInput.onblur = function() {
        document.getElementById("message").style.display = "none";
    }

    // When the user starts to type something inside the password field
    myInput.onkeyup = function() {
        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if (myInput.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }


        // Validate length
        if (myInput.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
    }

    //toggle password
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#psw');
    const togglePassword2 = document.querySelector('#togglePassword2');
    const cpassword = document.querySelector('#cpsw');


    togglePassword.addEventListener('click', function(e) {
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });
    togglePassword2.addEventListener('click', function(e) {
        // toggle the type attribute
        const type = cpassword.getAttribute('type') === 'password' ? 'text' : 'password';
        cpassword.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });
    //confirm password 
    $('input[name="cpassword"]').keyup(function(e) {

        if ($('input[name="password"]').val() !== $('input[name="cpassword"]').val()) {
            $('#message2').show()
        } else {
            $('#message2').hide()
        }
    })
    $('#resetform').submit((e) => {
        e.preventDefault();
        var loading_html =
            '<div style="height:150px;width:150px;margin: 0 auto;"><img style="width: 100%;" src="https://skiracing.com.au/wp-content/plugins/NeoGallery26-09-2018-340/img/ajax-loader.gif" /></div>';
        Swal.fire({
            html: loading_html,
            showConfirmButton: false,
            showCancelButton: false
        })

        var data = new FormData();

        data.append('userid', $('input[name="token"]').val())
        data.append('password', $('input[name="password"]').val())

        handleSubmit(data)
    })


    function handleSubmit(data) {
        // for (let i of data.entries()) {
        //     console.log(i[0] + '  =>  ' + i[1])
        // }
        axios.post('https://api.sparknigeria.isparkng.com/api/affliaterecoverpassword/', data)
            .then(function(response) {
                if (response.data.status) {
                    Swal.fire({
                        title: 'Success!',
                        text: response.data.message + 'proceed to login',
                        icon: 'success'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = 'energy_exchange.html'
                        }
                    })
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: response.data.message,
                        icon: 'error'
                    })
                }


            })
            .catch(function(error) {
                console.log(error);
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error'
                })
            });
    }
})