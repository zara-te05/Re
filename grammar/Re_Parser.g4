parser grammar Re_Parser;

options {
    tokenVocab = Re_Lexer; // This part is the responsible for linking with the Lexer
}

// Start


program
    : PROGRAM ID LBRACE sentence* RBRACE
    ;

// Rule for agrup diferents types of sentences
sentence
    : var_decl
    | var_assign
    | print_statement
    | if_statement
    | while_statment
    | do_while_statement
    | for_statement
    | foreach_statement
    ;

//Example: print(x);
print_statement
    : PRINT LPAREN ID RPAREN SEMI 
    | PRINT LPAREN RPAREN SEMI
    ;

// Basic structure for the declarations
// Estructura basica para generar una declaracion
var_decl
    : type_specifier ID (ASSIGN math_expresions)? SEMI 
    ;

var_assign
    : ID ASSIGN math_expresions SEMI
    ;

// Estructura basica bajo la cual determinamos las declaraciones "legales"
// En este caso, solo INT, DOUBLE, STRING y BOOL son legales
// In this case only INT, DOUBLE, STRING and BOOL are legals
type_specifier
    : INT_TYPE | DOUBLE_TYPE | STRING_TYPE | BOOL_TYPE
    ;

//Esta parte genere nuestras reglas para realizar operaciones matematicas simples
math_expresions
    : ID
    | literal
    | LPAREN math_expresions RPAREN 
    | math_expresions (EXP | RAIZ) math_expresions
    | math_expresions (MULT | DIV) math_expresions
    | math_expresions (PLUS | MINUS) math_expresions
    ;

literal
    : INT | DOUBLE | STRING | BOOL
    ;

comparative_expresions
    : math_expresions (GTE | GT | LTE | LT | EQ | NEQ ) math_expresions
    | BOOL
    | ID
    ;


logical_expresions
    : logical_expresions (OR_KW | OR_OP) logical_expresions
    | logical_expresions (AND_KW | AND_OP) logical_expresions
    | (NOT_KW | NOT_OP) logical_expresions
    | comparative_expresions
    ;

/*
    The structure for the if in Re Lenguage is 
    if(...)
    {
    
    }
    else{
    
    }
*/

if_statement
    : IF LPAREN logical_expresions RPAREN LBRACE sentence* RBRACE

