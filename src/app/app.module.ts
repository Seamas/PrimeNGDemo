import { CityService } from './services/cityservice';
import { CountryService } from './services/countryservice';
import { InputSwitchModule, InputTextareaModule, ListboxModule, InputMaskModule, MultiSelectModule, PasswordModule } from 'primeng/primeng';
import { ChipsModule, ColorPickerModule, DropdownModule, EditorModule, KeyFilterModule, MessageModule } from 'primeng/primeng';
import { CheckboxModule, InputTextModule, RadioButtonModule, ButtonModule, CalendarModule, AutoCompleteModule } from 'primeng/primeng';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InputCalendarComponent } from './components/input-calendar/input-calendar.component';
import { InputAutocompleteComponent } from './components/input-autocomplete/input-autocomplete.component';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import { InputChipsComponent } from './components/input-chips/input-chips.component';
import { InputColorpickerComponent } from './components/input-colorpicker/input-colorpicker.component';
import { InputDropdownComponent } from './components/input-dropdown/input-dropdown.component';
import { InputEditorComponent } from './components/input-editor/input-editor.component';
import { InputKeyfilterComponent } from './components/input-keyfilter/input-keyfilter.component';
import { InputSwitchComponent } from './components/input-switch/input-switch.component';
import { InputInputtextComponent } from './components/input-inputtext/input-inputtext.component';
import { InputInputtextareaComponent } from './components/input-inputtextarea/input-inputtextarea.component';
import { InputInputgroupComponent } from './components/input-inputgroup/input-inputgroup.component';
import { InputListboxComponent } from './components/input-listbox/input-listbox.component';
import { CarService } from './services/carservice';
import { InputMaskComponent } from './components/input-mask/input-mask.component';
import { InputMultiselectComponent } from './components/input-multiselect/input-multiselect.component';
import { InputPasswordComponent } from './components/input-password/input-password.component';
import { InputRadiobuttonComponent } from './components/input-radiobutton/input-radiobutton.component';


@NgModule({
  declarations: [
    AppComponent,
    InputCalendarComponent,
    InputAutocompleteComponent,
    InputCheckboxComponent,
    InputChipsComponent,
    InputColorpickerComponent,
    InputDropdownComponent,
    InputEditorComponent,
    InputKeyfilterComponent,
    InputSwitchComponent,
    InputInputtextComponent,
    InputInputtextareaComponent,
    InputInputgroupComponent,
    InputListboxComponent,
    InputMaskComponent,
    InputMultiselectComponent,
    InputPasswordComponent,
    InputRadiobuttonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpModule,  //

    CheckboxModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    CalendarModule,
    AutoCompleteModule,
    ChipsModule,
    ColorPickerModule,
    DropdownModule,
    EditorModule,
    KeyFilterModule,
    InputSwitchModule,
    InputTextareaModule,
    MessageModule,
    ListboxModule,
    InputMaskModule,
    MultiSelectModule,
    PasswordModule
  ],
  providers: [
    CountryService,
    CityService,
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
