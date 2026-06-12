import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Re_ParserVisitor } from '../Re_ParserVisitor.js';
import { ProgramContext, Print_statementContext, ExpressionContext} from '../Re_Parser.js';

/// 1. Heredamos del visitante abstracto e implementamos tu interfaz de rutas
export class Interpreter extends AbstractParseTreeVisitor<any> implements Re_ParserVisitor<any> {
    
    // 2. Este método obligatorio le dice a ANTLR qué hacer por defecto
    protected defaultResult() {
        return null;
    }

    // 3. Método para recorrer el bloque principal 
    visitProgram(ctx: ProgramContext) {
        for (let i = 0; i < ctx.childCount; i++) {
            this.visit(ctx.getChild(i));
        }
        return null;
    }

    visitPrint_statement(ctx : Print_statementContext) {
        // If its not exist a expression inside (ej: print(5);)
        if(ctx.expression()){
            const value = this.visit(ctx.expression()!)
            console.log(value);
        }
        return null;
    }

    // === Resolver expresiones ===
    visitExpression(ctx: ExpressionContext) {
        // Si la expresión es un número literal
        if (ctx.literal() && ctx.literal()!.INT()) {
            // Accedemos al símbolo interno del token para obtener su texto directamente
            const tokenTexto = ctx.literal()!.INT()!.symbol.text;
            
            // Si por alguna razón el texto llega a ser indefinido, usamos "0" por seguridad
            return parseInt(tokenTexto ?? "0", 10);
        }
        return null;
    }
}