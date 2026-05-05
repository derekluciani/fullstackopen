```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    server->>browser: Returns HTML file, DOM is established, content includes "new_note" input field

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server->>server: Returns CSS file, UI styling is established

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server->>browser: Returns JS file
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server->>server: Returns JSON file
    browser: logs the JSON data in the browser console
    browser: Runs the callback function which manipulates the DOM and creates a list element for each data object from the JSON file

    browser: User submits new_note "Cool"
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    server: appends new_note "Cool" as a new data object in `data.json`
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server->>browser: Returns JSON file w/ appended new_note "Cool" data
    browser: logs the JSON data in the browser console
    browser: Runs the callback function which manipulates the DOM and re-creates a list element for each data object from the JSON file


```



