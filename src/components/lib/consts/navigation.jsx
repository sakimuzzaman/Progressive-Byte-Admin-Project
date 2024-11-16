import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	
	
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'hrm',
		label: 'HRM',
		path: '/hrm',
		icon: <HiOutlineCube />
	},
	{
		key: 'accounts',
		label: 'Financial accounting',
		path: '/accounts',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'inventory',
		label: 'Inventory Management',
		path: '/inventory',
		icon: <HiOutlineUsers />
	},
	{
		key: 'reports',
		label: 'Reports',
		path: '/reports',
		icon: <HiOutlineDocumentText />
		
	},
	{
		key: 'meetings',
		label: 'Zoom meeting',
		path: '/meetings',
		icon: <HiOutlineAnnotation />
	},
	{
		key: 'chats',
		label: 'Chats',
		path: '/chats',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'contacts',
		label: 'Contact supports',
		path: '/contacts',
		icon: <HiOutlineDocumentText />
	}

]

