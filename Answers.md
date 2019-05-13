1.  Explain the differences between `client-side routing` and `server-side routing`.
    Client-side routing is managed via javascript that is already on the webpage, allowing us to display whatever information is asked for as soon as it's requested, without refreshing the page. Server-side routing makes calls directly to the server and brings back whatever information is requested, but no more and no less than what is asked for. It also is forced to refresh the page because new information is introduced into the web page. This can be taxing on bandwidth because of the number of different protocols that are forced to progress in order to avoid errors. Client-side is the modern approach to making data more accessible and modifiable. 

1.  What does HTTP stand for?
    HyperText Transfer Protocol
    it's the set of rules that's used by web applications when it comes to dealing with networks and data.

1.  What does CRUD stand for?
    Create, Read, Update, Delete
    These are processes that HTTP methods perform on servers to gather and use data.

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    Create -> .Post
    Read -> .Get
    Update -> .Put
    Delete -> .Delete

1.  Mention three tools we can use to make AJAX requests
    .Post --> Adds a new entry of data to the server
    .Get --> Snags information from the server to be read and displayed on screen or otherwise used
    .Put --> Updates information in a server based on an element that is passed in along with the put request