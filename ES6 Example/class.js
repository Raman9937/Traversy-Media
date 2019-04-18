class User {
    constructor(username,email)
    {
        this.username = username;
        this.email = email;
    }

    register() {
        console.log(this.username + ' is registered now');
    }

}

let bob = new User('raman','abc@gmail.com');// we  just create the User object

//lets call the register method 
bob.register();


//inheritance

class Member extends User {
    constructor(username,email,memberpackage) {
        super(username,email);
        this.memberpackage = memberpackage;
    }

    getPackage() {
        console.log(this.username+ ' is subscriberd as ' +this.memberpackage+' package');
    }
}

let raman = new Member('raman','abc@gmail.com','standard');

raman.getPackage();
raman.register();