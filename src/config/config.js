const api_key = 'eefc0a2a311a42dc8936f6dceba17753';
const newsapi = 'https://newsapi.org/v2';
const iconURL = 'https://icons.better-idea.org/icon';
const iconSize = '70..120..200';
const resources = {
  bbc: `${newsapi}/top-headlines?sources=bbc-news&apiKey=${api_key}`,
  sources: `${newsapi}/sources?category=sport&apiKey=${api_key}`
};
const timeOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
}
