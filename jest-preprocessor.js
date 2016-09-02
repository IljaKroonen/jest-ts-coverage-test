// Copyright 2004-present Facebook. All Rights Reserved.

const tsc = require('typescript');

module.exports = {
    process(src, path) {
        if (path.endsWith('.ts') || path.endsWith('.tsx') || path.endsWith('.js')) {
            return tsc.transpile(
                src,
                {
                    module: tsc.ModuleKind.CommonJS,
                    jsx: tsc.JsxEmit.React,
                    allowJs: true
                },
                path,
                []
            );
        }
        return src;
    },
};