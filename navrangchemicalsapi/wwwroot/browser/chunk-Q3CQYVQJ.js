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

// src/app/services/raw-material-service.ts
var RawMaterialService = class _RawMaterialService {
  http;
  apiUrl = `${environment.apiUrl}/RawMaterial`;
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
  static \u0275fac = function RawMaterialService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RawMaterialService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RawMaterialService, factory: _RawMaterialService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RawMaterialService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  RawMaterialService
};
//# sourceMappingURL=chunk-Q3CQYVQJ.js.map
