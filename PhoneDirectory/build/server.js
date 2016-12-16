/**
 * Created by ABC on 12/15/2016.
 */
/*
var express = require('express');

var mongoose = require('mongoose');
var con = require('./connection');
var model = require('./model');

var Add = mongoose.model('add', model,'phone');

mongoose.connect(con.connectionString);
var app = express();

app.use(express.static(__dirname+'/public'));
app.use( '/node_modules',express.static(__dirname+'/node_modules'));

app.get('/getPhone',function(req,res){
Add.find(function(err,docs) {
    if (err) {
        console.log(err);
    }
    res.json(docs);
})
    res.json(PhoneDirectoryInfo);
});
var port = 3030;

app.listen(port,function(){
    console.log('server running on port number:'+ port);
});
*/

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var model = require('./model');
var connection = require('./connection');
var Info = mongoose.model('info', model, 'infos');
var favicon = require('serve-favicon');

app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.static(__dirname + '/public'));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use(bodyparser.json());

mongoose.connect(connection.connectionString);

app.get('/getinfo',function(req,res){

    Info.find(function (err, docs) {
        if (err) return console.error(err);
        res.json(docs);
    });
});

app.get('/getinfo/:id',function(req,res){
    id = req.params.id;
    Info.findOne({'_id': mongoose.Types.ObjectId(id)},function (err, docs) {
        if (err) return console.error(err);
        res.json(docs);
    });
});

app.post('/getinfo',function(req,res){
    var info = new  Info (
        req.body
    );

    info.save(function(err){
        if (err) return console.error(err);
        res.json(info);
    });
});


app.delete('/getinfo/:id',function(req,res){

    var id = req.params.id;
    Info.remove( {'_id': mongoose.Types.ObjectId(id)}, function(error,docs){
        if (error) {
            console.log(error);
        }
        res.json(docs);
    })
});


app.put('/getinfo/:id',function(req,res) {
    var id = req.params.id;
    console.log(req.body.firstname);
    console.log(req.body.lastname);
    console.log(mongoose.Types.ObjectId(id));
    var query = { '_id': mongoose.Types.ObjectId(id) };
    var update = { '$set': { 'firstname': req.body.firstname, 'lastname':req.body.lastname} };
    var options = { 'new': true };
    Info.findOneAndUpdate(query, update, options, function (err, docs) {
        if (err)   console.log(err);
        res.json(docs);
    });

});

var Port = process.env.PORT || 3000;
app.listen(Port);
console.log("server running on port " + Port);