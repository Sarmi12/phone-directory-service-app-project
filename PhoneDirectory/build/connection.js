/**
 * Created by ABC on 12/16/2016.
 */

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
var con=''
if(env==='dev') {
    con ='mongodb://localhost:33428/phone';
}
else
{

    con='mongodb://phonedata:data.mlab.com:33428'

        }
Console.log(con);
exports.connectionString=con;