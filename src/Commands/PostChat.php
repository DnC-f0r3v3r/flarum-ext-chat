<?php
/*
 * This file is part of flagrow/flarum-ext-image-upload.
 *
 * Copyright (c) Flagrow.
 *
 * http://flagrow.github.io
 *
 * For the full copyright and license information, please view the license.md
 * file that was distributed with this source code.
 */

namespace PushEDX\Chat\Commands;

use Flarum\Core\User;

class PostChat
{
    /**
     * The chat message
     *
     * @var string
     */
    public $msg;

    /**
     * The user performing the action.
     *
     * @var User
     */
    public $actor;

    /**
     * @param int                          $postId The ID of the post to upload the image for.
     * @param UploadedFileInterface|string $file   The avatar file to upload.
     * @param User                         $actor  The user performing the action.
     */
    public function __construct(/*\string*/ $msg, User $actor)
    {
        $this->msg = $msg;
        $this->actor = $actor;
    }
}
