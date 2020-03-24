import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearError } from '../actions';

const Internal: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearError());
  });

  return <h1>500: Internal server error</h1>;
};

export default Internal;
