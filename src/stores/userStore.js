import { defineStore } from "pinia";
export const useUserStore = defineStore("user", {
  persist: true,
  state: () => ({
    token: "",
    userInfo: {},
  }),
  actions: {
    setToken(token) {
      this.token = token;
    },
    setUserInfo(userInfo) {
      this.userInfo = userInfo || {};
    },
  },
});
