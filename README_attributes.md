# `<FileUploadViewer>` Atributes

* [Introduction](README.md#introduction)
* [User work flow](README.md#user-work-flow)
* Attributes
  * [Required attributes](#required-attributes)
    * [`id`](#id)
    * [`label`](#label)
  * [Optional attributes](#optional-attributes)
    * [`accept`](#accept)
    * [`auto-exclude`](#auto-exclude)
    * [`confirm-cancel-btn-txt`](#confirm-cancel-btn-txt)
    * [`confirm-submit-btn-txt`](#confirm-submit-btn-txt)
    * [`confirm-cancel`](#confirm-cancel)
    * [`confirm-complete`](#confirm-complete)
    * [`file-sender`](#file-sender)
    * [`first-btn-text`](#upload-btn-text)
    * [`max-files`](#max-files)
    * [`max-pixels`](#max-pixels)
    * [`max-single`](#max-single)
    * [`max-total`](#max-total)
    * [`metadata-confirm`](#metadata-confirm)
    * [`min-files`](#min-files)
    * [`no-loop`](#no-loop)
    * [`no-resize`](#no-resize)
    * [`reorder`](#reorder)
    * [`select-first`](#select-first)
    * [`submit-btn-text`](#submit-btn-text)
    * [`first-btn-text`](#upload-btn-text)
* [Slots](README_slots.md)
  * [`<header>`](README_slots.md#header-slots)
  * [Body](README_slots.md#body-slots) (`<main>`)
  * [`<footer>`](README_slots.md#footer-slots)
  * [Buttons](README_slots.md#button-slots)
* [States](README.md#states)
* [Useful links](#useful-links)
* [Vite and VueJS + Typescript](README.vite.md)
---

## Required attributes


### `id`

|  Required  |    Type    |   Default    | Variable Name |
|------------|------------|--------------|---------------|
| _required_ | _{string}_ | _no default_ | `props.id`    |

ID of this component. Used to add unique IDs to all fields
and buttons within the component

> __Note:__ This ID will be prepended to button, input field
>       IDs to make sure those elements can be reused
>       else where in the code without duplication.



### `label`

|  Required  |    Type    |   Default    | Variable Name |
|------------|------------|--------------|---------------|
| _required_ | _{string}_ | _no default_ | `props.label` |

Label to (briefly) describe the purpose of the upload


---


## Optional attributes



### `accept`

|  Required  |    Type    |  Default                    |     Variable Name     |
|------------|------------|-----------------------------|-----------------------|
| _optional_ | _{string}_ | "png jpg webp pdf docx doc" | `props.uploadBtnIcon` |

List of file extensions matching file types the server will accept



### `auto-exclude`

|  Required  |    Type     | Default |     Variable Name     |
|------------|-------------|---------|-----------------------|
| _optional_ | _{boolean}_ | `FALSE` |  `props.autoExclude`  |

Whether or not to automatically exclude any files that cannot be
included in file upload.

By default user must deliberately remove any files that cannot be
uploaded. If `auto-exclude` is set invalid files will be silently
removed from the upload list.


### `confirm-cancel-btn-txt`

|  Required  |    Type    |    Default     |    Variable Name     |
|------------|------------|----------------|----------------------|
| _optional_ | _{string}_ | "Don't upload" | `props.cancelBtnTxt` |

Text for the button shown to the user asking them to confirm
they want to abandon the upload, (afterthey have clicked the
close dialogue button)

HTML content can be added using the
[`confirm-cancel-btn`](README_slots.md#confirm-cancel-btn-slot) slot.




### `confirm-submit-btn-txt`

|  Required  |    Type    |    Default     |     Variable Name     |
|------------|------------|----------------|-----------------------|
| _optional_ | _{string}_ | `"Send files"` | `props.confirmBtnTxt` |

Text for the button shown to the user asking them to confirm they
are ready to upload their selected files.

If [`confirm-submit`](#confirm-complete) is set, this is shown when
`<FileUploadViewer>` is in [`confirmSubmit`](README.md#confirmsubmit)
state.

Or

If [`confirm-submit`](#confirm-complete) is omitted or
`false`, it is shown when `<FileUploadViewer>` is in
[`viewing`](README.md#viewing) state, if there are no invalid files
blocking upload.

HTML content can be added using the
[`confirm-complete-btn`](README_slots.md#confirm-complete-btn-slot) slot.



### `confirm-cancel`

|  Required  |    Type    | Default |     Variable Name     |
|------------|------------|---------|-----------------------|
| _optional_ | _{string}_ |  `no`   | `props.confirmCancel` |

Whether or not the user must confirm they are sure they want to
cancel the file upload.

This is only relevant when `<FileUploadViewer>` is in `empty` or
`viewing` state.

Options are:

* `no`    - *[default]*
            The dialogue modal is automatically closed and any
            selected files will be removed from the upload list.
* `yes`   - The dialogue modal is automatically closed if the
            list of selected files is empty or has no valid
            files in it.
            If there is one or more valid files the user will be
            asked to confirm they want to abandon their upload
            attempt.
* `force` - Always ask the user to wish to confirm they want to
            abandon their upload attempt.



### `confirm-complete`

|  Required  |    Type     | Default  |      Variable Name      |
|------------|-------------|----------|-------------------------|
| _optional_ | _{boolean}_ | `false`  | `props.confirmComplete` |

Whether or not the user must confirm that they have selected all
the files they wish to upload and are ready to upload them.

By default, when the user clicks the "Upload" button with minimum
number of files selected and without errors



### `file-sender`

|  Required  |     Type     | Default |   Variable Name    |
|------------|--------------|---------|--------------------|
| _optional_ | _{function}_ | `null`  | `props.fileSender` |

An async function that sends files to the server and returns boolean
or string.

If `file-sender` is *not* null, `<FileUploadViewer>` will handle
rendering the loading and success/failed states. (Content for these
states can be managed via [slots](README_slots.md))

If `file-sender` *is* null, when the user confirms they wish to
upload their files `<FileUploadViewer>`  will emit a `submit`
event, with a value of
[FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList),
indicating that the pareent code should handle submitting the
selected files to the server.

`file-sender` has the form:

```ts
async (fileList: FileList) : boolean|string
```

`fileList` is a
[FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)
object, containing  one or more user selected
[File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects
to be sent to the server.

If the return value is boolean, `TRUE` indicates success and &
`FALSE` indicates failure. `<FileUploadViewer>`'s state will be
updated accordingly.

IF the return value is a string, failure is assumed.
`<FileUploadViewer>`'s state will be updated to `failed` and the
string will be rendered as an error message.



### `first-btn-txt`

|  Required  |    Type    |  Default   |     Variable Name     |
|------------|------------|------------|-----------------------|
| _optional_ | _{string}_ | `"Upload"` | `props.uploadBtnTxt` |

The text for the button the user first sees and uses to open
the full upload dialogue/widget.

Full HTML content can be added using the
[`first-btn`](README_slots.md#first-btn-slot) slot.




### `max-files`

|  Required  |        Type        | Default |   Variable Name   |
|------------|--------------------|---------|-------------------|
| _optional_ | _{string\|number}_ |   `1`   | `props.maxFiles`  |

Maximum number of files the user can upload at one time

* If `maxFiles` is set to zero (0) maximum is unlimited
(actual limit will be set to: 999).
* If `maxFiles` is negative orcannot be parsed as an integer,
the default (1) will be used

> __Note:__ __[`unlimited`](#unlimited) overrides `max-files`.__
>
> If you want to allow users to upload more than 999 files in one go,
> do __*NOT*__ use [`unlimited`](#unlimited).



### `max-pixels`

|  Required  |        Type        | Default  |   Variable Name   |
|------------|--------------------|----------|-------------------|
| _optional_ | _{string\|number}_ |  `0`  | `props.maxPixels` |

Maximum number of pixels an image can be in the largest dimension.
Used for validating individual files.

If any image file's largest dimension excedes the `max-pixels` size

0 = unlimited.

> __Note:__ You __*must*__ specify a non-zero for `max-pixels` and/or
>           [`max-single`](#max-single) if you wish to take advantage
>           of the image resizing capabilities of `<FileUploadViewer>`.



### `max-single`

|  Required  |        Type        |      Default      |   Variable Name   |
|------------|--------------------|-------------------|-------------------|
| _optional_ | _{string\|number}_ | "" (empty string) | `props.maxSingle` |

Maximum size a single file can be. Used for validating individual
files.

If the total file size of the upload excedes `max-total` the user
will be prevented from uploading until they've reduced the number
or size of the files being uploaded.

> __Note:__ If no unit is specified, Bytes are assumed

> __Note also:__ Unit type is case insensitive.

If value is empty string or numeric zero, maximum size of a single
file is assumed to be unlimited.

> __Note:__ You __*must*__ specify a non-zero for
>           [`max-pixels`](#max-pixels) amd/or `max-single` if you
>           wish to take advantage of the image resizing capabilities
>           of `<FileUploadViewer>`.



### `max-total`

|  Required  |        Type        |      Default      |   Variable Name   |
|------------|--------------------|-------------------|-------------------|
| _optional_ | _{string\|number}_ | "" (empty string) | `props.maxTotal`  |

Maximum total upload size for all files combined. Used for validating
upload size.

If the total file size of the upload excedes `max-total` the user
will be prevented from uploading until they've reduced the number
or size of the files being uploaded.

e.g. `36700160` or "35840kb" or "35MB"

> __Note:__ If no unit is specified, Bytes are assumed.

> __Note also:__ Unit type is case insensitive.

If value is empty string or numeric zero, maximum total upload size
is assumed to be unlimited.



### `metadata-confirm`

|  Required  |    Type     | Default |       Variable Name       |
|------------|-------------|---------|---------------------------|
| _optional_ | _{boolean}_ | `FALSE` | `props.metadataInConfirm` |

Whether or not to show metadata about the files being uploaded in
the confirmation screen.

By default when the user moves to the confirm submit state, they just
see content supplied by the parent component.
If `metadata-confirm` is present and true, a table of metadata about
the files being uploaded will be rendered below the
[confirm submit body content](README_slots.md#bodyconfirmsubmit).



### `min-files`

|  Required  |        Type        | Default  |   Variable Name   |
|------------|--------------------|----------|-------------------|
| _optional_ | _{string\|number}_ |   `0`    | `props.minFiles`  |

Minimum number of files the user must upload.

If `minFiles` is set to zero (0), the user is not required to upload
any files.

> __Note:__ If the `required` attribute is set and `minFiles`
>           is set to zero (0), `minFiles` will be assumed to
>           be one (1).
>           If `minFiles is greater than 1 and fewer files are
>           set than required by `minFiles`, `<FileUploadViewer>`
>           will be assumed to be invalid.

* If `minFiles` is negative or cannot be parsed as an integer,
  * If the `required` attribute is set the required minimum, one
    (1) will be used.
  * If the `required` attribute is __*not*__ set the default,
    zero (0) will be used.



### `no-loop`

|  Required  |    Type     | Default | Variable Name  |
|------------|-------------|---------|----------------|
| _optional_ | _{boolean}_ | `FALSE` | `props.noLoop` |

Whether or not to loop the carousel around if the user tries
to focus beyond the limit of the carousel

e.g. Prevent moving the focus right of the last item,
or left of the first item

The default behaviour of the carousel is to loop back to the
begining when moving the focus item to afterthe last item,
orloop to the end when moving.



### `no-resize`

|  Required  |    Type     | Default |  Variable Name   |
|------------|-------------|---------|------------------|
| _optional_ | _{boolean}_ | `FALSE` | `props.noResize` |

By default image files that are too large either by file size or
pixel size are automatically resized so uploaded files comply with
size constraints. This can lead to poor quality images being uploaded
in some instances. If you find this is happening to you, you can
disable image resizing.

If you've set [`max-pixels`](#max-pixels) or
[`max-single`](#max-single) and any selected files don't fall within
these limitations, the user will be prevented from uploading until
they choose different files.



### `reorder`

|  Required  |    Type     | Default |  Variable Name  |
|------------|-------------|---------|-----------------|
| _optional_ | _{boolean}_ | `FALSE` | `props.reorder` |

Whether or not the user can reorder files/images within the
list

By default the selected order is the order the files get are found in
the operating system or the order they are selected by the user if files
are added one by one. If `reorder` is `TRUE`, the user can
change the order before the files are uploaded.



### `required`

|  Required  |    Type     | Default |  Variable Name  |
|------------|-------------|---------|-----------------|
| _optional_ | _{boolean}_ | `FALSE` | `props.required` |

Whether or not the user must upload at least 1 file.

* If set, default `minFiles` will be 1
* If is __*not*__ set, default `minFiles` will be 0



### `select-first`

|  Required  |    Type     | Default |    Variable Name    |
|------------|-------------|---------|---------------------|
| _optional_ | _{boolean}_ | `FALSE` | `props.selectFirst` |

Whether or not to show the empty UI screen orget the user to
select files without showing the empty UI screen.

By default, the user is shown the [`empty`](README.md#empty) state
view before they're are asked to select files. By including the
attribute `select-first`, the user enter the system's file selection
user interface and asked to select files.



### `submit-btn-txt`

|  Required  |    Type    |  Default   |     Variable Name     |
|------------|------------|------------|-----------------------|
| _optional_ | _{string}_ | `"Upload"` | `props.uploadBtnTxt` |

The text for the button the user sees when they have selected files
to upload. If [`confirm-complete`](#confirm-complete) is present and
true, Clicking on this button will take them to the upload
confirmation state. Otherwise clicking on the button will trigger
the upload.

Plain text content can be added using the
[`submit-btn`](README_slots.md#submit-btn) slot.

