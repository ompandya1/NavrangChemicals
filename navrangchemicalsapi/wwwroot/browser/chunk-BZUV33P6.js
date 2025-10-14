import {
  Router
} from "./chunk-IW3JCNMQ.js";
import {
  HttpClient,
  HttpHeaders,
  environment
} from "./chunk-JLFMSZUT.js";
import {
  BehaviorSubject,
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-QAWYXZDT.js";

// src/app/services/authservice.ts
var Authservice = class _Authservice {
  http;
  router;
  userKey = "user";
  tokenKey = "accessToken";
  refreshTokenKey = "refreshToken";
  isLoggedInSubject = new BehaviorSubject(this.hasToken());
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  currentUserSubject = signal(null, ...ngDevMode ? [{ debugName: "currentUserSubject" }] : []);
  constructor(http, router) {
    this.http = http;
    this.router = router;
  }
  hasToken() {
    return !!localStorage.getItem(this.tokenKey);
  }
  login(credentials) {
    return this.http.post(
      // 'http://localhost:5038/api/Auth/login',
      `${environment.apiUrl}/auth/login`,
      credentials,
      { headers: new HttpHeaders({ "Content-Type": "application/json" }) }
    );
  }
  setSession(accessToken, refreshToken, user) {
    localStorage.setItem(this.tokenKey, accessToken);
    localStorage.setItem(this.refreshTokenKey, refreshToken);
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.currentUserSubject.set(user);
    this.isLoggedInSubject.next(true);
    ``;
  }
  getToken() {
    const token = localStorage.getItem(this.tokenKey);
    if (!token)
      this.redirectToLogin();
    return token;
  }
  getUser() {
    return this.currentUserSubject() || JSON.parse(localStorage.getItem(this.userKey) || "null");
  }
  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    localStorage.removeItem(this.userKey);
    this.currentUserSubject.set(null);
    this.isLoggedInSubject.next(false);
    this.router.navigate(["/login"], { replaceUrl: true });
  }
  hasPermission(permission) {
    const user = this.getUser();
    if (!user)
      return false;
    if (user.role === "Admin")
      return true;
    return user.accessList?.some((p) => p.label === permission) ?? false;
  }
  getAllUsers() {
    return this.http.get("http://localhost:5038/api/user");
  }
  // Auto-redirect helper
  redirectToLogin() {
    this.logout();
  }
  getCurrentUser() {
    const user = localStorage.getItem(this.userKey);
    return user ? JSON.parse(user) : null;
  }
  static \u0275fac = function Authservice_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Authservice)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Authservice, factory: _Authservice.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Authservice, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }, { type: Router }], null);
})();

export {
  Authservice
};
//# sourceMappingURL=chunk-BZUV33P6.js.map
