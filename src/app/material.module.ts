import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav'
//*tablas
import { MatListModule } from '@angular/material/list'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
//
import { MatCardModule} from '@angular/material/card'
import { MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule} from '@angular/material/core'
import { NgxMatFileInputModule} from '@angular-material-components/file-input'
import { MatDialogModule} from '@angular/material/dialog'
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  exports: [
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatFileInputModule,
    MatDialogModule,
    MatDividerModule,
    MatSnackBarModule
  ]
})

export class MaterialModule{}
