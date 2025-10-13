import * as React from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';

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

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): React.JSX.Element;

export { Button, type ExpressionResult, Input, type InputProps, buttonVariants };
