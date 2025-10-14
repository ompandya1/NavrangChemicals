import {
  UserService
} from "./chunk-U7SY2SFW.js";
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
  NgClass,
  NgForOf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction4,
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

// src/app/pages/users/users.ts
var _c0 = (a0, a1, a2, a3) => ({ "bg-success": a0, "bg-warning": a1, "bg-danger": a2, "bg-info": a3 });
function Users_tr_36_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function Users_tr_36_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const user_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleStatus(user_r2.id, "deactivate"));
    });
    \u0275\u0275element(1, "i", 19);
    \u0275\u0275text(2, " Deactivate ");
    \u0275\u0275elementEnd();
  }
}
function Users_tr_36_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 20);
    \u0275\u0275listener("click", function Users_tr_36_ng_container_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const user_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleStatus(user_r2.id, "accept"));
    });
    \u0275\u0275element(2, "i", 21);
    \u0275\u0275text(3, " Accept ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 18);
    \u0275\u0275listener("click", function Users_tr_36_ng_container_20_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const user_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleStatus(user_r2.id, "reject"));
    });
    \u0275\u0275element(5, "i", 19);
    \u0275\u0275text(6, " Reject ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function Users_tr_36_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 20);
    \u0275\u0275listener("click", function Users_tr_36_ng_container_21_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const user_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleStatus(user_r2.id, "accept"));
    });
    \u0275\u0275element(2, "i", 21);
    \u0275\u0275text(3, " Accept ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function Users_tr_36_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 20);
    \u0275\u0275listener("click", function Users_tr_36_ng_container_22_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const user_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.handleStatus(user_r2.id, "accept"));
    });
    \u0275\u0275element(2, "i", 21);
    \u0275\u0275text(3, " Active ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function Users_tr_36_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "No Actions");
    \u0275\u0275elementEnd();
  }
}
function Users_tr_36_Template(rf, ctx) {
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
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span", 13);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275elementContainerStart(18, 14);
    \u0275\u0275template(19, Users_tr_36_button_19_Template, 3, 0, "button", 15)(20, Users_tr_36_ng_container_20_Template, 7, 0, "ng-container", 16)(21, Users_tr_36_ng_container_21_Template, 4, 0, "ng-container", 16)(22, Users_tr_36_ng_container_22_Template, 4, 0, "ng-container", 16)(23, Users_tr_36_span_23_Template, 2, 0, "span", 17);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const i_r7 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r7 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", user_r2.fullName || user_r2.username, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.phone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r2.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 13, user_r2.requestedDate, "short"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(16, _c0, user_r2.status === "Active", user_r2.status === "Pending", user_r2.status === "Rejected", user_r2.status === "Inactive"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r2.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngSwitch", user_r2.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "Active");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "Pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "Rejected");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "Inactive");
  }
}
var Users = class _Users {
  userService;
  cd;
  Users = [];
  searchTerm = "";
  constructor(userService, cd) {
    this.userService = userService;
    this.cd = cd;
  }
  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.Users = data;
      this.cd.markForCheck();
      console.log("Users from backend:", data);
    });
  }
  filteredUsers() {
    const term = this.searchTerm.toLowerCase();
    return this.Users.filter((u) => u.role.toLowerCase().includes(term) || u.fullName.toLowerCase().includes(term) || u.phone.toLowerCase().includes(term) || u.email.toLowerCase().includes(term));
  }
  handleStatus(userId, action) {
    console.log(`User ${userId} - Action: ${action}`);
    let newStatus;
    if (action === "accept")
      newStatus = "Active";
    else if (action === "reject")
      newStatus = "Rejected";
    else if (action === "deactivate")
      newStatus = "Inactive";
    else
      return;
    this.userService.updateUserStatus(userId, newStatus).subscribe({
      next: (updatedUser) => {
        const userIndex = this.Users.findIndex((u) => u.id === userId);
        if (userIndex !== -1) {
          this.Users[userIndex] = updatedUser;
          this.cd.markForCheck();
        }
        console.log("User status updated successfully");
        this.userService.getUsers().subscribe({
          next: (freshData) => {
            this.Users = freshData;
            this.cd.markForCheck();
          }
        });
      },
      error: (error) => {
        console.error("Error updating user status:", error);
        alert("Failed to update user status. Please try again.");
      }
    });
  }
  static \u0275fac = function Users_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Users)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Users, selectors: [["app-users"]], decls: 37, vars: 2, consts: [[1, "wrapper"], [1, "main-content"], [1, "content-header"], [1, "container-fluid"], [1, "content"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-0"], ["routerLink", "/add-user", 1, "btn", "btn-primary", "ms-auto"], [1, "card-body"], ["type", "text", "placeholder", "Search...", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], [1, "table", "table-bordered", "table-hover", 2, "text-align", "center"], [4, "ngFor", "ngForOf"], [1, "badge", 3, "ngClass"], [3, "ngSwitch"], ["class", "btn btn-outline-danger btn-sm", 3, "click", 4, "ngSwitchCase"], [4, "ngSwitchCase"], ["class", "text-muted", 4, "ngSwitchDefault"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "fa", "fa-ban"], [1, "btn", "btn-outline-success", "btn-sm", "me-1", 3, "click"], [1, "fa", "fa-check"], [1, "text-muted"]], template: function Users_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "section", 2)(3, "div", 3)(4, "h3");
      \u0275\u0275text(5, "Users");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "section", 4)(7, "div", 3)(8, "div", 5)(9, "div", 6)(10, "h3", 7);
      \u0275\u0275text(11, "Details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 8);
      \u0275\u0275text(13, " Add a new user ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 9)(15, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function Users_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "table", 11)(17, "thead")(18, "tr")(19, "th");
      \u0275\u0275text(20, "Sr.No.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th");
      \u0275\u0275text(22, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th");
      \u0275\u0275text(24, "Mobile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "Role");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th");
      \u0275\u0275text(30, "Requested Date");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "th");
      \u0275\u0275text(32, "status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "th");
      \u0275\u0275text(34, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "tbody");
      \u0275\u0275template(36, Users_tr_36_Template, 24, 21, "tr", 12);
      \u0275\u0275elementEnd()()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance(21);
      \u0275\u0275property("ngForOf", ctx.filteredUsers());
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink, DatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Users, [{
    type: Component,
    args: [{ selector: "app-users", imports: [CommonModule, FormsModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="wrapper">
  <div class="main-content">
    <section class="content-header">
      <div class="container-fluid">
        <h3>Users</h3>
      </div>
    </section>

    <section class="content">
      <div class="container-fluid">
        <div class="card">
          <div
            class="card-header d-flex justify-content-between align-items-center"
          >
            <h3 class="card-title mb-0">Details</h3>
            <button class="btn btn-primary ms-auto" routerLink="/add-user">
              Add a new user
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
                  <th>Full Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Requested Date</th>
                  <th>status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let user of filteredUsers(); let i = index">
                  <td>{{ i + 1 }}</td>
                  <td>{{ user.fullName || user.username }} </td>
                  <td>{{ user.phone }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.role }}</td>
                  <td>{{ user.requestedDate | date : "short" }}</td>
                  <!-- Status Column -->
                  <td>
                    <span
                      class="badge"
                      [ngClass]="{
                        'bg-success': user.status === 'Active',
                        'bg-warning': user.status === 'Pending',
                        'bg-danger': user.status === 'Rejected',
                        'bg-info': user.status === 'Inactive'
                      }"
                    >
                      {{ user.status }}
                    </span>
                  </td>

                  <!-- Actions Column -->
                  <td>
                    <ng-container [ngSwitch]="user.status">
                      <!-- If Active -->
                      <button
                        *ngSwitchCase="'Active'"
                        class="btn btn-outline-danger btn-sm"
                        (click)="handleStatus(user.id, 'deactivate')"
                      >
                        <i class="fa fa-ban"></i> Deactivate
                      </button>

                      <!-- If Pending -->
                      <ng-container *ngSwitchCase="'Pending'">
                        <button
                          class="btn btn-outline-success btn-sm me-1"
                          (click)="handleStatus(user.id, 'accept')"
                        >
                          <i class="fa fa-check"></i> Accept
                        </button>
                        <button
                          class="btn btn-outline-danger btn-sm"
                          (click)="handleStatus(user.id, 'reject')"
                        >
                          <i class="fa fa-ban"></i> Reject
                        </button>
                      </ng-container>
                       <ng-container *ngSwitchCase="'Rejected'">
                        <button
                          class="btn btn-outline-success btn-sm me-1"
                          (click)="handleStatus(user.id, 'accept')"
                        >
                          <i class="fa fa-check"></i> Accept
                        </button>
                        </ng-container>
                       <ng-container *ngSwitchCase="'Inactive'">
                        <button
                          class="btn btn-outline-success btn-sm me-1"
                          (click)="handleStatus(user.id, 'accept')"
                        >
                          <i class="fa fa-check"></i> Active
                        </button>
                        </ng-container>
                      <!-- Default/Other Statuses -->
                      <span *ngSwitchDefault class="text-muted"
                        >No Actions</span
                      >
                    </ng-container>
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
  }], () => [{ type: UserService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Users, { className: "Users", filePath: "src/app/pages/users/users.ts", lineNumber: 16 });
})();
export {
  Users
};
//# sourceMappingURL=chunk-LLKQACXS.js.map
