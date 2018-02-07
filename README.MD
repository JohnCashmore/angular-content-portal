# angular-content-portal

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/81d57715656249c58e1bc99306c5503d)](https://app.codacy.com/app/cashy/angular-content-portal?utm_source=github.com&utm_medium=referral&utm_content=JohnCashmore/angular-content-portal&utm_campaign=badger)

## Installation

To install this library, run:

```bash
$ npm install angular-content-portal --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install angular-content-portal
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { SampleModule } from 'angular-content-portal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<sampleComponent></sampleComponent>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [John Cashmore](mailto:john@cashmo.re)
