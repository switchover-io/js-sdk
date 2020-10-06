import {Client } from '../src/Client';

test('client with polling off', () => {
    const sdkKey = 'testkey'
    const options = {
        polling: false
    }

    const client = new Client(sdkKey, options, 'info');
    
    expect(client.sdkKey).toEqual(sdkKey);
})