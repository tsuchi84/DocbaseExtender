declare module '*.vue' {
    import Vue from 'vue'
    export default Vue
}

declare module "*.css" {
    const classes: {[className: string]: string}
    export default classes
}