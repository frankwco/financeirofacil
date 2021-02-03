<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>Coleta de Lixo Hospitalar e Resíduos de Saúde em Maringá e Região</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="description" content="DS Transportes especialista em coleta, transporte, tratamento e destinação final de lixo hospitalar e resíduos de saúde para laboratórios, hospitais, clínicas, médicos, odontologistas e farmácias em Maringá e região."/>
	<meta name="keywords" content="lixo hospitalar, saúde, tratamento de lixo, laboratórios, hospitais, clínicas, clínicas médicas, clínicas odontológicas, farmácias, paraná, maringá, região, nova esperança">
	<!-- css -->
	<link href="css/bootstrap.min.css" rel="stylesheet" />
	<link href="plugins/flexslider/flexslider.css" rel="stylesheet" media="screen" />
	<link href="css/cubeportfolio.min.css" rel="stylesheet" />
	<link href="css/style.css" rel="stylesheet" />

	<!-- Theme skin -->
	<link id="t-colors" href="skins/blue.css" rel="stylesheet" />

	<!-- boxed bg -->
	<link id="bodybg" href="bodybg/bg1.css" rel="stylesheet" type="text/css" />

	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	<link rel="shortcut icon" href="img/icone.png" type="image/x-icon">

	<!-- =======================================================
    Theme Name: Sailor
    Theme URL: https://bootstrapmade.com/sailor-free-bootstrap-theme/
    Author: BootstrapMade
    Author URL: https://bootstrapmade.com
	======================================================= -->

</head>

<body>

	<div id="wrapper">

<?php include 'cabecalho.html'; ?>

		<section id="content" style="padding:1px 0 20px 0;">
			<div class="container">

				<div class="row">
					<div class="col-md-8 col-md-offset-2">
						<h2>Entre em contato conosco. <small> Atenderemos você por telefone, WhatsApp ou preenchendo o formulário abaixo</small></h2>
						<hr class="colorgraph">

					</div>

					<div class="col-md-8 col-md-offset-2">
					<a href="https://api.whatsapp.com/send?phone=5544999279338&text=Olá, gostaria de um orçamento!" target="_blank" class="btn btn-primary" style="margin-bottom:10px; width: 150px"> <i class="fa fa-whatsapp"></i>&nbsp;&nbsp;Whats Online</a>
	<a href="tel:44999279338" class="btn btn-primary" style="margin-bottom:10px; width: 150px"><span class="glyphicon glyphicon-earphone"></span>&nbsp;&nbsp;(44)&nbsp;99927-9338</a>
		<a href="tel:443252-4480" class="btn btn-primary" style="margin-bottom:10px; width: 150px"><span class="glyphicon glyphicon-earphone"></span>&nbsp;&nbsp;(44)&nbsp;3252-4480</a>
					</div>
				</div>


				<div class="row">
					<div class="col-md-8 col-md-offset-2">
						<div id="contactform">
							<div class="form-group">
					<div id="result"></div>
				</div>
			</div>
		</div>
					<div class="col-md-8 col-md-offset-2">
						<div id="contactform">
							<div class="form-group">
								<label for="inputNome">Nome</label>
								<input type="text" class="form-control" id="inputNome" placeholder="Nome">
							</div>
							<div class="form-group">
								<label for="inputTelefone">Telefone</label>
								<input type="text" class="form-control" id="inputTelefone" placeholder="Telefone">
							</div>
						  <div class="form-group">
						    <label for="inputEmail">E-mail</label>
						    <input type="email" class="form-control" id="inputEmail" placeholder="E-mail">
						  </div>

						  <div class="form-group">
						    <label id="demo" for="inputMensagem">Mensagem</label>
						    <textarea class="form-control" id="inputMensagem" rows="4"></textarea>
						  </div>
							<button type="submit" id="submit" name="submit" class="btn btn-primary">Enviar Mensagem</button>
						<div>
					</div>
				</div>

				<div class="row">
					<div class="col-lg-12">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.757665215309!2d-52.224688084945186!3d-23.17904315346991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9492c51caf37b2e1%3A0xc477029c8af7f8d4!2sR.+Cidade+Alta%2C+270%2C+Nova+Esperan%C3%A7a+-+PR%2C+87600-000!5e0!3m2!1spt-BR!2sbr!4v1513282718201" width="100%" height="375" frameborder="0" style="border:0" allowfullscreen></iframe>
					</div>
				</div>

			</div>


		</section>

		<!-- Modal -->
<div class="modal fade" id="modalSucesso" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Mensagem</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
				<div class="alert alert-success" role="alert">
	  		Mensagem enviada com sucesso. Em breve entraremos em contato!!
			</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal Erro -->
<div class="modal fade" id="modalErro" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content">
	<div class="modal-header">
		<h5 class="modal-title" id="exampleModalLabel">Mensagem</h5>
		<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
			<span aria-hidden="true">&times;</span>
		</button>
	</div>
	<div class="modal-body">
		<div class="alert alert-danger" role="alert">
		Algo deu errado, tente mais tarde ou entre em contato por telefone. Pedimos desculpas pelo transtorno!!
	</div>

	</div>
	<div class="modal-footer">
		<button type="button" class="btn btn-primary" data-dismiss="modal">Fechar</button>
	</div>
</div>
</div>
</div>



	</div>
	<a href="#" class="scrollup"><i class="fa fa-angle-up active"></i></a>

	<!-- Placed at the end of the document so the pages load faster -->
	<script src="js/jquery.min.js"></script>
	<script src="js/modernizr.custom.js"></script>
	<script src="js/jquery.easing.1.3.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="plugins/flexslider/jquery.flexslider-min.js"></script>
	<script src="plugins/flexslider/flexslider.config.js"></script>
	<script src="js/jquery.appear.js"></script>
	<script src="js/stellar.js"></script>
	<script src="js/classie.js"></script>
	<script src="js/uisearch.js"></script>
	<script src="js/jquery.cubeportfolio.min.js"></script>
	<script src="js/google-code-prettify/prettify.js"></script>
	<script src="js/animate.js"></script>
	<script src="js/custom.js"></script>

	<script>
// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
// 		//alert("aqe"+this.status);
//     if (this.readyState == 4) {
// 			if(this.status == 200){
//     //  document.getElementById("modal-body").innerHTML = this.responseText;
//
// 			$("#modalSucesso").modal("show");
// 			document.getElementById("inputNome").value="";
// 			document.getElementById("inputTelefone").value="";
// 			document.getElementById("inputEmail").value="";
// 			document.getElementById("inputMensagem").value="";
// 		}else{
// 			$("#modalErro").modal("show");
// 		}
//     }
//   };
//   xhttp.open("POST", "submeter.php", true);
// 	xhttp.setRequestHeader('Content-Type', 'application/json');
//   // xhttp.send();
// 	xhttp.send(JSON.stringify({
//     nome: document.getElementById("inputNome").value,
// 		telefone: document.getElementById("inputTelefone").value,
// 		email: document.getElementById("inputEmail").value,
// 		mensagem: document.getElementById("inputMensagem").value
// }));
// }

$("#submit").click(function() {
//get input field values
var nome = $('#inputNome').val();
var telefone = $('#inputTelefone').val();
var email = $('#inputEmail').val();
var mensagem = $('#inputMensagem').val();
var flag = true;
/********validate all our form fields***********/
/* Name field validation  */
if(nome==""){
		$('#inputNome').css('border-color','red');
		flag = false;
}
/* email field validation  */
if(email==""&&telefone==""){
	if(email==""){
		$('#inputEmail').css('border-color','red');
	}
	if(telefone==""){
		$('#inputTelefone').css('border-color','red');
	}
		flag = false;
}
/* message field validation */
if(mensagem=="") {
	 $('#inputMensagem').css('border-color','red');
		flag = false;
}
/********Validation end here ****/
/* If all are ok then we send ajax request to email_send.php *******/
if(flag)
{
	//loadDoc();
		$.ajax({
				type: 'POST',
				url: "submeter.php",
				dataType: 'json',
				data: 'nome='+nome+'&email='+email+'&mensagem='+mensagem+'&telefone='+telefone,
				beforeSend: function() {
				//alert("a");
						$('#submit').attr('disabled', true);
						$('#submit').after('<span class="wait">&nbsp;<img style="width:40px" src="img/loading.gif" alt="" /></span>');
					//	alert("a2");
				},
				complete: function(data) {
				//	alert("a3");
						$('#submit').attr('disabled', false);
						$('.wait').remove();

					//	alert("a4");
				},
				success: function(data){
					//	alert(data);
						if(data.type == 'error')
						{
								output = '<div class="error">'+data.text+'</div>';
								$("#modalErro").modal("show");
						}else{
								output = '<div class="success">'+data.text+'</div>';
								$('input[type=text]').val('');
								$('input[type=email]').val('');
								$('#contactform textarea').val('');
								$("#modalSucesso").modal("show");
						}

						$("#result").hide().html(output).slideDown();
						}
		});
}
});
//reset previously set border colors and hide all message on .keyup()
$("#contactform input, #contactform textarea").keyup(function() {
$("#contactform input, #contactform textarea").css('border-color','');
$("#result").slideUp();
});
</script>


<?php include 'rodape.html';

?>

</body>

</html>
