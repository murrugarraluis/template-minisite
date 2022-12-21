import HttpService from "@/services/HttpService";

export default class SalesQuantityManagementService {
  httpService = new HttpService();
  async downloadTemplateExcel() {
    let nameFile = "sales.xlsx";
    return this.httpService.downloadTemplateExcel(nameFile);
  }
}
