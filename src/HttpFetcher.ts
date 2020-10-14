import { Logger, Fetcher, ApiResponse } from "switchover-js-core"
import { API_ENDPOINT, API_ENDPOINT_FILENAME }  from './sdk-config';

export class HttpFetcher implements Fetcher {

    private logger = Logger.getLogger();
    

    fetchAll(sdkKey: string, lastModified?: string): Promise<ApiResponse> {
        
        return new Promise( (resolve, reject) => {

            let xhr = new window.XMLHttpRequest();

           

            const apiUrl = API_ENDPOINT+ '/' + sdkKey + '/' + API_ENDPOINT_FILENAME;
            this.logger.debug('Fetch all ' + apiUrl);

            xhr.open('GET', apiUrl);
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.setRequestHeader('Cache-Control', 'no-cache, must-revalidate'); //, proxy-revalidate');

            if (lastModified) {
                this.logger.debug('Fetch using last Header Last-Modified ' + lastModified);
                xhr.setRequestHeader('If-Modified-Since', lastModified)
            }
            xhr.setRequestHeader('X-Switchover-Client-ID', sdkKey);
            xhr.setRequestHeader('X-Switchover-User-Agent', 'switchover-js/1.0');

            xhr.send();
            
            xhr.onload = () => {

                console.log("hier bin ich 4");
                this.logger.debug('Fetch status ' + xhr.status);
                if (xhr.status === 200) {
                    this.logger.debug('Fetched config');
                    const lastModified = xhr.getResponseHeader('Last-Modified')
                    this.logger.debug('Response Last-Modified ' + lastModified);
                    const result = JSON.parse(xhr.responseText);
                    resolve( 
                        { 
                            lastModified: lastModified,
                            payload: result 
                        });
                } 
                else if (xhr.status === 304) {
                    this.logger.debug('Config unchanged');
                    resolve(null);
                }
            }; 
            
            xhr.onerror = () => {
                reject({ status: xhr.status, text: xhr.statusText});
            };

        });
    }
    
}