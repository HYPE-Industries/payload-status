/* Payload Status - Transport Capsule for multidimensional data travelers
 * Copyright (C) HYPE Industries Cloud Services Division - All Rights Reserved (HYPE-CSD)
 * Dissemination of this information or reproduction of this material is strictly forbidden unless prior written permission is obtained from HYPE Industries.
 * Written by Evan Sellers, March 2020
 */

class Payload {
  /* ==============  CONSTRUCTOR  ============= (PUBLIC)
      Defualt constructor for Payload System

      PARAMATER
        - _cargo (MIXED) => anything you want to carry
        - _status (BOOLEAN) => set status of payload
        - _stage (NUMER) => set stage number identifer
 */
  constructor( _cargo, _status, _stage ) {
    this.default();
    this.cargo( _cargo );
    this.status( _status );
    this.stage( _stage );
    this.log( "Payload Status (" + this.stage() + "): has been inizialized", "init" );
  }

  /* ================  DEFUALT  =============== (PUBLIC)
  Will create and define class instance defaults
  for the class. These defualts start out blank,
  and the stage starts at zero.

  DEFUALTS
    - _cargo  => null
    - _stage  => 0
    - _status => false
    - _log    => []
 */
  default() {
    this._cargo   = null;  // cargo  => data passed along
    this._stage   = 0;     // stage  => label number
    this._status  = false; // status => did succesfully launch
    this._log     = [];    // log    => message log
  }

  /* =================  RESET  ================ (PUBLIC)
  Reset method to reset a class instance. All it
  does is call default but is an alias for default()

  REQUIRES
    - this.default() => to reset class instance
 */
  reset() {
    this.default();
  }

  /* =================  CARGO  ================ (PUBLIC)
    This method allows you to set and return the
    cargo stored in the payload. The cargo is
    what you are carrying and can be anything.

    PARAMATER
      - _cargo (MIXED) => anything you want to set the cargo to

    RETURNS
      Always returns the cargo. This can help you
      verify if it was set correctly.

    REQUIRES
      - this._cargo => class varible where data is stored
 */
  cargo( _cargo ) {
    if ( _cargo != null )
      this._cargo = _cargo;
    return this._cargo;
  }

  /* ===============  GET CARGO  ============== (PUBLIC/GET)
    This getter method will return the data in cargo

    REQUIRES
      - this.cargo() => returns cargo
 */
  get payload() {
    return this.cargo();
  }

  /* ===============  SET CARGO  ============== (PUBLIC/SET)
    This setter method will set the data in cargo

    PARAMATER
      - _cargo (MIXED) => anything you want to set the cargo to

    REQUIRES
      - this.cargo() => sets cargo
 */
  set payload( _cargo ) {
    this.cargo( _cargo );
  }

  /* =============== HAS CARGO  =============== (PUBLIC)
    This method returns a boolean on wether
    there is active cargo in the payload. If the
    cargo is null return false.

    RETURNS
      - false (BOOLEAN) => if cargo is null
      - true (BOOLEAN)  => if cargo is NOT null

    REQUIRES
      - this.cargo() => check current cargo
 */
  hasCargo() {
    return ( this.cargo() != null ) ? false : true;
  }

  /* ================  STAGE  ================= (PUBLIC)
    This method will return and set the stage
    number. The stage number is just a indicator
    for any perpose you need it for. Defualt
    stage number is 0.

    PARAMATER
      - _stage (NUMBER) => is the stage number you want to set

    RETURNS
      Will always return stage number. This allows
      you to check if stage number has been
      succesfully updated.

    REQUIRES
      - this._stage => stage number of payload
 */
  stage( _stage ) {
    if ( _stage != null ) {
      if ( typeof( _stage ) != "number" ) {
        console.error( "Payload Status (" + this.stage() + "): Payload stage must be an instance Number." );
      } else {
        this._stage = _stage;
      }
    }

    return this._stage;
  }

  /* ===============  STATUS  ================= (PUBLIC)
    This will change the status of the payload.
    The payload status is a state wether the
    the payload has passed succesfully.

    PARAMATER
      - _status (BOOLEAN) => is if it passed succesfully

    RETURNS
      Will always return success status. This allows
      you to check if stage number has been
      succesfully updated.

    REQUIRES
      - this._status => status boolean
 */
  status( _status ) {
    if ( _status != null ) {
      if ( typeof( _status ) != "boolean" ) {
        console.error( "Payload Status (" + this.stage() + "): Payload status must be a boolean." );
      } else {
        this._status = _status;
      }
    }

    return this._status;
  }

  /* ===============  SUCCESS  ================ (PUBLIC)
    This will set the status to true as in success.

    RETURNS
      Should return true, as it return the status,
      after setting it to true.

    REQUIRES
      - this.status() => set status to true
 */
  success() {
    return this.status( true );
  }

  /* ===============  FAILURE  ================ (PUBLIC)
    This will set the status to false as in failure.

    RETURNS
      Should return false, as it return the status,
      after setting it to false.

    REQUIRES
      - this.status() => set status to false
 */
  failure() {
    return this.status( false );
  }

  /* ===============  MAYDAY  ================= (PUBLIC)
    This will set the status to false as in failed.
    Plus add a log. A mayday would be a general error.

    RETURNS
      Should return false, as it return the status,
      after setting it to false.

    REQUIRES
      - this.status() => set status to true
      - this.log()    => add log
 */
  mayday() {
    this.log( "Payload Status (" + this.stage() + "): Mayday call has been logged.", "mayday" );
    return this.status( false );
  }

  /* ============  LOG MESSAGE  =============== (PUBLIC)
    Logging a message allows you to add information
    logs about the payload.

    RETURNS
      An array of object with payload log information
        - code: (STR) Optional String to help identify error later
        - message: (STR) message to be sent with log
        - date: (DATE) date of when log takes place
        - payload: (OBJ) contains the whole payload without log

    PARAMATER
      - _message (STR)          => string message to log
      - _code (STR)             => code to identify log
      - _ghostPayload (BOOLEAN) => if true, won't attatch payload to log

    REQUIRES
      - this.manifest() => return payload object
      - this.stage()    => stage number
      - this._log       => class instance payload where stored
 */
  log( _message, _code, _ghostPayload ) {
    if ( _message != null ) {
      if ( typeof( _message ) != "string" ) {
        console.error( "Payload Status (" + this.stage() + "): Payload status must be a string." );
      } else {
        this._log.push( {
          code: ( _code != null && typeof( _code ) == "string" ) ? _code : false,
          message: _message,
          date: new Date(),
          manifest: ( _ghostPayload == true ) ? "ghostPayload" : this.manifest( true ),
        });
      }
    }

    return this._log;
  }

  /* ==============  PAYLOAD  ================= (PUBLIC)
    Will return object of payload. Send boolean
    true to not send log.

    RETURNS
      An array of object with payload log information
        - code: (STR) Optional String to help identify error later
        - message: (STR) message to be sent with log
        - date: (DATE) date of when log takes place
        - payload: (OBJ) contains the whole payload without log

    PARAMATER
      - _message (STR)          => string message to log
      - _code (STR)             => code to identify log
      - _ghostPayload (BOOLEAN) => if true, won't attatch payload to log

    REQUIRES
      - this.payload()  => return payload object
      - this.stage()    => stage number
      - this._log       => class instance payload where stored
 */
  manifest( _disableLog ) {
    if ( _disableLog == true ) {
      return { cargo: this.cargo(), stage: this.stage(), status: this.status() };
    }
    return { cargo: this.cargo(), stage: this.stage(), status: this.status(), log: this.log() };
  }
}

module.exports = Payload;
