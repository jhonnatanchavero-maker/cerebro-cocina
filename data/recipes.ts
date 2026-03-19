// Auto-generated from recipes_final.json
// Contains all 100 recipes

export type AllergenType =
  | 'Gluten'
  | 'Lacteos'
  | 'Huevos'
  | 'Pescado'
  | 'Mariscos'
  | 'Frutos secos'
  | 'Cacahuetes'
  | 'Soja'
  | 'Apio'
  | 'Mostaza'
  | 'Sesamo'
  | 'Altramuces'
  | 'Moluscos'
  | 'Sulfitos';

export type CategoryType =
  | 'Segundo Plato'
  | 'Primer Plato'
  | 'Base/Generico'
  | 'Guarnicion'
  | 'Ensalada';

export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
  supplier: string;
  costPerUnit: number;
  totalCost: number;
}

export interface Recipe {
  id: string;
  title: string;
  filename: string;
  category: CategoryType;
  season: string;
  portions: number;
  ingredients: Ingredient[];
  elaboration: string;
  allergens: AllergenType[];
  pricePerRation: number;
  notes: string;
}

export const recipes: Recipe[] = [
  {
    "id": "albondigas-de-carne",
    "title": "ALBÓNDIGAS DE CARNE CON PATATAS PANADERA",
    "filename": "ALBONDIGAS DE CARNE.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Carne Ternera",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Carne Cerdo",
        "quantity": 300,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo picado",
        "quantity": 10,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Perejil Fresco",
        "quantity": 5,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Rebanadas de pan de molde, remojadas en leche",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebollas",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite oliva",
        "quantity": 0.4,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Vino tinto",
        "quantity": 0.5,
        "unit": "L",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Harina",
        "quantity": 25,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Agua",
        "quantity": 400,
        "unit": "L",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Patatas",
        "quantity": 800,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Pochar 1k y ½ de cebolla cortada en brunoix fina. Escurrirla y añadirla a la carne. Incorporamos 1L de huevina + Ajo + Perejil. Por otro lado, escurrimos el pan, añadimos sal. Mezclamos todo bien. Hacemos bolas de 50gr aprox. Salsa: Cortamos el resto de la cebolla en birepoix. Saltear en aceite caliente hasta sacarle el color. Agregar sal. Incorporar el vino tinto. Cuando reduce trabajamos con la harina, agua caliente y seguimos trabajando. Luego trituramos, lo pasamos a la batidora y luego chino fino. Levantar nuevamente y salamos si fuese necesario. Acompañamiento: Pelar y cortar las patatas en rodajas finas. Hornear a 180 °C con un chorrito de aceite de oliva, sal y opcionalmente un poco de cebolla, hasta que estén doradas y tiernas (aproximadamente 35-40 minutos).",
    "allergens": [
      "Gluten",
      "Lacteos",
      "Huevos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "albondigas-de-pescado-en-salsa-americana-con-arroz",
    "title": "ALBÓNDIGAS DE PESCADO EN SALSA AMERICANA CON ARROZ",
    "filename": "ALBONDIGAS DE PESCADO EN SALSA AMERICANA CON ARROZ.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "MERLUZA",
        "quantity": 1.2,
        "unit": "kg",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "GAMBON",
        "quantity": 1,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 12,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE OLIVA SUAVE",
        "quantity": 300,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 8,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MAICENA",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "HUEVINA",
        "quantity": 200,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SALSA AMERICANA",
        "quantity": 600,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ARROZ",
        "quantity": 600,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "LAUREL",
        "quantity": 3,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AGUA C/N",
        "quantity": 1.2,
        "unit": "l",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE GIRASOL PARA FRITURA",
        "quantity": 300,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "",
    "allergens": [
      "Huevos",
      "Pescado",
      "Mariscos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "albondigas-de-berenjena-calabaza-y-curry",
    "title": "ALBÓNDIGAS DE BERENJENA, CALABAZA, CURRY",
    "filename": "ALBÓNDIGAS DE BERENJENA, CALABAZA Y CURRY.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [],
    "elaboration": "",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "alitas-de-pollo-al-ajillo",
    "title": "ALITAS DE POLLO AL AJILLO",
    "filename": "ALITAS DE POLLO AL AJILLO.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "ALITAS DE POLLO",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 1,
        "unit": "l",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE OLIVA",
        "quantity": 300,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 8,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Cortamos las alitas a la mitad, y cortamos la punta- Estiramos sin amontonar las alitas en una gastronorm. Pintamos con aceite. Agregar sal. Seguidamente lo metemos al horno a 190º durante 35 min. En una cazuela, ponemos a calentar el aceite a fuego medio bajo y desde frío, metemos el ajo. Confitar a fuego lento. Cuando vemos que esta dorado, subimos el fuego y le incorporamos el vino blanco. Dejar reducir a la mitad. Cogemos el refrito de ajo, y lo incorporamos a la gastronorm. Por último, volvemos a meter las alitas al horno, durante 7 min a 210º.\nACABADO Y PRESENTACIÓN\nEn el túper pondremos las tiras con las verduritas hasta 250 gr.",
    "allergens": [
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "alitas-de-pollo-en-salsa-teriyaki",
    "title": "ALITAS DE POLLO EN SALSA TERIYAKI",
    "filename": "ALITAS DE POLLO EN SALSA TERIYAKI.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "ALITAS DE POLLO",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SALSA DE SOJA DULCE CHINO",
        "quantity": 350,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MIEL",
        "quantity": 40,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MOSTAZA",
        "quantity": 40,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO EN POLVO",
        "quantity": 5,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA EN POLVO",
        "quantity": 5,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "TOMILLO",
        "quantity": 5,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMENTÓN",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE DE GIRASOL",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MAICENA",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Cortamos las alitas a la mitad y les cortamos la punta. Las metemos en bolsas de vacío, con 200 ml de salsa teriyaki- Cocer a 95º en vapor durante 2 horas y 15min.Seguidamente, abrimos las bolsas, y escurrimos las alitas, guardando el jugo. Estiramos sin amontonarse en gastronorm y las pintamos con la mezcla que indico a continuación:Mostaza, miel, ajo y cebolla en polvo, tomillo, pimentón y aceite). Tostar en horno a 210º con chimenea abierta durante 15 min. A mitad del tiempo, las giramos para dorar la otra parte. Para la salsa, con el jugo de las bolsas, más una cuarta parte del ungüento. Dejar reducir, y ligar con maicena. Rectificar de sal\nACABADO Y PRESENTACIÓN\nEn el túper pondremos las tiras con las verduritas hasta 250 gr.",
    "allergens": [
      "Soja",
      "Mostaza"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "alubias-blancas-con-chistorra",
    "title": "ALUBIAS BLANCAS CON CHISTORRA",
    "filename": "ALUBIAS BLANCAS CON CHISTORRA.docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "ALUBIA BLANCA",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ZANAHORIA",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO ROJO",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO VERDE",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SALSA DE TOMATE",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMENTON DULCE",
        "quantity": 50,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE GIRASOL",
        "quantity": 250,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CHISTORRA",
        "quantity": 300,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AGUA (PARA TRITURAR)",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Cortar toda la verdura en mirepoix, incorporar al vaso batidor incluyendo el pimentón, aceite de girasol, el tomate y el agua. Trituramos para tener la escalibada de verduras.Ponemos a cocer las alubias, le incorporamos el agua a ras de la legumbre. A los 10 min desespumar, incorporamos la escalibada y la chistorra. Dejamos cocer durante 1h en conjunto. Rectificar de sal. Abatimos y cortamos la chistorra en 4 mm para envasar.\nACABADO Y PRESENTACIÓN\n250g adornando con trozo de chistorra",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "alubias-pintas-con-costilla",
    "title": "ALUBIAS PINTAS CON COSTILLA",
    "filename": "Alubias pintas con costilla.docx",
    "category": "Primer Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [],
    "elaboration": "Preparación de la escalivada de verduras: picamos las verduras en mirepoix y las añadimos al vaso batidor y le incorporamos el pimenton, tomate, agua (2L) y sal y lo trituramos.Después cocemos la alubia (1H y 15´),  importante: cubrir la legumbre al ras de agua. eliminamos la espuma de la legumbre y le incorporamos de seguido la escalivada de verduras. Añadimos la costilla ( de cada pieza de costilla 20-25 raciones aprox). Dejamos cocer durante 1h, rectificamos de sal. La costilla después de abatir se corta para proceder al envasado.",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "alubias-pintas-con-morcilla-y-setas",
    "title": "ALUBIAS PINTAS CON SETAS Y MORCILLA",
    "filename": "ALUBIAS PINTAS CON MORCILLA Y SETAS..docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "ALUBIA PINTA",
        "quantity": 700,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ZANAHORIA",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO ROJO",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SALSA DE TOMATE",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMENTÓN DULCE",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PULPA PIMIENTO CHORICERO",
        "quantity": 10,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MORCILLA DE AÑO",
        "quantity": 2,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MORCILLA DE ARROZ",
        "quantity": 1,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SETAS",
        "quantity": 800,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE",
        "quantity": 125,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 10,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Dejar el dia antes las alubias a remojo.Triturar en crudo las verduras con el aceite,sal ,tomate, pimentón y la pulpa de pimiento choricero.Cocemos la legumbre .A los 15 minutos ,despumamos y asustamos con agua fria .Incorporamos la verdura triturada y dejamos cocer aproximadamente una hora y media con la morcilla de año . En  los últimos 15 minutos de cocción incorporar la morcilla de arroz.Sacamos la morcilla de año ,pelamos,picamos y se incorpora al guiso .Sacamos la morcilla de arroz ,dejamos enfriar y cortar aproximadamente 10-12 raciones .Salteamos las setas con ajo triturado al 4,5 durante 5 segundos en Thermomix.Nota:en el tupper aproximadamente 220 gramos de alubias con morcilla de año, 1 medallón de morcilla y 40 gramos de setas por separado.\nACABADO Y PRESENTACIÓN",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "arroz-con-cabecero-de-lomo-lacado-con-verduritas-y-romero-1",
    "title": "ARROZ CON CABECERO DE LOMO LACADO VERDURITAS Y ROMERO",
    "filename": "Arroz con cabecero de lomo lacado con verduritas y romero (1).docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Arroz vaporizado redondo",
        "quantity": 800,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cabecero de lomo",
        "quantity": 600,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "miel",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "calabacin",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "zanahoria",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "cebollaromero",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "salsa barbacoa(Makro)",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "salsa de soja",
        "quantity": 50,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Vino tinto",
        "quantity": 600,
        "unit": "g",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PESO POR RACIÓN",
        "quantity": 250,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Pasamos las cebollas por la thermomis 7 segundos al 7 . luego en olla ponemos con aceite y cocemos 10 minutos.Para el cabecero: se envasa al vacío al 98% con soja y sal. Se hace a 95º durante 4h. Abatimos y reservamos. Abrimos las bolsas de vacío y escurrimos bien la carne y la incorporamos a la cebolla. Tostamos bien el cabecero, le incorporamos el romero picado fino, seguidamente añadimos la miel y dejamos caramelizar. Después, incorporamos salsa barbacoa (100mg) y que siga caramelizando.Seguidamente añadimos el vino tinto, dejamos reducir y cuando haya recibido el vino tinto incorporamos el arroz, marmoleamos 3 min y mojamos con caldo. Le dejamos 7 min a fuego fuerte y 10 min a fuego bajo.El calabacín y zanahoria se pica en juliana fina y se deja en cruditex, salteando 3 min para que no pierda color. Lo reservamos para decorar\nACABADO Y PRESENTACIÓN\nEn tupper 225 de arroz y las verduritas decorando.",
    "allergens": [
      "Soja",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "arroz-con-carrilleras",
    "title": "ARROZ CON CARRILLERAS",
    "filename": "ARROZ CON CARRILLERAS.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "Carrillera",
        "quantity": 400,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Arroz vaporizado",
        "quantity": 320,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebolla",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Zanahoria",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Puerro",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento rojo",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite oliva",
        "quantity": 0.4,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Vino tinto",
        "quantity": 300,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimentón dulce",
        "quantity": 13,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo",
        "quantity": 10,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimienta negra",
        "quantity": 5,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa de tomate",
        "quantity": 150,
        "unit": "ml",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Triturar todas las verduras en la thermomix con salsa de tomate y aceite. Sofreir. Agregar las carrilleras. Sofreir. Mezclar bien. Incorporamos vino tinto. Cubrimos de agua al ras. Dejamos cocer 2-3 horas según tipo de carne. Calentar carrillera. Añadir el arroz con el doble de peso en agua. Hervir 7 min a fuego fuerte y a 10 min a fuego lento. Rectificar de sal.",
    "allergens": [
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "arroz-frito-japones",
    "title": "PERSONAS",
    "filename": "ARROZ FRITO JAPONES.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "ARROZ GRANO CORTO",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CALDO DE POLLO",
        "quantity": 1500,
        "unit": "L",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 2,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ZANAHORIA",
        "quantity": 4,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "GUISANTES",
        "quantity": 250,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "COLAS DE GAMBA",
        "quantity": 500,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "POLLO",
        "quantity": 600,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "HUEVOS",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SALSA DE SOJA",
        "quantity": 150,
        "unit": "L",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTA",
        "quantity": 2,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE GIRASOL",
        "quantity": 150,
        "unit": "L",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLINO DECORAR",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Cocer el arroz un dia anterior con el caldo. Cocer 15 min a fuego medio. Conservar en la nevera.Al dia siguiente aireamos el arroz con un tenedor. Picamos la cebolla y la zanahoria. Lo salteamos junto a los guisantes en el aceite. En un par de minutos añadimos el pollo. Cuando tome color, sumamos las gambas. Añadimos el huevo batido junto al arroz. Por ultimo la pimienta y la salsa de soja. Integramos bien. Decoramos con cebollino picado.\nACABADO Y PRESENTACIÓN",
    "allergens": [
      "Huevos",
      "Mariscos",
      "Soja"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "arroz-marinero",
    "title": "PERSONAS",
    "filename": "Arroz marinero.docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "arroz vaporizado",
        "quantity": 650,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "mejillones",
        "quantity": 150,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "almejas",
        "quantity": 250,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "GAMBÓN",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "calamar tubo limpio",
        "quantity": 200,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "salsa americana",
        "quantity": 1,
        "unit": "L",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "vino blanco",
        "quantity": 1,
        "unit": "L",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Fumet",
        "quantity": 2,
        "unit": "L",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "cucos",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "pimiento verde",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "pimiento rojo",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "cebolla",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ajo",
        "quantity": 70,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Se hace un fumet con los cucos y se infusiona media hora.Cortamos las verduras en mirapoix y trituramos.Incorporamos el calamar cortado en 1,5x1,5 y cocinamos 30 minutos ,incorporamos la salsa americana y cocinamos 3 minutos y mojamos con el doble de fumet caliente ,cocemos 17 minutos ,10 minutos a fuego fuerte y 7 minutos a fuego bajo.Los últimos 5 minutos incorporamos almejas,gambón y mejillón .Probamos de sal y rectificamos si es necesario.\nACABADO Y PRESENTACIÓN\n250 de arroz y una gamba",
    "allergens": [
      "Moluscos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "arroz-negro-con-alioli",
    "title": "PERSONAS",
    "filename": "Arroz negro con alioli.docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Arroz vaporizado",
        "quantity": 650,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Calamar tubo limpio",
        "quantity": 400,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebolla",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimenton",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento verde",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Vino blanco",
        "quantity": 250,
        "unit": "g",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Tinta Calamar",
        "quantity": 20,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo",
        "quantity": 15,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa tomate",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mayonesa",
        "quantity": 150,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Fumet pescado",
        "quantity": 1600,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Limpiamos y desinfectamos la verdura y la picamos en mirepoix y la pasamos por thermomix con su porcentaje de aceite para que triture bien.Seguidamente se lo incorporamos a la batiente, lo cocinamos durante 20 min y seguidamente incorporamos el pimenton y el tomate y de seguido incorporamos el vino blanco y lo dejamos reducir. Añadimos el calamar picado 0,5x0,5 Cm. Cubrimos al ras con el fumet y que se cocine durante 40 min. Después incorporamos la tinta de calamar, dejamos que cueza todo 10 min y le incorporamos el arroz. Le marmoleamos durante 3 min e incorporamos el fumet. Dejamos cocer durante 7 min a fuego vivo y 10 a fuego bajo. Rectificamos de sal.Para hacer el ali oli:Necesitamos 7 g de ajo y 150g de mayonesa. Lo trituramos en thermomix a velocidad 7.",
    "allergens": [
      "Huevos",
      "Moluscos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "arroz-tres-delicias",
    "title": "ARROZ TRES DELICIAS",
    "filename": "ARROZ TRES DELICIAS.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "ARROZ",
        "quantity": 750,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 5,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE DE GIRASOL",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "LAUREL",
        "quantity": 1,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "GUISANTES",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "HUEVO LÍQUIDO",
        "quantity": 300,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "JAMÓN YORK",
        "quantity": 150,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 8,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AGUA",
        "quantity": 1500,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "En una cazuela, incorporamos el aceite desde frio, incorporamos el ajo y el laurel. Dejar tostar a fuego lento. Una vez se tueste, sacar de la cazuela. Incorporamos el arroz y lo marmoleamos 3 min. Subimos el fuego, y le incorporamos el agua en caliente y la sal. Dejar cocer 17 min. Los 7 primeros a fuego vivo y el restante a fuego medio bajo. Una vez cocido el arroz, estirar en gastronorm y poner a abatir. Por otra parte, cocer el guisante a vapor a 95º durante 25 min.También, incorporamos el huevo en una gastronorm, con papel de horno, y lo metemos al horno a vapor a 95º durante 20 min. Enfriamos la tortilla y la cortamos en 0.5 x 0.5. Por último, cortamos el jamón, igual que la tortilla, mezclando todos los ingredientes hasta que estén bien integrados.\nACABADO Y PRESENTACIÓN\nEn el túper pondremos las tiras con las verduritas hasta 250 gr.",
    "allergens": [
      "Huevos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "bacalao-con-pisto",
    "title": "BACALAO CON PISTO",
    "filename": "BACALAO CON PISTO.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "Bacalao 2KCebolla 1,5kPimiento rojo 800gr Pimiento verde 800grCalabacín 800grBerenjena 800grTomate triturado 500grAceite de oliva 0.4 - 200mlAjo 100grPimentón dulce 25grSal 10grPimienta negra",
        "quantity": 15,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Cortamos el filete de bacalao en 5 partes, quitando las espinas de adelante. Se pasan por maicena y huevo. Rebozar a un tostado claro. Seguidamente ponemos en la cazuela aceite, y pochamos toda la verdura en brunoise fina. Ponemos a pochar la cebolla y los pimientos durante 20 min. A medio hacer, incorporamos la berenjena y el calabacín. Dejamos pochar otros 20 min. Al final incorporamos la salsa de tomate. Dejamos cocinar durante 5 min todo en conjunto. Rectificamos de sal.",
    "allergens": [
      "Huevos",
      "Pescado"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "bacalao-con-tomate-y-pimientos-asados",
    "title": "BACALAO CON TOMATE Y PIMIENTOS ASADOS",
    "filename": "BACALAO CON TOMATE Y PIMIENTOS ASADOS.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "Bacalao",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite de girasol",
        "quantity": 300,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Huevomaicena",
        "quantity": 300,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Tomate en salsa",
        "quantity": 400,
        "unit": "ml",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento rojo asado",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 8,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Dientes de ajo",
        "quantity": 50,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Azucar",
        "quantity": 40,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso bruto por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "",
    "allergens": [
      "Huevos",
      "Pescado"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "bacalao-gratinado-con-alioli",
    "title": "BACALAO GRATINADO CON ALIOLI",
    "filename": "BACALAO GRATINADO CON ALIOLI.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "BacalaoMaicenaHuevoAjoMayonesa",
        "quantity": 2000150,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso bruto por ración",
        "quantity": 250,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "",
    "allergens": [
      "Huevos",
      "Pescado"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "berenjena-rellena-de-carne",
    "title": "BERENJENA RELLENA DE CARNE",
    "filename": "BERENJENA RELLENA DE CARNE.docx",
    "category": "Primer Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "Berenjenas",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Picado carne 60/40 vacuno-cerdo",
        "quantity": 350,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebollas",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento rojo",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento verde",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Zanahoria",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo",
        "quantity": 70,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa de tomate",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mozarella",
        "quantity": 300,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Orégano",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Vino tinto",
        "quantity": 500,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mantequilla",
        "quantity": 80,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Harina",
        "quantity": 80,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Leche",
        "quantity": 1,
        "unit": "l",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 300,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "",
    "allergens": [
      "Gluten",
      "Lacteos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "bonito-del-norte-con-verduras",
    "title": "BONITO DEL NORTE CON VERDURAS",
    "filename": "Bonito del norte con verduras.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 1,
    "ingredients": [
      {
        "name": "BONITO DEL NORTE",
        "quantity": 600,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MENESTRA CONGELADA",
        "quantity": 400,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "BONIATO",
        "quantity": 320,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE DE OLIVA",
        "quantity": 7,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 1,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PESO POR RACIÓN",
        "quantity": 332,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "ACABADO Y PRESENTACIÓN",
    "allergens": [
      "Pescado"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "cachon-en-su-tinta",
    "title": "CACHÓN EN SU TINTA",
    "filename": "CACHÓN EN SU TINTA.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 4,
    "ingredients": [
      {
        "name": "CACHÓN",
        "quantity": 1200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 500,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO VERDE ITALIANO",
        "quantity": 250,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "GUINDILLA",
        "quantity": 1,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 300,
        "unit": "g",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE",
        "quantity": 80,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "FUMET",
        "quantity": 400,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 8,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "LIMPIAR LA JIBIA,QUITAR LA PIEL Y PARTIRLO REGULARMENTE EN 1,5X1,5.CORTAR LA CEBOLLA Y EL PIMIENTO EN BRUNOISE FINA .PONEMOS A POCHAR LA VERDURA CON LA GUINDILLA HASTA QUE CARAMELICE A FUEGO MEDIO ALTO 25 MINUTOS.CUANDO ESTÉ CARAMELIZADO INCORPORAR EL VINO BLANCO Y REDUCIR.METER LA JIBIA CORTADA Y REHOGAR.CUBRIR DE FUMET AL RAS .INCORPORAR LA TINTA DE LA JIBIA .DEJAMOS COCER A FUEGO MEDIO BAJO DURANTE 40 MINUTOS Y RECTIFICAR DE SAL\nACABADO Y PRESENTACIÓN",
    "allergens": [
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "calamar-en-su-tinta-con-arroz",
    "title": "CALAMAR EN SU TINTA CON ARROZ",
    "filename": "CALAMAR EN SU TINTA CON ARROZ.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "CALAMARES",
        "quantity": 3,
        "unit": "kg",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO VERDE",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO ROJO",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SALSA DE TOMATE",
        "quantity": 150,
        "unit": "ml",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMENTÓN",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 400,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ARROZ",
        "quantity": 400,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 30,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "LAUREL",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE GIRASOL",
        "quantity": 50,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 12,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Trituramos las verduras en Thermomix, incorporamos el tomate y el pimentón. Agregar pizca de aceite. Ponemos a pochar, lo ponemos a trabajar a fuego medio alto 15min. Incorporamos vino blanco y dejamos reducir.",
    "allergens": [
      "Moluscos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "caldereta-de-calamares-en-salsa-roja-de-langostinos-receta",
    "title": "CALDERETA DE CALAMARES EN SALSA ROJA DE LANGOSTINOS",
    "filename": "CALDERETA DE CALAMARES EN SALSA ROJA DE LANGOSTINOS RECETA.docx",
    "category": "Segundo Plato",
    "season": "TODOELAÑO",
    "portions": 10,
    "ingredients": [
      {
        "name": "Calamar tubo limpio",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa americana",
        "quantity": 600,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebolla",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimentón dulce",
        "quantity": 25,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Vino blanco",
        "quantity": 600,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento verde",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento rojo",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Tomate casero",
        "quantity": 120,
        "unit": "ml",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite girasol",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "fumet de pescado*",
        "quantity": 1.5,
        "unit": "l",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 250,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "",
    "allergens": [
      "Moluscos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "caldo-de-pollo-con-fideos",
    "title": "CALDO DE POLLO CON FIDEOS",
    "filename": "CALDO DE POLLO CON FIDEOS.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "PECHUGA DE POLLO (HERVIDA EN EL CALDO)",
        "quantity": 1,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MUSLOS DE POLLO (HERVIDA EN EL CALDO)",
        "quantity": 3,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CALDO DE COCIDO",
        "quantity": 6,
        "unit": "l",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ZANAHORIA HERVIDA",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PUERRO",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "FIDEOS",
        "quantity": 150,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 60,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "COLORANTE",
        "quantity": 2,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 250,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Tostamos el pollo hasta conseguir que empiece a agarrarse, agregamos la verdura y añadimos el vino blanco. Dejamos reducir. Una vez conseguido, cubrimos de caldo y dejamos cocer (aprox 10l de caldo).Una vez cocido, reservamos el pollo y la zanahoria. Ponemos aceite en una cazuela y echamos el pollo rehogando unos minutos cubrimos de 6l de caldo y cuando rompa a hervir sazonamos y añadimos la pasta y la zanahoria.",
    "allergens": [
      "Gluten",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "carrillera-de-cerdo-en-salsa-con-patata-al-romero",
    "title": "CARRILLERA DE CERDA EN SALSA CON PATATA AL ROMERO",
    "filename": "CARRILLERA DE CERDO EN SALSA CON PATATA AL ROMERO.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "CARNE DE CERDO",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMENTÓN",
        "quantity": 25,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PUERROS",
        "quantity": 750,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SALSA DE TOMATE",
        "quantity": 150,
        "unit": "ml",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ZANAHORIA",
        "quantity": 750,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO TINTO",
        "quantity": 400,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MANTEQUILLA",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA EN POLVO",
        "quantity": 15,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO EN POLVO",
        "quantity": 15,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ROMERO",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE DE GIRASOL",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MAICENA",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Ponemos las verduras mas el pimiento y el tomate triturar. Lo ponemos a pochar, durante 15 min a fuego medio alto. Agregar las carrilleras. Sofreir. Mezclar bien. Incorporamos vino tinto. Cubrimos de agua al ras. Dejamos cocer 1 hora y 15 min. Para ligar la salsa, diluimos la maicena en un poquito de agua y se lo incorporamos al guiso. Dejar reducir 5 min. Rectificamos de sal.Patata al romero genérico.",
    "allergens": [
      "Lacteos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "champinones-al-ajillo-con-jamon",
    "title": "CHAMPIÑONES AL AJILLO CON JAMÓN",
    "filename": "CHAMPIÑONES AL AJILLO CON JAMÓN.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "CHAMPIÑONES",
        "quantity": 2.5,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 30,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE DE OLIVA",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "JAMÓN SERRANO",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PEREJIL",
        "quantity": 3,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 250,
        "unit": "g",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "CORTAR EL CULO DEL CHAMPIÑÓN Y DESINFECTAR .CORTAMOS EN 4 .PONEMOS ACEITE DESDE FRIO CON EL AJO A PERFUMAR Y PASAMOS A MÁXIMA POTENCIA EN LA THERMOMIX 10 SEGUNDOS .INCORPORAMOS EL JAMÓN Y DORAMOS UN POCO PARA QUE NO SE SALE EL JAMÓN,INCORPORAMOS LOS CHAMPIÑONES Y REHOGAMOS 10 MINUTOS PARA QUE COJA COLOR.INCORPORAMOS EL VINO BLANCO Y DEJAMOS REDUCIR .\nACABADO Y PRESENTACIÓN\nIMPORTANTE :PRESENTAR EN LA BANDEJA ESCURRIDO",
    "allergens": [
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "chipirones-encebollados-con-arroz",
    "title": "CHIPIRONES ENCEBOLLADOS CON ARROZ",
    "filename": "CHIPIRONES ENCEBOLLADOS CON ARROZ.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "CALAMAR PATAGÓNICO CLASE C",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO VERDE ITALIANO",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 800,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SALSA TOMATE",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMENTÓN",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 300,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 18,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ARROZ VAPORIZADO",
        "quantity": 450,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 25,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "LAUREL",
        "quantity": 1,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Empezamos limpiando el calamar, las tripas y la pluma. Nunca la piel. Dejar escurrir. Seguidamente cortamos la verdura en juliana fina, y la ponemos a pochar a fuego medio alto unos 20 min. hasta caramelizar. Subir el fuego, incorporamos el tomate y pimentón, luego el vino y dejamos reducir. Por último agregamos el calamar, rehogar con la verdura. Cubrir de agua al ras. Dejar cocer todo junto unos 25 min a fuego medio bajo. Rectificar de sal.El ajo y el laurel, lo sofreímos en una cazuela a fuego medio bajo. Retirar ajo y laurel e incorporar el arroz. Marmoleados 3 min, y agregamos el agua caliente. Dejar cocer 17 min. 5 a fuego alto y 12 a medio bajo. Rectificar de sal.",
    "allergens": [
      "Moluscos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "cocido-montanes",
    "title": "COCIDO MONTAÑES",
    "filename": "COCIDO MONTAÑES.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "ALUBIA BLANCA",
        "quantity": 650,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "TOCINO BLANCO",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "COSTILLA ADOBADA",
        "quantity": 400,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MORCILLA DE SANGRE",
        "quantity": 200,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MORCILLA DE ARROZ",
        "quantity": 200,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CHORIZO",
        "quantity": 200,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO ROJO",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ZANAHORIA",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SALSA DE TOMATE",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMENTÓN",
        "quantity": 25,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 20,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "BERZA",
        "quantity": 150,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "El dia anterior dejamos las alubias a mojo. Cambiamos el agua y le incorporamos la carne. Ponemos a cocer a fuego medio. A los 20 min aprox, empezamos a espumar y le incorporamos la verdura triturada en escalibada sumando el tomate y el pimentón. Dejamos cocer aprox durante 2 horas a fuego medio bajo. Por otro lado, cortamos la berza en juliana fina, y la escaldamos durante 15 min. Escurrimos bien y le incorporamos la berza a los últimos 15 min del cocido. Probamos y rectificamos de sal. Enfriar la carne por separado y cortarlo finamente.",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "coliflor-zanahoria-y-patatas",
    "title": "COLIFLOR, ZANAHORIA Y PATATAS",
    "filename": "COLIFLOR, ZANAHORIA Y PATATAS.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 16,
    "ingredients": [
      {
        "name": "COLIFLOR",
        "quantity": 5,
        "unit": "kg",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PATATA",
        "quantity": 1,
        "unit": "kg",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ZANAHORIA",
        "quantity": 1,
        "unit": "kg",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 50,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE",
        "quantity": 500,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 75,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Cocemos la coliflor a 95º a vapor durante ½ hora. Cocinamos también la patata triscada y la zanahoria en rodajas. Hacemos un sofrito con el ajo (anteriormente pasado por la thermomix). Integrar todo.",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "consome",
    "title": "CONSOMÉ",
    "filename": "CONSOMÉ.docx",
    "category": "Primer Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "CARCASAS DE POLLO",
        "quantity": 700,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PUERRO",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ZANAHORIA",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 30,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 250,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AGUA",
        "quantity": 3,
        "unit": "l",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Se pone en aceite muy caliente (200grados) las carcasas sin mover para caramelizar.se incorporan las verduras cortadas en mirapoix grande ,dejamos caramelizar a fuego fuerte 20 minutos .Añadimos el vino blanco y desgrasamos ,dejamos reducir el vino ,echamos agua y cocemos durante dos horas.Rectificamos de sal si es necesario.\nACABADO Y PRESENTACIÓN",
    "allergens": [
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "costilla-asada-a-la-miel-con-patatas-baby",
    "title": "COSTILLAS ASADAS A LA MIEL CON PATATAS BABY",
    "filename": "COSTILLA ASADA A LA MIEL CON PATATAS BABY.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "COSTILLA",
        "quantity": 2800,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PATATA BABY (GENÉRICO)",
        "quantity": 700,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA EN POLVO",
        "quantity": 5,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO EN POLVO",
        "quantity": 5,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTA NEGRA",
        "quantity": 3,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "COMINO",
        "quantity": 3,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MIEL",
        "quantity": 35,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MOSTAZA",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMENTÓN",
        "quantity": 5,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "En la thermomix trituramos el ajo, comino, cebolla en polvo, pimentón, mostaza, miel, sal y pimienta negra. Embadurnamos las costillas con la mezcla y dejamos en nevera hasta el día siguiente en bolsa de vacío.Al dia siguiente meter al horno durante 4 horas y media a  85 grados al horno al vapor. Abatimos. Cortamos y doramos a 210 durante 10 minutos. Lacamos la costilla con la mezcla antes de tostarCocer las patatas baby genérica.",
    "allergens": [
      "Mostaza"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "costillon-de-ternera-de-cantabria-con-patatas",
    "title": "PERSONAS",
    "filename": "COSTILLON DE TERNERA DE CANTABRIA CON PATATAS.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "COSTILLÓN DE TERNERA",
        "quantity": 2,
        "unit": "kg",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 7,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 5,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE OLIVA",
        "quantity": 70,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PATATAS PANADERA",
        "quantity": 1.5,
        "unit": "kg",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MAICENA",
        "quantity": 50,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "crema-de-setas-con-parmesano",
    "title": "CREMA DE SETAS CON PARMESANO",
    "filename": "CREMA DE SETAS CON PARMESANO.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "Parmesano",
        "quantity": 1200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Setas variadas",
        "quantity": 960,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Diente de ajo 1 unid.",
        "quantity": 96,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Leche entera",
        "quantity": 4800,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Queso crema",
        "quantity": 960,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aove",
        "quantity": 240,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebollino fresco",
        "quantity": 1440,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mantequilla",
        "quantity": 240,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Puerro",
        "quantity": 480,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Rehogamos la verdura. (puerro y ajo) con la mantequilla y el aceite. Una vez pochado, añadimos las setas. Revolvemos hasta pochar. Agregamos la nata. Dejamos hervir unos minutos y por último añadimos el queso y la crema. Dejamos fundir y trituramos. Levantamos y abatimos.",
    "allergens": [
      "Lacteos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "crema-de-zanahoria-y-calabaza",
    "title": "CREMA DE CALABAZA Y ZANAHORIA",
    "filename": "CREMA DE ZANAHORIA Y CALABAZA.docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Zanahoria",
        "quantity": 600,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Calabaza naranja",
        "quantity": 600,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Patatas",
        "quantity": 800,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebollas",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Puerro",
        "quantity": 250,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mantequilla",
        "quantity": 80,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Agua",
        "quantity": 1500,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite de girasol",
        "quantity": 80,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "sal",
        "quantity": 14,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Desinfectamos y cortamos toda la verdura en mirepoix. Seguidamente en una cazuela incorporamos el aceite y la mantequilla, tostamos el puerro y la cebolla sacando color. Añadimos la calabaza, zanahoria y patata y cubrimos de agua al ras. Le incorporamos la sal y cocemos en conjunto durante 40 min. Trituramos y pasamos por el chino.Rectificar de sal y volver a levantar",
    "allergens": [
      "Lacteos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "empanada",
    "title": "EMPANADA",
    "filename": "EMPANADA.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 1,
    "ingredients": [
      {
        "name": "HARINA",
        "quantity": 300,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MANTEQUILLA EN TAQUITOS FRÍA",
        "quantity": 140,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AGUA",
        "quantity": 70,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 1,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Mezclar todos los ingredientes 15 segundos en velocidad 6.Hornear 25 - 30 min a 180º con calor arriba y abajo, retira el peso y cocina otros 5 minutos más.",
    "allergens": [
      "Gluten",
      "Lacteos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "ensalada-campera",
    "title": "ENSALADA CAMPERA",
    "filename": "ENSALADA CAMPERA.docx",
    "category": "Primer Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "Patata",
        "quantity": 1500,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Atún",
        "quantity": 250,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Huevo",
        "quantity": 320,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento Rojo",
        "quantity": 160,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento Verde",
        "quantity": 160,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebolla morada",
        "quantity": 160,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite y Vinagre",
        "quantity": 80,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal y pimienta",
        "quantity": 30,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Cocer la patata y el huevoCortar ingredientes y mezclar",
    "allergens": [
      "Huevos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "ensalada-de-garbanzos-con-atun",
    "title": "ENSALADA DE GARBANZOS CON ATÚN",
    "filename": "Ensalada de garbanzos con atún.docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 1,
    "ingredients": [
      {
        "name": "GARBANZOS",
        "quantity": 150,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ATUN",
        "quantity": 50,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO ROJO",
        "quantity": 30,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "HUEVO COCIDO",
        "quantity": 50,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "TOMATES CHERRY",
        "quantity": 50,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE DE OLIVA",
        "quantity": 7,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 1,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PESO POR RACIÓN",
        "quantity": 338,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "ACABADO Y PRESENTACIÓN",
    "allergens": [
      "Huevos",
      "Pescado"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "ensaladilla-rusa",
    "title": "ENSALADILLA",
    "filename": "ENSALADILLA RUSA.docx",
    "category": "Primer Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "Patata cocida",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Zanahoria",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Atún",
        "quantity": 750,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "5 huevos cocidos",
        "quantity": 750,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mayonesa",
        "quantity": 800,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceituna",
        "quantity": 125,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 12,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso bruto por ración",
        "quantity": 383,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "",
    "allergens": [
      "Huevos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "escalopines-de-pollo-en-salsa-de-setas",
    "title": "ESCALOPINES DE POLLO EN SALSA DE SETAS",
    "filename": "ESCALOPINES DE POLLO EN SALSA DE SETAS.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 50,
    "ingredients": [
      {
        "name": "Pechuga de pollo",
        "quantity": 7.5,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Setas",
        "quantity": 3,
        "unit": "kg",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Bacon",
        "quantity": 1,
        "unit": "kg",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Nata",
        "quantity": 350,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimienta",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite",
        "quantity": 40,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mantequilla",
        "quantity": 30,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebolla",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Vino blanco",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Puerros",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Dorar el pollo y acabar en el horno a 78ºcon sonda.Pochar la cebolla, con el puerro y la mantequilla. Luego triturar.Dorar el baicon. Incorporar la verdura y las setas escurridas. Integrar bien. Rectificar de sal.",
    "allergens": [
      "Lacteos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "fetuchini-carbonara",
    "title": "PERSONAS",
    "filename": "FETUCHINI CARBONARA.docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "espagueti",
        "quantity": 700,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "bacon",
        "quantity": 400,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "nata culinaria",
        "quantity": 700,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "pimienta negra",
        "quantity": 3,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "sal",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "cebolla",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "aceite de girasol",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "mantequilla",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Cocemos los spaghetti en agua salada desde el hervor durante 10 minutos y refrescamos al grifo, sazonamos y engrasamos los espagueti fríos con 16g de sal. A continuación, añadimos el aceite y el  bacon cortado en 0,5 cm hasta que dore y luego hacemos un sofrito con la cebolla, la mantequilla durante 10 min. Seguimos trabajando el beicon con la cebolla durante otros 10 min, que saque color.Rectificamos de sal y pimienta. Llevamos a la Thermomix. Reservamos. Después le incorporamos la nata y le dejamos reducir otros 10 min. Rectificar de salDecorar con trozos de bacon horneados y mozzarella.Anotación: si la carbonara queda espesa añadir leche* (cantidad suficiente)",
    "allergens": [
      "Lacteos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "fichas-cocina",
    "title": "PERSONAS",
    "filename": "FICHAS COCINA.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "ACABADO Y PRESENTACIÓN",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "fideua-abanda-con-calamares",
    "title": "PERSONAS",
    "filename": "FIDEUA ABANDA CON CALAMARES.docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Fideos",
        "quantity": 800,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Calamares",
        "quantity": 500,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebollas",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento verde",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo",
        "quantity": 70,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Vino blanco",
        "quantity": 100,
        "unit": "g",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimenton dulce",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Tomate triturado",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Fumet de pescado",
        "quantity": 1600,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Lavamos las cebollas y las trituramos por thermomix junto con los ajos.Ponemos a fondear 20 minutos y añadimos los pimientos en brunoise. Añadimos los calamares cortados en dados de 1 cm y reducimos el vino blanco estofados 20 minutos y añadimos los fideos Y el fumet caliente. Cocemos Unos 8 minutos hasta que el fideo absorba parte del agua y este suelto y cocido",
    "allergens": [
      "Gluten",
      "Moluscos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "filetes-rusos-con-cebolla-caramelizada",
    "title": "FILETES RUSOS CON CEBOLLA CARAMELIZADA",
    "filename": "FILETES RUSOS CON CEBOLLA CARAMELIZADA.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "TERNERA",
        "quantity": 1700,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CERDO",
        "quantity": 300,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 10,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PEREJIL",
        "quantity": 15,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "HUEVO",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PAN",
        "quantity": 160,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 1500,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE",
        "quantity": 150,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "LECHE",
        "quantity": 50,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "HARINA",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "MACERAR LA CARNE CON LAS ESPECIAS 5 HORAS.HACER BOLAS DE 75 GRAMOS Y FORMAR LOS FILETES. SE PASAN POR HARINA Y HUEVO Y SE FRIEN ,SACARLES A 75 GRADOS.PARA LA CEBOLLA CORTAR EN JULIANA FINA Y TOSTAR CON ACEITE HASTA CARAMELIZAR\nACABADO Y PRESENTACIÓN",
    "allergens": [
      "Gluten",
      "Lacteos",
      "Huevos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "fogonero-en-salsa-vizcaina-con-patatas-panadera",
    "title": "FOGONERO EN SALSA VIZCAÍNA CON PATATAS PANADERA",
    "filename": "FOGONERO EN SALSA VIZCAINA CON PATATAS PANADERA.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "FOGONERO",
        "quantity": 2.5,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA ROJA",
        "quantity": 500,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MIGAS DE JAMÓN",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "HUESO DE JAMÓN",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 150,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MANZANA",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SALSA DE TOMATE",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMENTÓN",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PULPA PIMIENTO CHORICERO",
        "quantity": 30,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "FUMET",
        "quantity": 500,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE DE GIRASOL",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PATATAS genérico",
        "quantity": 0,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Quitar la piel y la espina central del fogonero. Cortar en raciones de 250gr c/u. Se estira en placa y se mete al horno con un chorro de aceite y una pizca de sal. Lo metemos a 165º en horno mixto 10 min. Por otro lado, para la salsa, metemos en una cazuela, el aceite. Dejar calentar, incorporar la cebolla roja en mirepoix. Tostar a fuego vivo hasta que saque color caramelizado. Incorporar la manzana, cortada en cubos de 1 x 1- Seguidamente incorporamos las migas de jamón y el hueso. Seguir tostando. Incorporar la pulpa del chorizo, el pimentón, salsa de tomate y luego el vino blanco. Dejar reducir, incorporar el fumet. Dejar cocer todo en conjunto a fuego medio bajo durante 20 min. Pasar por el pasa puré con la cuchilla pequeña. Para la patata panadera generica.",
    "allergens": [
      "Pescado",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "fricase-de-aguja-en-salsa-bbq-con-patatas-baby",
    "title": "BBQ CON PATATAS BABY",
    "filename": "FRICASÉ DE AGUJA EN SALSA BBQ CON PATATAS BABY.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Carne de aguja de cerdo",
        "quantity": 2,
        "unit": "kg",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa de soja sin gluten",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimienta",
        "quantity": 7,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa Española",
        "quantity": 500,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Bbq",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Patatas BABY",
        "quantity": 1.5,
        "unit": "kg",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mantequilla",
        "quantity": 120,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 12,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Limpiar bien la carne de grasa y nervios, envasar al 98% vacío con soja, pimienta y sal.Cocer envasada en bolsa de vacío a 100 grados vapor 2 horas y media. Escurrir la salsa resultante y saltear la carne. Aparte hacer la salsa a partir de su jugo reducido durante 20 minutos añadir española y la salsa bbq de bote.Quitar el ajo y las bolas de pimienta antes de pasar a la basculante.Cocer las patatas baby, con mantequilla y sal durante 30 minutos al vapor a 95 grados y luego se tuestan a 210 grados durante 15 minutos. Abatir",
    "allergens": [
      "Lacteos",
      "Soja"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "fricase-de-aguja-en-salsa-bbq-con-patatas",
    "title": "FRICASÉ DE AGUJA EN SALSA BBQ CON PATATAS",
    "filename": "FRICASÉ DE AGUJA EN SALSA BBQ CON PATATAS.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Carne de aguja de cerdo",
        "quantity": 2,
        "unit": "kg",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa de soja sin gluten",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimienta",
        "quantity": 7,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa Española",
        "quantity": 500,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Bbq",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Patatas",
        "quantity": 1.5,
        "unit": "kg",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mantequilla",
        "quantity": 120,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 12,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Limpiar bien la carne de grasa y nervios, envasar al 98% vacío con soja , pimienta y sal.Cocer a 100 grados vapor 2 horas y media. abatir y usar después o en el caso de hacer la receta de seguido primero escurrir la salsa resultante y saltear la carne. Aparte hacer la salsa a partir de su jugo reducido durante 20 minutos añadir española y la salsa bbq de bote.",
    "allergens": [
      "Lacteos",
      "Soja"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "garbanzos-con-cabecero-de-lomo",
    "title": "GARBANZOS CON CABECERO DE LOMO",
    "filename": "GARBANZOS CON CABECERO DE LOMO.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "Cabecero de lomo",
        "quantity": 800,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Garbanzos",
        "quantity": 800,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebolla",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Zanahoria",
        "quantity": 2,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento rojo",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento verde",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa de redondo",
        "quantity": 250,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Diente ajo",
        "quantity": 2,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimentón",
        "quantity": 25,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa de tomate",
        "quantity": 0,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimienta",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Bicarbonato",
        "quantity": 2,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Soja",
        "quantity": 25,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Ponemos los garbanzos a mojo el día anterior. Seguidamente hacemos una escalibada con las verduras, el tomate y el pimentón. Trituramos todo.Ponemos a cocer el garbanzo al ras de agua, con sal a fuego medio alto. A los 20 min desespumar. Incorporar la escalibada de verduras. Cuando rompe a hervir incorporamos dos gramos de bicarbonato. Dejamos cocer aprox 1:15 hs. Incorporar salsa de redondo y dejar cocer todo el conjunto 10 min más.Por otro lado, ponemos el cabecero en bolsa de vacío con soja, ajo y pimienta en grano. Sellar en programa 3 al 98%. Lo metemos al horno al vapor durante 95º durante dos horas y media. Abrir las bolsas, dejar escurrir. Desmechar en thermomix al programa 4 durante 10 segundos. Luego a la carne le incorporamos 150 ml de la salsa de redondo. Mezclar con los garbanzos y dejar cocer 30 min mas.",
    "allergens": [
      "Soja"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "generico-arroz",
    "title": "GENÉRICO ARROZ",
    "filename": "GENERICO ARROZ.docx",
    "category": "Base/Generico",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "ARROZ",
        "quantity": 500,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 25,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "LAUREL",
        "quantity": 2,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AGUA",
        "quantity": 1,
        "unit": "l",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Doramos el ajo con el laurel con el aceite desde frio hasta que dore. Retiramos el ajo y el laurel e incorporamos el arroz. Marmoleamos durante 4 min. Agregar el agua caliente, cocer durante 17 min. 10 a fuego vivo y 7 a fuego medio bajo.",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "generico-fumet",
    "title": "FUMET",
    "filename": "GENERICO FUMET.docx",
    "category": "Base/Generico",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "CUCOS",
        "quantity": 500,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ZANAHORIA",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VERDE DEL PUERRO",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AGUA",
        "quantity": 1.5,
        "unit": "l",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Temer todo en la olla en frío, dejar cocer. Cuando empiece a hervir 40 min a fuego medio bajo. Dejar infusionar con ello apagado 1 hora. Colar por el chino.",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "generico-pure-de-patatas",
    "title": "PURÉ DE PATATAS",
    "filename": "GENERICO PURÉ DE PATATAS.docx",
    "category": "Base/Generico",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "PATATA",
        "quantity": 600,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "LECHE",
        "quantity": 500,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MANTEQUILLA",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 90.5,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "",
    "allergens": [
      "Lacteos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "generico-salsa-americana",
    "title": "SALSA AMERICANA",
    "filename": "GENERICO SALSA AMERICANA.docx",
    "category": "Base/Generico",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "PUERRO",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 50,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ZANAHORIA",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "GAMBA ARROCERA",
        "quantity": 150,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ARROZ",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "TOMATE EN SALSA",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMENTÓN",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE OLIVA SUAVE",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "En una cazuela ponemos el aceite a calentar. Cuando este caliente incorporamos la gamba. La dejamos tostar bien. Machacamos la cabeza. Incorporamos la verdura cortada en mirepoix. Tostamos durante 15 min todo junto. Seguidamente incorporamos el pimentón, junto con la salsa de tomate. dejamos trabajar 2min. Cuando coge temperatura agregamos el vino. Reducimos. Incorporamos agua 1L y cuando rompa a hervir incorporamos el arroz. Dejamos cocer todo media hora. Trituramos por el chino. Rectificamos de sal. Volvemos a hervir. Abatir.",
    "allergens": [
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "generico-salsa-bechamel-napar",
    "title": "SALSA BECHAMEL NAPAR",
    "filename": "GENERICO SALSA BECHAMEL NAPAR.docx",
    "category": "Base/Generico",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Harina",
        "quantity": 80,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mantequilla",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Leche",
        "quantity": 1,
        "unit": "l",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 5,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Poner a calentar la leche en una cazuela. En otra derretir la mantequilla. Cuando este, incorporamos la harina. Trabajar 3 min a fuego medio bajo.  Incorporamos la leche caliente y trabajamos en conjunto durante 10 min. Rectificamos de sal.",
    "allergens": [
      "Gluten",
      "Lacteos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "generico-salsa-bolonesa",
    "title": "PERSONAS",
    "filename": "GENERICO SALSA BOLOÑESA.docx",
    "category": "Base/Generico",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Picado ternera",
        "quantity": 800,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Picado cerdo",
        "quantity": 200,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Tomate casero",
        "quantity": 1000,
        "unit": "l",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Zanahoria",
        "quantity": 500,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebolla",
        "quantity": 500,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo",
        "quantity": 60,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento verde",
        "quantity": 250,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento rojo",
        "quantity": 250,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimentón",
        "quantity": 25,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Vino tinto",
        "quantity": 1,
        "unit": "l",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 5,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite girasol",
        "quantity": 150,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Oregano",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Pasar las verduras por thermomix 10 segundos al 8 y trabajar 20’ a fuego lento.Añadimos el pimentón, y subimos el fuego. Añadir el vino tinto. Dejamos reducir. Añadimos las carnes y las soltamos bien para que no se apelmacen. Dejamos cocinar 20 min todo en conjunto. Añadimos el tomate casero Genérico. Cocemos 10 min mas. Rectificamos de sal y oregano. Abatir a 4°",
    "allergens": [
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "generico-salsa-carbonara",
    "title": "SALSA CARBONARA",
    "filename": "GENERICO SALSA CARBONARA.docx",
    "category": "Base/Generico",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "LECHE",
        "quantity": 1,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "NATA",
        "quantity": 1,
        "unit": "l",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "BACON",
        "quantity": 300,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "QUESO MOZZARELLA",
        "quantity": 50,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MANTEQUILLA",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE DE OLIVA SUAVE",
        "quantity": 50,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "En una cazuela, ponemos el aceite y la mantequilla, seguidamente la cebolla triturada con la Thermomix. Lo ponemos a pochar 20 min. La cebolla debe coger color marrón tostado. Seguidamente incorporamos el bacon, Trabajamos durante 5min a fuego fuerte. Incorporamos la leche y la nata. Dejamos reducir 20 min. Rectificamos de sal y batimos. Si la crema queda espesa luego de abatir, se aligera con leche.",
    "allergens": [
      "Lacteos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "generico-salsa-espanola",
    "title": "SALSA ESPAÑOLA",
    "filename": "GENERICO SALSA ESPAÑOLA.docx",
    "category": "Base/Generico",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "HUESOS DE RODILLA DE VACA",
        "quantity": 500,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ZANAHORIA",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO ROJO",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO TINTO",
        "quantity": 1,
        "unit": "l",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AGUA",
        "quantity": 1,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MAICENA",
        "quantity": 60,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE OLIVA SUAVE",
        "quantity": 40,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MANTEQUILLA",
        "quantity": 40,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Empezamos tostando los huesos durante 40 min al horno en seco a 230 grados. Que se tuesten bien. Seguidamente cortamos la verdura en mirepoix. La metemos al horno con un chorro de aceite a tostar hasta conseguir un tostado clarito. A 230 grados dejarlo 25 min.Cuando este todo tostado, incorporamos ambas preparaciones en una olla. Seguidamente agregamos el vino y le dejamos reducir durante 10min. Luego incorporamos el agua y dejamos reducir durante 1 hora. Colamos y ligamos la salsa con maicena. Para darle brillo se le agrega mantequilla en pomada. Rectificamos de sal. Y abatimos.",
    "allergens": [
      "Lacteos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "generico-salsa-tomate",
    "title": "SALSA TOMATE",
    "filename": "GENERICO SALSA TOMATE.docx",
    "category": "Base/Generico",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "AJO",
        "quantity": 50,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO VERDE",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO ROJO",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ZANAHORIA",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AZÚCAR",
        "quantity": 50,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "TOMATE EN SALSA",
        "quantity": 1,
        "unit": "l",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE DE OLIVA SUAVE",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Desinfectamos la verdura y la cortamos en mirepoix. Seguidamente ponemos el aceite en una cazuela. Cuando esté caliente incorporamos la verdura. La pochamos durante 20 minutos a fuego medio alto. Incorporamos el tomate y le dejamos reducir durante media hora. Incorporamos el azúcar y la sal. Trituramos y pasamos por el chino. Volvemos a hervir y abatimos.",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "generico-salsa-verde",
    "title": "SALSA VERDE",
    "filename": "GENERICO SALSA VERDE.docx",
    "category": "Base/Generico",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "AJO",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PEREJIL",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "GUINDILLA",
        "quantity": 1,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "HARINA",
        "quantity": 30,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE OLIVA SUAVE",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 100,
        "unit": "g",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE GIRASOL",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "FUMET",
        "quantity": 1.2,
        "unit": "l",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "HOJA PUERRO",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ZANAHORIA",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CUCOS",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Empezamos triturado el ajo en la thermomix. Incorporamos el aceite desde frio para que se confite. Lo ponemos a fuego medio bajo. Incorporamos la guindilla y dejamos confitar nuevamente. Seguidamente incorporamos el vino blanco y le dejamos reducir. Incorporamos  la harina durante 2 min y la trabajamos a fuego medio bajo. Seguidamente incorporamos el fumet en caliente. Dejamos hervir todo en conjunto durante 20 min. Rectificamos de sal. Para darle color, incorporamos las hojas del perejil en aceite de girasol y lo trituramos en la thermomix. Este aceite de perejil, lo incorporamos a la salsa. Cocemos durante 1 min y abatimos. FUMET: Cucos 200gr - 100gr la hoja del puerro - 100gr de zanahoria - 1,200l de agua- Lo ponemos todo a hervir durante 40 min y lo dejamos reposar apagado durante 1 hora más.",
    "allergens": [
      "Gluten",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "guisantes-con-jamon",
    "title": "GUISANTES CON JAMÓN",
    "filename": "GUISANTES CON JAMÓN.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "GUISANTES",
        "quantity": 2.5,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "JAMON",
        "quantity": 500,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE",
        "quantity": 250,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "COCEMOS AL VAPOR A 95º LOS GUISANTES. TRITURAMOS EL AJO CON LA SAL Y EL ACEITE.REHOGAMOS Y CUANDO EL AJO ESTE DORADO, AÑADIMOS EL JAMÓN. AGREGAMOS LOS GUISANTES Y REMOVEMOS BIEN. DEJAMOS ENFRIAR",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "guiso-marinero-de-pescadores",
    "title": "PERSONAS",
    "filename": "GUISO MARINERO DE PESCADORES.docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Patatas",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "cebolla",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "puerros",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO VERDE",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO ROJO",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "almejas",
        "quantity": 250,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "gamba arrocera",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "mejillones",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "tomate triturado",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Calamar",
        "quantity": 500,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "vino blanco",
        "quantity": 200,
        "unit": "g",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "perejil seco",
        "quantity": 0,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "cucos",
        "quantity": 500,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ajo",
        "quantity": 70,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "salsa americana*",
        "quantity": 250,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "",
    "allergens": [
      "Moluscos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "hamburguesa-de-pollo-y-bacon",
    "title": "HAMBURGUESA DE POLLO Y BACON CON PATATA",
    "filename": "HAMBURGUESA DE POLLO Y BACON.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "POLLO",
        "quantity": 1200,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "BACON",
        "quantity": 150,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "HUEVO",
        "quantity": 75,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PEREJIL",
        "quantity": 5,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 10,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTA",
        "quantity": 1,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PATATA",
        "quantity": 700,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "LECHE",
        "quantity": 50,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 500,
        "unit": "g",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "HARINA",
        "quantity": 25,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AGUA",
        "quantity": 600,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "EL DIA ANTERIOR SE MACERA LA CARNE CON EL HUEVO ,LECHE,AJO TRITURADO EN THERMOMIX,LA CEBOLLA POCHADA Y 4 GRAMOS DE SAL.AL DIA SIGUIENTE SE HACEN FILETES RUSOS DE 75 GRAMOS ,SE PASAN POR HARINA Y HUEVO Y SE FRIEN ,CUANDO ESTÉN FRITOS , EN ESE MISMO ACEITE SE PONE A CARAMELIZAR LA CEBOLLA A FUEGO MEDIO DURANTE 25 MINUTOS .SE SUBE EL FUEGO Y SE AÑADE EL VINO BLANCO Y SE DEJA REDUCIR 20 MINUTOS ,BAJAMOS EL FUEGO,INCORPORAMOS LA HARINA ,6 GRAMOS DE SAL YEL AGUA Y DEJAMOS COCINAR LA SALSA 30 MINUTOS.PASAR POR PASAPURÉ ,RECTIFICAR DE SAL.TRITURAR EN THERMOMIX VELOCIDAD MÁXIMA 7.ACOMPAÑAR DE PATATA PANADERA\nACABADO Y PRESENTACIÓN",
    "allergens": [
      "Gluten",
      "Lacteos",
      "Huevos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "jamoncitos-de-pollo-en-salsa",
    "title": "JAMONCITOS DE POLLO EN SALSA",
    "filename": "JAMONCITOS DE POLLO EN SALSA.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 15,
    "ingredients": [
      {
        "name": "JAMONCITOS",
        "quantity": 3500,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ZANAHORIA",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 250,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "RESTOS DE POLLO",
        "quantity": 300,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AGUA",
        "quantity": 10,
        "unit": "l",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MAICENA",
        "quantity": 250,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Asamos los jamoncitos de pollo al horno a 190º, unos 60 min. Los últimos 10 min subir a 210º.Para la salsa rehogamos la verdura hasta conseguir color tostado y añadimos los restos del pollo. Tastar. Añadimos el vino blanco para desgrasar y cubrimos con el agua. Ligar con maicena. Rectificar de sal.",
    "allergens": [
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "jamoncitos-de-pollo",
    "title": "JAMONCITOS DE POLLO",
    "filename": "JAMONCITOS DE POLLO.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "JAMONCITOS",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO VERDE",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO ROJO",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 1400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE GIRASOL",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 8,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 500,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Estiramos el pollo en gastronorm, y pintamos con aceite y un chorro de vino. Agregar sal. Seguidamente meter a tostar a 190º por  30 min. En una cazuela incorporamos la verdura, cortada en juliana fina, lo dejamos hasta que caramelice a fuego vivo, unos 20 min. Incorporar vino blanco. Dejamos reducir. Por último, agregar el fondo de verduras, sobre el pollo. Poner a tostar todo en conjunto durante 10 min a 190º.",
    "allergens": [
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "judias-verdes-con-jamon",
    "title": "JUDÍAS VERDES CON JAMÓN",
    "filename": "JUDIAS VERDES CON JAMÓN.docx",
    "category": "Primer Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "Judías verdes",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Jamón",
        "quantity": 300,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo",
        "quantity": 10,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 250,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "judias-verdes-con-patatas-y-zanahorias",
    "title": "JUDÍAS VERDES CON PATATAS Y ZANAHORIAS",
    "filename": "JUDIAS VERDES CON PATATAS Y ZANAHORIAS.docx",
    "category": "Primer Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "Judías verdes",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Patata",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo",
        "quantity": 10,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Zanahoria",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa tomate *",
        "quantity": 150,
        "unit": "ml",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 250,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "lasana-cremosa-de-pollo-y-espinacas",
    "title": "LASAÑA CREMOSA DE POLLO Y ESPINACAS",
    "filename": "LASAÑA CREMOSA DE POLLO Y ESPINACAS.docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 21,
    "ingredients": [
      {
        "name": "Pechuga de pollo",
        "quantity": 2100,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "2 unid oblea lasaña",
        "quantity": 6,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Espinacas congeladas",
        "quantity": 700,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Leche",
        "quantity": 2000,
        "unit": "L",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "cebolla",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mozarella",
        "quantity": 250,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimienta",
        "quantity": 5,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Orégano",
        "quantity": 4,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Vino blanco",
        "quantity": 250,
        "unit": "L",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Para la bechamel:",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Leche entera",
        "quantity": 2,
        "unit": "L",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Harina",
        "quantity": 70,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mantequilla",
        "quantity": 125,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite de oliva",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ajo",
        "quantity": 10,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "SALPIMENTAMOS EL POLLO Y DORAMOS A FUEGO FUERTE DURANTE 20 MINUTOS HASTA QUE ESTÉ BIEN DORADO . EN UNA CAZUELA CON ACEITE TOSTAR 25 ML DE ACEITE Y 25 GRAMOS DE MANTEQUILLA Y CARAMELIZAR A FUEGO FUERTE DURANTE 20 MINUTOS,INCORPORAMOS EL VINO BLANCO Y REDUCIMOS DURANTE 20 MINUTOS.TRITURAMOS EN THERMOMIX AL 10 DURANTE 3 MINUTOS E INCORPORAMOS AL POLLO.PONEMOS AGUA A HERVIR Y COCEMOS LA ESPINACA CON SAL DURANTE 10 MINUTOS Y ESCURRIMOS ,HACEMOS SOFRITO DE AJO Y SALTEAMOS LAS ESPINACAS E INCORPORAMOS AL POLLO ,MEZCLAMOS CON 500 ML DE BECHAMEL HACIENDO UNA FALSA.PARA LA BECHAMEL, CALENTAMOS LA MANTEQUILLA ,INCORPORAMOS HARINA ,TOSTAMOS Y AÑADIMOS LA LECHE CALIENTE .PARA EL MONTAJE SE PONEN DOS LÁMINAS DE LASAÑA CON 1,200 DE RELLENO,DOS LÁMINAS DE LASAÑA Y OTRO 1,200 DE RELLENO , DOS LÁMINAS Y 1,500 DE BECHAMEL.PONEMOS LA MOZARELLA Y GRATINAMOS A 165 GRADOS DURANTE 25 MINUTOS.",
    "allergens": [
      "Gluten",
      "Lacteos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "lasana-de-carne",
    "title": "LASAÑA DE CARNE",
    "filename": "LASAÑA DE CARNE.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 21,
    "ingredients": [
      {
        "name": "Carne picada vacuna",
        "quantity": 700,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Carne picada cerdo congelado",
        "quantity": 300,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebolla",
        "quantity": 250,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Zanahoria",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo",
        "quantity": 20,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 25,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Tomate casero",
        "quantity": 500,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "2 oblea de pasta lasaña",
        "quantity": 1,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Desmoldante",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Bechamel",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Leche entera",
        "quantity": 2,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Harina trigo",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mantequilla",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite girasol",
        "quantity": 25,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mozzarella",
        "quantity": 250,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "",
    "allergens": [
      "Gluten",
      "Lacteos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "lentejas-con-calabaza",
    "title": "LENTEJAS CON CALABAZA",
    "filename": "LENTEJAS CON CALABAZA.docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Lentejas pardina",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Calabaza",
        "quantity": 500,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebolla",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimentón",
        "quantity": 25,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo",
        "quantity": 40,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Zanahoria",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "pimiento rojo",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "pimiento verde",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "salsa tomate",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 12,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "aceite girasol",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Cortamos verdura en mirepoix, se lo incorporamos al vaso batidor, le añadimos el pimenton, el el tomate, el aceite y la sal. Trituramos y hacemos una escalibada de verduras. A continuación, ponemos a cocer la lenteja, a los 10 min desespumar, incorporamos la escalibada. A los 40 min de la cocción incorporamos la calabaza en dados de 0,5 cm y dejamos que acabe de cocer durante 20 min más. Rectificar de sal. (el 15% de la calabaza total se cuece a parte para decorar (15 min))",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "lentejas-con-chistorra",
    "title": "LENTEJAS CON CHISTORRA",
    "filename": "LENTEJAS CON CHISTORRA.docx",
    "category": "Primer Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "LENTEJAS",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO VERDE",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO ROJO",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ZANAHORIA",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SALSA DE TOMATE",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMENTON",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE OLIVA",
        "quantity": 0.4,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 40,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CHISTORRA",
        "quantity": 500,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "lentejas-con-curry",
    "title": "LENTEJAS CON CURRY",
    "filename": "LENTEJAS CON CURRY.docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Lentejas pardina",
        "quantity": 800,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Curry en polvo",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebolla",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimentón",
        "quantity": 25,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo",
        "quantity": 70,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Zanahoria",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "pimiento rojo",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "pimiento verde",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "salsa tomate",
        "quantity": 100,
        "unit": "L",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 12,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "aceite girasol",
        "quantity": 100,
        "unit": "L",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Cortamos verdura en mirepoix, se lo incorporamos al vaso batidor, le añadimos el pimentón, el tomate, el aceite y la sal. Trituramos y hacemos una escalibada de verduras. A continuación, ponemos a cocer la lenteja, a los 10 min desespumar, incorporamos la escalibada (durante 1h y 15’). Cuando queden 15 min de cocción añadimos el curry en polvo. Rectificar de sal. (el 15% de la calabaza total se cuece a parte para decorar (15 min))",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "macarrones-4-quesos",
    "title": "PERSONAS",
    "filename": "MACARRONES 4 QUESOS.docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "macarrones",
        "quantity": 700,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "sal",
        "quantity": 16,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "nata culinaria",
        "quantity": 800,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "leche",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "queso mezclas rallado",
        "quantity": 150,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "pimienta negra",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "queso azul",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "mantequilla",
        "quantity": 70,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "vino blanco",
        "quantity": 125,
        "unit": "g",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "cebolla",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "oregano",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "aceite de girasol",
        "quantity": 50,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Cocemos los macarrones en agua salada con aceite de girasol durante 10 minutos y los refrescamos en el grifo. Salamos con 16g y aceite de girasol.Hacemos un sofrito con aceite, mantequilla y cebolla, que poche bien durante 15 min. Añadimos la nata, la leche, los 4 quesos y el queso azul. Dejamos cociendo durante 20 min todo en conjunto con la pimienta y trituramos con la batidora para unificar los quesos y la salsa quede uniforme.",
    "allergens": [
      "Gluten",
      "Lacteos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "marmita-de-bonito",
    "title": "MARMITA DE BONITO",
    "filename": "MARMITA DE BONITO.docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "CEBOLLA",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO ROJO",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO VERDE",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SALSA TOMATE",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 400,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PATATA",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMENTON",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "BONITO",
        "quantity": 400,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 8,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "LAUREL",
        "quantity": 1,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE GIRASOL",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Trituramos las verduras con el pimentón, y la salsa de tomate. Hacemos una escalibada. Seguidamente incorporamos con el aceite en la cazuela. Sofreímos durante 15 min e incorporamos el vino blanco hasta que reduzca. Seguido incorporamos la patata triscada 1,5 x 1,5 cm y lo trabajamos durante 2 min. Incorporamos la escalibada y cubrimos de agua hasta el ras. Agregar la sal y el laurel. Dejamos cocer durante 40 min. Apagar el fuego y se incorpora el bonito cortado en tacos de 1 x 1cm . Probar y rectificar de sal.",
    "allergens": [
      "Pescado",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "merluza-a-la-bilbaina",
    "title": "PERSONAS",
    "filename": "MERLUZA A LA BILBAINA.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Merluza",
        "quantity": 1800,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Calabaza",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Calabacín",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Guisantes",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite oliva",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Asamos la merluza con sal y ajo a 180 grados 7 minutos y abatimos.Por otro lado cortamos las verduras en juliana y lo escaldamos en agua salada, por 3 minutos.",
    "allergens": [
      "Pescado"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "milhojas-de-calabacin-jamon-y-queso",
    "title": "MILHOJAS CALABACÍN, JAMÓN Y QUESO",
    "filename": "MILHOJAS DE CALABACÍN , JAMÓN Y QUESO.docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 18,
    "ingredients": [
      {
        "name": "Calabacín",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Queso barra",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Jamón york",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mozzarella",
        "quantity": 500,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Orégano",
        "quantity": 50,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 6,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite de oliva",
        "quantity": 200,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PESO POR RACIÓN",
        "quantity": 250,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Cortamos el calabacín, jamón y queso barra por la fiambrera al 1,5.En una gastronor con desmoldante disponemos 4 capas de jamón, queso, calabacín. Siempre en ese orden.Cubrimos con mozzarella y horneamos a 180º durante 15 minutos.Cortamos raciones de 18 x gastronor.",
    "allergens": [
      "Lacteos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "musaka-de-verduras-y-ternera-gratinada",
    "title": "MUSAKA VERDURAS Y TERNERA GRATINADA",
    "filename": "MUSAKA DE VERDURAS Y TERNERA GRATINADA.docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Berenjena",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Calabacín",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Tomate",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Carne picada 60/40",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa de tomate",
        "quantity": 250,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebollas",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Zanahorias",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento rojo",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento verde",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimenton",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mozarella",
        "quantity": 400,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "vino tinto",
        "quantity": 1,
        "unit": "L",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Boloñesa genérica.Desinfectamos el tomate, calabacín y la berenjena. Cortamos en corta fiambre en el nº2. En una gastronorm ponemos la primera escama de calabacín, seguidamente ponemos una lamina fina de boloñesa, seguidamente cubrimos con rodaja de tomate. Volvemos a repetir el procedimiento con la capa fina de la boloñesa, seguidamente cubrimos con lamina de berenjena. Cubrimos de queso y lo metemos a gratinar al horno a 165 grados durante 20 minutos. Abatimos. Se corta en 21 raciones como si fuera una lasaña.",
    "allergens": [
      "Gluten",
      "Lacteos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "noodles-con-gambas",
    "title": "PERSONAS",
    "filename": "NOODLES CON GAMBAS.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "GAMBAS",
        "quantity": 500,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "NOODLES",
        "quantity": 1.5,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO ROJO",
        "quantity": 2,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA ROJA",
        "quantity": 3,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "RALLADURA LIMON",
        "quantity": 1,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CACAHUATES",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE OLIVA",
        "quantity": 150,
        "unit": "L",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SOJA",
        "quantity": 150,
        "unit": "L",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Lavamos las cebollas y los pimientos. Los cortamos en tiras finas. Limpiamos las gambas. Trituramos los cacahuates un poco y los tostamos en la sartén.Ponemos a calentar una olla con agua para cocer los noodles. En una sartén calentamos el aceite y salteamos unos minutos las gamba (solo para decorar). Retiramos. En el mismo aceite salteamos las verduras 4 min a fuego fuerte. Añadimos la salsa de soja. Removemos.Cocemos los fideos de arroz. Colados los incorporamos al wok junto con las gambas e integramos todo 1 min. Servimos con los cacahuates por encima  junto con la ralladura de limón.",
    "allergens": [
      "Gluten",
      "Mariscos",
      "Soja"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "noodles-de-pollo",
    "title": "PERSONAS",
    "filename": "NOODLES DE POLLO.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "PECHUGA DE POLLO",
        "quantity": 600,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "NOODLES",
        "quantity": 1.5,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ZANAHORIA",
        "quantity": 1,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "DIENTE DE AJO",
        "quantity": 2,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CHAMPIÑONES",
        "quantity": 600,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "JUDÍAS VERDES COCIDAS",
        "quantity": 800,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE OLIVA",
        "quantity": 150,
        "unit": "L",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 7,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTA",
        "quantity": 2,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SEMILLAS SÉSAMO",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SALSA DE SOJA",
        "quantity": 150,
        "unit": "L",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Pelamos y cortamos la zanahoria en juliana. Fileteamos los champiñones. Picamos el ajo. Cortamos el pollo en trozos. Ponemos a hervir los fideos. Calentamos en una sartén el aceite y salteamos el pollo hasta que este dorado. Salpimentamos.Retiramos el pollo y añadimos la zanahoria y el ajo a fuego fuerte con sal hasta que esten al dente. Incorporamos los champiñones y las judías y seguimos cocinando hasta que este todo cocido. agregar la salsa de soja.  Mientras tanto cocemos los noodles. Escurridos los incorporamos, integramos todo bien, retiramos del fuego y servimos con semillas de sésamos por encima.",
    "allergens": [
      "Gluten",
      "Soja"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "pasta-bolonesa",
    "title": "PASTA BOLOÑESA",
    "filename": "PASTA BOLOÑESA.docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Pasta",
        "quantity": 700,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebolla",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Zanahoria",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Puerro",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Picado de cerdo y vacuno  40/60",
        "quantity": 300,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Tomate triturado",
        "quantity": 300,
        "unit": "L",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "pimiento verde",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "pimiento rojo",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "pimentón dulce",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo",
        "quantity": 50,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "vino tinto",
        "quantity": 400,
        "unit": "L",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Orégano",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Triturar toda la verdura en thermomix, con su parte proporcional de aceite para que triture bien, incorporamos la verdura triturada en la batiente, que poche durante 15-20 min. Incorporamos el tomate y pimenton. Seguidamente le añadimos el vino tinto para que reduzca y de seguido añadimos la carne picada. Trabajamos bien toda la carne, rompiendo las bolas e incorporamos el tomate, cociendo todo junto durante 15 min. Incorporamos orégano y rectificamos de sal",
    "allergens": [
      "Gluten",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "pasta-salteada-con-tomate-espinaca-y-olivada",
    "title": "PASTA SALTEADA CON TOMATE, ESPINACA Y OLIVADA",
    "filename": "PASTA SALTEADA CON TOMATE, ESPINACA Y OLIVADA.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 150,
    "ingredients": [
      {
        "name": "PASTA",
        "quantity": 9,
        "unit": "kg",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "TOMATE CONCASÉ",
        "quantity": 5.5,
        "unit": "kg",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "QUESO CREMA",
        "quantity": 4,
        "unit": "kg",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "NATA",
        "quantity": 7.5,
        "unit": "l",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ESPINACAS",
        "quantity": 6,
        "unit": "kg",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITUNA NEGRA",
        "quantity": 1.3,
        "unit": "kg",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE",
        "quantity": 300,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 500,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "TOMILLO",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ROMERO",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PARMESANO",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 225,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Cocer la pasta 10/12min.Pelar el ajo y añadir el tomate. Reducir el agua. Agregar el vino y reducir. Añadir nata y queso crema.Cocer las espinacas aparte y agregarlas cuando esté la nata y el queso unido. Picar 2 segundos a potencia 4 las aceitunas en thermomix e incorporar. Por último el tomillo y el romero picado.Rectificar de sal si fuese necesario.\nFOTO",
    "allergens": [
      "Gluten",
      "Lacteos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "patata-panadera-basica-nueva",
    "title": "PATATAS PANADERA BÁSICA NUEVA",
    "filename": "PATATA PANADERA BÁSICA NUEVA.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "PATATA",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE",
        "quantity": 60,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTA BLANCA",
        "quantity": 1,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "LAVAR , SECAR LA PATATA Y CORTAR.METER LA PATATA EN BOLSA DE VACIO EVITANDO QUE SE AMONTONEN LAS RODAJAS QUEDANDO LO MÁS EXTENDIDAS POSIBLE.COCCIÓN AL VACÍO A UNA TEMPERATURA CONSTANTE DE 85 GRADOS DURANTE 50 MINUTOS.FINALIZADA LA COCCIÓN ,ABRIR LAS BOLSAS Y ESCURRIR LIGERAMENTE ,EXTENDER EN BANDEJAS DE HORNO Y HORNEAR A 230 GRADOS DURANTE 8 MINUTOS .\nACABADO Y PRESENTACIÓN",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "patatas-a-la-riojana",
    "title": "PATATAS A LA RIOJANA",
    "filename": "PATATAS A LA RIOJANA.docx",
    "category": "Primer Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "PATATAS",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO ROJO",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO VERDE",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMENTÓN",
        "quantity": 25,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PULPA DE PIMIENTO CHORICERO",
        "quantity": 10,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "LAUREL",
        "quantity": 2,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CHORIZO",
        "quantity": 400,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SALSA DE TOMATE",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 150,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Se cortan las patatas con cuchilla grande , las verduras en brunoise fina y el chorizo en o medallones.Echamos en el aceite el chorizo ,rehogamos y sacamos .Incorporamos las verduras y pochamos a fuego medio alto 20 minutos.Incorporar pimentón ,pulpa de pimiento choricero y trabajar 10 minutos .Subimos fuego, echamos el vino blanco y reducimos 20 minutos.Rehogamos bien la patata ,añadimos la sal ,cubrimos con agua al  ras, incorporamos el laurel y el chorizo y cocemos durante 20 minutos.Probar y rectificar de sal si fuera necesario.\nACABADO Y PRESENTACIÓN",
    "allergens": [
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "patatas-con-costilla",
    "title": "PATATAS CON COSTILLA",
    "filename": "PATATAS CON COSTILLA.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Patatas",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Costilla adobada",
        "quantity": 600,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento verde",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento rojo",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "cebolla",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa tomate",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo",
        "quantity": 70,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimentón",
        "quantity": 25,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 25,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Vino blanco",
        "quantity": 300,
        "unit": "g",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Pelar y triscar las patatas.Hacer un fondo con la cebolla en thermomix molida. El ajo y los pimientos en brunoise. Rehogar las costillas 20 min y añadir las patatas. Cocer unos 20 min y hacer un sofrito con el pimentón. Abatir a 4º",
    "allergens": [
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "patatas-panadera-con-verduras",
    "title": "PATATAS PANADERA CON VERDURAS",
    "filename": "PATATAS PANADERA CON VERDURAS.docx",
    "category": "Guarnicion",
    "season": "Todo el ano",
    "portions": 1,
    "ingredients": [
      {
        "name": "PATATAS",
        "quantity": 700,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE OLIVA virgen extra",
        "quantity": 400,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 600,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO VERDE",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO ROJO",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Pelamos y lavamos las patatas. Las cortamos con mandolina a 2cm aprox. Colocamos las patatas en una placa junto al aceite, la mantequilla y la sal. La metemos en el horno a vapor durante 50 minutos a 90º.Por otro lado, pochamos la verdura a fuego medio alto, durante 30 min aprox. Caramelizar. Agregar el aceite y el vino a la verdura. Por último le agregamos esta preparación a la placa en la patata. Cubrimos. Por último ponemos el horno en calor a 210º por 10 min más.",
    "allergens": [
      "Lacteos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "patatas-rellenas-de-maiz-jamon-y-queso",
    "title": "PATATAS RELLENAS DE MAIZ, JAMON Y QUESO",
    "filename": "PATATAS RELLENAS DE MAIZ, JAMON Y QUESO.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 30,
    "ingredients": [
      {
        "name": "PATATAS",
        "quantity": 3200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "JAMÓN COCIDO",
        "quantity": 500,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MAIZ",
        "quantity": 250,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "QUESO",
        "quantity": 480,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Cocemos las patatas en el horno durante 75 min a 95º a vapor. Vaciamos las patatas y reservamos su pulpa. Lavamos y escurrimos el maíz. Cortamos el jamón en dados pequeños y mezclamos bien con la pulpa. Sazonamos, rellenamos con patata. Cubrimos con el queso y gratinamos a 165º, 30 min,",
    "allergens": [
      "Lacteos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "pechuga-en-salsa-de-setas",
    "title": "PECHUGA DE POLLO EN SALSA DE SETAS",
    "filename": "PECHUGA EN SALSA DE SETAS.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "PECHUGA DE POLLO",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "MANTEQUILLA",
        "quantity": 40,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PUERRO",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SETAS",
        "quantity": 350,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "BACON",
        "quantity": 150,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "NATA",
        "quantity": 700,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 150,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE",
        "quantity": 60,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTA NEGRA",
        "quantity": 3,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "MARCAMOS LA PECHUGA EN PLANCHA CON LA MITAD DEL ACEITE Y LA MITAD DE LA SAL HASTA DORAR POR AMBAS CARAS ,ACABAMOS EN HORNO A 165 GRADOS Y SONDA INTERNA A 78 GRADOS.EN UNA CAZUELA PONEMOS LA MANTEQUILLA Y LA OTRA MITAD DEL ACEITE .INCORPORAMOS EL PUERRO Y LA CEBOLLA EN BRUINOISE FINA ,DEJAMOS CARAMELIZAR APROXIMADAMENTE 20 MINUTOS .INCORPORAMOS EL BACON EN BRUNOISE FINO Y SEGUIMOS TRABAJANDO TODO EN CONJUNTO. SEGUIDAMENTE INCORPORAMOS EL MIX DE SETAS ,COCINAMOS TODO EN CONJUNTO DURANTE 10 MINUTOS E INCORPORAMOS LA NATA .DEJAMOS REDUCIR TODO 15 MINUTOS A FUEGO MEDIO BAJO ,INCORPORAMOS SAL,TRITURAMOS EN LA THERMOMIX AL 7 DURANTE 5 MINUTOS Y PASAMOS POR EL CHINO.SE FILETEA LA PECHUGA EN MEDALLONES DE 50-60 GRAMOS APROXIMADAMENTESE FILETEA LA PECHUGA SESGADA EN MEDASLLONES APROX DE 50-60 GR",
    "allergens": [
      "Lacteos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "pimientos-rellenos-de-carne-con-patatas-receta",
    "title": "PIMIENTOS RELLENOS DE CARNE CON PATATAS",
    "filename": "PIMIENTOS RELLENOS DE CARNE CON PATATAS RECETA.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "Carne vacuno 70% cerdo 30%",
        "quantity": 800,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Orégano",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebolla",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Zanahoria",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento verde",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento rojo",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimentón",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Tomate casero generico",
        "quantity": 600,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Huevo líquido",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Harina",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimientos del piquillo",
        "quantity": 30,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Patatas panadera",
        "quantity": 500,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mantequilla",
        "quantity": 125,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pulpa pimiento choricero",
        "quantity": 40,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Vino blanco",
        "quantity": 125,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Rellenamos los pimientos de boloñesa genérica (500ml). Pasamos por harina y por huevo. Freímos ligeramente. Cuando los pimientos estén fritos, reservar el aceite. Tostar la verdura en ello. Incorporar la cebolla, pimiento rojo y lo pochamos durante 20 min a fuego medio alto. Bajamos el fuego, incorporamos la salsa de tomate (100ml), la pulpa de pimiento choricero, 100 gr de pimientos de piquillo, y 25ml del jugo del pimiento de piquillo. Dejamos trabajar 10 min.Subir el fuego, incorporamos vino y dejamos reducir. Bajar nuevamente el fuego, incorporar la harina (25gr) + medio litro de agua apox. Dejamos todo trabajar en conjunto durante 15 min probamos y rectificamos de sal. Pasamos por pasa puré y chino.",
    "allergens": [
      "Gluten",
      "Lacteos",
      "Huevos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "pimientos-rellenos-de-marisco-en-salsa-americana",
    "title": "PERSONAS",
    "filename": "PIMIENTOS RELLENOS DE MARISCO EN SALSA AMERICANA.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "MEJILLÓN",
        "quantity": 150,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "LANGOSTINOS",
        "quantity": 150,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "LECHE",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "puerro",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "cebolla",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "pimiento rojo",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite de girasol",
        "quantity": 300,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mantequilla",
        "quantity": 700,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Vino blanco",
        "quantity": 250,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa de tomate",
        "quantity": 150,
        "unit": "ml",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "pim piquillo",
        "quantity": 30,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "huevo liquido",
        "quantity": 300,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "almidon",
        "quantity": 300,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Crema Americana",
        "quantity": 800,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Relleno: Limpiamos y desinfectamos las verduras. Trituramos por thermomix. Poner en batiente a pochar. Cuando este trabajada la verdura, 20 minutos aprox. Incorporamos vino blanco. Reducir. Incorporamos la salsa de tomate junto a los mejillones, el langostino. Cocinar durante 5 minutos. Agregar leche y ligamos con maicena. Incorporar americana generica. Rectificamos de sal. Abatimos y rellenamos los pimientos. Pasamos por maicena y huevo, y freimos en aceite de girasol.",
    "allergens": [
      "Lacteos",
      "Huevos",
      "Mariscos",
      "Moluscos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "pisto-con-patatas",
    "title": "PERSONAS",
    "filename": "PISTO CON PATATAS.docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Cebollas",
        "quantity": 600,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "calabacin",
        "quantity": 350,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento rojo",
        "quantity": 350,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento verde",
        "quantity": 350,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Berenjenapatata",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa de tomateajosalaceite de girasol",
        "quantity": 600,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PESO POR RACIÓN",
        "quantity": 250,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Lavamos y desinfectamos todas las verduras en el baño desinfectante durante 5 minutos.Limpiamos y cortamos todo en brunoise fina de 3x3 mm. Ponemos a pochar primeramente pimiento verde, rojo y cebolla. Pasados 20 min, incorporamos el calabacín y la berenjena. Seguimos cocinando durante otros 20 min y al final incorporamos el tomate. Damos un hervor en conjunto y rectificar de sal.Freir la patata en aceite hasta que esté bien tostada, escurrir el aceite, salar e incorporar al pisto y remover y abatir.",
    "allergens": [],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "pollo-asado-con-patatas-panaderas",
    "title": "POLLO ASADO CON PATATAS PANADERAS",
    "filename": "POLLO ASADO CON PATATAS PANADERAS.docx",
    "category": "Primer Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "traseros de pollo",
        "quantity": 2160,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "patatas panaderas",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "cebolla",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "zanahoria",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "pimiento rojo",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "vino blanco",
        "quantity": 245,
        "unit": "L",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mantequilla",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Almidón maiz",
        "quantity": 50,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo",
        "quantity": 30,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Tomillo seco",
        "quantity": 2,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 5,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "finas hierbas",
        "quantity": 1,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite",
        "quantity": 225,
        "unit": "L",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "zumo limon",
        "quantity": 145,
        "unit": "L",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Trituramos en la thermomix el aceite, vino, zumo limón, ajo, tomillo, romero y sal. Untamos los muslos de pollo y dejamos reposar varias horas. Asamos los traseros a 165º grados durante 40 min aprox. Luego subimos el horno a 200 grados durante 5 minutos para tostar bien el pollo.  Incorporar en cada bandeja 200ml de vino blanco para desgrasar. Reservamos caldo. Abatimos. En una cazuela incorporamos la cebolla, el pimiento y la zanahoria pasada por la thermomix, pochamos durante 20 minutos durante fuego medio alto. Incorporamos vino blanco y dejamos reducir. Reducir. Luego incorporamos el caldo de las bandejas. Dejamos cocer durante 15 min. Trituramos. Rectificamos de sal y ligamos con maicena. Volvemos a levantar la salsa. Cuendo huerva, abatimos. Panaderas generica.",
    "allergens": [
      "Lacteos",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "pollo-strogonoff-receta",
    "title": "POLLO STROGONOFF",
    "filename": "POLLO STROGONOFF RECETA.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "Pechuga de pollo",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebolla",
        "quantity": 500,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Champiñón",
        "quantity": 500,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite de oliva",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mantequilla",
        "quantity": 150,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Vino blanco",
        "quantity": 150,
        "unit": "g",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Nata",
        "quantity": 50,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa española",
        "quantity": 0.5,
        "unit": "l",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mostaza",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "",
    "allergens": [
      "Lacteos",
      "Mostaza",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "pollo-tikka-masala",
    "title": "POLLO TIKKA MASALA CON ARROZ",
    "filename": "POLLO TIKKA MASALA.docx",
    "category": "Primer Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "Contramuslos de pollo",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Comino",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Galam masala",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Limón",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Yogurt",
        "quantity": 500,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebolla",
        "quantity": 500,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "½ boteTika masala",
        "quantity": 80,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Leche de coco",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Arroz",
        "quantity": 350,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite girasol",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "",
    "allergens": [
      "Lacteos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "purrusalda-de-bacalao",
    "title": "PURRUSALDA DE BACALAO",
    "filename": "PURRUSALDA DE BACALAO .docx",
    "category": "Primer Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "Huevos (10)",
        "quantity": 630,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Patatas",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Puerros",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Bacalao",
        "quantity": 400,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo",
        "quantity": 40,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebolla",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Vino blanco",
        "quantity": 200,
        "unit": "g",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento verde",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mantequilla",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite de girasol",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "fumet de pescado*",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 250,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "",
    "allergens": [
      "Lacteos",
      "Huevos",
      "Pescado",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "ragout-a-la-jardinera",
    "title": "RAGOUT DE TERNERA A LA JARDINERA",
    "filename": "RAGOUT A LA JARDINERA.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Aceite de oliva",
        "quantity": 0.4,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Carne de ternera",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebollas",
        "quantity": 500,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento Rojo",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento verde",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Zanahoria",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ajo",
        "quantity": 15,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa tomate casera",
        "quantity": 200,
        "unit": "L",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Agua",
        "quantity": 6,
        "unit": "L",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Vino tinto",
        "quantity": 1,
        "unit": "L",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Guisante",
        "quantity": 300,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Champiñones",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "LIMPIAMOS LA CARNE Y SALPIMENTAMOS.CORTAMOS LOS CHAMPIÑONES EN CUATRO ,REHOGAMOS A FUEGO FUERTE ,RETIRAMOS DE LA CAZUELA Y RESERVAMOS .SELLAMOS LA CARNE EN LA MISMA CAZUELA .TRITURAMOS LA CEBOLLA , EL AJO Y LOS PIMIENTOS EN LA THERMOMIX .UNA VEZ SELLADA LA CARNE AÑADIMOS EL VINO Y DEJAMOS REDUCIR .REDUCIDO EL VINO AGREGAMOS LA VERDURA TRITURADA Y DEJAMOS POCHAR 20 MINUTOS .AÑADIMOS LA ZANAHORIA Y CUBRIMOS CON EL AGUA Y LO DEJAMOS A FUEGO MEDIO UNAS TRES HORAS .CUANDO FALTEN 30 MINUTOS DE COCCIÓN AÑADIMOS LOS CHAMPIÑONES Y LOS GUISANTES",
    "allergens": [
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "redondo-de-ternera-en-salsa",
    "title": "REDONDO DE TERNERA EN SALSA",
    "filename": "REDONDO DE TERNERA EN SALSA .docx",
    "category": "Segundo Plato",
    "season": "TODOELAÑO",
    "portions": 10,
    "ingredients": [
      {
        "name": "Redondo de ternera",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Zanahoria",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento rojo",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento verde",
        "quantity": 150,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Cebolla",
        "quantity": 300,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Puerro",
        "quantity": 100,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Vino tinto",
        "quantity": 500,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Sal",
        "quantity": 12,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimentón",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa de tomate",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Marcamos los redondos salpimentados, a fuego fuerte en la batiente hasta que  doren. Seguidamente le incorporamos la escalivada de verdura (todas las verduras trituradas junto con el tomate, pimentón, aceite, agua y sal en una cazuela.) Luego incorporamos el vino tinto y cubrimos de agua hasta el ras. Dejamos reducir todo en conjunto, hasta que el redondo al pinchar con el termómetro esté a 80 grados. Sacamos los redondos de la batiente. El caldo lo colamos por el chino. Si es necesario lo ligamos con maicena.",
    "allergens": [
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "revuelto-ajetes-gambas-y-trigueros",
    "title": "REVUELTO DE AJETES ,GAMBAS Y TRIGUEROS",
    "filename": "REVUELTO AJETES,GAMBAS Y TRIGUEROS.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "ACEITE",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 15,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "GAMBÓN",
        "quantity": 500,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJETES",
        "quantity": 500,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "HUEVOS",
        "quantity": 30,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "TRITURAMOS EL AJO EN LA THERMOMIX AL 4.5 DURANTE 10 SEGUNDOS  LO INCORPORAMOS  AL ACEITE DESDE FRIO Y LO PONEMOS A PERFUMAR.CUANDO EL AJO ESTÁ COGIENDO COLOR , LE INCORPORAMOS EL GAMBÓN ,CORTADO EN TRES Y QUITADO EL INTESTINO. LO DEJAMOS COCINARDURANTE 5 MINUTOS A FUEGO MEDIO-BAJO.INCORPORAMOS EL AJETE ESCURRIDO Y LO DEJAMOS COCINAR 3 MINUTOS MÁS.INCORPORAMOS EL HUEVO , NO MUY BATIDO Y SACAMOS LA TEXTURA CREMOSA DEL REVUELTO A FUEGO MEDIO-BAJO.PROBAMOS Y RECTIFICAMOS DE SAL SI ES NECESARIO.I",
    "allergens": [
      "Huevos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "rotti-de-pavo",
    "title": "ROTTI DE PAVO CON PURÉ DE PATATAS",
    "filename": "ROTTI DE PAVO.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "ROTTI DE PAVO",
        "quantity": 2500,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO VERDE",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO ROJO",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ZANAHORIA",
        "quantity": 200,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMENTÓN",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE DE GIRASOL",
        "quantity": 150,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 8,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO TINTO",
        "quantity": 500,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SALSA DE TOMATE",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PESO POR RACIÓN",
        "quantity": 418.8,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Doramos a fuego fuerte el redondo en el aceite. Seguidamente incorporamos todas las verduras en un vaso batidor con aceite, sal, salsa de tomate y pimentón. Le incorporamos 300ml de agua. Hacemos la escalibada de verduras. Luego lo incorporamos al redondo. dejamos cocinar durante 10 min. Incorporamos el vino tinto y dejamos reducir otros 10 min. Seguidamente cubrimos el redondo con agua. Dejamos cocinar hora y media. Comprobamos que el redondo esté a 80º pinchando con el termómetro (centro)\nACABADO Y PRESENTACIÓN",
    "allergens": [
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "salchichas-encebolladas",
    "title": "SALCHICHAS ENCEBOLLADAS",
    "filename": "SALCHICHAS ENCEBOLLADAS.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "SALCHICHAS",
        "quantity": 30,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CEBOLLA",
        "quantity": 600,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO VERDE ITALIANO",
        "quantity": 250,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMIENTO ROJO",
        "quantity": 250,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE O.4 OLIVA",
        "quantity": 50,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "VINO BLANCO",
        "quantity": 250,
        "unit": "ml",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "",
    "allergens": [
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "salmorejo",
    "title": "SALMOREJO",
    "filename": "SALMOREJO.docx",
    "category": "Primer Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "TOMATES",
        "quantity": 1000,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PAN",
        "quantity": 80,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 1,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE V.EXTRA",
        "quantity": 110,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "HUEVO",
        "quantity": 35,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "JAMÓN",
        "quantity": 35,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "La vispera dejamos todo a remojo macerando (tomate ,pan…etc) triturar y pasar por el chino.\nACABADO Y PRESENTACIÓN",
    "allergens": [
      "Huevos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "secreto-asado-con-pure-de-manzana-a-la-pimienta-de-jamaica",
    "title": "SECRETO ASADO CON PURÉ DE MANZANA",
    "filename": "SECRETO ASADO CON PURÉ DE MANZANA A LA PIMIENTA DE JAMAICA.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Secreto de cerdo",
        "quantity": 2000,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Soja sin gluten",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimienta",
        "quantity": 19,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ajo",
        "quantity": 15,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Manzana golden",
        "quantity": 1600,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Ralladura limón y naranja",
        "quantity": 25,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Salsa española",
        "quantity": 200,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Canela",
        "quantity": 30,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Vino blanco",
        "quantity": 500,
        "unit": "g",
        "supplier": "Bebidas",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Azúcar",
        "quantity": 325,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Mantequilla",
        "quantity": 50,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Maicena",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Envasar el secreto junto con la soja al vacío 97% y cocer  4:15h a 95º vapor. Agregar pimienta y ajo. Sacar del envase, dejo escurrir y enfriar. Racionamos a 150/170gr. Lo metemos a tostar al horno durante 10 min a 210º  En cazuela incorporamos la salsa española mas el jugo de la bolsa de vacío. Dejamos reducir 10 min y ligamos con maicena. Para el puré: pelar y cortar la manzana en 8 gajos. Cocer  en 100 ml de agua con las ralladuras, la canela y la mantequilla.Cocer durante 1 hora y al final incorporar el azúcar. Triturar en thermomix al nº7 durante 2min .Estofar con el azúcar y en thermomix velocidad 7 durante 2 min.",
    "allergens": [
      "Lacteos",
      "Soja",
      "Sulfitos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "sopa-castellana",
    "title": "PERSONAS",
    "filename": "SOPA CASTELLANA.docx",
    "category": "Primer Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "ACEITE",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 60,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "JAMÓN",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "CHORIZO",
        "quantity": 100,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMENTÓN DULCE",
        "quantity": 20,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PIMENTON PICANTE",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PULPA PIMIENTO CHORICERO",
        "quantity": 40,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PAN DURO",
        "quantity": 500,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AGUA",
        "quantity": 2.2,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "HUEVO",
        "quantity": 10,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "SAL",
        "quantity": 15,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "TRITURAMOS EL  AJO EN LA THERMOMIX AL 4,5 DURANTE 10 SEGUNDOS.LO INCORPORAMOS AL ACEITE FRIO Y LO PONEMOS AL MINIMO Y DEJAMOS QUE COJA COLOR , SEGUIDAMENTE LE INCORPORAMOS LAS MIGAS DE JAMON Y EL CHORIZO CORTADO EN BRUNOISE 0,5X 0,5.TRABAJAMOS EL CONJUNTO DURANTE 5 MINUTOS , INCORPORAMOS EL PIMENTON DULCE Y PICANTE Y LA PULPA DE PIMIENTO CHORICERO.INCORPORAMOS EL PAN CORTADO EN LASCAS FINAS Y REHOGAMOS EL CONJUNTO.INCORPORAMOS EL AGUA Y DEJAMOS COCER TODO 20 MINUTOS .DESPUES DE LOS 20M MINUTOS ,APAGAMOS EL FUEGO E INCORPORAMOS EL HUEVO.DEJAMOS REPOSAR 15 MINUTOS,PROBAMOS DE SAL Y RECTIFICAMOS SI ES NECESARIO.D",
    "allergens": [
      "Huevos"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "tacos-de-merluza-rebozada",
    "title": "TACOS DE MERLUZA REBOZADA",
    "filename": "TACOS DE MERLUZA REBOZADA.docx",
    "category": "Segundo Plato",
    "season": "Todo el año",
    "portions": 10,
    "ingredients": [
      {
        "name": "MERLUZA",
        "quantity": 2.2,
        "unit": "g",
        "supplier": "Pescaderia",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "HARINA",
        "quantity": 100,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "AJO",
        "quantity": 25,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "PEREJIL",
        "quantity": 12,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "LIMÓN",
        "quantity": 1,
        "unit": "l",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE DE OLIVA",
        "quantity": 0.4,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ACEITE DE GIRASOL",
        "quantity": 500,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Peso por ración",
        "quantity": 0,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "La vispera sacamos merluza y cortamos en medallones de 25 gramos ,dejamos macerando en ajo,sal, aceite y ralladura de limón .Al dia siguiente pasamos por maicena y huevo y freimos.\nACABADO Y PRESENTACIÓN",
    "allergens": [
      "Gluten",
      "Huevos",
      "Pescado"
    ],
    "pricePerRation": 0,
    "notes": ""
  },
  {
    "id": "tiras-de-pavo-salteado-con-verduras-y-soja",
    "title": "TIRAS DE PAVO SALTEADO CON VERDURAS Y SOJA",
    "filename": "TIRAS DE PAVO SALTEADO CON VERDURAS Y SOJA.docx",
    "category": "Segundo Plato",
    "season": "Todo el ano",
    "portions": 10,
    "ingredients": [
      {
        "name": "Pavo filete XL",
        "quantity": 1800,
        "unit": "g",
        "supplier": "Carnicerai",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento rojo",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Pimiento verde",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Calabacín",
        "quantity": 400,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Soja s/gluten",
        "quantity": 150,
        "unit": "g",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Perejil seco",
        "quantity": 10,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "Aceite girasol",
        "quantity": 100,
        "unit": "ml",
        "supplier": "Alimentacion",
        "costPerUnit": 0,
        "totalCost": 0
      },
      {
        "name": "ZanahoriaSalsa de ostras",
        "quantity": 400,
        "unit": "g",
        "supplier": "Fruteria/Verduleria",
        "costPerUnit": 0,
        "totalCost": 0
      }
    ],
    "elaboration": "Cortamos el pavo en tiras. Salpimentamos. A fuego medio alto doramos el pollo en la batiente. Se reserva.  Seguidamente incorporamos la verdura cortada en juliana. Pochamos durante 4 minutos y lo dejamos en cruditex. Volvemos a incorporar el pavo, mas la soja y la salsa de ostras. Cocinamos todo en conjunto durante 6 minutos. Rectificamos de sal.  Sacamos y abatimos. Cuando saquemos la comida, intentar que no vaya caldo.",
    "allergens": [
      "Soja",
      "Moluscos"
    ],
    "pricePerRation": 0,
    "notes": ""
  }
];

/**
 * Find a recipe by its unique ID.
 * Returns undefined if not found.
 */
export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}

/**
 * Get all recipes belonging to a specific category.
 */
export function getRecipesByCategory(category: CategoryType): Recipe[] {
  return recipes.filter((recipe) => recipe.category === category);
}

/**
 * Search recipes by title, elaboration or notes (case-insensitive).
 */
export function searchRecipes(query: string): Recipe[] {
  const q = query.toLowerCase().trim();
  if (!q) return recipes;
  return recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(q) ||
      recipe.elaboration.toLowerCase().includes(q) ||
      recipe.notes.toLowerCase().includes(q) ||
      recipe.ingredients.some((ing) => ing.name.toLowerCase().includes(q))
  );
}

/**
 * Returns a copy of the recipe with ingredient quantities scaled to targetPortions.
 * The original recipe is not mutated.
 */
export function scaledIngredients(
  recipe: Recipe,
  targetPortions: number
): Ingredient[] {
  if (recipe.portions === 0 || targetPortions <= 0) {
    return recipe.ingredients.map((ing) => ({ ...ing }));
  }
  const factor = targetPortions / recipe.portions;
  return recipe.ingredients.map((ing) => ({
    ...ing,
    quantity: Math.round(ing.quantity * factor * 1000) / 1000,
    totalCost: Math.round(ing.totalCost * factor * 100) / 100,
  }));
}
