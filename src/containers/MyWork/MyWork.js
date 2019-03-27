import React, { PureComponent } from 'react';

import * as images from '../../assets';
import Project from '../../components/Project/Project';

import './style.css';

class MyWork extends PureComponent {
  render() {
    return (
      <div className="mywork">
        <div className="mywork-header">
          <h3>My work</h3>
        </div>
        <div className="mywork-projects">
          <Project
            header="E.ON Solar - DE, UK"
            year="2017-2019"
            text="Creative Dock - ..."
            image={images.eonsolarde}
          />
          <Project
            header="E.ON Solar - DE, UK"
            year="2017-2019"
            text="Creative Dock - ..."
            image={images.eonde}
          />
          <Project
            header="Cookbook"
            year="2018"
            text="Online kuchařka. Používané technologie: React, Redux, Node.js, MongoDB."
            image={images.cookbook}
          />
          <Project
            header="Holmes Place - PT, FR"
            year="2016-2017"
            text="Fox Media Czech Republic - Digital sales process. Používané technologie: React, Redux, Node.js."
            image={images.dsp}
          />
          <Project
            header="Holmes Place - PT, FR"
            year="2016-2017"
            text="Fox Media Czech Republic - Composer pro skládání stránek z jednotlivých komponent. Používané technologie: React, Redux, Node.js."
            image={images.composer}
          />
          <Project
            header="Vegan restaurant"
            year="2015-2016"
            text="Aplikace je realizovaná v jazyce Javascript na základě SPA architektury s použitím Javascriptového frameworku AngularJS. Na straně serveru byli používáné NodeJS a MongoDB databáze."
            image={images.veganrestaurant}
          />
          <Project
            header="Sudoku game"
            year="2016"
            text="Logická hra, vytvořená pomocí programovacího jazyka Javascript a AngularJS."
            image={images.sudokugame}
          />
        </div>
      </div>
    );
  }
}

export default MyWork;
