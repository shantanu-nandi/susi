export class Theme {
    constructor(public name: string, public styleName: string) {}
}

export const defaultTheme = new Theme('Default', 'loctas.css');

export const themes: Theme[] = [
    defaultTheme,
    new Theme('Cosmo', 'cosmo.css'),
    new Theme('Litera', 'litera.css'),
    new Theme('Lumen', 'lumen.css'),
    new Theme('Minty', 'minty.css'),
    new Theme('Pulse', 'pulse.css')
];