import {
  PartyService
} from "./chunk-7JKBLJBD.js";
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

// src/app/pages/party/party.ts
var _c0 = (a0) => ["/edit-party", a0];
function Party_tr_34_Template(rf, ctx) {
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
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "button", 13);
    \u0275\u0275element(15, "i", 14);
    \u0275\u0275text(16, " Edit ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const party_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r2 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(party_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(party_r1.gstin);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(party_r1.address);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(party_r1.state);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(party_r1.stateCode);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, party_r1.id));
  }
}
var Party = class _Party {
  service;
  cd;
  party = [];
  searchTerm = "";
  constructor(service, cd) {
    this.service = service;
    this.cd = cd;
  }
  ngOnInit() {
    this.service.getParties().subscribe({
      next: (data) => {
        this.party = data;
        this.cd.markForCheck();
        console.log("Parties from backend:", this.party);
      },
      error: (err) => console.error("Error fetching parties:", err)
    });
  }
  filteredParty() {
    const term = this.searchTerm.toLowerCase();
    return this.party.filter((p) => p.name.toLowerCase().includes(term) || p.address.toLowerCase().includes(term) || p.gstin.toLowerCase().includes(term) || p.state.toLowerCase().includes(term) || p.stateCode.toPrecision().includes(term));
  }
  static \u0275fac = function Party_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Party)(\u0275\u0275directiveInject(PartyService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Party, selectors: [["app-party"]], decls: 35, vars: 2, consts: [[1, "wrapper"], [1, "main-content"], [1, "content-header"], [1, "container-fluid"], [1, "content"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], ["routerLink", "/add-party", 1, "btn", "btn-primary", "ms-auto"], [1, "card-body"], ["type", "text", "placeholder", "Search...", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], [1, "table", "table-bordered", "table-hover", 2, "text-align", "center"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-outline-success", "btn-sm", "me-1", 3, "routerLink"], [1, "fa", "fa-pencil-square"]], template: function Party_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "h3");
      \u0275\u0275text(5, "Party");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 3)(8, "div", 5)(9, "div", 6)(10, "h3", 7);
      \u0275\u0275text(11, "Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275text(13, " Add a new party ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9)(15, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function Party_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "table", 11)(17, "thead")(18, "tr")(19, "th");
      \u0275\u0275text(20, "Sr.No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th");
      \u0275\u0275text(22, "Party Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th");
      \u0275\u0275text(24, "GSTIN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30, "StateCode");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "tbody");
      \u0275\u0275template(34, Party_tr_34_Template, 17, 9, "tr", 12);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(19);
      \u0275\u0275property("ngForOf", ctx.filteredParty());
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Party, [{
    type: Component,
    args: [{ selector: "app-party", imports: [CommonModule, FormsModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="wrapper">
  <div class="main-content">
    <section class="content-header">
      <div class="container-fluid">
        <h3>Party</h3>
      </div>
    </section>

    <section class="content">
      <div class="container-fluid">
        <div class="card">
          <div
            class="card-header d-flex justify-content-between align-items-center"
          >
            <h3 class="card-title mb-0">Details</h3>
            <button class="btn btn-primary ms-auto" routerLink="/add-party">
              Add a new party
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
                  <th>Party Name</th>
                  <th>GSTIN</th>
                  <th>Address</th>
                  <th>State</th>
                  <th>StateCode</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let party of filteredParty(); let i = index">
                  <td>{{ i + 1 }}</td>
                  <td>{{ party.name }}</td>
                  <td>{{ party.gstin }}</td>
                  <td>{{ party.address }}</td>
                  <td>{{ party.state }}</td>
                  <td>{{ party.stateCode }}</td>

                  <!-- Actions Column -->
                  <td>
                    <button
                          class="btn btn-outline-success btn-sm me-1"
                          [routerLink]="['/edit-party', party.id]"
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
  }], () => [{ type: PartyService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Party, { className: "Party", filePath: "src/app/pages/party/party.ts", lineNumber: 25 });
})();
export {
  Party
};
//# sourceMappingURL=chunk-OHUPCM53.js.map
