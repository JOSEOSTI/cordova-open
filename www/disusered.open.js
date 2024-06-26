var exec = require('cordova/exec');

/**
 * open
 *
 * @param {String} uri File URI
 * @param {Function} success Success callback
 * @param {Function} error Failure callback
 * @param {Function} progress Callback for download progress reporting
 * @param {Boolean} trustAllCertificates Trusts any certificate when the connection is done over HTTPS.
 * @returns {void}
 */
exports.open = function(uri, success, error, progress, trustAllCertificates) {
  if (!uri || arguments.length === 0) { return false; }

  if (uri.match('http')) {
    downloadAndOpen(uri, success, error, progress, trustAllCertificates);
  } else {
    uri = encodeURI(uri);
    exec(onSuccess.bind(this, uri, success),
         onError.bind(this, error), 'Open', 'open', [uri]);
  }
};
