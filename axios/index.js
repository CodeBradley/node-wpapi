const WPAPI = require( '../wpapi' );
const httpTransport = require( './http-transport' );
const bindTransport = require( '../lib/bind-transport' );

// Bind the superagent-based HTTP transport to the WPAPI constructor
module.exports = bindTransport( WPAPI, httpTransport );
