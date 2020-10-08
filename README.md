# Add inline update to your nova resources

This tool allows you to update a field of a resource in the index view (inline edit).

## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require marshmallow/live-update
```

## Usage

```php
use Marshmallow\LiveUpdate\TextLiveUpdate;

TextLiveUpdate::make('Name')
```

