import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import ButtonOrPreloader from './components/buttonOrPreloader';

const Home: React.FC = () => {
  const error = useSelector((state: any) => state.error);
  const longUrl = useRef<HTMLInputElement>(null);

  const token: string = useSelector((state: any) => state.token);

  if (error?.code === 500) {
    return <Redirect to="/internal" />;
  }

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

  return (
    <>
      <div className="row">
        <div className="col s6 offset-s3">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Put your link here</span>
              <div className="input-field m5">
                <input ref={longUrl} type="url" className="validate"></input>
              </div>
              <ButtonOrPreloader
                buttonName="Create link"
                inProcess={false}
                buttonState={false}
                onClick={() => alert(longUrl.current?.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
