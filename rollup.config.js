import { terser } from "rollup-plugin-terser";
import scss from 'rollup-plugin-scss'
import pkg from './package.json';

export default {
    input: 'src/js/lightcss.js',
    plugins: [
        terser(),
        scss({
            output: 'dist/lightcss.min.css',
            outputStyle: "compressed"
        }),
    ],
    output: [
        {
            name: 'lightcss',
            file: pkg.browser,
            format: 'umd',
        },
        {
            file: pkg.module,
            format: 'es'
        },
    ],
};
