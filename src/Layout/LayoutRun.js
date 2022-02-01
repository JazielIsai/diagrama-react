import 'flexlayout-react/style/dark.css';

export const json = {
    global:{
        tabEnableClose: false,
        tabEnableFloat: false,
    },
    borders: [
        {
            type: 'border',
            location: 'bottom',
            selected: 0,
            enableDrop: true,
            size: 300,
            children: [
                {
                    type: 'tab',
                    name: 'Data / Output',
                    component: 'text'
                },
                {
                    type: 'tab',
                    name: 'Block Properties',
                    component: 'text'
                }
            ]
        },
        {
            type: 'border',
            location: 'right',
            size: 300,
            children: [
                {
                    type: 'tab',
                    name: '',
                    component: ''
                }
            ]
        }
    ],
    layout: {
        type: 'row',
        id: 'Dashboard',
        weight: 100,
        children: [
            {
                type: 'tabset',
                weight: 50,
                selected: 0,
                children: [
                    {
                        type: 'tab',
                        name: 'Dashbord',
                        component: 'text'
                    }
                ]
            }
        ]
    }
}