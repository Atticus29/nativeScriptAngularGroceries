import { Component } from "@angular/core";
import { LoginComponent } from "./pages/login/login.component";
import { ListComponent } from "./pages/list/list.component";

@Component({
  selector: "main",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent{}

export const routes = [
  { path: "",
component: LoginComponent },
{ path: "list", component: ListComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ListComponent
];
