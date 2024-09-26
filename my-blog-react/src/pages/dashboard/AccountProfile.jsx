import React from "react";


function AccountProfile(){
    return(
        <>
        <div className="profile-grid">
            <form className="profile-form" onSubmit={""}>
                <h3>Edit Profile</h3>
                <div className="form-item">
                    <label className="form-label" htmlFor="fullName">Full Name</label>
                    <input className="form-input" value={fullName} onChange={e =>setFullName(e.target.value)} />
                </div>

                <div className="form-item">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input className="form-label" type="email" readOnly="readonly" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>

                {/* <div className="form-item">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input className="form-input" value={userName}  />
                </div> */}


            </form>
        </div>
        </>
    )
}
export default AccountProfile;