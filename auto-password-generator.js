const run = function(){
    const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                   'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    const lowerCase = upperCase.map(input => input.toLowerCase());

    const specialCharacters = ['!', '@','#','$','&','(',')','%','*'];

    //const randomNumber = Math.round(Math.random()*10);

    const passwordLength = prompt('Input desired password length', 6);

    const generatedString = [];



    if (generatedString.length < passwordLength){
    
        for(i=passwordLength; i>0; i--){
            generatedString.push(upperCase[Math.floor(Math.random()*26)])
            generatedString.push(lowerCase[Math.floor(Math.random()*26)])
            generatedString.push(specialCharacters[Math.floor(Math.random()*9)])     
            generatedString.push(Math.floor(Math.random()*10))
    }
    
    }

    if(generatedString.length > passwordLength){
        generatedString.splice(-(generatedString.length - passwordLength), generatedString.length - passwordLength)
    }

    const shuffledPassword = shuffle(generatedString); 

    function getRandomInt(n) {
        return Math.floor(Math.random() * n);
    }
    function shuffle(array) {
        
        let n = array.length ;              // Length of the array
    
        for(var i=n-1 ; i > 0  ; --i) {
        let j = getRandomInt(i + 1);       // Get random of [0, n-1]
      
        let temp = array[i];             // Swap arr[i] and arr[j]
        array[i] = array[j];
        array[j] = temp;
    }
    
    password = array.join('');                // Convert Array to string
    return password;                        // Return shuffled string
    }




    const passwordElement = document.createElement("div");
    passwordElement.innerText = shuffledPassword;
    document.body.appendChild(passwordElement);
}

run();