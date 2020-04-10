import React, { useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadLinks } from '../actions';
import { LinkData } from '../types';

const MyLinks: FC = () => {
  const dispatch = useDispatch();
  const token: string = useSelector((state: any) => state.token);
  const links: Array<LinkData> = useSelector((state: any) => state.loadedLinks);

  useEffect(() => {
    dispatch(loadLinks(token));
  }, [dispatch, token]);
  return (
    <>
      <ul>
        {links.map((link) => (
          <li key={link.short}>{JSON.stringify(link)}</li>
        ))}
      </ul>
    </>
  );
};

export default MyLinks;
