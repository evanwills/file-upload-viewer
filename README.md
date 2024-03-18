# `<FileUploadViewer>`

* [Introduction](introduction)
* [User work flow](#user-work-flow)
* [Attributes](README_attributes.md)
  * [Required attributes](README_attributes.md#required-attributes)
  * [Optional attributes](README_attributes.md#optional-attributes)
* [Slots](README_slots.md)
  * [`<header>`](README_slots.md#header-slots)
  * [Body](README_slots.md#body-slots) (`<main>`)
  * [`<footer>`](README_slots.md#footer-slots)
  * [Buttons](README_slots.md#button-slots)
* [States](#states)
* [Events](#events)
* [Useful links](#useful-links)
* [Vite and VueJS + Typescript](README.vite.md)

---

## Introduction

`FileUploadViewer` is a [Vue.js](https://v3.vuejs.org/) component that
provides a fancy user interface for uploading one or more files of
specified types and (for images) having the images resized in the
browser before they're sent to the server.

> __Note:__ `FileUploadViewer` does not handle anything to do with sending
>           the files to the server.
>
> When the user confirms they are happy with their selection, a
> [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)
> object containing all the valid selected files is created  and made
> available and a `confirmupload` event is emitted. It is then up to
> the parent component to handle sending the files to the server.

----

## User work flow

1. The user clicks on the first (Upload) button.
2. A modal pops up over the page with some basic info what they
   should upload and with with a "Choose files" button.
3. User chooses one or more files.
4. A carousel is displayed showing the selected files.
   * If the file is an image and is larger than allowed, it will be
     resized. While it is being resized, a placeholder image is shown
     with some animation to indicate something is happening.
   * Once the image has been resized, it will be displayed.
   * For valid non-image files a placeholder will be shown
   * For files/images that are too large or a forbidden type
     (or both) a placeholder will be shown indicating that there is
     a  problem and what the poblem is.
5. The carousel can be moved left and right so a different file/image
   is in focus.
6. When an image/file has focus in the carousel, extra controls are
   shown for that image/file:
   * *(If the [`reorder`](README_attributes.md#reorder) attribute*
     *is set)*, the image/file can be moved left or right relative
     to its neighbour.
   * The image/file can be replaced with a different image/file from
     the file system.
   * The image/file can be deleted. (removed from the upload list.)
7. *(Unless [`auto-exclude`](README_attributes.md#auto-exclude)*
   *attribute is set)* The user will be required to remove any files
   that are over-sized, a forbidden file type or in excess of the
   maximum number of files allowed. Or if the maximum total upload
   size is exceeded.
8. Once all bad files are removed the user can click the
   __`Confirm and upload`__ button.
9. * *(If `upload-confirm-text` attribute was set and not empty)*
      The user will then have a final prompt to confirm they are
      happy with their selection.
      1. The user can then either click __`Cancel`__ to go back to
         the carousel interface<br />
         OR
      2. Click __`Send files`__ to get `FileUpload` to tell the
         client to do the upload work.
   * *(If no confirmation is required)* `FileUpload` will tell the
      client to do the upload work.
---

## States

`<FileUploadViewer>` has eight possible states:

1. [__`closed`__](#closed) (default)
2. [__`empty`__](#empty)
3. [__`viewing`__](#viewing)
4. [__`confirmCancel`__](#confirmCancel)
5. [__`confirmSubmit`__](#confirmsubmit)
6. [__`sending`__](#sending)
7. [__`success`__](#success)
8. [__`failed`__](#failed)

These states control which [slots](#slots) are rendered in the modal.

### `closed`

This is the default state and shows the button visibile when nothing
is happening

### `empty`

If the [`select-first`](#select-first) attribute is not set on
`<FileUploadViewer>`. This renders a modal with showing any slot
content the parent component might have included.

### `viewing`

Shown when at least one file has been selected. This renders a modal
with file viewer carousel plus any slot content the parent component
might have included.

### `confirmCancel`

Shown if the [`confirmCancel`](#confirmCancel) attribute is set.
This shows slot content with information asking the user to confirm
they want to cancel uploading the selected files.

> __Note:__ This is only shown if there is one or more valid file
>           selected to be uploaded. If there are no valid files the

### `confirmSubmit`

Shown if the [`confirm-complete`](#confirm-complete) attribute is set.
This shows information asking the user to confirm they want to upload
the selected files.

> __Note:__ This is only shown if there is one or more valid file
>           selected to be uploaded and no invalid files.

### `sending`

Shown if the [`file-sender`](#file-sender) attribute contains a async
function for sending files to the server and the user has confirmed
they want to send the files to the server.

### `success`

Shown if the [`file-sender`](#file-sender) attribute contains a async
function for sending files to the server and the `fileSender`
function has returned a success result.

### `failed`

Shown if the [`file-sender`](#file-sender) attribute contains a async
function for sending files to the server and the `fileSender`
function has returned a failed result.


## Useful links

### Publishing to NPM
* [How to Package and Distribute a Vue.js 3 Plugin on NPM](https://vueschool.io/articles/vuejs-tutorials/how-to-package-and-distribute-a-vue-js-3-plugin-on-npm/)
* [How to Create and Publish a Vue Component Library – 2023 Update](https://www.freecodecamp.org/news/how-to-create-and-publish-a-vue-component-library-update/)
* [Packaging Vue Components for npm](https://v2.vuejs.org/v2/cookbook/packaging-sfc-for-npm)
* [How to Create and Deploy a Vue Component Library to NPM](https://www.thisdot.co/blog/how-to-create-and-deploy-a-vue-component-library-to-npm)
* [Publishing a Vue 3 component on npm](https://blog.egmond.dev/vue-component-to-npm-package)
* [Publish a Vue Component to NPM // Vite and Vue 3](https://www.youtube.com/watch?v=5QV9wVc8c7g) (YouTube)
* [How To Create And Publish Your Own Vue 3 Component Library To NPM With Typescript And Vite](https://blog.ayitinya.me/articles/how-to-create-and-publish-vue-component-to-npm)
* [Convert a Single File Component Into a Vue Package and Publish It to NPM.](https://medium.com/easy-coding/convert-a-single-file-component-into-a-vue-library-and-publish-it-to-npm-b0f10f479a04)

### Image manipulation

For bandwidth reasons, I am using `image-blob-reduce` because it's
tiny (18kb). However, in the future I may switch to Photon because it's so
much faster and more powerful even though it's 20 times the size (367kb).

* [image-blob-reduce](https://github.com/nodeca/image-blob-reduce)
  * [NPM - image-blob-reduce](https://www.npmjs.com/package/image-blob-reduce)
  * [Pica](https://github.com/nodeca/pica)
* [Photon](https://silvia-odwyer.github.io/photon/)
  * [Image resize](https://docs.rs/photon-rs/latest/photon_rs/transform/fn.resize.html)
  * [Image rotate](https://docs.rs/photon-rs/latest/photon_rs/transform/fn.rotate.html)
  * [Using Photon on the Web](https://silvia-odwyer.github.io/photon/guide/using-photon-web/)
