import {
  OrderService
} from "./chunk-2HHOPV76.js";
import {
  E
} from "./chunk-L63IXFFL.js";
import "./chunk-7YWLATDR.js";
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
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QAWYXZDT.js";
import "./chunk-46DXP6YY.js";

// src/app/pages/order-dispatch-list/order-dispatch-list.ts
var _c0 = (a0) => ["/order-details", a0];
var _c1 = (a0) => ["/edit-invoice", a0];
function OrderDispatchListComponent_tr_32_Template(rf, ctx) {
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
    \u0275\u0275elementStart(14, "td")(15, "button", 12);
    \u0275\u0275element(16, "i", 13);
    \u0275\u0275text(17, " Info ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 14);
    \u0275\u0275listener("click", function OrderDispatchListComponent_tr_32_Template_button_click_18_listener() {
      const user_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.generateInvoice(user_r2.invoiceNo));
    });
    \u0275\u0275element(19, "i", 15);
    \u0275\u0275text(20, " Invoice ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 12);
    \u0275\u0275element(22, "i", 16);
    \u0275\u0275text(23, " Edit Invoice ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", user_r2.invoiceNo, " ");
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
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c1, user_r2.invoiceNo));
  }
}
var OrderDispatchListComponent = class _OrderDispatchListComponent {
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
    this.userService.getOrdersByStatus(2).subscribe((data) => {
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
    return this.order.filter((u) => u.invoiceNo.toString().includes(term) || u.customerName.toLowerCase().includes(term) || u.customerPhone.toPrecision().includes(term) || u.customerEmail.toLowerCase().includes(term) || u.orderDate.toLowerCase().includes(term));
  }
  generateInvoice(invoiceId) {
    if (!invoiceId)
      return alert("Invalid Invoice ID.");
    this.InvoiceService.getInvoiceById(invoiceId).subscribe({
      next: (invoice) => {
        const party = this.parties.find((p) => p.id === invoice.partyId);
        const pdf = this.generateFullInvoicePdf(invoice, party);
        const blobUrl = pdf.output("bloburl");
        window.open(blobUrl, "_blank");
      },
      error: (err) => {
        console.error("Failed to fetch invoice:", err);
        alert("Failed to fetch invoice data.");
      }
    });
  }
  // ------------------ FULL PDF GENERATOR ------------------
  generateFullInvoicePdf(invoice, party) {
    const doc = new E("p", "mm", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 15;
    const tableWidth = pageWidth - margin * 2;
    let currentY = 20;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setDrawColor(0);
    doc.setLineWidth(0.2);
    doc.rect(margin, currentY, tableWidth, 240);
    this.drawHeaderSection(doc, margin, currentY, tableWidth, invoice, party);
    currentY += 60;
    this.drawItemsHeader(doc, margin, currentY, tableWidth);
    currentY += 15;
    currentY = this.drawItemsData(doc, margin, currentY, tableWidth, invoice);
    this.drawFooterSection(doc, margin, currentY, tableWidth, invoice);
    return doc;
  }
  // ------------------ HEADER ------------------
  drawHeaderSection(doc, x, y, width, invoiceData, party) {
    const halfWidth = width / 2;
    doc.line(x + halfWidth, y, x + halfWidth, y + 60);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Billed To:", x + 3, y + 8);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(`M/s. : ${party?.name || "Customer Name"}`, x + 3, y + 16);
    const addressLines = this.splitText(party?.address || "Customer Address", 45);
    let addressY = y + 24;
    doc.text("Address :", x + 3, addressY);
    addressLines.forEach((line, idx) => doc.text(line, x + 20, addressY + idx * 5));
    doc.text(`State: ${party?.state || "STATE"}`, x + 3, y + 40);
    doc.text(`State Code: ${party?.stateCode || "00"}`, x + 60, y + 40);
    doc.text(`GSTIN : ${party?.gstin || "N/A"}`, x + 3, y + 50);
    const rightX = x + halfWidth + 3;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Invoice Details:", rightX, y + 8);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(`Invoice No.: ${invoiceData.id || "N/A"}`, rightX, y + 16);
    doc.text(`Invoice Date: ${this.formatDate(invoiceData.invoiceDate)}`, rightX + 60, y + 16);
    doc.text(`Challan Date: ${invoiceData.challanDate}`, rightX + 60, y + 24);
    doc.text(`Place Of Supply: ${invoiceData.placeOfSupply || "N/A"}`, rightX, y + 32);
    doc.text(`Transportation: ${invoiceData.transportation || "N/A"}`, rightX, y + 40);
    doc.text(`Vehicle No.: ${invoiceData.vehicleNo || "N/A"}`, rightX, y + 48);
    doc.line(x, y + 60, x + width, y + 60);
  }
  // ------------------ ITEMS HEADER ------------------
  drawItemsHeader(doc, x, y, width) {
    const colWidths = [15, 55, 25, 20, 25, 20, 25];
    let currentX = x;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    colWidths.forEach((colWidth, idx) => {
      doc.line(currentX, y, currentX, y + 15);
      let text = ["", "Description", "", "", "", "", ""][idx];
      switch (idx) {
        case 0:
          text = "Item\nNo.";
          break;
        case 2:
          text = "HSN\nCode";
          break;
        case 3:
          text = "Qty.";
          break;
        case 4:
          text = "Rate";
          break;
        case 5:
          text = "Per";
          break;
        case 6:
          text = "Amount";
          break;
      }
      if (text.includes("\n")) {
        const lines = text.split("\n");
        doc.text(lines[0], currentX + colWidth / 2, y + 6, { align: "center" });
        doc.text(lines[1], currentX + colWidth / 2, y + 12, { align: "center" });
      } else
        doc.text(text, currentX + colWidth / 2, y + 9, { align: "center" });
      currentX += colWidth;
    });
    doc.line(currentX, y, currentX, y + 15);
    doc.line(x, y, x + width, y);
    doc.line(x, y + 15, x + width, y + 15);
  }
  // ------------------ ITEMS DATA ------------------
  drawItemsData(doc, x, y, width, invoiceData) {
    const colWidths = [15, 55, 25, 20, 25, 20, 25];
    const rowHeight = 12;
    let currentY = y;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    invoiceData.items.forEach((item, idx) => {
      let currentX = x;
      colWidths.forEach((col) => {
        doc.line(currentX, currentY, currentX + col, currentY + rowHeight);
        currentX += col;
      });
      currentX = x;
      doc.text((idx + 1).toString(), currentX + colWidths[0] / 2, currentY + 8, { align: "center" });
      currentX += colWidths[0];
      doc.text(item.description || "", currentX + 2, currentY + 8);
      currentX += colWidths[1];
      doc.text(item.hsnCode || "", currentX + colWidths[2] / 2, currentY + 8, { align: "center" });
      currentX += colWidths[2];
      doc.text((item.quantity || 0).toString(), currentX + colWidths[3] / 2, currentY + 8, { align: "center" });
      currentX += colWidths[3];
      doc.text((item.rate || 0).toFixed(2), currentX + colWidths[4] / 2, currentY + 8, { align: "center" });
      currentX += colWidths[4];
      doc.text(item.per ? `${item.per} Kg` : "1 Kg", currentX + colWidths[5] / 2, currentY + 8, { align: "center" });
      currentX += colWidths[5];
      doc.text((item.amount || 0).toFixed(2), currentX + colWidths[6] / 2, currentY + 8, { align: "center" });
      currentY += rowHeight;
    });
    const totalItemRows = 8;
    const emptyRows = totalItemRows - invoiceData.items.length;
    for (let i = 0; i < emptyRows; i++) {
      let currentX = x;
      colWidths.forEach((col) => {
        doc.line(currentX, currentY, currentX + col, currentY + rowHeight);
        currentX += col;
      });
      currentY += rowHeight;
    }
    doc.line(x, currentY, x + width, currentY);
    return currentY;
  }
  // ------------------ FOOTER ------------------
  drawFooterSection(doc, x, y, width, invoiceData) {
    const leftWidth = width * 0.6, rightWidth = width * 0.4;
    doc.line(x + leftWidth, y, x + leftWidth, y + 80);
    let leftY = y + 10;
    doc.setFontSize(9);
    doc.text("GSTIN No.: 24AACFN7739D1ZD", x + 3, leftY);
    leftY += 6;
    doc.text("Bank Account No.: 75470500000035", x + 3, leftY);
    leftY += 6;
    doc.text("Bank Name: BANK OF BARODA", x + 3, leftY);
    leftY += 6;
    doc.text("Bank Branch: Odhav, Ahmedabad", x + 3, leftY);
    leftY += 6;
    doc.text("Bank IFSC Code: BARB0DBODHA", x + 3, leftY);
    leftY += 10;
    doc.text("Payment Terms .............. days", x + 3, leftY);
    leftY += 8;
    doc.text("RUPEES   Eighty Two Rupees Only", x + 3, leftY);
    leftY += 10;
    doc.text("Terms of Sales (Subject to Ahmedabad Jurisdiction)", x + 3, leftY);
    leftY += 6;
    const rightX = x + leftWidth;
    this.drawTotalsTable(doc, rightX, y, rightWidth, invoiceData);
    doc.line(x, y + 80, x + width, y + 80);
  }
  // ------------------ TOTALS ------------------
  drawTotalsTable(doc, x, y, width, invoiceData) {
    const rowHeight = 10;
    let currentY = y + 5;
    doc.setFontSize(9);
    const totalsData = [
      { label: "Basic Amount", value: (invoiceData.basicAmount || 0).toFixed(2) },
      { label: `${invoiceData.discountPer || 0}% Discount`, value: (invoiceData.discountCash || 0).toFixed(2) },
      { label: "Total Taxable Value", value: (invoiceData.discountedAmount || 0).toFixed(2) },
      { label: `IGST ${invoiceData.igstPer || 0} %`, value: (invoiceData.igstAmt || 0).toFixed(2) },
      { label: "Round of Sale", value: (invoiceData.round || 0).toFixed(2) }
    ];
    totalsData.forEach((item) => {
      doc.rect(x, currentY, width * 0.65, rowHeight);
      doc.rect(x + width * 0.65, currentY, width * 0.35, rowHeight);
      doc.text(item.label, x + 3, currentY + 7);
      doc.text(item.value, x + width - 5, currentY + 7, { align: "right" });
      currentY += rowHeight;
    });
    doc.setFont("helvetica", "bold");
    doc.rect(x, currentY, width * 0.65, rowHeight);
    doc.rect(x + width * 0.65, currentY, width * 0.35, rowHeight);
    doc.text("Total Amount After Tax", x + 3, currentY + 7);
    doc.text((invoiceData.grandTotal || 0).toFixed(2), x + width - 5, currentY + 7, { align: "right" });
    currentY += rowHeight + 15;
    doc.setFont("helvetica", "normal");
    doc.text("For, Navrang Chemical Industries", x + 3, currentY);
    currentY += 20;
    doc.text("Authorised Signature", x + 3, currentY);
  }
  // ------------------ HELPERS ------------------
  splitText(text, maxLength) {
    if (!text)
      return [""];
    if (text.length <= maxLength)
      return [text];
    const words = text.split(" ");
    const lines = [];
    let line = "";
    words.forEach((w) => {
      if ((line + w).length <= maxLength)
        line += (line ? " " : "") + w;
      else {
        lines.push(line);
        line = w;
      }
    });
    if (line)
      lines.push(line);
    return lines;
  }
  formatDate(date) {
    if (!date)
      return "";
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "2-digit", year: "numeric" });
  }
  static \u0275fac = function OrderDispatchListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderDispatchListComponent)(\u0275\u0275directiveInject(OrderService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(InvoiceService), \u0275\u0275directiveInject(PartyService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDispatchListComponent, selectors: [["app-order-dispatch-list"]], decls: 33, vars: 2, consts: [[1, "wrapper"], [1, "main-content"], [1, "content-header"], [1, "container-fluid"], [1, "content"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], [1, "card-body"], ["type", "text", "placeholder", "Search...", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], [1, "table", "table-bordered", "table-hover", 2, "text-align", "center"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-success", "btn-sm", "me-1", 3, "routerLink"], [1, "fa", "fa-eye"], [1, "btn", "btn-outline-success", "btn-sm", "me-1", 3, "click"], [1, "fa", "fa-check"], [1, "fa", "fa-pencil-square"]], template: function OrderDispatchListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "h3");
      \u0275\u0275text(5, "Dispatch List");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 3)(8, "div", 5)(9, "div", 6)(10, "h3", 7);
      \u0275\u0275text(11, "Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 8)(13, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function OrderDispatchListComponent_Template_input_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "table", 10)(15, "thead")(16, "tr")(17, "th");
      \u0275\u0275text(18, "Sr.No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "th");
      \u0275\u0275text(20, "Invoice No.");
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
      \u0275\u0275template(32, OrderDispatchListComponent_tr_32_Template, 24, 15, "tr", 11);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDispatchListComponent, [{
    type: Component,
    args: [{ selector: "app-order-dispatch-list", imports: [FormsModule, CommonModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="wrapper">\r
  <div class="main-content">\r
    <section class="content-header">\r
      <div class="container-fluid">\r
        <h3>Dispatch List</h3>\r
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
                  <th>Invoice No.</th>\r
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
                          class="btn btn-outline-success btn-sm me-1"[routerLink]="['/order-details', user.invoiceNo]">\r
                          <i class="fa fa-eye"></i> Info\r
                        </button>\r
                    <button\r
                          class="btn btn-outline-success btn-sm me-1" (click)="generateInvoice(user.invoiceNo)">\r
                          <i class="fa fa-check"></i> Invoice\r
                        </button>\r
                    <button\r
                          class="btn btn-outline-success btn-sm me-1"  [routerLink]="['/edit-invoice', user.invoiceNo]">\r
                          <i class="fa fa-pencil-square"></i> Edit Invoice\r
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDispatchListComponent, { className: "OrderDispatchListComponent", filePath: "src/app/pages/order-dispatch-list/order-dispatch-list.ts", lineNumber: 31 });
})();
export {
  OrderDispatchListComponent
};
//# sourceMappingURL=chunk-GHQ3ZQDP.js.map
