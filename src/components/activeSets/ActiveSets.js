import CardSet from '../cardSet/CardSet';

const ActiveSets = () => {
  const titleArray = ["Top 50 words", "Top 75 words", "Animals", "Cars"];
  return(
    <>
    <div className="mb-30">Active sets</div>
    <CardSet wrap={3} titleArray={titleArray}/>
    </>
  );
}

export default ActiveSets;