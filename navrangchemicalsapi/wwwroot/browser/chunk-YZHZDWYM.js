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
  ɵɵtextInterpolate
} from "./chunk-QAWYXZDT.js";
import "./chunk-46DXP6YY.js";

// src/app/components/add-po/add-po.ts
var _c0 = (a0, a1) => ({ "fa-minus": a0, "fa-plus": a1 });
function AddPo_option_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 53);
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
function AddPo_option_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("value", r_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.name);
  }
}
function AddPo_option_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275property("value", m_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r3.name);
  }
}
function AddPo_option_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r4);
  }
}
function AddPo_tr_138_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 54)(1, "td");
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
    \u0275\u0275elementStart(15, "td")(16, "button", 55);
    \u0275\u0275listener("click", function AddPo_tr_138_Template_button_click_16_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.removeRawMaterial(i_r6));
    });
    \u0275\u0275element(17, "i", 56);
    \u0275\u0275text(18, " Remove ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    const item_r8 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroupName", i_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r6.getRawMaterialName((tmp_5_0 = item_r8.get("rawMaterialsId")) == null ? null : tmp_5_0.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r6.getMakeName((tmp_6_0 = item_r8.get("makeId")) == null ? null : tmp_6_0.value));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_7_0 = item_r8.get("quantity")) == null ? null : tmp_7_0.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_8_0 = item_r8.get("unit")) == null ? null : tmp_8_0.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_9_0 = item_r8.get("rate")) == null ? null : tmp_9_0.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_10_0 = item_r8.get("amount")) == null ? null : tmp_10_0.value);
  }
}
var AddPo = class _AddPo {
  fb;
  router;
  supplierService;
  poService;
  rawMaterialService;
  makeService;
  cd;
  poForm;
  suppliers = [];
  rawMaterials = [];
  makes = [];
  units = ["Carton", "Kgs.", "Ltrs.", "Dram"];
  invoiceCollapsed = false;
  supplierCollapsed = false;
  selectedRawMaterialControl;
  selectedMakeControl;
  selectedUnitControl;
  rateControl;
  quantityControl;
  amountControl;
  constructor(fb, router, supplierService, poService, rawMaterialService, makeService, cd) {
    this.fb = fb;
    this.router = router;
    this.supplierService = supplierService;
    this.poService = poService;
    this.rawMaterialService = rawMaterialService;
    this.makeService = makeService;
    this.cd = cd;
  }
  ngOnInit() {
    this.initForm();
    this.loadSuppliers();
    this.loadRawMaterials();
    this.loadMakes();
    this.selectedRawMaterialControl = new FormControl("", Validators.required);
    this.selectedMakeControl = new FormControl("", Validators.required);
    this.selectedUnitControl = new FormControl(this.units[0]);
    this.rateControl = new FormControl(0);
    this.quantityControl = new FormControl(1);
    this.amountControl = new FormControl({ value: 0, disabled: true });
    this.rateControl.valueChanges.subscribe(() => this.updateAmount());
    this.quantityControl.valueChanges.subscribe(() => this.updateAmount());
    this.poForm.patchValue({ orderDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0] });
  }
  initForm() {
    this.poForm = this.fb.group({
      supplierId: [0, Validators.required],
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
  get items() {
    return this.poForm.get("items");
  }
  createItem(makeId = 0, rawMaterialsId = 0, quantity = 1, unit = "Carton", rate = 0) {
    return this.fb.group({
      makeId: [makeId, Validators.required],
      rawMaterialsId: [rawMaterialsId, Validators.required],
      quantity: [quantity, [Validators.required, Validators.min(1)]],
      unit: [unit, Validators.required],
      rate: [rate, [Validators.required, Validators.min(0)]],
      amount: [{ value: rate * quantity, disabled: true }]
    });
  }
  updateAmount() {
    const rate = Number(this.rateControl.value) || 0;
    const qty = Number(this.quantityControl.value) || 0;
    this.amountControl.setValue(rate * qty);
  }
  addRawMaterial() {
    if (!this.selectedRawMaterialControl.value || !this.selectedMakeControl.value)
      return;
    const makeId = Number(this.selectedMakeControl.value);
    const rawMaterialsId = Number(this.selectedRawMaterialControl.value);
    const quantity = Number(this.quantityControl.value);
    const unit = this.selectedUnitControl.value;
    const rate = Number(this.rateControl.value);
    this.items.push(this.createItem(makeId, rawMaterialsId, quantity, unit, rate));
    this.selectedMakeControl.reset("");
    this.selectedRawMaterialControl.reset("");
    this.selectedUnitControl.setValue(this.units[0]);
    this.rateControl.setValue(0);
    this.quantityControl.setValue(1);
    this.amountControl.setValue(0);
  }
  removeRawMaterial(index) {
    this.items.removeAt(index);
  }
  get grandTotal() {
    return this.items.controls.reduce((sum, item) => sum + (item.get("amount")?.value || 0), 0);
  }
  getRawMaterialName(id) {
    const rm = this.rawMaterials.find((r) => r.id === id);
    return rm ? rm.name : "";
  }
  getMakeName(id) {
    const m = this.makes.find((m2) => m2.id === id);
    return m ? m.name : "";
  }
  loadSuppliers() {
    this.supplierService.getSuppliers().subscribe((res) => this.suppliers = res);
  }
  loadRawMaterials() {
    this.rawMaterialService.getAllProducts().subscribe((res) => {
      this.rawMaterials = res;
      this.cd.markForCheck();
    });
  }
  loadMakes() {
    this.makeService.getAllProducts().subscribe((res) => {
      this.makes = res;
      this.cd.markForCheck();
    });
  }
  onSupplierChange(event) {
    const supplierId = +event.target.value;
    const supplier = this.suppliers.find((s) => s.id === supplierId);
    if (supplier) {
      this.poForm.patchValue({
        address: supplier.address,
        mobileNo: supplier.phone,
        gstNo: supplier.gstin,
        state: supplier.state,
        email: supplier.email
      });
    }
  }
  generateInvoice() {
    if (this.poForm.invalid || this.items.length === 0)
      return;
    const supplierData = this.suppliers.find((s) => s.id === +this.poForm.value.supplierId);
    const payload = {
      id: this.poForm.value.id,
      supplierId: +this.poForm.value.supplierId,
      supplier: {
        id: supplierData.id,
        name: supplierData.name,
        address: supplierData.address,
        gstin: supplierData.gstin,
        state: supplierData.state,
        stateCode: supplierData.stateCode ?? 0,
        phone: supplierData.phone,
        email: supplierData.email
      },
      address: this.poForm.value.address,
      orderDate: new Date(this.poForm.value.orderDate).toISOString(),
      placeOfSupply: this.poForm.value.placeOfSupply,
      termsOfDelivery: this.poForm.value.termsOfDelivery,
      termsOfPayment: this.poForm.value.termsOfPayment,
      invoice: {
        id: 0,
        invoiceDate: new Date(this.poForm.value.orderDate).toISOString().split("T")[0],
        placeOfSupply: this.poForm.value.placeOfSupply,
        termsOfDelivery: this.poForm.value.termsOfDelivery,
        termsOfPayment: this.poForm.value.termsOfPayment,
        purchaseOrderId: 0
      },
      items: this.items.controls.map((ctrl) => {
        const rmId = +ctrl.get("rawMaterialsId")?.value;
        const makeId = +ctrl.get("makeId")?.value;
        const rawMaterial = this.rawMaterials.find((r) => r.id === rmId);
        return {
          id: 0,
          rawMaterialsId: rmId,
          rawMaterialDto: rawMaterial,
          makeId,
          unit: ctrl.get("unit")?.value,
          rate: +ctrl.get("rate")?.value,
          per: 1,
          quantity: +ctrl.get("quantity")?.value,
          amount: +ctrl.get("amount")?.value,
          purchaseOrderId: 0
        };
      }),
      grandTotal: this.grandTotal
    };
    console.log("Final Payload:", payload);
    this.poService.CreatePO(payload).subscribe({
      next: () => this.router.navigate(["/purchase-orders"]),
      error: (err) => console.error(err)
    });
  }
  static \u0275fac = function AddPo_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddPo)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SupplierService), \u0275\u0275directiveInject(PoService), \u0275\u0275directiveInject(RawMaterialService), \u0275\u0275directiveInject(MakeService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddPo, selectors: [["app-add-purchase-order"]], decls: 151, vars: 24, consts: [[1, "wrapper"], [1, "content"], [1, "container-fluid"], [3, "formGroup"], [1, "row"], [1, "col-md-6"], [1, "card", "card-cyan"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title"], [1, "card-tools", "ms-auto"], ["type", "button", 1, "btn", "btn-tool", 3, "click"], [1, "fas", 3, "ngClass"], [1, "card-body"], [1, "form-group"], ["type", "text", "formControlName", "orderDate", "readonly", "", 1, "form-control"], ["type", "text", "formControlName", "termsOfDelivery", 1, "form-control"], ["type", "text", "formControlName", "placeOfSupply", 1, "form-control"], ["type", "text", "formControlName", "termsOfPayment", 1, "form-control"], [1, "card", "card-primary"], ["formControlName", "supplierId", 1, "form-control", 3, "change"], ["value", "0"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "address", 1, "form-control"], ["type", "text", "formControlName", "mobileNo", 1, "form-control"], ["type", "text", "formControlName", "gstNo", 1, "form-control"], ["type", "text", "formControlName", "state", 1, "form-control"], ["type", "text", "formControlName", "email", 1, "form-control"], [1, "col-md-12"], [1, "card-header"], [1, "row", "g-2"], [1, "col-md-4"], [1, "form-control", 3, "formControl"], ["value", ""], [1, "col-md-3"], [1, "col-md-2"], [4, "ngFor", "ngForOf"], [1, "col-md-1"], ["type", "number", 1, "form-control", 3, "formControl"], [1, "col-md-1", "d-flex", "align-items-end"], ["type", "button", 1, "btn", "btn-info", "w-100", 3, "click"], [1, "row", "mt-2"], [1, "col-md-2", "offset-md-10"], ["type", "number", 1, "form-control", 3, "formControl", "disabled"], [1, "callout", "callout-info"], [1, "table", "table-bordered", "table-hover"], ["formArrayName", "items"], [3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "col-md-3", "offset-md-9"], ["type", "number", "readonly", "", 1, "form-control", 3, "value"], [1, "row", "mt-3"], ["type", "button", 1, "btn", "btn-success", "w-100", 3, "click"], [1, "col-md-6", "text-end"], ["type", "button", 1, "btn", "btn-danger", "w-100", 3, "click"], [3, "value"], [3, "formGroupName"], [1, "btn", "btn-outline-danger", "btn-xs", 3, "click"], [1, "fa", "fa-remove"]], template: function AddPo_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "form", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h3", 8);
      \u0275\u0275text(9, "Invoice Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9)(11, "button", 10);
      \u0275\u0275listener("click", function AddPo_Template_button_click_11_listener() {
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
      \u0275\u0275listener("click", function AddPo_Template_button_click_39_listener() {
        return ctx.supplierCollapsed = !ctx.supplierCollapsed;
      });
      \u0275\u0275element(40, "i", 11);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 12)(42, "div", 4)(43, "div", 5)(44, "div", 13)(45, "label");
      \u0275\u0275text(46, "M/s.:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "select", 19);
      \u0275\u0275listener("change", function AddPo_Template_select_change_47_listener($event) {
        return ctx.onSupplierChange($event);
      });
      \u0275\u0275elementStart(48, "option", 20);
      \u0275\u0275text(49, "----Select Supplier----");
      \u0275\u0275elementEnd();
      \u0275\u0275template(50, AddPo_option_50_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 13)(52, "label");
      \u0275\u0275text(53, "Address:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "textarea", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 13)(56, "label");
      \u0275\u0275text(57, "Mobile No:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(58, "input", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 5)(60, "div", 13)(61, "label");
      \u0275\u0275text(62, "GST No:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "input", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 13)(65, "label");
      \u0275\u0275text(66, "State:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "input", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "div", 13)(69, "label");
      \u0275\u0275text(70, "Email:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "input", 26);
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(72, "div", 4)(73, "div", 27)(74, "div", 18)(75, "div", 28)(76, "h3", 8);
      \u0275\u0275text(77, "Add Raw Material");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 12)(79, "div", 29)(80, "div", 30)(81, "label");
      \u0275\u0275text(82, "Raw Material");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "select", 31)(84, "option", 32);
      \u0275\u0275text(85, "----Select Raw Material----");
      \u0275\u0275elementEnd();
      \u0275\u0275template(86, AddPo_option_86_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 33)(88, "label");
      \u0275\u0275text(89, "Make");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "select", 31)(91, "option", 32);
      \u0275\u0275text(92, "----Select Make----");
      \u0275\u0275elementEnd();
      \u0275\u0275template(93, AddPo_option_93_Template, 2, 2, "option", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 34)(95, "label");
      \u0275\u0275text(96, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "select", 31);
      \u0275\u0275template(98, AddPo_option_98_Template, 2, 1, "option", 35);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 36)(100, "label");
      \u0275\u0275text(101, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(102, "input", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 36)(104, "label");
      \u0275\u0275text(105, "Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275element(106, "input", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "div", 38)(108, "button", 39);
      \u0275\u0275listener("click", function AddPo_Template_button_click_108_listener() {
        return ctx.addRawMaterial();
      });
      \u0275\u0275text(109, "Add");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(110, "div", 40)(111, "div", 41)(112, "label");
      \u0275\u0275text(113, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275element(114, "input", 42);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(115, "div", 4)(116, "div", 27)(117, "div", 43)(118, "table", 44)(119, "thead")(120, "tr")(121, "th");
      \u0275\u0275text(122, "Item No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "th");
      \u0275\u0275text(124, "Raw Material");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "th");
      \u0275\u0275text(126, "Make");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "th");
      \u0275\u0275text(128, "Quantity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "th");
      \u0275\u0275text(130, "Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "th");
      \u0275\u0275text(132, "Rate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "th");
      \u0275\u0275text(134, "Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "th");
      \u0275\u0275text(136, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "tbody", 45);
      \u0275\u0275template(138, AddPo_tr_138_Template, 19, 8, "tr", 46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(139, "div", 40)(140, "div", 47)(141, "label");
      \u0275\u0275text(142, "Grand Total:");
      \u0275\u0275elementEnd();
      \u0275\u0275element(143, "input", 48);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "div", 49)(145, "div", 5)(146, "button", 50);
      \u0275\u0275listener("click", function AddPo_Template_button_click_146_listener() {
        return ctx.generateInvoice();
      });
      \u0275\u0275text(147, "Generate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "div", 51)(149, "button", 52);
      \u0275\u0275listener("click", function AddPo_Template_button_click_149_listener() {
        return ctx.router.navigate(["/purchase-orders"]);
      });
      \u0275\u0275text(150, "Cancel");
      \u0275\u0275elementEnd()()()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.poForm);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(18, _c0, !ctx.invoiceCollapsed, ctx.invoiceCollapsed));
      \u0275\u0275advance();
      \u0275\u0275property("@collapseExpand", ctx.invoiceCollapsed ? "closed" : "open");
      \u0275\u0275advance(27);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(21, _c0, !ctx.supplierCollapsed, ctx.supplierCollapsed));
      \u0275\u0275advance();
      \u0275\u0275property("@collapseExpand", ctx.supplierCollapsed ? "closed" : "open");
      \u0275\u0275advance(9);
      \u0275\u0275property("ngForOf", ctx.suppliers);
      \u0275\u0275advance(33);
      \u0275\u0275property("formControl", ctx.selectedRawMaterialControl);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.rawMaterials);
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.selectedMakeControl);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.makes);
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.selectedUnitControl);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.units);
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.rateControl);
      \u0275\u0275advance(4);
      \u0275\u0275property("formControl", ctx.quantityControl);
      \u0275\u0275advance(8);
      \u0275\u0275property("formControl", ctx.amountControl)("disabled", true);
      \u0275\u0275advance(24);
      \u0275\u0275property("ngForOf", ctx.items.controls);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.grandTotal);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName, HttpClientModule], styles: ["\n\n.wrapper[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #f4f6f9;\n  min-height: 100vh;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n  padding: 0;\n}\n.card-header[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n  font-weight: 600;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  padding: 10px 15px;\n}\n.card.card-cyan[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #17a2b8;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  padding: 6px 10px;\n  font-size: 14px;\n}\n.callout[_ngcontent-%COMP%] {\n  background-color: #e9f7fd;\n  border-left: 5px solid #17a2b8;\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 20px;\n}\ntable.table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: #ffffff;\n}\ntable.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \ntable.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n  text-align: center;\n  border: 1px solid #dee2e6;\n  font-size: 14px;\n}\ntable.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  font-weight: 600;\n}\ntable.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f9f9f9;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.btn-outline-danger[_ngcontent-%COMP%] {\n  border: 1px solid #dc3545;\n  color: #dc3545;\n  background: transparent;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background-color: #dc3545;\n  color: white;\n}\n.btn-info[_ngcontent-%COMP%] {\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n  color: white;\n}\n.btn-info[_ngcontent-%COMP%]:hover {\n  background-color: #138496;\n  border-color: #117a8b;\n}\n.d-flex.align-items-end[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\ninput[disabled][_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  cursor: not-allowed;\n}\n.card-body.collapsible[_ngcontent-%COMP%] {\n  overflow: hidden;\n  transition: max-height 0.4s ease, padding 0.4s ease;\n  max-height: 1000px;\n}\n.card-body.collapsible.collapsed[_ngcontent-%COMP%] {\n  max-height: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n@media (max-width: 768px) {\n  .row.g-2[_ngcontent-%COMP%]    > [class*=col-][_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .d-flex.align-items-end[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=add-po.css.map */"], data: { animation: [
    trigger("collapseExpand", [
      state("open", style({ height: "*", opacity: 1, padding: "*" })),
      state("closed", style({ height: "0px", opacity: 0, padding: "0px 15px" })),
      transition("open <=> closed", [animate("400ms ease-in-out")])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddPo, [{
    type: Component,
    args: [{ selector: "app-add-purchase-order", standalone: true, imports: [CommonModule, ReactiveFormsModule, HttpClientModule], animations: [
      trigger("collapseExpand", [
        state("open", style({ height: "*", opacity: 1, padding: "*" })),
        state("closed", style({ height: "0px", opacity: 0, padding: "0px 15px" })),
        transition("open <=> closed", [animate("400ms ease-in-out")])
      ])
    ], template: `<div class="wrapper">
  <section class="content">
    <div class="container-fluid">
      <form [formGroup]="poForm">
        <!-- Invoice & Supplier Details Row -->
        <div class="row">
          <!-- Invoice Details -->
          <div class="col-md-6">
            <div class="card card-cyan">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h3 class="card-title">Invoice Details</h3>
                <div class="card-tools ms-auto">
                  <button type="button" class="btn btn-tool" (click)="invoiceCollapsed = !invoiceCollapsed">
                    <i class="fas" [ngClass]="{'fa-minus': !invoiceCollapsed, 'fa-plus': invoiceCollapsed}"></i>
                  </button>
                </div>
              </div>
              <div class="card-body" [@collapseExpand]="invoiceCollapsed ? 'closed' : 'open'">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Purchase Order Date:</label>
                      <input type="text" class="form-control" formControlName="orderDate" readonly />
                    </div>
                    <div class="form-group">
                      <label>Terms Of Delivery:</label>
                      <input type="text" class="form-control" formControlName="termsOfDelivery" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Place Of Supply:</label>
                      <input type="text" class="form-control" formControlName="placeOfSupply" />
                    </div>
                    <div class="form-group">
                      <label>Terms Of Payment:</label>
                      <input type="text" class="form-control" formControlName="termsOfPayment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Supplier Details -->
          <div class="col-md-6">
            <div class="card card-primary">
              <div class="card-header d-flex justify-content-between align-items-center">
                <h3 class="card-title">Supplier Details</h3>
                <div class="card-tools ms-auto">
                  <button type="button" class="btn btn-tool" (click)="supplierCollapsed = !supplierCollapsed">
                    <i class="fas" [ngClass]="{'fa-minus': !supplierCollapsed, 'fa-plus': supplierCollapsed}"></i>
                  </button>
                </div>
              </div>
              <div class="card-body" [@collapseExpand]="supplierCollapsed ? 'closed' : 'open'">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>M/s.:</label>
                      <select class="form-control" formControlName="supplierId" (change)="onSupplierChange($event)">
                        <option value="0">----Select Supplier----</option>
                        <option *ngFor="let supplier of suppliers" [value]="supplier.id">{{ supplier.name }}</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label>Address:</label>
                      <textarea class="form-control" formControlName="address"></textarea>
                    </div>
                    <div class="form-group">
                      <label>Mobile No:</label>
                      <input type="text" class="form-control" formControlName="mobileNo" />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="form-group">
                      <label>GST No:</label>
                      <input type="text" class="form-control" formControlName="gstNo" />
                    </div>
                    <div class="form-group">
                      <label>State:</label>
                      <input type="text" class="form-control" formControlName="state" />
                    </div>
                    <div class="form-group">
                      <label>Email:</label>
                      <input type="text" class="form-control" formControlName="email" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Add Raw Material Row -->
        <div class="row">
          <div class="col-md-12">
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Add Raw Material</h3>
              </div>
              <div class="card-body">
                <div class="row g-2">
                  <div class="col-md-4">
                    <label>Raw Material</label>
                    <select class="form-control" [formControl]="selectedRawMaterialControl">
                      <option value="">----Select Raw Material----</option>
                      <option *ngFor="let r of rawMaterials" [value]="r.id">{{ r.name }}</option>
                    </select>
                  </div>

                  <div class="col-md-3">
                    <label>Make</label>
                    <select class="form-control" [formControl]="selectedMakeControl">
                      <option value="">----Select Make----</option>
                      <option *ngFor="let m of makes" [value]="m.id">{{ m.name }}</option>
                    </select>
                  </div>

                  <div class="col-md-2">
                    <label>Unit</label>
                    <select class="form-control" [formControl]="selectedUnitControl">
                      <option *ngFor="let u of units">{{ u }}</option>
                    </select>
                  </div>

                  <div class="col-md-1">
                    <label>Rate</label>
                    <input type="number" class="form-control" [formControl]="rateControl" />
                  </div>

                  <div class="col-md-1">
                    <label>Qty</label>
                    <input type="number" class="form-control" [formControl]="quantityControl" />
                  </div>

                  <div class="col-md-1 d-flex align-items-end">
                    <button type="button" class="btn btn-info w-100" (click)="addRawMaterial()">Add</button>
                  </div>
                </div>

                <div class="row mt-2">
                  <div class="col-md-2 offset-md-10">
                    <label>Amount</label>
                    <input type="number" class="form-control" [formControl]="amountControl" [disabled]="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Raw Material Table -->
        <div class="row">
          <div class="col-md-12">
            <div class="callout callout-info">
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Item No.</th>
                    <th>Raw Material</th>
                    <th>Make</th>
                    <th>Quantity</th>
                    <th>Unit</th>
                    <th>Rate</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody formArrayName="items">
                  <tr *ngFor="let item of items.controls; let i = index" [formGroupName]="i">
                    <td>{{ i + 1 }}</td>
                    <td>{{ getRawMaterialName(item.get("rawMaterialsId")?.value) }}</td>
                    <td>{{ getMakeName(item.get("makeId")?.value) }}</td>
                    <td>{{ item.get("quantity")?.value }}</td>
                    <td>{{ item.get("unit")?.value }}</td>
                    <td>{{ item.get("rate")?.value }}</td>
                    <td>{{ item.get("amount")?.value }}</td>
                    <td>
                     <button class="btn btn-outline-danger btn-xs" (click)="removeRawMaterial(i)">
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
                  <input type="number" class="form-control" [value]="grandTotal" readonly />
                </div>
              </div>

              <!-- Buttons -->
              <div class="row mt-3">
                <div class="col-md-6">
                  <button type="button" class="btn btn-success w-100" (click)="generateInvoice()">Generate</button>
                </div>
                <div class="col-md-6 text-end">
                  <button type="button" class="btn btn-danger w-100" (click)="router.navigate(['/purchase-orders'])">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</div>
`, styles: ["/* src/app/components/add-po/add-po.css */\n.wrapper {\n  padding: 20px;\n  background-color: #f4f6f9;\n  min-height: 100vh;\n}\n.card {\n  border-radius: 8px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n  padding: 0;\n}\n.card-header {\n  background-color: #007bff;\n  color: white;\n  font-weight: 600;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  padding: 10px 15px;\n}\n.card.card-cyan .card-header {\n  background-color: #17a2b8;\n}\n.card-body {\n  padding: 15px;\n}\n.form-group {\n  margin-bottom: 12px;\n}\n.form-control {\n  border-radius: 4px;\n  padding: 6px 10px;\n  font-size: 14px;\n}\n.callout {\n  background-color: #e9f7fd;\n  border-left: 5px solid #17a2b8;\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 20px;\n}\ntable.table {\n  width: 100%;\n  border-collapse: collapse;\n  background: #ffffff;\n}\ntable.table th,\ntable.table td {\n  padding: 8px 10px;\n  text-align: center;\n  border: 1px solid #dee2e6;\n  font-size: 14px;\n}\ntable.table th {\n  background-color: #f1f1f1;\n  font-weight: 600;\n}\ntable.table tr:hover {\n  background-color: #f9f9f9;\n}\n.btn {\n  border-radius: 4px;\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.btn-outline-danger {\n  border: 1px solid #dc3545;\n  color: #dc3545;\n  background: transparent;\n}\n.btn-outline-danger:hover {\n  background-color: #dc3545;\n  color: white;\n}\n.btn-info {\n  background-color: #17a2b8;\n  border-color: #17a2b8;\n  color: white;\n}\n.btn-info:hover {\n  background-color: #138496;\n  border-color: #117a8b;\n}\n.d-flex.align-items-end {\n  display: flex;\n  align-items: flex-end;\n}\ninput[disabled] {\n  background-color: #e9ecef;\n  cursor: not-allowed;\n}\n.card-body.collapsible {\n  overflow: hidden;\n  transition: max-height 0.4s ease, padding 0.4s ease;\n  max-height: 1000px;\n}\n.card-body.collapsible.collapsed {\n  max-height: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n@media (max-width: 768px) {\n  .row.g-2 > [class*=col-] {\n    margin-bottom: 10px;\n  }\n  .d-flex.align-items-end {\n    justify-content: flex-start;\n  }\n}\n/*# sourceMappingURL=add-po.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: SupplierService }, { type: PoService }, { type: RawMaterialService }, { type: MakeService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddPo, { className: "AddPo", filePath: "src/app/components/add-po/add-po.ts", lineNumber: 30 });
})();
export {
  AddPo
};
//# sourceMappingURL=chunk-YZHZDWYM.js.map
