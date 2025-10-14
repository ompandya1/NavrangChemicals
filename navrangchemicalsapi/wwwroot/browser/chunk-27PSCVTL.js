import "./chunk-P73HLFOO.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-IED7DI3C.js";
import {
  Authservice
} from "./chunk-BZUV33P6.js";
import {
  UserService
} from "./chunk-U7SY2SFW.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet
} from "./chunk-IW3JCNMQ.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-JLFMSZUT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-QAWYXZDT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-46DXP6YY.js";

// src/app/pages/dashboard/dashboard.ts
var _c0 = ["sidebarRef"];
function Dashboard_a_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 49);
    \u0275\u0275text(1, "Party");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_a_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 50);
    \u0275\u0275text(1, "Product Master");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_a_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 51);
    \u0275\u0275text(1, "Raw Material Master");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_a_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 52);
    \u0275\u0275text(1, "Semi Finished Master");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_a_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 53);
    \u0275\u0275text(1, "Supplier");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_a_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 54);
    \u0275\u0275text(1, "Make");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_a_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 55);
    \u0275\u0275text(1, "Raw Material Inward");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_a_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 56);
    \u0275\u0275text(1, "Semi Finished Inward");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_a_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 57);
    \u0275\u0275text(1, "Finished Product Inward");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_a_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 58);
    \u0275\u0275listener("click", function Dashboard_a_52_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("purchase-order"));
    });
    \u0275\u0275element(1, "i", 59);
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3, "Purchase Order");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_a_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 60);
    \u0275\u0275listener("click", function Dashboard_a_54_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("invoice"));
    });
    \u0275\u0275element(1, "i", 61);
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3, "Invoice");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_a_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 62);
    \u0275\u0275listener("click", function Dashboard_a_56_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("dispatch-list"));
    });
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3, "Dispatch List");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_a_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 12);
    \u0275\u0275listener("click", function Dashboard_a_58_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleDropdown("orders"));
    });
    \u0275\u0275element(1, "i", 64);
    \u0275\u0275elementStart(2, "span", 14);
    \u0275\u0275text(3, "Orders");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_a_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 65);
    \u0275\u0275text(1, "Order Request List");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_a_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 66);
    \u0275\u0275text(1, "Order Pending List");
    \u0275\u0275elementEnd();
  }
}
var Dashboard = class _Dashboard {
  el;
  service;
  router;
  userService;
  cd;
  sidebarRef;
  dropdownStates = signal({
    inwards: false,
    master: false,
    orders: false,
    reports: false
  }, ...ngDevMode ? [{ debugName: "dropdownStates" }] : []);
  isActiveDropdown = false;
  isPinnedOpen = false;
  isSidebarOpen = signal(false, ...ngDevMode ? [{ debugName: "isSidebarOpen" }] : []);
  users = [];
  isScrollable = false;
  currentUser = null;
  sidebarState = computed(() => this.isSidebarOpen() ? "expanded" : "collapsed", ...ngDevMode ? [{ debugName: "sidebarState" }] : []);
  wrapperScrollable = computed(() => {
    const isOpen = this.isSidebarOpen();
    const dropdowns = Object.values(this.dropdownStates());
    const active = isOpen && dropdowns.some((v) => v);
    return active;
  }, ...ngDevMode ? [{ debugName: "wrapperScrollable" }] : []);
  constructor(el, service, router, userService, cd) {
    this.el = el;
    this.service = service;
    this.router = router;
    this.userService = userService;
    this.cd = cd;
  }
  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.cd.markForCheck();
    });
    this.currentUser = this.service.getCurrentUser();
    console.log("Current User in Dashboard:", this.currentUser);
  }
  isActive = null;
  toggleDropdown(key) {
    this.dropdownStates.update((state2) => {
      const newState = __spreadProps(__spreadValues({}, state2), { [key]: !state2[key] });
      this.isActive = newState[key] ? key : null;
      return newState;
    });
  }
  isDropdownOpen(key) {
    return !!this.dropdownStates()[key];
  }
  isDropdownActive(key) {
    return this.isActive === key;
  }
  onClick() {
    this.isPinnedOpen = true;
    this.isSidebarOpen.set(true);
  }
  onMouseEnter() {
    if (!this.isPinnedOpen)
      this.isSidebarOpen.set(true);
  }
  onMouseLeave() {
    if (!this.isPinnedOpen)
      this.isSidebarOpen.set(false);
  }
  logout() {
    this.service.logout();
    this.router.navigate(["/login"]);
  }
  canAccess(permission) {
    return this.service.hasPermission(permission);
  }
  onClickOutside(event) {
    const clickedInsideSidebar = this.sidebarRef?.nativeElement.contains(event.target);
    if (!clickedInsideSidebar) {
      this.isPinnedOpen = false;
      this.isSidebarOpen.set(false);
      this.isActive = null;
      this.dropdownStates.update((state2) => {
        const resetState = {};
        Object.keys(state2).forEach((key) => resetState[key] = false);
        return resetState;
      });
    }
  }
  onBtnClick(event) {
    event.stopPropagation();
    this.isPinnedOpen = !this.isPinnedOpen;
    this.isSidebarOpen.set(this.isPinnedOpen);
  }
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Authservice), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], viewQuery: function Dashboard_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sidebarRef = _t.first);
    }
  }, hostBindings: function Dashboard_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function Dashboard_click_HostBindingHandler($event) {
        return ctx.onClickOutside($event);
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 91, vars: 41, consts: [["sidebarRef", ""], [1, "wrapper"], [1, "sidebar", 3, "mouseenter", "mouseleave", "click", "ngClass"], [1, "p-3", "mb-0"], ["routerLink", "/home", 1, "d-flex", "align-items-center", "mb-5", "brand-logo", 2, "cursor", "pointer"], ["src", "assets/navranglogo1.png", "width", "40", "height", "40", "alt", "logo", 1, "me-2", "logo-img"], [1, "fw-bold", "brand-name"], [1, "d-flex", "align-items-center", "mb-4", "user-info"], ["src", "assets/user.jpg", "width", "40", "height", "40", "alt", "User", 1, "rounded-circle", "me-2", "user-img"], [1, "fw-bold", "admin"], [1, "nav", "flex-column", 2, "margin", "0"], [1, "nav-item"], [1, "nav-link", "text-light", "fw-bold", 3, "click"], [1, "fas", "fa-cogs", "me-2"], [1, "nav-label"], [1, "submenu-wrapper"], [1, "nav", "flex-column", "ms-3"], ["routerLink", "/users", 1, "nav-child", "text-white"], ["class", "nav-child text-white", "routerLink", "/party", 4, "ngIf"], ["class", "nav-child text-white", "routerLink", "/product-master", 4, "ngIf"], ["routerLink", "/company-master", 1, "nav-child", "text-white"], ["class", "nav-child text-white", "routerLink", "/raw-material", 4, "ngIf"], ["class", "nav-child text-white", "routerLink", "/semi-finished", 4, "ngIf"], ["class", "nav-child text-white", "routerLink", "/supplier", 4, "ngIf"], ["class", "nav-child text-white", "routerLink", "/make", 4, "ngIf"], [1, "fas", "fa-boxes", "me-2"], ["class", "nav-child text-white", "routerLink", "/raw-material-inward", "routerLinkActive", "active-nav", 4, "ngIf"], ["class", "nav-child text-white", "routerLink", "/semi-finished-inward", "routerLinkActive", "active-nav", 4, "ngIf"], ["class", "nav-child text-white", "routerLink", "/finished-product-inward", "routerLinkActive", "active-nav", 4, "ngIf"], ["class", "nav-link text-light fw-bold", "routerLink", "/purchase-order", "routerLinkActive", "active-nav", 3, "click", 4, "ngIf"], ["class", "nav-link text-light fw-bold", "routerLink", "/billing", "routerLinkActive", "active-nav", 3, "click", 4, "ngIf"], ["class", "nav-link text-light fw-bold", "routerLink", "/order-dispatch-list", "routerLinkActive", "active-nav", 3, "click", 4, "ngIf"], ["class", "nav-link text-light fw-bold", 3, "click", 4, "ngIf"], ["class", "nav-child text-white", "routerLink", "/order-requests", "routerLinkActive", "active-nav", 4, "ngIf"], ["class", "nav-child text-white", "routerLink", "/pending-orders", "routerLinkActive", "active-nav", 4, "ngIf"], [1, "fas", "fa-chart-bar", "me-2"], ["routerLink", "/stock-reports", "routerLinkActive", "active-nav", 1, "nav-child", "text-white"], [1, "nav-item", 2, "gap", "2px"], ["routerLink", "/qc-standard-expiry", "routerLinkActive", "active-nav", 1, "nav-link", "text-light", "fw-bold", 3, "click"], [1, "fas", "fa-check"], [1, "main-content"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "border-bottom", "px-3", 2, "height", "50px", "width", "100%", "display", "flex"], ["type", "button", 1, "btn", "btn-outline-secondary", "me-2", 3, "click"], [1, "fas", "fa-bars"], [1, "ms-auto"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "fas", "fa-power-off"], [1, "d-none", "d-md-inline"], [3, "click"], ["routerLink", "/party", 1, "nav-child", "text-white"], ["routerLink", "/product-master", 1, "nav-child", "text-white"], ["routerLink", "/raw-material", 1, "nav-child", "text-white"], ["routerLink", "/semi-finished", 1, "nav-child", "text-white"], ["routerLink", "/supplier", 1, "nav-child", "text-white"], ["routerLink", "/make", 1, "nav-child", "text-white"], ["routerLink", "/raw-material-inward", "routerLinkActive", "active-nav", 1, "nav-child", "text-white"], ["routerLink", "/semi-finished-inward", "routerLinkActive", "active-nav", 1, "nav-child", "text-white"], ["routerLink", "/finished-product-inward", "routerLinkActive", "active-nav", 1, "nav-child", "text-white"], ["routerLink", "/purchase-order", "routerLinkActive", "active-nav", 1, "nav-link", "text-light", "fw-bold", 3, "click"], [1, "fas", "fa-shopping-cart", "me-2"], ["routerLink", "/billing", "routerLinkActive", "active-nav", 1, "nav-link", "text-light", "fw-bold", 3, "click"], [1, "fas", "fa-file-invoice", "me-2"], ["routerLink", "/order-dispatch-list", "routerLinkActive", "active-nav", 1, "nav-link", "text-light", "fw-bold", 3, "click"], [1, "fas", "fa-truck", "me-2"], [1, "fas", "fa-clipboard-list", "me-2"], ["routerLink", "/order-requests", "routerLinkActive", "active-nav", 1, "nav-child", "text-white"], ["routerLink", "/pending-orders", "routerLinkActive", "active-nav", 1, "nav-child", "text-white"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2, 0);
      \u0275\u0275listener("mouseenter", function Dashboard_Template_div_mouseenter_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMouseEnter());
      })("mouseleave", function Dashboard_Template_div_mouseleave_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onMouseLeave());
      })("click", function Dashboard_Template_div_click_1_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onClick());
      });
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "img", 5);
      \u0275\u0275elementStart(6, "span", 6);
      \u0275\u0275text(7, "NAVRANG CHEMICAL INDUSTRIES");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7);
      \u0275\u0275element(9, "img", 8);
      \u0275\u0275elementStart(10, "span", 9);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "ul", 10)(13, "li", 11)(14, "a", 12);
      \u0275\u0275listener("click", function Dashboard_Template_a_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleDropdown("master"));
      });
      \u0275\u0275element(15, "i", 13);
      \u0275\u0275elementStart(16, "span", 14);
      \u0275\u0275text(17, "Master");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 15)(19, "ul", 16)(20, "li")(21, "a", 17);
      \u0275\u0275text(22, "Users");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "li");
      \u0275\u0275template(24, Dashboard_a_24_Template, 2, 0, "a", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "li");
      \u0275\u0275template(26, Dashboard_a_26_Template, 2, 0, "a", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "li")(28, "a", 20);
      \u0275\u0275text(29, "Company Master");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "li");
      \u0275\u0275template(31, Dashboard_a_31_Template, 2, 0, "a", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "li");
      \u0275\u0275template(33, Dashboard_a_33_Template, 2, 0, "a", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "li");
      \u0275\u0275template(35, Dashboard_a_35_Template, 2, 0, "a", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "li");
      \u0275\u0275template(37, Dashboard_a_37_Template, 2, 0, "a", 24);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "li", 11)(39, "a", 12);
      \u0275\u0275listener("click", function Dashboard_Template_a_click_39_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleDropdown("inwards"));
      });
      \u0275\u0275element(40, "i", 25);
      \u0275\u0275elementStart(41, "span", 14);
      \u0275\u0275text(42, "Inwards");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 15)(44, "ul", 16)(45, "li");
      \u0275\u0275template(46, Dashboard_a_46_Template, 2, 0, "a", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "li");
      \u0275\u0275template(48, Dashboard_a_48_Template, 2, 0, "a", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "li");
      \u0275\u0275template(50, Dashboard_a_50_Template, 2, 0, "a", 28);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(51, "li", 11);
      \u0275\u0275template(52, Dashboard_a_52_Template, 4, 0, "a", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "li", 11);
      \u0275\u0275template(54, Dashboard_a_54_Template, 4, 0, "a", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "li", 11);
      \u0275\u0275template(56, Dashboard_a_56_Template, 4, 0, "a", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "li", 11);
      \u0275\u0275template(58, Dashboard_a_58_Template, 4, 0, "a", 32);
      \u0275\u0275elementStart(59, "div", 15)(60, "ul", 16)(61, "li");
      \u0275\u0275template(62, Dashboard_a_62_Template, 2, 0, "a", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "li");
      \u0275\u0275template(64, Dashboard_a_64_Template, 2, 0, "a", 34);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(65, "li", 11)(66, "a", 12);
      \u0275\u0275listener("click", function Dashboard_Template_a_click_66_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleDropdown("reports"));
      });
      \u0275\u0275element(67, "i", 35);
      \u0275\u0275elementStart(68, "span", 14);
      \u0275\u0275text(69, "Reports");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 15)(71, "ul", 16)(72, "li")(73, "a", 36);
      \u0275\u0275text(74, "Stock Reports");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(75, "li", 37)(76, "a", 38);
      \u0275\u0275listener("click", function Dashboard_Template_a_click_76_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleDropdown("qc-standard-expiry"));
      });
      \u0275\u0275element(77, "i", 39);
      \u0275\u0275elementStart(78, "span", 14);
      \u0275\u0275text(79, " QC Standard Expiry");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(80, "div", 40)(81, "nav", 41)(82, "button", 42);
      \u0275\u0275listener("click", function Dashboard_Template_button_click_82_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onBtnClick($event));
      });
      \u0275\u0275element(83, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 44)(85, "a", 45);
      \u0275\u0275listener("click", function Dashboard_Template_a_click_85_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.logout());
      });
      \u0275\u0275element(86, "i", 46);
      \u0275\u0275elementStart(87, "span", 47);
      \u0275\u0275text(88, "Sign out");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(89, "div", 48);
      \u0275\u0275listener("click", function Dashboard_Template_div_click_89_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onClickOutside($event));
      });
      \u0275\u0275element(90, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("scrollable", ctx.wrapperScrollable());
      \u0275\u0275advance();
      \u0275\u0275property("@sidebarState", ctx.sidebarState())("ngClass", ctx.sidebarState());
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate2(" ", ctx.currentUser == null ? null : ctx.currentUser.role, ": ", (ctx.currentUser == null ? null : ctx.currentUser.fullName) || (ctx.currentUser == null ? null : ctx.currentUser.username), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active-dropdown", ctx.isDropdownActive("master"));
      \u0275\u0275advance(5);
      \u0275\u0275property("@submenuToggle", ctx.isDropdownOpen("master") ? "open" : "closed");
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.canAccess("Party Management"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.canAccess("Product Master"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.canAccess("Raw Material Master"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.canAccess("Semi Finished Master"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.canAccess("Supplier Management"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.canAccess("Make Management"));
      \u0275\u0275advance();
      \u0275\u0275classProp("active-dropdown", ctx.isDropdownActive("inwards"));
      \u0275\u0275advance(5);
      \u0275\u0275property("@submenuToggle", ctx.isDropdownOpen("inwards") ? "open" : "closed");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.canAccess("Raw Material Inward"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.canAccess("Semi Finished Inward"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.canAccess("Finished Product Inward"));
      \u0275\u0275advance();
      \u0275\u0275classProp("active-dropdown", ctx.isDropdownActive("purchase-order"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canAccess("Purchase Order"));
      \u0275\u0275advance();
      \u0275\u0275classProp("active-dropdown", ctx.isDropdownActive("invoice"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canAccess("Invoice Management"));
      \u0275\u0275advance();
      \u0275\u0275classProp("active-dropdown", ctx.isDropdownActive("dispatch-list"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canAccess("Order Dispatch List"));
      \u0275\u0275advance();
      \u0275\u0275classProp("active-dropdown", ctx.isDropdownActive("orders"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.canAccess("Orders Management"));
      \u0275\u0275advance();
      \u0275\u0275property("@submenuToggle", ctx.isDropdownOpen("orders") ? "open" : "closed");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.canAccess("Order Request List"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.canAccess("Order Pending List"));
      \u0275\u0275advance();
      \u0275\u0275classProp("active-dropdown", ctx.isDropdownActive("reports"));
      \u0275\u0275advance(5);
      \u0275\u0275property("@submenuToggle", ctx.isDropdownOpen("reports") ? "open" : "closed");
      \u0275\u0275advance(5);
      \u0275\u0275classProp("active-dropdown", ctx.isDropdownActive("qc-standard-expiry"));
    }
  }, dependencies: [CommonModule, NgClass, NgIf, RouterModule, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n}\n.wrapper.scrollable[_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 100vh;\n  overflow-y: inherit;\n  overflow-x: hidden;\n}\n.nav-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n}\n.sidebar[_ngcontent-%COMP%] {\n  background-color: #343a40;\n  color: white;\n  transition: width 0.3s ease;\n  height: auto;\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 60px;\n}\n.sidebar.expanded[_ngcontent-%COMP%] {\n  width: 250px;\n}\n.nav-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  opacity: 1;\n  max-width: 300px;\n  overflow: hidden;\n  white-space: nowrap;\n  transition:\n    opacity 0.5s ease,\n    max-width 0.5s ease,\n    margin-left 0.5s ease;\n  margin-left: 0px;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  opacity: 0;\n  margin-left: 0;\n  max-width: 0;\n}\n.main-content[_ngcontent-%COMP%] {\n  flex: 12;\n  transition: margin-left 0.3s ease;\n}\n.main-content.shifted[_ngcontent-%COMP%] {\n  margin-left: 250px;\n}\n.main-content.default[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\n.submenu-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n  transition:\n    height 0.8s ease,\n    padding-top 0.8s ease,\n    opacity 0.8s ease;\n  padding-left: 10px;\n}\n.submenu-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 5px 15px;\n  color: #c2c7d0;\n  text-decoration: none;\n  font-size: 14px;\n}\n.submenu-wrapper[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #495057;\n  color: #c2c7d0;\n  border-radius: 4px;\n}\n.brand-logo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  transition: all 0.8s ease-in-out;\n}\n.brand-logo[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  border-radius: 6px;\n  transition: transform 0.8s ease;\n}\n.brand-logo[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  font-size: 10px;\n  white-space: nowrap;\n  color: #ffffff;\n  transition: opacity 0.8s ease;\n}\n.user-info[_ngcontent-%COMP%] {\n  padding: 20px;\n  border-top: 1px #c2c7d0 solid;\n  border-width: 100%;\n  padding-left: 0;\n  transition: all 0.8s ease-in-out;\n  border-bottom: 1px #c2c7d0 solid;\n}\n.user-info[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  transition: transform 0.8s ease;\n}\n.user-info[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 0.85rem;\n  white-space: nowrap;\n  transition: opacity 0.8s ease;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%], \n.sidebar.collapsed[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%] {\n  opacity: 0;\n  max-width: 0;\n  overflow: hidden;\n  margin-left: 0;\n}\n.logo-img[_ngcontent-%COMP%]:hover, \n.user-img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.nav-link[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  transition: background-color 0.3s ease, color 0.3s ease;\n}\n.nav-item.active-dropdown[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  background-color: #495057;\n  color: #c2c7d0;\n  border-radius: 4px;\n}\n.nav-item.active-dropdown[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  color: #c2c7d0;\n  background-color: #495057;\n}\n.nav-item.active-dropdown[_ngcontent-%COMP%]   .fa-chevron-down[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  transition: transform 0.3s ease;\n}\n.sidebar.collapsed[_ngcontent-%COMP%] {\n  width: 60px;\n  overflow: hidden;\n  pointer-events: auto;\n}\n.sidebar.collapsed[_ngcontent-%COMP%]   .submenu-wrapper[_ngcontent-%COMP%], \n.sidebar.collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%], \n.sidebar.collapsed[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%], \n.sidebar.collapsed[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=dashboard.css.map */"], data: { animation: [
    trigger("sidebarState", [
      state("collapsed", style({ width: "60px" })),
      state("expanded", style({ width: "240px" })),
      transition("collapsed <=> expanded", animate("300ms ease"))
    ]),
    trigger("submenuToggle", [
      state("closed", style({ height: "0", opacity: 0, overflow: "hidden" })),
      state("open", style({ height: "*", opacity: 1, overflow: "hidden" })),
      transition("closed <=> open", animate("300ms ease"))
    ])
  ] }, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "app-dashboard", standalone: true, imports: [CommonModule, RouterModule], animations: [
      trigger("sidebarState", [
        state("collapsed", style({ width: "60px" })),
        state("expanded", style({ width: "240px" })),
        transition("collapsed <=> expanded", animate("300ms ease"))
      ]),
      trigger("submenuToggle", [
        state("closed", style({ height: "0", opacity: 0, overflow: "hidden" })),
        state("open", style({ height: "*", opacity: 1, overflow: "hidden" })),
        transition("closed <=> open", animate("300ms ease"))
      ])
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="wrapper" [class.scrollable]="wrapperScrollable()">
  <!-- Sidebar -->
  <div
    class="sidebar"
    #sidebarRef
    [@sidebarState]="sidebarState()"
    [ngClass]="sidebarState()"
    (mouseenter)="onMouseEnter()"
    (mouseleave)="onMouseLeave()"
    (click)="onClick()"
  >
    <div class="p-3 mb-0">
      <!-- Brand Logo -->
      <div
        class="d-flex align-items-center mb-5 brand-logo"
        routerLink="/home"
        style="cursor: pointer"
      >
        <img
          src="assets/navranglogo1.png"
          class="me-2 logo-img"
          width="40"
          height="40"
          alt="logo"
        />
        <span class="fw-bold brand-name">NAVRANG CHEMICAL INDUSTRIES</span>
      </div>

      <!-- User Info -->
      <div class="d-flex align-items-center mb-4 user-info">
        <img
          src="assets/user.jpg"
          class="rounded-circle me-2 user-img"
          width="40"
          height="40"
          alt="User"
        />
        <span class="fw-bold admin"> {{ currentUser?.role  }}: {{ currentUser?.fullName || currentUser?.username }} </span>
      </div>

      <!-- Sidebar Menu -->
      <ul class="nav flex-column" style="margin: 0">
        <!-- Master -->
        <li
          class="nav-item"
          [class.active-dropdown]="isDropdownActive('master')"
        >
          <a
            class="nav-link text-light fw-bold"
            (click)="toggleDropdown('master')"
          >
            <i class="fas fa-cogs me-2"></i
            ><span class="nav-label">Master</span>
          </a>
          <div
            class="submenu-wrapper"
            [@submenuToggle]="isDropdownOpen('master') ? 'open' : 'closed'"
          >
            <ul class="nav flex-column ms-3">
              <li>
                <a class="nav-child text-white" routerLink="/users">Users</a>
              </li>
              <li>
                <a
                  class="nav-child text-white"
                  routerLink="/party"
                  *ngIf="canAccess('Party Management')"
                  >Party</a
                >
              </li>
              <li>
                <a
                  class="nav-child text-white"
                  routerLink="/product-master"
                  *ngIf="canAccess('Product Master')"
                  >Product Master</a
                >
              </li>
              <li>
                <a class="nav-child text-white" routerLink="/company-master"
                  >Company Master</a
                >
              </li>
              <li>
                <a
                  class="nav-child text-white"
                  routerLink="/raw-material"
                  *ngIf="canAccess('Raw Material Master')"
                  >Raw Material Master</a
                >
              </li>
              <li>
                <a
                  class="nav-child text-white"
                  routerLink="/semi-finished"
                  *ngIf="canAccess('Semi Finished Master')"
                  >Semi Finished Master</a
                >
              </li>
              <li>
                <a
                  class="nav-child text-white"
                  routerLink="/supplier"
                  *ngIf="canAccess('Supplier Management')"
                  >Supplier</a
                >
              </li>
              <li>
                <a
                  class="nav-child text-white"
                  routerLink="/make"
                  *ngIf="canAccess('Make Management')"
                  >Make</a
                >
              </li>
            </ul>
          </div>
        </li>

        <!-- Inwards -->
        <li
          class="nav-item"
          [class.active-dropdown]="isDropdownActive('inwards')"
        >
          <a
            class="nav-link text-light fw-bold"
            (click)="toggleDropdown('inwards')"
          >
            <i class="fas fa-boxes me-2"></i
            ><span class="nav-label">Inwards</span>
          </a>
          <div
            class="submenu-wrapper"
            [@submenuToggle]="isDropdownOpen('inwards') ? 'open' : 'closed'"
          >
            <ul class="nav flex-column ms-3">
              <li>
                <a
                  class="nav-child text-white"
                  routerLink="/raw-material-inward"
                  routerLinkActive="active-nav"
                  *ngIf="canAccess('Raw Material Inward')"
                  >Raw Material Inward</a
                >
              </li>
              <li>
                <a
                  class="nav-child text-white"
                  routerLink="/semi-finished-inward"
                  routerLinkActive="active-nav"
                  *ngIf="canAccess('Semi Finished Inward')"
                  >Semi Finished Inward</a
                >
              </li>
              <li>
                <a
                  class="nav-child text-white"
                  routerLink="/finished-product-inward"
                  routerLinkActive="active-nav"
                  *ngIf="canAccess('Finished Product Inward')"
                  >Finished Product Inward</a
                >
              </li>
            </ul>
          </div>
        </li>

        <!-- Standalone Items -->
        <li
          class="nav-item"
          [class.active-dropdown]="isDropdownActive('purchase-order')"
        >
          <a
            class="nav-link text-light fw-bold"
            routerLink="/purchase-order"
            routerLinkActive="active-nav"
            (click)="toggleDropdown('purchase-order')"
            *ngIf="canAccess('Purchase Order')"
          >
            <i class="fas fa-shopping-cart me-2"></i
            ><span class="nav-label">Purchase Order</span>
          </a>
        </li>
        <li
          class="nav-item"
          [class.active-dropdown]="isDropdownActive('invoice')"
        >
          <a
            class="nav-link text-light fw-bold"
            routerLink="/billing"
            routerLinkActive="active-nav"
            (click)="toggleDropdown('invoice')"
            *ngIf="canAccess('Invoice Management')"
          >
            <i class="fas fa-file-invoice me-2"></i
            ><span class="nav-label">Invoice</span>
          </a>
        </li>
        <li
          class="nav-item"
          [class.active-dropdown]="isDropdownActive('dispatch-list')"
        >
          <a
            class="nav-link text-light fw-bold"
            routerLink="/order-dispatch-list"
            routerLinkActive="active-nav"
            (click)="toggleDropdown('dispatch-list')"
            *ngIf="canAccess('Order Dispatch List')"
          >
            <i class="fas fa-truck me-2"></i
            ><span class="nav-label">Dispatch List</span>
          </a>
        </li>

        <!-- Orders -->
        <li
          class="nav-item"
          [class.active-dropdown]="isDropdownActive('orders')"
        >
          <a
            class="nav-link text-light fw-bold"
            (click)="toggleDropdown('orders')"
            *ngIf="canAccess('Orders Management')"
          >
            <i class="fas fa-clipboard-list me-2"></i
            ><span class="nav-label">Orders</span>
          </a>
          <div
            class="submenu-wrapper"
            [@submenuToggle]="isDropdownOpen('orders') ? 'open' : 'closed'"
          >
            <ul class="nav flex-column ms-3">
              <li>
                <a
                  class="nav-child text-white"
                  routerLink="/order-requests"
                  routerLinkActive="active-nav"
                  *ngIf="canAccess('Order Request List')"
                  >Order Request List</a
                >
              </li>
              <li>
                <a
                  class="nav-child text-white"
                  routerLink="/pending-orders"
                  routerLinkActive="active-nav"
                  *ngIf="canAccess('Order Pending List')"
                  >Order Pending List</a
                >
              </li>
            </ul>
          </div>
        </li>

        <!-- Reports -->
        <li
          class="nav-item"
          [class.active-dropdown]="isDropdownActive('reports')"
        >
          <a
            class="nav-link text-light fw-bold"
            (click)="toggleDropdown('reports')"
          >
            <i class="fas fa-chart-bar me-2"></i
            ><span class="nav-label">Reports</span>
          </a>
          <div
            class="submenu-wrapper"
            [@submenuToggle]="isDropdownOpen('reports') ? 'open' : 'closed'"
          >
            <ul class="nav flex-column ms-3">
              <li>
                <a
                  class="nav-child text-white"
                  routerLink="/stock-reports"
                  routerLinkActive="active-nav"
                  >Stock Reports</a
                >
              </li>
            </ul>
          </div>
        </li>

        <li
          class="nav-item"
          [class.active-dropdown]="isDropdownActive('qc-standard-expiry')"
          style="gap: 2px;"
        >
          <a
            class="nav-link text-light fw-bold"
            routerLink="/qc-standard-expiry"
            routerLinkActive="active-nav"
            (click)="toggleDropdown('qc-standard-expiry')"
          >
            <i class="fas fa-check"></i
            > <span class="nav-label"> QC Standard Expiry</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div class="main-content">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light border-bottom px-3"
      style="height: 50px; width: 100%; display: flex"
    >
      <button
        class="btn btn-outline-secondary me-2"
        type="button"
        (click)="onBtnClick($event)"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="ms-auto">
        <a class="btn btn-outline-danger" (click)="logout()">
          <i class="fas fa-power-off"></i>
          <span class="d-none d-md-inline">Sign out</span>
        </a>
      </div>
    </nav>
    <div (click)="onClickOutside($event)">
      <router-outlet></router-outlet>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/dashboard/dashboard.css */\n.wrapper {\n  display: flex;\n  height: 100vh;\n  overflow: hidden;\n}\n.wrapper.scrollable {\n  height: auto;\n  min-height: 100vh;\n  overflow-y: inherit;\n  overflow-x: hidden;\n}\n.nav-item {\n  cursor: pointer;\n  position: relative;\n}\n.sidebar {\n  background-color: #343a40;\n  color: white;\n  transition: width 0.3s ease;\n  height: auto;\n}\n.sidebar.collapsed {\n  width: 60px;\n}\n.sidebar.expanded {\n  width: 250px;\n}\n.nav-label {\n  display: inline-block;\n  opacity: 1;\n  max-width: 300px;\n  overflow: hidden;\n  white-space: nowrap;\n  transition:\n    opacity 0.5s ease,\n    max-width 0.5s ease,\n    margin-left 0.5s ease;\n  margin-left: 0px;\n}\n.sidebar.collapsed .nav-label {\n  opacity: 0;\n  margin-left: 0;\n  max-width: 0;\n}\n.main-content {\n  flex: 12;\n  transition: margin-left 0.3s ease;\n}\n.main-content.shifted {\n  margin-left: 250px;\n}\n.main-content.default {\n  margin-left: 60px;\n}\n.submenu-wrapper {\n  overflow: hidden;\n  transition:\n    height 0.8s ease,\n    padding-top 0.8s ease,\n    opacity 0.8s ease;\n  padding-left: 10px;\n}\n.submenu-wrapper a {\n  display: block;\n  padding: 5px 15px;\n  color: #c2c7d0;\n  text-decoration: none;\n  font-size: 14px;\n}\n.submenu-wrapper a:hover {\n  background-color: #495057;\n  color: #c2c7d0;\n  border-radius: 4px;\n}\n.brand-logo {\n  display: flex;\n  flex-wrap: nowrap;\n  transition: all 0.8s ease-in-out;\n}\n.brand-logo .logo-img {\n  border-radius: 6px;\n  transition: transform 0.8s ease;\n}\n.brand-logo .brand-name {\n  font-size: 10px;\n  white-space: nowrap;\n  color: #ffffff;\n  transition: opacity 0.8s ease;\n}\n.user-info {\n  padding: 20px;\n  border-top: 1px #c2c7d0 solid;\n  border-width: 100%;\n  padding-left: 0;\n  transition: all 0.8s ease-in-out;\n  border-bottom: 1px #c2c7d0 solid;\n}\n.user-info .user-img {\n  object-fit: cover;\n  transition: transform 0.8s ease;\n}\n.user-info .admin {\n  color: #ffffff;\n  font-size: 0.85rem;\n  white-space: nowrap;\n  transition: opacity 0.8s ease;\n}\n.sidebar.collapsed .brand-name,\n.sidebar.collapsed .admin {\n  opacity: 0;\n  max-width: 0;\n  overflow: hidden;\n  margin-left: 0;\n}\n.logo-img:hover,\n.user-img:hover {\n  transform: scale(1.05);\n}\n.nav-link .nav-label {\n  transition: background-color 0.3s ease, color 0.3s ease;\n}\n.nav-item.active-dropdown .nav-link {\n  background-color: #495057;\n  color: #c2c7d0;\n  border-radius: 4px;\n}\n.nav-item.active-dropdown .nav-label {\n  color: #c2c7d0;\n  background-color: #495057;\n}\n.nav-item.active-dropdown .fa-chevron-down {\n  transform: rotate(180deg);\n  transition: transform 0.3s ease;\n}\n.sidebar.collapsed {\n  width: 60px;\n  overflow: hidden;\n  pointer-events: auto;\n}\n.sidebar.collapsed .submenu-wrapper,\n.sidebar.collapsed .nav-label,\n.sidebar.collapsed .brand-name,\n.sidebar.collapsed .admin {\n  pointer-events: none;\n}\n/*# sourceMappingURL=dashboard.css.map */\n"] }]
  }], () => [{ type: ElementRef }, { type: Authservice }, { type: Router }, { type: UserService }, { type: ChangeDetectorRef }], { sidebarRef: [{
    type: ViewChild,
    args: ["sidebarRef"]
  }], onClickOutside: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/pages/dashboard/dashboard.ts", lineNumber: 46 });
})();
export {
  Dashboard
};
//# sourceMappingURL=chunk-27PSCVTL.js.map
