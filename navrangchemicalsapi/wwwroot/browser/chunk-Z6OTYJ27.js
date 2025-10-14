import {
  SupplierService
} from "./chunk-Y6NOYLSJ.js";
import {
  MakeService
} from "./chunk-25V6CHVB.js";
import {
  PoService
} from "./chunk-DLP4VYSU.js";
import {
  RawMaterialService
} from "./chunk-Q3CQYVQJ.js";
import {
  E,
  autoTable
} from "./chunk-L63IXFFL.js";
import "./chunk-7YWLATDR.js";
import {
  ProductService
} from "./chunk-XUIXJ5QK.js";
import "./chunk-P73HLFOO.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-IED7DI3C.js";
import {
  DefaultValueAccessor,
  FormArrayName,
  FormBuilder,
  FormControl,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormGroupName,
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
  HttpClientModule,
  NgClass,
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
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QAWYXZDT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-46DXP6YY.js";

// src/app/components/edit-po/edit-po.ts
var _c0 = (a0, a1) => ({ "fa-minus": a0, "fa-plus": a1 });
function EditPo_option_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const supplier_r1 = ctx.$implicit;
    \u0275\u0275property("value", supplier_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(supplier_r1.name);
  }
}
function EditPo_option_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rm_r2 = ctx.$implicit;
    \u0275\u0275property("value", rm_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rm_r2.name, " ");
  }
}
function EditPo_option_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const make_r3 = ctx.$implicit;
    \u0275\u0275property("value", make_r3.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", make_r3.name, " ");
  }
}
function EditPo_tr_156_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 56)(1, "td");
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
    \u0275\u0275elementStart(17, "td")(18, "button", 57);
    \u0275\u0275listener("click", function EditPo_tr_156_Template_button_click_18_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.removeProduct(i_r5));
    });
    \u0275\u0275element(19, "i", 58);
    \u0275\u0275text(20, " Remove ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const item_r7 = ctx.$implicit;
    const i_r5 = ctx.index;
    \u0275\u0275property("formGroupName", i_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r5 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.value.rawMaterialName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.value.make);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.value.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.value.unit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.value.rate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.value.per);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_11_0 = item_r7.get("amount")) == null ? null : tmp_11_0.value);
  }
}
var EditPo = class _EditPo {
  fb;
  route;
  router;
  supplierService;
  poService;
  productService;
  cd;
  makeService;
  RawMaterialService;
  poForm;
  poId;
  suppliers = [];
  products = [];
  rawMaterials = [];
  makes = [];
  poData;
  units = ["Carton", "Kgs.", "Ltrs.", "Dram"];
  invoiceCollapsed = false;
  supplierCollapsed = false;
  selectedProductControl;
  selectedUnitControl;
  rateControl;
  perControl;
  quantityControl;
  amountControl;
  selectedMakeControl;
  constructor(fb, route, router, supplierService, poService, productService, cd, makeService, RawMaterialService2) {
    this.fb = fb;
    this.route = route;
    this.router = router;
    this.supplierService = supplierService;
    this.poService = poService;
    this.productService = productService;
    this.cd = cd;
    this.makeService = makeService;
    this.RawMaterialService = RawMaterialService2;
  }
  ngOnInit() {
    this.poId = Number(this.route.snapshot.paramMap.get("id"));
    this.initForm();
    this.loadSuppliers(() => {
      this.loadPO();
      this.setupSupplierAutoFill();
    });
    this.loadProducts();
    this.loadMakes();
    this.selectedProductControl = new FormControl("");
    this.selectedMakeControl = new FormControl("");
    this.selectedUnitControl = new FormControl(this.units[0]);
    this.rateControl = new FormControl(0);
    this.perControl = new FormControl(1);
    this.quantityControl = new FormControl(1);
    this.amountControl = new FormControl(0);
  }
  initForm() {
    this.poForm = this.fb.group({
      supplierId: [0, Validators.required],
      supplierName: [""],
      orderDate: ["", Validators.required],
      placeOfSupply: [""],
      termsOfDelivery: [""],
      termsOfPayment: [""],
      address: [""],
      mobileNo: [""],
      gstNo: [""],
      state: [""],
      email: [""],
      items: this.fb.array([])
    });
  }
  setupSupplierAutoFill() {
    this.poForm.get("supplierId")?.valueChanges.subscribe((id) => {
      const selected = this.suppliers.find((s) => s.id === id);
      if (selected) {
        this.poForm.patchValue({
          SupplierName: selected.name || "",
          Address: selected.address || "",
          mobileNo: selected.phone || "",
          gstNo: selected.gstin || "",
          state: selected.state || "",
          email: selected.email || ""
        }, { emitEvent: false });
      }
    });
  }
  onSupplierChange(event) {
    const supplierId = +event.target.value;
    const supplier = this.suppliers.find((s) => s.id === supplierId);
    if (supplier) {
      this.poForm.patchValue({
        supplierName: supplier.name,
        address: supplier.address,
        mobileNo: supplier.phone,
        gstNo: supplier.gstin,
        state: supplier.state,
        email: supplier.email
      });
    }
  }
  loadSuppliers(callback) {
    this.supplierService.getSuppliers().subscribe((res) => {
      this.suppliers = res;
      if (callback)
        callback();
    });
  }
  loadPO() {
    this.poService.getPOById(this.poId).subscribe((res) => {
      this.poData = res;
      console.log(res);
      this.poForm.patchValue({
        supplierId: res.supplier?.id ?? 0,
        supplierName: res.supplier?.name ?? "",
        orderDate: res.orderDate,
        placeOfSupply: res.invoice?.placeOfSupply ?? "",
        termsOfDelivery: res.invoice?.termsOfDelivery ?? "",
        termsOfPayment: res.invoice?.termsOfPayment ?? "",
        address: res.supplier?.address ?? "",
        mobileNo: res.supplier?.phone ?? "",
        gstNo: res.supplier?.gstin ?? "",
        state: res.supplier?.state ?? "",
        email: res.supplier?.email ?? ""
      });
      if (res.items?.length) {
        res.items.forEach((i) => {
          const rawMaterialName = i.rawMaterialDto?.name ?? "";
          const makeName = i.make?.name ?? i.make ?? "";
          this.items.push(this.createItem(rawMaterialName, makeName, i.quantity, i.unit, i.rate, i.per));
        });
      }
    });
  }
  // FormArray getter
  get items() {
    return this.poForm.get("items");
  }
  createItem(rawMaterialName = "", make = "", quantity = 1, unit = "Carton", rate = 0, per = 1) {
    return this.fb.group({
      rawMaterialName: [rawMaterialName, Validators.required],
      make: [make || this.selectedMakeControl.value, Validators.required],
      quantity: [quantity, [Validators.required, Validators.min(1)]],
      unit: [unit],
      rate: [rate, [Validators.required, Validators.min(0)]],
      per: [per, [Validators.required, Validators.min(1)]],
      amount: [{ value: rate * quantity, disabled: true }]
    });
  }
  addProduct() {
    if (!this.selectedProductControl.value || !this.selectedMakeControl.value)
      return;
    const rawMaterial = this.rawMaterials.find((p) => p.id == this.selectedProductControl.value);
    const unit = this.selectedUnitControl.value;
    const rate = this.rateControl.value;
    const per = this.perControl.value;
    const quantity = this.quantityControl.value;
    const make = this.selectedMakeControl.value;
    this.items.push(this.createItem(rawMaterial?.name ?? "", make, quantity, unit, rate, per));
    this.selectedProductControl.reset("");
    this.selectedMakeControl.reset("");
    this.selectedUnitControl.setValue(this.units[0]);
    this.rateControl.setValue(0);
    this.perControl.setValue(1);
    this.quantityControl.setValue(1);
    this.amountControl.setValue(0);
  }
  removeProduct(index) {
    this.items.removeAt(index);
  }
  updateAddProductAmount() {
    const rate = this.rateControl.value || 0;
    const qty = this.quantityControl.value || 0;
    this.amountControl.setValue(rate * qty, { emitEvent: false });
  }
  updateItemAmount(index) {
    const item = this.items.at(index);
    const rate = item.get("rate")?.value || 0;
    const quantity = item.get("quantity")?.value || 0;
    item.get("amount")?.setValue(rate * quantity, { emitEvent: false });
  }
  get grandTotal() {
    return this.items.controls.reduce((sum, item) => sum + (item.get("amount")?.value || 0), 0);
  }
  loadProducts() {
    this.RawMaterialService.getAllProducts().subscribe({
      next: (data) => {
        this.rawMaterials = data;
        this.cd.markForCheck();
      },
      error: (err) => console.error(err)
    });
  }
  loadMakes() {
    this.makeService.getAllProducts().subscribe({
      next: (data) => {
        this.makes = data;
        this.cd.markForCheck();
      },
      error: (err) => console.error(err)
    });
  }
  savePO() {
    if (!this.poForm.valid)
      return;
    const updatedPO = __spreadProps(__spreadValues({}, this.poData), {
      supplier: __spreadProps(__spreadValues({}, this.poData.supplier), {
        id: this.poForm.value.supplierId,
        address: this.poForm.value.address,
        phone: this.poForm.value.mobileNo,
        gstin: this.poForm.value.gstNo,
        state: this.poForm.value.state,
        email: this.poForm.value.email
      }),
      orderDate: this.poForm.value.orderDate,
      invoice: {
        id: this.poData.invoice?.id ?? 0,
        invoiceDate: this.poData.invoice?.invoiceDate ?? (/* @__PURE__ */ new Date()).toISOString(),
        placeOfSupply: this.poForm.value.placeOfSupply,
        termsOfDelivery: this.poForm.value.termsOfDelivery,
        termsOfPayment: this.poForm.value.termsOfPayment
      },
      items: this.items.getRawValue()
    });
    this.poService.editPO(this.poId, updatedPO).subscribe(() => {
      alert("Purchase Order Updated!");
      this.router.navigate(["/purchase-orders"]);
    });
  }
  cancel() {
    this.router.navigate(["/purchase-orders"]);
  }
  // --- PDF Generation ---
  generatePDF() {
    const doc = new E("p", "mm", "a4");
    let yPos = 14;
    doc.setFontSize(16);
    doc.text("NAVRANG", 105, yPos, { align: "center" });
    yPos += 6;
    doc.setFontSize(10);
    doc.text("L-77, 78, G.I.D.C Estate Near Water Tank, Odhav Road, Ahmedabad-382415", 105, yPos, { align: "center" });
    yPos += 10;
    doc.setFontSize(12);
    doc.text("Details of Supplier", 14, yPos);
    yPos += 6;
    doc.setFontSize(10);
    doc.text(`M/s.: ${this.poForm.value.supplierName || ""}`, 14, yPos);
    yPos += 5;
    doc.text(`Address: ${this.poForm.value.address || ""}`, 14, yPos);
    yPos += 5;
    doc.text(`State: ${this.poForm.value.state || ""} | GSTIN: ${this.poForm.value.gstNo || ""}`, 14, yPos);
    yPos += 10;
    autoTable(doc, {
      startY: yPos,
      theme: "grid",
      styles: { fontSize: 10 },
      head: [["PO No.", "PO Date", "Terms of Delivery", "Place of Supply", "Terms of Payment"]],
      body: [[
        this.poId,
        this.poForm.value.orderDate,
        this.poForm.value.termsOfDelivery || "",
        this.poForm.value.placeOfSupply || "",
        this.poForm.value.termsOfPayment || ""
      ]]
    });
    yPos = doc.lastAutoTable?.finalY + 6;
    autoTable(doc, {
      startY: yPos,
      theme: "grid",
      head: [["No.", "Product", "Make", "Qty", "Unit", "Rate", "Per", "Amount"]],
      body: this.items.controls.map((ctrl, idx) => {
        const item = ctrl.value;
        return [
          idx + 1,
          item.productName || "",
          item.make || "",
          item.quantity || 0,
          item.unit || "",
          (item.rate || 0).toFixed(2),
          item.per || 1,
          (item.amount || 0).toFixed(2)
        ];
      })
    });
    yPos = doc.lastAutoTable?.finalY + 6;
    doc.setFontSize(11);
    doc.text(`Grand Total: ${this.grandTotal.toFixed(2)}`, 160, yPos);
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
      head: [["Prepared by", "Verified by", "Authorised Signatory"]],
      body: [["____________________", "____________________", "____________________"]]
    });
    doc.output("dataurlnewwindow");
  }
  static \u0275fac = function EditPo_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditPo)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SupplierService), \u0275\u0275directiveInject(PoService), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MakeService), \u0275\u0275directiveInject(RawMaterialService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditPo, selectors: [["app-edit-purchase-order"]], decls: 169, vars: 32, consts: [[1, "wrapper"], [1, "content"], [1, "container-fluid"], [3, "ngSubmit", "formGroup"], [1, "row"], [1, "col-md-6"], [1, "card", "card-cyan"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title"], [1, "card-tools", "ms-auto"], ["type", "button", 1, "btn", "btn-tool", 3, "click"], [1, "fas", 3, "ngClass"], [1, "card-body"], [1, "form-group"], ["type", "text", "formControlName", "orderDate", "readonly", "", 1, "form-control", 3, "disabled"], ["type", "text", "formControlName", "termsOfDelivery", 1, "form-control"], ["type", "text", "formControlName", "placeOfSupply", 1, "form-control"], ["type", "text", "formControlName", "termsOfPayment", 1, "form-control"], [1, "card", "card-primary"], ["formControlName", "supplierId", 1, "form-control", 3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "hidden", "formControlName", "supplierName"], ["formControlName", "address", 1, "form-control", 3, "disabled"], ["type", "text", "formControlName", "mobileNo", 1, "form-control", 3, "disabled"], ["type", "text", "formControlName", "gstNo", 1, "form-control", 3, "disabled"], ["type", "text", "formControlName", "state", 1, "form-control", 3, "disabled"], ["type", "text", "formControlName", "email", 1, "form-control", 3, "disabled"], [1, "form-control", 3, "formControl"], ["value", "0"], [1, "col-md-12"], [1, "callout", "callout-info"], [1, "row", "g-2"], [1, "col-md-3"], [1, "col-md-2"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["type", "number", "placeholder", "Rate", 1, "form-control", 3, "formControl"], ["type", "number", 1, "form-control", 3, "formControl", "disabled"], ["type", "number", 1, "form-control", 3, "formControl"], [1, "col-md-1", "d-flex", "align-items-end"], [1, "btn", "btn-info", "w-100", 3, "click"], [1, "row", "mt-2"], [1, "col-md-2", "offset-md-10"], [1, "table", "table-bordered", "table-hover"], ["formArrayName", "items"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-md-3", "offset-md-9"], ["type", "number", 1, "form-control", 3, "value", "disabled"], [1, "row", "mt-3"], [1, "btn", "btn-success", "submit", 3, "click"], [1, "col-md-6", "text-end"], [1, "btn", "btn-danger", 3, "click"], [3, "value"], [3, "formGroupName"], [1, "btn", "btn-outline-danger", "btn-xs", 3, "click"], [1, "fa", "fa-remove"]], template: function EditPo_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "form", 3);
      \u0275\u0275listener("ngSubmit", function EditPo_Template_form_ngSubmit_3_listener() {
        return ctx.savePO();
      });
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h3", 8);
      \u0275\u0275text(9, "Invoice Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9)(11, "button", 10);
      \u0275\u0275listener("click", function EditPo_Template_button_click_11_listener() {
        return ctx.invoiceCollapsed = !ctx.invoiceCollapsed;
      });
      \u0275\u0275element(12, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 12)(14, "div", 4)(15, "div", 5)(16, "div", 13)(17, "label");
      \u0275\u0275text(18, "Purchase Order Date:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "input", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 13)(21, "label");
      \u0275\u0275text(22, "Terms Of Delivery:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 5)(25, "div", 13)(26, "label");
      \u0275\u0275text(27, "Place Of Supply:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 13)(30, "label");
      \u0275\u0275text(31, "Terms Of Payment:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(32, "input", 17);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(33, "div", 5)(34, "div", 18)(35, "div", 7)(36, "h3", 8);
      \u0275\u0275text(37, "Supplier Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 9)(39, "button", 10);
      \u0275\u0275listener("click", function EditPo_Template_button_click_39_listener() {
        return ctx.supplierCollapsed = !ctx.supplierCollapsed;
      });
      \u0275\u0275element(40, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 12)(42, "div", 4)(43, "div", 5)(44, "div", 13)(45, "label");
      \u0275\u0275text(46, "M/s.:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "select", 19);
      \u0275\u0275listener("change", function EditPo_Template_select_change_47_listener($event) {
        return ctx.onSupplierChange($event);
      });
      \u0275\u0275elementStart(48, "option", 20);
      \u0275\u0275text(49, "Select Supplier");
      \u0275\u0275elementEnd();
      \u0275\u0275template(50, EditPo_option_50_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275element(51, "input", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 13)(53, "label");
      \u0275\u0275text(54, "Address:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(55, "textarea", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 13)(57, "label");
      \u0275\u0275text(58, "Mobile No:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(59, "input", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 5)(61, "div", 13)(62, "label");
      \u0275\u0275text(63, "GST No:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(64, "input", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 13)(66, "label");
      \u0275\u0275text(67, "State:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(68, "input", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 13)(70, "label");
      \u0275\u0275text(71, "Email:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(72, "input", 27);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(73, "div", 5)(74, "div", 18)(75, "div", 7)(76, "h3", 8);
      \u0275\u0275text(77, "Product");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 12)(79, "div", 4)(80, "div", 5)(81, "div", 13)(82, "label");
      \u0275\u0275text(83, "Select Product: ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "select", 28)(85, "option", 29);
      \u0275\u0275text(86, "----Select Product----");
      \u0275\u0275elementEnd();
      \u0275\u0275template(87, EditPo_option_87_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(88, "div", 4)(89, "div", 30)(90, "div", 31)(91, "div", 32)(92, "div", 33)(93, "label");
      \u0275\u0275text(94, "Select Make:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "select", 28)(96, "option", 29);
      \u0275\u0275text(97, "----Select Make----");
      \u0275\u0275elementEnd();
      \u0275\u0275template(98, EditPo_option_98_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 34)(100, "label");
      \u0275\u0275text(101, "Unit:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "select", 28)(103, "option", 35);
      \u0275\u0275text(104, "Carton");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "option", 36);
      \u0275\u0275text(106, "Kgs.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "option", 37);
      \u0275\u0275text(108, "Ltrs.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "option", 38);
      \u0275\u0275text(110, "Dram");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(111, "div", 34)(112, "label");
      \u0275\u0275text(113, "Rate:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(114, "input", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 34)(116, "label");
      \u0275\u0275text(117, "Per:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(118, "input", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "div", 34)(120, "label");
      \u0275\u0275text(121, "Quantity:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(122, "input", 41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "div", 42)(124, "button", 43);
      \u0275\u0275listener("click", function EditPo_Template_button_click_124_listener() {
        return ctx.addProduct();
      });
      \u0275\u0275text(125, " Add ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(126, "div", 44)(127, "div", 45)(128, "label");
      \u0275\u0275text(129, "Amount:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(130, "input", 40);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(131, "div", 4)(132, "div", 30)(133, "div", 31)(134, "table", 46)(135, "thead")(136, "tr")(137, "th");
      \u0275\u0275text(138, "Item No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "th");
      \u0275\u0275text(140, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "th");
      \u0275\u0275text(142, "Make");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "th");
      \u0275\u0275text(144, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "th");
      \u0275\u0275text(146, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "th");
      \u0275\u0275text(148, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(149, "th");
      \u0275\u0275text(150, "Per");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "th");
      \u0275\u0275text(152, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "th");
      \u0275\u0275text(154, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(155, "tbody", 47);
      \u0275\u0275template(156, EditPo_tr_156_Template, 21, 9, "tr", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(157, "div", 44)(158, "div", 49)(159, "label");
      \u0275\u0275text(160, "Grand Total:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(161, "input", 50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(162, "div", 51)(163, "div", 5)(164, "button", 52);
      \u0275\u0275listener("click", function EditPo_Template_button_click_164_listener() {
        return ctx.generatePDF();
      });
      \u0275\u0275text(165, " Generate ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "div", 53)(167, "button", 54);
      \u0275\u0275listener("click", function EditPo_Template_button_click_167_listener() {
        return ctx.router.navigate(["/purchase-orders"]);
      });
      \u0275\u0275text(168, " Cancel ");
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.poForm);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(26, _c0, !ctx.invoiceCollapsed, ctx.invoiceCollapsed));
      \u0275\u0275advance();
      \u0275\u0275property("@collapseExpand", ctx.invoiceCollapsed ? "closed" : "open");
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", true);
      \u0275\u0275advance(21);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(29, _c0, !ctx.invoiceCollapsed, ctx.invoiceCollapsed));
      \u0275\u0275advance();
      \u0275\u0275property("@collapseExpand", ctx.supplierCollapsed ? "closed" : "open");
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.suppliers);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", true);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", true);
      \u0275\u0275advance(5);
      \u0275\u0275property("disabled", true);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", true);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", true);
      \u0275\u0275advance(12);
      \u0275\u0275property("formControl", ctx.selectedProductControl);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.rawMaterials);
      \u0275\u0275advance(8);
      \u0275\u0275property("formControl", ctx.selectedMakeControl);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.makes);
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.selectedUnitControl);
      \u0275\u0275advance(12);
      \u0275\u0275property("formControl", ctx.rateControl);
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.perControl)("disabled", true);
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.quantityControl);
      \u0275\u0275advance(8);
      \u0275\u0275property("formControl", ctx.amountControl)("disabled", true);
      \u0275\u0275advance(26);
      \u0275\u0275property("ngForOf", ctx.items.controls);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.grandTotal)("disabled", true);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, HttpClientModule], styles: ["\n\n.wrapper[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #f4f6f9;\n  min-height: 100vh;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n  padding: 0;\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n  font-weight: 600;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  padding: 10px 15px;\n}\n.card.card-cyan[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #17a2b8;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  padding: 6px 10px;\n  font-size: 14px;\n}\n.callout[_ngcontent-%COMP%] {\n  background-color: #e9f7fd;\n  border-left: 5px solid #17a2b8;\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 20px;\n}\ntable.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: #ffffff;\n}\ntable.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  text-align: center;\n  border: 1px solid #dee2e6;\n  font-size: 14px;\n}\ntable.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  font-weight: 600;\n}\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f9f9f9;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.btn-outline-danger[_ngcontent-%COMP%] {\n  border: 1px solid #dc3545;\n  color: #dc3545;\n  background: transparent;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background-color: #dc3545;\n  color: white;\n}\n.btn-info[_ngcontent-%COMP%] {\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n  color: white;\n}\n.btn-info[_ngcontent-%COMP%]:hover {\n  background-color: #138496;\n  border-color: #117a8b;\n}\n.d-flex.align-items-end[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\ninput[disabled][_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  cursor: not-allowed;\n}\n.card-body.collapsible[_ngcontent-%COMP%] {\n  overflow: hidden;\n  transition: max-height 0.4s ease, padding 0.4s ease;\n  max-height: 1000px;\n}\n.card-body.collapsible.collapsed[_ngcontent-%COMP%] {\n  max-height: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n@media (max-width: 768px) {\n  .row.g-2[_ngcontent-%COMP%]    > [class*=col-][_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .d-flex.align-items-end[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=edit-po.css.map */"], data: { animation: [
    trigger("collapseExpand", [
      state("open", style({
        height: "*",
        opacity: 1,
        padding: "*"
      })),
      state("closed", style({
        height: "0px",
        opacity: 0,
        padding: "0px 15px"
      })),
      transition("open <=> closed", [
        animate("400ms ease-in-out")
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditPo, [{
    type: Component,
    args: [{ selector: "app-edit-purchase-order", standalone: true, imports: [CommonModule, ReactiveFormsModule, HttpClientModule], animations: [
      trigger("collapseExpand", [
        state("open", style({
          height: "*",
          opacity: 1,
          padding: "*"
        })),
        state("closed", style({
          height: "0px",
          opacity: 0,
          padding: "0px 15px"
        })),
        transition("open <=> closed", [
          animate("400ms ease-in-out")
        ])
      ])
    ], template: `<div class="wrapper">
  <section class="content">
    <div class="container-fluid">
      <form [formGroup]="poForm" (ngSubmit)="savePO()">
        <!-- Invoice & Supplier Details Row -->
        <div class="row">
          <!-- Invoice Details -->
          <div class="col-md-6">
            <div class="card card-cyan">
              <div
                class="card-header d-flex justify-content-between align-items-center"
              >
                <h3 class="card-title">Invoice Details</h3>
                <div class="card-tools ms-auto">
                  <button
                    type="button"
                    class="btn btn-tool"
                    (click)="invoiceCollapsed = !invoiceCollapsed"
                  >
                    <i
                      class="fas"
                      [ngClass]="{
                        'fa-minus': !invoiceCollapsed,
                        'fa-plus': invoiceCollapsed
                      }"
                    ></i>
                  </button>
                </div>
              </div>
              <div
                class="card-body"
                [@collapseExpand]="invoiceCollapsed ? 'closed' : 'open'"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Purchase Order Date:</label>
                      <input
                        type="text"
                        class="form-control"
                        formControlName="orderDate"
                        [disabled]="true"
                        readonly
                      />
                    </div>
                    <div class="form-group">
                      <label>Terms Of Delivery:</label>
                      <input
                        type="text"
                        class="form-control"
                        formControlName="termsOfDelivery"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Place Of Supply:</label>
                      <input
                        type="text"
                        class="form-control"
                        formControlName="placeOfSupply"
                      />
                    </div>
                    <div class="form-group">
                      <label>Terms Of Payment:</label>
                      <input
                        type="text"
                        class="form-control"
                        formControlName="termsOfPayment"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Supplier Details -->
          <div class="col-md-6">
            <div class="card card-primary">
              <div
                class="card-header d-flex justify-content-between align-items-center"
              >
                <h3 class="card-title">Supplier Details</h3>
                <div class="card-tools ms-auto">
                  <button
                    type="button"
                    class="btn btn-tool"
                    (click)="supplierCollapsed = !supplierCollapsed"
                  >
                    <i
                      class="fas"
                      [ngClass]="{
                        'fa-minus': !invoiceCollapsed,
                        'fa-plus': invoiceCollapsed
                      }"
                    ></i>
                  </button>
                </div>
              </div>
              <div
                class="card-body"
                [@collapseExpand]="supplierCollapsed ? 'closed' : 'open'"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>M/s.:</label>
                      <select formControlName="supplierId" class="form-control" (change)="onSupplierChange($event)">
  <option value="">Select Supplier</option>
  <option *ngFor="let supplier of suppliers" [value]="supplier.id">{{ supplier.name }}</option>
</select>

                      <!-- \u{1F447} hidden field outside the select -->
                      <input type="hidden" formControlName="supplierName" />
                    </div>
                    <div class="form-group">
                      <label>Address:</label>
                      <textarea
                        class="form-control"
                        formControlName="address"
                        [disabled]="true"
                      ></textarea>
                    </div>
                    <div class="form-group">
                      <label>Mobile No:</label>
                      <input
                        type="text"
                        class="form-control"
                        formControlName="mobileNo"
                        [disabled]="true"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label>GST No:</label>
                      <input
                        type="text"
                        class="form-control"
                        formControlName="gstNo"
                        [disabled]="true"
                      />
                    </div>
                    <div class="form-group">
                      <label>State:</label>
                      <input
                        type="text"
                        class="form-control"
                        formControlName="state"
                        [disabled]="true"
                      />
                    </div>
                    <div class="form-group">
                      <label>Email:</label>
                      <input
                        type="text"
                        class="form-control"
                        formControlName="email"
                        [disabled]="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- PRODUCT Details -->
        <div class="col-md-6">
          <div class="card card-primary">
            <div
              class="card-header d-flex justify-content-between align-items-center"
            >
              <h3 class="card-title">Product</h3>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Select Product: </label>
                    <select
                      class="form-control"
                      [formControl]="selectedProductControl"
                    >
                      <option value="0">----Select Product----</option>
                      <option
                        *ngFor="let rm of rawMaterials"
                        [value]="rm.id"
                      >
                        {{ rm.name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product & Rates Row -->
        <div class="row">
          <div class="col-md-12">
            <div class="callout callout-info">
              <div class="row g-2">
                <div class="col-md-3">
                  <label>Select Make:</label>
                  <select
                    class="form-control"
                    [formControl]="selectedMakeControl"
                  >
                    <option value="0">----Select Make----</option>
                    <option *ngFor="let make of makes" [value]="make.name">
                      {{ make.name }}
                    </option>
                  </select>
                </div>

                <div class="col-md-2">
                  <label>Unit:</label>
                  <select
                    class="form-control"
                    [formControl]="selectedUnitControl"
                  >
                    <option value="1">Carton</option>
                    <option value="2">Kgs.</option>
                    <option value="3">Ltrs.</option>
                    <option value="4">Dram</option>
                  </select>
                </div>

                <div class="col-md-2">
                  <label>Rate:</label>
                  <input
                    type="number"
                    class="form-control"
                    [formControl]="rateControl"
                    placeholder="Rate"
                  />
                </div>

                <div class="col-md-2">
                  <label>Per:</label>
                  <input
                    type="number"
                    class="form-control"
                    [formControl]="perControl"
                    [disabled]="true"
                  />
                </div>

                <div class="col-md-2">
                  <label>Quantity:</label>
                  <input
                    type="number"
                    class="form-control"
                    [formControl]="quantityControl"
                  />
                </div>

                <div class="col-md-1 d-flex align-items-end">
                  <button class="btn btn-info w-100" (click)="addProduct()">
                    Add
                  </button>
                </div>
              </div>

              <!-- Amount Row -->
              <div class="row mt-2">
                <div class="col-md-2 offset-md-10">
                  <label>Amount:</label>
                  <input
                    type="number"
                    class="form-control"
                    [formControl]="amountControl"
                    [disabled]="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Product Table -->
        <div class="row">
          <div class="col-md-12">
            <div class="callout callout-info">
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Item No.</th>
                    <th>Product Name</th>
                    <th>Make</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Rate</th>
                    <th>Per</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody formArrayName="items">
                  <tr
                    *ngFor="let item of items.controls; let i = index"
                    [formGroupName]="i"
                  >
                    <td>{{ i + 1 }}</td>
                    <td>{{ item.value.rawMaterialName }}</td>
                    <td>{{ item.value.make }}</td>
                    <td>{{ item.value.quantity }}</td>
                    <td>{{ item.value.unit }}</td>
                    <td>{{ item.value.rate }}</td>
                    <td>{{ item.value.per }}</td>
                    <td>{{ item.get("amount")?.value }}</td>
                    <td>
                      <button
                        class="btn btn-outline-danger btn-xs"
                        (click)="removeProduct(i)"
                      >
                        <i class="fa fa-remove"></i> Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              <!-- Grand Total -->
              <div class="row mt-2">
                <div class="col-md-3 offset-md-9">
                  <label>Grand Total:</label>
                  <input
                    type="number"
                    class="form-control"
                    [value]="grandTotal"
                    [disabled]="true"
                  />
                </div>
              </div>

              <!-- Buttons -->
              <div class="row mt-3">
                <div class="col-md-6">
                  <button class="btn btn-success submit" (click)="generatePDF()">
                    Generate
                  </button>
                </div>
                <div class="col-md-6 text-end">
                  <button
                    class="btn btn-danger"
                    (click)="router.navigate(['/purchase-orders'])"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</div>
`, styles: ["/* src/app/components/edit-po/edit-po.css */\n.wrapper {\n  padding: 20px;\n  background-color: #f4f6f9;\n  min-height: 100vh;\n}\n.card {\n  border-radius: 8px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n  padding: 0;\n}\n.card-header {\n  background-color: #007bff;\n  color: white;\n  font-weight: 600;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  padding: 10px 15px;\n}\n.card.card-cyan .card-header {\n  background-color: #17a2b8;\n}\n.card-body {\n  padding: 15px;\n}\n.form-group {\n  margin-bottom: 12px;\n}\n.form-control {\n  border-radius: 4px;\n  padding: 6px 10px;\n  font-size: 14px;\n}\n.callout {\n  background-color: #e9f7fd;\n  border-left: 5px solid #17a2b8;\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 20px;\n}\ntable.table {\n  width: 100%;\n  border-collapse: collapse;\n  background: #ffffff;\n}\ntable.table th,\ntable.table td {\n  padding: 8px 10px;\n  text-align: center;\n  border: 1px solid #dee2e6;\n  font-size: 14px;\n}\ntable.table th {\n  background-color: #f1f1f1;\n  font-weight: 600;\n}\ntable.table tr:hover {\n  background-color: #f9f9f9;\n}\n.btn {\n  border-radius: 4px;\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.btn-outline-danger {\n  border: 1px solid #dc3545;\n  color: #dc3545;\n  background: transparent;\n}\n.btn-outline-danger:hover {\n  background-color: #dc3545;\n  color: white;\n}\n.btn-info {\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n  color: white;\n}\n.btn-info:hover {\n  background-color: #138496;\n  border-color: #117a8b;\n}\n.d-flex.align-items-end {\n  display: flex;\n  align-items: flex-end;\n}\ninput[disabled] {\n  background-color: #e9ecef;\n  cursor: not-allowed;\n}\n.card-body.collapsible {\n  overflow: hidden;\n  transition: max-height 0.4s ease, padding 0.4s ease;\n  max-height: 1000px;\n}\n.card-body.collapsible.collapsed {\n  max-height: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n@media (max-width: 768px) {\n  .row.g-2 > [class*=col-] {\n    margin-bottom: 10px;\n  }\n  .d-flex.align-items-end {\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=edit-po.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: ActivatedRoute }, { type: Router }, { type: SupplierService }, { type: PoService }, { type: ProductService }, { type: ChangeDetectorRef }, { type: MakeService }, { type: RawMaterialService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditPo, { className: "EditPo", filePath: "src/app/components/edit-po/edit-po.ts", lineNumber: 49 });
})();
export {
  EditPo
};
//# sourceMappingURL=chunk-Z6OTYJ27.js.map
