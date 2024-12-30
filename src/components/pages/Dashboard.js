import Content from '../content/Content';
import Chart from '../chart/Chart';
import Statistics from '../statistics/Statistics';
import ActiveSets from '../activeSets/ActiveSets';
import RepeatSets from '../repeatSets/RepeatSets';

import './dashboard.css';

const Dashboard = () => {
  return (
    <Content>
      <div className="row mb-40">
        <div className="text-center mb-20">Performance</div>
        <div className="col-8 d-flex justify-content-center">
          <Chart />
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <Statistics />
        </div>
      </div>
      <div className="row">
        <div className="col-6 d-flex flex-column align-items-center">
          <ActiveSets />
        </div>
        <div className="col-6 d-flex flex-column align-items-center">
          <RepeatSets />
        </div>
      </div>
    </Content>
  );
};

export default Dashboard;
