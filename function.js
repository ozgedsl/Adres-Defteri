
$(document).ready(function(){
	$('#ekle').click(function(){
		var adsoyad = $('#adsoyad').val();
		var numara = $('#numara').val();
		var email = $('#email').val();
		var empty = true;
			$('input[type="text"]').each(function(){
   			if($(this).val()==""){
      		swal("Bir yerde hata var!", "Boş alan bırakmamalısın...");
      		slide().stop();
    		}
 		});
		$('#satir').append('<tr data-name="'+adsoyad+'" data-number="'+numara+'"data-email="'+email+'"><th scope="row"></th><td>'+ adsoyad +'</td><td>'+ numara +'</td><td>'+ email +'</td><td><button id="Sil" type="button" class="btn btn-light">Sil</button><button id="duzenle" type="button" class="btn btn-light">Düzenle</button></td></tr>');
	    

	   
	});
	return empty;
});

$('body').on('click','#Sil',function(){
	$(this).parents('tr').remove();
	
});

$('body').on('click','#duzenle',function(){
	var adsoyad=$(this).parents('tr').attr('data-name');
	var numara=$(this).parents('tr').attr('data-number');
	var email=$(this).parents('tr').attr('data-email');

	$(this).parents('tr').find('td:eq(0)').html('<input id="adsoyad" value="'+adsoyad+'">');
	$(this).parents('tr').find('td:eq(1)').html('<input id="numara" value="'+numara+'">');
	$(this).parents('tr').find('td:eq(2)').html('<input id="email" value="'+email+'">');

	$(this).parents('tr').find("td:eq(3)").prepend('<button id="kaydet" type="button" class="btn btn-light">Kaydet</button><button id="iptal" type="button" class="btn btn-light">İptal</button>')
    $(this).hide();
});

$('body').on('click','#kaydet',function(){
	var adsoyad = $(this).parents('tr').find('#adsoyad').val();
	var numara = $(this).parents('tr').find('#numara').val();
    var email = $(this).parents('tr').find('#email').val();

    $(this).parents('tr').find('td:eq(0)').text(adsoyad);
    $(this).parents('tr').find('td:eq(1)').text(numara);
    $(this).parents('tr').find('td:eq(2)').text(email);

    $(this).parents('tr').attr('data-name', adsoyad);
    $(this).parents('tr').attr('data-number', numara);
    $(this).parents('tr').attr('data-email', email);

    $(this).parents('tr').find('#duzenle').show();
    $(this).parents('tr').find('#iptal').remove();
    $(this).parents('tr').find('#kaydet').remove();
    swal({
  		title: "Kayıt Başarılı!",
  		text: "Teşekkürler!",
  		icon: "success",
  		button: "Tamam",
		});
});

$('body').on('click','#iptal',function(){
	var adsoyad=$(this).parents('tr').attr('data-name');
	var numara=$(this).parents('tr').attr('data-number');
	var email=$(this).parents('tr').attr('data-email');
    
    $(this).parents('tr').find('td:eq(0)').text(adsoyad);
    $(this).parents('tr').find('td:eq(1)').text(numara);
    $(this).parents('tr').find('td:eq(2)').text(email);
    

	$(this).parents('tr').find('#duzenle').show();
	$(this).parents('tr').find('#kaydet').remove();
    $(this).parents('tr').find('#iptal').remove();

});