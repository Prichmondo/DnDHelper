import { Injectable } from '@angular/core'
import { LocalStoreService } from './localStore.service'

export enum LocalKey {
    JWToken, User
}

@Injectable()
export class LocalStoreManagerService {
    
    constructor(private localSotre: LocalStoreService){
        
    }

    get(key:LocalKey, fallback:Function = ()=>{ return null }): any {
        var item = this.localSotre.get(LocalKey[key], fallback);
        return item;
    }

    set(key:LocalKey, data:any){
        this.localSotre.set(LocalKey[key], data);    
    }
    
    delete(key:LocalKey){
        this.localSotre.delete(LocalKey[key]);
    }
    
}