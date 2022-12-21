import HttpService from "@/services/HttpService";

export default class SalesQuantityManagementService {
  httpService = new HttpService();
  async process() {
    let resource = "sales";
    return await this.httpService.process(resource);
  }
  async downloadTemplateExcel() {
    let nameFile = "sales.xlsx";
    return this.httpService.downloadTemplateExcel(nameFile);
  }
}
