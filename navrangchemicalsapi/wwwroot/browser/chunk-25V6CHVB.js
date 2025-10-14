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

// src/app/services/make-service.ts
var MakeService = class _MakeService {
  http;
  apiUrl = `${environment.apiUrl}/make`;
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
  static \u0275fac = function MakeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MakeService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MakeService, factory: _MakeService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MakeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MakeService
};
//# sourceMappingURL=chunk-25V6CHVB.js.map
