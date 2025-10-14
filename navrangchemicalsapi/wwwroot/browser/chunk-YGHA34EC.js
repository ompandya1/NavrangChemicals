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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QAWYXZDT.js";
import "./chunk-46DXP6YY.js";

// src/app/components/generate-invoice/generate-invoice.ts
function GenerateInvoice_option_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275property("value", p_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r1.productName, " ");
  }
}
function GenerateInvoice_option_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    \u0275\u0275property("value", i_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r2, " ");
  }
}
function GenerateInvoice_tr_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
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
    \u0275\u0275elementStart(22, "td")(23, "button", 53);
    \u0275\u0275listener("click", function GenerateInvoice_tr_132_Template_button_click_23_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.removeItem(i_r5));
    });
    \u0275\u0275text(24, " Remove ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.description || (item_r7.product == null ? null : item_r7.product.productName));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.hsnCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.bagType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.pack);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.kgs);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.rate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.per);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(21, 10, item_r7.amount, "1.2-2"));
  }
}
var GenerateInvoice = class _GenerateInvoice {
  fb;
  partyService;
  ProductService;
  InvoiceService;
  router;
  route;
  invoiceForm;
  productForm;
  company = [];
  parties = [];
  products = [];
  dispatchList = [];
  invoiceId;
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
  constructor(fb, partyService, ProductService2, InvoiceService2, router, route) {
    this.fb = fb;
    this.partyService = partyService;
    this.ProductService = ProductService2;
    this.InvoiceService = InvoiceService2;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    this.initForms();
    this.loadProducts();
    this.invoiceId = Number(this.route.snapshot.paramMap.get("id"));
    const invoiceId = Number(this.route.snapshot.paramMap.get("id"));
    if (invoiceId) {
      this.InvoiceService.getInvoiceById(invoiceId).subscribe({
        next: (invoice) => {
          this.invoiceForm.patchValue({
            invoiceDate: invoice.invoiceDate,
            challanDate: invoice.challanDate,
            placeOfSupply: invoice.placeOfSupply,
            vehicleNo: invoice.vehicleNo,
            transportation: invoice.transportation,
            partyId: invoice.partyId,
            discountPer: invoice.discountPer,
            igstPer: invoice.igstPer
          });
          if (invoice.party) {
            this.selectedParty = invoice.party;
            this.invoiceForm.patchValue({
              name: invoice.party.name,
              gstin: invoice.party.gstin,
              phone: invoice.party.phone,
              state: invoice.party.state,
              stateCode: invoice.party.stateCode,
              address: invoice.party.address
            });
          } else {
            this.partyService.getPartyById(invoice.partyId).subscribe((party) => {
              this.selectedParty = party;
              this.invoiceForm.patchValue({
                name: party.name,
                gstin: party.gstin,
                phone: party.phone,
                state: party.state,
                stateCode: party.stateCode,
                address: party.address
              });
            });
          }
          this.dispatchList = invoice.items || [];
          this.calculateTotals();
          if (invoice.items && invoice.items.length > 0) {
            const firstItem = invoice.items[0];
            this.productForm.patchValue({
              productId: firstItem.productId,
              rateType: firstItem.bagType,
              pack: firstItem.pack,
              kgs: firstItem.kgs,
              rate: firstItem.rate,
              quantity: firstItem.quantity,
              amount: firstItem.amount
            });
          }
          this.basicAmount = invoice.basicAmount || 0;
          this.discountCash = invoice.discountCash || 0;
          this.igstAmt = invoice.igstAmt || 0;
          this.roundOff = invoice.round || 0;
          this.grandTotal = invoice.grandTotal || 0;
        },
        error: (err) => console.error("Failed to fetch invoice", err)
      });
      this.invoiceForm.get("igstPer")?.valueChanges.subscribe(() => this.calculateTotals());
      this.invoiceForm.get("discountPer")?.valueChanges.subscribe(() => this.calculateTotals());
      this.invoiceForm.get("partyId")?.valueChanges.subscribe((id) => {
        this.selectedParty = this.parties.find((p) => p.id === +id);
      });
    }
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
      name: [""],
      gstin: [""],
      phone: [""],
      state: [""],
      stateCode: [""],
      address: [""]
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
  loadParty(id) {
    if (id) {
      this.partyService.getPartyById(id).subscribe((p) => this.parties = [p]);
    }
  }
  loadProducts() {
    this.ProductService.getAllProducts().subscribe((p) => {
      this.products = p;
      console.log("Products from backend:", p);
    });
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
    this.productForm.reset({ pack: 1, kgs: 1, rate: 0, quantity: 1, per: 1, amount: 0, rateType: "0" });
  }
  removeItem(index) {
    this.dispatchList.splice(index, 1);
    this.calculateTotals();
  }
  calculateTotals() {
    const basic = this.dispatchList.reduce((sum, i) => sum + i.amount, 0);
    this.basicAmount = +basic.toFixed(2);
    const discountPerRaw = this.invoiceForm.get("discountPer")?.value;
    const discountPer = discountPerRaw ? Number(discountPerRaw) : 0;
    this.discountCash = +(this.basicAmount * discountPer / 100).toFixed(2);
    this.totalTaxable = +(this.basicAmount - this.discountCash).toFixed(2);
    const igstPerRaw = this.invoiceForm.get("igstPer")?.value;
    const igstPer = igstPerRaw ? Number(igstPerRaw) : 0;
    this.igstAmt = +(this.totalTaxable * igstPer / 100).toFixed(2);
    const gross = this.totalTaxable + this.igstAmt;
    const decimals = +(gross % 1).toFixed(2);
    if (decimals >= 0.5) {
      this.roundOff = +(1 - decimals).toFixed(2);
      this.grandTotal = +(gross + this.roundOff).toFixed(2);
    } else {
      this.roundOff = -decimals;
      this.grandTotal = Math.floor(gross);
    }
    console.log("Basic:", this.basicAmount, "Discount:", this.discountCash, "Taxable:", this.totalTaxable, "IGST %:", igstPer, "IGST Amt:", this.igstAmt);
  }
  generateInvoice() {
    if (this.invoiceForm.invalid) {
      this.showValidationErrors();
      return;
    }
    try {
      const invoiceData = this.prepareInvoiceData();
      const pdf = this.createSimpleInvoice(invoiceData);
      this.saveAndPreviewPDF(pdf, invoiceData);
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
    const address = party?.address || "Customer Address";
    const addressLines = this.splitText(address, 45);
    let addressY = y + 24;
    doc.text("Address :", x + 3, addressY);
    addressLines.forEach((line, index) => {
      doc.text(line, x + 20, addressY + index * 5);
      addressY += index === 0 ? 5 : 0;
    });
    doc.text(`State: ${party?.state || "STATE"}`, x + 3, y + 40);
    doc.text(`State Code: ${party?.stateCode || "00"}`, x + 60, y + 40);
    doc.text(`GSTIN : ${party?.gstin || "N/A"}`, x + 3, y + 50);
    const rightX = x + halfWidth + 3;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Details of Invoice", rightX, y + 8);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text("Invoice No.: 507", rightX, y + 16);
    doc.text(`Date: ${this.formatDate(invoiceData.invoiceDate)}`, rightX + 60, y + 16);
    doc.text("Challan No.: 507", rightX, y + 24);
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
    colWidths.forEach((colWidth, index) => {
      doc.line(currentX, y, currentX, y + 15);
      let headerText = "";
      switch (index) {
        case 0:
          headerText = "Item\nNo.";
          break;
        case 1:
          headerText = "Description Of Goods";
          break;
        case 2:
          headerText = "HSN\nCode";
          break;
        case 3:
          headerText = "Qty.";
          break;
        case 4:
          headerText = "Rate";
          break;
        case 5:
          headerText = "Per";
          break;
        case 6:
          headerText = "Amount";
          break;
      }
      if (headerText.includes("\n")) {
        const lines = headerText.split("\n");
        doc.text(lines[0], currentX + colWidth / 2, y + 6, { align: "center" });
        doc.text(lines[1], currentX + colWidth / 2, y + 12, { align: "center" });
      } else {
        doc.text(headerText, currentX + colWidth / 2, y + 9, { align: "center" });
      }
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
    invoiceData.items.forEach((item, index) => {
      let currentX = x;
      colWidths.forEach((colWidth) => {
        doc.line(currentX, currentY, currentX, currentY + rowHeight);
        currentX += colWidth;
      });
      doc.line(currentX, currentY, currentX, currentY + rowHeight);
      currentX = x;
      doc.text((index + 1).toString(), currentX + colWidths[0] / 2, currentY + 8, { align: "center" });
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
    const usedRows = invoiceData.items.length;
    const emptyRows = totalItemRows - usedRows;
    for (let i = 0; i < emptyRows; i++) {
      let currentX = x;
      colWidths.forEach((colWidth) => {
        doc.line(currentX, currentY, currentX, currentY + rowHeight);
        currentX += colWidth;
      });
      doc.line(currentX, currentY, currentX, currentY + rowHeight);
      currentY += rowHeight;
    }
    doc.line(x, currentY, x + width, currentY);
    return currentY;
  }
  drawFooterSection(doc, x, y, width, invoiceData) {
    const leftWidth = width * 0.6;
    const rightWidth = width * 0.4;
    doc.line(x + leftWidth, y, x + leftWidth, y + 80);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    let leftY = y + 10;
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
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    const totalsData = [
      { label: "Basic Amount", value: (invoiceData.basicAmount || 0).toFixed(2) },
      { label: `${invoiceData.discountPer || 0}% Discount`, value: (invoiceData.discountCash || 0).toFixed(2) },
      { label: "Total Taxable Value", value: (invoiceData.discountedAmount || 0).toFixed(2) },
      { label: `IGST ${invoiceData.igstPer || 0} %`, value: (invoiceData.igstAmt || 0).toFixed(2) },
      { label: "Round of Sale", value: (invoiceData.round || 0).toFixed(2) }
    ];
    totalsData.forEach((item, index) => {
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
  splitText(text, maxLength) {
    if (text.length <= maxLength)
      return [text];
    const words = text.split(" ");
    const lines = [];
    let currentLine = "";
    words.forEach((word) => {
      if ((currentLine + word).length <= maxLength) {
        currentLine += (currentLine ? " " : "") + word;
      } else {
        if (currentLine)
          lines.push(currentLine);
        currentLine = word;
      }
    });
    if (currentLine)
      lines.push(currentLine);
    return lines;
  }
  saveAndPreviewPDF(doc, invoiceData) {
    try {
      const filename = `Invoice_${this.formatDateForFilename(invoiceData.invoiceDate)}.pdf`;
      const pdfBlob = doc.output("bloburl");
      window.open(pdfBlob, "_blank");
      this.saveInvoiceData(invoiceData);
    } catch (error) {
      console.error("PDF generation error:", error);
      throw new Error("Failed to generate PDF");
    }
  }
  saveInvoiceData(invoiceData) {
    if (!this.invoiceId) {
      console.error("Invoice ID is missing");
      return;
    }
    const invoice = this.invoiceForm.value;
    invoice.items = this.dispatchList;
    this.InvoiceService.updateInvoice(this.invoiceId, invoiceData).subscribe({
      next: (updatedInvoice) => {
        console.log("Invoice updated successfully:", updatedInvoice);
      },
      error: (err) => {
        console.error("Error updating invoice:", err);
      }
    });
  }
  formatDate(date) {
    if (!date)
      return "";
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });
  }
  formatDateForFilename(date) {
    if (!date)
      return "";
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toISOString().split("T")[0];
  }
  showValidationErrors() {
    alert("Please fill all required fields before generating the invoice.");
  }
  showSuccessMessage(message) {
    alert(`\u2705 ${message}`);
  }
  showErrorMessage(message) {
    alert(`\u274C ${message}`);
  }
  resetForm() {
    this.cancel();
  }
  cancel() {
    console.log("Invoice cancelled");
    this.invoiceForm.reset();
    this.productForm.reset();
  }
  static \u0275fac = function GenerateInvoice_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GenerateInvoice)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(PartyService), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(InvoiceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GenerateInvoice, selectors: [["app-generate-invoice"]], decls: 177, vars: 29, consts: [[1, "wrapper"], [1, "content"], [1, "container-fluid"], [3, "formGroup"], [1, "row"], [1, "col-md-6"], [1, "card", "card-cyan"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "row", "g-2"], ["type", "date", "formControlName", "invoiceDate", 1, "form-control"], ["type", "date", "formControlName", "challanDate", 1, "form-control"], ["type", "text", "formControlName", "placeOfSupply", 1, "form-control"], ["type", "text", "formControlName", "vehicleNo", 1, "form-control"], ["type", "text", "formControlName", "transportation", 1, "form-control"], [1, "card", "card-primary"], ["type", "text", "formControlName", "name", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "gstin", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "phone", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "state", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "stateCode", "readonly", "", 1, "form-control"], [1, "col-md-12"], ["formControlName", "address", "rows", "2", "readonly", "", 1, "form-control"], [1, "card", "card-info", "mt-3"], [1, "row", "g-2", 3, "formGroup"], [1, "col-md-3"], ["formControlName", "productId", 1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["formControlName", "rateType", 1, "form-control"], [1, "col-md-1"], ["type", "number", "formControlName", "pack", 1, "form-control", 3, "input"], ["type", "number", "formControlName", "kgs", 1, "form-control", 3, "input"], ["type", "number", "formControlName", "rate", 1, "form-control", 3, "input"], ["type", "number", "formControlName", "quantity", 1, "form-control"], ["type", "number", "formControlName", "amount", 1, "form-control"], [1, "col-md-1", "d-flex", "align-items-end"], ["type", "button", 1, "btn", "btn-success", "w-100", 3, "click"], [1, "card", "mt-3"], [1, "card-body", "table-responsive"], [1, "table", "table-bordered", "table-hover"], [4, "ngFor", "ngForOf"], [1, "row", "mt-3", "g-2"], ["type", "number", "readonly", "", 1, "form-control", 3, "value"], ["type", "number", "formControlName", "discountPer", 1, "form-control"], [1, "col-md-3", "mt-2"], ["type", "number", "formControlName", "igstPer", 1, "form-control"], [1, "mt-3", "d-flex", "justify-content-between"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [3, "value"], [1, "btn", "btn-danger", "btn-xs", 3, "click"]], template: function GenerateInvoice_Template(rf, ctx) {
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
      \u0275\u0275element(42, "input", 17);
      \u0275\u0275elementStart(43, "label");
      \u0275\u0275text(44, "GST No");
      \u0275\u0275elementEnd();
      \u0275\u0275element(45, "input", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div", 5)(47, "label");
      \u0275\u0275text(48, "Mobile No");
      \u0275\u0275elementEnd();
      \u0275\u0275element(49, "input", 19);
      \u0275\u0275elementStart(50, "label");
      \u0275\u0275text(51, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275element(52, "input", 20);
      \u0275\u0275elementStart(53, "label");
      \u0275\u0275text(54, "State Code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(55, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 22)(57, "label");
      \u0275\u0275text(58, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(59, "textarea", 23);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(60, "div", 24)(61, "div", 7)(62, "h3", 8);
      \u0275\u0275text(63, "Add Product");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 9)(65, "div", 25)(66, "div", 26)(67, "label");
      \u0275\u0275text(68, "Select Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "select", 27);
      \u0275\u0275listener("change", function GenerateInvoice_Template_select_change_69_listener() {
        return ctx.onProductChange();
      });
      \u0275\u0275elementStart(70, "option", 28);
      \u0275\u0275text(71, "--Select Product--");
      \u0275\u0275elementEnd();
      \u0275\u0275template(72, GenerateInvoice_option_72_Template, 2, 2, "option", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 30)(74, "label");
      \u0275\u0275text(75, "Rate Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "select", 31);
      \u0275\u0275template(77, GenerateInvoice_option_77_Template, 2, 2, "option", 29);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 32)(79, "label");
      \u0275\u0275text(80, "Pack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "input", 33);
      \u0275\u0275listener("input", function GenerateInvoice_Template_input_input_81_listener() {
        return ctx.calculateItemAmount();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 32)(83, "label");
      \u0275\u0275text(84, "Kgs/Pack");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "input", 34);
      \u0275\u0275listener("input", function GenerateInvoice_Template_input_input_85_listener() {
        return ctx.calculateItemAmount();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "div", 32)(87, "label");
      \u0275\u0275text(88, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "input", 35);
      \u0275\u0275listener("input", function GenerateInvoice_Template_input_input_89_listener() {
        return ctx.calculateItemAmount();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "div", 32)(91, "label");
      \u0275\u0275text(92, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275element(93, "input", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "div", 30)(95, "label");
      \u0275\u0275text(96, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(97, "input", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div", 38)(99, "button", 39);
      \u0275\u0275listener("click", function GenerateInvoice_Template_button_click_99_listener() {
        return ctx.addItem();
      });
      \u0275\u0275text(100, " Add ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(101, "div", 40)(102, "div", 7)(103, "h3", 8);
      \u0275\u0275text(104, "Dispatch List");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(105, "div", 41)(106, "table", 42)(107, "thead")(108, "tr")(109, "th");
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
      \u0275\u0275template(132, GenerateInvoice_tr_132_Template, 25, 13, "tr", 43);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(133, "div", 44)(134, "div", 26)(135, "label");
      \u0275\u0275text(136, "Basic Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(137, "input", 45);
      \u0275\u0275pipe(138, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "div", 26)(140, "label");
      \u0275\u0275text(141, "Discount (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(142, "input", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "div", 26)(144, "label");
      \u0275\u0275text(145, "Discount Cash");
      \u0275\u0275elementEnd();
      \u0275\u0275element(146, "input", 45);
      \u0275\u0275pipe(147, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "div", 26)(149, "label");
      \u0275\u0275text(150, "Total Taxable Value");
      \u0275\u0275elementEnd();
      \u0275\u0275element(151, "input", 45);
      \u0275\u0275pipe(152, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "div", 47)(154, "label");
      \u0275\u0275text(155, "IGST (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(156, "input", 48);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "div", 47)(158, "label");
      \u0275\u0275text(159, "IGST Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(160, "input", 45);
      \u0275\u0275pipe(161, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "div", 47)(163, "label");
      \u0275\u0275text(164, "Round Off");
      \u0275\u0275elementEnd();
      \u0275\u0275element(165, "input", 45);
      \u0275\u0275pipe(166, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "div", 47)(168, "label");
      \u0275\u0275text(169, "Grand Total");
      \u0275\u0275elementEnd();
      \u0275\u0275element(170, "input", 45);
      \u0275\u0275pipe(171, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(172, "div", 49)(173, "button", 50);
      \u0275\u0275listener("click", function GenerateInvoice_Template_button_click_173_listener() {
        return ctx.generateInvoice();
      });
      \u0275\u0275text(174, " Generate Invoice ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(175, "button", 51);
      \u0275\u0275listener("click", function GenerateInvoice_Template_button_click_175_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(176, " Cancel ");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.invoiceForm);
      \u0275\u0275advance(62);
      \u0275\u0275property("formGroup", ctx.productForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.products);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.rateTypes);
      \u0275\u0275advance(55);
      \u0275\u0275property("ngForOf", ctx.dispatchList);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", \u0275\u0275pipeBind2(138, 11, ctx.basicAmount, "1.2-2"));
      \u0275\u0275advance(9);
      \u0275\u0275property("value", \u0275\u0275pipeBind2(147, 14, ctx.discountCash, "1.2-2"));
      \u0275\u0275advance(5);
      \u0275\u0275property("value", \u0275\u0275pipeBind2(152, 17, ctx.totalTaxable, "1.2-2"));
      \u0275\u0275advance(9);
      \u0275\u0275property("value", \u0275\u0275pipeBind2(161, 20, ctx.igstAmt, "1.2-2"));
      \u0275\u0275advance(5);
      \u0275\u0275property("value", \u0275\u0275pipeBind2(166, 23, ctx.roundOff, "1.2-2"));
      \u0275\u0275advance(5);
      \u0275\u0275property("value", \u0275\u0275pipeBind2(171, 26, ctx.grandTotal, "1.2-2"));
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, CommonModule, NgForOf, ReactiveFormsModule, FormGroupDirective, FormControlName, DecimalPipe], styles: ["\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n  margin-bottom: 1rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n@media (min-width: 768px) {\n  .col-md-6[_ngcontent-%COMP%] {\n    max-width: 50%;\n    flex: 0 0 50%;\n  }\n  .col-md-4[_ngcontent-%COMP%] {\n    max-width: 33.3333%;\n    flex: 0 0 33.3333%;\n  }\n  .col-md-3[_ngcontent-%COMP%] {\n    max-width: 25%;\n    flex: 0 0 25%;\n  }\n  .col-md-2[_ngcontent-%COMP%] {\n    max-width: 16.6667%;\n    flex: 0 0 16.6667%;\n  }\n  .col-md-1[_ngcontent-%COMP%] {\n    max-width: 8.3333%;\n    flex: 0 0 8.3333%;\n  }\n}\n.d-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.align-items-end[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle !important;\n  text-align: center;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  border-radius: 0.25rem;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  border: none;\n  color: white;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n  border: none;\n  color: white;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  border: none;\n  color: white;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-control[readonly][_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n.table-bordered[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n}\n.table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n}\nh4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.mt-3[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=generate-invoice.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GenerateInvoice, [{
    type: Component,
    args: [{ standalone: true, selector: "app-generate-invoice", imports: [FormsModule, CommonModule, ReactiveFormsModule], template: `<div class="wrapper">
  <section class="content">
    <div class="container-fluid">
      <form [formGroup]="invoiceForm">
        <!-- =================== INVOICE DETAILS =================== -->
        <div class="row">
          <div class="col-md-6">
            <div class="card card-cyan">
              <div class="card-header">
                <h3 class="card-title">Invoice Details</h3>
              </div>
              <div class="card-body">
                <div class="row g-2">
                  <div class="col-md-6">
                    <label>Invoice Date</label>
                    <input
                      type="date"
                      formControlName="invoiceDate"
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-6">
                    <label>Challan Date</label>
                    <input
                      type="date"
                      formControlName="challanDate"
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-6">
                    <label>Place of Supply</label>
                    <input
                      type="text"
                      formControlName="placeOfSupply"
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-6">
                    <label>Vehicle No</label>
                    <input
                      type="text"
                      formControlName="vehicleNo"
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-6">
                    <label>Transportation</label>
                    <input
                      type="text"
                      formControlName="transportation"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- =================== PARTY DETAILS =================== -->
<div class="col-md-6">
  <div class="card card-primary">
    <div class="card-header">
      <h3 class="card-title">Party Details</h3>
    </div>
    <div class="card-body">
      <div class="row g-2">
        <div class="col-md-6">
          <label>M/s.</label>
          <input type="text" formControlName="name" class="form-control" readonly />

          <label>GST No</label>
          <input type="text" formControlName="gstin" class="form-control" readonly />
        </div>
        <div class="col-md-6">
          <label>Mobile No</label>
          <input type="text" formControlName="phone" class="form-control" readonly />

          <label>State</label>
          <input type="text" formControlName="state" class="form-control" readonly />

          <label>State Code</label>
          <input type="text" formControlName="stateCode" class="form-control" readonly />
        </div>
        <div class="col-md-12">
          <label>Address</label>
          <textarea formControlName="address" class="form-control" rows="2" readonly></textarea>
        </div>
      </div>
    </div>
  </div>
</div>

        <!-- =================== PRODUCT FORM =================== -->
        <div class="card card-info mt-3">
          <div class="card-header"><h3 class="card-title">Add Product</h3></div>
          <div class="card-body">
            <div class="row g-2" [formGroup]="productForm">
              <div class="col-md-3">
                <label>Select Product</label>
                <select
                  formControlName="productId"
                  class="form-control"
                  (change)="onProductChange()"
                >
                  <option value="">--Select Product--</option>
                  <option *ngFor="let p of products" [value]="p.id">
                    {{ p.productName }}
                  </option>
                </select>
              </div>

              <div class="col-md-2">
                <label>Rate Type</label>
                <select formControlName="rateType" class="form-control">
                  <option
                    *ngFor="let r of rateTypes; let i = index"
                    [value]="i"
                  >
                    {{ r }}
                  </option>
                </select>
              </div>

              <div class="col-md-1">
                <label>Pack</label>
                <input
                  type="number"
                  formControlName="pack"
                  class="form-control"
                  (input)="calculateItemAmount()"
                />
              </div>

              <div class="col-md-1">
                <label>Kgs/Pack</label>
                <input
                  type="number"
                  formControlName="kgs"
                  class="form-control"
                  (input)="calculateItemAmount()"
                />
              </div>

              <div class="col-md-1">
                <label>Rate</label>
                <input
                  type="number"
                  formControlName="rate"
                  class="form-control"
                  (input)="calculateItemAmount()"
                />
              </div>

              <div class="col-md-1">
                <label>Quantity</label>
                <input
                  type="number"
                  formControlName="quantity"
                  class="form-control"
                />
              </div>

              <div class="col-md-2">
                <label>Amount</label>
                <input
                  type="number"
                  formControlName="amount"
                  class="form-control"
                />
              </div>

              <div class="col-md-1 d-flex align-items-end">
                <button
                  type="button"
                  class="btn btn-success w-100"
                  (click)="addItem()"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- =================== DISPATCH TABLE =================== -->
        <div class="card mt-3">
          <div class="card-header">
            <h3 class="card-title">Dispatch List</h3>
          </div>
          <div class="card-body table-responsive">
            <table class="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>HSN</th>
                  <th>BagType</th>
                  <th>Pack</th>
                  <th>Kgs</th>
                  <th>Qty</th>
                  <th>Rate</th>
                  <th>Per</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
<tbody>
  <tr *ngFor="let item of dispatchList; let i = index">
    <td>{{ i + 1 }}</td>
    <td>{{ item.description || item.product?.productName }}</td>
    <td>{{ item.hsnCode }}</td>
    <td>{{ item.bagType }}</td>
    <td>{{ item.pack }}</td>
    <td>{{ item.kgs }}</td>
    <td>{{ item.quantity }}</td>
    <td>{{ item.rate }}</td>
    <td>{{ item.per }}</td>
    <td>{{ item.amount | number : "1.2-2" }}</td>
    <td>
      <button class="btn btn-danger btn-xs" (click)="removeItem(i)">
        Remove
      </button>
    </td>
  </tr>
</tbody>
           
            </table>
          </div>
        </div>

        <!-- =================== TOTALS =================== -->
        <div class="row mt-3 g-2">
          <div class="col-md-3">
            <label>Basic Amount</label>
            <input
              type="number"
              class="form-control"
              [value]="basicAmount | number : '1.2-2'"
              readonly
            />
          </div>

          <div class="col-md-3">
            <label>Discount (%)</label>
            <input
              type="number"
              formControlName="discountPer"
              class="form-control"
            />
          </div>

          <div class="col-md-3">
            <label>Discount Cash</label>
            <input
              type="number"
              class="form-control"
              [value]="discountCash | number : '1.2-2'"
              readonly
            />
          </div>

          <div class="col-md-3">
            <label>Total Taxable Value</label>
            <input
              type="number"
              class="form-control"
              [value]="totalTaxable | number : '1.2-2'"
              readonly
            />
          </div>

          <!-- <div class="col-md-3 mt-2">
            <label>CGST (9%)</label>
            <input type="number" class="form-control" [value]="cgstAmt | number:'1.2-2'" readonly/>
          </div>

          <div class="col-md-3 mt-2">
            <label>SGST (9%)</label>
            <input type="number" class="form-control" [value]="sgstAmt | number:'1.2-2'" readonly/>
          </div> -->
          <div class="col-md-3 mt-2">
            <label>IGST (%)</label>
            <input
              type="number"
              formControlName="igstPer"
              class="form-control"
            />
          </div>

          <div class="col-md-3 mt-2">
            <label>IGST Amount</label>
            <input
              type="number"
              class="form-control"
              [value]="igstAmt | number : '1.2-2'"
              readonly
            />
          </div>

          <div class="col-md-3 mt-2">
            <label>Round Off</label>
            <input
              type="number"
              class="form-control"
              [value]="roundOff | number : '1.2-2'"
              readonly
            />
          </div>

          <div class="col-md-3 mt-2">
            <label>Grand Total</label>
            <input
              type="number"
              class="form-control"
              [value]="grandTotal | number : '1.2-2'"
              readonly
            />
          </div>
        </div>

        <!-- =================== BUTTONS =================== -->
        <div class="mt-3 d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-success"
            (click)="generateInvoice()"
          >
            Generate Invoice
          </button>
          <button type="button" class="btn btn-danger" (click)="cancel()">
            Cancel
          </button>
        </div>
        </div>
      </form>
    </div>
    </section>
</div>
`, styles: ["/* src/app/components/generate-invoice/generate-invoice.css */\n.card {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n  margin-bottom: 1rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n}\n.card-body {\n  padding: 1rem;\n}\n@media (min-width: 768px) {\n  .col-md-6 {\n    max-width: 50%;\n    flex: 0 0 50%;\n  }\n  .col-md-4 {\n    max-width: 33.3333%;\n    flex: 0 0 33.3333%;\n  }\n  .col-md-3 {\n    max-width: 25%;\n    flex: 0 0 25%;\n  }\n  .col-md-2 {\n    max-width: 16.6667%;\n    flex: 0 0 16.6667%;\n  }\n  .col-md-1 {\n    max-width: 8.3333%;\n    flex: 0 0 8.3333%;\n  }\n}\n.d-flex {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.align-items-end {\n  align-items: flex-end;\n}\n.text-center {\n  text-align: center;\n}\n.table th,\n.table td {\n  vertical-align: middle !important;\n  text-align: center;\n}\n.btn {\n  padding: 0.5rem 1rem;\n  font-size: 0.875rem;\n  border-radius: 0.25rem;\n  cursor: pointer;\n}\n.btn-primary {\n  background-color: #007bff;\n  border: none;\n  color: white;\n}\n.btn-danger {\n  background-color: #dc3545;\n  border: none;\n  color: white;\n}\n.btn-secondary {\n  background-color: #6c757d;\n  border: none;\n  color: white;\n}\n.form-group {\n  margin-bottom: 1rem;\n}\n.form-control[readonly] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n.table-bordered {\n  border: 1px solid #dee2e6;\n}\n.table-bordered th,\n.table-bordered td {\n  border: 1px solid #dee2e6;\n}\nh4 {\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n.mb-3 {\n  margin-bottom: 1rem;\n}\n.mt-3 {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=generate-invoice.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: PartyService }, { type: ProductService }, { type: InvoiceService }, { type: Router }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GenerateInvoice, { className: "GenerateInvoice", filePath: "src/app/components/generate-invoice/generate-invoice.ts", lineNumber: 29 });
})();
export {
  GenerateInvoice
};
//# sourceMappingURL=chunk-YGHA34EC.js.map
