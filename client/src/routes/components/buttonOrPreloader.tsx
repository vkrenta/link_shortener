import React from 'react';
import { preloaderProps } from '../../types';
import { useSelector } from 'react-redux';

const ButtonOrPreloader: React.FC<preloaderProps> = ({
  buttonText,
  onClick,
}) => {
  const isButtonDisabled: boolean = useSelector(
    (state: any) => state.isButtonDisabled
  );

  const inProcess: boolean = useSelector((state: any) => state.inProcess);

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
      disabled={isButtonDisabled}
      className="btn waves-effect waves-light blue"
      onClick={() => onClick()}
    >
      {buttonText}
    </button>
  );
};

export default ButtonOrPreloader;
