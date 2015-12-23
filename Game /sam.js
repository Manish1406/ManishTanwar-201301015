//var o=['अ','आ','इ','ई','उ','ऊ','ए','ऐ','ओ','औ','क','ख','ग','घ','ङ','च','छ','ज','झ','ञ','ट','ठ','ड','ढ','ण','त','थ','द','ध','न','प','फ','ब','भ','म','य','र','ल','व','श','ष','स','ह','ा','ि','ी','ु','ू','ृ',' ॄ','ॅ','े','ै','ॉ','ो','ौ'];
//var main=
//['साफ़','अख़बार','चिट्ठी','छात्र','छात्रा','जवाब','जूता','ज़्यादातर','दिल्ली','दुबला','पतला','धन्यवाद','नमस्कार','नया','नए','नैइ','अध्यापक','अभी','सिर्फ़','सुन्दर','हम','हवादार','हाँ','हिन्दुस्तानी','हिन्दू','रात' ,'के ','खाने' ,'के' ,'बाद' ,'वक्ता' ,'ने' ,'इतनी' ,'विचित्र' ,'तरह' ,'से' ,'हाथों' ,'इशारे' ,'किए' ,'कि' ,'हम' ,'सबने' ,'वे' ,'जो' ,'बोल' ,'रहे' ,'थे' ,'उससे' ,'ज्यादा' ,'ध्यान ','उनके','हाथों','की','और ','दिया'];

var o=['અ','આ','ઇ','ઈ','ઉ','ઊ','ઊ','ઐ','ઓ','ઓ','અં','અં','અં','અં','ઑ','ક','ખ','ગ','ઘ','ઙ','ચ','છ','જ','ઝ','ઞ','ટ','ઠ','ડ','ઢ','ણ','ત','થ','દ',' ધ','ન','પ','ફ','બ','ભ','મ','ય','ર','લ','વ','શ','ષ','સ','હ','ળ','ક્ષ','જ્ઞ','ા','િ','ી','ુ','ૂ','ે','ૈ','ો','ૌ','ં','ઃ','ૃ','ૅ','ૉ'];
var main=['પધારો','નમસ્તે','શુભ','પ્રભાત','મહેરબાની','તમે','મને','સ્વાગત','ભાવ','ભાઈ','સાલ','મુબારક','નાતાલ','ફાયર','ગુજરાતી','લખાવું','શુભકામના','એકલો','સ્ટૉપ','શુભકામનાઓ ','નસીબ',' સારા',' બપોરે','રાત્રે',' પટતી'];

var marathi = ['अ','आ','इ','ई','उ','ऊ','ए','ऐ','ओ','औ','क','ख','ग','घ','ङ','च','छ','ज','झ','ञ','ट','ठ','ड','ढ','ण','त','थ','द','ध','न','प','फ','ब','भ','म','य','र','ल','व','श','ष','स','ह','ा','ि','ी','ु','ू','ृ',' ॄ','ॅ','े','ै','ॉ','ो','ौ'];
var marathi_word = ['अंधार' ,'कोरडा', 'सुकला','वाळवंट','निर्णय','कठीण','ठरवणे', 'दया', 'मारणे','माहित असणे','मोठा','शिकलेला','पातळी','पातळी','जीवन','हलके','प्रकाश', 'आवडणे','रेष','यादी','साहित्य','दर्जा,गुणवत्ता','प्रश्न','राणी','शांतता','सारखे','म्हणणे','शाळा','विज्ञान','ऋतू','दुसरा','प्रभाग','बघणे','स्वत:','पाठवणे','सेवा','सात','अनेक','अरुंद'];

var getElementId=[11,12,13,14,15,21,22,23,24,25,31,32,33,34,35,41,42,43,44,45,51,52,53,54,55];
//var get=[111,112,113,121,122,123,131,132,133,141,142,143,151]
var j=0;
var i=0;
var word='';
var count=0;
var score=0;

var mainarray=o[0];
console.log(mainarray);
var audio = new Audio('short.mp3');
audio.play();

document.getElementById("Score").innerHTML="keep " + "searching " + "the " + "words " + "as " + " much " + "as " + "you " + "can. ";

//console.log('juss outside setlanguage');

function setlanguage()							//Loads the alphabets in the table as the user selects the language option
{
	score = 0;
	var t = 11;
	var h=0;
	var lang = document.getElementById('Language');							// Returns the language selected by the user
	var langval = lang.options[lang.selectedIndex].value;
	console.log('value is ' + langval);
	for(t;t<=55;t++)
	{
		var get = document.getElementById(t);
		
		if (langval == 'marathi')												// For marathi, generate random table
		{
			var rand = marathi[Math.floor(Math.random() * marathi.length)];
		}
		
		if (langval=='gujrati')													// For gujrati, generate random table
		{
			var rand = o[Math.floor(Math.random() * o.length)];
		}
		document.getElementById(t).innerHTML=rand;

		if (t%5 == 0)
			t = t+5;
	}
	word='';
}

function regenerate()															// Regenerate the randomize the table
{	
	console.log('inside regenerate');
	word='';
	j=0;	
	var lang = document.getElementById('Language');								// Returns the language chosen by user
	var langval = lang.options[lang.selectedIndex].value;
	console.log('inside regenerate: ' + langval);
	document.getElementById("Selectedletter").innerHTML='';

	if(langval=='marathi')														// Regenerate marathi table
	{
	for(var i=0;i<25;i++)
	{
		var item = marathi[Math.floor(Math.random()*(marathi.length-1))];
		document.getElementById(getElementId[j]).innerHTML = item;
		j++;
	}
	}
	if(langval=='gujrati')														// Regenerate hindi table
	{
	for(var i=0;i<25;i++)
	{
		var item = o[Math.floor(Math.random()*(o.length-1))];
		document.getElementById(getElementId[j]).innerHTML = item;				// Insert randomized value in table
		j++;
	}
	}
	document.getElementById("Score").innerHTML="Keep " + "searching " + "the " + "words " + "as " + " much " + "as " + "you " + "can. " ;
	score=0;
}
setlanguage();

function getdata(a,b)															// Retrieve the data from the cell clicked
{
	a=a-1;
	b=b-1;
	var data='';
	var data=document.getElementById("tbl").rows[a].cells[b].childNodes[0].innerHTML;
	word=word.concat(data);
	document.getElementById("Selectedletter").innerHTML="Your " + "word: " + word;
	document.getElementById("Score").innerHTML='';
}

function Check()																// Check whether entered word is valid word or not.
{
	//if(word=='')
	//	alert("Select atleast 1 letter");
	var flag=0;
	console.log(word);
	var lang = document.getElementById('Language');
	var langval = lang.options[lang.selectedIndex].value;
	if(langval=='gujrati')														// Check for Hindi word whether its equal or not
	{
	for(var k=0;k<main.length;k++)
	{
		console.log(main[k]);
		if(word==main[k])
		{
		flag=1;
		score=score+2;
		document.getElementById("Score").innerHTML="Congratulations!! " + "Your " + "score " + "is " + score;		// Word found
		break;
		}
	}
	if(flag==0)
		document.getElementById("Score").innerHTML="Sorry!! " + "Word " + "not " + "found.";		// Word is not valid
	flag=0;
	}
	if(langval=='marathi')
	{																			// Check for Telugu word whether its equal or not
	for(var k=0;k<marathi_word.length;k++)
	{
		console.log(main[k]);
		if(word==marathi_word[k])
		{
		flag=1;
		score=score+2;
		document.getElementById("Score").innerHTML="Congratulations!! " + "Your " + "score " + "is " + score;	//Word found
		break;
		}
	}
	if(flag==0)
		document.getElementById("Score").innerHTML="Sorry!! " + "Word " + "not " + "found.";			//Word not valid
	flag=0;
	}
	word='';
	document.getElementById("Selectedletter").innerHTML='';
}
