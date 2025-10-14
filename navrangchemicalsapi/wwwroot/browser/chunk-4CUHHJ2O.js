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

// src/app/services/semi-finished-inward-service.ts
var SemiFinishedInwardService = class _SemiFinishedInwardService {
  http;
  apiUrl = `${environment.apiUrl}/semifinishedinward`;
  constructor(http) {
    this.http = http;
  }
  getInwards() {
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
  static \u0275fac = function SemiFinishedInwardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SemiFinishedInwardService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SemiFinishedInwardService, factory: _SemiFinishedInwardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SemiFinishedInwardService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  SemiFinishedInwardService
};
//# sourceMappingURL=chunk-4CUHHJ2O.js.map
