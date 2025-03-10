<?php

namespace Marshmallow\LiveUpdate\Http\Controllers;

use Illuminate\Support\Arr;
use Illuminate\Routing\Controller;
use Laravel\Nova\Http\Requests\NovaRequest;

class LiveUpdateController extends Controller
{
    public function update(NovaRequest $request)
    {
        $resourceClass = $request->resource();
        $resourceValidationRules = $resourceClass::rulesForUpdate($request);
        $fieldValidationRules = Arr::get($resourceValidationRules, $request->attribute);

        if (!empty($fieldValidationRules)) {
            $validatedData = $request->validate([
                'value' => $fieldValidationRules,
            ]);
        }

        $model = $request->model()->findOrFail($request->id);
        $model->{$request->attribute} = $request->value;
        $model->save();
    }

    public function runCopyableAction($resource, $resourceId, NovaRequest $request)
    {
        $resourceClass = $request->resource();
        $model = $request->model()->findOrFail($resourceId);
        $action_class = $request->action_class;
        $response = (new $action_class)->execute($model);

        return response()->json([
            'value' => $response,
        ]);
    }
}
