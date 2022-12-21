import HttpService from "@/services/HttpService";

export default class PriceManagementService {
  httpService = new HttpService();
  async downloadTemplateExcel() {
    let nameFile = "price.xlsx";
    return this.httpService.downloadTemplateExcel(nameFile);
  }
}
