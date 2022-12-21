import HttpService from "@/services/HttpService";

export default class StockManagementService {
  httpService = new HttpService();
  async downloadTemplateExcel() {
    let nameFile = "stock.xlsx";
    return this.httpService.downloadTemplateExcel(nameFile);
  }
}
