# Diamono Services

## Execution du projet docker

Commande de lancement du projet:
``` 
docker-compose up
```
Version Angular du projet [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

# Routes de l'application

Voici les routes disponibles dans cette application Angular :

| Path               | Component              | Description                                      | Guard         |
|--------------------|------------------------|--------------------------------------------------|---------------|
| `/`                | HomeComponent          | Page d'accueil par défaut                        |               |
| `/home`            | HomeComponent          | Page d'accueil                                   |               |
| `/shop`            | StoreComponent         | Page de la boutique                              |               |
| `/product`         | ProductComponent       | Détails d'un produit                             |               |
| `/auth`            | AuthComponent          | Page de connexion et d'inscription               |               |
| `/about`           | AboutComponent         | Page "À propos"                                  |               |
| `/thankyou`        | ThankyouComponent      | Page de remerciement après une commande          |               |
| `/checkout`        | CheckoutComponent      | Page de paiement                                 |               |
| `/cart`            | CartComponent          | Page du panier                                   | AuthGuard     |
| `/wish`            | WishComponent          | Page des souhaits                                | AuthGuard     |
| `/userprofil`      | UserprofilComponent    | Profil utilisateur                               | AuthGuard     |
| `/services`        | ServicesComponent      | Page des services                                |               |
| `/supplier`        | HomeSupplierComponent  | Page pour les fournisseurs                       |               |
| `/supplier/new`    | NewProductComponent    | Page de création d'un nouveau produit (fournisseur) |               |
| `**`               | NotFoundComponent      | Page 404 pour les routes non définies            |               |

## Notes
- Les routes protégées par `AuthGuard` nécessitent que l'utilisateur soit authentifié.
- La route `**` est une route de type catch-all qui affiche le composant `NotFoundComponent` pour toutes les URL non définies.


# Test des Guards avec des Identifiants déja configurés

Certains composants de cette application sont protégés par un `AuthGuard`, nécessitant que l'utilisateur soit authentifié pour y accéder. Pour tester ces guards, utilisez les identifiants d'exemple suivants :

### Identifiants de test

1. **Utilisateur 1**
  - **Prénom** : Adama
  - **Nom** : Diedhiou
  - **Pseudo** : adams_dd
  - **Email** : diedhiou.adama@ugb.edu.sn
  - **Téléphone** : +221773456321
  - **Mot de passe** : diedhiou

2. **Utilisateur 2**
  - **Prénom** : Solange
  - **Nom** : Boissy
  - **Pseudo** : solo_b
  - **Email** : boissy.solarange@gmail.com
  - **Téléphone** : +221786537832
  - **Mot de passe** : boissy

### Comment tester

On se connecte avec le pseudo et mot de passe (mdp)

1. **Authentification** : Utilisez l'un des identifiants ci-dessus pour vous connecter via la page `/auth`.
2. **Accès aux routes protégées** : Après authentification, essayez d'accéder aux routes protégées par le `AuthGuard`, telles que `/cart`, `/wish`, et `/userprofil`. 
