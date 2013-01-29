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

//These take the variables from the last code and determine the number of digits in the setion        
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
                    
                return check;                              
};
        
   

   
    


    


//String outputs
console.log("String outputs");
var phoneNumber = "123-456-7890";      //Variable for phone number
console.log(checkPhoneNumber());       //Output for phone number




