import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Dispatch } from 'redux';
import { registerUser, enableButton, disableButton } from '../../actions';
import { passwordOnBlur, enableButtonOnInput } from '../../validators';

type preloaderProps = {
  inProcess: boolean;
  buttonState: boolean;
  onClick: any;
};

const ButtonOrPreloader: React.FC<preloaderProps> = ({
  inProcess,
  buttonState,
  onClick,
}) => {
  if (inProcess)
    return (
      <div className="preloader-wrapper small active">
        <div className="spinner-layer spinner-green-only">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    );
  return (
    <button
      disabled={buttonState}
      className="btn waves-effect waves-light blue"
      onClick={() => onClick()}
    >
      Sign Up
    </button>
  );
};

export default ButtonOrPreloader;
