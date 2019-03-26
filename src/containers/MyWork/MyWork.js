import React, { Component } from 'react';

import * as images from '../../assets';
import Project from '../../components/Project/Project';

import './style.css';

class MyWork extends Component {
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
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            image={images.eonsolarde}
          />
          <Project
            header="E.ON Solar - DE, UK"
            year="2017-2019"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
            image={images.eonde}
          />
          <Project
            header="Cookbook"
            year="2018"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
            image={images.cookbook}
          />
          <Project
            header="Holmes Place - PT, FR"
            year="2016-2017"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image={images.dsp}
          />
          <Project
            header="Holmes Place - PT, FR"
            year="2016-2017"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
            image={images.composer}
          />
          <Project
            header="Vegan restaurant"
            year="2015-2016"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
            image={images.veganrestaurant}
          />
          <Project
            header="Sudoku game"
            year="2016"
            text="Lorem Ipsum is simply dummy text of the printing"
            image={images.sudokugame}
          />
        </div>
      </div>
    );
  }
}

export default MyWork;
