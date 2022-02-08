import "flexlayout-react/style/dark.css";

export const json = {
  global: {
    "tabEnableClose":false,
    "tabEnableFloat": false
  },
  borders:[
      {
        "type": "border",
        "location":"top",
        "size": 100,
        "children": [
            {
              "enableDrag": false, 
              "enableRename": false, 
              "enableClose": false,
              "type": "tab",
              "name": "Menu",
              "component": "Header"
            }
          ]
      },
      {
        "type": "border",
        "location":"left",
        "size": 300,
        "children": [
          {
            "enableDrag": true, 
            "enableRename": false, 
            "enableClose": false,
            "type":"tab",
            "name": "Node Library",
            "component": "SidebarLeft"
          }
        ]
      },
      {
        "type":"border",
        "location": "right",
        "size": 300,
        "children": [
          {
            "weight": 100,
            "enableDrag": true, 
            "enableRename": false, 
            "enableClose": false,
            "type":"tab",
            "name": "Node Properties",
            "component": "SidebarRight"
          }
        ]
      }
    
  ],
  layout: {
      "type": "row",
      "id": '#1',
      "weight": 100,
      "children": [
          {
              "type": "tabset",
              "weight": 50,
              "selected": 0,
              "children": [
                  {
                    "enableDrag": true, 
                    "enableRename": false, 
                    "enableClose": false,
                    "type": "tab",
                    "name": "Diagram WorkFlow",
                    "component": "DragAndDrop"
                  }
              ]
          },
      ]
  }
};

