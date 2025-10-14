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

// src/app/services/user-service.ts
var UserService = class _UserService {
  http;
  apiUrl = `${environment.apiUrl}/user/`;
  constructor(http) {
    this.http = http;
  }
  getUsers() {
    return this.http.get(`${this.apiUrl}`);
  }
  createUser(users) {
    return this.http.post(`${this.apiUrl}create-user`, users);
  }
  updateUserStatus(userId, status) {
    return this.http.put(`${this.apiUrl}update-status/${userId}`, { status });
  }
  deleteUser(userId) {
    return this.http.delete(`${this.apiUrl}${userId}`);
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  UserService
};
//# sourceMappingURL=chunk-U7SY2SFW.js.map
