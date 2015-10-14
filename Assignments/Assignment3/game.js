var o=['અ','આ','ઇ','ઈ','ઉ','ઊ','ઊ','ઐ','ઓ','ઓ','અં','અં','અં','અં','ઑ','ક','ખ','ગ','ઘ','ઙ','ચ','છ','જ','ઝ','ઞ','ટ','ઠ','ડ','ઢ','ણ','ત','થ','દ',' ધ','ન','પ','ફ','બ','ભ','મ','ય','ર','લ','વ','શ','ષ','સ','હ','ળ','ક્ષ','જ્ઞ','ા','િ','ી','ુ','ૂ','ે','ૈ','ો','ૌ','ં','ઃ','ૃ','ૅ','ૉ'];
var main=['પધારો','નમસ્તે','શુભ','પ્રભાત','મહેરબાની','તમે','મને','સ્વાગત','ભાવ','ભાઈ','સાલ','મુબારક','નાતાલ','ફાયર','ગુજરાતી','લખાવું','શુભકામના','એકલો','સ્ટૉપ','શુભકામનાઓ ','નસીબ',' સારા',' બપોરે','રાત્રે',' પટતી']

var j=0;
var i=0;
var word='';
var count=0;
var score=0;

var mainarray=o[0];

var getElementId=[11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55];


console.log(mainarray);

document.getElementById("Score").innerHTML= 	"શું" + "તમે" + "ગુજરાતી" + "બોલો" + "છો" + "?";

function setlanguage()							//insert the gujrati alphabets 
{
	score = 0;
	var t = 11;
	var h=0;
	var lang = document.getElementById('Language');							
	var langval = lang.options[lang.selectedIndex].value;
	console.log('value is ' + langval);
	for(t;t<=55;t++)
	{
		var get = document.getElementById(t);
		
			
		var rand = o[Math.floor(Math.random() * o.length)];
		document.getElementById(t).innerHTML=rand;

		if (t%5 == 0)
			t = t+5;
	}
	word='';
	
}

function regenerate()															//  randomization of the table again
{	
	console.log('inside regenerate');
	word='';
	j=0;	
	var lang = document.getElementById('Language');								// Returns the language 'gujrati'
	var langval = lang.options[lang.selectedIndex].value;
	console.log('inside regenerate: ' + langval);
	document.getElementById("Selectedletter").innerHTML='';

	
	if(langval=='gujrati')														// Regenerate gujrati table
	{
	for(var i=0;i<25;i++)
	{
		var item = o[Math.floor(Math.random()*(o.length-1))];
		document.getElementById(getElementId[j]).innerHTML = item;				// Insert randomized value in table
		j++;
	}
	}
	document.getElementById("Score").innerHTML= 	" શું "  +  " તમે " + " ગુજરાતી " + " બોલો " + " છો " + "?";
	score=0;
	
}
setlanguage();

function getdata(a,b)															
{
	a=a-1;
	b=b-1;
	var data='';
	var data=document.getElementById("tbl").rows[a].cells[b].childNodes[0].innerHTML;
	word=word.concat(data);
	document.getElementById("Selectedletter").innerHTML="સુ " + "પ્રભાત!"  +  word;
	document.getElementById("Score").innerHTML='';
	
}

function Check()																// Check  entered word is valid word or not.
{
	
	var flag=0;
	console.log(word);
	var lang = document.getElementById('Language');
	var langval = lang.options[lang.selectedIndex].value;
	if(langval=='gujrati')														// Check gujrati word  its equal or not
	{
	for(var k=0;k<main.length;k++)
	{
		console.log(main[k]);
		if(word==main[k])
		{
		flag=1;
		score=score+2;
		document.getElementById("Score").innerHTML= "સારા"  + "નસીબ" + score;		// Word found
		break;
		}
	}
	if(flag==0)
		document.getElementById("Score").innerHTML= "સમજણ" + "પટતી" +  "નથી" ;		// Word is not found
	flag=0;
	}

	word='';
	document.getElementById("Selectedletter").innerHTML='';
}
