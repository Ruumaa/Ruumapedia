import { Button } from '@/components/ui/button';
import { CopyX } from 'lucide-react';
import Link from 'next/link';

function ErrorStripe() {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto ">
        <CopyX className="text-red-500 w-16 h-1/6 mx-auto my-6" />
        <div className="text-center ">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Failed!
          </h3>{' '}
          <p className="text-gray-600 my-2">Ooppss... Something Went Wrong</p>
          <Button asChild className="mt-4">
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ErrorStripe;
