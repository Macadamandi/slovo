import './activeSets.css';

const ActiveSets = () => {

  return(
    <>
    <div className="mb-30">Active sets</div>
    <div className="active-sets">
      <div className="active-sets__item">
        <div>100 words</div>
        <img src="/images/picture.jpg" alt="" />
        <div>
          <p>Top 100 words</p>
        </div>
        <button type="button" class="btn btn-success w-100">Learn</button>
      </div>
      <div className="active-sets__item">
        <div>100 words</div>
        <img src="/images/picture.jpg" alt="" />
        <div>
          <p>Top 100 words</p>
        </div>
        <button type="button" class="btn btn-success w-100">Learn</button>
      </div>
      <div className="active-sets__item">
        <div>100 words</div>
        <img src="/images/picture.jpg" alt="" />
        <div>
          <p>Top 100 words</p>
        </div>
        <button type="button" class="btn btn-success w-100">Learn</button>
      </div>
      <div className="active-sets__item">
        <div>100 words</div>
        <img src="/images/picture.jpg" alt="" />
        <div>
          <p>Top 100 words</p>
        </div>
        <button type="button" class="btn btn-success w-100">Learn</button>
      </div>
    </div>
    </>
  );
}

export default ActiveSets;