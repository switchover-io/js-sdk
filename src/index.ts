import { Options, LogLevel, Logger, Client, Evaluator, EventEmitter, MemoryCache } from "switchover-js-core";
import { HttpFetcher } from "./HttpFetcher";

export { Options, LogLevel, Client } from "switchover-js-core";
export { HttpFetcher } from "./HttpFetcher";

/**
     * Create a new client for you given SDK-KEY. You should create only one client per sdkkey accross your application.
     * 
     * You can provide several options:
     * 
     * - onInit: callback when client is fully initialized and toggles are fetched
     * - onUpdate: callback when autoRefresh is enabled and toggles have been updated on server-side
     * - autoRefresh: set to true if you want to enable auto refreshing toggles
     * - refreshInterval: interval in seconds for polling the toggle endpoints. Default is 60 seconds. 
     * 
     * @param sdkKey 
     * @param options 
     * @param logLevel 
     */
    export function createClient(sdkKey: string, options?:Options, logLevel?: LogLevel) : Client {
    
        const baseOptions = options || { autoRefresh: false }
        return new Client(
            new Evaluator(),
            new EventEmitter(),
            new MemoryCache(),
            new HttpFetcher(Logger.createLogger(logLevel)),
            sdkKey,
            baseOptions,
            logLevel);
    }


