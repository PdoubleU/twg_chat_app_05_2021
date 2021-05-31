
# Chat App / React Native, GraphQl


This app allows user to chat with other users via graphQL API. App was created with React Native using Expo to set up developing enviroment.

## Features

### View available rooms/conversations
> All rooms available for logged in user are showed as a list on the Rooms screen. Each tab shows the users picture, room's title, last message and the date of last activity/message/

### Chat with others
> Users can chat. All chat created with GiftedChat library and customized.

## Used technologies and approaches

> During developing I was sticking to below requirements and good practices:
> - use react hooks
> - use functional components, unless class components fits better
> - avoid prop drilling (use react context)
> - list items rendered with unique keys
> - desing code to be easily scalable in the future

I have used the following technologies:

    1. React Native
    2. JavaScript ES6
    4. GraphQl

## Used tools:

The followed tools were used to finalize the project:

    1. Visual Studio Code
    2. GIT - as a control version system
    3. Expo - for instant project development without struggling with setting up the developer environment
    4. Graphiql - to test the queries
    5. Apollo, Phoenix - to handle HTTPS and WebSocket connection
## Interesting facts about the project:

> This is the first approach to React Native and GraphQl. A lot of issues on the way (like instantly glitchig Expo Go app or problems with setting up Apollo Client for both HTTPS and WS connections) and lot of new stuff. This project can be boiled down to few words: really hard task.
