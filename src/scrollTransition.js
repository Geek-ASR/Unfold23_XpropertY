import { useEffect, useState } from 'react';

function useScrollTransition(threshold = 100) {
  const [showSeparator, setShowSeparator] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > threshold) {
      setShowSeparator(true);
    } else {
      setShowSeparator(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return showSeparator;
}

export default useScrollTransition;
