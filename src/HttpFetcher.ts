import { ApiResponse } from "./ApiResponse";
import { Fetcher } from "./core/Fetcher";
import { Logger } from "./util/Logger";
import { API_ENDPOINT, API_ENDPOINT_FILENAME }  from './sdk-config';

export class HttpFetcher implements Fetcher {

    private logger = Logger.getLogger();
    

    fetchAll(sdkKey: string, lastModified: string): Promise<ApiResponse> {
        throw new Error("Method not implemented.");
    }
    
}