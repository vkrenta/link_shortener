/* eslint-disable react/prop-types */
import React from 'react';

type preloaderProps = {
  buttonName: string;
  inProcess: boolean;
  buttonState: boolean;
  onClick: any;
};

const ButtonOrPreloader: React.FC<preloaderProps> = ({
  buttonName,
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
      {buttonName}
    </button>
  );
};

export default ButtonOrPreloader;
