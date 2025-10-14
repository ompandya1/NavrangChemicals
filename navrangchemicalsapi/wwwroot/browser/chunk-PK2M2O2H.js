import {
  OrderService
} from "./chunk-2HHOPV76.js";
import {
  PartyService
} from "./chunk-7JKBLJBD.js";
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

// src/app/pages/order-requests/order-requests.ts
var _c0 = (a0) => ["/order-details", a0];
function OrderRequests_tr_32_Template(rf, ctx) {
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
    \u0275\u0275elementStart(14, "td")(15, "button", 12);
    \u0275\u0275element(16, "i", 13);
    \u0275\u0275text(17, " Info ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", user_r1.invoiceNo, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1.customerPhone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r1.customerEmail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 7, user_r1.orderDate, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(10, _c0, user_r1.invoiceNo));
  }
}
var OrderRequests = class _OrderRequests {
  userService;
  cd;
  InvoiceService;
  PartyService;
  order = [];
  invoice = [];
  parties = [];
  searchTerm = "";
  constructor(userService, cd, InvoiceService2, PartyService2) {
    this.userService = userService;
    this.cd = cd;
    this.InvoiceService = InvoiceService2;
    this.PartyService = PartyService2;
  }
  ngOnInit() {
    this.userService.getOrdersByStatus(0).subscribe((data) => {
      this.order = data.map((i) => ({
        id: i.id,
        invoiceId: i.id,
        invoiceNo: i.invoiceNo,
        customerName: i.customerName,
        customerPhone: i.customerPhone,
        customerEmail: i.customerEmail,
        orderDate: i.orderDate
      }));
      this.cd.markForCheck();
    });
    console.log("Users from backend:", this.order);
    this.PartyService.getParties().subscribe({
      next: (data) => {
        this.parties = data;
        console.log("Parties fetched:", this.parties);
      },
      error: (err) => {
        console.error("Failed to fetch parties:", err);
      }
    });
  }
  filteredUsers() {
    const term = this.searchTerm.toLowerCase();
    return this.order.filter((u) => u.invoiceNo.toString().includes(term) || u.customerName.toLowerCase().includes(term) || u.customerPhone.toString().includes(term) || u.customerEmail.toLowerCase().includes(term) || u.orderDate.toLowerCase().includes(term));
  }
  static \u0275fac = function OrderRequests_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderRequests)(\u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(InvoiceService), \u0275\u0275directiveInject(PartyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderRequests, selectors: [["app-order-requests"]], decls: 33, vars: 2, consts: [[1, "wrapper"], [1, "main-content"], [1, "content-header"], [1, "container-fluid"], [1, "content"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], [1, "card-body"], ["type", "text", "placeholder", "Search...", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], [1, "table", "table-bordered", "table-hover", 2, "text-align", "center"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-primary", "btn-sm", "me-1", 3, "routerLink"], [1, "fa", "fa-eye"]], template: function OrderRequests_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "h3");
      \u0275\u0275text(5, "Order Requests");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 3)(8, "div", 5)(9, "div", 6)(10, "h3", 7);
      \u0275\u0275text(11, "Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function OrderRequests_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "table", 10)(15, "thead")(16, "tr")(17, "th");
      \u0275\u0275text(18, "Sr.No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "th");
      \u0275\u0275text(20, "Order No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th");
      \u0275\u0275text(22, "Customer Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th");
      \u0275\u0275text(24, "Mobile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "Order Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "tbody");
      \u0275\u0275template(32, OrderRequests_tr_32_Template, 18, 12, "tr", 11);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.filteredUsers());
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CommonModule, NgForOf, RouterLink, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderRequests, [{
    type: Component,
    args: [{ selector: "app-order-requests", imports: [FormsModule, CommonModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="wrapper">\r
  <div class="main-content">\r
    <section class="content-header">\r
      <div class="container-fluid">\r
        <h3>Order Requests</h3>\r
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
                  <th>Order No.</th>\r
                  <th>Customer Name</th>\r
                  <th>Mobile</th>\r
                  <th>Email</th>\r
                  <th>Order Date</th>\r
                  <th>Actions</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let user of filteredUsers(); let i = index">\r
                  <td>{{ i + 1 }}</td>\r
                  <td>{{ user.invoiceNo }} </td>\r
                  <td>{{ user.customerName }}</td>\r
                  <td>{{ user.customerPhone }}</td>\r
                  <td>{{ user.customerEmail }}</td>\r
                  <td>{{ user.orderDate | date : "short" }}</td>\r
             \r
                  <!-- Actions Column -->\r
                  <td>\r
                    <button\r
                          class="btn btn-outline-primary btn-sm me-1"[routerLink]="['/order-details', user.invoiceNo]">\r
                          <i class="fa fa-eye"></i> Info\r
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
  }], () => [{ type: OrderService }, { type: ChangeDetectorRef }, { type: InvoiceService }, { type: PartyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderRequests, { className: "OrderRequests", filePath: "src/app/pages/order-requests/order-requests.ts", lineNumber: 20 });
})();
export {
  OrderRequests
};
//# sourceMappingURL=chunk-PK2M2O2H.js.map
