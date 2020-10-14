export { LogLevel, Options } from 'switchover-js-core' 
import { Client, Evaluator, Options, EventEmitter, LogLevel, MemoryCache } from "switchover-js-core";
import { HttpFetcher } from "./HttpFetcher";


export namespace Switchover {


    export function createClient(sdkKey: string, logLevel?: LogLevel) : Client {
        const options:Options = { autoRefresh: false };
        return new Client(
            new Evaluator(),
            new EventEmitter(),
            new MemoryCache(),
            new HttpFetcher(),
            sdkKey,
            options,
            logLevel);
    }

    export function createClientWithOptions(sdkKey: string, options: Options, logLevel?: LogLevel) : Client {
        return new Client(
            new Evaluator(),
            new EventEmitter(),
            new MemoryCache(),
            new HttpFetcher(),
            sdkKey,
            options,
            logLevel);
    }


}