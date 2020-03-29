import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const {
    user,
    authenticated,
  }: { user: string; authenticated: boolean } = useSelector(
    (state: any) => state.currentUser
  );

  const token: string = useSelector((state: any) => state.token);
  if (!token)
    return (
      <>
        <div className="row">
          <div className="col s6 offset-s3">
            <h2>Short your link!</h2>
            <div className="card blue darken-2" id="hello-card">
              <div className="card-content white-text">
                <span className="card-title">Hi there</span>
                <p>
                  Wanna to short your link? Just register in one click! Already
                  have an account? Just sign in!
                </p>
              </div>
              <div className="card-action hello-card-action">
                <Link to="/signup" id="hello-action-link-left">
                  <button className="waves-effect waves-light btn-small blue">
                    Sign Up
                  </button>
                </Link>
                <Link to="/login" id="hello-action-link-right">
                  <button className="waves-effect waves-light btn-small blue">
                    Log In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );

  /*
      User is authenticated
    */

  return <h1>Hello, {user}</h1>;
};

export default Home;
