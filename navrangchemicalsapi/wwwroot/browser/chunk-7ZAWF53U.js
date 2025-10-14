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

// src/app/services/raw-material-inward-service.ts
var RawMaterialInwardService = class _RawMaterialInwardService {
  http;
  apiUrl = `${environment.apiUrl}/RawMaterialInward`;
  constructor(http) {
    this.http = http;
  }
  getInwards() {
    return this.http.get(this.apiUrl);
  }
  getInwardByID(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  addInward(Inward) {
    return this.http.post(`${this.apiUrl}/create`, Inward);
  }
  updateInward(id, Inward) {
    return this.http.put(`${this.apiUrl}/update/${id}`, Inward);
  }
  deleteInward(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function RawMaterialInwardService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RawMaterialInwardService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RawMaterialInwardService, factory: _RawMaterialInwardService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RawMaterialInwardService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  RawMaterialInwardService
};
//# sourceMappingURL=chunk-7ZAWF53U.js.map
