import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo, clearUserInfo } from '../actions';
import { UserInfo } from '../types';
import Preloader from './components/Preloader';
import Moment from 'react-moment';
import 'moment-timezone';

const MyProfile: FC = () => {
  const dispatch = useDispatch();
  const token: string = useSelector((state: any) => state.token);
  const userInfo: UserInfo = useSelector((state: any) => state.userInfo);

  useEffect(() => {
    dispatch(getUserInfo(token));
  }, [dispatch, token]);

  useEffect(
    () => () => {
      dispatch(clearUserInfo());
    },
    [dispatch]
  );

  if (userInfo == null) return <Preloader />;

  return (
    <>
      <div className="row">
        <div className="col s8 offset-s2">
          <div className="card">
            <div className="card-content">
              <span className="card-title">{userInfo.userName}</span>
              <div className="row">
                <div className="col s3">Email:</div>
                <div className="col blue-text">{userInfo.email}</div>
              </div>
              <div className="row">
                <div className="col s3">Registered at:</div>
                <div className="col">
                  <Moment format="DD.MM.YYYY hh:mm:ss">
                    {userInfo.dateCreated}
                  </Moment>
                </div>
              </div>
              <div className="row">
                <div className="col s3">Count of links:</div>
                <div className="col">{userInfo.links}</div>
              </div>
              <div className="row">
                <div className="col s3">Count of clicks:</div>
                <div className="col">{userInfo.clicks}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
