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

// src/app/services/invoice-service.ts
var InvoiceStatus;
(function(InvoiceStatus2) {
  InvoiceStatus2[InvoiceStatus2["Requested"] = 0] = "Requested";
  InvoiceStatus2[InvoiceStatus2["Pending"] = 1] = "Pending";
  InvoiceStatus2[InvoiceStatus2["Completed"] = 2] = "Completed";
})(InvoiceStatus || (InvoiceStatus = {}));
var InvoiceService = class _InvoiceService {
  http;
  baseUrl = `${environment.apiUrl}/invoice`;
  constructor(http) {
    this.http = http;
  }
  createInvoice(dto) {
    return this.http.post(`${this.baseUrl}/create`, dto);
  }
  updateInvoice(id, dto) {
    return this.http.put(`${this.baseUrl}/update/${id}`, dto);
  }
  getAllInvoices() {
    return this.http.get(`${this.baseUrl}/GetAll`);
  }
  getInvoiceById(id) {
    return this.http.get(`${this.baseUrl}/GetById/${id}`);
  }
  getRequestedInvoices() {
    return this.http.get(`${this.baseUrl}/requested`);
  }
  getPendingInvoices() {
    return this.http.get(`${this.baseUrl}/pending`);
  }
  getCompletedInvoices() {
    return this.http.get(`${this.baseUrl}/completed`);
  }
  updateStatus(id, status) {
    return this.http.put(`${this.baseUrl}/update-status/${id}`, { status });
  }
  static \u0275fac = function InvoiceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvoiceService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InvoiceService, factory: _InvoiceService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoiceService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  InvoiceService
};
//# sourceMappingURL=chunk-DAEJSI53.js.map
