import React from 'react'

export default function Memories() {
    return (
        <div className='row'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                <img src='./assets/img/familyStructure.png' className='w-100' />
            </div>
            <div className='row mt-5'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                    <h4><b>THOUGHTS WITH ATBELOVED </b></h4>
                </div>
            </div>
            <div className='row mb-5'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                    <p className='atb-paragraph'><strong> 1. Build Your Tree with Ease</strong><br />

                        When you connect to the FamilySearch shared tree, some of your ancestors may have an
                        abundance of information already in their profile. FamilySearch can also show you possible
                        records for that ancestor.</p>
                    <p className='atb-paragraph'>

                        <strong>2. Collaborate with Others</strong><br />

                        FamilySearch Family Tree enables all descendants to share information that others might
                        not know and add sources to confirm correct information. The overall result of a wellsourced shared tree can be much more complete and accurate than individual trees.
                    </p>
                    <p className='atb-paragraph'>
                    <strong>3. Connect with Other Family Members</strong><br />

                        Working together on a global tree also helps descendants connect with each other. You
                        may find a relative who has visited the same graves, asked the same questions about—and
                        even learned to love or admire—the same ancestors.
                    </p>
                </div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6'>
                    <img className='img-fluid' src='./assets/img/memories.png' />
                </div>
            </div>
        </div>
    )
}
