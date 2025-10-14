import {
  SemiFinishedInwardService
} from "./chunk-4CUHHJ2O.js";
import {
  RawMaterialService
} from "./chunk-Q3CQYVQJ.js";
import {
  SemiFinishedService
} from "./chunk-2OPAOAMS.js";
import {
  CheckboxControlValueAccessor,
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
  Router
} from "./chunk-IW3JCNMQ.js";
import {
  CommonModule,
  NgForOf,
  NgIf
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
  ɵɵproperty,
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

// src/app/components/add-semi-finished-inward/add-semi-finished-inward.ts
function AddSemiFinishedInward_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sf_r1 = ctx.$implicit;
    \u0275\u0275property("value", sf_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", sf_r1.name, " ");
  }
}
function AddSemiFinishedInward_div_53_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rm_r3 = ctx.$implicit;
    \u0275\u0275property("value", rm_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rm_r3.name, " ");
  }
}
function AddSemiFinishedInward_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 46)(2, "div", 2)(3, "div", 12)(4, "label", 47);
    \u0275\u0275text(5, "Raw Material");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 48)(7, "option", 23);
    \u0275\u0275text(8, "Select Raw Material");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AddSemiFinishedInward_div_53_option_9_Template, 2, 2, "option", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 26)(11, "label", 49);
    \u0275\u0275text(12, "Bags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 50);
    \u0275\u0275listener("input", function AddSemiFinishedInward_div_53_Template_input_input_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.calculateRGrossQty());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 26)(15, "label", 51);
    \u0275\u0275text(16, "Kg/Bags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 52);
    \u0275\u0275listener("input", function AddSemiFinishedInward_div_53_Template_input_input_17_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.calculateRGrossQty());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 26)(19, "label", 53);
    \u0275\u0275text(20, "Gross Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 55)(23, "div", 26)(24, "label", 56);
    \u0275\u0275text(25, "Purity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 57);
    \u0275\u0275listener("input", function AddSemiFinishedInward_div_53_Template_input_input_26_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.calculateRealWt());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 26)(28, "label", 58);
    \u0275\u0275text(29, "Real Wt.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 15)(32, "button", 60);
    \u0275\u0275listener("click", function AddSemiFinishedInward_div_53_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addRawMaterial());
    });
    \u0275\u0275text(33, "Add");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r3.rawMaterialOptions);
  }
}
function AddSemiFinishedInward_div_54_tr_23_Template(rf, ctx) {
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
    \u0275\u0275elementStart(15, "td")(16, "button", 63);
    \u0275\u0275listener("click", function AddSemiFinishedInward_div_54_tr_23_Template_button_click_16_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeDispatch(i_r6));
    });
    \u0275\u0275text(17, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r7.itemNo);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r7.rawMaterialName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r7.bags);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r7.perKg);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r7.grossQty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r7.purity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r7.realWt);
  }
}
function AddSemiFinishedInward_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 46)(3, "table", 61)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "Item No.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Raw Material");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Bags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Kg/Bags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Gross Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Purity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Real Wt.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, AddSemiFinishedInward_div_54_tr_23_Template, 18, 7, "tr", 62);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r3.dispatchList);
  }
}
function AddSemiFinishedInward_div_66_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "button", 63);
    \u0275\u0275listener("click", function AddSemiFinishedInward_div_66_tr_15_Template_button_click_8_listener() {
      const i_r9 = \u0275\u0275restoreView(_r8).index;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeBag(i_r9));
    });
    \u0275\u0275text(9, "Remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const bag_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bag_r10.bags);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bag_r10.perKg);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(bag_r10.grossQty);
  }
}
function AddSemiFinishedInward_div_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 46)(3, "table", 61)(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "Bags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Kg/Bags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Gross Qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, AddSemiFinishedInward_div_66_tr_15_Template, 10, 3, "tr", 62);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r3.bagList);
  }
}
var AddSemiFinishedInward = class _AddSemiFinishedInward {
  fb;
  inwardService;
  rawMaterialService;
  semiFinishedService;
  router;
  inwardForm;
  bagList = [];
  dispatchList = [];
  semiFinishedOptions = [];
  rawMaterialOptions = [];
  totalGrossQty = 0;
  constructor(fb, inwardService, rawMaterialService, semiFinishedService, router) {
    this.fb = fb;
    this.inwardService = inwardService;
    this.rawMaterialService = rawMaterialService;
    this.semiFinishedService = semiFinishedService;
    this.router = router;
  }
  ngOnInit() {
    this.inwardForm = this.fb.group({
      sfInwardId: [0],
      inwardDate: ["", Validators.required],
      batchNo: ["", Validators.required],
      isOutside: [false],
      semiFinishedId: ["", Validators.required],
      bags: [0],
      kgBags: [0],
      grossQty: [{ value: 0, disabled: true }],
      rawMaterialId: [""],
      rBags: [0],
      rKgBags: [0],
      rGrossQty: [{ value: 0, disabled: true }],
      purity: [0],
      realWt: [{ value: 0, disabled: true }],
      isFinished: [false]
    });
    this.loadDropdowns();
  }
  loadDropdowns() {
    this.semiFinishedService.getAllProducts().subscribe((res) => this.semiFinishedOptions = res);
    this.rawMaterialService.getAllProducts().subscribe((res) => this.rawMaterialOptions = res);
  }
  calculateGrossQty() {
    const bags = this.inwardForm.get("bags")?.value || 0;
    const kgBags = this.inwardForm.get("kgBags")?.value || 0;
    this.inwardForm.patchValue({ grossQty: bags * kgBags });
  }
  calculateRGrossQty() {
    const rBags = this.inwardForm.get("rBags")?.value || 0;
    const rKgBags = this.inwardForm.get("rKgBags")?.value || 0;
    this.inwardForm.patchValue({ rGrossQty: rBags * rKgBags });
    this.calculateRealWt();
  }
  calculateRealWt() {
    const grossQty = this.inwardForm.get("rGrossQty")?.value || 0;
    const purity = this.inwardForm.get("purity")?.value || 0;
    this.inwardForm.patchValue({ realWt: grossQty * purity / 100 });
  }
  addBag() {
    const bag = {
      bags: this.inwardForm.get("bags")?.value,
      perKg: this.inwardForm.get("kgBags")?.value,
      grossQty: this.inwardForm.get("grossQty")?.value
    };
    if (bag.bags > 0 && bag.perKg > 0 && bag.grossQty > 0) {
      this.bagList.push(bag);
      this.updateTotalGrossQty();
      this.inwardForm.patchValue({ bags: 0, kgBags: 0, grossQty: 0 });
    }
  }
  removeBag(index) {
    this.bagList.splice(index, 1);
    this.updateTotalGrossQty();
  }
  updateTotalGrossQty() {
    this.totalGrossQty = this.bagList.reduce((sum, b) => sum + b.grossQty, 0);
  }
  addRawMaterial() {
    const rawMaterialId = this.inwardForm.get("rawMaterialId")?.value;
    const selectedRM = this.rawMaterialOptions.find((rm) => rm.id == rawMaterialId);
    if (!rawMaterialId || !selectedRM)
      return;
    const item = {
      itemNo: this.dispatchList.length + 1,
      rawMaterialId,
      rawMaterialName: selectedRM.name,
      bags: this.inwardForm.get("rBags")?.value,
      perKg: this.inwardForm.get("rKgBags")?.value,
      grossQty: this.inwardForm.get("rGrossQty")?.value,
      purity: this.inwardForm.get("purity")?.value,
      realWt: this.inwardForm.get("realWt")?.value
    };
    if (item.bags > 0 && item.perKg > 0 && item.grossQty > 0) {
      this.dispatchList.push(item);
      this.inwardForm.patchValue({
        rawMaterialId: "",
        rBags: 0,
        rKgBags: 0,
        rGrossQty: 0,
        purity: 0,
        realWt: 0
      });
    }
  }
  removeDispatch(index) {
    this.dispatchList.splice(index, 1);
    this.dispatchList.forEach((d, idx) => d.itemNo = idx + 1);
  }
  onSubmit() {
    if (this.inwardForm.invalid)
      return;
    const totalBags = this.bagList.reduce((sum, b) => sum + b.bags, 0);
    const totalGrossQty = this.bagList.reduce((sum, b) => sum + b.grossQty, 0);
    const dispatchList = this.dispatchList.map((d) => __spreadProps(__spreadValues({}, d), {
      rawMaterialId: +d.rawMaterialId
    }));
    const payload = {
      id: +this.inwardForm.get("sfInwardId")?.value || 0,
      // id instead of sfInwardId
      semiFinishedId: +this.inwardForm.get("semiFinishedId")?.value,
      batchNo: this.inwardForm.get("batchNo")?.value,
      inwardDate: this.inwardForm.get("inwardDate")?.value,
      isOutside: this.inwardForm.get("isOutside")?.value,
      bags: totalBags,
      perKg: 0,
      // or compute an average if needed
      grossQty: totalGrossQty,
      grossTotalQty: totalGrossQty,
      isFinished: this.inwardForm.get("isFinished")?.value
    };
    console.log("Submitting payload:", payload);
    this.inwardService.addInward(payload).subscribe({
      next: (res) => {
        console.log("\u2705 Inward saved successfully", res);
        this.router.navigate(["/semi-finished-inward"]);
        this.resetForm();
      },
      error: (err) => console.error("\u274C Error saving inward", err)
    });
  }
  resetForm() {
    this.inwardForm.reset({ isOutside: false, isFinished: false });
    this.bagList = [];
    this.dispatchList = [];
    this.totalGrossQty = 0;
  }
  static \u0275fac = function AddSemiFinishedInward_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddSemiFinishedInward)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(SemiFinishedInwardService), \u0275\u0275directiveInject(RawMaterialService), \u0275\u0275directiveInject(SemiFinishedService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddSemiFinishedInward, selectors: [["app-semi-finished-inward"]], decls: 67, vars: 7, consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-md-12"], [1, "card", "card-info"], [1, "card-header"], [1, "card-title"], [1, "form-horizontal", 3, "ngSubmit", "formGroup"], [1, "card-body"], [1, "form-group", "row"], ["type", "hidden", "formControlName", "sfInwardId"], ["for", "inwardDate", 1, "col-sm-2", "col-form-label"], [1, "col-sm-3"], ["id", "inwardDate", "type", "date", "formControlName", "inwardDate", 1, "form-control"], ["for", "batchNo", 1, "col-sm-1", "col-form-label"], [1, "col-sm-2"], ["id", "batchNo", "type", "text", "formControlName", "batchNo", "placeholder", "Lot No", 1, "form-control"], [1, "form-check", "col-sm-3", "d-flex", "align-items-center"], ["type", "checkbox", "formControlName", "isOutside", "id", "IsOutside", 1, "form-check-input"], ["for", "IsOutside", 1, "form-check-label", "ml-2"], ["for", "semiFinishedId", 1, "col-sm-2", "col-form-label"], [1, "col-sm-8"], ["id", "semiFinishedId", "formControlName", "semiFinishedId", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "bags", 1, "col-sm-2", "col-form-label"], [1, "col-sm-1"], ["id", "bags", "type", "number", "formControlName", "bags", 1, "form-control", 3, "input"], ["for", "kgBags", 1, "col-sm-1", "col-form-label"], ["id", "kgBags", "type", "number", "formControlName", "kgBags", 1, "form-control", 3, "input"], ["for", "grossQty", 1, "col-sm-1", "col-form-label"], ["id", "grossQty", "type", "number", "formControlName", "grossQty", 1, "form-control"], [1, "col-sm-2", "col-form-label"], ["type", "number", "disabled", "", 1, "form-control", 3, "value"], [1, "col-md-2"], ["type", "button", 1, "btn", "btn-info", 3, "click"], [4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "row", "mt-3"], [1, "col-md-12", "d-flex", "align-items-center", "justify-content-between"], [1, "form-check"], ["type", "checkbox", "formControlName", "isFinished", "id", "isFinished", 1, "form-check-input"], ["for", "isFinished", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-success", "mr-2", 3, "disabled"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [3, "value"], [1, "callout", "callout-info"], ["for", "rawMaterialId"], ["id", "rawMaterialId", "formControlName", "rawMaterialId", 1, "form-control"], ["for", "rBags"], ["id", "rBags", "type", "number", "formControlName", "rBags", 1, "form-control", 3, "input"], ["for", "rKgBags"], ["id", "rKgBags", "type", "number", "formControlName", "rKgBags", 1, "form-control", 3, "input"], ["for", "rGrossQty"], ["id", "rGrossQty", "type", "number", "formControlName", "rGrossQty", 1, "form-control"], [1, "row", "mt-2"], ["for", "purity"], ["id", "purity", "type", "number", "formControlName", "purity", 1, "form-control", 3, "input"], ["for", "realWt"], ["id", "realWt", "type", "number", "formControlName", "realWt", 1, "form-control"], ["type", "button", 1, "btn", "btn-info", "mt-4", 3, "click"], [1, "table", "table-bordered", "table-hover"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"]], template: function AddSemiFinishedInward_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h3", 6);
      \u0275\u0275text(7, "Semi Finished Inward");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "form", 7);
      \u0275\u0275listener("ngSubmit", function AddSemiFinishedInward_Template_form_ngSubmit_8_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9);
      \u0275\u0275element(11, "input", 10);
      \u0275\u0275elementStart(12, "label", 11);
      \u0275\u0275text(13, "Inward Date:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 12);
      \u0275\u0275element(15, "input", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "label", 14);
      \u0275\u0275text(17, "Batch No:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 15);
      \u0275\u0275element(19, "input", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 17);
      \u0275\u0275element(21, "input", 18);
      \u0275\u0275elementStart(22, "label", 19);
      \u0275\u0275text(23, "Is Outside Material");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(24, "div", 9)(25, "label", 20);
      \u0275\u0275text(26, "Semi Finished");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 21)(28, "select", 22)(29, "option", 23);
      \u0275\u0275text(30, "Select Semi Finished");
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, AddSemiFinishedInward_option_31_Template, 2, 2, "option", 24);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 9)(33, "label", 25);
      \u0275\u0275text(34, "Bags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 26)(36, "input", 27);
      \u0275\u0275listener("input", function AddSemiFinishedInward_Template_input_input_36_listener() {
        return ctx.calculateGrossQty();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "label", 28);
      \u0275\u0275text(38, "Kg/Bags");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 15)(40, "input", 29);
      \u0275\u0275listener("input", function AddSemiFinishedInward_Template_input_input_40_listener() {
        return ctx.calculateGrossQty();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "label", 30);
      \u0275\u0275text(42, "Gross Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 15);
      \u0275\u0275element(44, "input", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div", 9)(46, "label", 32);
      \u0275\u0275text(47, "Total Gross Qty");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 15);
      \u0275\u0275element(49, "input", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div", 34)(51, "button", 35);
      \u0275\u0275listener("click", function AddSemiFinishedInward_Template_button_click_51_listener() {
        return ctx.addBag();
      });
      \u0275\u0275text(52, "Add Bags");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(53, AddSemiFinishedInward_div_53_Template, 34, 1, "div", 36)(54, AddSemiFinishedInward_div_54_Template, 24, 1, "div", 37);
      \u0275\u0275elementStart(55, "div", 38)(56, "div", 39)(57, "div", 40);
      \u0275\u0275element(58, "input", 41);
      \u0275\u0275elementStart(59, "label", 42);
      \u0275\u0275text(60, "Is Finished");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div")(62, "button", 43);
      \u0275\u0275text(63, "Save");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "button", 44);
      \u0275\u0275listener("click", function AddSemiFinishedInward_Template_button_click_64_listener() {
        return ctx.resetForm();
      });
      \u0275\u0275text(65, "Cancel");
      \u0275\u0275elementEnd()()()()()()()()();
      \u0275\u0275template(66, AddSemiFinishedInward_div_66_Template, 16, 1, "div", 37);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.inwardForm);
      \u0275\u0275advance(23);
      \u0275\u0275property("ngForOf", ctx.semiFinishedOptions);
      \u0275\u0275advance(18);
      \u0275\u0275property("value", ctx.totalGrossQty);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", !((tmp_3_0 = ctx.inwardForm.get("isOutside")) == null ? null : tmp_3_0.value));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.dispatchList.length > 0);
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.inwardForm.invalid);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.bagList.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ["\n\n.content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background: #f8f9fa;\n}\n.card-info[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0.75rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.card-info[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #17a2b8,\n      #138496);\n  border-radius: 0.75rem 0.75rem 0 0;\n  color: #fff;\n  padding: 1rem 1.25rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.callout[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  margin-bottom: 1.25rem;\n  padding: 1rem 1.25rem;\n  background: #ffffff;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);\n  border-left: 5px solid #17a2b8;\n}\n.callout-info[_ngcontent-%COMP%] {\n  border-left-color: #17a2b8;\n}\n.form-horizontal[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.form-horizontal[_ngcontent-%COMP%]   .col-form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.95rem;\n  color: #495057;\n}\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 0.4rem;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.95rem;\n  border: 1px solid #ced4da;\n  transition: 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #17a2b8;\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.2);\n}\n.form-check-input[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  margin-right: 0.5rem;\n}\n.form-check-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.table[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n.table-bordered[_ngcontent-%COMP%] {\n  border: none;\n}\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f1f3f5;\n  font-weight: 600;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  vertical-align: middle;\n}\n.table-hover[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: rgba(23, 162, 184, 0.08);\n  transition: 0.2s;\n}\n.btn[_ngcontent-%COMP%] {\n  border-radius: 0.4rem;\n  font-size: 0.9rem;\n  padding: 0.45rem 1rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.btn-info[_ngcontent-%COMP%] {\n  background: #17a2b8;\n  border: none;\n}\n.btn-info[_ngcontent-%COMP%]:hover {\n  background: #138496;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background: #28a745;\n  border: none;\n}\n.btn-success[_ngcontent-%COMP%]:hover {\n  background: #218838;\n}\n.btn-danger[_ngcontent-%COMP%] {\n  background: #dc3545;\n  border: none;\n}\n.btn-danger[_ngcontent-%COMP%]:hover {\n  background: #c82333;\n}\n.mt-4[_ngcontent-%COMP%] {\n  margin-top: 1.25rem !important;\n}\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem !important;\n}\n.btn[_ngcontent-%COMP%]    + .btn[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=add-semi-finished-inward.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddSemiFinishedInward, [{
    type: Component,
    args: [{ selector: "app-semi-finished-inward", imports: [CommonModule, FormsModule, ReactiveFormsModule], template: `<section class="content">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card card-info">
          <div class="card-header">
            <h3 class="card-title">Semi Finished Inward</h3>
          </div>

          <!-- \u2705 Single Reactive Form -->
          <form class="form-horizontal" [formGroup]="inwardForm" (ngSubmit)="onSubmit()">
            <div class="card-body">
              
              <!-- Inward Date + Batch + Outside -->
              <div class="form-group row">
                <input type="hidden" formControlName="sfInwardId" />
                
                <label class="col-sm-2 col-form-label" for="inwardDate">Inward Date:</label>
                <div class="col-sm-3">
                  <input id="inwardDate" type="date" formControlName="inwardDate" class="form-control" />
                </div>

                <label class="col-sm-1 col-form-label" for="batchNo">Batch No:</label>
                <div class="col-sm-2">
                  <input id="batchNo" type="text" formControlName="batchNo" class="form-control" placeholder="Lot No" />
                </div>

                <div class="form-check col-sm-3 d-flex align-items-center">
                  <input type="checkbox" formControlName="isOutside" id="IsOutside" class="form-check-input" />
                  <label for="IsOutside" class="form-check-label ml-2">Is Outside Material</label>
                </div>
              </div>

              <!-- Semi Finished -->
              <div class="form-group row">
                <label class="col-sm-2 col-form-label" for="semiFinishedId">Semi Finished</label>
                <div class="col-sm-8">
                  <select id="semiFinishedId" formControlName="semiFinishedId" class="form-control">
                    <option value="">Select Semi Finished</option>
                    <option *ngFor="let sf of semiFinishedOptions" [value]="sf.id">
                      {{ sf.name }}
                    </option>
                  </select>
                </div>
              </div>

              <!-- Bags & Kg -->
              <div class="form-group row">
                <label class="col-sm-2 col-form-label" for="bags">Bags</label>
                <div class="col-sm-1">
                  <input id="bags" type="number" formControlName="bags" class="form-control" (input)="calculateGrossQty()" />
                </div>

                <label class="col-sm-1 col-form-label" for="kgBags">Kg/Bags</label>
                <div class="col-sm-2">
                  <input id="kgBags" type="number" formControlName="kgBags" class="form-control" (input)="calculateGrossQty()" />
                </div>

                <label class="col-sm-1 col-form-label" for="grossQty">Gross Qty</label>
                <div class="col-sm-2">
                  <input id="grossQty" type="number" formControlName="grossQty" class="form-control" />
                </div>
              </div>

              <!-- Total Gross Qty -->
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Total Gross Qty</label>
                <div class="col-sm-2">
                  <input type="number" [value]="totalGrossQty" class="form-control" disabled />
                </div>
                <div class="col-md-2">
                  <button class="btn btn-info" type="button" (click)="addBag()">Add Bags</button>
                </div>
              </div>

              <!-- Raw Material Section -->
              <div *ngIf="!inwardForm.get('isOutside')?.value">
                <div class="callout callout-info">
                  <div class="row">
                    <div class="col-sm-3">
                      <label for="rawMaterialId">Raw Material</label>
                      <select id="rawMaterialId" formControlName="rawMaterialId" class="form-control">
                        <option value="">Select Raw Material</option>
                        <option *ngFor="let rm of rawMaterialOptions" [value]="rm.id">
                          {{ rm.name }}
                        </option>
                      </select>
                    </div>

                    <div class="col-sm-1">
                      <label for="rBags">Bags</label>
                      <input id="rBags" type="number" formControlName="rBags" class="form-control" (input)="calculateRGrossQty()" />
                    </div>

                    <div class="col-sm-1">
                      <label for="rKgBags">Kg/Bags</label>
                      <input id="rKgBags" type="number" formControlName="rKgBags" class="form-control" (input)="calculateRGrossQty()" />
                    </div>

                    <div class="col-sm-1">
                      <label for="rGrossQty">Gross Qty</label>
                      <input id="rGrossQty" type="number" formControlName="rGrossQty" class="form-control" />
                    </div>
                  </div>

                  <div class="row mt-2">
                    <div class="col-sm-1">
                      <label for="purity">Purity</label>
                      <input id="purity" type="number" formControlName="purity" class="form-control" (input)="calculateRealWt()" />
                    </div>
                    <div class="col-sm-1">
                      <label for="realWt">Real Wt.</label>
                      <input id="realWt" type="number" formControlName="realWt" class="form-control" />
                    </div>
                    <div class="col-sm-2">
                      <button class="btn btn-info mt-4" type="button" (click)="addRawMaterial()">Add</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Dispatch List -->
              <div class="row" *ngIf="dispatchList.length > 0">
                <div class="col-md-12">
                  <div class="callout callout-info">
                    <table class="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Item No.</th>
                          <th>Raw Material</th>
                          <th>Bags</th>
                          <th>Kg/Bags</th>
                          <th>Gross Qty</th>
                          <th>Purity</th>
                          <th>Real Wt.</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr *ngFor="let product of dispatchList; let i = index">
                          <td>{{ product.itemNo }}</td>
                          <td>{{ product.rawMaterialName }}</td>
                          <td>{{ product.bags }}</td>
                          <td>{{ product.perKg }}</td>
                          <td>{{ product.grossQty }}</td>
                          <td>{{ product.purity }}</td>
                          <td>{{ product.realWt }}</td>
                          <td>
                            <button class="btn btn-sm btn-danger" type="button" (click)="removeDispatch(i)">Remove</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Footer Actions -->
              <div class="row mt-3">
                <div class="col-md-12 d-flex align-items-center justify-content-between">
                  <div class="form-check">
                    <input type="checkbox" formControlName="isFinished" class="form-check-input" id="isFinished">
                    <label class="form-check-label" for="isFinished">Is Finished</label>
                  </div>

                  <div>
                    <button class="btn btn-success mr-2" type="submit" [disabled]="inwardForm.invalid">Save</button>
                    <button class="btn btn-danger" type="button" (click)="resetForm()">Cancel</button>
                  </div>
                </div>
              </div>

            </div> <!-- /card-body -->
          </form> <!-- \u2705 Form closed here -->
        </div>
      </div>
    </div>

    <!-- Bag List -->
    <div class="row" *ngIf="bagList.length > 0">
      <div class="col-md-12">
        <div class="callout callout-info">
          <table class="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Bags</th>
                <th>Kg/Bags</th>
                <th>Gross Qty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let bag of bagList; let i = index">
                <td>{{ bag.bags }}</td>
                <td>{{ bag.perKg }}</td>
                <td>{{ bag.grossQty }}</td>
                <td>
                  <button class="btn btn-sm btn-danger" type="button" (click)="removeBag(i)">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</section>
`, styles: ["/* src/app/components/add-semi-finished-inward/add-semi-finished-inward.css */\n.content {\n  padding: 1.5rem;\n  background: #f8f9fa;\n}\n.card-info {\n  border: none;\n  border-radius: 0.75rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.card-info .card-header {\n  background:\n    linear-gradient(\n      135deg,\n      #17a2b8,\n      #138496);\n  border-radius: 0.75rem 0.75rem 0 0;\n  color: #fff;\n  padding: 1rem 1.25rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.callout {\n  border-radius: 0.5rem;\n  margin-bottom: 1.25rem;\n  padding: 1rem 1.25rem;\n  background: #ffffff;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);\n  border-left: 5px solid #17a2b8;\n}\n.callout-info {\n  border-left-color: #17a2b8;\n}\n.form-horizontal .form-group {\n  margin-bottom: 1rem;\n}\n.form-horizontal .col-form-label {\n  font-weight: 500;\n  font-size: 0.95rem;\n  color: #495057;\n}\n.form-control {\n  border-radius: 0.4rem;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.95rem;\n  border: 1px solid #ced4da;\n  transition: 0.2s;\n}\n.form-control:focus {\n  border-color: #17a2b8;\n  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.2);\n}\n.form-check-input {\n  transform: scale(1.1);\n  margin-right: 0.5rem;\n}\n.form-check-label {\n  font-size: 0.9rem;\n}\n.table {\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n.table-bordered {\n  border: none;\n}\n.table th {\n  background: #f1f3f5;\n  font-weight: 600;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.table td {\n  font-size: 0.9rem;\n  vertical-align: middle;\n}\n.table-hover tbody tr:hover {\n  background-color: rgba(23, 162, 184, 0.08);\n  transition: 0.2s;\n}\n.btn {\n  border-radius: 0.4rem;\n  font-size: 0.9rem;\n  padding: 0.45rem 1rem;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n.btn-info {\n  background: #17a2b8;\n  border: none;\n}\n.btn-info:hover {\n  background: #138496;\n}\n.btn-success {\n  background: #28a745;\n  border: none;\n}\n.btn-success:hover {\n  background: #218838;\n}\n.btn-danger {\n  background: #dc3545;\n  border: none;\n}\n.btn-danger:hover {\n  background: #c82333;\n}\n.mt-4 {\n  margin-top: 1.25rem !important;\n}\n.mb-2 {\n  margin-bottom: 0.75rem !important;\n}\n.btn + .btn {\n  margin-left: 0.5rem;\n}\n/*# sourceMappingURL=add-semi-finished-inward.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: SemiFinishedInwardService }, { type: RawMaterialService }, { type: SemiFinishedService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddSemiFinishedInward, { className: "AddSemiFinishedInward", filePath: "src/app/components/add-semi-finished-inward/add-semi-finished-inward.ts", lineNumber: 39 });
})();
export {
  AddSemiFinishedInward
};
//# sourceMappingURL=chunk-IG4JHC3Q.js.map
