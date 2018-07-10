import React from 'react';
import uuid from 'uuid';
import Lanes from './lanes';
import connect from '../libs/connect';
import LaneActions from '../actions/LaneActions';


const App = ({LaneActions, lanes}) => {
  const addLane = () => {
    LaneActions.create({
      id: uuid.v4(),
      name: 'New lane',
    });
  };

  return (
    <div className='lane-container'>
      <button className="add-lane" onClick={addLane}>Add Lane</button>
      <Lanes lanes={lanes} />
    </div>
  );
};

export default connect(({lanes}) => ({
  lanes,
}), {
  LaneActions,
})(App)
