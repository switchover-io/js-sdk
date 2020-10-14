# Switchover SDK for Client-Side Javascript

![CI](https://github.com/switchover-io/js-sdk/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/switchover-io/js-sdk/branch/main/graph/badge.svg?token=qVOyfv8fmz)](undefined)

## Switchover

Switchover is a Software-As-A-Service for managing feature toggles (aka switches, flags or feature flips) in your application. Use it for Continous Integration, Continous Delivery, A/B-Testing, Canary Releases, Experementing and everything else you can think of.

__Note:__
Use this SDK for client-side javascript projects.

## Getting Started


### Install
Just include Switchover as script tag

```html
<script src=""></script>
```

For npm projects:

```bash
npm i switchover-js-sdk
```

Import the SDK:
```javascript
import Switchover from 'switchover'
```

### Initialize client

You will find your SDK Key on the environment page. Copy it and use it to initialize the client:

```javascript
const client = Switchover.createClient(<SKD_KEY>);

client.onInit( function() {
    const value = client.value(<YOUR_FLAG>, <DEFAULT_VALUE>);

    //initialize your app state, or
    if (value) {
        //do something directly...
    }
});
```

## Documentation

Learn more on the official documentation: <a href="https://support.switch-over.io/docs">https://support.switch-over.io/docs</a>







