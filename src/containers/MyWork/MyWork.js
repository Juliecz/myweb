import React, { PureComponent } from 'react';

import * as images from '../../assets';
import Project from '../../components/Project/Project';

import './style.css';

class MyWork extends PureComponent {
  render() {
    return (
      <div className="mywork">
        <div className="mywork-header">
          <h4>My work</h4>
        </div>
        <div className="mywork-projects">
          <Project
            header="E.ON Solar - DE, UK"
            year="2017-2019"
            text="Creative Dock - Technologie: React, Redux, Reflux, Node.js, AngularJS, Adobe Experience Manager, WordPress."
            image={images.eonsolarde}
            links={[
              {
                url: 'https://eon-solar.de',
                text: 'E.ON Solar DE',
              },
              {
                url: 'https://eon-solar.co.uk',
                text: 'E.ON Solar UK',
              }
            ]}
          />
          <Project
            header="Cookbook"
            year="2018"
            text="Vlastní projekt - Online kuchařka. Používané technologie: React, Redux, Node.js, MongoDB."
            image={images.cookbook}
            links={[
              {
                url: 'https://gamee-cookbook.herokuapp.com/',
                text: 'Cookbook',
              }
            ]}
          />
          <Project
            header="E.ON Solar - DE"
            year="2017-2019"
            text="Creative Dock - Technologie: React, Redux, Reflux, Node.js, Adobe Experience Manager, WordPress."
            image={images.eonde}
            links={[
              {
                url: 'https://www.eon.de/de/pk/solar/photovoltaik-rechner.html',
                text: 'E.ON DE Calculator',
              }
            ]}
          />
          <Project
            header="Holmes Place - PT, FR"
            year="2016-2017"
            text="Fox Media Czech Republic - Digital sales process. Používané technologie: React, Redux, Node.js."
            image={images.dsp}
          />
          <Project
            header="Vegan restaurant"
            year="2015-2016"
            text="Bakalářská práce - Aplikace napsána v Javascriptu na základě SPA architektury s použitím AngularJS. Na backendu jsou používáné Node.js a MongoDB."
            image={images.veganrestaurant}
            links={[
              {
                url: 'http://vegan-restaurant.herokuapp.com/',
                text: 'Vegan rest',
              }
            ]}
          />
          <Project
            header="E.ON Solar - UK"
            year="2017-2019"
            text="Creative Dock - Technologie: React, Redux, Node.js, Adobe Experience Manager, WordPress."
            image={images.eonenergy}
            links={[
              {
                url: 'https://www.eonenergy.com/solar/solar-panels.html#solar-calculator',
                text: 'E.ON UK Calculator',
              },
              // link to contact form
              // {
              //   url: 'https://www.eonenergy.com/solar/battery-storage.html#solar-form',
              //   text: 'E.ON UK Form',
              // }
            ]}
          />
          <Project
            header="Holmes Place - PT, FR"
            year="2016-2017"
            text="Fox Media Czech Republic - Composer pro skládání stránek z jednotlivých komponent. Používané technologie: React, Redux, Node.js."
            image={images.composer}
          />
          <Project
            header="Sudoku game"
            year="2016"
            text="Vlastní projekt - Logická hra, vytvořená pomocí Javascriptu a AngularJS."
            image={images.sudokugame}
            links={[
              {
                url: 'http://yuliya.cz/sudokugame/',
                text: 'Sudoku',
              }
            ]}
          />
        </div>
      </div>
    );
  }
}

export default MyWork;
