'use client';

import { useEffect } from 'react';
import GlobeAnimation from '@/components/animation/GlobeAnimation';

export default function AnimationPage() {
  useEffect(() => {
    document.body.classList.add('animation-page');
    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('animation-page');
    };
  }, []);

  return <GlobeAnimation />;
}
