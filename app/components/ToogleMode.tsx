'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="divide-x">
        <Button
          variant="outline"
          className="flex flex-col items-center rounded-none gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 dark:hover:text-primary hover:text-primary"
          size="icon"
        >
          <Sun className="h-[1.2rem] w-[1.2rem]  sm:w-7 sm:h-7  rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] sm:w-7 sm:h-7  border-none rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 sm:mb-3" />
          <span className="hidden sm:block font-semibold text-gray-500 dark:text-white border-none">
            Theme
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="cursor-pointer dark:hover:text-primary hover:text-primary"
          onClick={() => setTheme('light')}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer dark:hover:text-primary hover:text-primary"
          onClick={() => setTheme('dark')}
        >
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
