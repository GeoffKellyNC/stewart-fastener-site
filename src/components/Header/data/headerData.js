import { v4 as uuid } from 'uuid';

export const links = [
    {
        id: uuid(),
        path: '/',
        text: 'Home'
    },
    {
        id: uuid(),
        path: 'https://online.flippingbook.com/view/929131120/',
        text: 'Catalog'    
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