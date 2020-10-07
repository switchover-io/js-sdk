import { Evaluator } from "../src/Evaluator"

const config = [{
    name: "toggle-001",
    status: 2,
    strategy: 3,
    conditions: [{
        key: 'key01',
        operator: {
            name: 'equal',
            value: 'aValue002'
        },
    },
    {
        key: 'key02',
        operator: {
            name: 'equal',
            value: 'some_OtherValue'
        }
    }]
}];


test('test evaluation always active', () => {
    const evaluator = new Evaluator();


    const context = {
        "otherKey01" : "aValue001"
    }
    expect(evaluator.evaluate(config, 'toggle-001', context, false))
        .toBeTruthy();
})

test('test evaluation always inactive', () => {
    const evaluator = new Evaluator();

    const context = {
        "otherKey01" : "aValue001"
    }

    const testConfig = [
        Object.assign(config[0], { status: 4})
    ] 

    expect(evaluator.evaluate(testConfig, 'toggle-001', context, true))
        .toBeFalsy();
})
