import { Injectable } from '@angular/core';
import { INpc } from '../models/inpc';

import { LocalKey } from './local-storage-keys';

@Injectable()
export class LocalStorageManagerService {

  constructor() { console.log(LocalKey); }

  getItem(key: LocalKey) {
    const localKey = LocalKey[key];
    const item = localStorage.getItem(localKey);
    return JSON.parse(item);
  }


  addItem(key: LocalKey, value) {

    const localKey = LocalKey[key];

    const item = JSON.stringify(value);

    localStorage.setItem(localKey, item);

  }

  removeItem(key: LocalKey) {

    const localKey = LocalKey[key];

      localStorage.removeItem(localKey);

  }
}
