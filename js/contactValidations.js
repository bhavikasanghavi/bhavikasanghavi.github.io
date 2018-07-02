// Hello.
//
// This is The Scripts used for contact form validations and sending email!
//
//
$(document).ready(function(){
	$('#contactSubmit').click(function(){
		//email validations
		var emailflag = "";
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var signupEmail=$.trim($("#contactInputEmail").val());  
		if(re.test(signupEmail)){
			$("#contactInputEmail").css('border','1px solid #d6d6d6');
			emailflag =true;
		}
		else{
			$("#contactInputEmail").val("");
			if(signupEmail){ 
				$("#contactInputEmail").attr("placeholder", "Please enter a valid Email");
			}
			else{
				$("#contactInputEmail").attr("placeholder", "Please enter Email");
				$("#contactInputEmail").attr('class', 'newClass form-control inp-field');
				$("#contactInputEmail").css('border-color','#f9780d');
			}
			emailflag =false;
			//return false;
		}
		//contact validations
		var mobnoflag = "";
		//var pattern = /[0-9\+\-\)\(]/;
		var pattern = /(7|8|9)\d{9}/;
		var mobno=$("#contact-inputMobile").val();
		if(pattern.test(mobno) && (mobno.length==10) ){
			$("#contact-inputMobile").css('border','1px solid #d6d6d6');
			//return true;
			mobnoflag = true;
		} else {
			$('#contact-inputMobile').val("");
			if(mobno=='') {
				var errstr='Please enter a valid Mobile Number';
				 $("#contact-inputMobile").attr("placeholder", "Please enter a valid Mobile Number");
					$("#contact-inputMobile").attr('class', 'newClass form-control inp-field');
			} else {
				var errstr='Please enter 10 digit Mobile Number';
				
			   $("#contact-inputMobile").attr("placeholder", "Please enter 10 digit Mobile Number");
					$("#contact-inputMobile").attr('class', 'newClass form-control inp-field ');
			}
			$("#contact-inputMobile").css('border-color','#f9780d');
			//return false;
			mobnoflag = false;
		}
		//message validations
		var fnameflag = "";
            var fname=$.trim($("#contactInputMessage").val());
            if(fname){
                $("#contactInputMessage").css('border','1px solid #d6d6d6');
                messageflag = true;
            } else {
				$("#contactInputMessage").attr('text', '');
				$("#contactInputMessage").attr("placeholder", "Please enter message!").blur();
				$("#contactInputMessage").attr('class', 'newClass form-control inp-field');
				$("#contactInputMessage").css('border-color','#f9780d');
                messageflag = false;
            }
			console.log(emailflag,mobnoflag,messageflag);
			if((emailflag==true) && (mobnoflag==true) && (messageflag==true)){
				alert("Thank you for contacting us. We'll soon get in touch with you!");
				$("#contactInputEmail").attr('text', '');
				$("#contact-inputMobile").attr('text', '');
				$("#contactInputMessage").attr('text', '');
				//var id=  <?php echo "test"; ?>;
			}
	});
});