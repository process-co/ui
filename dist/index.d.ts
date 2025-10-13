import * as React from 'react';

interface ExpressionContext {
    [key: string]: any;
}
interface ExpressionAST {
    kind: number;
    color?: string;
    left?: ExpressionAST;
    right?: ExpressionAST;
    name?: ExpressionAST;
    argumentExpression?: ExpressionAST;
    arguments?: ExpressionAST[];
    expression?: ExpressionAST;
    escapedText?: string;
    text?: string;
    operator?: string;
    type?: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}
interface ExpressionResult {
    value: any;
    ast: ExpressionAST;
    error?: string;
    isValid: boolean;
    validation: {
        syntax: boolean;
        expression: boolean;
        context: boolean;
        type?: boolean;
        security?: boolean;
    };
}
declare function Input({ className, expectedType, ...props }: React.ComponentProps<'input'> & {
    error?: boolean;
    label?: string;
    rapperClassName?: string;
    expressionContext?: ExpressionContext;
    expressionResult?: ExpressionResult;
    isEvaluating?: boolean;
    isExpressionValid?: boolean;
    expectedType?: string;
}): React.JSX.Element;

export { type ExpressionResult, Input, type InputProps };
