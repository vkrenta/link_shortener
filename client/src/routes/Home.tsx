import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import ButtonOrPreloader from './components/buttonOrPreloader';
import { inputOnBlur, validateUrl, enableButtonOnInput } from '../validators';
import { createShortLink, disableButton } from '../actions';

const Home: React.FC = () => {
  const error = useSelector((state: any) => state.error);
  const longUrl = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const buttonState: boolean = useSelector(
    (state: any) => state.isButtonDisabled
  );
  const inProcess: boolean = useSelector((state: any) => state.inProcess);
  dispatch(disableButton());

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
                <input
                  ref={longUrl}
                  onBlur={() => inputOnBlur(longUrl, validateUrl)}
                  onInput={() => onInput()}
                  type="url"
                  className="validate"
                ></input>
              </div>
              <ButtonOrPreloader
                buttonName="Create link"
                inProcess={inProcess}
                buttonState={buttonState}
                onClick={() =>
                  dispatch(createShortLink(longUrl.current?.value!, token))
                } // dispatch(createLink(long: string, short: string))
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function onInput() {
    enableButtonOnInput(dispatch, {
      value: longUrl.current?.value!,
      validator: validateUrl,
    });
  }
};

export default Home;
