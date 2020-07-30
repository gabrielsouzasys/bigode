var data_v1 = {
  titulo: "Titulo",
  li1: "li1",
  li2: "li2",
  li3: "li3"
};

var data_v2 = { 
  dados_v2 : {
	  name	: "aa",
	  last: "bb"
	}
};

var data_v3= { dados_v3 : [
  		{username: "alan", 
		firstName: "Alan", 
		lastName: "Johnson",
 		email: "alan@test.com" },
	      {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
 	      {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
]};

var data_v4 = [ {
    name: "0514",
    callerid: "Ramal",
    state: "unknown",
    calls: [],
    hasCalls: false
}, {
    name: "0633",
    callerid: "Khatya Pena",
    state: "online",
    calls: [],
    hasCalls: false
}];





var dados_v4 = [{"nome" : "testes1", "sobrenome": "testes2"}];


var data = { users: [
  {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
  {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
  {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
]};






//Source
var destino_html0 = document.getElementById('v0').innerHTML;
var destino_html1 = $('#v1').html();
var destino_html2 = document.getElementById('v2').innerHTML;
var destino_html3 = document.getElementById('v3').innerHTML;
var destino_html4 = document.getElementById('v4').innerHTML;

//Templates
var template0 = Handlebars.compile(destino_html0);
var template1 = Handlebars.compile(destino_html1);
var template2 = Handlebars.compile(destino_html2);
var template3 = Handlebars.compile(destino_html3);
var template4 = Handlebars.compile(destino_html4);


console.log(data_v2.dados_v2);

//Inject Templates on HTML
var HTML0 = template0({ "passa_parametro" : "recebe_valor" });
var HTML1 = template1(data_v1);//injeta os dados no tempalte html
var HTML2 = template2(data_v2.dados_v2);
var HTML3 = template3(data_v3.dados_v3);
var HTML4 = template3(data_v4);



var html = '';
for (var i = 0; i < data.users.length; i++) {
  html = html + template2(data.users[i]);
  console.log(data.users[i]);
}


HTML2 = html;

console.log(HTML0);
console.log(HTML1);
console.log(HTML2);
console.log(HTML3);
console.log(HTML4);


document.getElementById('v0').innerHTML = HTML0;
document.getElementById('v1').innerHTML = HTML1;
document.getElementById('v2').innerHTML = HTML2;
document.getElementById('v3').innerHTML = HTML3;
document.getElementById('v4').innerHTML = HTML4;

