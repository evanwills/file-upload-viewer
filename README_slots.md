# `<FileUploadViewer>` Slots

* [Introduction](README.md#introduction)
* [User work flow](README.md#user-work-flow)
* [Attributes](README_attributes.md)
  * [Required attributes](README_attributes.md#required-attributes)
  * [Optional attributes](README_attributes.md#optional-attributes)
* Slots
  * [`<header>`](#header-slots)
    * [`headerAll`](#headerall-multi-state-slot) (multi-state slot)
    * [`headerMain`](#headermain-multi-state-slot) (multi-state slot)
    * [`headerEmpty`](#headerempty)
    * [`headerViewing`](#headerviewing)
    * [`headerConfirm`](#headerconfirm) (multi-state slot)
    * [`headerConfirmCancel`](#headerconfirmcancel)
    * [`headerConfirmSubmit`](#headerconfirmsubmit)
    * [`headerSending`](#headersending)
    * [`headerComplete`](#headercomplete-multi-state-slot) (multi-state slot)
    * [`headerSuccess`](#headersuccess)
    * [`headerFailed`](#headerfailed)
  * [Body](#body-slots)
    * [`bodyAll`](#bodyall-multi-state-slot) (multi-state slot)
    * [`bodyMain`](#bodymain-multi-state-slot) (multi-state slot)
    * [`bodyEmpty`](#bodyempty)
    * [`bodyViewing`](#bodyviewing)
    * [`bodyConfirm`](#bodyconfirm) (multi-state slot)
    * [`bodyConfirmCancel`](#bodyconfirmcancel)
    * [`bodyConfirmSubmit`](#bodyconfirmsubmit)
    * [`bodySending`](#bodysending)
    * [`bodyComplete`](#bodycomplete-multi-state-slot) (multi-state slot)
    * [`bodySuccess`](#bodysuccess)
    * [`bodyFailed`](#bodyfailed)
  * [`<footer>`](#footer-slots)
    * [`footerAll`](#footerall-multi-state-slot) (multi-state slot)
    * [`footerMain`](#footermain-multi-state-slot) (multi-state slot)
    * [`footerEmpty`](#footerempty)
    * [`footerViewing`](#footerviewing)
    * [`footerConfirm`](#footerconfirm) (multi-state slot)
    * [`footerConfirmCancel`](#footerconfirmcancel)
    * [`footerConfirmSubmit`](#footerconfirmsubmit)
    * [`footerSending`](#footersending)
    * [`footerComplete`](#footercomplete-multi-state-slot) (multi-state slot)
    * [`footerSuccess`](#footersuccess)
    * [`footerFailed`](#footerfailed)
  * [Buttons](#button-slots)
    * [`first-btn`](#first-btn-slot)
    * [`submit-btn`](#submit-btn-slot)
    * [`confirm-cancel-btn`](#confirm-cancel-btn-slot)
    * [`confirm-complete-btn`](#confirm-complete-btn-slot)
* [States](README.md#states)
* [Useful links](#useful-links)
* [Vite and VueJS + Typescript](README.vite.md)

---

`<FileUploadViewer>` has three main content blocks for rendering
information to the user: [`<header>`](#header-slots),
[Body](#body-slots) (`<main>`) and [`<footer>`](#footer-slots).
Each block renders a different content for the current state. Because
this could be annoying to manage from a developer's perspective,
there are some multi-state slots that can be rendered for multiple
states.



## `<header>` slots

Header slots in `<FileUploadViewer>` provide a place to put heading
content within the `<FileUploadViewer>` modal.


### `headerAll` (multi-state slot)

If the named slot: `headerAll` is present and not empty, it will
always be rendered regardless of whether any other header slots are
present.

> __Note:__ If `headerAll` is present and not empty
>           __*no other header slots will ever be rendered*__


### `headerMain` (multi-state slot)

If the named slot: `headerMain` is present and not empty it will be
rendered while `<FileUploadViewer>` is in [`empty`](README.md#empty) or
[`viewing`](README.md#viewing) states.

> __Note:__ If the named slot [`headerAll`](#headerall-multi-state-slot)
>           is present & not empty `headerAll` will be rendered
>           instead of `headerMain`

> __Note also:__ If `headerMain` is present & not
>           empty, [`headerEmpty`](#headerempty) &
>           [`headerViewing`](#headerbiewing) will
>           __*never be rendered*__

### `headerEmpty`

`headerEmpty` Should be used for the heading of the `<FileUploadViewer>`
modal.

If the named slot: `headerEmpty` is present and not empty and
`<FileUploadViewer>` is in [`empty`](README.md#empty) state, it will be
rendered in the modal.

> __Note:__ If [`headerAll`](#headerall-multi-state-slot) or
>           [`headerMain`](#headermain-multi-state-slot) are present,
>           `headerEmpty` will __*not be rendered*__


### `headerViewing`

`headerViewing` Should be used for the heading of the `<FileUploadViewer>`
modal.

If the named slot: `headerViewing` is present and not empty and
`<FileUploadViewer>` is in [`viewing`](README.md#viewing) state, it will be
rendered in the modal.

> __Note:__ If [`headerAll`](#headerall-multi-state-slot) or
>           [`headerMain`](#headermain-multi-state-slot) are present,
>           `headerViewing` will __*not be rendered*__


### `headerConfirm` (multi-state slot)

`headerConfirm` Should be used when asking the user to confirm the
next (cancel/complete) action `<FileUploadViewer>`
modal.

If the named slot: `headerConfirm` is present and not empty and
`<FileUploadViewer>` is in [`confirmcancel`](README.md#confirmcancel)
& [`confirmcomplete`](README.md#confirmsubmit) state, it will be
rendered in the modal.

> __Note:__ `headerConfirm` will __*not be rendered*__ If
>           [`headerAll`](#headerall-multi-state-slot) is present, and
>           not empty.

> __Note also:__ If `headerConfirm` is present and not empty, neither
>           [`headerConfirmCancel](#headerconfirmcancel)


### `headerConfirmCancel`

`headerConfirmCancel` should be used when asking the user to confirm
they want to cancel their upload attempt.

If the named slot: `headerConfirmCancel` is present and not empty and
`<FileUploadViewer>` is in [`confirmCancel`](README.md#confirmcancel) state,
it will be rendered in the modal.

> __Note:__ `headerConfirmCancel` will __*not be rendered*__ if
>           either [`headerAll`](#headerall-multi-state-slot) or
>           [`headerConfirm`](#headerconfirm-multi-state-slot) are
>           present and not empty.


### `headerConfirmSubmit`

`headerConfirmSubmit` should be used when asking the user to confirm
they want to cancel their upload attempt.

If the named slot: `headerConfirmSubmit` is present and not empty and
`<FileUploadViewer>` is in [`confirmSubmit`](README.md#confirmsubmit)
state, it will be rendered in the modal.

> __Note:__ `headerConfirmSubmit` will __*not be rendered*__ if
>           either [`headerAll`](#headerall-multi-state-slot) or
>           [`headerConfirm`](#headerconfirm-multi-state-slot) are
>           present and not empty.


### `headerSending`

`headerSending` should be used while the user is waiting for their
file selection to be submitted to the server.

If the named slot: `headerSending` is present and not empty and
`<FileUploadViewer>` is in [`sending`](README.md#sending)
state, it will be rendered in the modal.

> __Note:__ `headerConfirmSubmit` will __*not be rendered*__ if
>           either [`headerAll`](#headerall-multi-state-slot) is
>           present and not empty.


### `headerComplete` (multi-state slot)

`headerComplete` Should be used when the file upload has completed
and `<FileUploadViewer>` is in either [`success`](README.md#success)
or [`failed`](README.md#failed) states.

> __Note:__ I don't think this is a good idea but it was easy to implement.

If the named slot: `headerComplete` is present and not empty and
`<FileUploadViewer>` is in [`success`](README.md#success) or
& [`failed`](README.md#failed) state, it will be rendered in the
modal.

> __Note:__ `headerComplete` will __*not be rendered*__ If
>           [`headerAll`](#headerall-multi-state-slot) is present,
>           and not empty.

> __Note also:__ If `headerConfirm` is present and not
>           empty, neither [`headerSuccess](#headersuccess)
>           nor [`headerFailed](#headerfailed) will
>           __*not be rendered*__


### `headerSuccess`

`headerSuccess` should be used to let the user know that their file
upload was successful.

If the named slot: `headerSuccess` is present and not empty and
`<FileUploadViewer>` is in [`success`](README.md#success)
state, it will be rendered in the modal.

> __Note:__ `headerSuccess` will __*not be rendered*__ if
>           either [`headerAll`](#headerall-multi-state-slot) or
>           [`headerComplete`](#headercomplete-multi-state-slot) are
>           present and not empty.


### `headerFailed`

`headerFailed` should be used to let the user know that their file
upload was successful.

If the named slot: `headerFailed` is present and not empty and
`<FileUploadViewer>` is in [`failed`](README.md#failed)
state, it will be rendered in the modal.

> __Note:__ `headerFailed` will __*not be rendered*__ if
>           either [`headerAll`](#headerall-multi-state-slot) or
>           [`headerComplete`](#headercomplete-multi-state-slot) are
>           present and not empty.

---

## Body slots

Body slots in `<FileUploadViewer>` provide a place to put body
content within the `<FileUploadViewer>` modal.

> __Note:__ While in [`viewing`](README.md#viewing) state, the file
>           preview carousel is always rendered. If present, body
>           slots will be rendered above the file preview carousel.


### `bodyAll` (multi-state slot)

If the named slot: `bodyAll` is present and not empty, it will
always be rendered regardless of whether any other body slots are
present.

> __Note:__ If `bodyAll` is present and not empty
>           __*no other body slots will ever be rendered*__


### `bodyMain` (multi-state slot)

`bodyMain` should be used for content helping the user decide which
files they should select for uploading.

If the named slot: `bodyMain` is present and not empty it will be
rendered while `<FileUploadViewer>` is in [`empty`](README.md#empty) or
[`viewing`](README.md#viewing) states.

> __Note:__ If the named slot [`bodyAll`](#bodyall-multi-state-slot)
>           is present & not empty `bodyAll` will be rendered
>           instead of `bodyMain`

> __Note also:__ If `bodyMain` is present & not
>           empty, [`bodyEmpty`](#bodyempty) &
>           [`bodyViewing`](#bodybiewing) will
>           __*never be rendered*__

### `bodyEmpty`

`bodyEmpty` Should be used for content helping the user decide which
files they should select for uploading.

If the named slot: `bodyEmpty` is present and not empty and
`<FileUploadViewer>` is in [`empty`](README.md#empty) state, it will be
rendered in the modal.

> __Note:__ If [`bodyAll`](#bodyall-multi-state-slot) or
>           [`bodyMain`](#bodymain-multi-state-slot) are present,
>           `bodyEmpty` will __*not be rendered*__


### `bodyViewing`

`bodyViewing` should be used for content helping the user decide
which files they should select for uploading.

If the named slot: `bodyViewing` is present and not empty and
`<FileUploadViewer>` is in [`viewing`](README.md#viewing) state, it
will be rendered in the modal.

> __Note:__ If [`bodyAll`](#bodyall-multi-state-slot) or
>           [`bodyMain`](#bodymain-multi-state-slot) are present,
>           `bodyViewing` will __*not be rendered*__


### `bodyConfirm` (multi-state slot)

`bodyConfirm` Should be used when asking the user to confirm the
next (cancel/complete) action `<FileUploadViewer>`
modal.

If the named slot: `bodyConfirm` is present and not empty and
`<FileUploadViewer>` is in [`confirmcancel`](README.md#confirmcancel)
& [`confirmcomplete`](README.md#confirmsubmit) state, it will be
rendered in the modal.

> __Note:__ `bodyConfirm` will __*not be rendered*__ If
>           [`bodyAll`](#bodyall-multi-state-slot) is present, and
>           not empty.

> __Note also:__ If `bodyConfirm` is present and not empty, neither
>           [`bodyConfirmCancel](#bodyconfirmcancel)


### `bodyConfirmCancel`

`bodyConfirmCancel` should be used when asking the user to confirm
they want to cancel their upload attempt.

If the named slot: `bodyConfirmCancel` is present and not empty and
`<FileUploadViewer>` is in [`confirmCancel`](README.md#confirmcancel) state,
it will be rendered in the modal.

> __Note:__ `bodyConfirmCancel` will __*not be rendered*__ if
>           either [`bodyAll`](#bodyall-multi-state-slot) or
>           [`bodyConfirm`](#bodyconfirm-multi-state-slot) are
>           present and not empty.


### `bodyConfirmSubmit`

`bodyConfirmSubmit` should be used when asking the user to confirm
they want to cancel their upload attempt.

If the named slot: `bodyConfirmSubmit` is present and not empty and
`<FileUploadViewer>` is in [`confirmSubmit`](README.md#confirmsubmit)
state, it will be rendered in the modal.

> __Note:__ `bodyConfirmSubmit` will __*not be rendered*__ if
>           either [`bodyAll`](#bodyall-multi-state-slot) or
>           [`bodyConfirm`](#bodyconfirm-multi-state-slot) are
>           present and not empty.


### `bodySending`

`bodySending` should be used while the user is waiting for their
file selection to be submitted to the server.

If the named slot: `bodySending` is present and not empty and
`<FileUploadViewer>` is in [`sending`](README.md#sending)
state, it will be rendered in the modal.

> __Note:__ `bodyConfirmSubmit` will __*not be rendered*__ if
>           either [`bodyAll`](#bodyall-multi-state-slot) is
>           present and not empty.


### `bodyComplete` (multi-state slot)

`bodyComplete` Should be used when the file upload has completed
and `<FileUploadViewer>` is in either [`success`](README.md#success)
or [`failed`](README.md#failed) states.

> __Note:__ I don't think this is a good idea but it was easy to implement.

If the named slot: `bodyComplete` is present and not empty and
`<FileUploadViewer>` is in [`success`](README.md#success) or
& [`failed`](README.md#failed) state, it will be rendered in the
modal.

> __Note:__ `bodyComplete` will __*not be rendered*__ If
>           [`bodyAll`](#bodyall-multi-state-slot) is present,
>           and not empty.

> __Note also:__ If `bodyConfirm` is present and not
>           empty, neither [`bodySuccess](#bodysuccess)
>           nor [`bodyFailed](#bodyfailed) will
>           __*not be rendered*__


### `bodySuccess`

`bodySuccess` should be used to let the user know that their file
upload was successful.

If the named slot: `bodySuccess` is present and not empty and
`<FileUploadViewer>` is in [`success`](README.md#success)
state, it will be rendered in the modal.

> __Note:__ `bodySuccess` will __*not be rendered*__ if
>           either [`bodyAll`](#bodyall-multi-state-slot) or
>           [`bodyComplete`](#bodycomplete-multi-state-slot) are
>           present and not empty.


### `bodyFailed`

`bodyFailed` should be used to let the user know that their file
upload was successful.

If the named slot: `bodyFailed` is present and not empty and
`<FileUploadViewer>` is in [`failed`](README.md#failed)
state, it will be rendered in the modal.

> __Note:__ `bodyFailed` will __*not be rendered*__ if
>           either [`bodyAll`](#bodyall-multi-state-slot) or
>           [`bodyComplete`](#bodycomplete-multi-state-slot) are
>           present and not empty.


----

## `<footer>` slots

footer slots in `<FileUploadViewer>` provide a place to put footer
content within the `<FileUploadViewer>` modal.

> __Note:__ While in [`empty`](README.md#empty),
>           [`viewing`](README.md#viewing),
>           [`confirmCancel`](README.md#confirmcancel) &
>           [`confirmSubmit`](README.md#confirmsubmit) states,
>           buttons for various actions will be rendered above the
>           footer content.

> __Note also:__ Personally, I don't think I would ever place any
>           content in the modal footer of `<FileUploadViewer>`
>           because, most of the time, buttons will be there.
>           However, it was very easy to implement so it's here.
>           Hopefully someone will finds it useful.

### `footerAll` (multi-state slot)

If the named slot: `footerAll` is present and not empty, it will
always be rendered regardless of whether any other footer slots are
present.

> __Note:__ If `footerAll` is present and not empty
>           __*no other footer slots will ever be rendered*__


### `footerMain` (multi-state slot)

`footerMain` should be used for content helping the user decide which
files they should select for uploading.

If the named slot: `footerMain` is present and not empty it will be
rendered while `<FileUploadViewer>` is in [`empty`](README.md#empty) or
[`viewing`](README.md#viewing) states.

> __Note:__ If the named slot [`footerAll`](#footerall-multi-state-slot)
>           is present & not empty `footerAll` will be rendered
>           instead of `footerMain`

> __Note also:__ If `footerMain` is present & not
>           empty, [`footerEmpty`](#footerempty) &
>           [`footerViewing`](#footerbiewing) will
>           __*never be rendered*__

### `footerEmpty`

`footerEmpty` Should be used for content helping the user decide which
files they should select for uploading.

If the named slot: `footerEmpty` is present and not empty and
`<FileUploadViewer>` is in [`empty`](README.md#empty) state, it will be
rendered in the modal.

> __Note:__ If [`footerAll`](#footerall-multi-state-slot) or
>           [`footerMain`](#footermain-multi-state-slot) are present,
>           `footerEmpty` will __*not be rendered*__


### `footerViewing`

`footerViewing` should be used for content helping the user decide
which files they should select for uploading.

If the named slot: `footerViewing` is present and not empty and
`<FileUploadViewer>` is in [`viewing`](README.md#viewing) state, it
will be rendered in the modal.

> __Note:__ If [`footerAll`](#footerall-multi-state-slot) or
>           [`footerMain`](#footermain-multi-state-slot) are present,
>           `footerViewing` will __*not be rendered*__


### `footerConfirm` (multi-state slot)

`footerConfirm` Should be used when asking the user to confirm the
next (cancel/complete) action `<FileUploadViewer>`
modal.

If the named slot: `footerConfirm` is present and not empty and
`<FileUploadViewer>` is in [`confirmcancel`](README.md#confirmcancel)
& [`confirmcomplete`](README.md#confirmsubmit) state, it will be
rendered in the modal.

> __Note:__ `footerConfirm` will __*not be rendered*__ If
>           [`footerAll`](#footerall-multi-state-slot) is present, and
>           not empty.

> __Note also:__ If `footerConfirm` is present and not empty, neither
>           [`footerConfirmCancel](#footerconfirmcancel)


### `footerConfirmCancel`

`footerConfirmCancel` should be used when asking the user to confirm
they want to cancel their upload attempt.

If the named slot: `footerConfirmCancel` is present and not empty and
`<FileUploadViewer>` is in [`confirmCancel`](README.md#confirmcancel) state,
it will be rendered in the modal.

> __Note:__ `footerConfirmCancel` will __*not be rendered*__ if
>           either [`footerAll`](#footerall-multi-state-slot) or
>           [`footerConfirm`](#footerconfirm-multi-state-slot) are
>           present and not empty.


### `footerConfirmSubmit`

`footerConfirmSubmit` should be used when asking the user to confirm
they want to cancel their upload attempt.

If the named slot: `footerConfirmSubmit` is present and not empty and
`<FileUploadViewer>` is in [`confirmSubmit`](README.md#confirmsubmit)
state, it will be rendered in the modal.

> __Note:__ `footerConfirmSubmit` will __*not be rendered*__ if
>           either [`footerAll`](#footerall-multi-state-slot) or
>           [`footerConfirm`](#footerconfirm-multi-state-slot) are
>           present and not empty.


### `footerSending`

`footerSending` should be used while the user is waiting for their
file selection to be submitted to the server.

If the named slot: `footerSending` is present and not empty and
`<FileUploadViewer>` is in [`sending`](README.md#sending)
state, it will be rendered in the modal.

> __Note:__ `footerConfirmSubmit` will __*not be rendered*__ if
>           either [`footerAll`](#footerall-multi-state-slot) is
>           present and not empty.


### `footerComplete` (multi-state slot)

`footerComplete` Should be used when the file upload has completed
and `<FileUploadViewer>` is in either [`success`](README.md#success)
or [`failed`](README.md#failed) states.

> __Note:__ I don't think this is a good idea but it was easy to implement.

If the named slot: `footerComplete` is present and not empty and
`<FileUploadViewer>` is in [`success`](README.md#success) or
& [`failed`](README.md#failed) state, it will be rendered in the
modal.

> __Note:__ `footerComplete` will __*not be rendered*__ If
>           [`footerAll`](#footerall-multi-state-slot) is present,
>           and not empty.

> __Note also:__ If `footerConfirm` is present and not
>           empty, neither [`footerSuccess](#footersuccess)
>           nor [`footerFailed](#footerfailed) will
>           __*not be rendered*__


### `footerSuccess`

`footerSuccess` should be used to let the user know that their file
upload was successful.

If the named slot: `footerSuccess` is present and not empty and
`<FileUploadViewer>` is in [`success`](README.md#success)
state, it will be rendered in the modal.

> __Note:__ `footerSuccess` will __*not be rendered*__ if
>           either [`footerAll`](#footerall-multi-state-slot) or
>           [`footerComplete`](#footercomplete-multi-state-slot) are
>           present and not empty.


### `footerFailed`

`footerFailed` should be used to let the user know that their file
upload was successful.

If the named slot: `footerFailed` is present and not empty and
`<FileUploadViewer>` is in [`failed`](README.md#failed)
state, it will be rendered in the modal.

> __Note:__ `footerFailed` will __*not be rendered*__ if
>           either [`footerAll`](#footerall-multi-state-slot) or
>           [`footerComplete`](#footercomplete-multi-state-slot) are
>           present and not empty.


---

## Button slots


`<FileUploadViewer>` also allows you to customise the HTML content of
the main action buttons:
  [`first-btn`](#first-btn-slot),
  [`submit-btn`](#submit-btn-slot),
  [`confirm-cancel-btn`](#confirm-cancel-btn-slot) &
  [`confirm-complete-btn`](#confirm-complete-btn-slot).

It is common for buttons to include icons along with (or instead of)
text These slots allow you to do just that.

Note if you only want simple text content, then use
`<FileUploadViewer` attribute for the given button.


### `first-btn` slot

HTML content for the button the user first sees and uses to open
the full upload dialogue/widget.

Plain text content can be added using the
[`first-btn-text`](README_attributes.md#first-btn-text) attribute.


### `submit-btn` slot

HTML content for the button the user sees when they have selected files
to upload. If [`confirm-complete`](#confirm-complete) is present and
true, Clicking on this button will take them to the upload
confirmation state. Otherwise clicking on the button will trigger
the upload.

Plain text content can be added using the
[`submit-btn-text`](README_attributes.md#submit-btn-text) attribute.


### `confirm-cancel-btn` slot

HTML content for the button the user sees when they have selected files
to upload. If [`confirm-complete`](#confirm-complete) is present and
true, Clicking on this button will take them to the upload
confirmation state. Otherwise clicking on the button will trigger
the upload.

Plain text content can be added using the
[`cancel-btn-txt`](README_attributes.md#cancel-btn-txt) attribute.


### `confirm-submit-btn` slot

HTML content for the button shown to the user asking them to confirm they
are ready to upload their selected files.

If [`confim-complete`](#confirm-complete) is set, this is shown when
`<FileUploadViewer>` is in [`confirmSubmit`](README.md#confirmsubmit)
state.

Or

If [`confim-complete`](#confirm-complete) is omitted or
`false`, it is shown when `<FileUploadViewer>` is in
[`viewing`](README.md#viewing) state, if there are no invalid files
blocking upload.

Plain text content can be added using the
[`confirm-submit-btn-txt`](README_attributes.md#confirm-submit-btn-txt) attribute.
