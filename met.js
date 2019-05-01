const ADAM = [
{
	nom:"ALSHAER",
	prenom:"Mohammad"

},
{
	nom:"BOUZEGHOUB",
	prenom:"Mokrane"

},
{
	nom:"Mokrane",
	prenom:"Mariem"

},
{
	nom:"BRICAGE",
	prenom:"Marie"

},
{
	nom:"COHELO DA SLIVA",
	prenom:"Ticiana"

},
{
	nom:"FINANCE",
	prenom:"Béatrice"

},
{
	nom:"KANTARINIS",
	prenom:"Alexandros"

},
{
	nom:"KEDAD",
	prenom:"Zoubida"

},
{
	nom:"KELLOU",
	prenom:"Kenza"

},
{
	nom:"KOUTRAKI",
	prenom:"Maria"

},
{
	nom:"LOPES",
	prenom:"Stéphane"

},
{
	nom:"LOYER",
	prenom:"Yann"

},
{
	nom:"MASRI",
	prenom:"Ali"

},
{
	nom:"MOUSHEIMISH",
	prenom:"Raef"

},
{
	nom:"MUSTAPHA",
	prenom:"Ahmad"

},
{
	nom:"OUKSILI",
	prenom:"Hanane"

},
{
	nom:"PREDA",
	prenom:"Nicoleta"

},
{
	nom:"RAMOLY",
	prenom:"Nathan"

},
{
	nom:"RIHANY",
	prenom:"Mohamad"

},
{
	nom:"TAHER",
	prenom:"Yehia"

},
{
	nom:"TON THAT",
	prenom:"Dai Hai"

},
{
	nom:"YEH",
	prenom:"Laurent"

},
{
	nom:"ZEITOUNI",
	prenom:"ZEITOUNI"

},
{
	nom:"ZEMRI",
	prenom:"ZEMRI"

}

];

var url;

var callBackGetSuccess = function(data){
	console.log(url);
	
	//var ref = '';
	/*$.each(ADAM, function(key, value){
		ref += '<tr>';
		ref += '<td>'+value.docid+'</td>';
		ref += '<td>'+value.docid+'</td>';
		ref += '<td>'+value.docid+'</td>';
		ref += '</tr>';
	});
	$('#data').append(ref);*/

}


function build(id){
	var ref = '';
		ref += '<tr>';
		ref += '<td>'+doc+'</td>';
		ref += '<td>'+livre+'</td>';
		ref += '<td>'+ji+'</td>';
		ref += '</tr>';
	$('#data').append(ref);
}

function getparannee(annee){
	url = "https://api.archives-ouvertes.fr/search/DAVID/?q=*";
	$.each(ADAM, function(key, value){
		url = url +value.nom+ "%20OR%20" +value.prenom+ "%20OR%20";
		});

	url = url + "*&fq=producedDateY_i:" +annee+"&rows=0&indent=true&facet=true&facet.field=docType_s";
	$.get(url, callBackGetSuccess).done(function(){
		
		});
};

function getAdam(){
	getparannee(2016);	
}