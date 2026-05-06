```mermaid
sequenceDiagram
    participant browser
    participant server

    note right of browser: User submits new_note "Ohh Rap I Ya"
    note right of browser: new_note_spa is appended to local data array
    browser->>browser: GET request to server prevented
    note right of browser: Re-render JSON note data as list elements
    browser->>server: POST new_note_spa "Ohh Rap I Ya" as JSON data on server
```
