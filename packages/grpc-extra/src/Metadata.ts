
import clone from 'lodash.clone';
import cloneDeepWith from 'lodash.clonedeepwith';

const metadataStorage = new WeakMap<Metadata, any>();

function metadataCloneValue(value: string | ArrayBuffer) {
  if(value instanceof ArrayBuffer) {
    if(typeof (<any>ArrayBuffer).transfer === 'function') {
      return (<any>ArrayBuffer).transfer(value);
    } else {
      return value.slice(0);
    }
  } else {
    return clone(value);
  }
}

export class Metadata {

  constructor() {
    metadataStorage.set(this, {});
  }

  add(key: string, value: string | ArrayBuffer) {
    const storedValue = metadataStorage.get(this)[key];
    if(Array.isArray(storedValue)) {
      storedValue.push(value);
    } else {
      this.set(key, value);
    }
  }

  clone(): Metadata {
    const clonedMap = new Metadata();
    metadataStorage.set(clonedMap, this.getMap());
    return clonedMap;
  }

  get(key: string): Array<string | ArrayBuffer> {
    let value = metadataStorage.get(this)[key];
    if(Array.isArray(value)) {
      return cloneDeepWith(value, metadataCloneValue);
    } else {
      return [];
    }
  }

  getMap(): {[key:string]: string | ArrayBuffer} {
    return cloneDeepWith(metadataStorage.get(this), metadataCloneValue);
  }

  remove(key: string) {
    delete metadataStorage.get(this)[key];
  }

  set(key: string, value: string | ArrayBuffer) {
    metadataStorage.get(this)[key] = [value];
  }
}
