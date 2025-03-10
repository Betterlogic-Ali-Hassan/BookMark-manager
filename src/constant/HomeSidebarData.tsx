import { IoBookmarks } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { MdExtension } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

export const sidebarData = [
  {
    icon: <IoBookmarks size={20} />,
    tooltip: "Bookmarks",
    link: "home",
  },
  {
    icon: <FaHistory size={20} />,
    tooltip: "History",
    link: "history",
  },
  {
    icon: <MdExtension size={20} />,
    tooltip: "Extensions",
    link: "extensions",
  },
  {
    icon: <IoMdDownload size={24} />,
    tooltip: "Downloads",
    link: "downloads",
  },
];
export const sidebarDataBottom = [
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        aria-hidden='true'
        role='img'
        className='icon w-5 h-5'
        width='1em'
        height='1em'
        viewBox='0 0 256 256'
        data-v-b4402e20=''
      >
        <g fill='currentColor'>
          <path
            d='M208 144a80 80 0 0 1-160 0a101 101 0 0 1 1.3-16h157.4a101 101 0 0 1 1.3 16'
            opacity='.2'
          ></path>
          <path d='M174 47.75a254.2 254.2 0 0 0-41.45-38.3a8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M128 26c14.16 11.1 56.86 47.74 68.84 94H59.16C71.14 73.76 113.84 37.12 128 26m0 190a72.08 72.08 0 0 1-72-72q0-4 .36-8h143.28q.36 4 .36 8a72.08 72.08 0 0 1-72 72'></path>
        </g>
      </svg>
    ),
    tooltip: "Customize",
    link: "customize",
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        aria-hidden='true'
        role='img'
        className='icon w-5 h-5'
        width='1em'
        height='1em'
        viewBox='0 0 256 256'
        data-v-b4402e20=''
      >
        <g fill='currentColor'>
          <path
            d='M192 112a80 80 0 1 1-80-80a80 80 0 0 1 80 80'
            opacity='.2'
          ></path>
          <path d='m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72'></path>
        </g>
      </svg>
    ),
    tooltip: "Search",
    link: "search",
  },
  {
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        aria-hidden='true'
        role='img'
        className='icon w-5 h-5'
        width='1em'
        height='1em'
        viewBox='0 0 256 256'
        data-v-b4402e20=''
      >
        <g fill='currentColor'>
          <path
            d='m230.1 108.76l-31.85-18.14c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.6 104.6 0 0 0 162 32l-32 17.89h-4L94 32a104.6 104.6 0 0 0-34.11 19.25l-.16 36c-.7 1.12-1.37 2.26-2 3.41l-31.84 18.1a99.2 99.2 0 0 0 0 38.46l31.85 18.14c.64 1.16 1.31 2.29 2 3.41l.12 36A104.6 104.6 0 0 0 94 224l32-17.87h4L162 224a104.6 104.6 0 0 0 34.08-19.25l.16-36c.7-1.12 1.37-2.26 2-3.41l31.84-18.1a99.2 99.2 0 0 0 .02-38.48M128 168a40 40 0 1 1 40-40a40 40 0 0 1-40 40'
            opacity='.2'
          ></path>
          <path d='M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m109.94-52.79a8 8 0 0 0-3.89-5.4l-29.83-17l-.12-33.62a8 8 0 0 0-2.83-6.08a111.9 111.9 0 0 0-36.72-20.67a8 8 0 0 0-6.46.59L128 41.85L97.88 25a8 8 0 0 0-6.47-.6a111.9 111.9 0 0 0-36.68 20.75a8 8 0 0 0-2.83 6.07l-.15 33.65l-29.83 17a8 8 0 0 0-3.89 5.4a106.5 106.5 0 0 0 0 41.56a8 8 0 0 0 3.89 5.4l29.83 17l.12 33.63a8 8 0 0 0 2.83 6.08a111.9 111.9 0 0 0 36.72 20.67a8 8 0 0 0 6.46-.59L128 214.15L158.12 231a7.9 7.9 0 0 0 3.9 1a8.1 8.1 0 0 0 2.57-.42a112.1 112.1 0 0 0 36.68-20.73a8 8 0 0 0 2.83-6.07l.15-33.65l29.83-17a8 8 0 0 0 3.89-5.4a106.5 106.5 0 0 0-.03-41.52m-15 34.91l-28.57 16.25a8 8 0 0 0-3 3c-.58 1-1.19 2.06-1.81 3.06a7.94 7.94 0 0 0-1.22 4.21l-.15 32.25a95.9 95.9 0 0 1-25.37 14.3L134 199.13a8 8 0 0 0-3.91-1h-3.83a8.1 8.1 0 0 0-4.1 1l-28.84 16.1A96 96 0 0 1 67.88 201l-.11-32.2a8 8 0 0 0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.1 8.1 0 0 0-3-3.06l-28.6-16.29a90.5 90.5 0 0 1 0-28.26l28.52-16.28a8 8 0 0 0 3-3c.58-1 1.19-2.06 1.81-3.06a7.94 7.94 0 0 0 1.22-4.21l.15-32.25a95.9 95.9 0 0 1 25.37-14.3L122 56.87a8 8 0 0 0 4.1 1h3.64a8 8 0 0 0 4.1-1l28.84-16.1A96 96 0 0 1 188.12 55l.11 32.2a8 8 0 0 0 1.22 4.22c.62 1 1.23 2 1.8 3.06a8.1 8.1 0 0 0 3 3.06l28.6 16.29a90.5 90.5 0 0 1 .05 28.29Z'></path>
        </g>
      </svg>
    ),
    tooltip: "Settings",
    link: "settings",
  },
];
