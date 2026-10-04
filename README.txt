CARTE INTERACTIVE DU ZONDOMA — VERSION MISE À JOUR

DÉMARRAGE
Décompressez entièrement le ZIP et ouvrez MA_PROVINCE/administration.html. Conservez tous les sous-dossiers avec index.html. Pour publier la carte, transférez tout le contenu du dossier sur un hébergement HTTPS.

FOND DE CARTE
OSM France remplace OSM Standard, avec attribution et trois sous-domaines a/b/c. Une tuile correspondant à la zone a répondu HTTP 200 lors de la vérification. Le fond nécessite Internet et dépend de la disponibilité du service. Les données vectorielles restent accessibles hors connexion. Pour consulter les conditions : https://www.openstreetmap.fr/usage/

ÉCRAN
Le bandeau du titre est compact : emblème à gauche, titre au centre et bouton du tableau de bord à droite, pour libérer de la hauteur pour la carte.
Sur ordinateur, la carte et les panneaux s’adaptent à la hauteur disponible. Les panneaux et le tableau défilent indépendamment. Sur mobile, les blocs s’empilent et la page défile normalement.

REQUÊTES MULTICRITÈRES
1. Sélectionnez une couche.
2. Choisissez un champ, un opérateur et une valeur.
3. Cliquez sur + Ajouter pour ajouter d’autres critères.
4. Choisissez ET (tous les critères) ou OU (au moins un critère).
5. Cliquez sur Lancer la requête.
Exemple : couche Localités, EQecole supérieur à 0 ET Nom_1 égal à BASSI.
Les valeurs des champs sont proposées dans la liste de saisie. Les opérateurs Vide et Non vide ne nécessitent pas de valeur.

TABLE ATTRIBUTAIRE ET CSV
Le tableau apparaît sous la carte uniquement après une requête. Il présente tous les attributs des résultats, avec défilement horizontal et vertical. Cliquez sur une ligne pour localiser l’entité. Exporter en CSV télécharge tous les résultats de la dernière requête, avec tous les champs. Le CSV utilise UTF-8 avec BOM et le point-virgule pour faciliter l’ouverture dans Excel. Fermer ou Réinitialiser efface le tableau et désactive l’export.

TABLEAU DE BORD CONTEXTUEL
Deux graphiques sont affichés côte à côte sur ordinateur et empilés sur petit écran. Chacun possède son propre filtre de commune, indépendant de l’autre. Tous les types d’équipements sont inclus.

CAMEMBERT
Choisissez une commune dans le filtre au-dessus du camembert. Les secteurs et la légende affichent les nombres et pourcentages par type pour cette commune. Effacer la sélection remet le filtre sur Toute la province et affiche un seul camembert global. Le pourcentage est calculé sur la somme des présences de tous les types dans le périmètre choisi. Les valeurs sont arrondies.

RÉPARTITION DES ÉQUIPEMENTS
L’histogramme est remplacé par un panneau inspiré de la capture : filtres Commune et Équipement, effectif, pourcentage et liste en deux colonnes. Par défaut, le panneau présente les écoles de toute la province.
Le résumé indique le nombre de localités disposant du type choisi sur le nombre total de localités de la commune sélectionnée. Le pourcentage correspond à cette couverture, et non à la proportion des types dans le camembert. Effacer la sélection de commune affiche toute la province.
Cliquez sur un nom pour localiser la localité et ouvrir son information. Le bouton Afficher sur la carte et dans la table présente tous les résultats du filtre, exportables en CSV. En l’absence de résultats, une indication apparaît et le bouton est désactivé.

INTERPRÉTATION
Les données sont des champs binaires 0/1 : présence d’un type dans une localité, pas nombre de bâtiments. Une localité disposant d’une école et d’un marché contribue deux présences au total.

CARTE ET TABLE
Chaque panneau a un bouton pour afficher les localités de son périmètre dans la carte et la table contextuelle. Cliquez sur un secteur, une légende ou un nom de localité pour afficher uniquement les localités disposant du type choisi dans le périmètre du graphique. Cela ne modifie pas les filtres des panneaux. La table présente le nom, le statut, la commune et les champs des équipements concernés ; elle reste exportable en CSV.

Le bouton Effacer le résultat de la carte et de la table restaure la couche des localités. Le panneau des couches contient uniquement les commandes de visibilité.

VÉRIFICATIONS
La réponse d’une tuile OSM France, les références aux fichiers, la syntaxe JavaScript, les requêtes ET/OU, les comparaisons numériques, les valeurs vides, les accents, l’échappement CSV et les statistiques par localité, les agrégations par commune et les filtres de types multiples, la sélection multicommunes, les totaux de l’histogramme et les pourcentages des camemberts ont été testés. Le rendu visuel complet et les interactions dans un navigateur n’ont pas pu être vérifiés dans cet environnement.

CORRECTION DES COUCHES ET POPUPS
Le moteur d’étiquettes regroupe les événements de retrait et d’ajout en une mise à jour par image. Il traite uniquement les étiquettes attachées de couches visibles et ne réinsère jamais de couche masquée. Les commandes de visibilité ne sont synchronisées que pour la couche concernée.
Les popups des localités affichent le nom, la commune, le statut et les types d’équipements présents sous forme de liste verticale, y compris pour les points issus d’une requête. Un message apparaît lorsqu’aucun équipement n’est recensé.
Des tests ciblés ont vérifié le regroupement de 1112 événements en une seule mise à jour, l’absence de réinsertion des couches masquées et le contenu des popups.

MISE À JOUR DES SIX COUCHES
Cliquez sur Mise à jour au-dessus de la carte. Choisissez une couche. Le tableau paginé et la recherche permettent de sélectionner une entité.

ATTRIBUTS ET CHAMPS
Modifiez les valeurs et leur type (texte, nombre, booléen, vide). Appliquer les attributs et la géométrie met l’entité à jour dans le brouillon. La section Gérer les champs permet d’ajouter un champ avec une valeur par défaut, de renommer un champ ou de le supprimer dans toutes les entités de la couche. Un renommage conserve les valeurs. Vous pouvez aussi ajouter et supprimer des entités.
Les champs Nom, Statut, Nom_1, CLcommune et EQ* alimentent les noms, symboles, popups et statistiques. Leur suppression ou renommage supprime leur information dans ces fonctions tant qu’ils ne sont pas restaurés ; la carte conserve des valeurs d’affichage de secours.

DONNÉES SPATIALES
Une carte d’édition affiche la géométrie sélectionnée. Déplacez les poignées rouges pour modifier ses sommets. Les anneaux de polygones restent fermés quand vous déplacez leur premier sommet. Pour ajouter ou supprimer un sommet, modifier une structure multiple ou traiter plus de 1500 sommets, utilisez le texte GeoJSON ou importez une couche. Prévisualiser les coordonnées valide et affiche la géométrie saisie. Appliquer les attributs et la géométrie conserve le changement dans le brouillon.
Les géométries doivent être en WGS84 (longitude, latitude). Les contrôles portent sur le type de la couche, les coordonnées, le nombre de sommets et la fermeture des anneaux. Ils ne constituent pas une validation topologique complète des auto-intersections.

ENREGISTREMENT ET EXPORT
Enregistrer et actualiser la carte enregistre toutes les couches dans le navigateur et recharge la carte, les requêtes et les statistiques avec les données modifiées. Ces modifications sont propres au navigateur et ne réécrivent pas automatiquement votre dossier ou votre hébergement.
Sauvegarder toutes les couches télécharge une sauvegarde JSON, à conserver hors du navigateur. Restaurer une sauvegarde la charge dans le brouillon ; enregistrez ensuite pour l’appliquer.
Exporter la couche GeoJSON produit un fichier SIG réutilisable. Importer / remplacer la couche GeoJSON remplace les entités et attributs de la couche choisie après validation.
Exporter le fichier de données .js produit le fichier correspondant à la couche, avec son nom d’origine. Remplacez le fichier de même nom dans le dossier data puis téléversez-le sur votre hébergement pour rendre la modification permanente et visible aux autres utilisateurs. Répétez cet export pour chaque couche modifiée.
Si le navigateur bloque le stockage local ou si son quota est dépassé, le panneau conserve le brouillon et indique d’exporter les données. L’emplacement du fichier et les règles du navigateur peuvent modifier la disponibilité des données locales.
Annuler les changements de la couche remet le brouillon dans l’état chargé à l’ouverture de l’éditeur ; cela n’efface pas les modifications enregistrées antérieurement. Une sauvegarde antérieure permet de les restaurer.

Les contrôles de données et la restauration au chargement ont été testés. Le rendu complet et le déplacement des sommets dans un navigateur restent à vérifier.

NUMÉRISATION DIRECTE
Choisissez la couche puis cliquez sur Numériser une nouvelle entité. Cliquez sur la carte d’édition pour placer un point (localités), ajouter les sommets d’une ligne (routes, cours d’eau) ou les sommets d’un polygone (limites, plans d’eau). Un point est créé au clic ; pour une ligne ou un polygone, cliquez sur Terminer le dessin.
Retirer le dernier sommet et Annuler le dessin permettent de corriger la saisie. Les polygones sont fermés automatiquement. Renseignez ensuite les attributs, appliquez-les et cliquez sur Enregistrer et actualiser.
Sélectionnez une entité puis Redessiner la géométrie sélectionnée pour remplacer sa géométrie sans perdre ses attributs. Le changement est conservé après Appliquer les attributs et la géométrie. Les dessins inachevés ne peuvent pas être enregistrés ou exportés.

ADMINISTRATION PRIVÉE
Ce dossier est réservé à votre ordinateur : ouvrez administration.html. Ne publiez pas ce dossier, ni son archive, ni ses scripts d’édition. La version publique est fournie dans une archive distincte, sans éditeur ni numérisation. Il s’agit d’une séparation des fichiers ; aucun compte ou contrôle d’accès en ligne n’est configuré. Toute personne à qui vous donneriez le dossier privé pourrait l’utiliser.
Pour publier vos changements, exportez les fichiers .js des couches modifiées et remplacez les fichiers de même nom dans le dossier data de la version publique. La sauvegarde JSON complète sert à restaurer vos données dans cette administration privée.

MISE À JOUR SPATIALE SIMPLIFIÉE — MODE CONSEILLÉ
1. Ouvrez administration.html puis Mise à jour.
2. Choisissez la couche à modifier.
3. Cliquez directement sur un objet dans la carte d’édition. Déplacez ses points rouges pour changer sa position ou sa forme.
4. Cliquez sur Enregistrer : la carte est actualisée avec vos changements. Vous n’avez pas besoin de saisir des coordonnées ou de valider séparément la géométrie.
Pour ajouter un objet, cliquez sur Ajouter sur la carte. Un point se place en un clic ; pour une ligne ou une zone, cliquez sur les sommets puis Terminer. Vous pouvez renseigner le nom et les informations dans la section correspondante, puis Enregistrer.
Les coordonnées GeoJSON et les imports/exports sont dans les options avancées. La liste des entités est repliée ; elle reste disponible en complément de la sélection directe sur la carte. Le dossier privé reste réservé à votre ordinateur.
