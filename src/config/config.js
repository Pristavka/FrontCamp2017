export default configs = {
  api_key: 'eefc0a2a311a42dc8936f6dceba17753',
  newsapi: 'https://newsapi.org/v2',
  iconURL: 'https://icons.better-idea.org/icon',
  iconSize: '70..120..200',
  resources: {
    bbc: `${this.newsapi}/top-headlines?sources=bbc-news&apiKey=${this.api_key}`,
    sources: `${this.newsapi}/sources?category=sport&apiKey=${this.api_key}`
  },
  timeOptions: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  }
};
