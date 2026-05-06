```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    server-->>browser: Returns HTML file, DOM is established, content includes "new_note" input field

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: Returns CSS file, UI styling is established

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server-->>browser: Returns JS file
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>browser: Returns JSON file
    browser: logs JSON data in browser console
    browser: Runs callback function, manipulates DOM, creates a list element for each data object from JSON file

    
```
