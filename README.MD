# angular-content-portal

[![Build Status](https://travis-ci.org/JohnCashmore/angular-content-portal.svg?branch=master)](https://travis-ci.org/JohnCashmore/angular-content-portal) [![Coverage Status](https://coveralls.io/repos/github/JohnCashmore/angular-content-portal/badge.svg?branch=master)](https://coveralls.io/github/JohnCashmore/angular-content-portal?branch=master) [![dependencies Status](https://david-dm.org/johncashmore/angular-content-portal/status.svg)](https://david-dm.org/johncashmore/angular-content-portal) [![devDependencies Status](https://david-dm.org/johncashmore/angular-content-portal/dev-status.svg)](https://david-dm.org/johncashmore/angular-content-portal?type=dev) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/13e634f2f4364443bf44c3438ced9b06)](https://www.codacy.com/app/cashy/angular-content-portal?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=JohnCashmore/angular-content-portal&amp;utm_campaign=Badge_Grade)

A simple library that uses the @angular/cdk library to give a quick way of portaling(?) content outside of your component.

![Rick and Morty Portal Gun](http://paulwelsh.info/angular-content-portal/portal-gun.jpg)

## Requirements

* Angular 6+

## Demo

[StackBlitz demo](https://stackblitz.com/github/JohnCashmore/angular-content-portal)

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
  declarations: [AppComponent],
  imports: [BrowserModule, AngularContentPortalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
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
