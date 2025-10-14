import {
  SemiFinishedInwardService
} from "./chunk-4CUHHJ2O.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-OMRRAGFO.js";
import {
  Router,
  RouterLink
} from "./chunk-IW3JCNMQ.js";
import {
  CommonModule,
  DatePipe,
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
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QAWYXZDT.js";
import "./chunk-46DXP6YY.js";

// src/app/pages/semi-finished-inward/semi-finished-inward.ts
function SemiFinishedInwardComponent_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.batchNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r1.semiFinished == null ? null : r_r1.semiFinished.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 4, r_r1.inwardDate, "short"));
  }
}
var SemiFinishedInwardComponent = class _SemiFinishedInwardComponent {
  service;
  cd;
  router;
  Inward = [];
  searchTerm = "";
  constructor(service, cd, router) {
    this.service = service;
    this.cd = cd;
    this.router = router;
  }
  ngOnInit() {
    this.service.getInwards().subscribe({
      next: (data) => {
        this.Inward = data;
        this.cd.markForCheck();
        console.log("products from backend: ", this.Inward);
      },
      error: (err) => console.error("error fetching inwards: ", err)
    });
  }
  FilteredInwards() {
    const term = this.searchTerm.toLowerCase();
    return this.Inward.filter((r) => (r.batchNo ?? "").toLowerCase().includes(term) || (r.semiFinished?.name ?? "").toLowerCase().includes(term) || (r.inwardDate ?? "").toLowerCase().includes(term) || (r.bags?.toString() ?? "").includes(term) || (r.grossQty?.toString() ?? "").includes(term));
  }
  static \u0275fac = function SemiFinishedInwardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SemiFinishedInwardComponent)(\u0275\u0275directiveInject(SemiFinishedInwardService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SemiFinishedInwardComponent, selectors: [["app-semi-finished-inward"]], decls: 32, vars: 2, consts: [[1, "wrapper"], [1, "main-content"], [1, "content-header"], [1, "container-fluid"], [1, "content"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], ["routerLink", "/add-semi-finished-inward", 1, "btn", "btn-primary", "ms-auto"], [1, "fa", "fa-plus"], [1, "card-body"], ["type", "text", "placeholder", "Search...", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], [1, "table", "table-bordered", "table-hover", 2, "text-align", "center"], [4, "ngFor", "ngForOf"]], template: function SemiFinishedInwardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "h3");
      \u0275\u0275text(5, "Semi Finished Inward");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 3)(8, "div", 5)(9, "div", 6)(10, "h3", 7);
      \u0275\u0275text(11, "Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275element(13, "i", 9);
      \u0275\u0275text(14, " Add a new Semi Finished Inward ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10)(16, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function SemiFinishedInwardComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "table", 12)(18, "thead")(19, "tr")(20, "th");
      \u0275\u0275text(21, "Sr.No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Batch No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "SemiFinished Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Inward Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "tbody");
      \u0275\u0275template(31, SemiFinishedInwardComponent_tr_31_Template, 10, 7, "tr", 13);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(15);
      \u0275\u0275property("ngForOf", ctx.FilteredInwards());
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, DatePipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1000px;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.table[_ngcontent-%COMP%] {\n  background: #fff;\n}\n/*# sourceMappingURL=semi-finished-inward.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SemiFinishedInwardComponent, [{
    type: Component,
    args: [{ selector: "app-semi-finished-inward", imports: [CommonModule, FormsModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: '<div class="wrapper">\n  <div class="main-content">\n    <section class="content-header">\n      <div class="container-fluid">\n        <h3>Semi Finished Inward</h3>\n      </div>\n    </section>\n\n    <section class="content">\n      <div class="container-fluid">\n        <div class="card">\n          <div\n            class="card-header d-flex justify-content-between align-items-center"\n          >\n            <h3 class="card-title mb-0">Details</h3>\n            <button class="btn btn-primary ms-auto" routerLink= "/add-semi-finished-inward">\n             <i class="fa fa-plus"></i> Add a new Semi Finished Inward\n            </button>\n          </div>\n\n          <div class="card-body">\n            <input\n              type="text"\n              class="form-control mb-3"\n              placeholder="Search..."\n              [(ngModel)]="searchTerm"\n            />\n\n            <table\n              class="table table-bordered table-hover"\n              style="text-align: center"\n            >\n              <thead>\n                <tr>\n                  <th>Sr.No.</th>\n                  <th>Batch No.</th>\n                  <th>SemiFinished Name</th>\n                  <th>Inward Date</th>\n                  <th>Actions</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor="let r of FilteredInwards(); let i = index">\n                  <td>{{ i + 1 }}</td>\n                  <td>{{ r.batchNo }}</td>\n                  <td>{{ r.semiFinished?.name }}</td>\n                  <td>{{ r.inwardDate | date : "short" }}</td>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</div>\n\n', styles: ["/* src/app/pages/semi-finished-inward/semi-finished-inward.css */\n.container {\n  max-width: 1000px;\n}\n.card {\n  border-radius: 10px;\n}\n.table {\n  background: #fff;\n}\n/*# sourceMappingURL=semi-finished-inward.css.map */\n"] }]
  }], () => [{ type: SemiFinishedInwardService }, { type: ChangeDetectorRef }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SemiFinishedInwardComponent, { className: "SemiFinishedInwardComponent", filePath: "src/app/pages/semi-finished-inward/semi-finished-inward.ts", lineNumber: 14 });
})();
export {
  SemiFinishedInwardComponent
};
//# sourceMappingURL=chunk-UQRM275Q.js.map
