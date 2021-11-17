import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) { }

  isLoading = new Subject<boolean>();

  show() {
    this.document.body.classList.add('loader-specific');
    this.isLoading.next(true);
  }

  hide() {
    this.document.body.classList.remove('loader-specific');
    this.isLoading.next(false);
  }
}
