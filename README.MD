# angular-content-portal

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/81d57715656249c58e1bc99306c5503d)](https://app.codacy.com/app/cashy/angular-content-portal?utm_source=github.com&utm_medium=referral&utm_content=JohnCashmore/angular-content-portal&utm_campaign=badger) [![Coverage Status](https://coveralls.io/repos/github/JohnCashmore/angular-content-portal/badge.svg?branch=master)](https://coveralls.io/github/JohnCashmore/angular-content-portal?branch=master)

A simple library that uses the @angular/cdk library to give a quick way of portaling(?) content outside of your component.

## Requirements

- Angular 5+

## Demo

[StackBlitz demo](https://stackblitz.com/edit/angular-content-portal)

## Installation

To install this library, run:

```bash
$ npm install angular-content-portal --save
```

## Using angular-content-portal

From your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularContentPortalModule } from 'angular-content-portal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AngularContentPortalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


```xml
<!-- You can now use your library component in app.component.html -->
<ac-portal-outlet name="header-actions"></ac-portal-outlet>
```

then


```xml
<!-- You can now use your library component in user/create-user.component.html -->
<ac-portal name="header-actions">
  <button>Add user</button>
</ac-portal>
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run packagr
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [John Cashmore](mailto:john@cashmo.re)
