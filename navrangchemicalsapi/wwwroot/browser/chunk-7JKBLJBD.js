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

// src/app/services/party-service.ts
var PartyService = class _PartyService {
  http;
  ApiUrl = `${environment.apiUrl}/party/`;
  constructor(http) {
    this.http = http;
  }
  getParties() {
    return this.http.get(`${this.ApiUrl}getallparty`);
  }
  CreateParties(party) {
    return this.http.post(`${this.ApiUrl}create-party`, party);
  }
  getPartyById(id) {
    return this.http.get(`${this.ApiUrl}getparty/${id}`);
  }
  editParty(id, party) {
    return this.http.put(`${this.ApiUrl}edit-party/${id}`, party);
  }
  static \u0275fac = function PartyService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PartyService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PartyService, factory: _PartyService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PartyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  PartyService
};
//# sourceMappingURL=chunk-7JKBLJBD.js.map
