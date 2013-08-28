var http = require('http');


module.exports.create = function(url,success,error){
    var postdata = 'url='+url;
    var options = {
        host: 'dwz.cn',
        port: 80,
        path: '/create.php',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length' : postdata.length
        }
    };
    var req = http.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            var j = JSON.parse(chunk);
            success({
                tinyurl: j.tinyurl,
                longurl: j.longurl
            });
        });
    });

    req.on('error', function(e) {
        error(e);
    });

// write data to request body
    req.write(postdata);
    req.write('\n');
    req.end();
}
module.exports.query = function(url,success,error){
    var postdata = 'tinyurl='+url;
    var options = {
        host: 'dwz.cn',
        port: 80,
        path: '/query.php',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length' : postdata.length
        }
    };
    var req = http.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            var j = JSON.parse(chunk);
            success({
                longurl: j.longurl,
                tinyurl: url
            });
        });
    })

    req.on('error', function(e) {
        error(e);
    });

// write data to request body
    req.write(postdata);
    req.write('\n');
    req.end();
}
