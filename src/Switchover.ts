import { Client } from "./Client";
import { EventEmitter } from "./core/Emitter";
import { Evaluator } from "./Evaluator";
import { HttpFetcher } from "./HttpFetcher";
import { MemoryCache } from "./MemoryCache";
import { Options } from "./Options";
import { LogLevel } from "./util/LogLevel";

export namespace Switchover {

    export function createClient(sdkKey: string, logLevel?: LogLevel) : Client {
        const options:Options = { polling: false };
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