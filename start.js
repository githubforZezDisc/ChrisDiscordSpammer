const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  client.channels.find('id','328283804831580160').send("@everyone");
});


var readline = require('readline-sync');

var name = readline.question("discord email: ");
var password = readline.question("password: ");

var request = require('request');

const url =
  "https://discordapp.com/api/v6/auth/login";

request.post(
	url,
	{ json: {email: name, password: password, undelete: 'false', captcha_key: 'null'}},
	function (error, response, body) {
        client.login(body['token']);
    	}
);
