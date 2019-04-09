# ZeroTrace
RevolutionUC 2019 project. Like Snapchat but a tad worse. For now.



## Inspiration

I like the features of SnapChat, but I don't like how bulky its gotten or the fact that service operates using centralized servers that could be doing who-knows-what with my data.
## What it does

This hack is a simple p2p chat app built upon the IPFS framework. Anyone with the project can communicate with other users in the same chat room, regardless of location or device.
## How I built it

First I built it using nodejs and ngrok, then I used browserify to compile the JavaScript so that I could run server-side script in the clients browser. Once I had a decent program, I migrated the project to an electron app so that it could be distributed as a cross-platform executable.(It behaves the same in browser and on the desktop.)
## Challenges I ran into

I had trouble with styling the app so that it looked nice. It still doesn't look nice. I did not implement the more complex features such as direct messaging and custom aliasing.
## Accomplishments that I'm proud of

This project is actually my senior project for my CS major. I started from scratch and I've gotten more accomplished at this hackathon than I have in 8 weeks of my Senior Projects course.
## What I learned

I learned more about the IPFS network, how to add content to IPFS so that it can be accessed outside of a local network. I learned more about programming in pure Javascript and CSS styling.
## What's next for ZeroTrace

I would like to add features such as a custom human-readable alias associated with each user in the room, direct messaging between users, the ability to save individual messages by each user (a feature of SnapChat) and the ability to send multimedia messages. The end goal would be to have a SnapChat like app that is usable enough that I could share it with my friends and communicate with them on this instead. There would also be the need for security and the ability to prove identity, which should go hand in hand. I would also want to host the project on a human readable website, powered by IPFS.
