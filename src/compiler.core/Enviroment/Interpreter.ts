import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Re_ParserVisitor } from '../Re_ParserVisitor'; 
// Importa todos los contextos que necesites:
import { ProgramContext, Var_declContext } from '../Re_Parser';

export class Interpreter extends AbstractParseTreeVisitor<any> implements Re_ParserVisitor<any> {
    
    // Nuestra memoria: guarda el nombre de la variable y su valor
    private memory: Map<string, any> = new Map();

    protected defaultResult(): any {
        return null;
    }
    
    // ...
}