export default class UserInfo{
    constructor(nameSelector, descriptionSelector, avatarSelector) {
        this._name = document.querySelector(nameSelector);
        this._description = document.querySelector(descriptionSelector);
        this._avatar = document.querySelector(avatarSelector);
    }

    getUserInfo(){
        return{
            name : this._name.textContent,
            description : this._description.textContent
        };
    }

    setUserInfo({name,description, avatar, id}){
        this._name.textContent = name;
        this._description.textContent = description;
        this._avatar.src = avatar;
        this._userId = id;
    }

    getUserId(){
        return this._userId;
    }
}