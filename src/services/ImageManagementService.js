import HttpService from "@/services/HttpService";

export default class ImageManagementService {
  httpService = new HttpService();
  async process() {
    let resource = "images";
    return await this.httpService.process(resource);
  }
  async downloadTemplateExcel() {
    let nameFile = "image.xlsx";
    return await this.httpService.downloadTemplateExcel(nameFile);
  }
}
