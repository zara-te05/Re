// Generated from Re_Parser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { Re_ParserListener } from "./Re_ParserListener";
import { Re_ParserVisitor } from "./Re_ParserVisitor";


export class Re_Parser extends Parser {
	public static readonly PROGRAM = 1;
	public static readonly STATIC = 2;
	public static readonly VOID = 3;
	public static readonly PRINT = 4;
	public static readonly RETURN = 5;
	public static readonly FUNCTION = 6;
	public static readonly VAR = 7;
	public static readonly INT_TYPE = 8;
	public static readonly DOUBLE_TYPE = 9;
	public static readonly LONG_TYPE = 10;
	public static readonly SHORT_TYPE = 11;
	public static readonly BOOL_TYPE = 12;
	public static readonly STRING_TYPE = 13;
	public static readonly ARRAY_TYPE = 14;
	public static readonly LIST_TYPE = 15;
	public static readonly QUEUE = 16;
	public static readonly STACK = 17;
	public static readonly PLUS = 18;
	public static readonly MINUS = 19;
	public static readonly MULT = 20;
	public static readonly DIV = 21;
	public static readonly EXP = 22;
	public static readonly ASSIGN = 23;
	public static readonly AND_KW = 24;
	public static readonly OR_KW = 25;
	public static readonly NOT_KW = 26;
	public static readonly AND_OP = 27;
	public static readonly OR_OP = 28;
	public static readonly NOT_OP = 29;
	public static readonly IN = 30;
	public static readonly EQ = 31;
	public static readonly NEQ = 32;
	public static readonly GTE = 33;
	public static readonly LTE = 34;
	public static readonly GT = 35;
	public static readonly LT = 36;
	public static readonly DOTDOT = 37;
	public static readonly COLON = 38;
	public static readonly SEMI = 39;
	public static readonly COMMA = 40;
	public static readonly LPAREN = 41;
	public static readonly RPAREN = 42;
	public static readonly LBRACE = 43;
	public static readonly RBRACE = 44;
	public static readonly LBRACKET = 45;
	public static readonly RBRACKET = 46;
	public static readonly IF = 47;
	public static readonly ELSE = 48;
	public static readonly FOR = 49;
	public static readonly WHILE = 50;
	public static readonly DO = 51;
	public static readonly INT = 52;
	public static readonly DOUBLE = 53;
	public static readonly STRING = 54;
	public static readonly BOOL = 55;
	public static readonly ID = 56;
	public static readonly WS = 57;
	public static readonly RULE_program = 0;
	public static readonly RULE_function_decl = 1;
	public static readonly RULE_param_list = 2;
	public static readonly RULE_sentence = 3;
	public static readonly RULE_print_statement = 4;
	public static readonly RULE_var_decl = 5;
	public static readonly RULE_var_assign = 6;
	public static readonly RULE_return_statement = 7;
	public static readonly RULE_type_specifier = 8;
	public static readonly RULE_primitive_type = 9;
	public static readonly RULE_list_type = 10;
	public static readonly RULE_array_type = 11;
	public static readonly RULE_collection_type = 12;
	public static readonly RULE_expression = 13;
	public static readonly RULE_function_call = 14;
	public static readonly RULE_argument_list = 15;
	public static readonly RULE_literal = 16;
	public static readonly RULE_if_statement = 17;
	public static readonly RULE_while_statement = 18;
	public static readonly RULE_do_while_statement = 19;
	public static readonly RULE_for_statement = 20;
	public static readonly RULE_for_expression = 21;
	public static readonly RULE_list_elements = 22;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "function_decl", "param_list", "sentence", "print_statement", 
		"var_decl", "var_assign", "return_statement", "type_specifier", "primitive_type", 
		"list_type", "array_type", "collection_type", "expression", "function_call", 
		"argument_list", "literal", "if_statement", "while_statement", "do_while_statement", 
		"for_statement", "for_expression", "list_elements",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'program'", "'static'", "'void'", "'print'", "'return'", "'function'", 
		"'var'", "'int'", "'double'", "'long'", "'short'", "'bool'", "'string'", 
		"'array'", "'list'", "'queue'", "'stack'", "'+'", "'-'", "'*'", "'/'", 
		"'^'", "'='", "'and'", "'or'", "'not'", "'&&'", "'||'", "'!'", "'in'", 
		"'=='", "'!='", "'>='", "'<='", "'>'", "'<'", "'..'", "':'", "';'", "','", 
		"'('", "')'", "'{'", "'}'", "'['", "']'", "'if'", "'else'", "'for'", "'while'", 
		"'do'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "PROGRAM", "STATIC", "VOID", "PRINT", "RETURN", "FUNCTION", 
		"VAR", "INT_TYPE", "DOUBLE_TYPE", "LONG_TYPE", "SHORT_TYPE", "BOOL_TYPE", 
		"STRING_TYPE", "ARRAY_TYPE", "LIST_TYPE", "QUEUE", "STACK", "PLUS", "MINUS", 
		"MULT", "DIV", "EXP", "ASSIGN", "AND_KW", "OR_KW", "NOT_KW", "AND_OP", 
		"OR_OP", "NOT_OP", "IN", "EQ", "NEQ", "GTE", "LTE", "GT", "LT", "DOTDOT", 
		"COLON", "SEMI", "COMMA", "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACKET", 
		"RBRACKET", "IF", "ELSE", "FOR", "WHILE", "DO", "INT", "DOUBLE", "STRING", 
		"BOOL", "ID", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Re_Parser._LITERAL_NAMES, Re_Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Re_Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Re_Parser.g4"; }

	// @Override
	public get ruleNames(): string[] { return Re_Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return Re_Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Re_Parser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Re_Parser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 46;
			this.match(Re_Parser.PROGRAM);
			this.state = 47;
			this.match(Re_Parser.ID);
			this.state = 48;
			this.match(Re_Parser.LBRACE);
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Re_Parser.VOID) | (1 << Re_Parser.PRINT) | (1 << Re_Parser.RETURN) | (1 << Re_Parser.VAR) | (1 << Re_Parser.INT_TYPE) | (1 << Re_Parser.DOUBLE_TYPE) | (1 << Re_Parser.LONG_TYPE) | (1 << Re_Parser.SHORT_TYPE) | (1 << Re_Parser.BOOL_TYPE) | (1 << Re_Parser.STRING_TYPE) | (1 << Re_Parser.ARRAY_TYPE) | (1 << Re_Parser.LIST_TYPE) | (1 << Re_Parser.QUEUE) | (1 << Re_Parser.STACK))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Re_Parser.IF - 47)) | (1 << (Re_Parser.FOR - 47)) | (1 << (Re_Parser.WHILE - 47)) | (1 << (Re_Parser.DO - 47)) | (1 << (Re_Parser.ID - 47)))) !== 0)) {
				{
				this.state = 51;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 49;
					this.sentence();
					}
					break;

				case 2:
					{
					this.state = 50;
					this.function_decl();
					}
					break;
				}
				}
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 56;
			this.match(Re_Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_decl(): Function_declContext {
		let _localctx: Function_declContext = new Function_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Re_Parser.RULE_function_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 60;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Re_Parser.INT_TYPE:
			case Re_Parser.DOUBLE_TYPE:
			case Re_Parser.LONG_TYPE:
			case Re_Parser.SHORT_TYPE:
			case Re_Parser.BOOL_TYPE:
			case Re_Parser.STRING_TYPE:
			case Re_Parser.ARRAY_TYPE:
			case Re_Parser.LIST_TYPE:
			case Re_Parser.QUEUE:
			case Re_Parser.STACK:
				{
				this.state = 58;
				this.type_specifier();
				}
				break;
			case Re_Parser.VOID:
				{
				this.state = 59;
				this.match(Re_Parser.VOID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 62;
			this.match(Re_Parser.ID);
			this.state = 63;
			this.match(Re_Parser.LPAREN);
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Re_Parser.INT_TYPE) | (1 << Re_Parser.DOUBLE_TYPE) | (1 << Re_Parser.LONG_TYPE) | (1 << Re_Parser.SHORT_TYPE) | (1 << Re_Parser.BOOL_TYPE) | (1 << Re_Parser.STRING_TYPE) | (1 << Re_Parser.ARRAY_TYPE) | (1 << Re_Parser.LIST_TYPE) | (1 << Re_Parser.QUEUE) | (1 << Re_Parser.STACK))) !== 0)) {
				{
				this.state = 64;
				this.param_list();
				}
			}

			this.state = 67;
			this.match(Re_Parser.RPAREN);
			this.state = 68;
			this.match(Re_Parser.LBRACE);
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Re_Parser.PRINT) | (1 << Re_Parser.RETURN) | (1 << Re_Parser.VAR) | (1 << Re_Parser.INT_TYPE) | (1 << Re_Parser.DOUBLE_TYPE) | (1 << Re_Parser.LONG_TYPE) | (1 << Re_Parser.SHORT_TYPE) | (1 << Re_Parser.BOOL_TYPE) | (1 << Re_Parser.STRING_TYPE) | (1 << Re_Parser.ARRAY_TYPE) | (1 << Re_Parser.LIST_TYPE) | (1 << Re_Parser.QUEUE) | (1 << Re_Parser.STACK))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Re_Parser.IF - 47)) | (1 << (Re_Parser.FOR - 47)) | (1 << (Re_Parser.WHILE - 47)) | (1 << (Re_Parser.DO - 47)) | (1 << (Re_Parser.ID - 47)))) !== 0)) {
				{
				{
				this.state = 69;
				this.sentence();
				}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 75;
			this.match(Re_Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param_list(): Param_listContext {
		let _localctx: Param_listContext = new Param_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Re_Parser.RULE_param_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.type_specifier();
			this.state = 78;
			this.match(Re_Parser.ID);
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Re_Parser.COMMA) {
				{
				{
				this.state = 79;
				this.match(Re_Parser.COMMA);
				this.state = 80;
				this.type_specifier();
				this.state = 81;
				this.match(Re_Parser.ID);
				}
				}
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sentence(): SentenceContext {
		let _localctx: SentenceContext = new SentenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Re_Parser.RULE_sentence);
		try {
			this.state = 99;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 88;
				this.var_decl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 89;
				this.var_assign();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 90;
				this.print_statement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 91;
				this.if_statement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 92;
				this.while_statement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 93;
				this.do_while_statement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 94;
				this.for_statement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 95;
				this.return_statement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 96;
				this.function_call();
				this.state = 97;
				this.match(Re_Parser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public print_statement(): Print_statementContext {
		let _localctx: Print_statementContext = new Print_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Re_Parser.RULE_print_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 101;
			this.match(Re_Parser.PRINT);
			this.state = 102;
			this.match(Re_Parser.LPAREN);
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Re_Parser.MINUS) | (1 << Re_Parser.NOT_KW) | (1 << Re_Parser.NOT_OP))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (Re_Parser.LPAREN - 41)) | (1 << (Re_Parser.INT - 41)) | (1 << (Re_Parser.DOUBLE - 41)) | (1 << (Re_Parser.STRING - 41)) | (1 << (Re_Parser.BOOL - 41)) | (1 << (Re_Parser.ID - 41)))) !== 0)) {
				{
				this.state = 103;
				this.expression(0);
				}
			}

			this.state = 106;
			this.match(Re_Parser.RPAREN);
			this.state = 107;
			this.match(Re_Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var_decl(): Var_declContext {
		let _localctx: Var_declContext = new Var_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Re_Parser.RULE_var_decl);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Re_Parser.INT_TYPE:
			case Re_Parser.DOUBLE_TYPE:
			case Re_Parser.LONG_TYPE:
			case Re_Parser.SHORT_TYPE:
			case Re_Parser.BOOL_TYPE:
			case Re_Parser.STRING_TYPE:
			case Re_Parser.ARRAY_TYPE:
			case Re_Parser.LIST_TYPE:
			case Re_Parser.QUEUE:
			case Re_Parser.STACK:
				{
				this.state = 109;
				this.type_specifier();
				}
				break;
			case Re_Parser.VAR:
				{
				this.state = 110;
				this.match(Re_Parser.VAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 113;
			this.match(Re_Parser.ID);
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Re_Parser.ASSIGN) {
				{
				this.state = 114;
				this.match(Re_Parser.ASSIGN);
				this.state = 115;
				this.expression(0);
				}
			}

			this.state = 118;
			this.match(Re_Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public var_assign(): Var_assignContext {
		let _localctx: Var_assignContext = new Var_assignContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Re_Parser.RULE_var_assign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.match(Re_Parser.ID);
			this.state = 121;
			this.match(Re_Parser.ASSIGN);
			this.state = 122;
			this.expression(0);
			this.state = 123;
			this.match(Re_Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public return_statement(): Return_statementContext {
		let _localctx: Return_statementContext = new Return_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Re_Parser.RULE_return_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(Re_Parser.RETURN);
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Re_Parser.MINUS) | (1 << Re_Parser.NOT_KW) | (1 << Re_Parser.NOT_OP))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (Re_Parser.LPAREN - 41)) | (1 << (Re_Parser.INT - 41)) | (1 << (Re_Parser.DOUBLE - 41)) | (1 << (Re_Parser.STRING - 41)) | (1 << (Re_Parser.BOOL - 41)) | (1 << (Re_Parser.ID - 41)))) !== 0)) {
				{
				this.state = 126;
				this.expression(0);
				}
			}

			this.state = 129;
			this.match(Re_Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_specifier(): Type_specifierContext {
		let _localctx: Type_specifierContext = new Type_specifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Re_Parser.RULE_type_specifier);
		try {
			this.state = 135;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Re_Parser.INT_TYPE:
			case Re_Parser.DOUBLE_TYPE:
			case Re_Parser.LONG_TYPE:
			case Re_Parser.SHORT_TYPE:
			case Re_Parser.BOOL_TYPE:
			case Re_Parser.STRING_TYPE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 131;
				this.primitive_type();
				}
				break;
			case Re_Parser.LIST_TYPE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 132;
				this.list_type();
				}
				break;
			case Re_Parser.ARRAY_TYPE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 133;
				this.array_type();
				}
				break;
			case Re_Parser.QUEUE:
			case Re_Parser.STACK:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 134;
				this.collection_type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primitive_type(): Primitive_typeContext {
		let _localctx: Primitive_typeContext = new Primitive_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Re_Parser.RULE_primitive_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 137;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Re_Parser.INT_TYPE) | (1 << Re_Parser.DOUBLE_TYPE) | (1 << Re_Parser.LONG_TYPE) | (1 << Re_Parser.SHORT_TYPE) | (1 << Re_Parser.BOOL_TYPE) | (1 << Re_Parser.STRING_TYPE))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list_type(): List_typeContext {
		let _localctx: List_typeContext = new List_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Re_Parser.RULE_list_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 139;
			this.match(Re_Parser.LIST_TYPE);
			this.state = 140;
			this.match(Re_Parser.LT);
			this.state = 141;
			this.primitive_type();
			this.state = 142;
			this.match(Re_Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array_type(): Array_typeContext {
		let _localctx: Array_typeContext = new Array_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Re_Parser.RULE_array_type);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(Re_Parser.ARRAY_TYPE);
			this.state = 145;
			this.match(Re_Parser.LT);
			this.state = 146;
			this.primitive_type();
			this.state = 147;
			this.match(Re_Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public collection_type(): Collection_typeContext {
		let _localctx: Collection_typeContext = new Collection_typeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Re_Parser.RULE_collection_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			_la = this._input.LA(1);
			if (!(_la === Re_Parser.QUEUE || _la === Re_Parser.STACK)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 150;
			this.match(Re_Parser.LT);
			this.state = 151;
			this.primitive_type();
			this.state = 152;
			this.match(Re_Parser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 26;
		this.enterRecursionRule(_localctx, 26, Re_Parser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 171;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 155;
				_la = this._input.LA(1);
				if (!(_la === Re_Parser.NOT_KW || _la === Re_Parser.NOT_OP)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 156;
				this.expression(7);
				}
				break;

			case 2:
				{
				this.state = 157;
				this.match(Re_Parser.MINUS);
				this.state = 158;
				this.expression(6);
				}
				break;

			case 3:
				{
				this.state = 159;
				this.match(Re_Parser.LPAREN);
				this.state = 160;
				this.expression(0);
				this.state = 161;
				this.match(Re_Parser.RPAREN);
				}
				break;

			case 4:
				{
				this.state = 163;
				this.literal();
				}
				break;

			case 5:
				{
				this.state = 164;
				this.match(Re_Parser.ID);
				}
				break;

			case 6:
				{
				this.state = 165;
				this.function_call();
				}
				break;

			case 7:
				{
				this.state = 166;
				this.match(Re_Parser.ID);
				this.state = 167;
				this.match(Re_Parser.LBRACKET);
				this.state = 168;
				this.expression(0);
				this.state = 169;
				this.match(Re_Parser.RBRACKET);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 193;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 191;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Re_Parser.RULE_expression);
						this.state = 173;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 174;
						_la = this._input.LA(1);
						if (!(_la === Re_Parser.OR_KW || _la === Re_Parser.OR_OP)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 175;
						this.expression(14);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Re_Parser.RULE_expression);
						this.state = 176;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 177;
						_la = this._input.LA(1);
						if (!(_la === Re_Parser.AND_KW || _la === Re_Parser.AND_OP)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 178;
						this.expression(13);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Re_Parser.RULE_expression);
						this.state = 179;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 180;
						_la = this._input.LA(1);
						if (!(((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (Re_Parser.EQ - 31)) | (1 << (Re_Parser.NEQ - 31)) | (1 << (Re_Parser.GTE - 31)) | (1 << (Re_Parser.LTE - 31)) | (1 << (Re_Parser.GT - 31)) | (1 << (Re_Parser.LT - 31)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 181;
						this.expression(12);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Re_Parser.RULE_expression);
						this.state = 182;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 183;
						_la = this._input.LA(1);
						if (!(_la === Re_Parser.PLUS || _la === Re_Parser.MINUS)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 184;
						this.expression(11);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Re_Parser.RULE_expression);
						this.state = 185;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 186;
						_la = this._input.LA(1);
						if (!(_la === Re_Parser.MULT || _la === Re_Parser.DIV)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 187;
						this.expression(10);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, Re_Parser.RULE_expression);
						this.state = 188;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 189;
						this.match(Re_Parser.EXP);
						this.state = 190;
						this.expression(8);
						}
						break;
					}
					}
				}
				this.state = 195;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_call(): Function_callContext {
		let _localctx: Function_callContext = new Function_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Re_Parser.RULE_function_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.match(Re_Parser.ID);
			this.state = 197;
			this.match(Re_Parser.LPAREN);
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Re_Parser.MINUS) | (1 << Re_Parser.NOT_KW) | (1 << Re_Parser.NOT_OP))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (Re_Parser.LPAREN - 41)) | (1 << (Re_Parser.INT - 41)) | (1 << (Re_Parser.DOUBLE - 41)) | (1 << (Re_Parser.STRING - 41)) | (1 << (Re_Parser.BOOL - 41)) | (1 << (Re_Parser.ID - 41)))) !== 0)) {
				{
				this.state = 198;
				this.argument_list();
				}
			}

			this.state = 201;
			this.match(Re_Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argument_list(): Argument_listContext {
		let _localctx: Argument_listContext = new Argument_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Re_Parser.RULE_argument_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.expression(0);
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Re_Parser.COMMA) {
				{
				{
				this.state = 204;
				this.match(Re_Parser.COMMA);
				this.state = 205;
				this.expression(0);
				}
				}
				this.state = 210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Re_Parser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			_la = this._input.LA(1);
			if (!(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (Re_Parser.INT - 52)) | (1 << (Re_Parser.DOUBLE - 52)) | (1 << (Re_Parser.STRING - 52)) | (1 << (Re_Parser.BOOL - 52)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public if_statement(): If_statementContext {
		let _localctx: If_statementContext = new If_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, Re_Parser.RULE_if_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this.match(Re_Parser.IF);
			this.state = 214;
			this.match(Re_Parser.LPAREN);
			this.state = 215;
			this.expression(0);
			this.state = 216;
			this.match(Re_Parser.RPAREN);
			this.state = 217;
			this.match(Re_Parser.LBRACE);
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Re_Parser.PRINT) | (1 << Re_Parser.RETURN) | (1 << Re_Parser.VAR) | (1 << Re_Parser.INT_TYPE) | (1 << Re_Parser.DOUBLE_TYPE) | (1 << Re_Parser.LONG_TYPE) | (1 << Re_Parser.SHORT_TYPE) | (1 << Re_Parser.BOOL_TYPE) | (1 << Re_Parser.STRING_TYPE) | (1 << Re_Parser.ARRAY_TYPE) | (1 << Re_Parser.LIST_TYPE) | (1 << Re_Parser.QUEUE) | (1 << Re_Parser.STACK))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Re_Parser.IF - 47)) | (1 << (Re_Parser.FOR - 47)) | (1 << (Re_Parser.WHILE - 47)) | (1 << (Re_Parser.DO - 47)) | (1 << (Re_Parser.ID - 47)))) !== 0)) {
				{
				{
				this.state = 218;
				this.sentence();
				}
				}
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 224;
			this.match(Re_Parser.RBRACE);
			this.state = 241;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 225;
					this.match(Re_Parser.ELSE);
					this.state = 226;
					this.match(Re_Parser.IF);
					this.state = 227;
					this.match(Re_Parser.LPAREN);
					this.state = 228;
					this.expression(0);
					this.state = 229;
					this.match(Re_Parser.RPAREN);
					this.state = 230;
					this.match(Re_Parser.LBRACE);
					this.state = 234;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Re_Parser.PRINT) | (1 << Re_Parser.RETURN) | (1 << Re_Parser.VAR) | (1 << Re_Parser.INT_TYPE) | (1 << Re_Parser.DOUBLE_TYPE) | (1 << Re_Parser.LONG_TYPE) | (1 << Re_Parser.SHORT_TYPE) | (1 << Re_Parser.BOOL_TYPE) | (1 << Re_Parser.STRING_TYPE) | (1 << Re_Parser.ARRAY_TYPE) | (1 << Re_Parser.LIST_TYPE) | (1 << Re_Parser.QUEUE) | (1 << Re_Parser.STACK))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Re_Parser.IF - 47)) | (1 << (Re_Parser.FOR - 47)) | (1 << (Re_Parser.WHILE - 47)) | (1 << (Re_Parser.DO - 47)) | (1 << (Re_Parser.ID - 47)))) !== 0)) {
						{
						{
						this.state = 231;
						this.sentence();
						}
						}
						this.state = 236;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 237;
					this.match(Re_Parser.RBRACE);
					}
					}
				}
				this.state = 243;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
			}
			this.state = 253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Re_Parser.ELSE) {
				{
				this.state = 244;
				this.match(Re_Parser.ELSE);
				this.state = 245;
				this.match(Re_Parser.LBRACE);
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Re_Parser.PRINT) | (1 << Re_Parser.RETURN) | (1 << Re_Parser.VAR) | (1 << Re_Parser.INT_TYPE) | (1 << Re_Parser.DOUBLE_TYPE) | (1 << Re_Parser.LONG_TYPE) | (1 << Re_Parser.SHORT_TYPE) | (1 << Re_Parser.BOOL_TYPE) | (1 << Re_Parser.STRING_TYPE) | (1 << Re_Parser.ARRAY_TYPE) | (1 << Re_Parser.LIST_TYPE) | (1 << Re_Parser.QUEUE) | (1 << Re_Parser.STACK))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Re_Parser.IF - 47)) | (1 << (Re_Parser.FOR - 47)) | (1 << (Re_Parser.WHILE - 47)) | (1 << (Re_Parser.DO - 47)) | (1 << (Re_Parser.ID - 47)))) !== 0)) {
					{
					{
					this.state = 246;
					this.sentence();
					}
					}
					this.state = 251;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 252;
				this.match(Re_Parser.RBRACE);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public while_statement(): While_statementContext {
		let _localctx: While_statementContext = new While_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Re_Parser.RULE_while_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 255;
			this.match(Re_Parser.WHILE);
			this.state = 256;
			this.match(Re_Parser.LPAREN);
			this.state = 257;
			this.expression(0);
			this.state = 258;
			this.match(Re_Parser.RPAREN);
			this.state = 268;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Re_Parser.LBRACE:
				{
				this.state = 259;
				this.match(Re_Parser.LBRACE);
				this.state = 263;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Re_Parser.PRINT) | (1 << Re_Parser.RETURN) | (1 << Re_Parser.VAR) | (1 << Re_Parser.INT_TYPE) | (1 << Re_Parser.DOUBLE_TYPE) | (1 << Re_Parser.LONG_TYPE) | (1 << Re_Parser.SHORT_TYPE) | (1 << Re_Parser.BOOL_TYPE) | (1 << Re_Parser.STRING_TYPE) | (1 << Re_Parser.ARRAY_TYPE) | (1 << Re_Parser.LIST_TYPE) | (1 << Re_Parser.QUEUE) | (1 << Re_Parser.STACK))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Re_Parser.IF - 47)) | (1 << (Re_Parser.FOR - 47)) | (1 << (Re_Parser.WHILE - 47)) | (1 << (Re_Parser.DO - 47)) | (1 << (Re_Parser.ID - 47)))) !== 0)) {
					{
					{
					this.state = 260;
					this.sentence();
					}
					}
					this.state = 265;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 266;
				this.match(Re_Parser.RBRACE);
				}
				break;
			case Re_Parser.PRINT:
			case Re_Parser.RETURN:
			case Re_Parser.VAR:
			case Re_Parser.INT_TYPE:
			case Re_Parser.DOUBLE_TYPE:
			case Re_Parser.LONG_TYPE:
			case Re_Parser.SHORT_TYPE:
			case Re_Parser.BOOL_TYPE:
			case Re_Parser.STRING_TYPE:
			case Re_Parser.ARRAY_TYPE:
			case Re_Parser.LIST_TYPE:
			case Re_Parser.QUEUE:
			case Re_Parser.STACK:
			case Re_Parser.IF:
			case Re_Parser.FOR:
			case Re_Parser.WHILE:
			case Re_Parser.DO:
			case Re_Parser.ID:
				{
				this.state = 267;
				this.sentence();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public do_while_statement(): Do_while_statementContext {
		let _localctx: Do_while_statementContext = new Do_while_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, Re_Parser.RULE_do_while_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 270;
			this.match(Re_Parser.DO);
			this.state = 271;
			this.match(Re_Parser.LBRACE);
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Re_Parser.PRINT) | (1 << Re_Parser.RETURN) | (1 << Re_Parser.VAR) | (1 << Re_Parser.INT_TYPE) | (1 << Re_Parser.DOUBLE_TYPE) | (1 << Re_Parser.LONG_TYPE) | (1 << Re_Parser.SHORT_TYPE) | (1 << Re_Parser.BOOL_TYPE) | (1 << Re_Parser.STRING_TYPE) | (1 << Re_Parser.ARRAY_TYPE) | (1 << Re_Parser.LIST_TYPE) | (1 << Re_Parser.QUEUE) | (1 << Re_Parser.STACK))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Re_Parser.IF - 47)) | (1 << (Re_Parser.FOR - 47)) | (1 << (Re_Parser.WHILE - 47)) | (1 << (Re_Parser.DO - 47)) | (1 << (Re_Parser.ID - 47)))) !== 0)) {
				{
				{
				this.state = 272;
				this.sentence();
				}
				}
				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 278;
			this.match(Re_Parser.RBRACE);
			this.state = 279;
			this.match(Re_Parser.WHILE);
			this.state = 280;
			this.match(Re_Parser.LPAREN);
			this.state = 281;
			this.expression(0);
			this.state = 282;
			this.match(Re_Parser.RPAREN);
			this.state = 283;
			this.match(Re_Parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for_statement(): For_statementContext {
		let _localctx: For_statementContext = new For_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Re_Parser.RULE_for_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 285;
			this.match(Re_Parser.FOR);
			this.state = 286;
			this.match(Re_Parser.ID);
			this.state = 287;
			this.match(Re_Parser.IN);
			this.state = 288;
			this.for_expression();
			this.state = 298;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Re_Parser.LBRACE:
				{
				this.state = 289;
				this.match(Re_Parser.LBRACE);
				this.state = 293;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Re_Parser.PRINT) | (1 << Re_Parser.RETURN) | (1 << Re_Parser.VAR) | (1 << Re_Parser.INT_TYPE) | (1 << Re_Parser.DOUBLE_TYPE) | (1 << Re_Parser.LONG_TYPE) | (1 << Re_Parser.SHORT_TYPE) | (1 << Re_Parser.BOOL_TYPE) | (1 << Re_Parser.STRING_TYPE) | (1 << Re_Parser.ARRAY_TYPE) | (1 << Re_Parser.LIST_TYPE) | (1 << Re_Parser.QUEUE) | (1 << Re_Parser.STACK))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Re_Parser.IF - 47)) | (1 << (Re_Parser.FOR - 47)) | (1 << (Re_Parser.WHILE - 47)) | (1 << (Re_Parser.DO - 47)) | (1 << (Re_Parser.ID - 47)))) !== 0)) {
					{
					{
					this.state = 290;
					this.sentence();
					}
					}
					this.state = 295;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 296;
				this.match(Re_Parser.RBRACE);
				}
				break;
			case Re_Parser.PRINT:
			case Re_Parser.RETURN:
			case Re_Parser.VAR:
			case Re_Parser.INT_TYPE:
			case Re_Parser.DOUBLE_TYPE:
			case Re_Parser.LONG_TYPE:
			case Re_Parser.SHORT_TYPE:
			case Re_Parser.BOOL_TYPE:
			case Re_Parser.STRING_TYPE:
			case Re_Parser.ARRAY_TYPE:
			case Re_Parser.LIST_TYPE:
			case Re_Parser.QUEUE:
			case Re_Parser.STACK:
			case Re_Parser.IF:
			case Re_Parser.FOR:
			case Re_Parser.WHILE:
			case Re_Parser.DO:
			case Re_Parser.ID:
				{
				this.state = 297;
				this.sentence();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public for_expression(): For_expressionContext {
		let _localctx: For_expressionContext = new For_expressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, Re_Parser.RULE_for_expression);
		let _la: number;
		try {
			this.state = 310;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 300;
				this.expression(0);
				this.state = 301;
				this.match(Re_Parser.DOTDOT);
				this.state = 302;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 304;
				this.match(Re_Parser.LBRACKET);
				this.state = 306;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Re_Parser.MINUS) | (1 << Re_Parser.NOT_KW) | (1 << Re_Parser.NOT_OP))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (Re_Parser.LPAREN - 41)) | (1 << (Re_Parser.INT - 41)) | (1 << (Re_Parser.DOUBLE - 41)) | (1 << (Re_Parser.STRING - 41)) | (1 << (Re_Parser.BOOL - 41)) | (1 << (Re_Parser.ID - 41)))) !== 0)) {
					{
					this.state = 305;
					this.list_elements();
					}
				}

				this.state = 308;
				this.match(Re_Parser.RBRACKET);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 309;
				this.match(Re_Parser.ID);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list_elements(): List_elementsContext {
		let _localctx: List_elementsContext = new List_elementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, Re_Parser.RULE_list_elements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this.expression(0);
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Re_Parser.COMMA) {
				{
				{
				this.state = 313;
				this.match(Re_Parser.COMMA);
				this.state = 314;
				this.expression(0);
				}
				}
				this.state = 319;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 13:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);

		case 1:
			return this.precpred(this._ctx, 12);

		case 2:
			return this.precpred(this._ctx, 11);

		case 3:
			return this.precpred(this._ctx, 10);

		case 4:
			return this.precpred(this._ctx, 9);

		case 5:
			return this.precpred(this._ctx, 8);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03;\u0143\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x03\x02\x03\x02\x03\x02\x03\x02\x03\x02\x07\x026\n\x02\f\x02" +
		"\x0E\x029\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03?\n\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03D\n\x03\x03\x03\x03\x03\x03\x03\x07\x03I\n\x03" +
		"\f\x03\x0E\x03L\v\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x07\x04V\n\x04\f\x04\x0E\x04Y\v\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05" +
		"\x05f\n\x05\x03\x06\x03\x06\x03\x06\x05\x06k\n\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x05\x07r\n\x07\x03\x07\x03\x07\x03\x07\x05\x07w\n" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x05\t\x82" +
		"\n\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x05\n\x8A\n\n\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x05\x0F\xAE\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x07\x0F\xC2\n\x0F\f\x0F\x0E\x0F\xC5" +
		"\v\x0F\x03\x10\x03\x10\x03\x10\x05\x10\xCA\n\x10\x03\x10\x03\x10\x03\x11" +
		"\x03\x11\x03\x11\x07\x11\xD1\n\x11\f\x11\x0E\x11\xD4\v\x11\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\xDE\n\x13" +
		"\f\x13\x0E\x13\xE1\v\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x07\x13\xEB\n\x13\f\x13\x0E\x13\xEE\v\x13\x03\x13\x03" +
		"\x13\x07\x13\xF2\n\x13\f\x13\x0E\x13\xF5\v\x13\x03\x13\x03\x13\x03\x13" +
		"\x07\x13\xFA\n\x13\f\x13\x0E\x13\xFD\v\x13\x03\x13\x05\x13\u0100\n\x13" +
		"\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x07\x14\u0108\n\x14\f" +
		"\x14\x0E\x14\u010B\v\x14\x03\x14\x03\x14\x05\x14\u010F\n\x14\x03\x15\x03" +
		"\x15\x03\x15\x07\x15\u0114\n\x15\f\x15\x0E\x15\u0117\v\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x07\x16\u0126\n\x16\f\x16\x0E\x16\u0129\v\x16\x03" +
		"\x16\x03\x16\x05\x16\u012D\n\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
		"\x03\x17\x05\x17\u0135\n\x17\x03\x17\x03\x17\x05\x17\u0139\n\x17\x03\x18" +
		"\x03\x18\x03\x18\x07\x18\u013E\n\x18\f\x18\x0E\x18\u0141\v\x18\x03\x18" +
		"\x02\x02\x03\x1C\x19\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02" +
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x02\x02\v\x03\x02\n\x0F\x03\x02\x12\x13" +
		"\x04\x02\x1C\x1C\x1F\x1F\x04\x02\x1B\x1B\x1E\x1E\x04\x02\x1A\x1A\x1D\x1D" +
		"\x03\x02!&\x03\x02\x14\x15\x03\x02\x16\x17\x03\x0269\x02\u015C\x020\x03" +
		"\x02\x02\x02\x04>\x03\x02\x02\x02\x06O\x03\x02\x02\x02\be\x03\x02\x02" +
		"\x02\ng\x03\x02\x02\x02\fq\x03\x02\x02\x02\x0Ez\x03\x02\x02\x02\x10\x7F" +
		"\x03\x02\x02\x02\x12\x89\x03\x02\x02\x02\x14\x8B\x03\x02\x02\x02\x16\x8D" +
		"\x03\x02\x02\x02\x18\x92\x03\x02\x02\x02\x1A\x97\x03\x02\x02\x02\x1C\xAD" +
		"\x03\x02\x02\x02\x1E\xC6\x03\x02\x02\x02 \xCD\x03\x02\x02\x02\"\xD5\x03" +
		"\x02\x02\x02$\xD7\x03\x02\x02\x02&\u0101\x03\x02\x02\x02(\u0110\x03\x02" +
		"\x02\x02*\u011F\x03\x02\x02\x02,\u0138\x03\x02\x02\x02.\u013A\x03\x02" +
		"\x02\x0201\x07\x03\x02\x0212\x07:\x02\x0227\x07-\x02\x0236\x05\b\x05\x02" +
		"46\x05\x04\x03\x0253\x03\x02\x02\x0254\x03\x02\x02\x0269\x03\x02\x02\x02" +
		"75\x03\x02\x02\x0278\x03\x02\x02\x028:\x03\x02\x02\x0297\x03\x02\x02\x02" +
		":;\x07.\x02\x02;\x03\x03\x02\x02\x02<?\x05\x12\n\x02=?\x07\x05\x02\x02" +
		"><\x03\x02\x02\x02>=\x03\x02\x02\x02?@\x03\x02\x02\x02@A\x07:\x02\x02" +
		"AC\x07+\x02\x02BD\x05\x06\x04\x02CB\x03\x02\x02\x02CD\x03\x02\x02\x02" +
		"DE\x03\x02\x02\x02EF\x07,\x02\x02FJ\x07-\x02\x02GI\x05\b\x05\x02HG\x03" +
		"\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02KM\x03" +
		"\x02\x02\x02LJ\x03\x02\x02\x02MN\x07.\x02\x02N\x05\x03\x02\x02\x02OP\x05" +
		"\x12\n\x02PW\x07:\x02\x02QR\x07*\x02\x02RS\x05\x12\n\x02ST\x07:\x02\x02" +
		"TV\x03\x02\x02\x02UQ\x03\x02\x02\x02VY\x03\x02\x02\x02WU\x03\x02\x02\x02" +
		"WX\x03\x02\x02\x02X\x07\x03\x02\x02\x02YW\x03\x02\x02\x02Zf\x05\f\x07" +
		"\x02[f\x05\x0E\b\x02\\f\x05\n\x06\x02]f\x05$\x13\x02^f\x05&\x14\x02_f" +
		"\x05(\x15\x02`f\x05*\x16\x02af\x05\x10\t\x02bc\x05\x1E\x10\x02cd\x07)" +
		"\x02\x02df\x03\x02\x02\x02eZ\x03\x02\x02\x02e[\x03\x02\x02\x02e\\\x03" +
		"\x02\x02\x02e]\x03\x02\x02\x02e^\x03\x02\x02\x02e_\x03\x02\x02\x02e`\x03" +
		"\x02\x02\x02ea\x03\x02\x02\x02eb\x03\x02\x02\x02f\t\x03\x02\x02\x02gh" +
		"\x07\x06\x02\x02hj\x07+\x02\x02ik\x05\x1C\x0F\x02ji\x03\x02\x02\x02jk" +
		"\x03\x02\x02\x02kl\x03\x02\x02\x02lm\x07,\x02\x02mn\x07)\x02\x02n\v\x03" +
		"\x02\x02\x02or\x05\x12\n\x02pr\x07\t\x02\x02qo\x03\x02\x02\x02qp\x03\x02" +
		"\x02\x02rs\x03\x02\x02\x02sv\x07:\x02\x02tu\x07\x19\x02\x02uw\x05\x1C" +
		"\x0F\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02wx\x03\x02\x02\x02xy\x07)" +
		"\x02\x02y\r\x03\x02\x02\x02z{\x07:\x02\x02{|\x07\x19\x02\x02|}\x05\x1C" +
		"\x0F\x02}~\x07)\x02\x02~\x0F\x03\x02\x02\x02\x7F\x81\x07\x07\x02\x02\x80" +
		"\x82\x05\x1C\x0F\x02\x81\x80\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82" +
		"\x83\x03\x02\x02\x02\x83\x84\x07)\x02\x02\x84\x11\x03\x02\x02\x02\x85" +
		"\x8A\x05\x14\v\x02\x86\x8A\x05\x16\f\x02\x87\x8A\x05\x18\r\x02\x88\x8A" +
		"\x05\x1A\x0E\x02\x89\x85\x03\x02\x02\x02\x89\x86\x03\x02\x02\x02\x89\x87" +
		"\x03\x02\x02\x02\x89\x88\x03\x02\x02\x02\x8A\x13\x03\x02\x02\x02\x8B\x8C" +
		"\t\x02\x02\x02\x8C\x15\x03\x02\x02\x02\x8D\x8E\x07\x11\x02\x02\x8E\x8F" +
		"\x07&\x02\x02\x8F\x90\x05\x14\v\x02\x90\x91\x07%\x02\x02\x91\x17\x03\x02" +
		"\x02\x02\x92\x93\x07\x10\x02\x02\x93\x94\x07&\x02\x02\x94\x95\x05\x14" +
		"\v\x02\x95\x96\x07%\x02\x02\x96\x19\x03\x02\x02\x02\x97\x98\t\x03\x02" +
		"\x02\x98\x99\x07&\x02\x02\x99\x9A\x05\x14\v\x02\x9A\x9B\x07%\x02\x02\x9B" +
		"\x1B\x03\x02\x02\x02\x9C\x9D\b\x0F\x01\x02\x9D\x9E\t\x04\x02\x02\x9E\xAE" +
		"\x05\x1C\x0F\t\x9F\xA0\x07\x15\x02\x02\xA0\xAE\x05\x1C\x0F\b\xA1\xA2\x07" +
		"+\x02\x02\xA2\xA3\x05\x1C\x0F\x02\xA3\xA4\x07,\x02\x02\xA4\xAE\x03\x02" +
		"\x02\x02\xA5\xAE\x05\"\x12\x02\xA6\xAE\x07:\x02\x02\xA7\xAE\x05\x1E\x10" +
		"\x02\xA8\xA9\x07:\x02\x02\xA9\xAA\x07/\x02\x02\xAA\xAB\x05\x1C\x0F\x02" +
		"\xAB\xAC\x070\x02\x02\xAC\xAE\x03\x02\x02\x02\xAD\x9C\x03\x02\x02\x02" +
		"\xAD\x9F\x03\x02\x02\x02\xAD\xA1\x03\x02\x02\x02\xAD\xA5\x03\x02\x02\x02" +
		"\xAD\xA6\x03\x02\x02\x02\xAD\xA7\x03\x02\x02\x02\xAD\xA8\x03\x02\x02\x02" +
		"\xAE\xC3\x03\x02\x02\x02\xAF\xB0\f\x0F\x02\x02\xB0\xB1\t\x05\x02\x02\xB1" +
		"\xC2\x05\x1C\x0F\x10\xB2\xB3\f\x0E\x02\x02\xB3\xB4\t\x06\x02\x02\xB4\xC2" +
		"\x05\x1C\x0F\x0F\xB5\xB6\f\r\x02\x02\xB6\xB7\t\x07\x02\x02\xB7\xC2\x05" +
		"\x1C\x0F\x0E\xB8\xB9\f\f\x02\x02\xB9\xBA\t\b\x02\x02\xBA\xC2\x05\x1C\x0F" +
		"\r\xBB\xBC\f\v\x02\x02\xBC\xBD\t\t\x02\x02\xBD\xC2\x05\x1C\x0F\f\xBE\xBF" +
		"\f\n\x02\x02\xBF\xC0\x07\x18\x02\x02\xC0\xC2\x05\x1C\x0F\n\xC1\xAF\x03" +
		"\x02\x02\x02\xC1\xB2\x03\x02\x02\x02\xC1\xB5\x03\x02\x02\x02\xC1\xB8\x03" +
		"\x02\x02\x02\xC1\xBB\x03\x02\x02\x02\xC1\xBE\x03\x02\x02\x02\xC2\xC5\x03" +
		"\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\x1D\x03" +
		"\x02\x02\x02\xC5\xC3\x03\x02\x02\x02\xC6\xC7\x07:\x02\x02\xC7\xC9\x07" +
		"+\x02\x02\xC8\xCA\x05 \x11\x02\xC9\xC8\x03\x02\x02\x02\xC9\xCA\x03\x02" +
		"\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xCC\x07,\x02\x02\xCC\x1F\x03\x02" +
		"\x02\x02\xCD\xD2\x05\x1C\x0F\x02\xCE\xCF\x07*\x02\x02\xCF\xD1\x05\x1C" +
		"\x0F\x02\xD0\xCE\x03\x02\x02\x02\xD1\xD4\x03\x02\x02\x02\xD2\xD0\x03\x02" +
		"\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3!\x03\x02\x02\x02\xD4\xD2\x03\x02" +
		"\x02\x02\xD5\xD6\t\n\x02\x02\xD6#\x03\x02\x02\x02\xD7\xD8\x071\x02\x02" +
		"\xD8\xD9\x07+\x02\x02\xD9\xDA\x05\x1C\x0F\x02\xDA\xDB\x07,\x02\x02\xDB" +
		"\xDF\x07-\x02\x02\xDC\xDE\x05\b\x05\x02\xDD\xDC\x03\x02\x02\x02\xDE\xE1" +
		"\x03\x02\x02\x02\xDF\xDD\x03\x02\x02\x02\xDF\xE0\x03\x02\x02\x02\xE0\xE2" +
		"\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE2\xF3\x07.\x02\x02\xE3\xE4" +
		"\x072\x02\x02\xE4\xE5\x071\x02\x02\xE5\xE6\x07+\x02\x02\xE6\xE7\x05\x1C" +
		"\x0F\x02\xE7\xE8\x07,\x02\x02\xE8\xEC\x07-\x02\x02\xE9\xEB\x05\b\x05\x02" +
		"\xEA\xE9\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02" +
		"\xEC\xED\x03\x02\x02\x02\xED\xEF\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02" +
		"\xEF\xF0\x07.\x02\x02\xF0\xF2\x03\x02\x02\x02\xF1\xE3\x03\x02\x02\x02" +
		"\xF2\xF5\x03\x02\x02\x02\xF3\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02" +
		"\xF4\xFF\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF6\xF7\x072\x02\x02" +
		"\xF7\xFB\x07-\x02\x02\xF8\xFA\x05\b\x05\x02\xF9\xF8\x03\x02\x02\x02\xFA" +
		"\xFD\x03\x02\x02\x02\xFB\xF9\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC" +
		"\xFE\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE\u0100\x07.\x02\x02\xFF" +
		"\xF6\x03\x02\x02\x02\xFF\u0100\x03\x02\x02\x02\u0100%\x03\x02\x02\x02" +
		"\u0101\u0102\x074\x02\x02\u0102\u0103\x07+\x02\x02\u0103\u0104\x05\x1C" +
		"\x0F\x02\u0104\u010E\x07,\x02\x02\u0105\u0109\x07-\x02\x02\u0106\u0108" +
		"\x05\b\x05\x02\u0107\u0106\x03\x02\x02\x02\u0108\u010B\x03\x02\x02\x02" +
		"\u0109\u0107\x03\x02\x02\x02\u0109\u010A\x03\x02\x02\x02\u010A\u010C\x03" +
		"\x02\x02\x02\u010B\u0109\x03\x02\x02\x02\u010C\u010F\x07.\x02\x02\u010D" +
		"\u010F\x05\b\x05\x02\u010E\u0105\x03\x02\x02\x02\u010E\u010D\x03\x02\x02" +
		"\x02\u010F\'\x03\x02\x02\x02\u0110\u0111\x075\x02\x02\u0111\u0115\x07" +
		"-\x02\x02\u0112\u0114\x05\b\x05\x02\u0113\u0112\x03\x02\x02\x02\u0114" +
		"\u0117\x03\x02\x02\x02\u0115\u0113\x03\x02\x02\x02\u0115\u0116\x03\x02" +
		"\x02\x02\u0116\u0118\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02\u0118" +
		"\u0119\x07.\x02\x02\u0119\u011A\x074\x02\x02\u011A\u011B\x07+\x02\x02" +
		"\u011B\u011C\x05\x1C\x0F\x02\u011C\u011D\x07,\x02\x02\u011D\u011E\x07" +
		")\x02\x02\u011E)\x03\x02\x02\x02\u011F\u0120\x073\x02\x02\u0120\u0121" +
		"\x07:\x02\x02\u0121\u0122\x07 \x02\x02\u0122\u012C\x05,\x17\x02\u0123" +
		"\u0127\x07-\x02\x02\u0124\u0126\x05\b\x05\x02\u0125\u0124\x03\x02\x02" +
		"\x02\u0126\u0129\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128" +
		"\x03\x02\x02\x02\u0128\u012A\x03\x02\x02\x02\u0129\u0127\x03\x02\x02\x02" +
		"\u012A\u012D\x07.\x02\x02\u012B\u012D\x05\b\x05\x02\u012C\u0123\x03\x02" +
		"\x02\x02\u012C\u012B\x03\x02\x02\x02\u012D+\x03\x02\x02\x02\u012E\u012F" +
		"\x05\x1C\x0F\x02\u012F\u0130\x07\'\x02\x02\u0130\u0131\x05\x1C\x0F\x02" +
		"\u0131\u0139\x03\x02\x02\x02\u0132\u0134\x07/\x02\x02\u0133\u0135\x05" +
		".\x18\x02\u0134\u0133\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135" +
		"\u0136\x03\x02\x02\x02\u0136\u0139\x070\x02\x02\u0137\u0139\x07:\x02\x02" +
		"\u0138\u012E\x03\x02\x02\x02\u0138\u0132\x03\x02\x02\x02\u0138\u0137\x03" +
		"\x02\x02\x02\u0139-\x03\x02\x02\x02\u013A\u013F\x05\x1C\x0F\x02\u013B" +
		"\u013C\x07*\x02\x02\u013C\u013E\x05\x1C\x0F\x02\u013D\u013B\x03\x02\x02" +
		"\x02\u013E\u0141\x03\x02\x02\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140" +
		"\x03\x02\x02\x02\u0140/\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02 5" +
		"7>CJWejqv\x81\x89\xAD\xC1\xC3\xC9\xD2\xDF\xEC\xF3\xFB\xFF\u0109\u010E" +
		"\u0115\u0127\u012C\u0134\u0138\u013F";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Re_Parser.__ATN) {
			Re_Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Re_Parser._serializedATN));
		}

		return Re_Parser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public PROGRAM(): TerminalNode { return this.getToken(Re_Parser.PROGRAM, 0); }
	public ID(): TerminalNode { return this.getToken(Re_Parser.ID, 0); }
	public LBRACE(): TerminalNode { return this.getToken(Re_Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Re_Parser.RBRACE, 0); }
	public sentence(): SentenceContext[];
	public sentence(i: number): SentenceContext;
	public sentence(i?: number): SentenceContext | SentenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SentenceContext);
		} else {
			return this.getRuleContext(i, SentenceContext);
		}
	}
	public function_decl(): Function_declContext[];
	public function_decl(i: number): Function_declContext;
	public function_decl(i?: number): Function_declContext | Function_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Function_declContext);
		} else {
			return this.getRuleContext(i, Function_declContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_program; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_declContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(Re_Parser.ID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Re_Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Re_Parser.RPAREN, 0); }
	public LBRACE(): TerminalNode { return this.getToken(Re_Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Re_Parser.RBRACE, 0); }
	public type_specifier(): Type_specifierContext | undefined {
		return this.tryGetRuleContext(0, Type_specifierContext);
	}
	public VOID(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.VOID, 0); }
	public param_list(): Param_listContext | undefined {
		return this.tryGetRuleContext(0, Param_listContext);
	}
	public sentence(): SentenceContext[];
	public sentence(i: number): SentenceContext;
	public sentence(i?: number): SentenceContext | SentenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SentenceContext);
		} else {
			return this.getRuleContext(i, SentenceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_function_decl; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterFunction_decl) {
			listener.enterFunction_decl(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitFunction_decl) {
			listener.exitFunction_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitFunction_decl) {
			return visitor.visitFunction_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Param_listContext extends ParserRuleContext {
	public type_specifier(): Type_specifierContext[];
	public type_specifier(i: number): Type_specifierContext;
	public type_specifier(i?: number): Type_specifierContext | Type_specifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_specifierContext);
		} else {
			return this.getRuleContext(i, Type_specifierContext);
		}
	}
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Re_Parser.ID);
		} else {
			return this.getToken(Re_Parser.ID, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Re_Parser.COMMA);
		} else {
			return this.getToken(Re_Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_param_list; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterParam_list) {
			listener.enterParam_list(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitParam_list) {
			listener.exitParam_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitParam_list) {
			return visitor.visitParam_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SentenceContext extends ParserRuleContext {
	public var_decl(): Var_declContext | undefined {
		return this.tryGetRuleContext(0, Var_declContext);
	}
	public var_assign(): Var_assignContext | undefined {
		return this.tryGetRuleContext(0, Var_assignContext);
	}
	public print_statement(): Print_statementContext | undefined {
		return this.tryGetRuleContext(0, Print_statementContext);
	}
	public if_statement(): If_statementContext | undefined {
		return this.tryGetRuleContext(0, If_statementContext);
	}
	public while_statement(): While_statementContext | undefined {
		return this.tryGetRuleContext(0, While_statementContext);
	}
	public do_while_statement(): Do_while_statementContext | undefined {
		return this.tryGetRuleContext(0, Do_while_statementContext);
	}
	public for_statement(): For_statementContext | undefined {
		return this.tryGetRuleContext(0, For_statementContext);
	}
	public return_statement(): Return_statementContext | undefined {
		return this.tryGetRuleContext(0, Return_statementContext);
	}
	public function_call(): Function_callContext | undefined {
		return this.tryGetRuleContext(0, Function_callContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_sentence; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterSentence) {
			listener.enterSentence(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitSentence) {
			listener.exitSentence(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitSentence) {
			return visitor.visitSentence(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Print_statementContext extends ParserRuleContext {
	public PRINT(): TerminalNode { return this.getToken(Re_Parser.PRINT, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Re_Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Re_Parser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(Re_Parser.SEMI, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_print_statement; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterPrint_statement) {
			listener.enterPrint_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitPrint_statement) {
			listener.exitPrint_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitPrint_statement) {
			return visitor.visitPrint_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Var_declContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(Re_Parser.ID, 0); }
	public SEMI(): TerminalNode { return this.getToken(Re_Parser.SEMI, 0); }
	public type_specifier(): Type_specifierContext | undefined {
		return this.tryGetRuleContext(0, Type_specifierContext);
	}
	public VAR(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.VAR, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_var_decl; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterVar_decl) {
			listener.enterVar_decl(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitVar_decl) {
			listener.exitVar_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitVar_decl) {
			return visitor.visitVar_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Var_assignContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(Re_Parser.ID, 0); }
	public ASSIGN(): TerminalNode { return this.getToken(Re_Parser.ASSIGN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Re_Parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_var_assign; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterVar_assign) {
			listener.enterVar_assign(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitVar_assign) {
			listener.exitVar_assign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitVar_assign) {
			return visitor.visitVar_assign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_statementContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(Re_Parser.RETURN, 0); }
	public SEMI(): TerminalNode { return this.getToken(Re_Parser.SEMI, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_return_statement; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterReturn_statement) {
			listener.enterReturn_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitReturn_statement) {
			listener.exitReturn_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitReturn_statement) {
			return visitor.visitReturn_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_specifierContext extends ParserRuleContext {
	public primitive_type(): Primitive_typeContext | undefined {
		return this.tryGetRuleContext(0, Primitive_typeContext);
	}
	public list_type(): List_typeContext | undefined {
		return this.tryGetRuleContext(0, List_typeContext);
	}
	public array_type(): Array_typeContext | undefined {
		return this.tryGetRuleContext(0, Array_typeContext);
	}
	public collection_type(): Collection_typeContext | undefined {
		return this.tryGetRuleContext(0, Collection_typeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_type_specifier; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterType_specifier) {
			listener.enterType_specifier(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitType_specifier) {
			listener.exitType_specifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitType_specifier) {
			return visitor.visitType_specifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Primitive_typeContext extends ParserRuleContext {
	public INT_TYPE(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.INT_TYPE, 0); }
	public DOUBLE_TYPE(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.DOUBLE_TYPE, 0); }
	public LONG_TYPE(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.LONG_TYPE, 0); }
	public SHORT_TYPE(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.SHORT_TYPE, 0); }
	public STRING_TYPE(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.STRING_TYPE, 0); }
	public BOOL_TYPE(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.BOOL_TYPE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_primitive_type; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterPrimitive_type) {
			listener.enterPrimitive_type(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitPrimitive_type) {
			listener.exitPrimitive_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitPrimitive_type) {
			return visitor.visitPrimitive_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class List_typeContext extends ParserRuleContext {
	public LIST_TYPE(): TerminalNode { return this.getToken(Re_Parser.LIST_TYPE, 0); }
	public LT(): TerminalNode { return this.getToken(Re_Parser.LT, 0); }
	public primitive_type(): Primitive_typeContext {
		return this.getRuleContext(0, Primitive_typeContext);
	}
	public GT(): TerminalNode { return this.getToken(Re_Parser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_list_type; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterList_type) {
			listener.enterList_type(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitList_type) {
			listener.exitList_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitList_type) {
			return visitor.visitList_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_typeContext extends ParserRuleContext {
	public ARRAY_TYPE(): TerminalNode { return this.getToken(Re_Parser.ARRAY_TYPE, 0); }
	public LT(): TerminalNode { return this.getToken(Re_Parser.LT, 0); }
	public primitive_type(): Primitive_typeContext {
		return this.getRuleContext(0, Primitive_typeContext);
	}
	public GT(): TerminalNode { return this.getToken(Re_Parser.GT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_array_type; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterArray_type) {
			listener.enterArray_type(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitArray_type) {
			listener.exitArray_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitArray_type) {
			return visitor.visitArray_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Collection_typeContext extends ParserRuleContext {
	public LT(): TerminalNode { return this.getToken(Re_Parser.LT, 0); }
	public primitive_type(): Primitive_typeContext {
		return this.getRuleContext(0, Primitive_typeContext);
	}
	public GT(): TerminalNode { return this.getToken(Re_Parser.GT, 0); }
	public QUEUE(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.QUEUE, 0); }
	public STACK(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.STACK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_collection_type; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterCollection_type) {
			listener.enterCollection_type(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitCollection_type) {
			listener.exitCollection_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitCollection_type) {
			return visitor.visitCollection_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OR_KW(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.OR_KW, 0); }
	public OR_OP(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.OR_OP, 0); }
	public AND_KW(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.AND_KW, 0); }
	public AND_OP(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.AND_OP, 0); }
	public GTE(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.GTE, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.GT, 0); }
	public LTE(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.LTE, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.LT, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.NEQ, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.MINUS, 0); }
	public MULT(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.MULT, 0); }
	public DIV(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.DIV, 0); }
	public EXP(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.EXP, 0); }
	public NOT_KW(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.NOT_KW, 0); }
	public NOT_OP(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.NOT_OP, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.RPAREN, 0); }
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.ID, 0); }
	public function_call(): Function_callContext | undefined {
		return this.tryGetRuleContext(0, Function_callContext);
	}
	public LBRACKET(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.LBRACKET, 0); }
	public RBRACKET(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.RBRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_expression; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_callContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(Re_Parser.ID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Re_Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Re_Parser.RPAREN, 0); }
	public argument_list(): Argument_listContext | undefined {
		return this.tryGetRuleContext(0, Argument_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_function_call; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterFunction_call) {
			listener.enterFunction_call(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitFunction_call) {
			listener.exitFunction_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitFunction_call) {
			return visitor.visitFunction_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Argument_listContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Re_Parser.COMMA);
		} else {
			return this.getToken(Re_Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_argument_list; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterArgument_list) {
			listener.enterArgument_list(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitArgument_list) {
			listener.exitArgument_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitArgument_list) {
			return visitor.visitArgument_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public INT(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.INT, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.DOUBLE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.STRING, 0); }
	public BOOL(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.BOOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_literal; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class If_statementContext extends ParserRuleContext {
	public IF(): TerminalNode[];
	public IF(i: number): TerminalNode;
	public IF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Re_Parser.IF);
		} else {
			return this.getToken(Re_Parser.IF, i);
		}
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Re_Parser.LPAREN);
		} else {
			return this.getToken(Re_Parser.LPAREN, i);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Re_Parser.RPAREN);
		} else {
			return this.getToken(Re_Parser.RPAREN, i);
		}
	}
	public LBRACE(): TerminalNode[];
	public LBRACE(i: number): TerminalNode;
	public LBRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Re_Parser.LBRACE);
		} else {
			return this.getToken(Re_Parser.LBRACE, i);
		}
	}
	public RBRACE(): TerminalNode[];
	public RBRACE(i: number): TerminalNode;
	public RBRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Re_Parser.RBRACE);
		} else {
			return this.getToken(Re_Parser.RBRACE, i);
		}
	}
	public sentence(): SentenceContext[];
	public sentence(i: number): SentenceContext;
	public sentence(i?: number): SentenceContext | SentenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SentenceContext);
		} else {
			return this.getRuleContext(i, SentenceContext);
		}
	}
	public ELSE(): TerminalNode[];
	public ELSE(i: number): TerminalNode;
	public ELSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Re_Parser.ELSE);
		} else {
			return this.getToken(Re_Parser.ELSE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_if_statement; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterIf_statement) {
			listener.enterIf_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitIf_statement) {
			listener.exitIf_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitIf_statement) {
			return visitor.visitIf_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class While_statementContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(Re_Parser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Re_Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Re_Parser.RPAREN, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.RBRACE, 0); }
	public sentence(): SentenceContext[];
	public sentence(i: number): SentenceContext;
	public sentence(i?: number): SentenceContext | SentenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SentenceContext);
		} else {
			return this.getRuleContext(i, SentenceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_while_statement; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterWhile_statement) {
			listener.enterWhile_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitWhile_statement) {
			listener.exitWhile_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitWhile_statement) {
			return visitor.visitWhile_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Do_while_statementContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(Re_Parser.DO, 0); }
	public LBRACE(): TerminalNode { return this.getToken(Re_Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Re_Parser.RBRACE, 0); }
	public WHILE(): TerminalNode { return this.getToken(Re_Parser.WHILE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Re_Parser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Re_Parser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(Re_Parser.SEMI, 0); }
	public sentence(): SentenceContext[];
	public sentence(i: number): SentenceContext;
	public sentence(i?: number): SentenceContext | SentenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SentenceContext);
		} else {
			return this.getRuleContext(i, SentenceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_do_while_statement; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterDo_while_statement) {
			listener.enterDo_while_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitDo_while_statement) {
			listener.exitDo_while_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitDo_while_statement) {
			return visitor.visitDo_while_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_statementContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(Re_Parser.FOR, 0); }
	public ID(): TerminalNode { return this.getToken(Re_Parser.ID, 0); }
	public IN(): TerminalNode { return this.getToken(Re_Parser.IN, 0); }
	public for_expression(): For_expressionContext {
		return this.getRuleContext(0, For_expressionContext);
	}
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.RBRACE, 0); }
	public sentence(): SentenceContext[];
	public sentence(i: number): SentenceContext;
	public sentence(i?: number): SentenceContext | SentenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SentenceContext);
		} else {
			return this.getRuleContext(i, SentenceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_for_statement; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterFor_statement) {
			listener.enterFor_statement(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitFor_statement) {
			listener.exitFor_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitFor_statement) {
			return visitor.visitFor_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class For_expressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public DOTDOT(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.DOTDOT, 0); }
	public LBRACKET(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.LBRACKET, 0); }
	public RBRACKET(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.RBRACKET, 0); }
	public list_elements(): List_elementsContext | undefined {
		return this.tryGetRuleContext(0, List_elementsContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(Re_Parser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_for_expression; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterFor_expression) {
			listener.enterFor_expression(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitFor_expression) {
			listener.exitFor_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitFor_expression) {
			return visitor.visitFor_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class List_elementsContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Re_Parser.COMMA);
		} else {
			return this.getToken(Re_Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Re_Parser.RULE_list_elements; }
	// @Override
	public enterRule(listener: Re_ParserListener): void {
		if (listener.enterList_elements) {
			listener.enterList_elements(this);
		}
	}
	// @Override
	public exitRule(listener: Re_ParserListener): void {
		if (listener.exitList_elements) {
			listener.exitList_elements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Re_ParserVisitor<Result>): Result {
		if (visitor.visitList_elements) {
			return visitor.visitList_elements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


