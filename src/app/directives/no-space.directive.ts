/*
 * Copyright (c) 2021
 *    Reliant Business Valuation, LLC - http://www.reliantvalue.com
 *    Author: Harshil Patel - harshil@internalvaluation.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[noSpace]'
})

export class NoSpaceDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('keydown', ['$event']) onKeyDown(event:any): any {
    // Check this logic only when "Space" key is pressed
    if(event.keyCode === 32) {
      const initialValue = this._el.nativeElement.value + String.fromCharCode(event.keyCode);
      if (initialValue.startsWith(' ')) {
        this._el.nativeElement.value = initialValue.trim();
      } else {
        this._el.nativeElement.value = initialValue.replace(/  +/g, ' ');
      }
      event.preventDefault();
    }
  }

}
