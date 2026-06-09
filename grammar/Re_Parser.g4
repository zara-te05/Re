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
    ;

print_statement
    : PRINT LPAREN ID RPAREN SEMI // Example: print(x);
    | PRINT LPAREN RPAREN SEMI
    ;

// Basic structure for the declarations (Example: let x: int = 5;)
var_decl
    : LET ID COLON type_specifier (ASSIGN expr)? SEMI 
    ;

var_assign
    : ID ASSIGN expr SEMI
    ;

type_specifier
    : INT_TYPE | DOUBLE_TYPE | STRING_TYPE | BOOL_TYPE
    ;

expr
    : ID
    | LITERAL
    | expr (PLUS | MINUS | MULT | DIV) expr
    ;

LITERAL
    : INT | DOUBLE | STRING | BOOL
    ;

