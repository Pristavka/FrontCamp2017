'use strict';

var api_key = 'eefc0a2a311a42dc8936f6dceba17753';
var newsapi = 'https://newsapi.org/v2';
var iconURL = 'https://icons.better-idea.org/icon';
var iconSize = '70..120..200';
var resources = {
    bbc: newsapi + '/top-headlines?sources=bbc-news&apiKey=' + api_key,
    sources: newsapi + '/sources?category=sport&apiKey=' + api_key
};
var timeOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
};