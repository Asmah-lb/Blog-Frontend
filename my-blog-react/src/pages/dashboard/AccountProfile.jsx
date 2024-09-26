import React, {useState} from "react";


function AccountProfile(){
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] =useState('');


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

                <div className="form-item">
                    <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                    <input className="form-input" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                </div>


            </form>
        </div>
        </>
    )
}
export default AccountProfile;