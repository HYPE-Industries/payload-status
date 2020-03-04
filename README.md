# Payload Status
#### Transport Capsule for multidimensional data travelers
Payload Status is a node.js module designed to help elevate some of the promblem with reporting multiple error messages. When working on backend servers and building abstract system, I ran into a promblem. I would call a function that would have built in error codes, and there was no easy to return that the function failed and return a message. The best way to get around this without a library is a promise with a reject and resolve, but this allows you to add multiple logs.

- `foo.cargo( _data )` - sets cargo and returns cargo
- `foo.cargo()` - return cargo
- `foo.payload` - returns cargo
- `foo.payload = data` - sets cargo
- `foo.status()` - returns status (BOOLEAN)
- `foo.status( status )` - sets and returns status (BOOLEAN)
- `foo.success()` - makes status true
- `foo.failure()` - makes status false
- `foo.mayday()` - makes status false and add general error log
- `foo.log( _message, _code )` - add logs
- `foo.log()` - returns array of logs
- `foo.stage()` - returns stage number
- `foo.stage( Number )` - sets and returns stage number
- `foo.manifest()` - return the object of the payload
- `foo.reset()` - reset everything in the payload



## Creating Payload
Creating a new payload is very easy. Make sure the payload module is install and that you import it inside your script. Then you can just create a new payload instance. You don't have to add cargo when you initialize the payload. You can set the status and stage of the payload when it's initialize. Use the command `new Payload( _cargo, _status, _stage );` to initialize a payload.

```javascript
const Payload = require( "payload-status" );

// Create Payload
let response0 = new Payload( "cargo to Transport" );

// Overload
let response1 = new Payload( null, true, 2 ); // no cargo, successful, stage 2
let response2 = new Payload( "Hi!", false, 3 ); // cargo, not successful yet, stage 3
let response3 = new Payload( "Dude", true ); // cargo, successful, stage 0
```

<br>

### Cargo
Cargo is the data that is transferred. Using the method `cargo()` will return what ever the current payload cargo is, and using `cargo( _data )` will update the cargo to what every you want. When you use the method the current cargo will always be returned, this allows you to check if it has been updated. Additionally, you can also use `payload` to get and set the cargo of the payload. You can use the method `hasCargo()`, which will return a boolean, to check weather a payload had cargo.

<b>Usage</b>
```javascript
let response0 = new Payload( "cargo to Transport" ); // cargo to Transport

response0.cargo();               // cargo to Transport
response0.cargo( "new cargo" );  // new cargo
response0.cargo();               // new cargo

response0.payload;               // new cargo
response0.payload = "newest";    // newest
response0.payload;               // newest

response0.hasCargo(); // true
```

<br>

### Status
The status of the payload is weather the payload has been successful. If there is an error while generating the payload cargo, you can set the status to failure to indicate that the payload is not what it should be if it was successful. You can use the `status()` method to both return the current status of the payload and set the status of the payload `status( Boolean )` with a boolean. Either way the method will always return the status of the payload as a Boolean. Additionally, you can use the `success()` method which will change the status to `true`, and the `failure()` method to change status to `false`. If you have a critical or general error you can call `mayday()`, this will set the status to `false` and add a log.

<b>Usage</b>
```javascript
let response0 = new Payload( "cargo to Transport" ); // false

response0.status();        // false
response0.status( true );  // true
response0.status();        // true
response0.status( false ); // false
response0.status();        // false

response0.success();       // true
response0.status();        // true
response0.failure();       // false
response0.status();        // true
```

<br>

### Log
Logging is designed for you to connect multiple errors or messages to the payload. It acts as an array and will also store and instance of the payload at the time of the log, along with the date the log was taken. Use the method `log()` to return the array of logs and `log( _message )` to create a new log. Your message should be a string. In addition to message you can also send codes, so you can check the type of log later, `log( _message, _code )`, this code should again be a string. If you don't want the log to store and instance of the payload you can enable Ghost Ship by placing the boolean `true`, like `log( _message, _code, true )`. Please note when the payload is initialized a log is created. The frozen instance of the payload, capture when a log is created will not include logs.

<b>Usage</b>
```javascript
let response0 = new Payload( "cargo to Transport" ); // false

response0.log();                         // 1 log
response0.log( "Nope", "error1" );       // 2 logs
response0.log( "Rrrr", "error2", true ); // 3 logs // ghost payload
```

<b>Structure</b><br>
The structure of a log object is as followed...
```json
  {
    "code": "(string) code",
    "message": "(string) message",
    "date": "(date) of log",
    "payload": "(obj) frozen instance of payload at time of log"
  }
```

<br>

### Stage
The Stage is an extra label, that helps identify the payload. The stage can be any number you want. By default the stage is set to `0`. Use the method `stage()` to return the stage, and `stage( Number )` to set the stage. Either way both will return the stage number.

<b>Usage</b>
```javascript
let response0 = new Payload( "cargo to Transport"); // stage 0
let response1 = new Payload( "cargo to Transport", false, 2 ); // stage 2

response0.stage();    // stage 0
response0.stage( 5 ); // stage 5
response0.stage();    // stage 5

response1.stage();    // stage 2
response1.stage( 1 ); // stage 1
response1.stage();    // stage 1
```

<br>

### Reset Payload
Resetting the payload will reset everything back to the default. The cargo will be removed, the stage will be set to 0, the logs will be removed, and the status will be false.

<b>Usage</b>
```javascript
let response0 = new Payload( "cargo to Transport" ); // cargo to Transport

response0.reset();
```

<br>

---

## Fixme
- Make mayday trace where the failure is coming from
- add manifest documentation
- write test file
- add license

---

## Changelog
<b>March 4, 2020</b>
- first system build
