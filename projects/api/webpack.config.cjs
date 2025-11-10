const path = require('path');
const projectPaths = ['utils'].map((project) =>
    path.resolve(__dirname, '..', project)
);
const swcDefaultConfig =
    require('@nestjs/cli/lib/compiler/defaults/swc-defaults').swcDefaultsFactory()
        .swcOptions;

module.exports = {
    entry: './src/main.ts',
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(j|t)s$/,
                exclude: /node_modules/,
                include: projectPaths,
                use: {
                    loader: 'swc-loader',
                    options: {
                        debug: true,
                        ...swcDefaultConfig,
                    },
                },
            },
        ],
    },
};
