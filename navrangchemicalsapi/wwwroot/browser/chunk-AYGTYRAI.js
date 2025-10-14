import {
  ExpiryService
} from "./chunk-3QQ64GUR.js";
import {
  ProductService
} from "./chunk-XUIXJ5QK.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-QAWYXZDT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-46DXP6YY.js";

// src/app/components/add-expiry/add-expiry.ts
function AddExpiry_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275property("value", p_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r1.productName, " ");
  }
}
var AddExpiry = class _AddExpiry {
  fb;
  http;
  productService;
  expiryService;
  router;
  qcForm;
  products = [];
  // API driven product dropdown
  expiryDate = "";
  constructor(fb, http, productService, expiryService, router) {
    this.fb = fb;
    this.http = http;
    this.productService = productService;
    this.expiryService = expiryService;
    this.router = router;
  }
  ngOnInit() {
    this.qcForm = this.fb.group({
      productId: [null, Validators.required],
      preservingDate: ["", Validators.required],
      validity: [1, [Validators.required, Validators.min(1)]],
      strength: [""],
      de: [""],
      da: [""],
      db: [""],
      dc: [""]
    });
    this.loadProducts();
    this.qcForm.valueChanges.subscribe((form) => {
      if (form.preservingDate && form.validity) {
        const preserve = new Date(form.preservingDate);
        preserve.setMonth(preserve.getMonth() + +form.validity);
        this.expiryDate = preserve.toISOString().split("T")[0];
      } else {
        this.expiryDate = "";
      }
    });
  }
  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (res) => this.products = res,
      error: (err) => console.error("Error loading products:", err)
    });
  }
  save() {
    if (this.qcForm.invalid)
      return;
    const formValue = this.qcForm.value;
    const payload = __spreadProps(__spreadValues({}, formValue), {
      productName: this.products.find((p) => p.id === formValue.productId)?.productName ?? "",
      preservationDate: formValue.preservingDate ? formValue.preservingDate.toString() : "",
      expiryDate: this.expiryDate ?? ""
    });
    this.expiryService.addProduct(payload).subscribe({
      next: () => {
        alert("QC Expiry added successfully \u2705");
        this.qcForm.reset({ validity: 1 });
        this.router.navigate(["/qc-standard-expiry"]);
      },
      error: (err) => console.error("Error saving QC expiry:", err)
    });
  }
  static \u0275fac = function AddExpiry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddExpiry)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(ExpiryService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddExpiry, selectors: [["app-add-expiry"]], decls: 53, vars: 4, consts: [[1, "content"], [1, "container-fluid"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [3, "ngSubmit", "formGroup"], [1, "card-body"], [1, "form-group"], [1, "col-form-label"], ["formControlName", "productId", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-group", "row", "align-items-center", 2, "flex-direction", "row", "align-items", "center"], [1, "col-md-4"], ["type", "date", "formControlName", "preservingDate", 1, "form-control"], [1, "col-md-2"], ["type", "number", "formControlName", "validity", "min", "1", 1, "form-control"], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], ["type", "number", "formControlName", "strength", 1, "form-control"], ["type", "number", "formControlName", "de", 1, "form-control"], ["type", "number", "formControlName", "da", 1, "form-control"], ["type", "number", "formControlName", "db", 1, "form-control"], ["type", "number", "formControlName", "dc", 1, "form-control"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-info", 3, "disabled"], ["routerLink", "/qc-standard-expiry", 1, "btn", "btn-danger"], [3, "value"]], template: function AddExpiry_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h3", 4);
      \u0275\u0275text(5, "Add QC Standard Expiry");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "form", 5);
      \u0275\u0275listener("ngSubmit", function AddExpiry_Template_form_ngSubmit_6_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "label", 8);
      \u0275\u0275text(10, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "select", 9)(12, "option", 10);
      \u0275\u0275text(13, "-- Select Product --");
      \u0275\u0275elementEnd();
      \u0275\u0275template(14, AddExpiry_option_14_Template, 2, 2, "option", 11);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 12)(16, "div", 13)(17, "label", 8);
      \u0275\u0275text(18, "Standard Preserving Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "input", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 15)(21, "label", 8);
      \u0275\u0275text(22, "Validity (Months)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 13)(25, "label", 8);
      \u0275\u0275text(26, "Expiry Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 7)(29, "label", 8);
      \u0275\u0275text(30, "Strength");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 7)(33, "label", 8);
      \u0275\u0275text(34, "DE");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 7)(37, "label", 8);
      \u0275\u0275text(38, "DA");
      \u0275\u0275elementEnd();
      \u0275\u0275element(39, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 7)(41, "label", 8);
      \u0275\u0275text(42, "DB");
      \u0275\u0275elementEnd();
      \u0275\u0275element(43, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 7)(45, "label", 8);
      \u0275\u0275text(46, "DC");
      \u0275\u0275elementEnd();
      \u0275\u0275element(47, "input", 22);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 23)(49, "button", 24);
      \u0275\u0275text(50, " Save ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "a", 25);
      \u0275\u0275text(52, "Cancel");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.qcForm);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.products);
      \u0275\u0275advance(13);
      \u0275\u0275property("value", ctx.expiryDate);
      \u0275\u0275advance(22);
      \u0275\u0275property("disabled", ctx.qcForm.invalid);
    }
  }, dependencies: [CommonModule, NgForOf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ['\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    sans-serif;\n  min-height: 100vh;\n  padding: 20px;\n  color: #333;\n  overflow: scroll;\n}\n.container-fluid[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 20px;\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  overflow: hidden;\n  transition: all 0.5s ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);\n  transform: translateY(-5px);\n}\n.card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n  color: white;\n  padding: 25px 30px;\n  position: relative;\n}\n.card-header[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 70%;\n  background:\n    linear-gradient(\n      45deg,\n      transparent 30%,\n      rgba(255, 255, 255, 0.1) 50%,\n      transparent 70%);\n  transition: transform 0.6s;\n}\n.card[_ngcontent-%COMP%]:hover   .card-header[_ngcontent-%COMP%]::before {\n  transform: translateX(200%);\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card-title[_ngcontent-%COMP%]::before {\n  content: "\\f007";\n  font-family: "Font Awesome 6 Free";\n  font-weight: 900;\n  font-size: 20px;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 8px;\n  animation: _ngcontent-%COMP%_slideInUp 0.5s ease forwards;\n}\n@keyframes _ngcontent-%COMP%_slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(15px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.col-form-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #374151;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.form-control[_ngcontent-%COMP%] {\n  height: 50px;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 0 16px;\n  font-size: 15px;\n  transition: all 0.3s ease;\n  background: rgba(255, 255, 255, 0.9);\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #06b6d4;\n  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.15);\n  outline: none;\n  background: white;\n  transform: translateY(-2px);\n}\n.card-footer[_ngcontent-%COMP%] {\n  padding: 20px;\n  background: rgba(248, 250, 252, 0.8);\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 12px 28px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 15px;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.btn-info[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n  color: white;\n  box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);\n}\n.btn-info[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0891b2,\n      #0e7490);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4);\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: white;\n  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626,\n      #b91c1c);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);\n}\n/*# sourceMappingURL=add-expiry.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddExpiry, [{
    type: Component,
    args: [{ selector: "app-add-expiry", standalone: true, imports: [CommonModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<section class="content">\r\n  <div class="container-fluid">\r\n    <div class="card card-info">\r\n      <div class="card-header">\r\n        <h3 class="card-title">Add QC Standard Expiry</h3>\r\n      </div>\r\n\r\n      <form [formGroup]="qcForm" (ngSubmit)="save()">\r\n        <div class="card-body">\r\n          <!-- Product Dropdown -->\r\n          <div class="form-group">\r\n            <label class="col-form-label">Product</label>\r\n            <select class="form-control" formControlName="productId">\r\n              <option value="">-- Select Product --</option>\r\n              <option *ngFor="let p of products" [value]="p.id">\r\n                {{ p.productName }}\r\n              </option>\r\n            </select>\r\n          </div>\r\n\r\n          <!-- Preserving Date + Validity -->\r\n          <div class="form-group row align-items-center" style=" flex-direction: row; align-items: center;">\r\n            <!-- Preserving Date -->\r\n            <div class="col-md-4">\r\n              <label class="col-form-label">Standard Preserving Date</label>\r\n              <input\r\n                type="date"\r\n                class="form-control"\r\n                formControlName="preservingDate"\r\n              />\r\n            </div>\r\n\r\n            <!-- Validity (Months) -->\r\n            <div class="col-md-2">\r\n              <label class="col-form-label">Validity (Months)</label>\r\n              <input\r\n                type="number"\r\n                class="form-control"\r\n                formControlName="validity"\r\n                min="1"\r\n              />\r\n            </div>\r\n\r\n            <!-- Expiry Date -->\r\n            <div class="col-md-4">\r\n              <label class="col-form-label">Expiry Date</label>\r\n              <input\r\n                type="text"\r\n                class="form-control"\r\n                [value]="expiryDate"\r\n                disabled\r\n              />\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Strength / DE / DA / DB / DC -->\r\n          <div class="form-group">\r\n            <label class="col-form-label">Strength</label>\r\n            <input\r\n              type="number"\r\n              class="form-control"\r\n              formControlName="strength"\r\n            />\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label class="col-form-label">DE</label>\r\n            <input type="number" class="form-control" formControlName="de" />\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label class="col-form-label">DA</label>\r\n            <input type="number" class="form-control" formControlName="da" />\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label class="col-form-label">DB</label>\r\n            <input type="number" class="form-control" formControlName="db" />\r\n          </div>\r\n\r\n          <div class="form-group">\r\n            <label class="col-form-label">DC</label>\r\n            <input type="number" class="form-control" formControlName="dc" />\r\n          </div>\r\n        </div>\r\n\r\n        <div class="card-footer">\r\n          <button\r\n            type="submit"\r\n            class="btn btn-info"\r\n            [disabled]="qcForm.invalid"\r\n          >\r\n            Save\r\n          </button>\r\n          <a routerLink="/qc-standard-expiry" class="btn btn-danger">Cancel</a>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</section>\r\n', styles: ['/* src/app/components/add-expiry/add-expiry.css */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  font-family:\n    "Inter",\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    Roboto,\n    Oxygen,\n    Ubuntu,\n    Cantarell,\n    sans-serif;\n  min-height: 100vh;\n  padding: 20px;\n  color: #333;\n  overflow: scroll;\n}\n.container-fluid {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.card {\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(20px);\n  backdrop-filter: blur(20px);\n  border-radius: 20px;\n  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  overflow: hidden;\n  transition: all 0.5s ease;\n}\n.card:hover {\n  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);\n  transform: translateY(-5px);\n}\n.card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n  color: white;\n  padding: 25px 30px;\n  position: relative;\n}\n.card-header::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 70%;\n  background:\n    linear-gradient(\n      45deg,\n      transparent 30%,\n      rgba(255, 255, 255, 0.1) 50%,\n      transparent 70%);\n  transition: transform 0.6s;\n}\n.card:hover .card-header::before {\n  transform: translateX(200%);\n}\n.card-title {\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.card-title::before {\n  content: "\\f007";\n  font-family: "Font Awesome 6 Free";\n  font-weight: 900;\n  font-size: 20px;\n}\n.card-body {\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 8px;\n  animation: slideInUp 0.5s ease forwards;\n}\n@keyframes slideInUp {\n  from {\n    opacity: 0;\n    transform: translateY(15px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.col-form-label {\n  font-weight: 600;\n  color: #374151;\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.form-control {\n  height: 50px;\n  border: 2px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 0 16px;\n  font-size: 15px;\n  transition: all 0.3s ease;\n  background: rgba(255, 255, 255, 0.9);\n}\n.form-control:focus {\n  border-color: #06b6d4;\n  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.15);\n  outline: none;\n  background: white;\n  transform: translateY(-2px);\n}\n.card-footer {\n  padding: 20px;\n  background: rgba(248, 250, 252, 0.8);\n  border-top: 1px solid #e5e7eb;\n  display: flex;\n  justify-content: space-between;\n}\n.btn {\n  padding: 12px 28px;\n  border-radius: 12px;\n  font-weight: 600;\n  font-size: 15px;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.btn-info {\n  background:\n    linear-gradient(\n      135deg,\n      #06b6d4,\n      #0891b2);\n  color: white;\n  box-shadow: 0 4px 15px rgba(6, 182, 212, 0.3);\n}\n.btn-info:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #0891b2,\n      #0e7490);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(6, 182, 212, 0.4);\n}\n.btn-danger {\n  background:\n    linear-gradient(\n      135deg,\n      #ef4444,\n      #dc2626);\n  color: white;\n  box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);\n}\n.btn-danger:hover {\n  background:\n    linear-gradient(\n      135deg,\n      #dc2626,\n      #b91c1c);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);\n}\n/*# sourceMappingURL=add-expiry.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: HttpClient }, { type: ProductService }, { type: ExpiryService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddExpiry, { className: "AddExpiry", filePath: "src/app/components/add-expiry/add-expiry.ts", lineNumber: 23 });
})();
export {
  AddExpiry
};
//# sourceMappingURL=chunk-AYGTYRAI.js.map
