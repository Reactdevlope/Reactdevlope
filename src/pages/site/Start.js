import React from "react"
// import familyStructure from '../../assets/img/familyStructure.png'
// import bottom from '../../assets/img/bottom.png'
export default function Start() {

  return (
    <>
      <div className="row">
        <div className="col-12">
          <img src='./assets/img/familyStructure.png' alt="family" className="img-fluid" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-6 mb-5">
          <p className="fw-bold fs-5 mb-0">HOW TO START ATBELOVED</p>
          <p className="fw-bolder">CREATING A FAMILY TREE IS FREE AND EASY.</p>
          <p className="atb-paragraph"><strong>STEP 1:CREATE A FREE ACCOUNT.</strong><br/>NOT ONLY WILL YOU BE ABLE TO START YOUR FAMILY TREE, BUT CREATING AN ACCOUNT GIVES YOU ACCESS TO FAMILY SEARCH'S ONLINE RECORDS AND THE MEMORIES STORAGE FEATURE. </p>
          <p className="atb-paragraph"><strong>STEP 2:ADD WHAT YOU KNOW ABOUT YOUR FAMILY.</strong><br/>WE RECOMMEND STARTING WITH THE FIRST FOUR GENERATIONS.KNOW THAT FAMILY SEARCH PROTECTS THE PRIVACY OF LIVING PEOPLE—NOBODY ELSE CAN SEE WHAT YOU ENTER ABOUT YOURSELF OR OTHER LIVING FAMILY MEMBERS.</p>
          <p className="atb-paragraph"><strong>STEP 3:CONNECT TO FAMILY SEARCH'S VAST DATABASE OF INFORMATION.</strong><br/>ONCE YOU ADD A DECEASED RELATIVE TO THE TREE, FAMILY SEARCH WILL TRY TO CONNECT YOU TO ANY INFORMATION IT HAS ABOUT THAT PERSON IN ITS DATABASE.IF IT FINDS A MATCH,FAMILY SEARCH CAN AUTO POPULATE INFORMATION,SAVING YOU A LOT OF TIME!</p>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-12 col-xl-6 align-self-center mt-4">
          <img src='./assets/img/bottom.png' alt="family" className="img-fluid" />
        </div>
      </div>
    </>
  );
}