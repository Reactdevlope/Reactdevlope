import React from "react";

export default function AboutUs() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <img src='./assets/img/familyStructure.png' alt="family" className="img-fluid" />
        </div>
      </div>
      <div className="row mb-5 mt-3">
        <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-7">
          <h5 className="fw-bold mb-4">ABOUT ATBELOVED</h5>
          <p className="atb-paragraph">
            We help make that possible with the ATBELOVED Family Tree, the
            world's largest online family tree— home to information about more
            than 1.2 billion ancestors.
          </p>
          <p className="atb-paragraph">
            The Family Tree offers users a free family tree template featuring
            multiple tree and fan chart views, timeline and mapping tools,
            record hints and research helps, and access to billions of online
            records.
          </p>
          <p className="atb-paragraph">
            The FamilySearch Family Tree can help you more easily connect to
            your family and build your family history. Here are a few ways it
            might help you.
          </p>
          <p className="atb-paragraph">
            Those who start a Family Tree on FamilySearch aren't just piecing
            together their family story— they're contributing to the creation of
            a global, unified family tree for mankind.
          </p>
          <p className="atb-paragraph">
            The FamilySearch shared tree uniquely strives to have just one
            public profile for every deceased person who has ever lived.
            Descendants contribute what they know about a person to a single,
            shared profile, rather than scattering their knowledge across
            multiple profiles on several trees, some of which may have privacy
            barriers.
          </p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-5 align-self-center">
          <img src='./assets/img/familyTree.png' alt="family" className="img-fluid" />
        </div>
      </div>
    </>
  );
}
