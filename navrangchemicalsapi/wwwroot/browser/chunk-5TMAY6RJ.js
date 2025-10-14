import {
  E
} from "./chunk-L63IXFFL.js";
import "./chunk-7YWLATDR.js";
import {
  PartyService
} from "./chunk-7JKBLJBD.js";
import {
  ProductService
} from "./chunk-XUIXJ5QK.js";
import {
  InvoiceService
} from "./chunk-DAEJSI53.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
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
  ActivatedRoute,
  Router
} from "./chunk-IW3JCNMQ.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf
} from "./chunk-JLFMSZUT.js";
import {
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QAWYXZDT.js";
import "./chunk-46DXP6YY.js";

// src/app/components/edit-invoice/edit-invoice.ts
function EditInvoice_option_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275property("value", p_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r1.name);
  }
}
function EditInvoice_option_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275property("value", p_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r2.productName);
  }
}
function EditInvoice_option_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275property("value", i_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r3);
  }
}
function EditInvoice_tr_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
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
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "td")(23, "button", 54);
    \u0275\u0275listener("click", function EditInvoice_tr_132_Template_button_click_23_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.removeItem(i_r6));
    });
    \u0275\u0275text(24, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.hsnCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.bagType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.pack);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.kgs);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.rate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.per);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 10, item_r8.amount, "1.2-2"));
  }
}
var EditInvoice = class _EditInvoice {
  fb;
  partyService;
  ProductService;
  InvoiceService;
  route;
  router;
  invoiceForm;
  productForm;
  company = [];
  parties = [];
  products = [];
  dispatchList = [];
  selectedParty;
  rateTypes = ["Bag", "Box", "Karbo"];
  basicAmount = 0;
  discountCash = 0;
  totalTaxable = 0;
  cgstAmt = 0;
  sgstAmt = 0;
  igstAmt = 0;
  roundOff = 0;
  grandTotal = 0;
  invoiceId;
  // <-- Invoice ID for edit
  constructor(fb, partyService, ProductService2, InvoiceService2, route, router) {
    this.fb = fb;
    this.partyService = partyService;
    this.ProductService = ProductService2;
    this.InvoiceService = InvoiceService2;
    this.route = route;
    this.router = router;
  }
  ngOnInit() {
    this.invoiceId = +this.route.snapshot.paramMap.get("id");
    this.initForms();
    this.loadParties();
    this.loadProducts();
    this.invoiceForm.get("partyId")?.valueChanges.subscribe((id) => {
      this.selectedParty = this.parties.find((p) => p.id === +id);
    });
    this.invoiceForm.get("discountPer")?.valueChanges.subscribe((_) => this.calculateTotals());
    this.invoiceForm.get("igstPer")?.valueChanges.subscribe((_) => this.calculateTotals());
    this.invoiceForm.get("cgstPer")?.valueChanges.subscribe(() => {
      this.calculateTotals();
    });
    this.invoiceForm.get("sgstPer")?.valueChanges.subscribe(() => {
      this.calculateTotals();
    });
    if (this.invoiceId)
      this.loadInvoice(this.invoiceId);
  }
  initForms() {
    this.invoiceForm = this.fb.group({
      invoiceDate: ["", Validators.required],
      challanDate: ["", Validators.required],
      placeOfSupply: ["", Validators.required],
      vehicleNo: ["", Validators.required],
      transportation: ["", Validators.required],
      partyId: ["", Validators.required],
      discountPer: [0, [Validators.min(0)]],
      igstPer: [1, [Validators.min(0)]],
      cgstPer: [0],
      sgstPer: [0],
      cgstAmt: [0],
      sgstAmt: [0]
    });
    this.productForm = this.fb.group({
      productId: ["", Validators.required],
      rateType: [""],
      pack: [1, Validators.required],
      kgs: [1, Validators.required],
      rate: [0, Validators.required],
      per: [1, Validators.required],
      quantity: [0],
      amount: [0]
    });
  }
  loadParties() {
    this.partyService.getParties().subscribe((p) => this.parties = p);
  }
  loadProducts() {
    this.ProductService.getAllProducts().subscribe((p) => this.products = p);
  }
  onProductChange() {
    const productId = this.productForm.value.productId;
    if (!productId)
      return;
    this.ProductService.getProductByID(productId).subscribe((res) => {
      this.productForm.patchValue({
        rate: res.productPrice,
        per: 1,
        quantity: this.productForm.value.pack * this.productForm.value.kgs,
        amount: this.productForm.value.pack * this.productForm.value.kgs * res.productPrice
      });
    });
  }
  calculateItemAmount() {
    const f = this.productForm.value;
    const amount = f.pack * f.kgs * f.rate;
    this.productForm.patchValue({ amount });
  }
  addItem() {
    if (this.productForm.invalid)
      return;
    const prod = this.products.find((p) => p.id === +this.productForm.value.productId);
    if (!prod)
      return;
    const item = {
      productId: prod.id,
      description: prod.productName,
      hsnCode: prod.hsNcode.toString(),
      bagType: this.rateTypes[this.productForm.value.rateType],
      pack: this.productForm.value.pack,
      kgs: this.productForm.value.kgs,
      quantity: this.productForm.value.quantity,
      rate: prod.productPrice,
      per: this.productForm.value.per,
      amount: this.productForm.value.amount
    };
    this.dispatchList.push(item);
    this.calculateTotals();
    this.productForm.reset({ pack: 1, kgs: 1, rate: 0, quantity: 1, per: 1, amount: 0, rateType: 0 });
  }
  removeItem(index) {
    this.dispatchList.splice(index, 1);
    this.calculateTotals();
  }
  adjustCGST(value) {
    const current = this.invoiceForm.get("cgstPer")?.value || 0;
    this.invoiceForm.get("cgstPer")?.setValue(current + value);
    this.calculateTotals();
  }
  adjustSGST(value) {
    const current = this.invoiceForm.get("sgstPer")?.value || 0;
    this.invoiceForm.get("sgstPer")?.setValue(current + value);
    this.calculateTotals();
  }
  calculateTotals() {
    this.basicAmount = this.dispatchList.reduce((sum, i) => sum + i.amount, 0);
    const discountPer = Number(this.invoiceForm.get("discountPer")?.value) || 0;
    this.discountCash = +(this.basicAmount * discountPer / 100).toFixed(2);
    this.totalTaxable = +(this.basicAmount - this.discountCash).toFixed(2);
    const cgstPer = Number(this.invoiceForm.get("cgstPer")?.value) || 0;
    const sgstPer = Number(this.invoiceForm.get("sgstPer")?.value) || 0;
    this.cgstAmt = +(this.totalTaxable * cgstPer / 100).toFixed(2);
    this.sgstAmt = +(this.totalTaxable * sgstPer / 100).toFixed(2);
    this.invoiceForm.patchValue({
      cgstAmt: this.cgstAmt,
      sgstAmt: this.sgstAmt
    }, { emitEvent: false });
    const gross = this.totalTaxable + this.cgstAmt + this.sgstAmt;
    const decimals = +(gross % 1).toFixed(2);
    if (decimals >= 0.5) {
      this.roundOff = +(1 - decimals).toFixed(2);
      this.grandTotal = +(gross + this.roundOff).toFixed(2);
    } else {
      this.roundOff = -decimals;
      this.grandTotal = Math.floor(gross);
    }
  }
  // ------------------ LOAD EXISTING INVOICE --------------------
  loadInvoice(id) {
    this.InvoiceService.getInvoiceById(id).subscribe({
      next: (invoice) => {
        this.invoiceForm.patchValue({
          invoiceDate: invoice.invoiceDate ? invoice.invoiceDate.split("T")[0] : "",
          challanDate: invoice.challanDate ? invoice.challanDate.split("T")[0] : "",
          placeOfSupply: invoice.placeOfSupply,
          vehicleNo: invoice.vehicleNo,
          transportation: invoice.transportation,
          partyId: invoice.partyId,
          discountPer: invoice.discountPer,
          igstPer: invoice.igstPer,
          cgstPer: invoice.cgstPer,
          sgstPer: invoice.sgstPer
        });
        this.dispatchList = invoice.items || [];
        this.calculateTotals();
        this.router.navigate(["/order-dispatch-list"]);
      },
      error: (err) => {
        console.error("Failed to load invoice", err);
        alert("Failed to load invoice data.");
      }
    });
  }
  saveInvoice() {
    if (this.invoiceForm.invalid) {
      this.showValidationErrors();
      return;
    }
    try {
      const invoiceData = this.prepareInvoiceData();
      const pdf = this.createSimpleInvoice(invoiceData);
      const pdfBlob = pdf.output("bloburl");
      window.open(pdfBlob, "_blank");
      if (this.invoiceId) {
        this.InvoiceService.updateInvoice(this.invoiceId, invoiceData).subscribe({
          next: (res) => this.showSuccessMessage("Invoice updated successfully!"),
          error: (err) => this.showErrorMessage("Failed to update invoice.")
        });
      } else {
        this.InvoiceService.createInvoice(invoiceData).subscribe({
          next: (res) => this.showSuccessMessage("Invoice created successfully!"),
          error: (err) => this.showErrorMessage("Failed to create invoice.")
        });
      }
    } catch (error) {
      console.error("Invoice generation failed:", error);
      alert("Failed to generate invoice. Please try again.");
    }
  }
  prepareInvoiceData() {
    return {
      invoiceDate: this.invoiceForm.value.invoiceDate,
      challanDate: this.invoiceForm.value.challanDate,
      placeOfSupply: this.invoiceForm.value.placeOfSupply,
      vehicleNo: this.invoiceForm.value.vehicleNo,
      transportation: this.invoiceForm.value.transportation,
      partyId: this.invoiceForm.value.partyId,
      basicAmount: this.basicAmount,
      discountPer: this.invoiceForm.value.discountPer,
      discountCash: this.discountCash,
      discountedAmount: this.totalTaxable,
      igstPer: this.invoiceForm.value.igstPer,
      igstAmt: this.igstAmt,
      cgstPer: this.invoiceForm.value.cgstPer,
      cgstAmt: this.cgstAmt,
      sgstPer: this.invoiceForm.value.sgstPer,
      sgstAmt: this.sgstAmt,
      round: this.roundOff,
      grandTotal: this.grandTotal,
      items: this.dispatchList
    };
  }
  createSimpleInvoice(invoiceData) {
    const doc = new E("p", "mm", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.2);
    this.drawInvoiceTable(doc, invoiceData, pageWidth);
    return doc;
  }
  drawInvoiceTable(doc, invoiceData, pageWidth) {
    const party = this.selectedParty;
    const margin = 15;
    const tableWidth = pageWidth - margin * 2;
    const startX = margin;
    let currentY = 20;
    doc.rect(startX, currentY, tableWidth, 240);
    this.drawHeaderSection(doc, startX, currentY, tableWidth, invoiceData, party);
    currentY += 60;
    this.drawItemsHeader(doc, startX, currentY, tableWidth);
    currentY += 15;
    currentY = this.drawItemsData(doc, startX, currentY, tableWidth, invoiceData);
    this.drawFooterSection(doc, startX, currentY, tableWidth, invoiceData);
  }
  drawHeaderSection(doc, x, y, width, invoiceData, party) {
    const halfWidth = width / 2;
    doc.line(x + halfWidth, y, x + halfWidth, y + 60);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Details of Receiver (Billed To)", x + 3, y + 8);
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
    doc.text("Details of Invoice", rightX, y + 8);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text(`Invoice No.: ${this.invoiceId || "507"}`, rightX, y + 16);
    doc.text(`Date: ${this.formatDate(invoiceData.invoiceDate)}`, rightX + 60, y + 16);
    doc.text(`Challan No.: 507`, rightX, y + 24);
    doc.text(`Date: ${this.formatDate(invoiceData.challanDate)}`, rightX + 60, y + 24);
    doc.text(`Place Of Supply : ${invoiceData.placeOfSupply || "N/A"}`, rightX, y + 32);
    doc.text(`Transportation : ${invoiceData.transportation || "N/A"}`, rightX, y + 40);
    doc.text(`Vehicle No. : ${invoiceData.vehicleNo || "N/A"}`, rightX, y + 48);
    doc.line(x, y + 60, x + width, y + 60);
  }
  drawItemsHeader(doc, x, y, width) {
    const colWidths = [15, 55, 25, 20, 25, 20, 25];
    let currentX = x;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    colWidths.forEach((colWidth, idx) => {
      doc.line(currentX, y, currentX, y + 15);
      let text = ["", "Description Of Goods", "", "", "", "", ""][idx];
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
    doc.text("(1) Goods once sold will not be taken back", x + 3, leftY);
    leftY += 6;
    doc.text("(2) Payment Requested within mentioned days if not, interest", x + 3, leftY);
    leftY += 6;
    doc.text("will be charges @ 18%", x + 3, leftY);
    leftY += 6;
    doc.text("(3) Goods Forwarded on your account and Risk.", x + 3, leftY);
    const rightX = x + leftWidth;
    this.drawTotalsTable(doc, rightX, y, rightWidth, invoiceData);
    doc.line(x, y + 80, x + width, y + 80);
  }
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
  // Helpers
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
  // Alert helpers
  showValidationErrors() {
    alert("Please fill all required fields before generating the invoice.");
  }
  showSuccessMessage(msg) {
    alert(`\u2705 ${msg}`);
  }
  showErrorMessage(msg) {
    alert(`\u274C ${msg}`);
  }
  cancel() {
    this.invoiceForm.reset();
    this.productForm.reset();
    this.dispatchList = [];
  }
  static \u0275fac = function EditInvoice_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditInvoice)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(PartyService), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(InvoiceService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditInvoice, selectors: [["app-generate-invoice"]], decls: 186, vars: 30, consts: [[1, "wrapper"], [1, "content"], [1, "container-fluid"], [3, "formGroup"], [1, "row"], [1, "col-md-6"], [1, "card", "card-cyan"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "row", "g-2"], ["type", "date", "formControlName", "invoiceDate", 1, "form-control"], ["type", "date", "formControlName", "challanDate", 1, "form-control"], ["type", "text", "formControlName", "placeOfSupply", 1, "form-control"], ["type", "text", "formControlName", "vehicleNo", 1, "form-control"], ["type", "text", "formControlName", "transportation", 1, "form-control"], [1, "card", "card-primary"], ["formControlName", "partyId", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], [1, "col-md-12"], ["rows", "2", "disabled", "", 1, "form-control", 3, "value"], [1, "card", "card-info", "mt-3"], [1, "row", "g-2", 3, "formGroup"], [1, "col-md-3"], ["formControlName", "productId", 1, "form-control", 3, "change"], [1, "col-md-2"], ["formControlName", "rateType", 1, "form-control"], [1, "col-md-1"], ["type", "number", "formControlName", "pack", 1, "form-control", 3, "input"], ["type", "number", "formControlName", "kgs", 1, "form-control", 3, "input"], ["type", "number", "formControlName", "rate", 1, "form-control", 3, "input"], ["type", "number", "formControlName", "quantity", 1, "form-control"], ["type", "number", "formControlName", "amount", 1, "form-control"], [1, "col-md-1", "d-flex", "align-items-end"], ["type", "button", 1, "btn", "btn-success", "w-100", 3, "click"], [1, "card", "mt-3"], [1, "card-body", "table-responsive"], [1, "table", "table-bordered", "table-hover"], [4, "ngFor", "ngForOf"], [1, "row", "mt-3", "g-2"], ["type", "number", "disabled", "", 1, "form-control", 3, "value"], ["type", "number", "formControlName", "discountPer", 1, "form-control"], [1, "col-md-3", "mt-2"], [1, "input-group"], ["type", "number", "formControlName", "cgstPer", 1, "form-control", 3, "input"], ["type", "number", "formControlName", "cgstAmt", "readonly", "", 1, "form-control"], ["type", "number", "formControlName", "sgstPer", 1, "form-control", 3, "input"], ["type", "number", "formControlName", "sgstAmt", "readonly", "", 1, "form-control"], [1, "mt-3", "d-flex", "justify-content-between"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [3, "value"], [1, "btn", "btn-danger", "btn-xs", 3, "click"]], template: function EditInvoice_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "form", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h3", 8);
      \u0275\u0275text(9, "Invoice Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 9)(11, "div", 10)(12, "div", 5)(13, "label");
      \u0275\u0275text(14, "Invoice Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 5)(17, "label");
      \u0275\u0275text(18, "Challan Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 5)(21, "label");
      \u0275\u0275text(22, "Place of Supply");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 5)(25, "label");
      \u0275\u0275text(26, "Vehicle No");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 5)(29, "label");
      \u0275\u0275text(30, "Transportation");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 15);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(32, "div", 5)(33, "div", 16)(34, "div", 7)(35, "h3", 8);
      \u0275\u0275text(36, "Party Details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 9)(38, "div", 10)(39, "div", 5)(40, "label");
      \u0275\u0275text(41, "M/s.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "select", 17)(43, "option", 18);
      \u0275\u0275text(44, "--Select Party--");
      \u0275\u0275elementEnd();
      \u0275\u0275template(45, EditInvoice_option_45_Template, 2, 2, "option", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "label");
      \u0275\u0275text(47, "GST No");
      \u0275\u0275elementEnd();
      \u0275\u0275element(48, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 5)(50, "label");
      \u0275\u0275text(51, "Mobile No");
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "input", 20);
      \u0275\u0275elementStart(53, "label");
      \u0275\u0275text(54, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275element(55, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 21)(57, "label");
      \u0275\u0275text(58, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(59, "textarea", 22);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(60, "div", 23)(61, "div", 7)(62, "h3", 8);
      \u0275\u0275text(63, "Add Product");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 9)(65, "div", 24)(66, "div", 25)(67, "label");
      \u0275\u0275text(68, "Select Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "select", 26);
      \u0275\u0275listener("change", function EditInvoice_Template_select_change_69_listener() {
        return ctx.onProductChange();
      });
      \u0275\u0275elementStart(70, "option", 18);
      \u0275\u0275text(71, "--Select Product--");
      \u0275\u0275elementEnd();
      \u0275\u0275template(72, EditInvoice_option_72_Template, 2, 2, "option", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 27)(74, "label");
      \u0275\u0275text(75, "Rate Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "select", 28);
      \u0275\u0275template(77, EditInvoice_option_77_Template, 2, 2, "option", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 29)(79, "label");
      \u0275\u0275text(80, "Pack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "input", 30);
      \u0275\u0275listener("input", function EditInvoice_Template_input_input_81_listener() {
        return ctx.calculateItemAmount();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 29)(83, "label");
      \u0275\u0275text(84, "Kgs/Pack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "input", 31);
      \u0275\u0275listener("input", function EditInvoice_Template_input_input_85_listener() {
        return ctx.calculateItemAmount();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 29)(87, "label");
      \u0275\u0275text(88, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "input", 32);
      \u0275\u0275listener("input", function EditInvoice_Template_input_input_89_listener() {
        return ctx.calculateItemAmount();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 29)(91, "label");
      \u0275\u0275text(92, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275element(93, "input", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 27)(95, "label");
      \u0275\u0275text(96, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(97, "input", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div", 35)(99, "button", 36);
      \u0275\u0275listener("click", function EditInvoice_Template_button_click_99_listener() {
        return ctx.addItem();
      });
      \u0275\u0275text(100, "Add");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(101, "div", 37)(102, "div", 7)(103, "h3", 8);
      \u0275\u0275text(104, "Dispatch List");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 38)(106, "table", 39)(107, "thead")(108, "tr")(109, "th");
      \u0275\u0275text(110, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "th");
      \u0275\u0275text(112, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "th");
      \u0275\u0275text(114, "HSN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "th");
      \u0275\u0275text(116, "BagType");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "th");
      \u0275\u0275text(118, "Pack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "th");
      \u0275\u0275text(120, "Kgs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "th");
      \u0275\u0275text(122, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "th");
      \u0275\u0275text(124, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "th");
      \u0275\u0275text(126, "Per");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "th");
      \u0275\u0275text(128, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "th");
      \u0275\u0275text(130, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(131, "tbody");
      \u0275\u0275template(132, EditInvoice_tr_132_Template, 25, 13, "tr", 40);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(133, "div", 41)(134, "div", 25)(135, "label");
      \u0275\u0275text(136, "Basic Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(137, "input", 42);
      \u0275\u0275pipe(138, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "div", 25)(140, "label");
      \u0275\u0275text(141, "Discount (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(142, "input", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "div", 25)(144, "label");
      \u0275\u0275text(145, "Discount Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275element(146, "input", 42);
      \u0275\u0275pipe(147, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "div", 25)(149, "label");
      \u0275\u0275text(150, "Total Taxable Value");
      \u0275\u0275elementEnd();
      \u0275\u0275element(151, "input", 42);
      \u0275\u0275pipe(152, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "div", 44)(154, "label");
      \u0275\u0275text(155, "CGST (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "div", 45)(157, "input", 46);
      \u0275\u0275listener("input", function EditInvoice_Template_input_input_157_listener() {
        return ctx.calculateTotals();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(158, "div", 44)(159, "label");
      \u0275\u0275text(160, "CGST Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(161, "input", 47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "div", 44)(163, "label");
      \u0275\u0275text(164, "SGST (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(165, "div", 45)(166, "input", 48);
      \u0275\u0275listener("input", function EditInvoice_Template_input_input_166_listener() {
        return ctx.calculateTotals();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(167, "div", 44)(168, "label");
      \u0275\u0275text(169, "SGST Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(170, "input", 49);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(171, "div", 44)(172, "label");
      \u0275\u0275text(173, "Round Off");
      \u0275\u0275elementEnd();
      \u0275\u0275element(174, "input", 42);
      \u0275\u0275pipe(175, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "div", 44)(177, "label");
      \u0275\u0275text(178, "Grand Total");
      \u0275\u0275elementEnd();
      \u0275\u0275element(179, "input", 42);
      \u0275\u0275pipe(180, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(181, "div", 50)(182, "button", 51);
      \u0275\u0275listener("click", function EditInvoice_Template_button_click_182_listener() {
        return ctx.saveInvoice();
      });
      \u0275\u0275text(183, "Generate Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "button", 52);
      \u0275\u0275listener("click", function EditInvoice_Template_button_click_184_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(185, "Cancel");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.invoiceForm);
      \u0275\u0275advance(42);
      \u0275\u0275property("ngForOf", ctx.parties);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.selectedParty == null ? null : ctx.selectedParty.gstin);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.selectedParty == null ? null : ctx.selectedParty.phone);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", (ctx.selectedParty == null ? null : ctx.selectedParty.state) + " - " + (ctx.selectedParty == null ? null : ctx.selectedParty.stateCode));
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.selectedParty == null ? null : ctx.selectedParty.address);
      \u0275\u0275advance(6);
      \u0275\u0275property("formGroup", ctx.productForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.products);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.rateTypes);
      \u0275\u0275advance(55);
      \u0275\u0275property("ngForOf", ctx.dispatchList);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", \u0275\u0275pipeBind2(138, 15, ctx.basicAmount, "1.2-2"));
      \u0275\u0275advance(9);
      \u0275\u0275property("value", \u0275\u0275pipeBind2(147, 18, ctx.discountCash, "1.2-2"));
      \u0275\u0275advance(5);
      \u0275\u0275property("value", \u0275\u0275pipeBind2(152, 21, ctx.totalTaxable, "1.2-2"));
      \u0275\u0275advance(23);
      \u0275\u0275property("value", \u0275\u0275pipeBind2(175, 24, ctx.roundOff, "1.2-2"));
      \u0275\u0275advance(5);
      \u0275\u0275property("value", \u0275\u0275pipeBind2(180, 27, ctx.grandTotal, "1.2-2"));
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, CommonModule, NgForOf, ReactiveFormsModule, FormGroupDirective, FormControlName, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditInvoice, [{
    type: Component,
    args: [{ standalone: true, selector: "app-generate-invoice", imports: [FormsModule, CommonModule, ReactiveFormsModule], template: `<div class="wrapper">\r
  <section class="content">\r
    <div class="container-fluid">\r
      <form [formGroup]="invoiceForm">\r
\r
        <!-- =================== INVOICE DETAILS =================== -->\r
        <div class="row">\r
          <div class="col-md-6">\r
            <div class="card card-cyan">\r
              <div class="card-header">\r
                <h3 class="card-title">Invoice Details</h3>\r
              </div>\r
              <div class="card-body">\r
                <div class="row g-2">\r
                  <div class="col-md-6">\r
                    <label>Invoice Date</label>\r
                    <input type="date" formControlName="invoiceDate" class="form-control"/>\r
                  </div>\r
                  <div class="col-md-6">\r
                    <label>Challan Date</label>\r
                    <input type="date" formControlName="challanDate" class="form-control"/>\r
                  </div>\r
                  <div class="col-md-6">\r
                    <label>Place of Supply</label>\r
                    <input type="text" formControlName="placeOfSupply" class="form-control"/>\r
                  </div>\r
                  <div class="col-md-6">\r
                    <label>Vehicle No</label>\r
                    <input type="text" formControlName="vehicleNo" class="form-control"/>\r
                  </div>\r
                  <div class="col-md-6">\r
                    <label>Transportation</label>\r
                    <input type="text" formControlName="transportation" class="form-control"/>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- =================== PARTY DETAILS =================== -->\r
          <div class="col-md-6">\r
            <div class="card card-primary">\r
              <div class="card-header">\r
                <h3 class="card-title">Party Details</h3>\r
              </div>\r
              <div class="card-body">\r
                <div class="row g-2">\r
                  <div class="col-md-6">\r
                    <label>M/s.</label>\r
                    <select formControlName="partyId" class="form-control">\r
                      <option value="">--Select Party--</option>\r
                      <option *ngFor="let p of parties" [value]="p.id">{{p.name}}</option>\r
                    </select>\r
                    <label>GST No</label>\r
                    <input type="text" [value]="selectedParty?.gstin" class="form-control" disabled/>\r
                  </div>\r
                  <div class="col-md-6">\r
                    <label>Mobile No</label>\r
                    <input type="text" [value]="selectedParty?.phone" class="form-control" disabled/>\r
                    <label>State</label>\r
                    <input type="text" [value]="selectedParty?.state + ' - ' + selectedParty?.stateCode" class="form-control" disabled/>\r
                  </div>\r
                  <div class="col-md-12">\r
                    <label>Address</label>\r
                    <textarea [value]="selectedParty?.address" class="form-control" rows="2" disabled></textarea>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- =================== PRODUCT FORM =================== -->\r
        <div class="card card-info mt-3">\r
          <div class="card-header"><h3 class="card-title">Add Product</h3></div>\r
          <div class="card-body">\r
            <div class="row g-2" [formGroup]="productForm">\r
\r
              <div class="col-md-3">\r
                <label>Select Product</label>\r
                <select formControlName="productId" class="form-control" (change)="onProductChange()">\r
                  <option value="">--Select Product--</option>\r
                  <option *ngFor="let p of products" [value]="p.id">{{p.productName}}</option>\r
                </select>\r
              </div>\r
\r
              <div class="col-md-2">\r
                <label>Rate Type</label>\r
                <select formControlName="rateType" class="form-control">\r
                  <option *ngFor="let r of rateTypes; let i=index" [value]="i">{{r}}</option>\r
                </select>\r
              </div>\r
\r
              <div class="col-md-1">\r
                <label>Pack</label>\r
                <input type="number" formControlName="pack" class="form-control" (input)="calculateItemAmount()"/>\r
              </div>\r
\r
              <div class="col-md-1">\r
                <label>Kgs/Pack</label>\r
                <input type="number" formControlName="kgs" class="form-control" (input)="calculateItemAmount()"/>\r
              </div>\r
\r
              <div class="col-md-1">\r
                <label>Rate</label>\r
                <input type="number" formControlName="rate" class="form-control" (input)="calculateItemAmount()"/>\r
              </div>\r
\r
              <div class="col-md-1">\r
                <label>Quantity</label>\r
                <input type="number" formControlName="quantity" class="form-control"/>\r
              </div>\r
\r
              <div class="col-md-2">\r
                <label>Amount</label>\r
                <input type="number" formControlName="amount" class="form-control" />\r
              </div>\r
\r
              <div class="col-md-1 d-flex align-items-end">\r
                <button type="button" class="btn btn-success w-100" (click)="addItem()">Add</button>\r
              </div>\r
\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- =================== DISPATCH TABLE =================== -->\r
        <div class="card mt-3">\r
          <div class="card-header"><h3 class="card-title">Dispatch List</h3></div>\r
          <div class="card-body table-responsive">\r
            <table class="table table-bordered table-hover">\r
              <thead>\r
                <tr>\r
                  <th>#</th><th>Name</th><th>HSN</th><th>BagType</th>\r
                  <th>Pack</th><th>Kgs</th><th>Qty</th><th>Rate</th>\r
                  <th>Per</th><th>Amount</th><th>Action</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let item of dispatchList; let i=index">\r
                  <td>{{i+1}}</td>\r
                  <td>{{item.description}}</td>\r
                  <td>{{item.hsnCode}}</td>\r
                  <td>{{item.bagType}}</td>\r
                  <td>{{item.pack}}</td>\r
                  <td>{{item.kgs}}</td>\r
                  <td>{{item.quantity}}</td>\r
                  <td>{{item.rate}}</td>\r
                  <td>{{item.per}}</td>\r
                  <td>{{item.amount | number:'1.2-2'}}</td>\r
                  <td><button class="btn btn-danger btn-xs" (click)="removeItem(i)">Remove</button></td>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
        </div>\r
\r
        <!-- =================== TOTALS =================== -->\r
<div class="row mt-3 g-2">\r
  <!-- Basic Amount -->\r
  <div class="col-md-3">\r
    <label>Basic Amount</label>\r
    <input type="number" class="form-control" [value]="basicAmount | number:'1.2-2'" disabled/>\r
  </div>\r
\r
  <!-- Discount (%) -->\r
  <div class="col-md-3">\r
    <label>Discount (%)</label>\r
    <input type="number" formControlName="discountPer" class="form-control"/>\r
  </div>\r
\r
  <!-- Discount Cash -->\r
  <div class="col-md-3">\r
    <label>Discount Cash</label>\r
    <input type="number" class="form-control" [value]="discountCash | number:'1.2-2'" disabled/>\r
  </div>\r
\r
  <!-- Total Taxable -->\r
  <div class="col-md-3">\r
    <label>Total Taxable Value</label>\r
    <input type="number" class="form-control" [value]="totalTaxable | number:'1.2-2'" disabled/>\r
  </div>\r
\r
  <!-- CGST -->\r
  <div class="col-md-3 mt-2">\r
    <label>CGST (%)</label>\r
    <div class="input-group">\r
      \r
      <input type="number" formControlName="cgstPer" class="form-control" (input)="calculateTotals()"/>\r
     \r
    </div>\r
  </div>\r
\r
  <div class="col-md-3 mt-2">\r
    <label>CGST Amount</label>\r
  <input type="number" formControlName="cgstAmt" class="form-control" readonly/>\r
  </div>\r
\r
  <!-- SGST -->\r
  <div class="col-md-3 mt-2">\r
    <label>SGST (%)</label>\r
    <div class="input-group">\r
      \r
      <input type="number" formControlName="sgstPer" class="form-control" (input)="calculateTotals()"/>\r
   \r
    </div>\r
  </div>\r
\r
  <div class="col-md-3 mt-2">\r
    <label>SGST Amount</label>\r
    <input type="number" formControlName="sgstAmt" class="form-control" readonly/>\r
  </div>\r
\r
  <!-- Round Off -->\r
  <div class="col-md-3 mt-2">\r
    <label>Round Off</label>\r
    <input type="number" class="form-control" [value]="roundOff | number:'1.2-2'" disabled/>\r
  </div>\r
\r
  <!-- Grand Total -->\r
  <div class="col-md-3 mt-2">\r
    <label>Grand Total</label>\r
    <input type="number" class="form-control" [value]="grandTotal | number:'1.2-2'" disabled/>\r
  </div>\r
</div>\r
\r
        <!-- =================== BUTTONS =================== -->\r
        <div class="mt-3 d-flex justify-content-between">\r
          <button type="button" class="btn btn-success" (click)="saveInvoice()">Generate Invoice</button>\r
          <button type="button" class="btn btn-danger" (click)="cancel()">Cancel</button>\r
        </div>\r
\r
      </form>\r
    </div>\r
  </section>\r
</div>\r
` }]
  }], () => [{ type: FormBuilder }, { type: PartyService }, { type: ProductService }, { type: InvoiceService }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditInvoice, { className: "EditInvoice", filePath: "src/app/components/edit-invoice/edit-invoice.ts", lineNumber: 28 });
})();
export {
  EditInvoice
};
//# sourceMappingURL=chunk-5TMAY6RJ.js.map
