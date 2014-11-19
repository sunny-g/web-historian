var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  'siteAssets' : path.join(__dirname, '../web/public'),
  'archivedSites' : path.join(__dirname, '../archives/sites'),
  'list' : path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for jasmine tests, do not modify
exports.initialize = function(pathsObj){
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.archivedSites = function() {
  return fs.readdirSync(this.paths.archivedSites);
};

exports.readListOfUrls = function(callback){
  // used whenever we need to read sites.txt
  callback(fs.readFileSync(this.paths.list).toString().split('\n'))
};

exports.isUrlInList = function(){
  // used by server when responding to client request for a URL
};

exports.addUrlToList = function(){
  // used by server when we get a request for a new URL
};

exports.isURLArchived = function(){
  // used by server when responding to client request for a URL
  // used by worker
};

exports.downloadUrls = function(){
  // used by worker
};
