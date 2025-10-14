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

// src/app/services/semi-finished-service.ts
var SemiFinishedService = class _SemiFinishedService {
  http;
  apiUrl = `${environment.apiUrl}/SemiFinished`;
  constructor(http) {
    this.http = http;
  }
  getAllProducts() {
    return this.http.get(this.apiUrl);
  }
  getProductByID(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  addProduct(product) {
    return this.http.post(`${this.apiUrl}/create`, product);
  }
  updateProduct(id, product) {
    return this.http.put(`${this.apiUrl}/update/${id}`, product);
  }
  deleteProduct(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function SemiFinishedService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SemiFinishedService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SemiFinishedService, factory: _SemiFinishedService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SemiFinishedService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  SemiFinishedService
};
//# sourceMappingURL=chunk-2OPAOAMS.js.map
