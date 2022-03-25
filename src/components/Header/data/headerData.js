import { v4 as uuid } from 'uuid';

export const links = [
    {
        id: uuid(),
        path: '/',
        text: 'Home'
    },
    {
        id: uuid(),
        path: '/about',
        text: 'About'    
    },
    {
        id: uuid(),
        path: '/contact',
        text: 'Contact'
    },
    {
        id: uuid(),
        path: '/services',
        text: 'Services'
    }
]