(function($) {
    "use strict";
    const buttons = document.querySelectorAll(".signup-btn");
    const sections = document.querySelectorAll(".signuptabcontent");
    const buttons2 = document.querySelectorAll(".login-btn");
    const sections2 = document.querySelectorAll(".logintabcontent");
    $('#forgotform1').hide()
    $('#forgotform2').hide()
    $('#message2').hide()
    $('#message4').hide()

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            buttons.forEach((btn) => {
                btn.classList.remove("active");
            });
            btn.classList.add("active");
            const id = btn.id;
            sections.forEach((section) => {
                section.classList.remove("active");
            });
            const req = document.getElementsByClassName(`signuptabcontent${id}`);
            req[0].classList.add("active");
        })
    })
    buttons2.forEach((btn) => {
        btn.addEventListener("click", () => {
            buttons2.forEach((btn) => {
                btn.classList.remove("active");
            });
            btn.classList.add("active");
            const id = btn.id;
            sections2.forEach((section) => {
                section.classList.remove("active");
            });
            const req = document.getElementsByClassName(`logintabcontent${id}`);
            req[0].classList.add("active");
        })
    })

    var myInput = document.getElementById("psw");
    var capital = document.getElementById("capital");
    var length = document.getElementById("length");
    var myInput2 = document.getElementById("psw2");
    var capital2 = document.getElementById("capital2");
    var length2 = document.getElementById("length2");

    // When the user clicks on the password field, show the message box
    myInput.onfocus = function() {
        console.log(focus)
        document.getElementById("message").style.display = "block";
    }
    myInput2.onfocus = function() {
        document.getElementById("message3").style.display = "block";
    }


    // When the user clicks outside of the password field, hide the message box
    myInput.onblur = function() {
        document.getElementById("message").style.display = "none";
    }
    myInput2.onblur = function() {
            document.getElementById("message3").style.display = "none";
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
    myInput2.onkeyup = function() {
        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if (myInput2.value.match(upperCaseLetters)) {
            capital2.classList.remove("invalid");
            capital2.classList.add("valid");
        } else {
            capital2.classList.remove("valid");
            capital2.classList.add("invalid");
        }


        // Validate length
        if (myInput2.value.length >= 8) {
            length2.classList.remove("invalid");
            length2.classList.add("valid");
        } else {
            length2.classList.remove("valid");
            length2.classList.add("invalid");
        }
    }

    //toggle form tab
    $('.sponsor-toggle').click(function(e) {
            $('.tabcontent1').removeClass('active');
            $('.tabcontent2').addClass('active');
            $('.btn1').removeClass('active');
            $('.btn2').addClass('active');
        })
        //toggle password
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#psw');
    const togglePassword2 = document.querySelector('#togglePassword2');
    const cpassword = document.querySelector('#cpsw');
    const togglePassword3 = document.querySelector('#togglePassword3');
    const password3 = document.querySelector('#psw2');
    const togglePassword4 = document.querySelector('#togglePassword4');
    const cpassword4 = document.querySelector('#cpsw2');


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
    togglePassword3.addEventListener('click', function(e) {
        // toggle the type attribute
        const type = password3.getAttribute('type') === 'password' ? 'text' : 'password';
        password3.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('fa-eye-slash');
    });
    togglePassword4.addEventListener('click', function(e) {
        // toggle the type attribute
        const type = cpassword4.getAttribute('type') === 'password' ? 'text' : 'password';
        cpassword4.setAttribute('type', type);
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
    $('input[name="cpassword2"]').keyup(function(e) {

        if ($('input[name="password2"]').val() !== $('input[name="cpassword2"]').val()) {
            $('#message4').show()
        } else {
            $('#message4').hide()
        }
    })


    //submit affiliate form
    $('#affiliate-form').submit((e) => {
        e.preventDefault();
        grecaptcha.ready(function() {
            grecaptcha.execute('6LcLOlMiAAAAANvxCU24fYZ7K2tWOMMpztXN_oW5', {
                action: 'submit'
            }).then(function(token) {
                // Add your logic to submit to your backend server here.
                var loading_html =
                    '<div style="height:150px;width:150px;margin: 0 auto;"><img style="width: 100%;" src="https://skiracing.com.au/wp-content/plugins/NeoGallery26-09-2018-340/img/ajax-loader.gif" /></div>';
                Swal.fire({
                    html: loading_html,
                    showConfirmButton: false,
                    showCancelButton: false
                })

                var data = new FormData();

                data.append('fullname', $('input[name="fullname"]').val())
                data.append('phonenumber', $('input[name="phonenumber"]').val())
                data.append('emailaddress', $('input[name="emailaddress"]').val())
                data.append('address', $('input[name="address"]').val())
                data.append('fullname_kin', $('input[name="fullname_kin"]').val())
                data.append('phonenumber_kin', $('input[name="phonenumber_kin"]').val())
                data.append('password', $('input[name="password"]').val())

                createAffiliate(data)
            })
        });
    })


    //submit sponsor form
    $('#sponsor-form').submit((e) => {
        e.preventDefault();
        grecaptcha.ready(function() {
            grecaptcha.execute('6LcLOlMiAAAAANvxCU24fYZ7K2tWOMMpztXN_oW5', {
                action: 'submit'
            }).then(function(token) {
                // Add your logic to submit to your backend server here.
                var loading_html =
                    '<div style="height:150px;width:150px;margin: 0 auto;"><img style="width: 100%;" src="https://skiracing.com.au/wp-content/plugins/NeoGallery26-09-2018-340/img/ajax-loader.gif" /></div>';
                Swal.fire({
                    html: loading_html,
                    showConfirmButton: false,
                    showCancelButton: false
                })

                var data = new FormData();

                data.append('firstname', $('input[name="firstname"]').val())
                data.append('lastname', $('input[name="lastname"]').val())
                data.append('phonenumber', $('input[name="sponsorphone"]').val())
                data.append('emailaddress', $('input[name="sponsoremail"]').val())
                data.append('address', $('input[name="sponsoraddress"]').val())
                data.append('companyname', $('input[name="company"]').val())
                data.append('country', $('select[name="country"]').val())
                data.append('password', $('input[name="password2"]').val())

                createSponsor(data)
            })
        });
    })

    $('#loginform1').submit((e) => {
        e.preventDefault();
        grecaptcha.ready(function() {
            grecaptcha.execute('6LcLOlMiAAAAANvxCU24fYZ7K2tWOMMpztXN_oW5', {
                action: 'submit'
            }).then(function(token) {
                // Add your logic to submit to your backend server here.
                var loading_html =
                    '<div style="height:150px;width:150px;margin: 0 auto;"><img style="width: 100%;" src="https://skiracing.com.au/wp-content/plugins/NeoGallery26-09-2018-340/img/ajax-loader.gif" /></div>';
                Swal.fire({
                    html: loading_html,
                    showConfirmButton: false,
                    showCancelButton: false
                })

                var data = new FormData();

                data.append('username', $('input[name="affiliateusername"]').val())
                data.append('password', $('input[name="affiliatepassword"]').val())

                handleLogin('affiliate', data)
            })
        });
    })

    $('#loginform2').submit((e) => {
        e.preventDefault();
        grecaptcha.ready(function() {
            grecaptcha.execute('6LcLOlMiAAAAANvxCU24fYZ7K2tWOMMpztXN_oW5', {
                action: 'submit'
            }).then(function(token) {
                // Add your logic to submit to your backend server here.
                var loading_html =
                    '<div style="height:150px;width:150px;margin: 0 auto;"><img style="width: 100%;" src="https://skiracing.com.au/wp-content/plugins/NeoGallery26-09-2018-340/img/ajax-loader.gif" /></div>';
                Swal.fire({
                    html: loading_html,
                    showConfirmButton: false,
                    showCancelButton: false
                })

                var data = new FormData();

                data.append('username', $('input[name="sponsorusername"]').val())
                data.append('password', $('input[name="sponsorpassword"]').val())

                handleLogin('sponsor', data)
            })
        });
    })
    $('#forgotbtn1').click(e => {
        e.preventDefault()
        $('#loginform1').hide()
        $('#forgotform1').show();

    })
    $('#forgotform1').submit((e) => {
        e.preventDefault()
        var data = new FormData();
        data.append('emailaddress', $('input[name="affiliateforgotemail"]').val())
        axios.post('https://sparknigeria.herokuapp.com/api/affliaterecoverymail/', data)
            .then(function(response) {
                if (response.data.status) {
                    Swal.fire({
                        title: 'Success!',
                        text: response.data.message,
                        icon: 'success'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = "energy_exchange.html";
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
    })
    $('#forgotbtn2').click(e => {
        e.preventDefault()
        $('#loginform2').hide()
        $('#forgotform2').show();

    })
    $('#forgotform2').submit((e) => {
        e.preventDefault()
        var data = new FormData();
        data.append('emailaddress', $('input[name="sponsorforgotemail"]').val())
        axios.post('https://sparknigeria.herokuapp.com/api/businessinvestorrecoverymail/', data)
            .then(function(response) {
                if (response.data.status) {
                    Swal.fire({
                        title: 'Success!',
                        text: response.data.message,
                        icon: 'success'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = "energy_exchange.html";
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
    })

    function createAffiliate(data) {

        axios.post('https://sparknigeria.herokuapp.com/api/registeraffliate/', data)
            .then(function(response) {
                console.log(response);
                if (response.data.status) {
                    Swal.fire({
                        title: 'Success!',
                        text: response.data.message,
                        icon: 'success'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = "energy_exchange.html";
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

    function createSponsor(data) {
        // for (let i of data.entries()) {
        //     console.log(i[0] + '  =>  ' + i[1])
        // }
        axios.post('https://sparknigeria.herokuapp.com/api/registerbusiness/', data)
            .then(function(response) {
                console.log(response);
                if (response.data.status) {
                    Swal.fire({
                        title: 'Success!',
                        text: response.data.message,
                        icon: 'success'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = "energy_exchange.html";
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

    function handleLogin(type, data) {
        // for (let i of data.entries()) {
        //     console.log(i[0] + '  =>  ' + i[1])
        // }
        let url = type == 'affiliate' ? 'https://sparknigeria.herokuapp.com/api/affliatelogin/' : 'https://sparknigeria.herokuapp.com/api/sponsorlogin/'
        axios.post(url, data)
            .then(function(response) {
                console.log(response.data);
                if (response.data.status) {
                    localStorage.setItem('affiliate', JSON.stringify(response.data.data))
                    localStorage.setItem('token', response.data.token)
                    Swal.fire({
                        title: 'Success!',
                        text: 'Welcome, ' + response.data.data.fullname,
                        icon: 'success'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.href = "affiliate_dashboard.html";
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

})(window.jQuery);