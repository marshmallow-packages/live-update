<?php

use Illuminate\Support\Facades\Route;
use Laravel\Nova\Http\Requests\NovaRequest;

/*
|--------------------------------------------------------------------------
| Tool API Routes
|--------------------------------------------------------------------------
|
| Here is where you may register API routes for your tool. These routes
| are loaded by the ServiceProvider of your tool. They are protected
| by your tool's "Authorize" middleware by default. Now, go build!
|
*/

Route::post('/update/{resource}', 'Marshmallow\LiveUpdate\Http\Controllers\LiveUpdateController@update');

Route::post('/run-action/{resource}/{resourceId}', 'Marshmallow\LiveUpdate\Http\Controllers\LiveUpdateController@runCopyableAction');
Route::post('/listen/{resource}/{resourceId}', function ($resource, $resourceId, NovaRequest $request) {
    $resourceClass = $request->resource();
    $resource = new $resourceClass();

    $field = collect($resource->fields($request))->filter(function ($field) use ($request) {
        return $field->attribute == $request->attribute;
    })->first();

    $callback = $field->listnerCallback;
    if (!$callback) {
        return response()->json([
            'value' => null,
        ]);
    }

    $model = $request->model()->findOrFail($resourceId);

    return response()->json([
        'value' => $callback($request->value, $request->attribute, $model, $request),
    ]);
});
