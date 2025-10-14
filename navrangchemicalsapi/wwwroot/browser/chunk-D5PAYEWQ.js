import {
  FinishedProductInwardService
} from "./chunk-ZQWSQRVT.js";
import {
  SemiFinishedService
} from "./chunk-2OPAOAMS.js";
import {
  ProductService
} from "./chunk-XUIXJ5QK.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
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
  NgForOf,
  NgIf
} from "./chunk-JLFMSZUT.js";
import {
  ChangeDetectionStrategy,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QAWYXZDT.js";
import "./chunk-46DXP6YY.js";

// src/app/components/add-finished-product-inward/add-finished-product-inward.ts
function AddFinishedProductInward_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r1 = ctx.$implicit;
    \u0275\u0275property("value", product_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", product_r1.productName, " ");
  }
}
function AddFinishedProductInward_option_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sf_r2 = ctx.$implicit;
    \u0275\u0275property("value", sf_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sf_r2.name, " ");
  }
}
function AddFinishedProductInward_tr_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
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
    \u0275\u0275elementStart(11, "td")(12, "button", 48);
    \u0275\u0275listener("click", function AddFinishedProductInward_tr_94_Template_button_click_12_listener() {
      const i_r4 = \u0275\u0275restoreView(_r3).index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.removeSFFromList(i_r4));
    });
    \u0275\u0275text(13, " Remove ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.semiFinishedName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.bags);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.kgBags);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.grossQty);
  }
}
function AddFinishedProductInward_tr_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 49);
    \u0275\u0275text(2, " No semi-finished products added ");
    \u0275\u0275elementEnd()();
  }
}
var AddFinishedProductInward = class _AddFinishedProductInward {
  fb;
  inwardService;
  productService;
  semiFinishedService;
  router;
  inwardForm;
  semiFinishedForm;
  products = [];
  semiFinishedProducts = [];
  dataList = [];
  bagStock = 0;
  grossQtyStock = 0;
  constructor(fb, inwardService, productService, semiFinishedService, router) {
    this.fb = fb;
    this.inwardService = inwardService;
    this.productService = productService;
    this.semiFinishedService = semiFinishedService;
    this.router = router;
  }
  ngOnInit() {
    this.inwardForm = this.fb.group({
      productId: [0, Validators.required],
      lotNo: ["", Validators.required],
      bags: [0, [Validators.required, Validators.min(1)]],
      kgBags: [0, [Validators.required, Validators.min(1)]],
      grossQty: [0, Validators.required],
      inwardDate: [
        (/* @__PURE__ */ new Date()).toISOString().substring(0, 10),
        Validators.required
      ]
    });
    this.semiFinishedForm = this.fb.group({
      semiFinishedId: [0, Validators.required],
      bags: [0, [Validators.required, Validators.min(1)]],
      kgBags: [0, [Validators.required, Validators.min(1)]],
      grossQty: [0, Validators.required]
    });
    this.loadProducts();
    this.loadSemiFinishedProducts();
    this.inwardForm.valueChanges.subscribe(() => this.calculateGrossQty());
    this.semiFinishedForm.valueChanges.subscribe(() => this.calculateSFGrossQty());
  }
  // --- Load Data ---
  loadProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error("Failed to load finished products", err)
    });
  }
  loadSemiFinishedProducts() {
    this.semiFinishedService.getAllProducts().subscribe({
      next: (data) => this.semiFinishedProducts = data,
      error: (err) => console.error("Failed to load semi-finished products", err)
    });
  }
  // --- Compute Gross Quantity ---
  calculateGrossQty() {
    const bags = this.inwardForm.value.bags || 0;
    const kg = this.inwardForm.value.kgBags || 0;
    this.inwardForm.patchValue({ grossQty: bags * kg }, { emitEvent: false });
  }
  calculateSFGrossQty() {
    const bags = this.semiFinishedForm.value.bags || 0;
    const kg = this.semiFinishedForm.value.kgBags || 0;
    this.semiFinishedForm.patchValue({ grossQty: bags * kg }, { emitEvent: false });
  }
  // --- Semi-Finished Logic ---
  onSemiFinishedChange() {
    const id = Number(this.semiFinishedForm.value.semiFinishedId);
    if (!id)
      return;
    const exists = this.dataList.find((d) => d.semiFinishedId === id);
    if (exists) {
      alert("Product already added to list!");
      this.semiFinishedForm.patchValue({ semiFinishedId: 0 });
      return;
    }
    const selected = this.semiFinishedProducts.find((sf) => sf.id === id);
    if (selected) {
      this.bagStock = selected.bagStock || 0;
      this.grossQtyStock = selected.grossQtyStock || 0;
    }
  }
  addSFToList() {
    const sf = this.semiFinishedForm.value;
    if (sf.bags <= 0 || sf.kgBags <= 0 || sf.grossQty <= 0) {
      alert("Enter valid quantity");
      return;
    }
    if (sf.grossQty > (this.grossQtyStock || 0)) {
      alert("Insufficient stock");
      return;
    }
    const sfId = Number(sf.semiFinishedId);
    const name = this.semiFinishedProducts.find((p) => p.id === sfId)?.name || "";
    const semi = this.semiFinishedForm.value;
    console.log(semi);
    console.log(this.semiFinishedProducts);
    const grossQty = sf.bags * sf.kgBags;
    const newItem = {
      semiFinishedId: sfId,
      semiFinishedName: name,
      bags: sf.bags,
      kgBags: sf.kgBags,
      grossQty
    };
    this.dataList = [...this.dataList, newItem];
    this.semiFinishedForm.reset({
      semiFinishedId: 0,
      bags: 0,
      kgBags: 0,
      grossQty: 0
    });
    this.bagStock = 0;
    this.grossQtyStock = 0;
  }
  removeSFFromList(index) {
    this.dataList = this.dataList.filter((_, i) => i !== index);
  }
  get sfId() {
    return this.semiFinishedForm.get("semiFinishedId");
  }
  get sfBags() {
    return this.semiFinishedForm.get("bags");
  }
  get sfKgBags() {
    return this.semiFinishedForm.get("kgBags");
  }
  get sfGrossQty() {
    return this.semiFinishedForm.get("grossQty");
  }
  // --- Save to Backend ---
  saveInward() {
    if (this.inwardForm.invalid) {
      alert("Please fill all required fields!");
      return;
    }
    if (this.dataList.length === 0) {
      alert("Add at least one semi-finished product!");
      return;
    }
    const selectedProduct = this.products.find((p) => p.id === +this.inwardForm.value.productId);
    const request = {
      productId: +this.inwardForm.value.productId,
      // number
      productName: selectedProduct?.productName || "",
      // optional if API requires
      lotNo: this.inwardForm.value.lotNo,
      bags: this.inwardForm.value.bags,
      perKg: this.inwardForm.value.kgBags,
      grossQty: this.inwardForm.value.grossQty,
      semiFinishedId: this.dataList[0]?.semiFinishedId || 0,
      // pick the first SF
      inwardDate: this.inwardForm.value.inwardDate
    };
    console.log("submitting Inward", request);
    this.inwardService.addInward(request).subscribe({
      next: () => {
        alert("Finished product inward saved successfully!");
        this.inwardForm.reset({
          lotNo: "",
          productId: null,
          bags: 0,
          kgBags: 0,
          grossQty: 0,
          inwardDate: (/* @__PURE__ */ new Date()).toISOString().substring(0, 10)
        });
        this.dataList = [];
        this.router.navigate(["/finished-product-inward"]);
      },
      error: (err) => alert("Failed to save: " + err)
    });
  }
  static \u0275fac = function AddFinishedProductInward_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddFinishedProductInward)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(FinishedProductInwardService), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(SemiFinishedService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddFinishedProductInward, selectors: [["app-add-finished-product-inward"]], decls: 101, vars: 8, consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card", "border-info"], [1, "card-header", "bg-info", "text-white"], [1, "card-title", "mb-0"], [3, "ngSubmit", "formGroup"], [1, "card-body"], [1, "row", "mb-3"], [1, "col-md-3"], ["for", "inwardDate", 1, "form-label"], ["type", "date", "formControlName", "inwardDate", "id", "inwardDate", 1, "form-control"], ["for", "lotNo", 1, "form-label"], ["type", "text", "formControlName", "lotNo", "id", "lotNo", 1, "form-control"], [1, "col-md-6"], ["for", "productId", 1, "form-label"], ["formControlName", "productId", "id", "productId", 1, "form-select"], ["value", "0", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-2"], ["for", "bags", 1, "form-label"], ["type", "number", "formControlName", "bags", 1, "form-control"], ["for", "kgBags", 1, "form-label"], ["type", "number", "formControlName", "kgBags", 1, "form-control"], ["for", "grossQty", 1, "form-label"], ["type", "number", "formControlName", "grossQty", 1, "form-control"], [1, "card", "border-secondary", "mt-3"], [1, "card-header", "bg-secondary", "text-white"], [1, "mb-0"], [1, "row", "g-3", "align-items-end", 3, "formGroup"], [1, "col-md-4"], ["formControlName", "semiFinishedId", 1, "form-select", 3, "change"], ["type", "number", "formControlName", "grossQty", "readonly", "", 1, "form-control"], [1, "col-md-2", "d-grid"], ["type", "button", 1, "btn", "btn-info", "mt-1", 3, "click"], [1, "row", "mt-3", "g-3"], [1, "form-label"], ["type", "number", "disabled", "", 1, "form-control", 3, "value"], [1, "card", "mt-3", "border-light"], [1, "table", "table-bordered", "table-hover"], [1, "table-light"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "card-footer", "d-flex", "justify-content-between", "mt-3"], ["type", "submit", 1, "btn", "btn-success"], ["type", "button", "routerLink", "/semi-finished-inward", 1, "btn", "btn-danger"], [3, "value"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], ["colspan", "6", 1, "text-center", "text-muted"]], template: function AddFinishedProductInward_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3", 6);
      \u0275\u0275text(7, "Finished Product Inward");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "form", 7);
      \u0275\u0275listener("ngSubmit", function AddFinishedProductInward_Template_form_ngSubmit_8_listener() {
        return ctx.saveInward();
      });
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "div", 10)(12, "label", 11);
      \u0275\u0275text(13, "Inward Date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(14, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 10)(16, "label", 13);
      \u0275\u0275text(17, "Lot No");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 15)(20, "label", 16);
      \u0275\u0275text(21, "Finished Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "select", 17)(23, "option", 18);
      \u0275\u0275text(24, "Select Product");
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, AddFinishedProductInward_option_25_Template, 2, 2, "option", 19);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(26, "div", 9)(27, "div", 20)(28, "label", 21);
      \u0275\u0275text(29, "Bags");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 20)(32, "label", 23);
      \u0275\u0275text(33, "Kg/Bags");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "input", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 20)(36, "label", 25);
      \u0275\u0275text(37, "Gross Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "input", 26);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 27)(40, "div", 28)(41, "h5", 29);
      \u0275\u0275text(42, "Semi-Finished Products Used");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 8)(44, "div", 30)(45, "div", 31)(46, "label");
      \u0275\u0275text(47, "Semi-Finished Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "select", 32);
      \u0275\u0275listener("change", function AddFinishedProductInward_Template_select_change_48_listener() {
        return ctx.onSemiFinishedChange();
      });
      \u0275\u0275elementStart(49, "option", 18);
      \u0275\u0275text(50, "Select Semi-Finished");
      \u0275\u0275elementEnd();
      \u0275\u0275template(51, AddFinishedProductInward_option_51_Template, 2, 2, "option", 19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 20)(53, "label");
      \u0275\u0275text(54, "Bags");
      \u0275\u0275elementEnd();
      \u0275\u0275element(55, "input", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 20)(57, "label");
      \u0275\u0275text(58, "Kg/Bags");
      \u0275\u0275elementEnd();
      \u0275\u0275element(59, "input", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div", 20)(61, "label");
      \u0275\u0275text(62, "Gross Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "input", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "div", 34)(65, "button", 35);
      \u0275\u0275listener("click", function AddFinishedProductInward_Template_button_click_65_listener() {
        return ctx.addSFToList();
      });
      \u0275\u0275text(66, " Add ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(67, "div", 36)(68, "div", 20)(69, "label", 37);
      \u0275\u0275text(70, "Bag Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "input", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 20)(73, "label", 37);
      \u0275\u0275text(74, "Gross Qty Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "input", 38);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(76, "div", 39)(77, "div", 8)(78, "table", 40)(79, "thead", 41)(80, "tr")(81, "th");
      \u0275\u0275text(82, "#");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "th");
      \u0275\u0275text(84, "Semi-Finished");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "th");
      \u0275\u0275text(86, "Bags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "th");
      \u0275\u0275text(88, "Kg/Bags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "th");
      \u0275\u0275text(90, "Gross Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "th");
      \u0275\u0275text(92, "Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(93, "tbody");
      \u0275\u0275template(94, AddFinishedProductInward_tr_94_Template, 14, 5, "tr", 42)(95, AddFinishedProductInward_tr_95_Template, 3, 0, "tr", 43);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(96, "div", 44)(97, "button", 45);
      \u0275\u0275text(98, "Save Inward");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "button", 46);
      \u0275\u0275text(100, " Cancel ");
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.inwardForm);
      \u0275\u0275advance(17);
      \u0275\u0275property("ngForOf", ctx.products);
      \u0275\u0275advance(19);
      \u0275\u0275property("formGroup", ctx.semiFinishedForm);
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", ctx.semiFinishedProducts);
      \u0275\u0275advance(20);
      \u0275\u0275property("value", ctx.bagStock);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.grossQtyStock);
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.dataList);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.dataList.length === 0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CommonModule, NgForOf, NgIf], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddFinishedProductInward, [{
    type: Component,
    args: [{ selector: "app-add-finished-product-inward", imports: [ReactiveFormsModule, CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<section class="content">\n  <div class="container-fluid">\n    <!-- Finished Product Inward Form -->\n    <div class="row">\n      <div class="col-12">\n        <div class="card border-info">\n          <div class="card-header bg-info text-white">\n            <h3 class="card-title mb-0">Finished Product Inward</h3>\n          </div>\n          <form [formGroup]="inwardForm" (ngSubmit)="saveInward()">\n            <div class="card-body">\n              <div class="row mb-3">\n                <div class="col-md-3">\n                  <label for="inwardDate" class="form-label">Inward Date</label>\n                  <input\n                    type="date"\n                    class="form-control"\n                    formControlName="inwardDate"\n                    id="inwardDate"\n                  />\n                </div>\n                <div class="col-md-3">\n                  <label for="lotNo" class="form-label">Lot No</label>\n                  <input\n                    type="text"\n                    class="form-control"\n                    formControlName="lotNo"\n                    id="lotNo"\n                  />\n                </div>\n                <div class="col-md-6">\n                  <label for="productId" class="form-label"\n                    >Finished Product</label\n                  >\n                  <select\n                    class="form-select"\n                    formControlName="productId"\n                    id="productId"\n                  >\n                    <option value="0" disabled>Select Product</option>\n                    <option\n                      *ngFor="let product of products"\n                      [value]="product.id"\n                    >\n                      {{ product.productName }}\n                    </option>\n                  </select>\n                </div>\n              </div>\n\n              <div class="row mb-3">\n                <div class="col-md-2">\n                  <label for="bags" class="form-label">Bags</label>\n                  <input\n                    type="number"\n                    class="form-control"\n                    formControlName="bags"\n                  />\n                </div>\n                <div class="col-md-2">\n                  <label for="kgBags" class="form-label">Kg/Bags</label>\n                  <input\n                    type="number"\n                    class="form-control"\n                    formControlName="kgBags"\n                  />\n                </div>\n                <div class="col-md-2">\n                  <label for="grossQty" class="form-label">Gross Qty</label>\n                  <input\n                    type="number"\n                    class="form-control"\n                    formControlName="grossQty"\n                  />\n                </div>\n              </div>\n            </div>\n\n            <!-- Semi-Finished Section -->\n            <div class="card border-secondary mt-3">\n              <div class="card-header bg-secondary text-white">\n                <h5 class="mb-0">Semi-Finished Products Used</h5>\n              </div>\n              <div class="card-body">\n                <div\n                  [formGroup]="semiFinishedForm"\n                  class="row g-3 align-items-end"\n                >\n                  <div class="col-md-4">\n                    <label>Semi-Finished Product</label>\n                    <select\n                      formControlName="semiFinishedId"\n                      class="form-select"\n                      (change)="onSemiFinishedChange()"\n                    >\n                      <option value="0" disabled>Select Semi-Finished</option>\n                      <option\n                        *ngFor="let sf of semiFinishedProducts"\n                        [value]="sf.id"\n                      >\n                        {{ sf.name }}\n                      </option>\n                    </select>\n                  </div>\n                  <div class="col-md-2">\n                    <label>Bags</label>\n                    <input\n                      type="number"\n                      formControlName="bags"\n                      class="form-control"\n                    />\n                  </div>\n                  <div class="col-md-2">\n                    <label>Kg/Bags</label>\n                    <input\n                      type="number"\n                      formControlName="kgBags"\n                      class="form-control"\n                    />\n                  </div>\n                  <div class="col-md-2">\n                    <label>Gross Qty</label>\n                    <input\n                      type="number"\n                      formControlName="grossQty"\n                      class="form-control"\n                      readonly\n                    />\n                  </div>\n                  <div class="col-md-2 d-grid">\n                    <button\n                      type="button"\n                      class="btn btn-info mt-1"\n                      (click)="addSFToList()"\n                    >\n                      Add\n                    </button>\n                  </div>\n                </div>\n\n                <!-- Stock Info -->\n                <div class="row mt-3 g-3">\n                  <div class="col-md-2">\n                    <label class="form-label">Bag Stock</label>\n                    <input\n                      type="number"\n                      class="form-control"\n                      [value]="bagStock"\n                      disabled\n                    />\n                  </div>\n                  <div class="col-md-2">\n                    <label class="form-label">Gross Qty Stock</label>\n                    <input\n                      type="number"\n                      class="form-control"\n                      [value]="grossQtyStock"\n                      disabled\n                    />\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Semi-Finished Table -->\n            <div class="card mt-3 border-light">\n              <div class="card-body">\n                <table class="table table-bordered table-hover">\n                  <thead class="table-light">\n                    <tr>\n                      <th>#</th>\n                      <th>Semi-Finished</th>\n                      <th>Bags</th>\n                      <th>Kg/Bags</th>\n                      <th>Gross Qty</th>\n                      <th>Action</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor="let item of dataList; let i = index">\n                      <td>{{ i + 1 }}</td>\n                      <td>{{ item.semiFinishedName }}</td>\n                      <td>{{ item.bags }}</td>\n                      <td>{{ item.kgBags }}</td>\n                      <td>{{ item.grossQty }}</td>\n                      <td>\n                        <button\n                          type="button"\n                          class="btn btn-sm btn-danger"\n                          (click)="removeSFFromList(i)"\n                        >\n                          Remove\n                        </button>\n                      </td>\n                    </tr>\n                    <tr *ngIf="dataList.length === 0">\n                      <td colspan="6" class="text-center text-muted">\n                        No semi-finished products added\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n\n            <!-- Form Footer -->\n            <div class="card-footer d-flex justify-content-between mt-3">\n              <button type="submit" class="btn btn-success">Save Inward</button>\n              <button\n                type="button"\n                class="btn btn-danger"\n                routerLink="/semi-finished-inward"\n              >\n                Cancel\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n' }]
  }], () => [{ type: FormBuilder }, { type: FinishedProductInwardService }, { type: ProductService }, { type: SemiFinishedService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddFinishedProductInward, { className: "AddFinishedProductInward", filePath: "src/app/components/add-finished-product-inward/add-finished-product-inward.ts", lineNumber: 30 });
})();
export {
  AddFinishedProductInward
};
//# sourceMappingURL=chunk-D5PAYEWQ.js.map
