(function (global) {
    
    System.config({
        
        paths:{
            'npm:': 'node_modules/'
        },

        map: {
            // our com is within the app folder
            app: 'com',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            
            '@angular/platform-browser': 
            'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            
            '@angular/platform-browser-dynamic': 
            'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
       
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs':                      'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
         },

    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
            com: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            }
         }

    });

})(this);