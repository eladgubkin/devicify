import { PanelsTopLeft } from 'lucide-react';
import Link from 'next/link';

import { Menu } from '@web/components/admin-panel/menu';
import { SidebarToggle } from '@web/components/admin-panel/sidebar-toggle';
import { Button } from '@web/components/ui/button';
import { useSidebarToggle } from '@web/hooks/use-sidebar-toggle';
import { useStore } from '@web/hooks/use-store';
import { cn } from '@web/lib/utils';

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <aside
      className={cn(
        'fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300',
        sidebar?.isOpen === false ? 'w-[90px]' : 'w-72'
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            'transition-transform ease-in-out duration-300 mb-1',
            sidebar?.isOpen === false ? 'translate-x-1' : 'translate-x-0'
          )}
          variant="link"
          asChild
        >
          <Link href="/dashboard" className="flex items-center gap-2">
            <PanelsTopLeft className="w-6 h-6 mr-1" />
            <h1
              className={cn(
                'font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300',
                sidebar?.isOpen === false
                  ? '-translate-x-96 opacity-0 hidden'
                  : 'translate-x-0 opacity-100'
              )}
            >
              Yifat
            </h1>
          </Link>
        </Button>
        <Menu isOpen={sidebar?.isOpen} />
      </div>
    </aside>
  );
}
