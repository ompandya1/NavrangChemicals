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

// src/app/services/finished-product-inward-service.ts
var FinishedProductInwardService = class _FinishedProductInwardService {
  http;
  apiUrl = `${environment.apiUrl}/finishedproductinward`;
  constructor(http) {
    this.http = http;
  }
  getInward() {
    return this.http.get(this.apiUrl);
  }
  getInwardByID(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  addInward(product) {
    return this.http.post(`${this.apiUrl}/create`, product);
  }
  updateInward(id, product) {
    return this.http.put(`${this.apiUrl}/update/${id}`, product);
  }
  deleteInward(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function FinishedProductInwardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FinishedProductInwardService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FinishedProductInwardService, factory: _FinishedProductInwardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FinishedProductInwardService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  FinishedProductInwardService
};
//# sourceMappingURL=chunk-ZQWSQRVT.js.map
