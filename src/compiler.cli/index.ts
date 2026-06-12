import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { Re_Lexer } from '../compiler.core/Re_Lexer.js';
import { Re_Parser } from '../compiler.core/Re_Parser.js';
import { Interpreter } from '../compiler.core/Enviroment/Interpreter.js';

// Código de prueba en tu propio lenguaje "Re"
const sourceCode = `
program MiPrograma {
    int x = 5;
    print(x);
}
`;

// 1. Alimentar el Lexer con los caracteres
const input = CharStreams.fromString(sourceCode);
const lexer = new Re_Lexer(input);

// 2. Generar el flujo de Tokens
const tokens = new CommonTokenStream(lexer);

// 3. Crear el Parser a partir de los tokens
const parser = new Re_Parser(tokens);

// 4. Construir el árbol sintáctico desde la regla inicial 'program'
const tree = parser.program();

// 5. Instanciar nuestro Intérprete y mandarlo a ejecutar el árbol
const interpreter = new Interpreter();
interpreter.visit(tree);