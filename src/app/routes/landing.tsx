import { useNavigate } from 'react-router';

import logo from '@/assets/logo.svg';
import { Head } from '@/components/seo';
import { Button } from '@/components/ui/button';
import { useUser } from '@/lib/auth';

import Landing from '../../features/landing/components/root';

export const LandingRoute = () => {
  const navigate = useNavigate();
  const user = useUser();

  const handleStart = () => {
    if (user.data) {
      navigate('/app');
    } else {
      navigate('/auth/login');
    }
  };

  return (
    <>
      <Head description="Welcome to KocoKeeper" />
      <Landing />
    </>
  );
};
