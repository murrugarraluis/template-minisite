import HttpService from "@/services/HttpService";

export default class StockManagementService {
  httpService = new HttpService();
  async process() {
    let resource = "stock";
    return await this.httpService.process(resource);
  }
  async downloadTemplateExcel() {
    let nameFile = "stock.xlsx";
    return this.httpService.downloadTemplateExcel(nameFile);
  }
}
