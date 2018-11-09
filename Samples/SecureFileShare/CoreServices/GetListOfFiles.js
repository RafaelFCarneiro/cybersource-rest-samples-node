'use strict'

var path = require('path');
var filePath = path.resolve('Data/Configuration.js');
var Configuration = require(filePath);
var CybersourceRestApi = require('cybersource-rest-client');

/**
 * This is a sample code to call SearchTransactionsApi,
 * Get list of files and its information of them available inside the report directory
 */
function getListOfFiles(callback) {
    try {
        var configObject = new Configuration();
        var instance = new CybersourceRestApi.SecureFileShareApi(configObject);

        var startDate = "2018-10-20";
        var endDate = "2018-10-30";
        var opts = [];
        opts['organizationId'] = "testrest";

        console.log("****************Getlist of Files****************")

        instance.getFileDetails(startDate, endDate, opts, function (error, data, response) {
            if (error) {
                console.log("\nError in getlist of files : " + error);
            }
            else if (data) {
                console.log("\nData of getlist of files : " + JSON.stringify(data));
            }
            console.log("\nResponse of getlist of files : " + JSON.stringify(response));
            console.log("\nResponse Code of getlist of files : " + JSON.stringify(response['status']));
            callback(error, data);
        });
    } catch (error) {
        console.log(error);
    }
};
if (require.main === module) {
    getListOfFiles(function () {
        console.log('Method call complete.');
    });
}
module.exports.getListOfFiles = getListOfFiles;