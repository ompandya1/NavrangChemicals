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

// src/app/services/expiry-service.ts
var ExpiryService = class _ExpiryService {
  http;
  apiUrl = `${environment.apiUrl}/qc_expiry`;
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
    return this.http.put(`${this.apiUrl}/replace/${id}`, product);
  }
  deleteProduct(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function ExpiryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExpiryService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExpiryService, factory: _ExpiryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExpiryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ExpiryService
};
//# sourceMappingURL=chunk-3QQ64GUR.js.map
