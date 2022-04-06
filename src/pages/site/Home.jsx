import React from 'react';


export default function Home() {
  return (
    <div className='row'>
    <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
        <img src='./assets/img/Family.png' className='w-100' />
    </div>

    <div className='row my-5'>
        <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
            <p className="atb-paragraph fs-6">
                We help make that possible with the ATBELOVED Family Tree, the world's largest online family tree home to information about more
                than 1.2 billion ancestors.
            </p>
            <p className="atb-paragraph fs-6">
                The Family Tree offers users a free family tree template featuring
                multiple tree and fan chart views, timeline and mapping tools,
                record hints and research helps, and access to billions of online
                records.
            </p>
        </div>
        <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
            <img className='img-fluid' src='./assets/img/Background.png' />
        </div>
    </div>
</div>
  );
}

