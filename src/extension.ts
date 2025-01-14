// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { CompletionItem, CompletionItemKind, Disposable, ExtensionContext, Hover, languages, MarkdownString, Position, Range, TextDocument } from "vscode";
import { Documentation } from "./hoverDocumentation";

function make_doc(variable_name: string, type: string, default_value: string | number | boolean, description: string): MarkdownString {
    type          = type.includes(" ") ? "string" : type;
    default_value = !default_value ? "None" : default_value;

    // const val_color: string = ({
    //     "string"    : "#CE9178",
    //     "number"    : "#B5CEA8",
    //     "boolean"   : "#4E94CE",
    //     "undefined" : "#4E94CE",
    //     "bigint"    : "#4EC9B0",
    //     "function"  : "#DCDCAA",
    //     "object"    : "#4FC1FF",
    //     "symbol"    : "#F8F8F8",
    // })[typeof default_value] ?? "#4E94CE";
    // const html = /*html*/`<h3><code><span style=color:#4E94CE>${type}</span> <span style=color:#75beff>${variable_name}</span> = <span style=color:${val_color}>${default_value}</span></code></h3>\n\n\n`;
    const compat_type    = type.replace("integer", "int").replace("boolean", "bool");
    const compat_default = typeof default_value === "string" ? default_value.replace("None", "null") : default_value;

    const markdown       = new MarkdownString(``, true);
    markdown.supportHtml = true;
    
    markdown.appendCodeblock(`${compat_type} ${variable_name} = ${compat_default}`, "csharp");
    // markdown.appendMarkdown(html);
    markdown.appendMarkdown(`________________\n\n\n`);
    markdown.appendMarkdown(description);
    return markdown;
}

const hoverDocumentation : Record<string, MarkdownString> = {};
const completionItems    : CompletionItem[]               = [];
Object.values(Documentation).forEach(property => {
    const documentation = make_doc(property.variable, property.type, property.default_value, property.description);
    hoverDocumentation[property.variable] = documentation;
    completionItems.push({
        label         : property.variable,
        kind          : CompletionItemKind.Property,
        detail        : `[${property.type}]`,
        documentation : documentation,
    });
});

export function activate(context: ExtensionContext): void {
    const hoverProvider: Disposable = languages.registerHoverProvider('mypy-ini', {
        provideHover(document: TextDocument, position: Position): Hover|null {
            const word: string = document.getText(document.getWordRangeAtPosition(position));

            if (!Object.hasOwn(hoverDocumentation, word)) { return null; }
            return new Hover(hoverDocumentation[word], new Range(position, position));
        }
    });
    const completionProvider: Disposable = languages.registerCompletionItemProvider('mypy-ini', {
        provideCompletionItems(): CompletionItem[] { return completionItems; }
    });

    context.subscriptions.push(hoverProvider, completionProvider);
}
