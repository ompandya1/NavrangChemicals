import {
  ProductService
} from "./chunk-XUIXJ5QK.js";
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QAWYXZDT.js";
import "./chunk-46DXP6YY.js";

// src/app/pages/product-master/product-master.ts
var _c0 = (a0) => ["/edit-product", a0];
function ProductMaster_tr_32_Template(rf, ctx) {
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "button", 13);
    \u0275\u0275element(13, "i", 14);
    \u0275\u0275text(14, " Edit ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const Product_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(Product_r1.productName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(Product_r1.companyName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(Product_r1.catagoryName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(Product_r1.productPrice);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, Product_r1.id));
  }
}
var ProductMaster = class _ProductMaster {
  service;
  cd;
  Product = [];
  searchTerm = "";
  constructor(service, cd) {
    this.service = service;
    this.cd = cd;
  }
  ngOnInit() {
    this.service.getAllProducts().subscribe({
      next: (data) => {
        this.Product = data;
        this.cd.markForCheck();
        console.log("Products from backend:", this.Product);
      },
      error: (err) => console.error("Error fetching parties:", err)
    });
  }
  filteredProducts() {
    const term = this.searchTerm.toLowerCase();
    return this.Product.filter((p) => p.productName.toLowerCase().includes(term) || p.catagoryName.toLowerCase().includes(term) || p.companyName.toLowerCase().includes(term) || p.productPrice.toPrecision().includes(term));
  }
  static \u0275fac = function ProductMaster_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductMaster)(\u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductMaster, selectors: [["app-product-master"]], decls: 33, vars: 2, consts: [[1, "wrapper"], [1, "main-content"], [1, "content-header"], [1, "container-fluid"], [1, "content"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], ["routerLink", "/add-product", 1, "btn", "btn-primary", "ms-auto"], [1, "card-body"], ["type", "text", "placeholder", "Search...", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], [1, "table", "table-bordered", "table-hover", 2, "text-align", "center"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-success", "btn-sm", "me-1", 3, "routerLink"], [1, "fa", "fa-pencil-square"]], template: function ProductMaster_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "h3");
      \u0275\u0275text(5, "Product");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 3)(8, "div", 5)(9, "div", 6)(10, "h3", 7);
      \u0275\u0275text(11, "Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275text(13, " Add a new product ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9)(15, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ProductMaster_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "table", 11)(17, "thead")(18, "tr")(19, "th");
      \u0275\u0275text(20, "Sr.No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th");
      \u0275\u0275text(22, "Product Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th");
      \u0275\u0275text(24, "Catagory Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26, "Company Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "Product Price");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "tbody");
      \u0275\u0275template(32, ProductMaster_tr_32_Template, 15, 8, "tr", 12);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(17);
      \u0275\u0275property("ngForOf", ctx.filteredProducts());
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductMaster, [{
    type: Component,
    args: [{ selector: "app-product-master", imports: [CommonModule, FormsModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="wrapper">
  <div class="main-content">
    <section class="content-header">
      <div class="container-fluid">
        <h3>Product</h3>
      </div>
    </section>

    <section class="content">
      <div class="container-fluid">
        <div class="card">
          <div
            class="card-header d-flex justify-content-between align-items-center"
          >
            <h3 class="card-title mb-0">Details</h3>
            <button class="btn btn-primary ms-auto" routerLink="/add-product">
              Add a new product
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
                  <th>Product Name</th>
                  <th>Catagory Name</th>
                  <th>Company Name</th>
                  <th>Product Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let Product of filteredProducts(); let i = index">
                  <td>{{ i + 1 }}</td>
                  <td>{{ Product.productName }}</td>
                  <td>{{ Product.companyName }}</td>
                  <td>{{ Product.catagoryName }}</td>
                  <td>{{ Product.productPrice }}</td>

                  <!-- Actions Column -->
                  <td>
                    <button
                          class="btn btn-outline-success btn-sm me-1"
                          [routerLink]="['/edit-product', Product.id]"
                        >
                          <i class="fa fa-pencil-square"></i> Edit
                        </button>
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

` }]
  }], () => [{ type: ProductService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductMaster, { className: "ProductMaster", filePath: "src/app/pages/product-master/product-master.ts", lineNumber: 17 });
})();
export {
  ProductMaster
};
//# sourceMappingURL=chunk-4SY3XL5R.js.map
