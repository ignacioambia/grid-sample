import React from "react";
import Card from './card';
import PropTypes from 'prop-types'

const Grid = (props) => {
  const {numberOfBoxes} = props;
  return (
    <div>
      <div className="grid">
        {[...Array(numberOfBoxes)].map((e,i)=><Card key={i} index={i}></Card>)}
      </div>
    </div>
  );
};

Grid.propTypes = {
  numberOfBoxes : PropTypes.number
}


export default Grid;
