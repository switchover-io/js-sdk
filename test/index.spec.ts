import Switchover from '../src/index';

test('create default client not null', () => {    
    const client = Switchover.createClient('key');
    expect(client).not.toBeNull();
});

test('create client with auto refresh', () => {
    const client = Switchover.createClientWithOptions('key', {
        autoRefresh: true,
        refreshInterval: 60
    })
    expect(client).not.toBeNull();
});

