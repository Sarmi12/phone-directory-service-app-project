http://apilayer.net/api/validate
    ? access_key = YOUR_ACCESS_KEY
    & number = 14158586273
    
    {
  "valid": true,
  "number": "14158586273",
  "local_format": "4158586273",
  "international_format": "+14158586273",
  "country_prefix": "+1",
  "country_code": "US",
  "country_name": "United States of America",
  "location": "Novato",
  "carrier": "AT&T Mobility LLC",
  "line_type": "mobile"
}      
/*API ERROR Code*/        {
  "success": false,
  "error": {
    "code": 210,
    "type": "no_phone_number_provided",
    "info": "Please specify a phone number. [Example: 14158586273]"    
  }
}
                
/*
Callback function*/
CALLBACK_FUNCTION ({
{
  "valid": true,
  "number": "14158586273",
  "local_format": "4158586273",
  "international_format": "+14158586273",
  "country_prefix": "+1",
  "country_code": "US",
  "country_name": "United States of America",
  "location": "Novato",
  "carrier": "AT&T Mobility LLC",
  "line_type": "mobile"
}         
})                

/*country location Data*/
[...]
"country_code": "US",
"country_name": "United States of America",
"location": "Novato",     
[...]           


{
"US": {
"country_name": "USA",
"dialling_code": "+93"
},
"AL": {
"country_name": "Albania",
"dialling_code": "+355"
},
"DZ": {
"country_name": "Algeria",
"dialling_code": "+213"
},
"AS": {
"country_name": "American Samoa",
"dialling_code": "+1"
},
[...]   