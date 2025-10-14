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

// src/app/services/po-service.ts
var PoService = class _PoService {
  http;
  ApiUrl = `${environment.apiUrl}/purchaseorder`;
  constructor(http) {
    this.http = http;
  }
  getPO() {
    return this.http.get(`${this.ApiUrl}`);
  }
  CreatePO(po) {
    const backendPayload = {
      SupplierId: po.supplierId,
      Supplier: po.supplier ? {
        id: po.supplier.id,
        name: po.supplier.name,
        address: po.supplier.address,
        gstin: po.supplier.gstin,
        state: po.supplier.state,
        stateCode: po.supplier.stateCode ?? 0,
        phone: po.supplier.phone,
        email: po.supplier.email
      } : null,
      Address: po.address || "",
      OrderDate: po.orderDate,
      GrandTotal: po.grandTotal || 0,
      PlaceOfSupply: po.placeOfSupply || "",
      TermsOfDelivery: po.termsOfDelivery || "",
      TermsOfPayment: po.termsOfPayment || "",
      Invoice: {
        Id: 0,
        InvoiceDate: po.orderDate.split("T")[0],
        PlaceOfSupply: po.placeOfSupply || "",
        TermsOfDelivery: po.termsOfDelivery || "",
        TermsOfPayment: po.termsOfPayment || "",
        PurchaseOrderId: 0
      },
      Items: po.items.map((i) => ({
        Id: i.id || 0,
        RawMaterialId: i.rawMaterialsId,
        RawMaterialDto: i.rawMaterialDto ? { id: i.rawMaterialDto.id, name: i.rawMaterialDto.name, price: i.rawMaterialDto.price } : null,
        MakeId: i.makeId,
        Unit: i.unit || "Carton",
        Rate: i.rate || 0,
        Per: i.per || 1,
        Quantity: i.quantity || 0,
        Amount: i.amount || 0,
        PurchaseOrderId: 0
      }))
    };
    console.log("sending payload", backendPayload);
    return this.http.post(`${this.ApiUrl}/create`, backendPayload);
  }
  getPOById(id) {
    return this.http.get(`${this.ApiUrl}/${id}`);
  }
  editPO(id, Po) {
    return this.http.put(`${this.ApiUrl}/edit/${id}`, Po);
  }
  static \u0275fac = function PoService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PoService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PoService, factory: _PoService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PoService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  PoService
};
//# sourceMappingURL=chunk-DLP4VYSU.js.map
