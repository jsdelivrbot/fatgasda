API.on('chat', function(obj) {
    var user = API.getUser().id
    if(obj.message.indexOf("teste de intenligencia") != -1){
            API.sendChat("Parece funcionar u.u");
        }
});
API.on('chat', function(obj) {
    var user = API.getUser().id
    if(obj.message.indexOf("quais são as regras Loli ?") != -1){
            API.sendChat("nossas regras? aqui estão elas :D http://goo.gl/i7JUIX");
        }
});