"use client";

import type React from "react";

// import { useState } from "react";

import { cn } from "@/lib/utils";
import {
  BarChartIcon as ChartIcon,
  CheckCheckIcon as ChecklistMinimalistic,
  Gift,
  Home,
  Info,
  //   Minus,
  PieChartIcon as PieChart2,
  ReceiptIcon as ReceiptList,
  Settings,
  ClockIcon as SortByTime,
  UsersRoundIcon as UsersGroupRounded,
  Clock2Icon as Widget2,
} from "lucide-react";
import { usePageContext } from "@/context/PageContext";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem = ({ href, icon, isActive, onClick }: NavItemProps) => {
  return (
    <a
      href={href}
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-[14px] p-0 transition-colors ",
        "hover:bg-[#27272a] hover:text-default-foreground",
        "focus:bg-default/40 focus:text-default-foreground outline-none",
        isActive && "bg-default-100"
      )}
      onClick={onClick}
    >
      <div className='flex w-full items-center justify-center'>
        <div className={cn("text-default-500", isActive && "text-foreground")}>
          {icon}
        </div>
      </div>
    </a>
  );
};

const TeamAvatar = ({ initials }: { initials: string }) => {
  return (
    <span className='flex h-8 w-8 items-center justify-center overflow-hidden rounded-medium border border-border bg-transparent text-tiny'>
      <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[0.6rem] font-semibold text-default-500'>
        {initials}
      </span>
    </span>
  );
};

export default function SidebarNavigation() {
  const { page: pathname } = usePageContext();
  //   const [collapsed, setCollapsed] = useState(false);

  return (
    <div className='relative flex h-full w-16 flex-1 flex-col items-center border-r border-border px-2 py-8 '>
      {/* Logo */}
      <div className='flex h-8 w-8 items-center justify-center rounded-full bg-foreground'>
        <svg
          fill='none'
          height='32'
          viewBox='0 0 32 32'
          width='32'
          className='text-background'
        >
          <path
            clipRule='evenodd'
            d='M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z'
            fill='currentColor'
            fillRule='evenodd'
          />
        </svg>
      </div>

      <span
        aria-hidden='true'
        className='block h-px w-px'
        style={{ marginLeft: "0.25rem", marginTop: "2rem" }}
      />

      {/* Navigation */}
      <div className='h-full max-h-full w-full overflow-y-auto py-6 mr-4 no-scrollbar '>
        <div className='flex flex-col items-center gap-4'>
          {/* User Avatar */}
          <span className='flex relative justify-center items-center box-border overflow-hidden align-middle z-0 outline-none   w-8 h-8 text-tiny bg-default text-default-foreground rounded-full ring-2 ring-offset-2 ring-offset-background ring-default'>
            <img
              alt='avatar'
              src='https://i.pravatar.cc/150?u=a04258114e29026708c'
              className='h-full w-full object-cover opacity-100 transition-opacity duration-500'
            />
          </span>

          {/* Search Button */}
          <button
            type='button'
            aria-label='search'
            className='flex h-10 w-10 min-w-10 my-2 items-center justify-center rounded-[14px] bg-transparent p-0 text-default-foreground transition-transform-colors-opacity hover:bg-[#27272a]'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-default-500'
              viewBox='0 0 24 24'
            >
              <g fill='none' stroke='currentColor' strokeWidth='1.5'>
                <circle cx='11.5' cy='11.5' r='9.5' />
                <path strokeLinecap='round' d='M18.5 18.5L22 22' />
              </g>
            </svg>
          </button>
        </div>

        <div className='relative flex w-full list-none flex-col gap-1 overflow-clip py-1'>
          <nav className='flex w-full flex-col items-center gap-0.5 outline-none'>
            {/* Overview Section */}
            <li className='relative mb-2 w-full max-w-[44px] p-0'>
              <span className='hidden pl-1 text-tiny text-foreground-500'>
                Overview
              </span>
              <ul className='flex flex-col gap-1 pt-1' data-has-title='true'>
                <NavItem
                  href='/'
                  icon={<Home className='h-6 w-6' />}
                  isActive={pathname === "/"}
                />
                <NavItem
                  href='/projects'
                  icon={<Widget2 className='h-6 w-6' />}
                  isActive={pathname === "/projects"}
                />
                <NavItem
                  href='/tasks'
                  icon={<ChecklistMinimalistic className='h-6 w-6' />}
                  isActive={pathname === "/tasks"}
                />
                <NavItem
                  href='/team'
                  icon={<UsersGroupRounded className='h-6 w-6' />}
                  isActive={pathname === "/team"}
                />
                <NavItem
                  href='/tracker'
                  icon={<SortByTime className='h-6 w-6' />}
                  isActive={pathname === "/tracker"}
                />
                <li
                  className='mt-2 h-px w-full shrink-0 border-none bg-border'
                  role='separator'
                />
              </ul>
            </li>

            {/* Organization Section */}
            <li className='relative mb-2 w-full max-w-[44px] p-0'>
              <span className='hidden pl-1 text-tiny text-foreground-500'>
                Organization
              </span>
              <ul className='flex flex-col gap-1 pt-1' data-has-title='true'>
                <NavItem
                  href='/cap-table'
                  icon={<PieChart2 className='h-6 w-6' />}
                  isActive={pathname === "/cap-table"}
                />
                <NavItem
                  href='/analytics'
                  icon={<ChartIcon className='h-6 w-6' />}
                  isActive={pathname === "/analytics"}
                />
                <NavItem
                  href='/perks'
                  icon={<Gift className='h-6 w-6' />}
                  isActive={pathname === "/perks"}
                />
                <NavItem
                  href='/expenses'
                  icon={<ReceiptList className='h-6 w-6' />}
                  isActive={pathname === "/expenses"}
                />
                <NavItem
                  href='/settings'
                  icon={<Settings className='h-6 w-6' />}
                  isActive={pathname === "/settings"}
                />
                <li
                  className='mt-2 h-px w-full shrink-0 border-none bg-border'
                  role='separator'
                />
              </ul>
            </li>

            {/* Teams Section */}
            <li className='relative mb-2 w-full max-w-[44px] p-0'>
              <span className='hidden pl-1 text-tiny text-foreground-500'>
                Your Teams
              </span>
              <ul className='flex flex-col gap-1 pt-1' data-has-title='true'>
                <NavItem
                  href='/teams/heroui'
                  icon={
                    <div className='flex w-full items-center justify-center'>
                      <TeamAvatar initials='HU' />
                    </div>
                  }
                  isActive={pathname === "/teams/heroui"}
                />
                <NavItem
                  href='/teams/tailwind-variants'
                  icon={
                    <div className='flex w-full items-center justify-center'>
                      <TeamAvatar initials='TV' />
                    </div>
                  }
                  isActive={pathname === "/teams/tailwind-variants"}
                />
                <NavItem
                  href='/teams/heroui-pro'
                  icon={
                    <div className='flex w-full items-center justify-center'>
                      <TeamAvatar initials='HP' />
                    </div>
                  }
                  isActive={pathname === "/teams/heroui-pro"}
                />
                <li
                  className='mt-2 h-px w-full shrink-0 border-none bg-border'
                  role='separator'
                />
                <NavItem
                  href='/teams/heroui-pro'
                  icon={
                    <div className='flex w-full items-center justify-center'>
                      <Info className='h-6 w-6 text-default-500' />
                    </div>
                  }
                  isActive={pathname === "/teams/heroui-pro"}
                />
              </ul>
            </li>
          </nav>
        </div>
      </div>

      {/* Bottom Actions */}
      <span
        aria-hidden='true'
        className='block h-px w-px'
        style={{ marginLeft: "0.25rem", marginTop: "2rem" }}
      />
      {/* <div className='mt-auto flex flex-col items-center'>
        <button
          type='button'
          className='flex h-10 w-10 min-w-10 items-center justify-center rounded-medium bg-transparent px-0 text-default-foreground transition-transform-colors-opacity hover:bg-default/40 hover:text-foreground'
        >
          <Info className='h-6 w-6 text-default-500' />
        </button>
        <button
          type='button'
          className='flex h-10 w-10 min-w-10 items-center justify-center rounded-medium bg-transparent px-0 text-default-foreground transition-transform-colors-opacity hover:bg-default/40 hover:text-foreground'
          onClick={() => setCollapsed(!collapsed)}
        >
          <Minus className='h-6 w-6 rotate-180 text-default-500' />
        </button>
      </div> */}
    </div>
  );
}
