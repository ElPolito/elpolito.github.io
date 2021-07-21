# Stage chez Easylife

J'ai réalisé en stage au sein de l'entreprise Easylife afin de valider mon DUT informatique.

## Mission

Vous pouvez retrouver une présentation de l'entreprise Easylife dans la partie précédente.

Ma mission principale lors de ce stage fut la mise en place d'un chatbot permettant aux employés des entreprises clientes d'Easylife d'obtenir des renseignements sur leur conciergerie en envoyant simplement des SMS ou des message Slack.

A mon arrivée, un chatbot avait déjà été développé mais il ne correspondait pas exactement aux attentes d'Easylife. J'ai donc dû recréer un nouveau projet en m'appuyant sur ce premier développement. J'ai d'abord pu m'approprier un petit peu les outils de l'entreprise puis j'ai fait une étude comparative des différents NLU (Natural language understanding) disponible sur le marché.
Finalement j'ai retenu SAP Recast qui répondait plutôt bien aux besoins du projet.

J'ai ensuite pu entraîner rapidement Recast aux différentes intentions de nos utilisateurs finaux. Finalement, j'ai pu commencer à coder. J'ai donc réalisé ce projet en NodeJS avec Express et Typescript.

La première étape fut la mise en place de la réponse à une intention de l'utilisateur. A partir d'une phrase en langage naturel envoyée à Recast, il fallait retourner une réponse correspondant aux attentes de l'utilisateur.

Par exemple, si l'utilisateur demande: _"Quelles sont les horaires de la conciergerie ?"_ il faut d'abord demander à Recast de déterminer l'intention de l'utilisatteur (ici les horaires) ensuite à partir de cette information, il nous faut récupérer en base de données la conciergerie à laquelle est rataché l'utilisateur puis d'envoyer ses horaires.

La dernière partie fut la mise en place du lien entre le message envoyé par SMS ou sur Slack et l'application.

Une fois que le projet a été finit, il m'a été demandé d'améliorer d'abord les réponses en fonction de l'intention de l'utilisateur. Par exemple si l'utilisateur demande _"A quelle heure ouvre la conciergerie aujourd'hui ?"_, on veut ne renvoyer que les horaires d'ouverture du jour et non tous les horaires de la conciergerie.

Après cette étape, on m'a demandé de créer un interface graphique que j'ai réalisée en React afin de visualiser les logs du chatbot mais également afin de gérer les réponses du chatbot. J'ai donc mis en place en collaboration avec l'UX designer un pseudo langage basé sur le YAML permettant par exemple de faire des boucles si l'utilisateur souhaite savoir la composition d'un des paniers disponible dans sa conciergerie ou de gérer le masculin, le féminin, le singulier et le pluriel.

Ce projet fut très intéressant et m'a poussé à faire de nombreuses recherches afin de le mener à bien.
