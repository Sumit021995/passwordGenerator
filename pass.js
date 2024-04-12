// You have been asked to create a random password generator. The password generator must ask the user for the desired length of the password (minimum four characters). Each password must have at least one digit excluding zero and one (2 - 9) at least one lowercase letter other than a lower case L, at least one uppercase letter other than O and at least one of these characters between the brackets (!@#$%^&*). What steps would you follow to produce a valid password?

let password = (n)=>{
    let alfa = 'qwertyuiopasdfghjkzxcvbnm'
    let alfaC = 'QWERTYUIPASDFGHJKLZXCVBNM'
    let specialC='!@#$%^&*'
    let number = '23456789'
    let all= 'qwertyuiopasdfghjkzxcvbnmQWERTYUIPASDFGHJKLZXCVBNM!@#$%^&*23456789'
    let sN = parseInt(Math.random()*8);
    let nN = parseInt(Math.random()*8);
    let aN = parseInt(Math.random()*25);
    let aCN = parseInt(Math.random()*25);
    let password =`${alfa[aN]+alfaC[aCN]+specialC[sN]+number[nN]}`
    console.log(password);
    // let n=parseInt(Math.random()*10 + 4);
    console.log(n);
    for(let i=0; i< n ; i++){
        password+= all[parseInt(Math.random()*66)]

    }
    return password;

}

console.log(password(10));