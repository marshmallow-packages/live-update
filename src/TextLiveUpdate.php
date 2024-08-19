<?php

namespace Marshmallow\LiveUpdate;

use Config;
use Laravel\Nova\Fields\Field;
u
class TextLiveUpdate extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'live-update';

    protected function resolveAttribute($resource, $attribute)
    {
        $this->withMeta([
            'id' => data_get($resource, $resource->getKeyName()),
            'nova_path' => Config::get('nova.path')
        ]);

        return parent::resolveAttribute($resource, $attribute);
    }

    public function copyable()
    {
        return $this->withMeta([
            'copyable' => true,
        ]);
    }

    public function copyableTo(string $field_name, string $tooltip = null)
    {
        return $this->withMeta([
            'copyableTo' => true,
            'copyableToFieldName' => $field_name,
            'copyableToTooltip' => $tooltip,
        ]);
    }

    public function asPlaceholder()
    {
        return $this->withMeta([
            'asPlaceholder' => true,
        ]);
    }
}
