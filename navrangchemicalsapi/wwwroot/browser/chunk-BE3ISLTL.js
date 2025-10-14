import {
  PoService
} from "./chunk-DLP4VYSU.js";
import {
  E,
  autoTable
} from "./chunk-L63IXFFL.js";
import "./chunk-7YWLATDR.js";
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
  DatePipe,
  NgForOf
} from "./chunk-JLFMSZUT.js";
import {
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

// src/app/pages/purchase-order/purchase-order.ts
var _c0 = (a0) => ["/edit-Po", a0];
function PurchaseOrderComponent_tr_32_Template(rf, ctx) {
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
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td")(13, "button", 13);
    \u0275\u0275element(14, "i", 14);
    \u0275\u0275text(15, " Edit Po ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 15);
    \u0275\u0275listener("click", function PurchaseOrderComponent_tr_32_Template_button_click_16_listener() {
      const Po_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.generatePOPdf(Po_r2.id));
    });
    \u0275\u0275element(17, "i", 16);
    \u0275\u0275text(18, "Purchase Order");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const Po_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(Po_r2.id || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(Po_r2.supplier.name || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(Po_r2.address || Po_r2.supplier.address || "N/A");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 6, Po_r2.orderDate, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, Po_r2.id));
  }
}
var PurchaseOrderComponent = class _PurchaseOrderComponent {
  service;
  cd;
  Po = [];
  searchTerm = "";
  constructor(service, cd) {
    this.service = service;
    this.cd = cd;
  }
  ngOnInit() {
    this.service.getPO().subscribe({
      next: (data) => {
        this.Po = data;
        this.cd.markForCheck();
        console.log("POs from backend:", this.Po);
      },
      error: (err) => console.error("Error fetching parties:", err)
    });
  }
  filteredPO() {
    const term = this.searchTerm.toLowerCase();
    return this.Po.filter((p) => p.id?.toString().includes(term) || p.supplier?.name?.toLowerCase().includes(term) || p.address?.toLowerCase().includes(term) || p.orderDate?.toLowerCase().includes(term));
  }
  generatePOPdf(poId) {
    const po = this.Po.find((p) => p.id === poId);
    if (!po) {
      alert("Purchase Order not found!");
      return;
    }
    const doc = new E("p", "mm", "a4");
    let yPos = 14;
    doc.setFontSize(16);
    doc.text("NAVRANG", 105, yPos, { align: "center" });
    yPos += 6;
    doc.setFontSize(10);
    doc.text("L-77, 78, G.I.D.C Estate Near Water Tank, Odhav Road, Ahmedabad-382415", 105, yPos, { align: "center" });
    yPos += 10;
    doc.setFontSize(12);
    doc.text("Supplier Details:", 14, yPos);
    yPos += 6;
    doc.setFontSize(10);
    doc.text(`Name: ${po.supplier?.name || ""}`, 14, yPos);
    yPos += 5;
    doc.text(`Address: ${po.address || po.supplier?.address || ""}`, 14, yPos);
    yPos += 5;
    doc.text(`State: ${po.supplier?.state || ""} | GSTIN: ${po.supplier?.gstin || ""}`, 14, yPos);
    yPos += 5;
    doc.text(`Phone: ${po.supplier?.phone || ""} | Email: ${po.supplier?.email || ""}`, 14, yPos);
    yPos += 10;
    autoTable(doc, {
      startY: yPos,
      theme: "grid",
      styles: { fontSize: 10 },
      head: [["PO ID", "Order Date", "Invoice Date", "Terms Delivery", "Terms Payment", "Place of Supply"]],
      body: [[
        po.orderDate.split("T")[0],
        po.invoice?.invoiceDate.split("T")[0] || "",
        po.invoice?.termsOfDelivery || "",
        po.invoice?.termsOfPayment || "",
        po.invoice?.placeOfSupply || ""
      ]]
    });
    yPos = doc.lastAutoTable?.finalY + 6;
    autoTable(doc, {
      startY: yPos,
      theme: "grid",
      styles: { fontSize: 10 },
      head: [["No", "Product", "Make", "Qty", "Unit", "Rate", "Per", "Amount"]],
      body: po.items.map((item, idx) => [
        idx + 1,
        item.rawMaterialDto?.name || "",
        item.make?.name || "",
        item.quantity,
        item.unit,
        item.rate.toFixed(2),
        item.per,
        item.amount.toFixed(2)
      ])
    });
    yPos = doc.lastAutoTable?.finalY + 6;
    doc.setFontSize(11);
    doc.text(`Grand Total: ${po.grandTotal.toFixed(2)}`, 10, yPos);
    yPos += 10;
    autoTable(doc, {
      startY: yPos,
      theme: "grid",
      styles: { fontSize: 9 },
      head: [["Terms & Conditions"]],
      body: [
        ["1. Material delivered quality subject to final approval."],
        ["2. PO No. and Date must be mentioned on invoices and documents."],
        ["3. Goods rejected will remain at our factory at your cost and risk, must be replaced promptly."],
        ["4. We reserve the right to cancel order due to quality/delay issues."]
      ]
    });
    yPos = doc.lastAutoTable?.finalY + 12;
    autoTable(doc, {
      startY: yPos,
      theme: "grid",
      styles: { fontSize: 10 },
      head: [["Prepared by", "Verified by", "Authorized Signatory"]],
      body: [["____________________", "____________________", "____________________"]]
    });
    doc.save(`PO-${po.id}.pdf`);
  }
  static \u0275fac = function PurchaseOrderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PurchaseOrderComponent)(\u0275\u0275directiveInject(PoService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PurchaseOrderComponent, selectors: [["app-purchase-order"]], decls: 33, vars: 2, consts: [[1, "wrapper"], [1, "main-content"], [1, "content-header"], [1, "container-fluid"], [1, "content"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], ["routerLink", "/add-Po", 1, "btn", "btn-primary", "ms-auto"], [1, "card-body"], ["type", "text", "placeholder", "Search...", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], [1, "table", "table-bordered", "table-hover", 2, "text-align", "center"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-success", "btn-sm", "me-1", 3, "routerLink"], [1, "fa", "fa-pencil-square"], [1, "btn", "btn-outline-success", "btn-sm", "me-1", 3, "click"], [1, "fa", "fa-eye"]], template: function PurchaseOrderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "h3");
      \u0275\u0275text(5, "Purchase Order");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 3)(8, "div", 5)(9, "div", 6)(10, "h3", 7);
      \u0275\u0275text(11, "Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275text(13, " Add a new PO ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9)(15, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function PurchaseOrderComponent_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "table", 11)(17, "thead")(18, "tr")(19, "th");
      \u0275\u0275text(20, "Sr.No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th");
      \u0275\u0275text(22, "Purchase Order No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th");
      \u0275\u0275text(24, "Supplier's Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "Order Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "tbody");
      \u0275\u0275template(32, PurchaseOrderComponent_tr_32_Template, 19, 11, "tr", 12);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(17);
      \u0275\u0275property("ngForOf", ctx.filteredPO());
    }
  }, dependencies: [CommonModule, NgForOf, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormsModule, NgModel, RouterLink, DatePipe], styles: ["\n\n/*# sourceMappingURL=purchase-order.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PurchaseOrderComponent, [{
    type: Component,
    args: [{ selector: "app-purchase-order", imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink], template: `<div class="wrapper">
  <div class="main-content">
    <section class="content-header">
      <div class="container-fluid">
        <h3>Purchase Order</h3>
      </div>
    </section>

    <section class="content">
      <div class="container-fluid">
        <div class="card">
          <div
            class="card-header d-flex justify-content-between align-items-center"
          >
            <h3 class="card-title mb-0">Details</h3>
            <button class="btn btn-primary ms-auto" routerLink="/add-Po">
              Add a new PO
            </button>
          </div>

          <div class="card-body">
            <input
              type="text"
              class="form-control mb-3"
              placeholder="Search..."
              [(ngModel)]="searchTerm"
            />

            <table
              class="table table-bordered table-hover"
              style="text-align: center"
            >
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>Purchase Order No.</th>
                  <th>Supplier's Name</th>
                  <th>Address</th>
                  <th>Order Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let Po of filteredPO(); let i = index">
                  <td>{{ i + 1 }}</td>
                  <td>{{ Po.id || 'N/A' }}</td>
                  <td>{{ Po.supplier.name || 'N/A' }}</td>
                  <td>{{ Po.address || Po.supplier.address || 'N/A' }}</td>
                  <td>{{ Po.orderDate | date:'short' }}</td>

                  <!-- Actions Column -->
                  <td>
                    <button
                          class="btn btn-outline-success btn-sm me-1"
                          [routerLink]="['/edit-Po', Po.id]"
                        >
                          <i class="fa fa-pencil-square"></i> Edit Po
                        </button>
                    <button class="btn btn-outline-success btn-sm me-1" (click)="generatePOPdf(Po.id)"><i class="fa fa-eye"></i>Purchase Order</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

`, styles: ["/* src/app/pages/purchase-order/purchase-order.css */\n/*# sourceMappingURL=purchase-order.css.map */\n"] }]
  }], () => [{ type: PoService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PurchaseOrderComponent, { className: "PurchaseOrderComponent", filePath: "src/app/pages/purchase-order/purchase-order.ts", lineNumber: 64 });
})();
export {
  PurchaseOrderComponent
};
//# sourceMappingURL=chunk-BE3ISLTL.js.map
