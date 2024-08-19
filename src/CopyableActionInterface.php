<?php

namespace Marshmallow\LiveUpdate;

use Exception;
use Illuminate\Database\Eloquent\Model;

interface CopyableActionInterface
{
    public function execute(Model $model): ?string;
}
