import { Options } from "./Options";
import { Logger } from "./util/Logger";
import { LogLevel } from "./util/LogLevel";

export class Client {

    private logger: Logger;

    sdkKey: string;
    options: Options


    constructor(sdkKey: string, options: Options, level: LogLevel) {
        this.sdkKey = sdkKey;
        this.options = options

        this.logger = Logger.createLogger(level);

        this.logger.debug('created client, initaliziang...');
    }


}