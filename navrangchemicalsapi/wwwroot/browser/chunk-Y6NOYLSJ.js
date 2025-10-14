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

// src/app/services/supplier-service.ts
var SupplierService = class _SupplierService {
  http;
  ApiUrl = `${environment.apiUrl}/supplier/`;
  constructor(http) {
    this.http = http;
  }
  getSuppliers() {
    return this.http.get(`${this.ApiUrl}`);
  }
  CreateSupplier(data) {
    return this.http.post(`${this.ApiUrl}create`, data);
  }
  getSupplierById(id) {
    return this.http.get(`${this.ApiUrl}${id}`);
  }
  editSupplier(id, party) {
    return this.http.put(`${this.ApiUrl}edit-supplier/${id}`, party);
  }
  static \u0275fac = function SupplierService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SupplierService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SupplierService, factory: _SupplierService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SupplierService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  SupplierService
};
//# sourceMappingURL=chunk-Y6NOYLSJ.js.map
