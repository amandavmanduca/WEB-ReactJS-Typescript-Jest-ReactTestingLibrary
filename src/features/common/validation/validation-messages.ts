export const formMessages = {
    required: 'O campo {field} é obrigatório.',
  
    string: 'O campo {field} deve ser texto.',
    stringEmpty: 'O campo {field} não deve estar vazio.',
    stringMin:
      'O comprimento do campo {field} deve ser maior ou igual aos caracteres {expected} longo.',
    stringMax:
      'O comprimento do campo {field} deve ser inferior a ou igual a {expected} caracteres de comprimento.',
    stringLength:
      'O comprimento do campo {field} deve ser {expected} caracteres de comprimento.',
    stringPattern:
      'O campo {field} não corresponde ao padrão requerido.',
    stringContains: "O campo {field} deve conter o texto '{expected}'.",
    stringEnum:
      'O campo {field} não corresponde a nenhum dos valores permitidos.',
    stringNumeric: 'O campo {field} deve ser uma string numérica.',
    stringAlpha: 'O campo {field} deve ser uma string alfabética.',
    stringAlphanum: 'O campo {field} deve ser uma string alfanumérica.',
    stringAlphadash: 'O campo {field} deve ser uma string alfáxato.',
    stringHex: 'O campo {field} deve ser uma string hexadecimal.',
    stringSingleLine:
      'O campo {field} deve ser uma string de linha única.',
    stringBase64: 'O campo {field} deve ser uma string base64.',
  
    number: 'O campo {field} deve ser um número.',
    numberMin: 'O campo {field} deve ser maior ou igual a {expected}.',
    numberMax: 'O campo {field} deve ser menor ou igual a {expected}.',
    numberEqual: 'O campo {field} deve ser igual a {expected}.',
    numberNotEqual: 'O campo {field} não pode ser igual a {expected}.',
    numberInteger: 'O campo {field} deve ser um inteiro.',
    numberPositive: 'O campo {field} deve ser um número positivo.',
    numberNegative: 'O campo {field} deve ser um número negativo.',
  
    array: 'O campo {field} deve ser uma matriz.',
    arrayEmpty: 'O campo {field} não deve ser uma matriz vazia.',
    arrayMin:
      'O campo {field} deve conter pelo menos {expected} itens.',
    arrayMax:
      'O campo {field} deve conter menos ou igual a {expected} itens.',
    arrayLength: 'O campo {field} deve conter itens {expected}.',
    arrayContains: "O campo {field} deve conter o item '{expected}'.",
    arrayUnique:
      "O valor '{actual}' no campo {field} não é exclusivo nos valores '{expected}'.",
    arrayEnum:
      "O valor '{actual}' no campo {field} não corresponde a nenhum dos valores '{expected}'.",
  
    tuple: 'O campo {field} deve ser uma matriz.',
    tupleEmpty: 'O campo {field} não deve ser uma matriz vazia.',
    tupleLength: 'O campo {field} deve conter itens {expected}.',
  
    boolean: 'O campo {field} deve ser um booleano.',
  
    currency: "O 'campo {field} deve ser um formato de moeda válido",
  
    date: 'O campo {field} deve ser uma data.',
    dateMin: 'O campo {field} deve ser maior ou igual a {expected}.',
    dateMax: 'O campo {field} deve ser menor ou igual a {expected}.',
  
    enumValue:
      "O valor de campo {field} e não corresponde a nenhum dos valores permitidos. '{expected}'",
  
    equalValue:
      "O valor de campo {field} deve ser igual a '{expected}'.",
    equalField:
      "O valor do campo {field} deve ser igual ao valor de campo '{expected}'.",
  
    forbidden: 'O campo {field} é proibido.',
  
    function: 'O campo {field} deve ser uma função.',
  
    email: 'O campo {field} deve ser um e-mail válido.',
    emailEmpty: 'O campo {field} não deve estar vazio.',
    emailMin:
      'O comprimento do campo {field} deve ser maior que ou igual a {expected} caracteres longos.',
    emailMax:
      'O comprimento do campo {field} deve ser inferior a ou igual a {expected} caracteres de comprimento.',
  
    luhn: 'O campo {field} deve ser um Checksum válido Luhn.',
  
    mac: 'O campo {field} deve ser um endereço MAC válido.',
  
    object: "O {field} 'deve ser um objeto.",
    objectStrict:
      "O objeto {field} contém chaves proibidas: '{actual}'.",
    objectMinProps:
      'O objeto {field} deve conter pelo menos {expected} propriedades.',
    objectMaxProps:
      'O objeto {field} deve conter {expected} propriedades no máximo.',
  
    url: 'O campo {field} deve ser um URL válido.',
    urlEmpty: 'O campo {field} não deve estar vazio.',
  
    uuid: 'O campo {field} deve ser um UUID válido.',
    uuidVersion:
      'O campo {field} deve ser uma versão válida da UUID fornecida.',
  
    classInstanceOf:
      "O campo {field} deve ser uma instância da classe '{expected}'.",
  
    objectID: 'O campo {field} deve ser um objeto válido',
  }
  