
import { useEffect } from 'react';
import delay from '../utils/delay';

const dummyUsers=[
    {name:"Vivek Dutta Mishra", password:"p@ss#1", no:"1234567890",email:"vivek@email.com" ,  state:"Karnatka",
    city:"Banglore" , pincode:"432344"},
    {name:"Shivanshi", password:"p@ss#1", no:"1234567890",email:"shivanshi@email.com" , state:"Maharashtra",
city:"Pune" , pincode:"411033"},
    
];

class UserService{

    static storeKey="users";
    static loggedInUserKey="currentUser";

    constructor(){
        this.users=null;
        this._load();
    }

    _load(){
        
        try{
            let jsonStr=localStorage.getItem(UserService.storeKey);
            this.users=JSON.parse(jsonStr);
        }catch(error){

        }

        if(!this.users){
           this.users=dummyUsers;
           this._save();
        }
    }
    _save(){
        localStorage.setItem(UserService.storeKey,JSON.stringify(this.users));
    }
 
    async login(email, password){
       
        if(!email)
            throw new Error("Missing Email");

        if(!password)
            throw new Error("Missing Password");


        let user= this.users.find(user => user.email === email && user.password === password);

        if(user){
           localStorage.setItem(UserService.loggedInUserKey, JSON.stringify(user));
        }
        else{
            this.logout();
            throw new Error("Invalid Credentials");
        }

        return user;
    }

    async logout(){
     
        localStorage.removeItem(UserService.loggedInUserKey);
    }

    async getLoggedInUser(){
        let str= localStorage.getItem(UserService.loggedInUserKey);
        let user = str?JSON.parse(str):null;
        return user;
    }

    async checkout(email, name,pincode){
       
        if(!email)
            throw new Error("Missing Email");
    
        if(!name)
            throw new Error("Missing Name");
       
    
        let user= this.users.find(user =>user.email === email && user.name === name);
    
        if(user){
           localStorage.setItem(UserService.loggedInUserKey, JSON.stringify(user));
        }
        else{
            this.logout();
            throw new Error("Invalid Credentials");
        }
    
        return user;
    }



 



}

export default new UserService();

