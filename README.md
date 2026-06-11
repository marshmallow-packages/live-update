![alt text](https://marshmallow.dev/cdn/media/logo-red-237x46.png "marshmallow.")

# Laravel Nova Live Update

[![Latest Version on Packagist](https://img.shields.io/packagist/v/marshmallow/live-update.svg?style=flat-square)](https://packagist.org/packages/marshmallow/live-update)
[![Total Downloads](https://img.shields.io/packagist/dt/marshmallow/live-update.svg?style=flat-square)](https://packagist.org/packages/marshmallow/live-update)
[![Issues](https://img.shields.io/github/issues/marshmallow-packages/live-update?style=flat-square)](https://github.com/marshmallow-packages/live-update/issues)
[![License](https://img.shields.io/packagist/l/marshmallow/live-update?style=flat-square)](https://github.com/marshmallow-packages/live-update/blob/main/LICENSE.md)

Edit your Nova resources from the index page. This package adds a `TextLiveUpdate` field that is editable inline on the index view, so you can update a value without opening the resource's edit screen.

<img src="https://raw.githubusercontent.com/marshmallow-packages/live-update/main/resources/screenshots/inline-editable.png"/>

## Requirements

- PHP `^8.1`
- Laravel Nova `^5.0`

## Installation

Install the package via Composer:

```bash
composer require marshmallow/live-update
```

The package registers its service provider and assets automatically via Laravel's package auto-discovery, so there is nothing else to set up.

## Usage

Use the `TextLiveUpdate` field in a Nova resource exactly like a regular `Text` field. It becomes editable directly on the index view:

```php
use Marshmallow\LiveUpdate\TextLiveUpdate;

public function fields(NovaRequest $request)
{
    return [
        TextLiveUpdate::make('Name'),
    ];
}
```

When the value is changed inline, it is validated against the resource's update rules for that attribute before being saved.

### Field types

Pass a type to control how the inline input behaves. Using `date` renders a date picker that saves on change and formats the value as `Y-m-d`:

```php
TextLiveUpdate::make('Published At', 'published_at')->type('date');
```

### Copyable

Render a button to copy the field's value to the clipboard:

```php
TextLiveUpdate::make('Reference')->copyable();
```

### Copy to another field

Copy the field's value into another field on the same form, with an optional tooltip:

```php
TextLiveUpdate::make('Slug')->copyableTo('seo_slug', 'Copy to SEO slug');
```

### Use as a placeholder

Render the field's value as a placeholder rather than an editable value:

```php
TextLiveUpdate::make('Name')->asPlaceholder();
```

### Listen to another field

Recompute this field's value when another field changes. The callback receives the changed value, the attribute, the model, and the request, and returns the new value:

```php
TextLiveUpdate::make('Full Name')
    ->listen('first_name', 'change', function ($value, $attribute, $model, $request) {
        return trim($value . ' ' . $model->last_name);
    });
```

### Copyable with a server-side action

Run a server-side action and copy its returned value. The action class must implement `Marshmallow\LiveUpdate\CopyableActionInterface`:

```php
use Illuminate\Database\Eloquent\Model;
use Marshmallow\LiveUpdate\CopyableActionInterface;

class GenerateReference implements CopyableActionInterface
{
    public function execute(Model $model): ?string
    {
        return 'REF-' . $model->getKey();
    }
}
```

Then wire it up on the field. The optional `when` callback decides whether the action button is shown:

```php
TextLiveUpdate::make('Reference')
    ->copyableWithAction(
        action: GenerateReference::class,
        icon: 'clipboard',
        target_field_label: 'Reference',
        tooltip: 'Generate a reference',
        when: fn () => true,
    );
```

## Security

If you discover any security related issues, please email stef@marshmallow.dev instead of using the issue tracker.

## Credits

- [Marshmallow](https://github.com/marshmallow-packages)
- [wehaa/inline-field-update](https://github.com/wehaa/inline-field-update)
- [All Contributors](https://github.com/marshmallow-packages/live-update/contributors)

## License

The MIT License (MIT). Please see the [License File](LICENSE.md) for more information.
