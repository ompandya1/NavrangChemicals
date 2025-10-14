import {
  InvoiceService
} from "./chunk-DAEJSI53.js";
import {
  ActivatedRoute
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
  ɵɵtextInterpolate1
} from "./chunk-QAWYXZDT.js";
import "./chunk-46DXP6YY.js";

// src/app/components/order-details/order-details.ts
function OrderDetails_tr_49_Template(rf, ctx) {
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
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r1.product == null ? null : order_r1.product.catagoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r1.product == null ? null : order_r1.product.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", order_r1.quantity, "KG");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", order_r1.kgs, " KG");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r1.bagType);
  }
}
var OrderDetails = class _OrderDetails {
  route;
  orderService;
  cd;
  orders = null;
  product = null;
  constructor(route, orderService, cd) {
    this.route = route;
    this.orderService = orderService;
    this.cd = cd;
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id) {
      this.orderService.getInvoiceById(id).subscribe({
        next: (data) => {
          this.orders = data;
          console.log("Order details:", this.orders);
          this.cd.markForCheck();
        },
        error: (err) => console.error("Failed to load order details:", err)
      });
    }
  }
  static \u0275fac = function OrderDetails_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderDetails)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(InvoiceService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetails, selectors: [["app-order-details"]], decls: 54, vars: 8, consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], ["type", "text", "hidden", "", 3, "value"], [1, "col-md-4"], [1, "callout", "callout-info"], [1, "col-md-3"], [1, "card-body"], [1, "table", "table-bordered", "table-hover"], [4, "ngFor", "ngForOf"], [1, "card-footer"], ["routerLink", "/dispatch-list", 1, "btn", "btn-success", "btn-flat", "btn-sm"], [1, "fa", "fa-angle-left"]], template: function OrderDetails_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3", 6);
      \u0275\u0275text(7, "Product Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(8, "input", 7)(9, "br");
      \u0275\u0275elementStart(10, "div", 3)(11, "div", 2)(12, "div", 8)(13, "div", 9)(14, "label");
      \u0275\u0275text(15, " Dispatch No. : ");
      \u0275\u0275elementStart(16, "span")(17, "strong");
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(19, "div", 10)(20, "div", 9)(21, "label");
      \u0275\u0275text(22, " Dispatch Date. : ");
      \u0275\u0275elementStart(23, "span")(24, "strong");
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "date");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(27, "div", 10)(28, "div", 9)(29, "label");
      \u0275\u0275text(30, " Order Items. : ");
      \u0275\u0275elementStart(31, "span")(32, "strong");
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(34, "div", 11)(35, "table", 12)(36, "thead")(37, "tr")(38, "th");
      \u0275\u0275text(39, "Category Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th");
      \u0275\u0275text(41, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th");
      \u0275\u0275text(43, "Order Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "th");
      \u0275\u0275text(45, "Dispatch Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "th");
      \u0275\u0275text(47, "Packing Type");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "tbody");
      \u0275\u0275template(49, OrderDetails_tr_49_Template, 11, 5, "tr", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div", 14)(51, "button", 15);
      \u0275\u0275element(52, "i", 16);
      \u0275\u0275text(53, " Back ");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.orders == null ? null : ctx.orders.id);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.orders == null ? null : ctx.orders.orderDispatch == null ? null : ctx.orders.orderDispatch.invoiceNo);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(26, 5, ctx.orders == null ? null : ctx.orders.invoiceDate, "dd-MM-yyyy"));
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.orders == null ? null : ctx.orders.items == null ? null : ctx.orders.items.length);
      \u0275\u0275advance(16);
      \u0275\u0275property("ngForOf", ctx.orders == null ? null : ctx.orders.items);
    }
  }, dependencies: [CommonModule, NgForOf, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetails, [{
    type: Component,
    args: [{ selector: "app-order-details", imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<section class="content">\r
  <div class="container-fluid">\r
    <div class="row">\r
      <div class="col-md-12">\r
        <div class="card card-info">\r
          <div class="card-header">\r
            <h3 class="card-title">Product Details</h3>\r
          </div>\r
\r
          <!-- Hidden Order ID -->\r
          <input type="text" [value]="orders?.id" hidden />\r
\r
          <br />\r
          <div class="col-md-12">\r
            <div class="row">\r
              <div class="col-md-4">\r
                <div class="callout callout-info">\r
                  <label>\r
                    Dispatch No. :\r
                    <span><strong>{{ orders?.orderDispatch?.invoiceNo }}</strong></span>\r
                  </label>\r
                </div>\r
              </div>\r
\r
              <div class="col-md-3">\r
                <div class="callout callout-info">\r
                  <label>\r
                    Dispatch Date. :\r
                    <span><strong>{{ orders?.invoiceDate | date: 'dd-MM-yyyy' }}</strong></span>\r
                  </label>\r
                </div>\r
              </div>\r
\r
              <div class="col-md-3">\r
                <div class="callout callout-info">\r
                  <label>\r
                    Order Items. :\r
                    <span><strong>{{ orders?.items?.length }}</strong></span>\r
                  </label>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <div class="card-body">\r
            <table class="table table-bordered table-hover">\r
              <thead>\r
                <tr>\r
                  <th>Category Name</th>\r
                  <th>Product Name</th>\r
                  <th>Order Quantity</th>\r
                  <th>Dispatch Quantity</th>\r
                  <th>Packing Type</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let order of orders?.items">\r
                  <td>{{ order.product?.catagoryName }}</td>\r
                  <td>{{ order.product?.productName }}</td>\r
                  <td>{{ order.quantity }}KG</td>\r
                  <td>{{ order.kgs }} KG</td>\r
                  <td>{{ order.bagType }}</td>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
\r
          <div class="card-footer">\r
            <button\r
              class="btn btn-success btn-flat btn-sm"\r
              routerLink="/dispatch-list"\r
            >\r
              <i class="fa fa-angle-left"> </i> Back\r
            </button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
` }]
  }], () => [{ type: ActivatedRoute }, { type: InvoiceService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetails, { className: "OrderDetails", filePath: "src/app/components/order-details/order-details.ts", lineNumber: 16 });
})();
export {
  OrderDetails
};
//# sourceMappingURL=chunk-XOQ4EOSL.js.map
