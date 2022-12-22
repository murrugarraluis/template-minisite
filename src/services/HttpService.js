export default class HttpService {
  url = "https://example.test/api/v1/";
  async process(resource) {
    let fullUrl = this.url + resource;
    // TODO: consult backend and return response
    console.log(fullUrl);
    return this.getRandomBoolean();
  }
  // function test , deleted after
  getRandomBoolean() {
    return Math.random() > 0.5;
  }
  async downloadTemplateExcel(nameFile) {
    //TODO: consult backend and download file
    return nameFile;
  }
  async login(payload) {
    // TODO: consult backend and return response
    let authBack = { user: "admin@ememsa.com", password: "123456" };
    return (
      payload.user === authBack.user && payload.password === authBack.password
    );
  }
  async logout() {
    // TODO: consult backend and return response
    // let authBack = { user: "admin@ememsa", password: "123456" };
    return true;
  }
}
