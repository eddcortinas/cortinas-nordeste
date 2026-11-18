/* =========================================================
   Cortinas Nordeste — tabela de tecidos do gerador de orçamento
   Mesma tabela do gerador da EDD Cortinas, com os preços da Cortinas Nordeste:
   - rolô, painel, painel romano, romana e double vision: preço da EDD - 5%
     (também nos adicionais de valor fixo; os adicionais em % ficam iguais)
   - linhos (cortina de tecido) e Acortinado BK: preço da EDD x 0,86
     (Linho Flame Irlandês: EDD 100,00 -> 86,00)
   - linho com blackout: preço do linho x 1,8605 (Flame Irlandês: 86,00 -> 160,00)
   Os nomes dos modelos são os do site da Cortinas Nordeste.
   Cada modelo tem coleções; cada coleção tem suas cores (todas com o mesmo preço)
   e um preço por opção (tubo R32/R38/R43 na rolô, 2 a 5 vias no painel).
   - areaMinima / areaMaxima: m² cobrados por peça (sem areaMinima vale 1,5 m²)
   - larguraMax: largura máxima da coleção (o gerador avisa se passar)
   - adicionais: pct = acréscimo % no preço do m²; valor = R$ fixo por peça
   Para mudar um preço, edite o número aqui. Só o gerador usa este arquivo.
   ========================================================= */
const TABELA_TECIDOS = {
  "Cortina rolô / tela solar": {
    "areaMinima": 1.6,
    "variante": { "rotulo": "Tubo", "opcoes": ["R32", "R38", "R43 (motorizada)"], "automatica": "rolo" },
    "colecoes": [
      { "nome": "Screen 1%", "cores": ["710", "711", "712"], "larguraMax": 3.0, "precos": [273.28, 301.43, 376.88] },
      { "nome": "Screen 3%", "cores": ["700", "701", "702", "703", "704", "705"], "larguraMax": 3.0, "precos": [226.06, 249.34, 288.90] },
      { "nome": "Screen 5%", "cores": ["700", "701", "702", "703", "704", "705"], "larguraMax": 3.0, "precos": [191.69, 211.44, 231.74] },
      { "nome": "Screen Lugano 5%", "cores": ["Brown", "Silver", "Cream"], "larguraMax": 2.5, "precos": [343.99, 380.05, 440.75] },
      { "nome": "Luzes", "cores": ["White", "Offwhite", "Roller", "Strip", "Imbuia", "Tropical", "Inca", "Veneza", "Athenea", "Topázio"], "larguraMax": 2.0, "precos": [211.05, 232.80, 245.13] },
      { "nome": "Munique", "cores": ["Lino", "Sweet", "Ice"], "larguraMax": 2.8, "precos": [221.58, 244.34, 257.36] },
      { "nome": "Bonna", "cores": ["Almond", "Sand", "Silver"], "larguraMax": 2.5, "precos": [197.40, 217.89, 258.98] },
      { "nome": "Treviso Translúcido", "cores": ["Green", "Mescla Marfim", "Bege", "Castanho", "Prata"], "larguraMax": 2.5, "precos": [190.15, 210.84, 244.19] },
      { "nome": "Treviso BK", "cores": ["Branco", "Creme", "Bege", "Cinza", "Natural", "Cinza Mescla"], "larguraMax": 2.8, "precos": [218.03, 240.58, 255.65] },
      { "nome": "Laguna BK", "cores": ["Offwhite", "Castor", "Natural", "Cinza"], "larguraMax": 2.0, "precos": [261.29, 288.20, 333.88] },
      { "nome": "Prestige BK", "cores": ["Branco", "Bege", "Offwhite", "Cinza"], "larguraMax": 2.8, "precos": [257.74, 284.29, 329.28] },
      { "nome": "Munique BK", "cores": ["Lino", "Sweet", "Ice"], "larguraMax": 2.8, "precos": [282.36, 312.25, 361.84] },
      { "nome": "Bonna BK", "cores": ["White", "Sand"], "larguraMax": 2.5, "precos": [290.87, 320.80, 371.58] },
      { "nome": "Pimpoint", "cores": ["320", "322", "323", "324", "330"], "larguraMax": 1.83, "precos": [225.89, 249.17, 273.17] },
      { "nome": "Pimpoint Plus", "cores": ["331", "332", "333", "334"], "larguraMax": 3.0, "precos": [202.98, 223.89, 245.37] },
      { "nome": "Shantung BK", "cores": ["Creme", "Candy", "Chocolate", "Black", "Nature", "Cinza Mescla"], "larguraMax": 2.2, "precos": [289.03, 318.81, 369.27] },
      { "nome": "Miami BK", "cores": ["Crome", "Cinza", "Black"], "larguraMax": 2.5, "precos": [244.74, 269.97, 313.89] },
      { "nome": "Madrid BK", "cores": ["Blue", "Beige", "Sand", "Salmon"], "larguraMax": 2.5, "precos": [318.64, 351.47, 361.84] }
    ],
    "adicionais": [
      { "id": "premium", "nome": "Kit Premium (acessórios bege, cinza, preto ou marrom)", "pdf": "Kit Premium", "pct": 10 },
      { "id": "cunha", "nome": "Base cunha alumínio branco", "pdf": "Base cunha", "pct": 5 },
      { "id": "redutor", "nome": "Redutor de peso", "pdf": "Redutor de peso", "valor": 128.25 }
    ]
  },
  "Cortina painel": {
    "depoisDe": "Painel romano",
    "variante": { "rotulo": "Vias", "opcoes": ["2 vias", "3 vias", "4 vias", "5 vias"] },
    "colecoes": [
      { "nome": "Screen 1%", "cores": ["710", "711", "712"], "precos": [283.07, 324.18, 358.80, 403.01] },
      { "nome": "Screen 3%", "cores": ["700", "701", "702", "704", "705"], "precos": [216.95, 248.46, 274.97, 308.85] },
      { "nome": "Screen 5%", "cores": ["750", "751", "752"], "precos": [158.88, 180.04, 199.20, 223.82] },
      { "nome": "Lugano Screen 5%", "cores": ["Brown", "Silver", "Cream"], "precos": [331.04, 378.46, 419.59, 471.30] },
      { "nome": "Pimpoint", "cores": ["320", "322", "323", "324", "330"], "precos": [205.13, 234.92, 259.99, 292.03] },
      { "nome": "Pimpoint Plus", "cores": ["331", "332", "333", "334"], "precos": [171.41, 196.29, 217.24, 244.02] },
      { "nome": "Luzes", "cores": ["Linho", "Strip", "Imbuia", "Tropical"], "precos": [184.10, 210.84, 233.35, 262.11] },
      { "nome": "Treviso Translúcido", "cores": ["Creme", "Bege", "Cinza Mescla", "Green", "Marrom"], "precos": [183.42, 210.04, 232.46, 261.12] },
      { "nome": "Munique", "cores": ["Sweet", "Lino", "Ice"], "precos": [193.27, 221.96, 244.94, 275.07] },
      { "nome": "Bonna", "cores": ["Almond", "Sand", "Silver"], "precos": [194.47, 222.78, 246.53, 276.93] },
      { "nome": "Laguna BK", "cores": ["Offwhite", "Natural", "Castor", "Cinza"], "precos": [250.73, 287.16, 317.80, 356.98] },
      { "nome": "Prestige BK", "cores": ["Branco", "Bege", "Offwhite", "Cinza"], "precos": [247.31, 283.22, 313.48, 352.09] },
      { "nome": "Treviso BK", "cores": ["Branco", "Creme", "Bege", "Cinza", "Natural", "Cinza Mescla"], "precos": [191.93, 219.80, 243.25, 273.22] },
      { "nome": "Munique BK", "cores": ["Lino", "Sweet", "Ice"], "precos": [271.79, 311.31, 344.46, 386.93] },
      { "nome": "Bonna BK", "cores": ["White", "Sand"], "precos": [279.07, 319.62, 353.71, 397.32] },
      { "nome": "Shantung BK", "cores": ["Creme", "Candy", "Chocolate", "Black"], "precos": [277.36, 317.65, 351.54, 394.88] },
      { "nome": "Miami BK", "cores": ["Crome", "Cinza", "Black"], "precos": [235.76, 269.99, 298.80, 335.67] },
      { "nome": "Madrid", "cores": ["Blue", "Beige", "Sand", "Salmon"], "precos": [271.85, 311.26, 344.46, 386.93] }
    ],
    "adicionais": [
      { "id": "cunha", "nome": "Base cunha", "pdf": "Base cunha", "pct": 7 },
      { "id": "corda", "nome": "Comando com corda (por trilho)", "pdf": "Comando com corda", "valor": 128.25 }
    ]
  },
  "Painel romano": {
    "variante": { "rotulo": "Vias", "opcoes": ["2 vias", "3 vias", "4 vias", "5 vias"] },
    "colecoes": [
      { "nome": "Screen 1%", "cores": ["710", "711", "712"], "precos": [330.63, 374.92, 439.04, 479.28] },
      { "nome": "Screen 3%", "cores": ["700", "701", "702", "704", "705"], "precos": [253.34, 287.37, 336.44, 366.42] },
      { "nome": "Screen 5%", "cores": ["750", "751", "752"], "precos": [183.62, 208.28, 243.85, 266.52] },
      { "nome": "Screen 5% (Lugano)", "cores": ["Brown", "Silver", "Cream"], "precos": [386.56, 438.44, 513.43, 561.16] },
      { "nome": "Luzes", "cores": ["Linho", "Strip", "Imbuia", "Tropical", "Athenea"], "precos": [215.03, 243.85, 285.53, 312.08] },
      { "nome": "Munique", "cores": ["Sweet", "Lino", "Ice"], "precos": [225.87, 255.99, 299.76, 327.59] },
      { "nome": "Bonna", "cores": ["Almond", "Sand", "Silver"], "precos": [227.36, 257.70, 301.75, 329.74] },
      { "nome": "Treviso Translúcido", "cores": ["Green", "Marrom", "Prata Mescla", "Bege"], "precos": [215.39, 243.25, 284.63, 311.31] },
      { "nome": "Pinpoint Plus", "cores": ["331", "332", "333", "334"], "precos": [200.19, 227.13, 265.91, 290.61] },
      { "nome": "Laguna BK", "cores": ["Offwhite", "Natural", "Castor", "Cinza"], "precos": [292.92, 332.27, 389.03, 425.19] },
      { "nome": "BK Prestige", "cores": ["Branco", "Bege", "Offwhite", "Cinza"], "precos": [288.95, 327.77, 383.72, 419.55] },
      { "nome": "Treviso BK", "cores": ["Branco", "Creme", "Bege", "Cinza", "Natural"], "precos": [224.27, 254.36, 297.80, 325.58] },
      { "nome": "Bonna BK", "cores": ["White", "Sand", "Almond"], "precos": [326.18, 370.04, 433.06, 473.48] },
      { "nome": "Munique BK", "cores": ["Lino", "Sweet", "Ice"], "precos": [317.70, 360.38, 421.73, 461.10] },
      { "nome": "Shantung BK", "cores": ["Creme", "Candy", "Chocolate", "Black", "Natural", "Cinza Mescla"], "precos": [324.22, 368.08, 430.45, 470.59] },
      { "nome": "Madrid BK", "cores": ["Crome", "Cinza", "Black", "Salmon"], "precos": [317.70, 360.38, 421.73, 461.10] },
      { "nome": "Miami BK", "cores": ["Blue", "Beige", "Sand"], "precos": [275.48, 312.63, 365.85, 400.05] }
    ],
    "adicionais": [
      { "id": "cunha", "nome": "Base cunha", "pdf": "Base cunha", "pct": 8 },
      { "id": "corda", "nome": "Comando com corda (por trilho)", "pdf": "Comando com corda", "valor": 128.25 }
    ]
  },
  "Cortina romana": {
    "areaMinima": 1.6,
    "areaMaxima": 4.5,
    "colecoes": [
      { "nome": "Screen 1%", "cores": ["710", "711", "712"], "larguraMax": 3.0, "precos": [501.12] },
      { "nome": "Screen 3%", "cores": ["700", "701", "702", "704"], "larguraMax": 3.0, "precos": [383.16] },
      { "nome": "Screen 5%", "cores": ["750", "751", "752"], "larguraMax": 3.0, "precos": [277.62] },
      { "nome": "Lugano Screen 5%", "cores": ["Brown", "Silver", "Cream"], "larguraMax": 2.5, "precos": [584.91] },
      { "nome": "Pimpoint Plus", "cores": ["331", "332", "333", "334"], "larguraMax": 3.0, "precos": [302.84] },
      { "nome": "Luzes", "cores": ["Linho", "Strip", "Imbuia", "Tropical"], "larguraMax": 2.0, "precos": [325.16] },
      { "nome": "Bonna", "cores": ["Almond", "Sand", "Silver"], "larguraMax": 2.5, "precos": [343.88] },
      { "nome": "Munique", "cores": ["Sweet", "Lino", "Ice"], "larguraMax": 2.8, "precos": [341.32] },
      { "nome": "Treviso Translúcido", "cores": ["Green", "Castanho", "Prata Mescla", "Bege"], "larguraMax": 2.5, "precos": [323.96] },
      { "nome": "Laguna BK", "cores": ["Offwhite", "Natural", "Castor", "Cinza"], "larguraMax": 2.0, "precos": [442.98] },
      { "nome": "Prestige BK", "cores": ["Branco", "Bege", "Offwhite", "Cinza"], "larguraMax": 2.8, "precos": [436.82] },
      { "nome": "Treviso BK", "cores": ["Branco", "Creme", "Bege", "Cinza", "Natural", "Cinza Mescla"], "larguraMax": 2.8, "precos": [339.09] },
      { "nome": "Munique BK", "cores": ["Lino", "Sweet", "Ice"], "larguraMax": 2.8, "precos": [480.00] },
      { "nome": "Bonna BK", "cores": ["White", "Sand"], "larguraMax": 2.0, "precos": [492.91] },
      { "nome": "Shantung BK", "cores": ["Creme", "Candy", "Chocolate", "Black"], "larguraMax": 2.2, "precos": [489.87] },
      { "nome": "Miami BK", "cores": ["Crome", "Cinza", "Black"], "larguraMax": 2.5, "precos": [416.39] },
      { "nome": "Madrid BK", "cores": ["Blue", "Beige", "Sand", "Salmon"], "larguraMax": 2.5, "precos": [480.00] }
    ],
    "adicionais": [
      { "id": "premium", "nome": "Kit Premium (acessórios bege, cinza, preto ou marrom)", "pdf": "Kit Premium", "pct": 10 }
    ]
  },
  "Persiana double vision": {
    "areaMinima": 1.6,
    "colecoes": [
      { "nome": "Double Vision 32mm", "cores": ["White", "Black", "Nature", "Cinza", "Chocolate", "Offwhite", "Capuccino", "Sand"], "precos": [388.00] },
      { "nome": "Double Vision R 38mm", "cores": ["White", "Black", "Nature", "Cinza", "Chocolate", "Offwhite", "Capuccino", "Sand"], "precos": [428.01] },
      { "nome": "Double Vision R 43mm", "cores": ["White", "Black", "Nature", "Cinza", "Chocolate", "Offwhite", "Capuccino", "Sand"], "precos": [496.07] }
    ],
    "adicionais": [
      { "id": "premium", "nome": "Kit Premium (acessórios bege, cinza, preto ou marrom)", "pdf": "Kit Premium", "pct": 10 }
    ]
  },
  /* Cortinas em tecido (preço por metro de tecido). Metragem = largura do vão x franzimento
     (linhos e tecido com blackout: o vendedor escolhe 2,00 a 4,00, padrão 3,00;
     Cortina acortinado: 2,50 fixo). Até 2,65 m de altura o tecido vai invertido (sem emendas);
     acima disso vai em pé com emendas (panos) e o gerador avisa para confirmar. Cor = código Emteco + nome. */
  "Cortina de tecido": {
    "rotulo": "Tecido",
    "franzido": 3.0,
    "franzimentos": [2.0, 2.5, 3.0, 3.3, 3.5, 4.0],
    "alturaInvertido": 2.65,
    "colecoes": [
      { "nome": "Linho Flame Irlandês", "cores": ["987 Bege 04", "988 Trigo 09", "989 Cinza 03", "990 Marfim 02", "991 Branco 01", "992 Prata 06"], "precos": [86.00] },
      { "nome": "Linho Nix", "cores": ["769 Off White", "770 Cru", "771 Castor"], "precos": [106.64] },
      { "nome": "Linho Safira", "cores": ["772 Safira 02"], "precos": [110.94] },
      { "nome": "Linho Israelense", "cores": ["773 Cinza"], "precos": [110.94] },
      { "nome": "Linho Bora Bora", "cores": ["850 Cru"], "precos": [122.98] },
      { "nome": "Linho Roma", "cores": ["714 Marfim", "767 Bege"], "precos": [136.74] },
      { "nome": "Linho Absoluto", "cores": ["851 Off White", "852 Fendy (K2407-5A C#3)"], "precos": [184.90] },
      { "nome": "Linho Botone", "cores": ["1088 Off White", "1089 Bege"], "precos": [206.40] }
    ]
  },
  /* Linho com blackout: mesmo linho (coleção e cor) + blackout com cor própria.
     Preço do metro = preço do linho x 1,8605 (Flame Irlandês: 86,00 -> 160,00). */
  "Cortina de tecido com blackout": {
    "rotulo": "Tecido",
    "franzido": 3.0,
    "franzimentos": [2.0, 2.5, 3.0, 3.3, 3.5, 4.0],
    "alturaInvertido": 2.65,
    "corBlackout": ["Branco", "Marfim", "Cinza", "Bege"],
    "colecoes": [
      { "nome": "Linho Flame Irlandês", "cores": ["987 Bege 04", "988 Trigo 09", "989 Cinza 03", "990 Marfim 02", "991 Branco 01", "992 Prata 06"], "precos": [160.00] },
      { "nome": "Linho Nix", "cores": ["769 Off White", "770 Cru", "771 Castor"], "precos": [198.40] },
      { "nome": "Linho Safira", "cores": ["772 Safira 02"], "precos": [206.40] },
      { "nome": "Linho Israelense", "cores": ["773 Cinza"], "precos": [206.40] },
      { "nome": "Linho Bora Bora", "cores": ["850 Cru"], "precos": [228.80] },
      { "nome": "Linho Roma", "cores": ["714 Marfim", "767 Bege"], "precos": [254.40] },
      { "nome": "Linho Absoluto", "cores": ["851 Off White", "852 Fendy (K2407-5A C#3)"], "precos": [344.00] },
      { "nome": "Linho Botone", "cores": ["1088 Off White", "1089 Bege"], "precos": [384.00] }
    ]
  },
  /* Acortinado BK: modelo à parte (só no gerador), franzimento 2,50 fixo */
  "Cortina acortinado": {
    "depoisDe": "Cortina de tecido com blackout",
    "calculo": "tecido",
    "alturamax": 2.7,
    "rotulo": "Tecido",
    "franzido": 2.5,
    "alturaInvertido": 2.65,
    "colecoes": [
      { "nome": "Acortinado BK", "cores": ["858 Linho Branco", "878 Indonésia Linho (2210 C#3)"], "precos": [218.44] }
    ]
  }
};
