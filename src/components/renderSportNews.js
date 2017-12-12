import { configs } from '../config/config';
import Controller from './controller'
export default class RenderSportNews {
  static renderSportSources({ sources }) {
    const container = document.querySelector('.sportSourcesContainer');
    container.addEventListener('click', Controller.handleSourceClick);
    sources.forEach(src => {
      const div = document.createElement('div');
      const source = `
            <div class="sourceItem">
              <p><img src="${configs.iconURL}?url=${src.url}&size=${configs.iconSize}"
                alt="${src.name}" id="${src.id}"></p>
              <p class="sport__title">${src.name}</p>
            </div>
          `
      div.innerHTML = source;
      container.appendChild(div);
    })
  };
}