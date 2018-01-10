import { configs } from '../config/config';
import MainComponent from './mainComponent';

export default class SportNewsItemsComponent {
  static renderSportSources({ sources }) {
    const container = document.querySelector('.sportSourcesContainer');
    container.addEventListener('click', MainComponent.handleSourceClick);
    sources.forEach(src => {
      const div = document.createElement('div');
      const source = `
            <div class="sourceItem">
              <p><img src="${configs.iconURL}?url=${src.url}&size=${configs.iconSize}"
                alt="${src.name}" id="${src.id}"></p>
              <p class="sport__title">${src.name}</p>
            </div>
          `;
      div.innerHTML = source;
      container.appendChild(div);
    });
  }
}
