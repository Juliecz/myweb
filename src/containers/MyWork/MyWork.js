import React, { Component } from 'react';

import * as images from '../../assets';
import Project from '../../components/Project/Project';

import './style.css';

class MyWork extends Component {
  render() {
    console.log('IMAGES', images);
    return (
      <div className="mywork">
        <div className="mywork-header">
          <h3>My work</h3>
        </div>
        <div className="mywork-projects">
          <Project
            header={'E.ON Solar - DE, UK'}
            text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            image={images.eonsolarde}
          />
          <Project
            header={'E.ON Solar - DE, UK'}
            text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text'}
            image={images.eonde}
          />
          <Project
            header={'Cookbook'}
            text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text'}
            image={images.cookbook}
          />
          <Project
            header={'Holmes Place - PT, FR'}
            text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
            image={images.dsp}
          />
          <Project
            header={'Holmes Place - PT, FR'}
            text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text'}
            image={images.composer}
          />
          <Project
            header={'Vegan restaurant'}
            text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text'}
            image={images.veganrestaurant}
          />
          <Project
            header={'Sudoku game'}
            text={'Lorem Ipsum is simply dummy text of the printing'}
            image={images.sudokugame}
          />
        </div>
      </div>
    );
  }
}

export default MyWork;
