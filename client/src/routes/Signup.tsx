import React from 'react';

const Signup = () => {
  return (
    <div>
      <div className="col">
        <div className="input-field col s6">
          <input id="email" type="email" name="user" className="validate" />
          <label className="active" htmlFor="email">
            Email
          </label>
        </div>

        <div className="input-field col s6">
          <input
            id="password"
            type="password"
            name="password"
            className="validate"
          />
          <label className="active" htmlFor="password">
            Password
          </label>
        </div>

        <button className="btn waves-effect waves-light">Submit</button>
      </div>
    </div>
  );
};

export default Signup;
