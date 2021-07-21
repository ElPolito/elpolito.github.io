# Internship at Easylife

I have realized an internship at Easylife at the end of my two-year univeristy degree.

## Mission

You can find a description of the company in the previous part.

My principle assignment during this internship was the creation of a chatbot allowing the employees of Easylife's clients to find information about their concierge simply by sending text or Slack message.

When I arrived, a chatbot was already developped but it was not corresponding to Easylife's demands. Therefore, I had to recreate a new project based on the first one. At first, I have discovered the project and I have made a benchmark of the different NLU (Natural Language Understanding) technologies available.
Finally, I choose SAP Recast which was suited for our needs.

After that, I have trained Recast with the diferent intentions of our final users. And then I have developped the chatbot with NodeJs, Express and Typescript.

The first step was to respond a correct message depending the intention of the user. From a natural language message sent to Recast, the chatbot had to return a correct response.

For exemple, if the user asks: _"What are the concierge service hours?"_ we first need to ask Recasr the user intent (here the hours) then from that information, we need to find in the database the concierge of the current user and send its hours.

The last part was the link between the message sent by text or Slack and the application.

Once the project was over, I have been asked to, first, improve the responses depending the user's intent. For exemple, if the user asks _"At what time does the concierge open today?"_, we want to send only the opening hours of the current day and not the ones for the entire week.

After that step, I have created web interface to visualize the logs of the chatbot but also to manage its responses. Therefore, I have created a pseudo language wit hteh product owner based on Yaml to make loops if the user wants to have the composition of a vegetables basket or to handle masculine, feminine, singular and plural.

This project was very interesting and forced me to make a lots of research.
