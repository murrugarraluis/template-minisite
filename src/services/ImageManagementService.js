import HttpService from "@/services/HttpService";

export default class ImageManagementService {
  httpService = new HttpService();
  async downloadTemplateExcel() {
    let nameFile = "image.xlsx";
    return this.httpService.downloadTemplateExcel(nameFile);
  }
}
