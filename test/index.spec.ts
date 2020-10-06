import { isExportDeclaration } from 'typescript';
import { createClient } from '../src';

test('createClient', () => {
    const sdkKey = 'testkey'
    expect(createClient(sdkKey)).toEqual('client');
})

test('playground', () => {

    type Adder = (x: number, y: number) => number;

    const add: Adder = (x, y) => {
        return x + y
    }

    expect(add(2,4)).toBe(6);


})