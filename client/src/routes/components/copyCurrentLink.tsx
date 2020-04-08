import React, { useRef, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendAlert } from '../../actions';

const CopyCurrentLink: React.FC = () => {
  const currentLink: string = useSelector((state: any) => state.currentLink);

  const highlighted = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  if (!currentLink) return <div />;

  return (
    <>
      <div className="row">
        <div className="col s10">
          <div className="input-field" id="copy-link-input">
            <input
              ref={highlighted}
              onFocus={() => copyLinkToClipboard()}
              onChange={() => {}}
              onInput={(event: FormEvent) => {
                event.preventDefault();
              }}
              type="url"
              className="validate"
              value={currentLink || ''}
            />
          </div>
        </div>
        <div className="col s1">
          <button
            className="waves-effect blue btn"
            id="copy-link-button"
            onClick={() => {
              highlighted.current?.focus();
            }}
          >
            <i className="small material-icons">content_copy</i>
          </button>
        </div>
      </div>
    </>
  );

  function copyLinkToClipboard() {
    highlighted.current?.setSelectionRange(0, currentLink?.length);
    document.execCommand('copy');
    dispatch(sendAlert('Link copied!'));
  }
};

export default CopyCurrentLink;
