(function(){
    "use strict";
    var http = require('http');
    var nopt = require("nopt");
    var dwz = require("../index");
    var opts = nopt(
        { "url": String }
    );
    dwz.create(opts.url,function(d){
        console.log(d)
    },function(d){
        console.log(d)
    })

})()