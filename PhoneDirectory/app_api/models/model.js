/**
 * Created by ABC on 12/16/2016.
 */
var mongoose = require('mongoose');

var phonedata = mongoose.Schema({
    FirstName:'String',
    LastName:'String',
    Phone:'String',
    Email:'String'
});

mongoose.model('model',phonedata,'phonedata');