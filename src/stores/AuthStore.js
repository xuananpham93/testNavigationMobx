import { observable, action } from 'mobx';

export default class AuthStore {
    @observable isLoading = 'ok';
    @observable isDowload = 'babe';

    @action
    action_getIsLoading() {
        return this.isDowload;
    }
}