export interface Operator {
    name: string;
    value: string;
}

export interface Condition {
    key: string;
    operator: Operator;
}

const equalsOp = (condVal, actual) => {
    return condVal === actual;
}

const greaterThanOp = (condVal, actual) => {
    const parsedCondVal = parseToNumber(condVal);
    const parsedActual = parseToNumber(actual);
    return parsedActual > parsedCondVal;
}

const greaterThanEqualOp = (condVal, actual) => {
    return actual >= condVal;
}

function parseToNumber(val) {
    if (typeof val === 'string') {
        const parsed = parseFloat(val);
        if (isNaN(parsed)) {
            throw new Error('Error parsing string value of condition value');
        }
        return parsed;
    }
    if (typeof val === 'number') {
        return val; 
    }
    throw new Error('Error parsing condition values')
}

const operators = {
    "equal" : equalsOp,
    "greater-than" : greaterThanOp,
    "greater-than-equal" : greaterThanEqualOp,
}


export function satisfies(cond: Condition, context) {
    if (context[cond.key]) {
        return false;
    }
    const fn = operators[cond.operator.name];
    return fn(cond.operator.value, context[cond.key]);
}