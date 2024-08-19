<?php

namespace Marshmallow\LiveUpdate;

use Config;
use Laravel\Nova\Fields\Field;

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

    public function copyableWithAction(string $action, string $icon, string $target_field_label, string $tooltip, ?callable $when = null): self
    {
        if ($when && !$when()) {
            return $this;
        }

        return $this->withMeta([
            'copyableAction' => $action,
            'copyableActionIcon' => $icon,
            'copyableActionFieldName' => $target_field_label,
            'copyableActionTooltip' => $tooltip,
        ]);
    }

    public function asPlaceholder()
    {
        return $this->withMeta([
            'asPlaceholder' => true,
        ]);
    }
}
