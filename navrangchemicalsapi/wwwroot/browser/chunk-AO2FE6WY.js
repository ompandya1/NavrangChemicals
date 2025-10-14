import {
  InvoiceService
} from "./chunk-DAEJSI53.js";
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
  NgForOf
} from "./chunk-JLFMSZUT.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QAWYXZDT.js";
import "./chunk-46DXP6YY.js";

// src/app/pages/billing-component/Invoice.ts
var _c0 = (a0) => ["/generate-invoice", a0];
function InvoiceComponent_tr_31_Template(rf, ctx) {
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
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "button", 11);
    \u0275\u0275text(16, "Generate Invoice");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const bill_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bill_r1.orderDispatch == null ? null : bill_r1.orderDispatch.invoiceNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bill_r1.orderDispatch == null ? null : bill_r1.orderDispatch.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bill_r1.orderDispatch == null ? null : bill_r1.orderDispatch.customerPhone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bill_r1.orderDispatch == null ? null : bill_r1.orderDispatch.customerEmail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 7, bill_r1.orderDispatch == null ? null : bill_r1.orderDispatch.orderDate, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, bill_r1.id));
  }
}
var InvoiceComponent = class _InvoiceComponent {
  billService;
  bills = [];
  searchTerm = "";
  constructor(billService) {
    this.billService = billService;
  }
  ngOnInit() {
    this.billService.getCompletedInvoices().subscribe((data) => {
      this.bills = data;
      console.log(data);
    });
  }
  filteredBills() {
    const term = this.searchTerm.toLowerCase();
    return this.bills.filter((b) => b.orderDispatch?.invoiceNo.toPrecision().includes(term) || b.orderDispatch?.customerName.toLowerCase().includes(term) || b.orderDispatch?.customerPhone.toPrecision().includes(term) || b.orderDispatch?.customerEmail.toLowerCase().includes(term) || b.orderDispatch?.orderDate.toLowerCase().includes(term));
  }
  static \u0275fac = function InvoiceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InvoiceComponent)(\u0275\u0275directiveInject(InvoiceService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InvoiceComponent, selectors: [["app-invoice"]], decls: 32, vars: 2, consts: [[1, "wrapper"], [1, "content-header"], [1, "container-fluid"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], ["type", "text", "placeholder", "Search...", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], [1, "table", "table-bordered", "table-hover"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-block", "btn-outline-success", "btn-sm", 2, "text-align", "center", "display", "block", "width", "100%", 3, "routerLink"]], template: function InvoiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h3");
      \u0275\u0275text(4, "Pending Bills");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(5, "section", 3)(6, "div", 2)(7, "div", 4)(8, "div", 5)(9, "h3", 6);
      \u0275\u0275text(10, "Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 7)(12, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function InvoiceComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "table", 9)(14, "thead")(15, "tr")(16, "th");
      \u0275\u0275text(17, "Sr.No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "th");
      \u0275\u0275text(19, "Order No");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "th");
      \u0275\u0275text(21, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "th");
      \u0275\u0275text(23, "Mobile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "th");
      \u0275\u0275text(25, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "th");
      \u0275\u0275text(27, "Order Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "th");
      \u0275\u0275text(29, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "tbody");
      \u0275\u0275template(31, InvoiceComponent_tr_31_Template, 17, 12, "tr", 10);
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.filteredBills());
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, DatePipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InvoiceComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "app-invoice", imports: [CommonModule, FormsModule, RouterLink], template: `<div class="wrapper">

<section class="content-header">
  <div class="container-fluid">
    <h3>Pending Bills</h3>
  </div>
</section>

<section class="content">
  <div class="container-fluid">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Details</h3>
      </div>

      <div class="card-body">
        <input type="text" class="form-control mb-3" placeholder="Search..." [(ngModel)]="searchTerm" />

        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Order No</th>
              <th>Full Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Order Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let bill of filteredBills(); let i = index">
              <td>{{ i + 1 }}</td>
              <td>{{ bill.orderDispatch?.invoiceNo }}</td>
              <td>{{ bill.orderDispatch?.customerName }}</td>
              <td>{{ bill.orderDispatch?.customerPhone }}</td>
              <td>{{ bill.orderDispatch?.customerEmail }}</td>
              <td>{{ bill.orderDispatch?.orderDate | date: 'mediumDate' }}</td>
              <td><button class="btn btn-block btn-outline-success btn-sm" style="text-align: center; display: block; width: 100%;" [routerLink]="['/generate-invoice', bill.id]" >Generate Invoice</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>
` }]
  }], () => [{ type: InvoiceService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InvoiceComponent, { className: "InvoiceComponent", filePath: "src/app/pages/billing-component/invoice.ts", lineNumber: 23 });
})();
export {
  InvoiceComponent
};
//# sourceMappingURL=chunk-AO2FE6WY.js.map
