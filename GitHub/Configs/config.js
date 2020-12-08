class Config { 

    constructor(){
        this.trueLogin = 'm.polisevsky@reg.ru'; 
    this.truePassword = '6374Avraam';
}

generateRandomPasswordOrLogin(){
    return Math.random().toString(20).substr(2, 6);
    }
}

module.exports=new Config();