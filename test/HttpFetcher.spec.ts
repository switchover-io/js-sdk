import { HttpFetcher } from "../src/HttpFetcher"

function createXhrMock(status, data) {
    const xhrMock = {
        open: jest.fn(),
        send: jest.fn(),
        setRequestHeader: jest.fn(),
        getResponseHeader: jest.fn(),
        status,
        responseText: JSON.stringify(data),
    }

    setTimeout(() => {
        // @ts-ignore
        xhrMock['onload']();
      }, 1);

    return () => xhrMock;
}


test('test http fetch', async () => {

    const fetcher = new HttpFetcher()

    // @ts-ignore
    window.XMLHttpRequest = jest.fn().mockImplementation(createXhrMock(200, [{
        name: "toggle1"
    }]))

    const response = await fetcher.fetchAll('SKD_KEY');
    
    expect(response.payload).not.toBeNull();
    expect(response.payload[0].name).toBe("toggle1");
})

test('test http fetch 304', async () => {

    const fetcher = new HttpFetcher()

    // @ts-ignore
    window.XMLHttpRequest = jest.fn().mockImplementation(createXhrMock(304, [{
        name: "toggle1"
    }]))

    const response = await fetcher.fetchAll('SKD_KEY');
    
    expect(response).toBeNull();
})

test('test http fetch 200 and lastModified', async () => {

    const fetcher = new HttpFetcher()

    // @ts-ignore
    window.XMLHttpRequest = jest.fn().mockImplementation(createXhrMock(200, [{
        name: "toggle1"
    }]))

    const response = await fetcher.fetchAll('SKD_KEY', 'some_date');
    
    expect(response.payload).not.toBeNull();
    expect(response.payload[0].name).toBe("toggle1");
})

