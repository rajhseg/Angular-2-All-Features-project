    import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
    import { AppModule } from './app.module';
    import { NewsModule } from './News/news.module'

    const platform = platformBrowserDynamic();

    let moduleref = platform.bootstrapModule(AppModule);