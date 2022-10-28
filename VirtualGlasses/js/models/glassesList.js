import { showGlassesInfo, wearGlasses } from '../controllers/glasses.js';
import Glasses from '../models/glassesPro.js';

export default class GlassesList {
  constructor(list) {
    this.list = list;
  }

  renderAllGlasses() {
    let arrayGlasses = this.list.map(
      (item) => new Glasses(...Object.values(item))
    );

    let allGlasses = arrayGlasses.map((glasses) => {
      let glassesDiv = document.createElement('div');

      glassesDiv.classList.add('col-4');
      glassesDiv.addEventListener('click', () => {
        showGlassesInfo(glasses);
        wearGlasses(glasses);
      });

      glassesDiv.innerHTML = `
          <img src="${glasses.src}" alt="Glasses image" class="img-fluid">
        `;

      return glassesDiv;
    });

    document.querySelector('#vglassesList').append(...allGlasses);
  }
}
