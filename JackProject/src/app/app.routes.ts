import { Routes } from "@angular/router";
import { DataBindingComponent } from "./demos/data-binding/data-binding.component";
import { FileUploadComponent } from "./fileupload/fileupload.component";
import { AboutComponent } from "./institutional/about/about.component";
import { ContactComponent } from "./institutional/contact/contact.component";
import { HomeComponent } from "./navigation/home/home.component";
import { ListProductComponent } from "./products/list-product/list-product.component";

export const rootRouterConfoig: Routes = [
     { path: '', redirectTo: '/home', pathMatch: 'full' },
     { path: 'home', component: HomeComponent },
     { path: 'contact', component: ContactComponent },
     { path: 'about', component: AboutComponent },
     { path: 'feature-data-binding', component: DataBindingComponent },
     { path: 'products', component: ListProductComponent },
     { path: 'fileupload', component: FileUploadComponent }
     
];