GOAL: Combien de temps dure une playlist youtube ?

Test fait sur la playlist "Apprendre SQL de A à Z" (Grafikart)
lien de la playlist youtube : https://www.youtube.com/watch?v=iHKE_4KeNWQ&list=PLjwdMgw5TTLXXpRlzDZq7d8iS6YXgnslt

# 1- récupérer les temps sous le format mm:ss
    Sélecteur CSS => #text.ytd-thumbnail-overlay-time-status-renderer
    const list_selecteur = document.querySelectorAll("MON_SELECTEUR").map(el => el.innerHTML)

# 2 - formatage au format JSON
    Utilisation des Regex sur Vscode
    (\d+:\d+) => "$1"\n
    (\d+:\d+) : représente à un ou plusieurs chiffres, suivi de deux-points, suivi d'un ou plusieurs chiffres
    "$1" : représente le groupe de capture et entoure chaque élément avec des guillemets doubles (").

# 3 - Extraction
    Il s'agira d'extraire les secondes, minutes et heures 

Amélioration envisageable:
 * Ajouter des tests unitaire afin de prévenir les futurs régression ainsi que les changements du css de Youtube (ce qui nour permet de récuperer les temps via les selecteur CSS).
 * Ajout de typescript afin d'éviter les erreurs de typage et avoir un code plus robuste
 * Ajouter une UI ou une CLI afin de pourvoir mettre le lien de n'importe quel playlist via un interface
