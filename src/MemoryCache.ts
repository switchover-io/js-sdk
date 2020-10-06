import { ApiResponse } from "./ApiResponse";
import { Cache } from "./Cache";

export class MemoryCache implements Cache {

    private _cache = {}

    public setValue(key: string, value: ApiResponse) {
        this._cache[key] = value;
    }

    public getValue(key:string) : ApiResponse {
        return this._cache[key]
    }

}