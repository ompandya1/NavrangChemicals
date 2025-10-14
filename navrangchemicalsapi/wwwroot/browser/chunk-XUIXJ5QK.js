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

// src/app/services/product-service.ts
var ProductService = class _ProductService {
  http;
  apiUrl = `${environment.apiUrl}/Product`;
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
    return this.http.post(`${this.apiUrl}/create-product`, product);
  }
  updateProduct(id, product) {
    return this.http.put(`${this.apiUrl}/update-product/${id}`, product);
  }
  deleteProduct(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  static \u0275fac = function ProductService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ProductService
};
//# sourceMappingURL=chunk-XUIXJ5QK.js.map
