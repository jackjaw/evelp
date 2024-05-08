const fr = {
  message: {
    header: {
      menu: "Menu",
      home: "Home",
      serverName: "Tranquility",
      market: "The Forge",
      serenity: "Serenity",
    },
    corporation: {
      placeholder: "Veuillez sélectionner ou saisir la faction et la société",
    },
    dialog: {
      title: "Configuration",
      materialPrice: "Matériel Prix",
      materialPlaceholder: "Veuillez sélectionner le type",
      productPrice: "Produit Prix ​",
      productPlaceholder: "Veuillez sélectionner le type",
      scope: "Pondéré Prix",
      scopePlaceholder: "Veuillez sélectionner une fourchette de prix pondérée",
      days: "Quantité Gamme",
      daysPlaceholder: "Veuillez sélectionner une plage de dates",
      tax: "Impôt",
      week: "7j",
      month: "30j",
      season: "90j",
      buyPrice: "Achat Prix",
      sellPrice: "Vente Prix",
      reset: "Réinitialiser",
      close: "Fermer",
      dataTitle: "Données",
      quickbarTitle: "Barre rapide",
      sourceList: "Toute",
      targetList: "Barre rapide",
      desc: {
        title: "Description",
        dataDesc: "Description de la configuration",
        tableDesc: "Description du tableau",
        claim: "Déclaration",
        blueprint: "Plan",
        materialContent: "Type de prix pour tous les matériaux (matériaux d'échange, matériaux de plan)",
        productPriceContent: "Type de prix pour tous les articles de la boutique LP",
        scopeContent: "Calcul du prix pour tous les articles. Les commandes à bas prix et à volume élevé sont filtrées. Les prix de vente et d'achat sont les prix moyens des prix les plus bas ou les plus élevés de x% de quantité.",
        daysContent: "Le volume des transactions (moyenne quotidienne) dans le tableau est la moyenne du volume total des transactions à la date de la transaction",
        taxContent: "Les recettes et les bénéfices sont les valeurs hors taxe de ce ratio",
        costContent: "Prix total de tous les matériaux (matériaux d'échange, matériaux de plan)",
        incomeContent: "Prix hors taxe du prix de l'article multiplié par la quantité",
        volumeContent: "Moyenne quotidienne du volume des transactions à la date de la transaction",
        saleIndexContent: "Cette valeur est destinée à montrer les articles faciles à vendre et ayant un ISK/LP élevé. Elle est obtenue en multipliant les scores de trois indicateurs : montant total des transactions quotidiennes des articles, volume des transactions quotidiennes et ISK/LP",
        unitProfitContent: "Profit ISK après impôt par point LP",
        blueprintContent: "Les prix des plans dans les tableaux et les commandes sont calculés selon les produits des plans",
        claimContent: "EVE Online and the EVE logo are the registered trademarks of CCP hf. All rights are reserved worldwide. "+
        "All other trademarks are the property of their respective owners. EVE Online, the EVE logo, EVE and all associated logos "+
        "and designs are the intellectual property of CCP hf. All artwork, screenshots, characters, vehicles, storylines, "+
        "world facts or other recognizable features of the intellectual property relating to these trademarks are likewise the intellectual property of CCP hf."
      },      
    },
    table: {
      name: "Nom",
      quantity: "Quantité",
      lpCost: "LP Coût",
      iskCost: "ISK Coût",
      cost: "Matériel Coût",
      price: "Prix",
      income: "Revenu",
      profit: "Profit",
      volume: "Volume",
      saleIndex: "Index de vente",
      unitProfit: "ISK/LP",
      lookUp: "Recherche de nom d'élément",
      orders: "Order",
      operation: "Opération",
      error: "Erreur",
      material: {
        lpStoreMaterail: "Echange Matériel",
        bluePrintMaterial: "Fabrication Matériel",
        name: "Nom",
        quantity: "Quantité",
        price: "Prix",
        type: "Type",
        cost: "Coût",
        error: "Erreur",
        copy: "Copie",
        copySuccess: "Copie réussie!",
        copyFail: "Échec de la copie!",
        sum: "Somme",
      },
    },
    order: {
      sellOrder: "Vente Ordre",
      buyOrder: "Acheter Ordre",
      history: "Histoire",
      orderId: "OrdreId",
      systemName: "Lieu",
      volume: "Volume",
      price: "Prix",
      unitProfit: "ISK/LP",
      expiration: "Expiration",
      lastUpdated: "Dernière mise à jour",
    },
    statis: {
      lpRange: "ISK/LP Gamme",
      number: "Quantité",
      cost: "Coût",
      income: "Revenu",
      profit: "Profit",
      aveLpPrice: "Moyen ISK/LP",
      unitProfit: "ISK/LP",
    },
    stock: {
      average: "Moyenne(j)",
      minAndmax: "Min/Max(j)",
      average5d: "Moyenne Mobile(5j)",
      average20d: "Moyenne Mobile(20j)",
      minAndmax5d: "Min/Max(5j)",
      volume: "Volume",
      price: "Prix",
      rangeSelector: {
        month: "1m",
        threeMonths: "3m  ",
        halfYear: "6m",
        yearToDay: "ACD",
        year: "1an",
        all: "Tous",
      },
    },
    err: {
      produceBuy:"Échec de la récupération du prix d'achat de <b>$1</b>",
      productSell:"Échec de la récupération du prix de vente de <b>$1</b>",
      materialBuy:"Échec de la récupération du prix d'achat du matériel de fabrication <b>$1</b>",
      materialSell:"Échec de la récupération du prix de vente du matériel de fabrication <b>$1</b>",
      requirementBuy:"Échec de la récupération du prix d'achat du matériel d'échange <b>$1</b>",
      requirementSell:"Échec de la récupération du prix de vente du matériel d'échange <b>$1</b>",
      buyOrder:"Aucun ordre d'achat trouvé sur le marché",
      sellOrder:"Aucun ordre de vente trouvé sur le marché",
      order:"Il n'y a pas d'ordres sur le marché"
    },
  },
};

export default fr;
