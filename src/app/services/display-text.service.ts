import { Injectable } from '@angular/core';

@Injectable()
export class DisplayTextService {
  displayText(el, msg) {
    let wrapper = document.createElement('div');
    wrapper.appendChild(document.createTextNode(msg));
    el.appendChild(wrapper);
  }
}
