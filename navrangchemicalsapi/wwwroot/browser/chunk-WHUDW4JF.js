import {
  ExpiryService
} from "./chunk-3QQ64GUR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-OMRRAGFO.js";
import {
  RouterLink
} from "./chunk-IW3JCNMQ.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf
} from "./chunk-JLFMSZUT.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QAWYXZDT.js";
import "./chunk-46DXP6YY.js";

// src/app/pages/qc-standard-expiry/qc-standard-expiry.ts
var _c0 = (a0, a1) => ({ "text-danger fw-bold": a0, "text-success fw-bold": a1 });
var _c1 = (a0) => ["/replace-expiry", a0];
function QcStandardExpiry_tr_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 14);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "td")(24, "button", 15);
    \u0275\u0275element(25, "i", 16);
    \u0275\u0275text(26, " Replace Sample ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const expiry_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(expiry_r1.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 12, expiry_r1.preservationDate, "dd-MMM-yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(expiry_r1.validity);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(18, _c0, ctx_r2.isExpired(expiry_r1.expiryDate), !ctx_r2.isExpired(expiry_r1.expiryDate)));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(12, 15, expiry_r1.expiryDate, "dd-MMM-yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(expiry_r1.strength);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(expiry_r1.de);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(expiry_r1.da);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(expiry_r1.db);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(expiry_r1.dc);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(21, _c1, expiry_r1.id));
  }
}
var QcStandardExpiry = class _QcStandardExpiry {
  service;
  cd;
  expiry = [];
  searchTerm = "";
  constructor(service, cd) {
    this.service = service;
    this.cd = cd;
  }
  ngOnInit() {
    this.service.getAllProducts().subscribe({
      next: (data) => {
        this.expiry = data;
        this.cd.markForCheck();
        console.log("Products from backend:", this.expiry);
      },
      error: (err) => console.error("Error fetching parties:", err)
    });
  }
  isExpired(expiryDate) {
    if (!expiryDate)
      return false;
    const today = /* @__PURE__ */ new Date();
    const exp = new Date(expiryDate);
    today.setHours(0, 0, 0, 0);
    exp.setHours(0, 0, 0, 0);
    return today >= exp;
  }
  filteredExpiries() {
    const term = this.searchTerm.toLowerCase();
    return this.expiry.filter((r) => r.productName.toLowerCase().includes(term) || r.preservationDate.toLowerCase().includes(term) || r.expiryDate.toLowerCase().includes(term) || r.validity.toPrecision().includes(term) || r.strength.toPrecision().includes(term) || r.de.toPrecision().includes(term) || r.da.toPrecision().includes(term) || r.db.toPrecision().includes(term) || r.dc.toPrecision().includes(term));
  }
  static \u0275fac = function QcStandardExpiry_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QcStandardExpiry)(\u0275\u0275directiveInject(ExpiryService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QcStandardExpiry, selectors: [["app-qc-standard-expiry"]], decls: 44, vars: 2, consts: [[1, "wrapper"], [1, "main-content"], [1, "content-header"], [1, "container-fluid"], [1, "content"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], ["routerLink", "/add-expiry", 1, "btn", "btn-primary", "ms-auto"], [1, "fa", "fa-plus"], [1, "card-body"], ["type", "text", "placeholder", "Search...", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], [1, "table", "table-bordered", "table-hover", 2, "text-align", "center"], [4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "btn", "btn-outline-success", "btn-sm", "me-1", 3, "routerLink"], [1, "fa", "fa-pencil-square"]], template: function QcStandardExpiry_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "h3");
      \u0275\u0275text(5, "QC STANDARD EXPIRY");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 3)(8, "div", 5)(9, "div", 6)(10, "h3", 7);
      \u0275\u0275text(11, "Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275element(13, "i", 9);
      \u0275\u0275text(14, " Add a new QC Product Expiry ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10)(16, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function QcStandardExpiry_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "table", 12)(18, "thead")(19, "tr")(20, "th");
      \u0275\u0275text(21, "Sr.No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Standard Preservation Time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Validity(in months)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Expiry Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Strength");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "DE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35, "DA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th");
      \u0275\u0275text(37, "DB");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th");
      \u0275\u0275text(39, "DC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th");
      \u0275\u0275text(41, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "tbody");
      \u0275\u0275template(43, QcStandardExpiry_tr_43_Template, 27, 23, "tr", 13);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(27);
      \u0275\u0275property("ngForOf", ctx.filteredExpiries());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QcStandardExpiry, [{
    type: Component,
    args: [{ selector: "app-qc-standard-expiry", imports: [CommonModule, RouterLink, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="wrapper">\r
  <div class="main-content">\r
    <section class="content-header">\r
      <div class="container-fluid">\r
        <h3>QC STANDARD EXPIRY</h3>\r
      </div>\r
    </section>\r
\r
    <section class="content">\r
      <div class="container-fluid">\r
        <div class="card">\r
          <div\r
            class="card-header d-flex justify-content-between align-items-center"\r
          >\r
            <h3 class="card-title mb-0">Details</h3>\r
            <button class="btn btn-primary ms-auto" routerLink="/add-expiry">\r
              <i class="fa fa-plus"></i> Add a new QC Product Expiry\r
            </button>\r
          </div>\r
\r
          <div class="card-body">\r
            <input\r
              type="text"\r
              class="form-control mb-3"\r
              placeholder="Search..."\r
              [(ngModel)]="searchTerm"\r
            />\r
\r
            <table\r
              class="table table-bordered table-hover"\r
              style="text-align: center"\r
            >\r
              <thead>\r
                <tr>\r
                  <th>Sr.No.</th>\r
                  <th>Product Name</th>\r
                  <th>Standard Preservation Time</th>\r
                  <th>Validity(in months)</th>\r
                  <th>Expiry Date</th>\r
                  <th>Strength</th>\r
                  <th>DE</th>\r
                  <th>DA</th>\r
                  <th>DB</th>\r
                  <th>DC</th>\r
                  <th>Actions</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let expiry of filteredExpiries(); let i = index">\r
                  <td>{{ i + 1 }}</td>\r
                  <td>{{ expiry.productName }}</td>\r
                  <td>{{ expiry.preservationDate | date : "dd-MMM-yyyy" }}</td>\r
                  <td>{{ expiry.validity }}</td>\r
                  <td\r
                    [ngClass]="{\r
                      'text-danger fw-bold': isExpired(expiry.expiryDate),\r
                      'text-success fw-bold': !isExpired(expiry.expiryDate)\r
                    }"\r
                  >\r
                    {{ expiry.expiryDate | date : "dd-MMM-yyyy" }}\r
                  </td>\r
                  <td>{{ expiry.strength }}</td>\r
                  <td>{{ expiry.de }}</td>\r
                  <td>{{ expiry.da }}</td>\r
                  <td>{{ expiry.db }}</td>\r
                  <td>{{ expiry.dc }}</td>\r
\r
                  <!-- Actions Column -->\r
                  <td>\r
                    <button\r
                      class="btn btn-outline-success btn-sm me-1"\r
                      [routerLink]="['/replace-expiry', expiry.id]"\r
                    >\r
                      <i class="fa fa-pencil-square"></i> Replace Sample\r
                    </button>\r
                  </td>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
        </div>\r
      </div>\r
    </section>\r
  </div>\r
</div>\r
` }]
  }], () => [{ type: ExpiryService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QcStandardExpiry, { className: "QcStandardExpiry", filePath: "src/app/pages/qc-standard-expiry/qc-standard-expiry.ts", lineNumber: 14 });
})();
export {
  QcStandardExpiry
};
//# sourceMappingURL=chunk-WHUDW4JF.js.map
