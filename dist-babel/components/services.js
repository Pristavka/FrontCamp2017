'use strict';

var getData = function getData(url) {
  return fetch(url, { mode: 'cors' }).then(function (resp) {
    return resp.json();
  });
};