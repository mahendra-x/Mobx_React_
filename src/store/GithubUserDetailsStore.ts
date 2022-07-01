import axios from "axios";
import {
  makeObservable,
  action,
  computed,
  observable,
  flow,
  runInAction,
} from "mobx";
import { IRootStore } from "./RootStore";

export interface IuserDetails {
  id: number;
  name: string;
  url: string;
  location: string;
}

export class GithubUserDetailsStore {
  userDetails: IuserDetails = {} as IuserDetails;
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      userDetails: observable,
      fetchGithubUserDetails: action,
      getUserDetails: computed,
    });
    this.rootStore = rootStore;
  }

  async fetchGithubUserDetails(userName: string) {
    const response = await axios.get(
      `https://api.github.com/users/${userName}`
    );

    runInAction(() => {
      this.userDetails = response?.data;
    });
  }

  //   fetchGithubUserDetails = flow(function* (userName: string) {
  //     const response = yield axios.get(
  //       `https://api.github.com/users/${userName}`
  //     );
  //     this.userDetails = response?.data;
  //   });

  get getUserDetails() {
    return this.userDetails;
  }
}
