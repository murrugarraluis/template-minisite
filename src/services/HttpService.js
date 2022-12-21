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
}
