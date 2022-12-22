import HttpService from "@/services/HttpService";

export default class AuthService {
  httpService = new HttpService();
  async login(payload) {
    return this.httpService.login(payload);
  }
  async logout() {
    return this.httpService.logout();
  }
}
