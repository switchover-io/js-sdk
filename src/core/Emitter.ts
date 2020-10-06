
type Listener = (data?: any) => void;

export class EventEmitter {

    _events: Record<string, Listener[]> = {};

    public on(eventKey: string, fn: Listener) : void {
        this._events[eventKey] = (this._events[eventKey] || []).concat(fn)
    }

    public off(eventKey: string, fn: Listener) : void {
        this._events[eventKey] = (this._events[eventKey] || []).filter(f => f !== fn);
    }

    public getListeners(eventKey: string) : Listener[] {
        return this._events[eventKey] || [];
    }

    public emit(eventKey: string, data?: any) : void {
        (this._events[eventKey] || []).forEach(fn => {
            fn(data);
        });
    }   

    /*
    public on(event: string, callback: (params) => void) {
        if (!this._events[event]) {
            this._events[event] = [];
        }
        this._events[event].push(callback);
    }

    public onPromise(event: string) : Promise<void> {
        return new Promise( (resolve, _) => {
            this.on(event, resolve);
        });
    }

    public emit(event: string, params = null) {
        if (this._events[event]) {
            for (let i in this._events[event]) {
                this._events[event][i](params)
            }
        }
    } */
}