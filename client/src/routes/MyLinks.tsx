import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadLinks, clearLinks } from '../actions';
import { LinkData } from '../types';
import Preloader from './components/Preloader';

const MyLinks: FC = () => {
  const dispatch = useDispatch();
  const token: string = useSelector((state: any) => state.token);
  const links: Array<LinkData> = useSelector((state: any) => state.loadedLinks);

  useEffect(() => {
    dispatch(loadLinks(token));
  }, [dispatch, token]);

  useEffect(
    () => () => {
      dispatch(clearLinks());
    },
    [dispatch]
  );

  if (links == null) return <Preloader />;

  if (!links.length) return <h2>You haven't any link</h2>;

  return (
    <>
      <h2 className="center">My links</h2>

      <ul className="collection">
        {links.map((link) => (
          <li className="collection-item" key={link.id}>
            <div className="row">
              <div className="col s3">Original:</div>
              <div className="col s9">
                <a href={link.long}>{link.long}</a>
              </div>
            </div>
            <div className="row">
              <div className="col s3">Short:</div>
              <div className="col s9">
                <a href={link.short}>{link.short}</a>
              </div>
            </div>
            <div className="row">
              <div className="col s3">Date created:</div>
              <div className="col s9">{link.createdAt}</div>
            </div>
            <div className="row">
              <div className="col s3">Total clicks:</div>
              <div className="col s9">{link.clicks}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MyLinks;
