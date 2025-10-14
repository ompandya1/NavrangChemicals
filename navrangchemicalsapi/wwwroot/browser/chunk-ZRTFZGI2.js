import {
  RawMaterialInwardService
} from "./chunk-7ZAWF53U.js";
import {
  PoService
} from "./chunk-DLP4VYSU.js";
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-QAWYXZDT.js";
import "./chunk-46DXP6YY.js";

// src/app/components/add-raw-material-inward/add-raw-material-inward.ts
function AddRawMaterialInward_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const po_r1 = ctx.$implicit;
    \u0275\u0275property("ngValue", po_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", po_r1.id, " - ", po_r1.supplier.name, " ");
  }
}
function AddRawMaterialInward_div_12_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const rm_r2 = ctx.$implicit;
    \u0275\u0275property("ngValue", rm_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", rm_r2.name, " ");
  }
}
function AddRawMaterialInward_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "label");
    \u0275\u0275text(4, "Raw Material");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5)(6, "select", 11)(7, "option", 7);
    \u0275\u0275text(8, "Select Raw Material");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AddRawMaterialInward_div_12_option_9_Template, 2, 2, "option", 8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(10, "br");
    \u0275\u0275elementStart(11, "div", 3)(12, "div", 4)(13, "label");
    \u0275\u0275text(14, "Inward Date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 12);
    \u0275\u0275element(16, "input", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.rawMaterials);
  }
}
function AddRawMaterialInward_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h3", 16);
    \u0275\u0275text(3, "Supplier Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 17)(5, "p")(6, "b");
    \u0275\u0275text(7, "Supplier Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p")(10, "b");
    \u0275\u0275text(11, "Mobile:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p")(14, "b");
    \u0275\u0275text(15, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r2.supplier == null ? null : ctx_r2.supplier.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.supplier == null ? null : ctx_r2.supplier.phone);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.supplier == null ? null : ctx_r2.supplier.email);
  }
}
function AddRawMaterialInward_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 18)(3, "label");
    \u0275\u0275text(4, "Bags:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275element(6, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18)(8, "label");
    \u0275\u0275text(9, "Kg/Bags:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 18);
    \u0275\u0275element(11, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 18)(13, "label");
    \u0275\u0275text(14, "Gross Qty:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 18);
    \u0275\u0275element(16, "input", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "br");
    \u0275\u0275elementStart(18, "div", 3)(19, "div", 18)(20, "label");
    \u0275\u0275text(21, "Purity (%):");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 18);
    \u0275\u0275element(23, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 18)(25, "label");
    \u0275\u0275text(26, "Real Wt.:");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 18);
    \u0275\u0275element(28, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 18)(30, "button", 24);
    \u0275\u0275listener("click", function AddRawMaterialInward_div_14_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addToList());
    });
    \u0275\u0275text(31, "Add");
    \u0275\u0275elementEnd()()()();
  }
}
function AddRawMaterialInward_div_15_tr_23_Template(rf, ctx) {
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
    \u0275\u0275elementStart(17, "td")(18, "button", 27);
    \u0275\u0275listener("click", function AddRawMaterialInward_div_15_tr_23_Template_button_click_18_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeFromList(i_r6));
    });
    \u0275\u0275text(19, " Remove ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r6 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.inwardDate);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.rawMaterialName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.bags);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.perKg);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.grossQty);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.purity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.realWt);
  }
}
function AddRawMaterialInward_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "table", 25)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Inward Date");
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
    \u0275\u0275text(19, "Real Wt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Action");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, AddRawMaterialInward_div_15_tr_23_Template, 20, 8, "tr", 26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(23);
    \u0275\u0275property("ngForOf", ctx_r2.dataList);
  }
}
function AddRawMaterialInward_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "button", 28);
    \u0275\u0275listener("click", function AddRawMaterialInward_div_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 29);
    \u0275\u0275listener("click", function AddRawMaterialInward_div_16_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dataList = []);
    });
    \u0275\u0275text(4, "Cancel");
    \u0275\u0275elementEnd()();
  }
}
var AddRawMaterialInward = class _AddRawMaterialInward {
  fb;
  inwardService;
  poService;
  router;
  pos = [];
  rawMaterials = [];
  previousRWList = [];
  dataList = [];
  supplier = null;
  selectedPO = null;
  form;
  constructor(fb, inwardService, poService, router) {
    this.fb = fb;
    this.inwardService = inwardService;
    this.poService = poService;
    this.router = router;
  }
  ngOnInit() {
    this.form = this.fb.group({
      purchaseOrderId: [null, Validators.required],
      rawMaterialId: [null, Validators.required],
      inwardDate: [(/* @__PURE__ */ new Date()).toISOString().split("T")[0], Validators.required],
      bags: [0, Validators.required],
      perKg: [0, Validators.required],
      grossQty: [{ value: 0, disabled: true }],
      purity: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      realWt: [{ value: 0, disabled: true }]
    });
    this.loadPOs();
    this.form.get("purchaseOrderId")?.valueChanges.subscribe((val) => {
      console.log("\u{1F525} Selected PO ID:", val);
      if (val)
        this.onPOChange(val);
    });
    this.form.valueChanges.subscribe((val) => {
      const gross = (val.bags || 0) * (val.perKg || 0);
      this.form.patchValue({ grossQty: gross }, { emitEvent: false });
      const real = gross * ((val.purity || 0) / 100);
      this.form.patchValue({ realWt: real }, { emitEvent: false });
    });
  }
  loadPOs() {
    this.poService.getPO().subscribe((res) => this.pos = res);
  }
  onPOChange(purchaseOrderId) {
    const id = Number(purchaseOrderId);
    if (!id || isNaN(id))
      return;
    this.poService.getPOById(id).subscribe((res) => {
      this.selectedPO = res;
      this.supplier = res.supplier || null;
      this.rawMaterials = res.items.filter((i) => i.rawMaterialDto).map((i) => ({
        id: i.rawMaterialDto.id,
        name: i.rawMaterialDto.name,
        price: i.rawMaterialDto.price
      }));
      console.log("RawMaterials for PO:", this.rawMaterials);
    });
  }
  addToList() {
    if (this.form.invalid)
      return;
    const val = this.form.getRawValue();
    const raw = this.rawMaterials.find((r) => r.id == val.rawMaterialId);
    this.dataList.push({
      inwardDate: val.inwardDate,
      rawMaterialId: val.rawMaterialId,
      rawMaterialName: raw?.name ?? "",
      bags: val.bags,
      perKg: val.perKg,
      grossQty: val.grossQty,
      purity: val.purity,
      realWt: val.realWt
    });
    this.form.patchValue({
      rawMaterialId: null,
      bags: 0,
      perKg: 0,
      grossQty: 0,
      purity: 0,
      realWt: 0
    });
  }
  removeFromList(i) {
    this.dataList.splice(i, 1);
  }
  save() {
    if (!this.dataList.length)
      return;
    const poId = this.form.get("purchaseOrderId")?.value;
    if (!poId) {
      alert("\u26A0\uFE0F Please select a Purchase Order first");
      return;
    }
    this.dataList.forEach((item) => {
      const payload = {
        purchaseOrderId: Number(poId),
        rawMaterialId: Number(item.rawMaterialId),
        supplierId: this.supplier?.id ?? 0,
        inwardDate: new Date(item.inwardDate).toISOString(),
        bags: Number(item.bags),
        perKg: Number(item.perKg),
        grossQty: Number(item.grossQty),
        purity: Number(item.purity),
        realWt: Number(item.realWt)
      };
      this.inwardService.addInward(payload).subscribe({
        next: (res) => {
          console.log("\u2705 Saved:", res);
          this.router.navigate(["/raw-material-inward"]);
        },
        error: (err) => console.error("\u274C Error:", err)
      });
    });
  }
  static \u0275fac = function AddRawMaterialInward_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddRawMaterialInward)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(RawMaterialInwardService), \u0275\u0275directiveInject(PoService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddRawMaterialInward, selectors: [["app-add-raw-material-inward"]], decls: 17, vars: 8, consts: [[1, "content"], [1, "container-fluid", 3, "formGroup"], [1, "callout", "callout-info"], [1, "row"], [1, "col-md-3"], [1, "col-md-9"], ["formControlName", "purchaseOrderId", 1, "form-control"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "callout callout-info", 4, "ngIf"], ["class", "card card-primary", 4, "ngIf"], ["formControlName", "rawMaterialId", 1, "form-control"], [1, "col-md-4"], ["type", "date", "formControlName", "inwardDate", 1, "form-control"], [1, "card", "card-primary"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "col-sm-2"], ["type", "number", "formControlName", "bags", 1, "form-control"], ["type", "number", "formControlName", "perKg", 1, "form-control"], ["type", "number", "formControlName", "grossQty", 1, "form-control"], ["type", "number", "formControlName", "purity", 1, "form-control"], ["type", "number", "formControlName", "realWt", 1, "form-control"], [1, "btn", "btn-info", 3, "click"], [1, "table", "table-bordered", "table-hover"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"]], template: function AddRawMaterialInward_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "label");
      \u0275\u0275text(6, "Select PO :");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div", 5)(8, "select", 6)(9, "option", 7);
      \u0275\u0275text(10, "Select Purchase Order");
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, AddRawMaterialInward_option_11_Template, 2, 3, "option", 8);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(12, AddRawMaterialInward_div_12_Template, 17, 2, "div", 9)(13, AddRawMaterialInward_div_13_Template, 17, 3, "div", 10)(14, AddRawMaterialInward_div_14_Template, 32, 0, "div", 9)(15, AddRawMaterialInward_div_15_Template, 24, 1, "div", 9)(16, AddRawMaterialInward_div_16_Template, 5, 0, "div", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.pos);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.rawMaterials.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedPO);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.rawMaterials.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.dataList.length);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.dataList.length);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddRawMaterialInward, [{
    type: Component,
    args: [{ selector: "app-add-raw-material-inward", imports: [CommonModule, FormsModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: '<section class="content">\n  <div class="container-fluid" [formGroup]="form">\n    <!-- PO Selection -->\n    <div class="callout callout-info">\n      <div class="row">\n        <div class="col-md-3">\n          <label>Select PO :</label>\n        </div>\n        <div class="col-md-9">\n          <select class="form-control" formControlName="purchaseOrderId">\n            <option [ngValue]="null">Select Purchase Order</option>\n            <option *ngFor="let po of pos" [ngValue]="po.id" >\n              {{ po.id }} - {{ po.supplier.name }}\n            </option>\n          </select>\n        </div>\n      </div>\n    </div>\n\n    <!-- Raw Material -->\n    <div *ngIf="rawMaterials.length" class="callout callout-info">\n      <div class="row">\n        <div class="col-md-3"><label>Raw Material</label></div>\n        <div class="col-md-9">\n          <select class="form-control" formControlName="rawMaterialId">\n  <option [ngValue]="null">Select Raw Material</option>\n  <option *ngFor="let rm of rawMaterials" [ngValue]="rm.id">\n    {{ rm.name }}\n  </option>\n</select>\n\n        </div>\n      </div>\n      <br />\n      <div class="row">\n        <div class="col-md-3"><label>Inward Date</label></div>\n        <div class="col-md-4">\n          <input\n            type="date"\n            class="form-control"\n            formControlName="inwardDate"\n          />\n        </div>\n      </div>\n    </div>\n\n    <!-- Supplier Details -->\n    <div *ngIf="selectedPO" class="card card-primary">\n      <div class="card-header">\n        <h3 class="card-title">Supplier Details</h3>\n      </div>\n      <div class="card-body">\n        <p><b>Supplier Name:</b> {{ supplier?.name }}</p>\n        <p><b>Mobile:</b> {{ supplier?.phone }}</p>\n        <p><b>Email:</b> {{ supplier?.email }}</p>\n      </div>\n    </div>\n\n    <!-- Details Form -->\n    <div *ngIf="rawMaterials.length" class="callout callout-info">\n      <div class="row">\n        <div class="col-sm-2"><label>Bags:</label></div>\n        <div class="col-sm-2">\n          <input type="number" class="form-control" formControlName="bags" />\n        </div>\n\n        <div class="col-sm-2"><label>Kg/Bags:</label></div>\n        <div class="col-sm-2">\n          <input type="number" class="form-control" formControlName="perKg" />\n        </div>\n\n        <div class="col-sm-2"><label>Gross Qty:</label></div>\n        <div class="col-sm-2">\n          <input\n            type="number"\n            class="form-control"\n            formControlName="grossQty"\n          />\n        </div>\n      </div>\n\n      <br />\n\n      <div class="row">\n        <div class="col-sm-2"><label>Purity (%):</label></div>\n        <div class="col-sm-2">\n          <input type="number" class="form-control" formControlName="purity" />\n        </div>\n\n        <div class="col-sm-2"><label>Real Wt.:</label></div>\n        <div class="col-sm-2">\n          <input type="number" class="form-control" formControlName="realWt" />\n        </div>\n\n        <div class="col-sm-2">\n          <button class="btn btn-info" (click)="addToList()">Add</button>\n        </div>\n      </div>\n    </div>\n\n    <!-- Dispatch List -->\n    <div *ngIf="dataList.length" class="callout callout-info">\n      <table class="table table-bordered table-hover">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Inward Date</th>\n            <th>Raw Material</th>\n            <th>Bags</th>\n            <th>Kg/Bags</th>\n            <th>Gross Qty</th>\n            <th>Purity</th>\n            <th>Real Wt</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor="let item of dataList; let i = index">\n            <td>{{ i + 1 }}</td>\n            <td>{{ item.inwardDate }}</td>\n            <td>{{ item.rawMaterialName }}</td>\n            <td>{{ item.bags }}</td>\n            <td>{{ item.perKg }}</td>\n            <td>{{ item.grossQty }}</td>\n            <td>{{ item.purity }}</td>\n            <td>{{ item.realWt }}</td>\n            <td>\n              <button class="btn btn-danger btn-sm" (click)="removeFromList(i)">\n                Remove\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <!-- Save Buttons -->\n    <div *ngIf="dataList.length" class="callout callout-info">\n      <button class="btn btn-success" (click)="save()">Save</button>\n      <button class="btn btn-danger" (click)="dataList = []">Cancel</button>\n    </div>\n  </div>\n</section>\n' }]
  }], () => [{ type: FormBuilder }, { type: RawMaterialInwardService }, { type: PoService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddRawMaterialInward, { className: "AddRawMaterialInward", filePath: "src/app/components/add-raw-material-inward/add-raw-material-inward.ts", lineNumber: 19 });
})();
export {
  AddRawMaterialInward
};
//# sourceMappingURL=chunk-ZRTFZGI2.js.map
