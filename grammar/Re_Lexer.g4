lexer grammar Re_Lexer;

// === KEYWORDS ===
PROGRAM  : 'program';
STATIC   : 'static';
VOID     : 'void';
PRINT    : 'print';
RETURN   : 'return';
FUNCTION : 'function';

// === TYPES ===
LET         : 'let';
VAR         : 'var';
INT_TYPE    : 'int';
DOUBLE_TYPE : 'double';
LONG_TYPE   : 'long';
SHORT_TYPE  : 'short';
BOOL_TYPE   : 'bool';
STRING_TYPE : 'string';
ARRAY_TYPE  : 'array';
LIST_TYPE   : 'List';
QUEUE       : 'queue'; 
STACK       : 'stack';

// === OPERATORS ===
PLUS   : '+';
MINUS  : '-';
MULT   : '*';
DIV    : '/';
ASSIGN : '=';

// === LOGIC OPERATORS ===
AND_KW : 'and' ;
OR_KW  : 'or' ;
NOT_KW : 'not' ;
AND_OP : '&&' ;
OR_OP  : '||' ;
NOT_OP : '!' ;
IN     : 'in' ;

// === COMPARISON OPERATORS ===
EQ  : '==' ;
NEQ : '!=' ;
GTE : '>=' ;
LTE : '<=' ;
GT  : '>' ;
LT  : '<' ;

// === PUNCTUATION ===
COLON    : ':' ;
SEMI     : ';' ;
COMMA    : ',' ;
LPAREN   : '(' ;
RPAREN   : ')' ;
LBRACE   : '{' ;
RBRACE   : '}' ;
LBRACKET : '[' ;
RBRACKET : ']' ;

// === LITERALS ===
INT    : [0-9]+ ;
DOUBLE : [0-9]+ '.' [0-9]+ | '.' [0-9]+ ;
STRING : '"' .*? '"';
BOOL   : 'true' | 'false';

ID : [a-zA-Z_][a-zA-Z0-9_]* ;

// === WHITE SPACE ===
WS : [ \t\r\n]+ -> skip;