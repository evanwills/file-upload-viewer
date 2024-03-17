# `<FileUploadViewer>`

* [States](#states)
* [Attributes](README_attributes.md)
  * [Required attributes](README_attributes.md#required-attributes)
  * [Optional attributes](README_attributes.md#optional-attributes)
* [Slots](README_slots.md)
  * [`<header>`](README_slots.md#header-slots)
  * [`<main>`](README_slots.md#main-slots)
  * [`<footer>`](README_slots.md#footer-slots)
* [Useful links](#useful-links)
* [Vite and VueJS + Typescript](README.vite.md)
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

* [Photon](https://silvia-odwyer.github.io/photon/)
* [Image resize](https://docs.rs/photon-rs/latest/photon_rs/transform/fn.resize.html)
* [Image rotate](https://docs.rs/photon-rs/latest/photon_rs/transform/fn.rotate.html)
* [Using Photon on the Web](https://silvia-odwyer.github.io/photon/guide/using-photon-web/)
