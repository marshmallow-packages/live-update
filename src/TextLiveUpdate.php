<?php

namespace Marshmallow\LiveUpdate;

use Laravel\Nova\Fields\Field;
use Config;

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
}
