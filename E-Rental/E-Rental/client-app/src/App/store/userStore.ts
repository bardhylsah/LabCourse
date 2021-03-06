import { makeAutoObservable, runInAction } from "mobx";
import { history } from "../..";
import agent from "../api/agent";
import agents from "../api/agent";
import { User, UserFormValues } from "../Models/user";
import { store } from "./useStore";

export default class UserStore {
    user: User | null = null;
    

    constructor() {
        makeAutoObservable(this)
    }

    get isLoggedIn() {
        return !!this.user;
    }

    login = async (creds: UserFormValues) => {
        try {
            const user = await agents.Account.login(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            history.push('/services');
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }

    logout = () => {
        store.commonStore.setToken(null);
        window.localStorage.removeItem('jwt');
        this.user = null;
        history.push('/');
    }
    getUser = async () => {
        try {
            const user = await agent.Account.current();
            runInAction(() => this.user = user);
        } catch (error) {
            console.log(error);
        }
    }
    register = async (creds: UserFormValues) => {
        try {
            const user = await agents.Account.register(creds);
            store.commonStore.setToken(user.token);
            runInAction(() => this.user = user);
            history.push('/services');
            store.modalStore.closeModal();
        } catch (error) {
            throw error;
        }
    }
}


    