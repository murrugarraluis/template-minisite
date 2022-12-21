import HttpService from "@/services/HttpService";

export default class PriceManagementService {
  httpService = new HttpService();
  async process() {
    let resource = "price";
    return await this.httpService.process(resource);
  }
  async downloadTemplateExcel() {
    let nameFile = "price.xlsx";
    return this.httpService.downloadTemplateExcel(nameFile);
  }
}
