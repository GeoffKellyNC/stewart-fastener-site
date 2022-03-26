import { v4 as uuid } from 'uuid';

export const homeData = [
    {
        id: uuid(),
    }
]


export const servicesData = [
    {
        id: uuid(),
        name: 'Service 1',
        className: 'service-text'
    },
    {
        id: uuid(),
        name: 'Service 2',
        className: 'service-text white-text'

    },
    {
        id: uuid(),
        name: 'Service 3',
        className: 'service-text'
    },
    {
        id: uuid(),
        name: 'Service 4',
        className: 'service-text white-text'

    },
    {
        id: uuid(),
        name: 'Service 5',
        className: 'service-text'

    },
    {
        id: uuid(),
        name: 'Service 6',
        className: 'service-text white-text'

    },
    {
        id: uuid(),
        name: 'Service 7',
        className: 'service-text'

    },
    {
        id: uuid(),
        name: 'Service 8',
        className: 'service-text white-text'

    }
]

export const contactData = {
        id: uuid(),
        businessName: 'Steward Fastener LLC',
        businessHours:
                {
                        id: uuid(),
                        monday: { name: 'Monday', time: '7:30 AM - 4:00 PM'},
                        tuesday: { name: 'Tuesday', time: '7:30 AM - 4:00 PM'},
                        wednesday: { name: 'Wednesday', time: '7:30 AM - 4:00 PM'},
                        thursday: { name: 'Thursday', time: '7:30 AM - 4:00 PM'},
                        friday: { name: 'Friday', time: '7:30 AM - 4:00 PM'},
                        saturday: { name: 'Saturday', time: 'By Appointment'},
                        sunday: { name: 'Sunday', time: 'By Appointment'}
                },
        address:
            {
                    id: uuid(),
                    street: '11517 Cordage Street Suite F',
                    city: 'Charlotte',
                    state: 'NC',
                    zip: '28273',
                    country: 'USA'
            },
        phone: '800-877-7770',
        localPhone: '704-527-4713',
        fax: '704-522-7522',
        email: 'sales@stewartfastener.com'
}