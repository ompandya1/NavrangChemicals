import {
  Authservice
} from "./chunk-BZUV33P6.js";
import {
  UserService
} from "./chunk-U7SY2SFW.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-OMRRAGFO.js";
import {
  Router
} from "./chunk-IW3JCNMQ.js";
import {
  CommonModule,
  HttpClient,
  NgForOf
} from "./chunk-JLFMSZUT.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QAWYXZDT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-46DXP6YY.js";

// src/app/components/add-user/add-user.ts
function AddUser_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "input", 49);
    \u0275\u0275listener("change", function AddUser_div_73_Template_input_change_1_listener() {
      const permission_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePermission(permission_r2.id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const permission_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("id", "perm-" + permission_r2.id)("checked", ctx_r2.isChecked(permission_r2.id));
    \u0275\u0275advance();
    \u0275\u0275property("for", "perm-" + permission_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(permission_r2.label);
  }
}
var AddUser = class _AddUser {
  fb;
  http;
  authService;
  service;
  router;
  userForm;
  users = [];
  // Menu permissions (could be fetched from backend later)
  menuPermissions = [
    { id: 2, label: "Party Management" },
    { id: 3, label: "Product Master" },
    { id: 4, label: "Invoice Management" },
    { id: 8, label: "Order Dispatch List" },
    { id: 5, label: "Orders Management" },
    { id: 6, label: "Order Request List" },
    { id: 7, label: "Order Pending List" },
    { id: 10, label: "Raw Material Master" },
    { id: 11, label: "Supplier Management" },
    { id: 12, label: "Make Management" },
    { id: 13, label: "Purchase Order" },
    { id: 14, label: "Raw Material Inward" },
    { id: 15, label: "Semi Finished Master" },
    { id: 16, label: "Semi Finished Inward" },
    { id: 17, label: "Finished Product Inward" }
  ];
  // Track selected permissions
  permissionSet = /* @__PURE__ */ new Set();
  constructor(fb, http, authService, service, router) {
    this.fb = fb;
    this.http = http;
    this.authService = authService;
    this.service = service;
    this.router = router;
    this.userForm = this.fb.group({
      username: ["", Validators.required],
      fullName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      role: ["", Validators.required],
      phone: ["", Validators.required],
      company: ["", Validators.required]
    });
  }
  togglePermission(id) {
    if (this.permissionSet.has(id)) {
      this.permissionSet.delete(id);
    } else {
      this.permissionSet.add(id);
    }
  }
  isChecked(id) {
    return this.permissionSet.has(id);
  }
  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    const payload = __spreadProps(__spreadValues({}, this.userForm.value), {
      accessList: this.menuPermissions.filter((p) => this.permissionSet.has(p.id)).map((p) => ({ id: p.id, label: p.label }))
      // include id+label
    });
    const token = this.authService.getToken();
    console.log("Submitting Payload", payload);
    this.service.createUser(payload).subscribe({
      next: () => {
        alert("\u2705 User created successfully");
        this.resetForm();
        this.router.navigate(["/users"]);
      },
      error: (err) => {
        console.error("\u274C Upload failed", err);
        alert(err.error?.message || "Upload failed. Please try again.");
      }
    });
  }
  cancelEdit() {
    this.resetForm();
  }
  resetForm() {
    this.userForm.reset();
    this.permissionSet.clear();
  }
  static \u0275fac = function AddUser_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddUser)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(Authservice), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddUser, selectors: [["app-add-user"]], decls: 81, vars: 2, consts: [[3, "ngSubmit", "formGroup"], [1, "card-body", "row", 2, "gap", "0"], [1, "form-group", "row"], ["for", "userName", 1, "col-sm-3", "col-form-label"], [1, "fas", "fa-user"], [1, "col-sm-7"], [1, "input-group"], ["type", "text", "id", "userName", "placeholder", "Enter user name", "formControlName", "username", 1, "form-control"], [1, "fas", "fa-user", "input-icon"], ["for", "fullName", 1, "col-sm-3", "col-form-label"], [1, "fas", "fa-id-badge"], ["type", "text", "id", "fullName", "placeholder", "Enter full name", "formControlName", "fullName", 1, "form-control"], [1, "fas", "fa-id-badge", "input-icon"], ["for", "email", 1, "col-sm-3", "col-form-label"], [1, "fas", "fa-envelope"], ["type", "email", "id", "email", "placeholder", "Enter email address", "formControlName", "email", 1, "form-control"], [1, "fas", "fa-envelope", "input-icon"], ["for", "mobileNo", 1, "col-sm-3", "col-form-label"], [1, "fas", "fa-phone"], ["type", "tel", "id", "mobileNo", "placeholder", "Enter mobile number", "formControlName", "phone", 1, "form-control"], [1, "fas", "fa-phone", "input-icon"], ["for", "password", 1, "col-sm-3", "col-form-label"], [1, "fas", "fa-lock"], ["type", "password", "id", "password", "placeholder", "Enter password", "formControlName", "password", 1, "form-control"], ["id", "togglePassword", 1, "fas", "fa-eye-slash", "input-icon", 2, "cursor", "pointer"], ["for", "userRoleId", 1, "col-sm-3", "col-form-label"], [1, "fas", "fa-user-tag"], [1, "col-sm-4"], ["id", "userRoleId", "formControlName", "role", 1, "form-control", "select2"], ["value", ""], ["value", "Operator"], ["value", "Supervisor"], ["for", "companyId", 1, "col-1-5", "mx-0", "col-form-label"], [1, "fas", "fa-building"], ["id", "companyId", "formControlName", "company", 1, "form-control", "select2"], ["value", "Navrang"], ["value", "Navkar"], ["value", "Navtex"], [1, "menu-access-section"], [1, "menu-access-title"], [1, "fas", "fa-key"], [1, "checkbox-group"], ["class", "checkbox-item", 4, "ngFor", "ngForOf"], [1, "card-footer", "d-flex", "justify-content-between", "align-items-center"], ["type", "submit", 1, "btn", "btn-info", "mb-0"], [1, "fas", "fa-save"], ["routerLink", "/users", 1, "btn", "btn-danger", "ms-auto"], [1, "fas", "fa-times"], [1, "checkbox-item"], ["type", "checkbox", 1, "checkbox", 3, "change", "id", "checked"], [3, "for"]], template: function AddUser_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "form", 0);
      \u0275\u0275listener("ngSubmit", function AddUser_Template_form_ngSubmit_0_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "label", 3);
      \u0275\u0275element(4, "i", 4);
      \u0275\u0275text(5, " User Name ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6);
      \u0275\u0275element(8, "input", 7)(9, "i", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 2)(11, "label", 9);
      \u0275\u0275element(12, "i", 10);
      \u0275\u0275text(13, " Full Name ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 5)(15, "div", 6);
      \u0275\u0275element(16, "input", 11)(17, "i", 12);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(18, "div", 2)(19, "label", 13);
      \u0275\u0275element(20, "i", 14);
      \u0275\u0275text(21, " Email ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 5)(23, "div", 6);
      \u0275\u0275element(24, "input", 15)(25, "i", 16);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 2)(27, "label", 17);
      \u0275\u0275element(28, "i", 18);
      \u0275\u0275text(29, " Mobile No ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 5)(31, "div", 6);
      \u0275\u0275element(32, "input", 19)(33, "i", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(34, "div", 2)(35, "label", 21);
      \u0275\u0275element(36, "i", 22);
      \u0275\u0275text(37, " Password ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 5)(39, "div", 6);
      \u0275\u0275element(40, "input", 23)(41, "i", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "div", 2)(43, "label", 25);
      \u0275\u0275element(44, "i", 26);
      \u0275\u0275text(45, " Role ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 27)(47, "select", 28)(48, "option", 29);
      \u0275\u0275text(49, "Select Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "option", 30);
      \u0275\u0275text(51, "Operator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "option", 31);
      \u0275\u0275text(53, "Supervisor");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(54, "div", 2)(55, "label", 32);
      \u0275\u0275element(56, "i", 33);
      \u0275\u0275text(57, " Company ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "div", 27)(59, "select", 34)(60, "option", 29);
      \u0275\u0275text(61, "Select Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "option", 35);
      \u0275\u0275text(63, "Navrang");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "option", 36);
      \u0275\u0275text(65, "Navkar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "option", 37);
      \u0275\u0275text(67, "Navtex");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(68, "div", 38)(69, "div", 39);
      \u0275\u0275element(70, "i", 40);
      \u0275\u0275text(71, " User Menu Access Permissions ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 41);
      \u0275\u0275template(73, AddUser_div_73_Template, 4, 4, "div", 42);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(74, "div", 43)(75, "button", 44);
      \u0275\u0275element(76, "i", 45);
      \u0275\u0275text(77, " Save User ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "a", 46);
      \u0275\u0275element(79, "i", 47);
      \u0275\u0275text(80, " Cancel ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("formGroup", ctx.userForm);
      \u0275\u0275advance(73);
      \u0275\u0275property("ngForOf", ctx.menuPermissions);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, CommonModule, NgForOf], styles: ['\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    sans-serif;\n  min-height: 100vh;\n  padding: 20px;\n  color: #333;\n}\n.container-fluid[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 20px;\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  height: auto;\n  overflow: hidden;\n  transition: all 0.5s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);\n  transform: translateY(-5px);\n}\n.card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n  color: white;\n  padding: 25px 30px;\n  border: none;\n  position: relative;\n  overflow: hidden;\n}\n.card-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 70%;\n  background:\n    linear-gradient(\n      45deg,\n      transparent 30%,\n      rgba(255, 255, 255, 0.1) 50%,\n      transparent 70%);\n  transform: translateX(-100%);\n  transition: transform 0.6s;\n}\n.card[_ngcontent-%COMP%]:hover   .card-header[_ngcontent-%COMP%]::before {\n  transform: translateX(100%);\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card-title[_ngcontent-%COMP%]::before {\n  content: "\\f007";\n  font-family: "Font Awesome 6 Free";\n  font-weight: 900;\n  font-size: 20px;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_slideInUp 0.6s ease forwards;\n}\n.form-group[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.form-group[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.form-group[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.3s;\n}\n.form-group[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.4s;\n}\n.form-group[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.5s;\n}\n.form-group[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 0.6s;\n}\n.form-group[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: 0.7s;\n}\n@keyframes _ngcontent-%COMP%_slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.col-form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.form-control[_ngcontent-%COMP%], \n.select2[_ngcontent-%COMP%] {\n  height: 50px;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 0 16px;\n  font-size: 16px;\n  transition: all 0.3s ease;\n  background: rgba(255, 255, 255, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.form-control[_ngcontent-%COMP%]:focus, \n.select2[_ngcontent-%COMP%]:focus {\n  border-color:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);\n  outline: none;\n  background: white;\n  transform: translateY(-2px);\n}\n.form-control[_ngcontent-%COMP%]:hover, \n.select2[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  background: white;\n}\n.input-group[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  transition: color 0.3s ease;\n  z-index: 10;\n}\n.form-control[_ngcontent-%COMP%]:focus    + .input-icon[_ngcontent-%COMP%] {\n  color: #17A2B8;\n}\n.menu-access-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n  border-radius: 16px;\n  padding: 25px;\n  margin-top: 20px;\n  border: 1px solid #e2e8f0;\n}\n.menu-access-title[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 20px;\n  text-align: center;\n  position: relative;\n}\n.menu-access-title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 60px;\n  height: 3px;\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n  border-radius: 2px;\n}\n.checkbox-group[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 15px;\n  margin-bottom: 20px;\n  width: 100%;\n}\n.checkbox-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  border-radius: 12px;\n  padding: 15px 20px;\n  border: 2px solid transparent;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  text-align: center;\n}\n.checkbox-item[_ngcontent-%COMP%]:hover {\n  border-color:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(79, 70, 229, 0.15);\n}\n.checkbox-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n.checkbox-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #374151;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin: 0;\n  position: relative;\n  padding-left: 30px;\n}\n.checkbox-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 20px;\n  border: 2px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  transition: all 0.3s ease;\n}\n.checkbox-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::before {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n  border-color:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n}\n.checkbox-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]::after {\n  content: "\\f00c";\n  font-family: "Font Awesome 6 Free";\n  font-weight: 900;\n  position: absolute;\n  left: 4px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: white;\n  font-size: 12px;\n  opacity: 0;\n  transition: all 0.3s ease;\n}\n.checkbox-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n.checkbox-item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  color:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n}\n.card-footer[_ngcontent-%COMP%] {\n  padding: 25px 40px;\n  background: rgba(248, 250, 252, 0.8);\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 12px 30px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  position: relative;\n  overflow: hidden;\n}\n.btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s;\n}\n.btn[_ngcontent-%COMP%]:hover::before {\n  left: 100%;\n}\n.btn-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n  color: white;\n  box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);\n}\n.btn-info[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0891b2,\n      #0e7490);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: white;\n  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626,\n      #b91c1c);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);\n}\n.field-validation-error[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 14px;\n  margin-top: 5px;\n  display: block;\n  animation: _ngcontent-%COMP%_shake 0.5s ease-in-out;\n}\n@keyframes _ngcontent-%COMP%_shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-5px);\n  }\n  75% {\n    transform: translateX(5px);\n  }\n}\n.loading[_ngcontent-%COMP%] {\n  position: relative;\n  pointer-events: none;\n}\n.loading[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 20px;\n  height: 20px;\n  border: 2px solid transparent;\n  border-top: 2px solid white;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .container-fluid[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .card-body[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .checkbox-group[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .card-footer[_ngcontent-%COMP%] {\n    padding: 20px;\n    flex-direction: column;\n    gap: 10px;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.success-message[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  color: white;\n  padding: 15px 20px;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  display: none;\n  animation: _ngcontent-%COMP%_slideInDown 0.5s ease;\n}\n@keyframes _ngcontent-%COMP%_slideInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (min-width: 1024px) {\n  .card-body[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 24px;\n  }\n  .form-group[_ngcontent-%COMP%] {\n    flex: 1 1 45%;\n  }\n}\n.col-1-5[_ngcontent-%COMP%] {\n  flex: 0 0 12.5%;\n  max-width: 12.5%;\n}\n/*# sourceMappingURL=add-user.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddUser, [{
    type: Component,
    args: [{ selector: "app-add-user", standalone: true, imports: [FormsModule, ReactiveFormsModule, CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<!-- Converted version with Angular Reactive Forms support -->
<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <div class="card-body row" style="gap: 0">
    <!-- User Name -->
    <div class="form-group row">
      <label for="userName" class="col-sm-3 col-form-label">
        <i class="fas fa-user"></i> User Name
      </label>
      <div class="col-sm-7">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            id="userName"
            placeholder="Enter user name"
            formControlName="username"
          />
          <i class="fas fa-user input-icon"></i>
        </div>
      </div>
    </div>

    <!-- Full Name -->
    <div class="form-group row">
      <label for="fullName" class="col-sm-3 col-form-label">
        <i class="fas fa-id-badge"></i> Full Name
      </label>
      <div class="col-sm-7">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            id="fullName"
            placeholder="Enter full name"
            formControlName="fullName"
          />
          <i class="fas fa-id-badge input-icon"></i>
        </div>
      </div>
    </div>

    <!-- Email -->
    <div class="form-group row">
      <label for="email" class="col-sm-3 col-form-label">
        <i class="fas fa-envelope"></i> Email
      </label>
      <div class="col-sm-7">
        <div class="input-group">
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email address"
            formControlName="email"
          />
          <i class="fas fa-envelope input-icon"></i>
        </div>
      </div>
    </div>

    <!-- Mobile No -->
    <div class="form-group row">
      <label for="mobileNo" class="col-sm-3 col-form-label">
        <i class="fas fa-phone"></i> Mobile No
      </label>
      <div class="col-sm-7">
        <div class="input-group">
          <input
            type="tel"
            class="form-control"
            id="mobileNo"
            placeholder="Enter mobile number"
            formControlName="phone"
          />
          <i class="fas fa-phone input-icon"></i>
        </div>
      </div>
    </div>

    <!-- Password -->
    <div class="form-group row">
      <label for="password" class="col-sm-3 col-form-label">
        <i class="fas fa-lock"></i> Password
      </label>
      <div class="col-sm-7">
        <div class="input-group">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter password"
            formControlName="password"
          />
          <i
            class="fas fa-eye-slash input-icon"
            id="togglePassword"
            style="cursor: pointer"
          ></i>
        </div>
      </div>
    </div>

    <!-- Role -->
    <div class="form-group row">
      <label for="userRoleId" class="col-sm-3 col-form-label">
        <i class="fas fa-user-tag"></i> Role
      </label>
      <div class="col-sm-4">
        <select
          class="form-control select2"
          id="userRoleId"
          formControlName="role"
        >
          <option value="">Select Role</option>
          <option value="Operator">Operator</option>
          <option value="Supervisor">Supervisor</option>
        </select>
      </div>
    </div>

    <!-- Company -->
    <div class="form-group row">
      <label for="companyId" class="col-1-5 mx-0 col-form-label">
        <i class="fas fa-building"></i> Company
      </label>
      <div class="col-sm-4">
        <select
          class="form-control select2"
          id="companyId"
          formControlName="company"
        >
          <option value="">Select Company</option>
          <option value="Navrang">Navrang</option>
          <option value="Navkar">Navkar</option>
          <option value="Navtex">Navtex</option>
        </select>
      </div>
    </div>

    <!-- User Menu Access Permissions -->
    <div class="menu-access-section">
      <div class="menu-access-title">
        <i class="fas fa-key"></i> User Menu Access Permissions
      </div>

      <div class="checkbox-group">
        <div *ngFor="let permission of menuPermissions" class="checkbox-item">
          <input
            type="checkbox"
            class="checkbox"
            [id]="'perm-' + permission.id"
            [checked]="isChecked(permission.id)"
            (change)="togglePermission(permission.id)"
          />
          <label [for]="'perm-' + permission.id" >{{ permission.label }}</label>
        </div>
      </div>
    </div>
  </div>

  <div class="card-footer d-flex justify-content-between align-items-center">
    <button type="submit" class="btn btn-info mb-0">
      <i class="fas fa-save"></i> Save User
    </button>
    <a routerLink="/users" class="btn btn-danger ms-auto">
      <i class="fas fa-times"></i> Cancel
    </a>
  </div>
</form>
`, styles: ['/* src/app/components/add-user/add-user.css */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    sans-serif;\n  min-height: 100vh;\n  padding: 20px;\n  color: #333;\n}\n.container-fluid {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.card {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 20px;\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  height: auto;\n  overflow: hidden;\n  transition: all 0.5s ease;\n}\n.card:hover {\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);\n  transform: translateY(-5px);\n}\n.card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n  color: white;\n  padding: 25px 30px;\n  border: none;\n  position: relative;\n  overflow: hidden;\n}\n.card-header::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 70%;\n  background:\n    linear-gradient(\n      45deg,\n      transparent 30%,\n      rgba(255, 255, 255, 0.1) 50%,\n      transparent 70%);\n  transform: translateX(-100%);\n  transition: transform 0.6s;\n}\n.card:hover .card-header::before {\n  transform: translateX(100%);\n}\n.card-title {\n  font-size: 24px;\n  font-weight: 600;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card-title::before {\n  content: "\\f007";\n  font-family: "Font Awesome 6 Free";\n  font-weight: 900;\n  font-size: 20px;\n}\n.card-body {\n  padding: 20px;\n}\n.form-group {\n  margin-bottom: 25px;\n  opacity: 0;\n  animation: slideInUp 0.6s ease forwards;\n}\n.form-group:nth-child(1) {\n  animation-delay: 0.1s;\n}\n.form-group:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.form-group:nth-child(3) {\n  animation-delay: 0.3s;\n}\n.form-group:nth-child(4) {\n  animation-delay: 0.4s;\n}\n.form-group:nth-child(5) {\n  animation-delay: 0.5s;\n}\n.form-group:nth-child(6) {\n  animation-delay: 0.6s;\n}\n.form-group:nth-child(7) {\n  animation-delay: 0.7s;\n}\n@keyframes slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.col-form-label {\n  font-weight: 600;\n  color: #374151;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.form-control,\n.select2 {\n  height: 50px;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 0 16px;\n  font-size: 16px;\n  transition: all 0.3s ease;\n  background: rgba(255, 255, 255, 0.8);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.form-control:focus,\n.select2:focus {\n  border-color:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);\n  outline: none;\n  background: white;\n  transform: translateY(-2px);\n}\n.form-control:hover,\n.select2:hover {\n  border-color: #9ca3af;\n  background: white;\n}\n.input-group {\n  position: relative;\n}\n.input-icon {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: #9ca3af;\n  transition: color 0.3s ease;\n  z-index: 10;\n}\n.form-control:focus + .input-icon {\n  color: #17A2B8;\n}\n.menu-access-section {\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #e2e8f0 100%);\n  border-radius: 16px;\n  padding: 25px;\n  margin-top: 20px;\n  border: 1px solid #e2e8f0;\n}\n.menu-access-title {\n  font-size: 18px;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 20px;\n  text-align: center;\n  position: relative;\n}\n.menu-access-title::after {\n  content: "";\n  position: absolute;\n  bottom: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 60px;\n  height: 3px;\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n  border-radius: 2px;\n}\n.checkbox-group {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 15px;\n  margin-bottom: 20px;\n  width: 100%;\n}\n.checkbox-item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n  border-radius: 12px;\n  padding: 15px 20px;\n  border: 2px solid transparent;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);\n  text-align: center;\n}\n.checkbox-item:hover {\n  border-color:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(79, 70, 229, 0.15);\n}\n.checkbox-item input[type=checkbox] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n}\n.checkbox-item label {\n  font-weight: 500;\n  color: #374151;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin: 0;\n  position: relative;\n  padding-left: 30px;\n}\n.checkbox-item label::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  height: 20px;\n  border: 2px solid #d1d5db;\n  border-radius: 6px;\n  background: white;\n  transition: all 0.3s ease;\n}\n.checkbox-item input[type=checkbox]:checked + label::before {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n  border-color:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n}\n.checkbox-item label::after {\n  content: "\\f00c";\n  font-family: "Font Awesome 6 Free";\n  font-weight: 900;\n  position: absolute;\n  left: 4px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: white;\n  font-size: 12px;\n  opacity: 0;\n  transition: all 0.3s ease;\n}\n.checkbox-item input[type=checkbox]:checked + label::after {\n  opacity: 1;\n}\n.checkbox-item input[type=checkbox]:checked + label {\n  color:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n}\n.card-footer {\n  padding: 25px 40px;\n  background: rgba(248, 250, 252, 0.8);\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.btn {\n  padding: 12px 30px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  text-decoration: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  position: relative;\n  overflow: hidden;\n}\n.btn::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.2),\n      transparent);\n  transition: left 0.5s;\n}\n.btn:hover::before {\n  left: 100%;\n}\n.btn-info {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n  color: white;\n  box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);\n}\n.btn-info:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0891b2,\n      #0e7490);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4);\n}\n.btn-danger {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: white;\n  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);\n}\n.btn-danger:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626,\n      #b91c1c);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);\n}\n.field-validation-error {\n  color: #ef4444;\n  font-size: 14px;\n  margin-top: 5px;\n  display: block;\n  animation: shake 0.5s ease-in-out;\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(-5px);\n  }\n  75% {\n    transform: translateX(5px);\n  }\n}\n.loading {\n  position: relative;\n  pointer-events: none;\n}\n.loading::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 20px;\n  height: 20px;\n  border: 2px solid transparent;\n  border-top: 2px solid white;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .container-fluid {\n    padding: 10px;\n  }\n  .card-body {\n    padding: 20px;\n  }\n  .checkbox-group {\n    grid-template-columns: 1fr;\n  }\n  .card-footer {\n    padding: 20px;\n    flex-direction: column;\n    gap: 10px;\n  }\n  .btn {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.success-message {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  color: white;\n  padding: 15px 20px;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  display: none;\n  animation: slideInDown 0.5s ease;\n}\n@keyframes slideInDown {\n  from {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (min-width: 1024px) {\n  .card-body {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 24px;\n  }\n  .form-group {\n    flex: 1 1 45%;\n  }\n}\n.col-1-5 {\n  flex: 0 0 12.5%;\n  max-width: 12.5%;\n}\n/*# sourceMappingURL=add-user.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: HttpClient }, { type: Authservice }, { type: UserService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddUser, { className: "AddUser", filePath: "src/app/components/add-user/add-user.ts", lineNumber: 18 });
})();
export {
  AddUser
};
//# sourceMappingURL=chunk-UPLLSESG.js.map
