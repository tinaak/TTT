const Almost = [ 
	{
		nom: "AIT%20%EL%20%MAHJOUB",
		prenom: "YOUSSEF"
	},
	{
		nom: "AUGER",
		prenom: "David"
	},
	{
		nom: "BABICHEVA",
		prenom: "Tatiana"
	},
	{
		nom: "BARTH",
		prenom: "Dominique"
	},
	{
		nom: "BEN%20%HASSINE",
		prenom: "Nesrine"
	},
	{
		nom: "BENNACEUR",
		prenom: "Mokhtar%20%Walid"
	},
	{
		nom: "BOUDARD",
		prenom: "Mélanie"
	},
	{
		nom: "BOUGUEROUA",
		prenom: "Sana"
	},
	{
		nom: "BOUHAMOUM",
		prenom: "Redouane"
	},
	{
		nom: "BABICHEVA",
		prenom: "Tatiana"
	},
	{
		nom: "CADERE",
		prenom: "Christian"
	},
	{
		nom: "CHEN",
		prenom: "Wei"
	},
	{
		nom: "CHOUTRI",
		prenom: "Amira"
	},
	{
		nom: "COUBAULT",
		prenom: "Amelie"
	},
	{
		nom: "COUCHENEY",
		prenom: "Pierre"
	},
	{
		nom: "EHOUNOU",
		prenom: "Joseph"
	},
	{
		nom: "FOURNEAU",
		prenom: "Jean-Michel"
	},
	{
		nom: "GARDY",
		prenom: "Danièle"
	},
	{
		nom: "GUIRAUD",
		prenom: "Mael"
	},
	{
		nom: "HIADSI",
		prenom: "Mohamed"
	},
	{
		nom: "HOCHE",
		prenom: "Toussaint"
	},
	{
		nom: "HOUISSA",
		prenom: "ASMA"
	},
	{
		nom: "ISSAD",
		prenom: "Mélissa"
	},
	{
		nom: "KLOUL",
		prenom: "Leïla"
	},
	{
		nom: "MARINCA",
		prenom: "Dana"
	},
	{
		nom: "MARSAN",
		prenom: "Laurent"
	},
	{
		nom: "MAUTOR",
		prenom: "Thierry"
	},
	{
		nom: "MENG",
		prenom: "Huixing"
	},
	{
		nom: "NOULEHO%20%ILEMO",
		prenom: "STEFI"
	},
	{
		nom: "PERRONIN",
		prenom: "Laurence"
	},
	{
		nom: "QUESSETTE",
		prenom: "Franck"
	},
	{
		nom: "RODIER",
		prenom: "Lise"
	},
	{
		nom: "SÉGARD",
		prenom: "Sébastien"
	},
	{
		nom: "STROZECKI",
		prenom: "Yann"
	},
	{
		nom: "VEKRIS",
		prenom: "Dimitrios"
	},
	{
		nom: "VIAL",
		prenom: "Sandrine"
	},
	{
		nom: "VOLAND",
		prenom: "Mathieu"
	},

];

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
	nom:"SANDU%20%POPA",
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
	nom:"FINANCE",
	prenom:"Beatrice"

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
	prenom:"Stephane"

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
	nom:"TONTHAT",
	prenom:"DaiHai"

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
var doc= 789;
var livre = 0;
var ji =0;
var jn =0;
var wrk = 0;
var autreconf =0;
var confinvi =0;
var poster = 0;
var autre =0;
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

function getparannee(annee, equipe){
	url = "https://api.archives-ouvertes.fr/search/DAVID/?q=*";
	$.each(equipe, function(key, value){
		url = url +value.nom+"%20OR%20";
		});

	url = url + "*&fq=producedDateY_i:" +annee+"&rows=0&indent=true&facet=true&facet.field=docType_s";
	$.get(url, callBackGetSuccess).done(function(){
		
		});
};

function getAlmost(){
	getparannee(2017, Almost);	
}
function getAdam(){
	getparannee(2017,ADAM);	
}
function getPetrus(){
	getparannee(2017, PETRUS);	
}
