import { Injectable } from '@angular/core'

@Injectable()
export class LocalStoreService{
    
    get(key:string, fallback:Function){
    
        var data = JSON.parse(window.localStorage.getItem(key));
        
        if(data === null){
            data = fallback();
            window.localStorage.setItem(key, JSON.stringify(data));
        }
        
        return data;
    }

    set(key:string, data:any){
        window.localStorage.setItem(key, JSON.stringify(data));    
    }
    
    delete(key:string){
        window.localStorage.removeItem(key);
    }
    
}