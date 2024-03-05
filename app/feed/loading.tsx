import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-2 -mt-28">
      <Loader2 className="animate-spin text-primary w-8 h-8" />{' '}
      <span className="font-medium text-2xl">Loading...</span>
    </div>
  );
};

export default Loading;
