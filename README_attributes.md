# `<FileUploadViewer>` Atributes

* [States](README.md#states)
* Attributes
  * [Required attributes](#required-attributes)
  * [Optional attributes](#optional-attributes)
* [Slots](README_slots.md)
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


### `cancel-btn-txt`

|  Required  |    Type    |  Default   |    Variable Name     |
|------------|------------|------------|----------------------|
| _optional_ | _{string}_ | "" (empty) | `props.cancelBtnTxt` |

Text for the button shown to the userasking them to confirm
they want to abandon the upload, (afterthey have clicked the
close dialogue button)
/
cancelBtnTxt: { type: String, required: false, default: 'Discard upload' },

/**
Text to show userwhen asking them to confirm they want to
abandon the upload



### `confirm-btn-txt`

|  Required  |    Type    |    Default     |     Variable Name     |
|------------|------------|----------------|-----------------------|
| _optional_ | _{string}_ | `"Send files"` | `props.confirmBtnTxt` |

Text for the button shown to the user asking them to confirm they
want to upload their selected files.

If [`confim-complete`](#confirm-complete) is set, this is shown when
`<FileUploadViewer>` is in [`confirmSubmit`](README.md#confirmsubmit)
state.

Or

If [`confim-complete`](#confirm-complete) is omitted or
`false`, it is shown when `<FileUploadViewer>` is in
[`viewing`](README.md#viewing) state, if there are no invalid files
blocking upload.



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

By default, when the user clicks the "Upload" button with minimum number of files selected and without errors



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



### `max-files`

|  Required  |       Type        | Default |   Variable Name   |
|------------|-------------------|---------|-------------------|
| _optional_ | _{string|number}_ |   `1`   | `props.maxFiles`  |

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

|  Required  |       Type        | Default  |   Variable Name   |
|------------|-------------------|----------|-------------------|
| _optional_ | _{string|number}_ |  `0`  | `props.maxPixels` |

Maximum numberof pixels an image can be in any dimension.



### `max-single`

|  Required  |    Type    | Default |   Variable Name   |
|------------|------------|---------|-------------------|
| _optional_ | _{string}_ | `"5MB"` | `props.maxSingle` |

Maximum size a single file can be

> __Note:__ If no unit is specified, Bytes are assumed



### `max-total`

|  Required  |    Type    | Default  |  Variable Name   |
|------------|------------|----------|------------------|
| _optional_ | _{string}_ | `"15MB"` | `props.maxTotal` |

Maximum total upload size forall files combined

> __Note:__ If no unit is specified, Bytes are assumed



### `min-files`

|  Required  |       Type        | Default  |   Variable Name   |
|------------|-------------------|----------|-------------------|
| _optional_ | _{string|number}_ |   `1`    | `props.minFiles`  |

Minimum numberof files the usermust upload



### `noloop`

|  Required  |    Type     | Default | Variable Name  |
|------------|-------------|---------|----------------|
| _optional_ | _{boolean}_ | `FALSE` | `props.noloop` |

Whether or not to loop the carousel around if the usertries
to focus beyond the limit of the carousel

e.g. Prevent moving the focus right of the last item,
orleft of the first item

The default behaviour of the carousel is to loop back to the
begining when moving the focus item to afterthe last item,
orloop to the end when moving.



### `reorder`

|  Required  |    Type     | Default |  Variable Name  |
|------------|-------------|---------|-----------------|
| _optional_ | _{boolean}_ | `FALSE` | `props.reorder` |

Whether or not the user can reorder files/images within the
list

By default the selected order is the order the files get are found in
the operating system or that they are selected by the user if files
are added one by one. If `reorder` is `TRUE`, then the user can
change the order before the files are uploaded.



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



### `unlimited`

|  Required  |    Type     | Default |   Variable Name   |
|------------|-------------|---------|-------------------|
| _optional_ | _{boolean}_ | `FALSE` | `props.unlimited` |

List of file extensions matching file types the serverwill
accept



### `upload-btn-class`

|  Required  |    Type    |  Default   |     Variable Name      |
|------------|------------|------------|------------------------|
| _optional_ | _{string}_ | "" (empty) | `props.uploadBtnClass` |

The text forthe button the userfirst sees and uses to open
the full upload dialogue/widget



### `upload-btn-icon`

|  Required  |    Type    |  Default   |     Variable Name     |
|------------|------------|------------|-----------------------|
| _optional_ | _{string}_ | "" (empty) | `props.uploadBtnIcon` |

The text forthe button the userfirst sees and uses to open
the full upload dialogue/widget



### `upload-btn-text`

|  Required  |    Type    |  Default   |     Variable Name     |
|------------|------------|------------|-----------------------|
| _optional_ | _{string}_ | `"Upload"` | `props.uploadBtnText` |

The text forthe button the userfirst sees and uses to open
the full upload dialogue/widget



### `upload-confirm-text`

|  Required  |    Type    |  Default   |       Variable Name       |
|------------|------------|------------|---------------------------|
| _optional_ | _{string}_ | "" (empty) | `props.uploadConfirmText` |

Text to show the userwhen asking to confirm they want to
upload the selected files

Normally this would be a paragraphs explaining thanking them
foruploading the files and explaining what will be done with
the files once received.

