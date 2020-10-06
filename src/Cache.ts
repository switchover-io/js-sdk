import { ApiResponse } from "./ApiResponse";

export interface Cache {
    setValue(key: string, value: ApiResponse): void;
    getValue(key:string) : ApiResponse;
}