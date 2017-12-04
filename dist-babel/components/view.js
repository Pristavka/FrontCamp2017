'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var setCurrentDate = function setCurrentDate() {
  document.querySelector('.header__date').innerHTML = new Date().toLocaleString("en-US", timeOptions);
};

var renderMainContent = function renderMainContent() {
  var sectionNews = document.createElement('section');
  var sectionSportList = document.createElement('section');
  sectionNews.className = 'news';
  sectionSportList.className = 'listOfsportNews';
  sectionNews.innerHTML = '\n      <div class="news__latest latest">\n        <h1>Latest <span class="latest__mark">News</span></h1>\n        <div class="latest__itemNews"></div>\n      </div>\n      <div class="news__sport sport">\n          <h1>Sport <span class="latest__mark">News</span></h1>\n          <h3 class="latest__source">Please, choose News source</h3>\n          <div class="sportSourcesContainer"></div>\n      </div>\n    ';
  document.querySelector('main').appendChild(sectionNews);
  document.querySelector('main').appendChild(sectionSportList);
};

var renderLatestNews = function renderLatestNews(_ref) {
  var _ref$articles = _slicedToArray(_ref.articles, 1),
      art = _ref$articles[0];

  var news = '\n    <h3 class="latest__source">' + art.author + '</h3>\n    <div class="latest__img">\n      <p><a href="' + art.url + '" target="_blank" rel="nooponer">\n        <img src="' + art.urlToImage + '" alt="' + art.title + '">\n      </a></p>\n    </div>\n    <p class="latest__title">' + art.title + '</p>\n    <p class="latest__shortDescr">' + art.description + '</p>\n    <p class="latest__url">\n      <a href="' + art.url + '" target="_blank" rel="nooponer">Open original source</a>\n    </p>\n    <p class="latest__published"><b>Date of publication:</b> ' + art.publishedAt + '</p>\n  ';
  document.querySelector('.latest__itemNews').innerHTML = news;
};

var renderSportNews = function renderSportNews(_ref2) {
  var articles = _ref2.articles;

  var listOfsportNews = document.querySelector('.listOfsportNews');
  listOfsportNews.innerHTML = '';
  articles.forEach(function (art) {
    var div = document.createElement('div');
    div.className = 'sport__item';
    var news = '\n        <img src="' + art.urlToImage + '" alt="' + art.title + '">\n        <p class="latest__title">' + art.title + '</p>\n        <p class="latest__url">\n          <a href="' + art.url + '" target="_blank" rel="nooponer">Open original source</a>\n        </p>\n      ';
    div.innerHTML = news;
    listOfsportNews.appendChild(div);
  });
};

var renderSportSources = function renderSportSources(_ref3) {
  var sources = _ref3.sources;

  var container = document.querySelector('.sportSourcesContainer');
  container.addEventListener('click', handleSourceClick);
  sources.forEach(function (src) {
    var div = document.createElement('div');
    var source = '\n      <div class="sourceItem">\n        <p><img src="' + iconURL + '?url=' + src.url + '&size=' + iconSize + '"\n          alt="' + src.name + '" id="' + src.id + '"></p>\n        <p class="sport__title">' + src.name + '</p>\n      </div>\n    ';
    div.innerHTML = source;
    container.appendChild(div);
  });
};