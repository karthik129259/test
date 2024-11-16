import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckBoxclickClick2Component } from './components/register-page/check-boxclick-click-2/check-boxclick-click-2.component';
import { EyeAnimationProperty1FrameComponent } from './components/register-page/eye-animation-property-1-frame/eye-animation-property-1-frame.component';
import { EyeAnimationProperty1GroupComponent } from './components/register-page/eye-animation-property-1-group/eye-animation-property-1-group.component';
import { HoverAppshoverHover1Component } from './components/register-page/hover-appshover-hover-1/hover-appshover-hover-1.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckBoxclickClick2Component,
    EyeAnimationProperty1GroupComponent,
    EyeAnimationProperty1FrameComponent,
    HoverAppshoverHover1Component,
    RegisterPageComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
