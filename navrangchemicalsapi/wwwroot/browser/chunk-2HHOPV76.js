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

// src/app/services/order-service.ts
var OrderService = class _OrderService {
  http;
  ApiUrl = `${environment.apiUrl}/OrderDispatch/`;
  constructor(http) {
    this.http = http;
  }
  getOrders() {
    return this.http.get(`${this.ApiUrl}`);
  }
  CreateOrders(Orders) {
    return this.http.post(`${this.ApiUrl}create`, Orders);
  }
  getOrdersById(id) {
    return this.http.get(`${this.ApiUrl}${id}`);
  }
  editOrders(id, Orders) {
    return this.http.put(`${this.ApiUrl}update/${id}`, Orders);
  }
  getOrdersByStatus(status) {
    return this.http.get(`${this.ApiUrl}by-status/${status}`);
  }
  static \u0275fac = function OrderService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  OrderService
};
//# sourceMappingURL=chunk-2HHOPV76.js.map
