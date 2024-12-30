import './Content.css';

const Content = (props) => {
  return (
    <div className="content col-10" style={{ overflowY: 'auto', flex: '1' }}>
      {props.children}
    </div>
  );
};

export default Content;
