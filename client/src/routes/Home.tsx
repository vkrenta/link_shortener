import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ButtonOrPreloader from './components/ButtonOrPreloader';
import { inputOnBlur, validateUrl, enableButtonOnInput } from '../validators';
import { createShortLink, disableButton, clearCurrentLink } from '../actions';
import CopyCurrentLink from './components/CopyCurrentLink';

const Home: React.FC = () => {
  const currentLink = useSelector((state: any) => state.currentLink);
  const longUrl = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(disableButton());
  }, [dispatch]);

  useEffect(
    () => () => {
      dispatch(clearCurrentLink());
    },
    [dispatch]
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
              {currentLink ? <CopyCurrentLink /> : <div />}
              <ButtonOrPreloader
                buttonText="Create link"
                onClick={() => {
                  dispatch(createShortLink(longUrl.current?.value!, token));
                }}
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
