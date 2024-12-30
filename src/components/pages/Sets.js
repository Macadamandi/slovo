import Content from '../content/Content';
import CreateNewSet from '../createNewSet/CreateNewSet';

const Sets = ({ isFavorite }) => {
  return (
    <Content>
      <CreateNewSet isFavorite={isFavorite} />
    </Content>
  );
};

export default Sets;
