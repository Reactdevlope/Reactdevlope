import React from "react";

export default function Homepage() {
  return (
    <div className="row">
      <div className="col-12 mt-5">
        <p className="text-white atb-welcome-heading ms-5">
          WELCOME[NAME OF MEMBER]
        </p>
        <div className="atb-features-container mx-3 my-3">
          <h5 className="text-white">Why ATBELOVED?</h5>
          <p className="text-white">
            We are inviting you for create your family profile so you can
            keeps memories of your beloved ones with you for lifetime.
          </p>
          <p className="text-white">
            You can add Beloved person details and their memories whatever you
            have with you which will be shared with your family members,
            relatives and friends.
          </p>
          <p className="text-white">
            The information which you will be upload here that will be viewed
            by only with your family members with the acceptance of owner of
            content.
          </p>
          <p className="text-white">
            You can add thoughts, photos, videos which you can make as public
            or private with your choice
          </p>
          <p className="text-white">
            {" "}
            You can make a link for family so you can join your family members
            to your profile
          </p>
          <p className="text-white">
            The members who are connected with you profile, they will get
            notifications about your events and activities which you will
            added to ATBELOVED profile.
          </p>
          <p className="text-white">
            For make better access and use of information you can do donations
            to ATBELOVED Teams for maintaining your information updated for
            life time, although it is totally free to use and secure
          </p>
        </div>
      </div>
    </div>
  );
}
