  var data = {
        names: [
            { name: "Andrew" },
            { name: "Brian" },
            { name: "Charlie" }
        ]
    };

var data = { users: [
  {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
  {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
  {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
]};



{
  firstname: "Yehuda",
  lastname: "Katz",
}



{
  person: {
    firstname: "Yehuda",
    lastname: "Katz",
  },
}

[{"title":"My first todo","body":"My first todo's body"},
{"title":"My first todo 3","body":"My first todo's body 3"},
{"title":"SAD","body":"INSANE AMOUNTS OF SADNESS\n3"}]

{{#each todos}}
<div class='todo'>
    <div>{{title}}</div>
    <div>{{body}}</div>
</div>
{{/each}}





notation


<script>
  // compile the template
  var template = Handlebars.compile("Handlebars <b>{{doesWhat}}</b>");
  // execute the compiled template and print the output to the console
  console.log(template({ doesWhat: "rocks!" }));
</script>

var html = '';
for (var i = 0; i < data.users.length; i++) {
  html = html + template(data.users[i]);
  console.log(data.users[i]);
}


<div id="content-placeholder"></div>
<script id="some-template" type="text/x-handlebars-template">
  {{#users}}
    <div>{{firstName}} {{lastName}}</div>
  {{/users}}
</script>




