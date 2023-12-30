import React from 'react';
import ErrorImage from '../assets/404.svg';
import Button from '../Components/Button';

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center flex-col items-center p-4">
      <img src={ErrorImage} alt="ErrorImage" className="w-full max-w-md" />
      <div className="mb-0.5">
        <Button to={'/'} text={'Back'} />
        <Button to={'/'} text={'Homepage'} />
      </div>
    </div>
  );
};

export default ErrorPage;
