import {
  CompanyService
} from "./chunk-GHDFQVXJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-OMRRAGFO.js";
import {
  RouterLink
} from "./chunk-IW3JCNMQ.js";
import {
  CommonModule,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QAWYXZDT.js";
import "./chunk-46DXP6YY.js";

// src/app/pages/company-master/company-master.ts
var _c0 = (a0) => ["/edit-company", a0];
function CompanyMaster_tr_39_Template(rf, ctx) {
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
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
    \u0275\u0275elementStart(19, "td")(20, "button", 14);
    \u0275\u0275element(21, "i", 15);
    \u0275\u0275text(22, " Edit ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const Company_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", Company_r1.companyName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(Company_r1.gstin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(Company_r1.companyAddress);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(Company_r1.accNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(Company_r1.bankName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(Company_r1.branchName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(Company_r1.ifsc);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(Company_r1.phone);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, Company_r1.id));
  }
}
var CompanyMaster = class _CompanyMaster {
  service;
  cd;
  Company = [];
  searchTerm = "";
  constructor(service, cd) {
    this.service = service;
    this.cd = cd;
  }
  ngOnInit() {
    this.service.getAllCompanies().subscribe({
      next: (data) => {
        this.Company = data;
        this.cd.markForCheck();
        console.log("Products from backend:", this.Company);
      },
      error: (err) => console.error("Error fetching parties:", err)
    });
  }
  filteredCompanies() {
    const term = this.searchTerm.toLowerCase();
    return this.Company.filter((c) => c.companyName.toLowerCase().includes(term) || c.companyAddress.toLowerCase().includes(term) || c.gstin.toLowerCase().includes(term) || c.accNo.toLowerCase().includes(term) || c.bankName.toLowerCase().includes(term) || c.branchName.toLowerCase().includes(term) || c.ifsc.toLowerCase().includes(term) || c.phone.toPrecision().includes(term));
  }
  static \u0275fac = function CompanyMaster_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyMaster)(\u0275\u0275directiveInject(CompanyService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyMaster, selectors: [["app-company-master"]], decls: 40, vars: 2, consts: [[1, "wrapper"], [1, "main-content"], [1, "content-header"], [1, "container-fluid"], [1, "content"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], [1, "card-body"], ["type", "text", "placeholder", "Search...", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], [1, "table-responsive"], [1, "table", "table-bordered", "table-hover", 2, "text-align", "center"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-success", "btn-sm", "me-1", 3, "routerLink"], [1, "fa", "fa-pencil-square"]], template: function CompanyMaster_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "h3");
      \u0275\u0275text(5, "Company");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 3)(8, "div", 5)(9, "div", 6)(10, "h3", 7);
      \u0275\u0275text(11, "Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function CompanyMaster_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 10)(15, "table", 11)(16, "thead", 12)(17, "tr")(18, "th");
      \u0275\u0275text(19, "Sr.No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Company Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "GST No");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Bank Account No");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Bank Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Bank Branch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "Bank IFSC Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th");
      \u0275\u0275text(37, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "tbody");
      \u0275\u0275template(39, CompanyMaster_tr_39_Template, 23, 12, "tr", 13);
      \u0275\u0275elementEnd()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(26);
      \u0275\u0275property("ngForOf", ctx.filteredCompanies());
    }
  }, dependencies: [CommonModule, NgForOf, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormsModule, NgModel, RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyMaster, [{
    type: Component,
    args: [{ selector: "app-company-master", imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="wrapper">
  <div class="main-content">
    <section class="content-header">
      <div class="container-fluid">
        <h3>Company</h3>
      </div>
    </section>

    <section class="content">
      <div class="container-fluid">
        <div class="card">
          <div
            class="card-header d-flex justify-content-between align-items-center"
          >
            <h3 class="card-title mb-0">Details</h3>
          </div>

          <div class="card-body">
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Search..."
              [(ngModel)]="searchTerm"
            />
        <div class="table-responsive">

            <table
            class="table table-bordered table-hover"
            style="text-align: center"
            >
            <thead class="table-light">
                <tr>
                    <th>Sr.No.</th>
                    <th>Company Name</th>
                    <th>GST No</th>
                    <th>Address</th>
                    <th>Bank Account No</th>
                    <th>Bank Name</th>
                    <th>Bank Branch</th>
                    <th>Bank IFSC Code</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let Company of filteredCompanies(); let i = index">
                    <td>{{ i + 1 }}</td>
                    <td>{{ Company.companyName }} </td> 
                    <td>{{ Company.gstin }}</td>
                    <td>{{ Company.companyAddress }}</td>
                    <td>{{ Company.accNo }}</td>
                    <td>{{ Company.bankName }}</td>
                    <td>{{ Company.branchName }}</td>
                    <td>{{ Company.ifsc }}</td>
                    <td>{{ Company.phone }}</td>
                    <td><button
                        class="btn btn-outline-success btn-sm me-1"
                          [routerLink]="['/edit-company', Company.id]"
                          >
                          <i class="fa fa-pencil-square"></i> Edit
                        </button></td>
                    </tr>
              </tbody>
            </table>
          </div>
        </div>
    </div>
</div>
</section>
</div>
</div>
` }]
  }], () => [{ type: CompanyService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyMaster, { className: "CompanyMaster", filePath: "src/app/pages/company-master/company-master.ts", lineNumber: 28 });
})();
export {
  CompanyMaster
};
//# sourceMappingURL=chunk-RS5ZRBIF.js.map
