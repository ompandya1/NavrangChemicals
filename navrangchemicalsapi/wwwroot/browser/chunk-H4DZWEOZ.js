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
  NgForOf,
  NgIf
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QAWYXZDT.js";
import "./chunk-46DXP6YY.js";

// src/app/pages/pending-orders/pending-orders.ts
var _c0 = (a0) => ["/order-details", a0];
function PendingOrders_tr_32_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "h5");
    \u0275\u0275text(4, "Confirm Order Completion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275listener("click", function PendingOrders_tr_32_div_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeConfirm());
    });
    \u0275\u0275text(6, " \xD7 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 22)(8, "p");
    \u0275\u0275text(9, " Are you sure you want to mark this order as ");
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "? ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 23)(14, "button", 24);
    \u0275\u0275listener("click", function PendingOrders_tr_32_div_21_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmCompleteOrder());
    });
    \u0275\u0275element(15, "i", 16);
    \u0275\u0275text(16, " Yes, Complete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 25);
    \u0275\u0275listener("click", function PendingOrders_tr_32_div_21_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeConfirm());
    });
    \u0275\u0275element(18, "i", 26);
    \u0275\u0275text(19, " Cancel ");
    \u0275\u0275elementEnd()()()();
  }
}
function PendingOrders_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
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
    \u0275\u0275elementStart(14, "td", 12)(15, "button", 13);
    \u0275\u0275element(16, "i", 14);
    \u0275\u0275text(17, " Info ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 15);
    \u0275\u0275listener("click", function PendingOrders_tr_32_Template_button_click_18_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openConfirmModal(user_r2.invoiceNo));
    });
    \u0275\u0275element(19, "i", 16);
    \u0275\u0275text(20, " Complete Order ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, PendingOrders_tr_32_div_21_Template, 20, 0, "div", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.invoiceNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.customerPhone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.customerEmail);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 8, user_r2.orderDate, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, user_r2.invoiceNo));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r2.showConfirm);
  }
}
var PendingOrders = class _PendingOrders {
  userService;
  cd;
  InvoiceService;
  PartyService;
  showConfirm = false;
  selectedInvoiceId = null;
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
    this.userService.getOrdersByStatus(1).subscribe((data) => {
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
  openConfirmModal(invoiceId) {
    this.selectedInvoiceId = invoiceId;
    this.showConfirm = true;
    console.log("button is clicked");
  }
  closeConfirm() {
    this.showConfirm = false;
    this.selectedInvoiceId = null;
  }
  confirmCompleteOrder() {
    if (!this.selectedInvoiceId)
      return;
    console.log("Completing order for invoice ID:", this.selectedInvoiceId);
    this.InvoiceService.updateStatus(this.selectedInvoiceId, 2).subscribe({
      next: (res) => {
        console.log("Status updated:", res);
        this.ngOnInit();
      },
      error: (err) => console.error("Failed to update status:", err)
    });
    this.closeConfirm();
  }
  filteredUsers() {
    const term = this.searchTerm.toLowerCase();
    return this.order.filter((u) => u.invoiceNo.toString().includes(term) || u.customerName.toLowerCase().includes(term) || u.customerPhone.toString().includes(term) || u.customerEmail.toLowerCase().includes(term) || u.orderDate.toLowerCase().includes(term));
  }
  static \u0275fac = function PendingOrders_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PendingOrders)(\u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(InvoiceService), \u0275\u0275directiveInject(PartyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PendingOrders, selectors: [["app-pending-orders"]], decls: 33, vars: 2, consts: [[1, "wrapper"], [1, "main-content"], [1, "content-header"], [1, "container-fluid"], [1, "content"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], [1, "card-body"], ["type", "text", "placeholder", "Search...", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], [1, "table", "table-bordered", "table-hover", 2, "text-align", "center"], [4, "ngFor", "ngForOf"], [2, "display", "grid", "gap", "5px"], [1, "btn", "btn-outline-primary", "btn-sm", "me-1", 3, "routerLink"], [1, "fa", "fa-eye"], [1, "btn", "btn-outline-success", "btn-sm", "me-1", 3, "click"], [1, "fa", "fa-check"], ["class", "confirm-overlay", 4, "ngIf"], [1, "confirm-overlay"], [1, "confirm-box"], [1, "confirm-header"], [1, "close-btn", 3, "click"], [1, "confirm-body"], [1, "confirm-footer"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-times"]], template: function PendingOrders_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "h3");
      \u0275\u0275text(5, "Pending Orders");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 3)(8, "div", 5)(9, "div", 6)(10, "h3", 7);
      \u0275\u0275text(11, "Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function PendingOrders_Template_input_ngModelChange_13_listener($event) {
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
      \u0275\u0275template(32, PendingOrders_tr_32_Template, 22, 13, "tr", 11);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.filteredUsers());
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, CommonModule, NgForOf, NgIf, RouterLink, DatePipe], styles: ["\n\n.confirm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n}\n.confirm-box[_ngcontent-%COMP%] {\n  background: #fff;\n  width: 400px;\n  border-radius: 8px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_scaleIn 0.2s ease-in-out;\n}\n.confirm-header[_ngcontent-%COMP%] {\n  background: #007bff;\n  color: #fff;\n  padding: 10px 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.confirm-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  font-size: 20px;\n  color: #fff;\n  cursor: pointer;\n}\n.confirm-body[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  font-size: 15px;\n}\n.confirm-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 15px;\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=pending-orders.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PendingOrders, [{
    type: Component,
    args: [{ selector: "app-pending-orders", imports: [FormsModule, CommonModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="wrapper">\r
  <div class="main-content">\r
    <section class="content-header">\r
      <div class="container-fluid">\r
        <h3>Pending Orders</h3>\r
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
                  <td>{{ user.invoiceNo }}</td>\r
                  <td>{{ user.customerName }}</td>\r
                  <td>{{ user.customerPhone }}</td>\r
                  <td>{{ user.customerEmail }}</td>\r
                  <td>{{ user.orderDate | date : "short" }}</td>\r
\r
                  <!-- Actions Column -->\r
                  <td style="display: grid; gap: 5px">\r
                    <button\r
                      class="btn btn-outline-primary btn-sm me-1"\r
                      [routerLink]="['/order-details', user.invoiceNo]"\r
                    >\r
                      <i class="fa fa-eye"></i> Info\r
                    </button>\r
                    <button\r
                      class="btn btn-outline-success btn-sm me-1"\r
                      (click)="openConfirmModal(user.invoiceNo)"\r
                    >\r
                      <i class="fa fa-check"></i> Complete Order\r
                    </button>\r
                    <!-- Confirmation Modal -->\r
                    <div class="confirm-overlay" *ngIf="showConfirm">\r
                      <div class="confirm-box">\r
                        <div class="confirm-header">\r
                          <h5>Confirm Order Completion</h5>\r
                          <button class="close-btn" (click)="closeConfirm()">\r
                            \xD7\r
                          </button>\r
                        </div>\r
                        <div class="confirm-body">\r
                          <p>\r
                            Are you sure you want to mark this order as\r
                            <strong>Completed</strong>?\r
                          </p>\r
                        </div>\r
                        <div class="confirm-footer">\r
                          <button\r
                            class="btn btn-success"\r
                            (click)="confirmCompleteOrder()"\r
                          >\r
                            <i class="fa fa-check"></i> Yes, Complete\r
                          </button>\r
                          <button\r
                            class="btn btn-danger"\r
                            (click)="closeConfirm()"\r
                          >\r
                            <i class="fa fa-times"></i> Cancel\r
                          </button>\r
                        </div>\r
                      </div>\r
                    </div>\r
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
`, styles: ["/* src/app/pages/pending-orders/pending-orders.css */\n.confirm-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1050;\n}\n.confirm-box {\n  background: #fff;\n  width: 400px;\n  border-radius: 8px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n  animation: scaleIn 0.2s ease-in-out;\n}\n.confirm-header {\n  background: #007bff;\n  color: #fff;\n  padding: 10px 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.confirm-header h5 {\n  margin: 0;\n}\n.close-btn {\n  background: transparent;\n  border: none;\n  font-size: 20px;\n  color: #fff;\n  cursor: pointer;\n}\n.confirm-body {\n  padding: 20px;\n  text-align: center;\n  font-size: 15px;\n}\n.confirm-footer {\n  display: flex;\n  justify-content: space-evenly;\n  padding: 15px;\n}\n@keyframes scaleIn {\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=pending-orders.css.map */\n"] }]
  }], () => [{ type: OrderService }, { type: ChangeDetectorRef }, { type: InvoiceService }, { type: PartyService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PendingOrders, { className: "PendingOrders", filePath: "src/app/pages/pending-orders/pending-orders.ts", lineNumber: 20 });
})();
export {
  PendingOrders
};
//# sourceMappingURL=chunk-H4DZWEOZ.js.map
