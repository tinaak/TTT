const PETRUS = [
{
	nom:"ANCIAUX",
	prenom:"Nicolas"
},

{
	nom:"BOUGANIM",
	prenom:"Luc"
},
{
	nom:"ERSOZ",
	prenom:"Aydogan"
},
{
	nom:"ERSOZ",
	prenom:"Elif"
},
{
	nom:"KATSOURAKI",
	prenom:"Athanasia"
},
{
	nom:"LADJEL",
	prenom:"Riad"
},
{
	nom:"CADERE",
	prenom:"Saliha"
},
{
	nom:"LOUDET",
	prenom:"Julien"
},
{
	nom:"MANEA",
	prenom:"Oana"
},
{
	nom:"PUCHERAL",
	prenom:"Philippe"
},
{
	nom:"SANDU POPA",
	prenom:"Iulian"
},
{
	nom:"SCERRI",
	prenom:"Guillaume"
},
{
	nom:"SCHNEIDER",
	prenom:"Laurent"
},
{
	nom:"CADERE",
	prenom:"Paul"
},
{
	nom:"TSOLOVOS",
	prenom:"Dimitrios"
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
	$.each(PETRUS, function(key, value){
		url = url +value.nom+ "%20OR%20" +value.prenom+ "%20OR%20";
		});

	url = url + "*&fq=producedDateY_i:" +annee+"&rows=0&indent=true&facet=true&facet.field=docType_s";
	$.get(url, callBackGetSuccess).done(function(){
		
		});
};

function getPetrus(){
	getparannee(2016);	
}