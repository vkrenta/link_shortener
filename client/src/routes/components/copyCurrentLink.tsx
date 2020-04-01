import React from 'react';
import { useSelector } from 'react-redux';

const CopyCurrentLink: React.FC = () => {
  const currentLink = useSelector((state: any) => state.currentLink);

  if (!currentLink)
    return (
      <>
        <div />
      </>
    );

  return (
    <>
      <div>This will be a copy link field with link {currentLink}</div>
    </>
  );
};

export default CopyCurrentLink;
