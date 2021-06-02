import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agents";
import { User, UserFormValues } from "../Models/user";
import { store } from "./useStore";

export default class UserStore{
    user: User | null=null;

    constructor(){
        makeAutoObservable(this)
    }
    get isLoggedIn(){
        return !!this.user;
    }

    login = async (creds: UserFormValues) => {
        try {
            const user = await agent.Account.login(creds);
            console.log(user);
        } catch (error) {
            throw error;
        }
    }

}