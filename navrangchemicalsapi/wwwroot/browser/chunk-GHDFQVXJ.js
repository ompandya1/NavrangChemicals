import {
  HttpClient,
  environment
} from "./chunk-JLFMSZUT.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-QAWYXZDT.js";

// src/app/services/company-service.ts
var CompanyService = class _CompanyService {
  http;
  apiUrl = `${environment.apiUrl}/company`;
  constructor(http) {
    this.http = http;
  }
  getAllCompanies() {
    return this.http.get(this.apiUrl);
  }
  getCompanyByID(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  addCompany(product) {
    return this.http.post(`${this.apiUrl}/create-company`, product);
  }
  updateCompany(id, product) {
    return this.http.put(`${this.apiUrl}/update-company/${id}`, product);
  }
  deleteCompany(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function CompanyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompanyService, factory: _CompanyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  CompanyService
};
//# sourceMappingURL=chunk-GHDFQVXJ.js.map
