//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];
/* In this particularly exercise you need to get the attention on the For Loop because since this is an array so contact[index] (aka 0, 1, 2, 3) the array.lenght is 4 so we need to when through each index and check firstName === firstName the same for the prop go through each index of array checking the prop received */

function lookUpProfile(firstName, prop){
// Only change code below this line
var flag=false;
for(var i=0;i<contacts.length;i++)
   if(contacts[i].firstName===firstName)
   {
       if(contacts[i].hasOwnProperty(prop))
       {
        flag=true;
        return contacts[i][prop];
       }
       else return "No such property";
   }
if(flag===false)return "No such contact";


// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
