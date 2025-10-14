import {
  Authservice
} from "./chunk-BZUV33P6.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-OMRRAGFO.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-IW3JCNMQ.js";
import {
  CommonModule,
  NgIf
} from "./chunk-JLFMSZUT.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QAWYXZDT.js";
import "./chunk-46DXP6YY.js";

// src/app/pages/login/login.ts
function Login_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1, " Password is required. ");
    \u0275\u0275elementEnd();
  }
}
function Login_span_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.loginError);
  }
}
var Login = class _Login {
  fb;
  service;
  router;
  route;
  loginForm;
  loginError = "";
  constructor(fb, service, router, route) {
    this.fb = fb;
    this.service = service;
    this.router = router;
    this.route = route;
    this.loginForm = this.fb.group({
      identifier: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  onSubmit() {
    if (!this.loginForm.valid)
      return;
    const loginData = this.loginForm.value;
    this.service.login(loginData).subscribe({
      next: (res) => {
        this.service.setSession(res.accessToken, res.refreshToken, {
          id: res.user.id,
          username: res.user.username,
          fullName: res.user.fullName,
          email: res.user.email,
          phone: res.user.phone,
          role: res.user.role,
          accessList: res.user.accessList || []
        });
        const role = res.user?.role;
        const adminRoles = ["Admin", "Operator", "Supervisor"];
        if (role && adminRoles.includes(role)) {
          this.router.navigate(["/home"], { replaceUrl: true });
        } else {
          const returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/login";
          this.router.navigateByUrl(returnUrl);
        }
      },
      error: (err) => {
        console.error("Login failed", err);
        this.loginError = "Invalid username or password";
      }
    });
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Authservice), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 23, vars: 4, consts: [[1, "d-lg-flex", "half", "min-vh-100"], [1, "bg", "order-1", "order-md-2", "w-50", "d-none", "d-md-block", 2, "background-image", "url('assets/navrang7.jpg')", "background-size", "cover"], [1, "contents", "order-2", "order-md-1", "w-100", "d-flex", "align-items-center"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-7", 2, "gap", "50px"], [1, "login", 3, "ngSubmit", "formGroup"], [1, "form-group", "mb-4"], ["for", "email"], ["formControlName", "identifier", "placeholder", "Username / Email / Phone", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "placeholder", "Your Password", "formControlName", "password", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "w-100", 3, "click", "disabled"], ["class", "text-danger mt-2 d-block", 4, "ngIf"], [1, "text-danger"], [1, "text-danger", "mt-2", "d-block"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1");
      \u0275\u0275text(7, "Login to ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Navrang Chemicals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "form", 6);
      \u0275\u0275listener("ngSubmit", function Login_Template_form_ngSubmit_10_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(11, "div", 7)(12, "label", 8);
      \u0275\u0275text(13, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 7)(16, "label", 10);
      \u0275\u0275text(17, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 11);
      \u0275\u0275template(19, Login_div_19_Template, 2, 0, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 13);
      \u0275\u0275listener("click", function Login_Template_button_click_20_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275text(21, "Log In");
      \u0275\u0275elementEnd();
      \u0275\u0275template(22, Login_span_22_Template, 2, 1, "span", 14);
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(10);
      \u0275\u0275property("formGroup", ctx.loginForm);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ((tmp_1_0 = ctx.loginForm.get("password")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx.loginForm.get("password")) == null ? null : tmp_1_0.invalid));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loginForm.invalid);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loginError);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgIf], styles: ["\n\n.half[_ngcontent-%COMP%] {\n  display: flex;\n}\n.bg[_ngcontent-%COMP%] {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=login.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Component,
    args: [{ standalone: true, selector: "app-login", imports: [ReactiveFormsModule, CommonModule], template: `<div class="d-lg-flex half min-vh-100">
  <div class="bg order-1 order-md-2 w-50 d-none d-md-block" 
       style="background-image: url('assets/navrang7.jpg'); background-size: cover;">
  </div>

  <div class="contents order-2 order-md-1 w-100 d-flex align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-7" style="gap: 50px;">
          <h1>Login to <strong>Navrang Chemicals</strong></h1>

          <form class="login" [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <div class="form-group mb-4">
              <label for="email">Email</label>
               <input formControlName="identifier" class="form-control" placeholder="Username / Email / Phone">
             
        
            </div>

            <div class="form-group mb-4">
              <label for="password">Password</label>
              <input type="password"
                     class="form-control"
                     id="password"
                     placeholder="Your Password"
                     formControlName="password">
              <div class="text-danger" *ngIf="loginForm.get('password')?.touched && loginForm.get('password')?.invalid">
                Password is required.
              </div>
            </div>

            <button type="submit" class="btn btn-primary w-100" [disabled]="loginForm.invalid" (click)="onSubmit()">Log In</button>
            <span class="text-danger mt-2 d-block" *ngIf="loginError">{{ loginError }}</span>
          </form>

        </div>
      </div>
    </div>
  </div>
</div>
`, styles: ["/* src/app/pages/login/login.css */\n.half {\n  display: flex;\n}\n.bg {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=login.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: Authservice }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "src/app/pages/login/login.ts", lineNumber: 19 });
})();
export {
  Login
};
//# sourceMappingURL=chunk-YJ26IZQA.js.map
