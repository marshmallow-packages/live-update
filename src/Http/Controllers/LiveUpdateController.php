<?php

namespace Marshmallow\LiveUpdate\Http\Controllers;

use Illuminate\Routing\Controller;
use Laravel\Nova\Http\Requests\NovaRequest;

class LiveUpdateController extends Controller
{
    public function update(NovaRequest $request)
    {
        $resourceClass = $request->resource();
        $resourceValidationRules = $resourceClass::rulesForUpdate($request);
        $fieldValidationRules = $resourceValidationRules[$request->attribute];

        if (!empty($fieldValidationRules)) {
            $validatedData = $request->validate([
                'value' => $fieldValidationRules,
            ]);
        }

        $model = $request->model()->findOrFail($request->id);
        $model->{$request->attribute} = $request->value;
        $model->save();
    }
}
