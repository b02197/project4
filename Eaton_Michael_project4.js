//Michael Eaton
//SDI 1301
//Project 4



//Does a string follow a pattern like a phone number?

//Function to determine if the string follows a phone number pattern.
var checkPhoneNumber = function(){
        
//These determine the position of the dashes in the phone number        
    var endAreaCode     = phoneNumber.indexOf("-"),
            startLocalCode  = phoneNumber.indexOf("-")+1,
            endLocalCode    = phoneNumber.lastIndexOf("-"),
            startNumberCode = phoneNumber.lastIndexOf("-")+1,
            endNumberCode   = phoneNumber.length;

//These take the informaation from the last code and determine the number of digits in the setion        
        var areaCode    = phoneNumber.substring(0,endAreaCode),
                localCode   = phoneNumber.substring(startLocalCode,endLocalCode),
                numberCode  = phoneNumber.substring(startNumberCode,endNumberCode),
                areaCount   = (endAreaCode),
                localCount  = (endLocalCode - startLocalCode),
                numberCount = (phoneNumber.length - (phoneNumber.lastIndexOf("-")+1));
                               
            if(0 <= areaCode <= 999){areaCode = true}    //This determines if the area code is between 0 and 999
                else areaCode = false;
                
            if(areaCount == 3){areaCode = true}          //This determines if the area code if 3 digits long
                else areaCode = false;
                
            if(0 <= localCode <= 999){localCode = true}  //This determine if the second 3 numbers are between 0 and 999
                else localCode = false;
                    
            if(localCount == 3){localCode = true}       //This determines if the second 3 numbers are 3 digits long
                else localCode = false;
                    
            if(0 <= numberCode <= 9999){numberCode = true} //This determines if the last 4 are between 0 and 9999
                else numberCode = false;
                    
            if(numberCount == 4){numberCode = true}       //This determines if the last 4 numbers are 4 digits long
                else numberCode = false;
                
                if(areaCode && localCode && numberCode == true){     //This checks to see if all conditions are true or false
                    check = true
                    
                    } else
                
                    check = false;
                    
                return check;    //Returns Boolean                          
};
 
 
//Does the string follow a pattern like an email address?

//Function to determine if the email address follows a pattern.        
var checkEmailAddress = function(){
    
//Variables to detern the postion of the @ and .

    var endUser   = emailAddress.indexOf("@"),
        startHost = emailAddress.indexOf("@")+1,
        endHost   = emailAddress.lastIndexOf("."),
        startTLD  = emailAddress.lastIndexOf(".")+1,
        endTLD    = emailAddress.length;
    
//These variable take the information from the last variables and determine the length of the address

    var emailUser = emailAddress.substring(0,endUser),
        emailHost = emailAddress.substring(startHost,endHost),
        emailGtld = emailAddress.substring(startTLD,endTLD),
        emailUser = (endUser),
        emailHost = (endHost - startHost),
        emailGtld = (emailAddress.length - (emailAddress.lastIndexOf(".")+1));
        
        
        if(emailUser >1){emailUser = true}          //checks to see if username is greater then 1 charater
            else emailUser = false;
        
        if(emailHost >1){emailHost = true}          //checks to see if the host name is great then 1 character
            else emailHost = false;
            
        if(emailGtld == 3){emailGtld = true}        // checks to see if the gTLD is equal to 3 charaters
            else emailGtld = false;
        
    
        
            if(emailUser && emailHost && emailGtld == true){        //Checks to see if address if formatted to the pattern
                email = true
            } else
                email = false;
                
            return email;           //returns boolean
};
   

//Is the string a URL(Does it start with http:// or http://)

//function to see if the url matches http:// or https://
var checkUrl = function(){
    
    var urlResults = false;
    
    if(url.substring(0,7) == "http://"){    //check to see if url matches http://
        urlResults = true
    }
     if (url.substring(0,8) == "https://"){   //check to see if url matches https://
        urlResults = true}
        
     
    return urlResults;
    };
   
    


    


//String outputs
console.log("String outputs");
var phoneNumber = "123-456-7890";            //Variable for phone number
console.log(checkPhoneNumber());             //Output for phone number
var emailAddress = "Meaton@fullsail.edu";    //Variable for Email
console.log(checkEmailAddress());             //Output for Email
var url = "http://fulsail.edu";                //Variable for url
console.log(checkUrl());                        //output for url

