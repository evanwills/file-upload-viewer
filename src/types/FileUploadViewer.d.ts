import { ImageBlobReduce } from "./image-blob-reduce"

export type TFileSender = (fileList : FileList) => Promise<boolean|string>;

export interface IFileUploadViewerUserProps {
  /**
   * List of file extensions matching file types the server will
   * accept
   *
   * Default: 'png jpg webp pdf docx doc'
   */
  accept?: string,

  /**
   * Whether or not to automatically exclude any files that cannot
   * be included in file upload.
   *
   * By default user must deliberately remove any files that
   * cannot be uploaded. If `auto-exclude` is set invalid files will
   * be silently removed from the upload list.
   */
  autoExclude?: boolean,

  /**
   * Text for the button shown to the user asking them to confirm
   * they want to abandon the upload, (after they have clicked the
   * close dialogue button)
   */
  cancelBtnTxt?: string,

  /**
   * Text for the button shown to the user asking them to confirm
   * they want to upload their selected files.
   *
   * If `confim-complete` is set, this is shown when `<FileUploadViewer>`
   * is in `confirmSubmit` state.
   *
   * Or
   *
   * If `confim-complete` is omitted or `FALSE`, it is shown when
   * `<FileUploadViewer>` is in `viewing` state, if there are no
   * invalid files blocking upload.
   */
  confirmBtnTxt?: string,

  /**
   * Whether or not the user must confirm they are sure they want to
   * cancel the file upload
   *
   * By default, when the user clicks the close button or causes the
   * dialog to close, it just closes and all data is lost.
   * If the `confirm-cancle` attribute is set, the user will be asked
   * to confirm that they really want to cancel the upload
   */
  confirmCancel?: string,

  /**
   * Whether or not the user must confirm that they have selected all
   * the files they wish to upload and are ready to upload them.
   *
   * By default, when the user clicks the "Upload" button with minimum
   * number of files selected and without errors
   * dialog to close, it just closes and all data is lost.
   * If the `confirm-cancle` attribute is set, the user will be asked
   * to confirm that they really want to cancel the upload
   */
  confirmComplete?: false,

  /**
   * An async function that sends files to the server and returns
   * boolean or string.
   *
   * If `file-sender` is *not* null, `<FileUploadViewer>` will handle
   * rendering the loading and success/failed states. (Content for
   * these states can be managed via slots
   *
   * If `file-sender` *is* null, when the user confirms they wish to
   * upload their files `<FileUploadViewer>`  will emit a `submit`
   * event, with a value of
   * [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList),
   * indicating that the pareent code should handle submitting the
   * selected files to the server.
   *
   * `file-sender` has the form:
   * ```ts
   * async (fileList: FileList) : boolean|string
   * ```
   *
   * `fileList` is a
   * [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)
   * object, containing  one or more user selected
   * [File](https://developer.mozilla.org/en-US/docs/Web/API/File) objects
   * to be sent to the server.
   *
   * If the return value is boolean, `TRUE` indicates success and &
   * `FALSE` indicates failure. `<FileUploadViewer>`'s state will be
   * updated accordingly.
   *
   * IF the return value is a string, failure is assumed.
   * `<FileUploadViewer>`'s state will be updated to `failed` and the
   * string will be rendered as an error message.
   */
  fileSender?: TFileSender|null,

  /**
   * ID of this component. Used to add unique IDs to all fields
   * and buttons within the component
   *
   * > __Note:__ This ID will be prepended to button, input field
   * >       IDs to make sure those elements can be reused
   * >       else where in the code without duplication.
   */
  id: string,

  /**
   * Label to (briefly) describe the purpose of the upload
   */
  label: string,

  /**
   * Maximum number of files the user can upload at one time
   *
   * * If `maxFiles` is set to zero (0) maximum is unlimited
   *   (actual limit will be set to: 999).
   * * If `maxFiles` is negative or cannot be parsed as an integer,
   *   the default (1) will be used
   *
   * > __Note:__ __`unlimited` overrides `max-files`.__
   * >
   * > If you want to allow users to upload more than 999 files in
   * one go, do __*NOT*__ use unlimited.
   */
  maxFiles?: string|number,

  /**
   * Maximum number of pixels an image can be in any dimension
   */
  maxPixels?: string|number,

  /**
   * Maximum size a single file can be
   *
   * > __Note:__ If no unit is specified, Bytes are assumed
   */
  maxSingle?: string|number,

  /**
   * Maximum total upload size for all files combined
   *
   * > __Note:__ If no unit is specified, Bytes are assumed
   */
  maxTotal?: string|number,

  /**
   * Minimum number of files the user must upload
   */
  minFiles?: string|number,

  /**
   * Whether or not to loop the carousel around if the user tries
   * to focus beyond the limit of the carousel
   *
   * e.g. Prevent moving the focus right of the last item,
   *    or left of the first item
   *
   * The default behaviour of the carousel is to loop back to the
   * begining when moving the focus item to after the last item,
   * or loop to the end when moving.
   */
  noloop?: boolean,

  /**
   * Whether or not the user can reorder files/images within the
   * list
   *
   * By default the selected order is the order the files get
   * sent to the server. If reorder is true, then the user can
   * change the order before the files are uploaded.
   */
  reorder?: boolean,

  /**
   * By default FileUpload Shows the empty state before allowing
   * users to select. By including the `select-first` attribute, when
   * a user clicks on the "Upload" button, they are taken immediately
   * to the browser's File selection user interface.
   */
  selectFirst?: boolean,

  /**
   * Whether or not the user can upload an unlimited number
   * *(999)* of files.
   *
   * > __Note:__ __`unlimited` overrides `max-files`.__
   * >
   * > If you want to allow users to upload more than 999 files in
   * one go, do __*NOT*__ use unlimited.
   */
  unlimited?: boolean,

  /**
   * The text for the button the user first sees and uses to open
   * the full upload dialogue/widget
   */
  uploadBtnText?: string,
}

export interface IFileUploadViewerComponentProps extends IFileUploadViewerUserProps {
  accept: string,
  autoExclude: boolean,
  cancelBtnTxt: string,
  confirmBtnTxt: string,
  confirmCancel: string,
  confirmComplete: false,
  fileSender: TFileSender|null,
  id: string,
  label: string,
  maxFiles: string|number,
  maxPixels: string|number,
  maxSingle: string|number,
  maxTotal: string|number,
  minFiles: string|number,
  noloop: boolean,
  reorder: boolean,
  selectFirst: boolean,
  unlimited: boolean,
  uploadBtnText: string,
}


/**
 * Object for holding metadata about a file plus a File object (if
 * the file is OK to upload)
 *
 * @type {TFileData}
 */
export type TFileData = {
  /**
   * Whether or not the file type is allowed by the client
   */
  badType: boolean,
  /**
   * File extention for file type being uploaded
   *
   * @property {string} ext
   */
  ext: string,
  /**
   * File object to be uploaded
   *
   * @property {File|null} file
   */
  file: File|null,
  /**
   * Whether or not the file came from device camera
   *
   * @property {boolean}
   */
  fromCamera: boolean,
  /**
   * Position within the list of selected files
   *
   * @property {number} id
   */
  id: number,
  /**
   * Date & time the file was last modified
   */
  lastModified: Date|number,
  /**
   * File name (from user's file system)
   *
   * @property {string} name
   */
  name: string,
  /**
   * The orgiinal file size (in Bytes) before processing
   *
   * @property {string} originalSize
   */
  originalSize: number,
  /**
   * Whether or not the (image) file has a portrait aspect ratio
   *
   * @property {boolean} ready
   */
  isPortrait: boolean,
  /**
   * Whether or not the file is ready to be uploaded.
   * Will be FALSE while images are being resized
   *
   * @property {boolean} ready
   */
  ready: boolean,
  /**
   * Whether or not to force a reload of the component
   *
   * @property {boolean} relaod
   */
  reload: boolean,
  /**
   * Whether or not this file has focus
   *
   * @property {boolean} Selected
   */
  selected: boolean,
  /**
   * Current file size (in Bytes)
   *
   * @property {string} size
   */
  size: number,
  /**
   * Data URL to provide to image tag
   *
   * @property {string} src
   */
  src: string,
  /**
   * Whether or not this file is surplus to needs
   * (i.e. user has already selected too many files to upload)
   *
   * @property {boolean} tooBig
   */
  surplus: boolean,
  /**
   * Whether or not the file size is larger than the permitted size
   * for that generic type
   *
   * @property {boolean} tooBig
   */
  tooBig: boolean,
  /**
   * File mime type (from uploaded file's `type` property)
   *
   * @property {string} name
   */
  type: string,
}

export type TFileUploadState = {
  /**
   * List of accepted mime types of files user is allowed to upload
   *
   * @property {string} accepted
   */
  accepted: string,
  /**
   * Whether or not the main file upload UI is active
   *
   * @property {boolean} active
   */
  active: boolean,
  /**
   * List of file MIME types user can upload
   *
   * @property {TMimeType[]} allowedTypes
   */
  allowedTypes: TMimeType[],
  /**
   * Number of invalid files user has selected
   * (they may be wrong type or too large)
   *
   * @property {number} badCount
   */
  badCount: number,
  /**
   * Whether or not the user can confirm their selection of files
   * and send them to the server
   *
   * > __Note:__ Only TRUE if there are no bad files, and total
   * >           upload size is within maximum upload limit.
   * >           OR
   * >           `auto-exclue` attribute is present
   *
   * @property {boolean} canConfirm
   */
  canConfirm: boolean,
  /**
   * Number of pixels wide the window is
   *
   * @property {number} carouselOffset
   */
  carouselOffset: number,
  /**
   * Text to render when user is asked to either confirm or cancel
   * upload
   *
   * @property {string} confirmText
   */
  confirmText: string
  /**
   * Whether or not the confirmation screen is for confirming upload
   * or confirming abandonment of upload
   *
   * @property {boolean} confirmUpload
   */
  confirmUpload: boolean,
  /**
   * Whether or not whether or not to set the focus on "Previous"
   * button when the carousel opens
   *
   * @property {boolean} doAutofocus
   */
  doAutofocus: boolean,
  /**
   * Whether or not the user has already selected the maximum number
   * of (valid) files they can
   *
   * @property {boolean} full
   */
  full: boolean,
  /**
   * List of generic file types to show in hidden button text
   *
   * @property {string} genericTypeList
   */
  genericTypeList: string,
  /**
   * Number of valid files user has selected
   * (files that are small enough and of the right type)
   *
   * @property {number} goodCount
   */
  goodCount: number,
  /**
   * List of human readable file types to show user
   *
   * @property {string} humanTypeList
   */
  humanTypeList: string,
  /**
   * Object used to reduce image file sizes
   *
   * @property {ImageBlobReduce|null} imgReduce
   */
  imgReduce: ImageBlobReduce|null,
  /**
   * Maximum number of files user may upload
   *
   * @property {number} max
   */
  max: number,
  /**
   * Maximum number of pixels (in either X or Y dimension) an image
   * should be after processing
   *
   * @property {number} maxPx
   */
  maxPx: number,
  /**
   * Minimum number of files user may upload
   *
   * @property {number} min
   */
  min: number,
  /**
   * Unique ID for files (is incremented each time a file is selected)
   *
   * @property {number} nextUID
   */
  nextUID: number,
  /**
   * How many images are currently being processed
   *
   * @property {number} processingCount
   */
  processingCount: number,
  /**
   * The object representing the file currently in prime position
   * in the carousel
   *
   * @property {fileData|null} selected
   */
  selected: fileData | null,
  /**
   * The index of the file currently in prime position in the
   * carousel array.
   *
   * @property {number} selectedKey
   */
  selectedKey: number,
  /**
   * Whether or not files are being selected
   *
   * @property {boolean} selectingFiles
   */
  selectingFiles: boolean,
  /**
   * Whether or not to render the confirmation screen
   *
   * @property {boolean} showConfirm
   */
  showConfirm: boolean,
  /**
   * Maximum number of bytes a single file can be
   *
   * @property {number} singleMax
   */
  singleMax: number,
  /**
   * Whether the total number of bytes is greater than the allowed maximum
   *
   * @property {boolean} tooBig
   */
  tooBig: boolean,
  /**
   * Maximum number of bytes the combined size of all selected
   * file can be
   *
   * @property {number} totalMax
   */
  totalMax: number,
  /**
   * Generated help text to guide users in how many and which types
   * of files can be uploaded
   *
   * @property {string} uploadHelp
   */
  uploadHelp: string,
  /**
   * List of files user has selected to upload
   *
   * @property {fileData[]} uploadList
   */
  uploadList: fileData[],
}

export type TFileUploadImgState = {
  isBad: boolean,
  wrapClass: string,
  alt: string,
  _ext: string,
  _fileName: string,
  _fileOpen: boolean,
}

/**
 * List of mime types available
 *
 * @var {object}
 */
export type TMimeTypeList = {
  [index: string]: TMimeType
}

export type TMimeType = {
  /**
   * File Extension
   *
   * @property {string} ext
   */
  ext: string,
  /**
   * File mime type
   *
   * @property {string} mime
   */
  mime: string,
  /**
   * Human readable name for file type
   *
   * @property {string} name
   */
  name: string,
  /**
   * generic type of file (e.g. image, audio, video, document, etc)
   *
   * @property {string} type
   */
  type: string,
}

export type TReplaceData = {
  oldName: string,
  newFile: File
}


export type TSvgData = {
  errorCount: number,
  error1a: string,
  error1b: string,
  error2a: string,
  error2b: string
}

export enum EFileUploadViewerStates {
  /**
   * <file-upload-viewer> modal is closed.
   * (No files have been selected)
   */
  closed,
  /**
   * Open button has been clicked
   */
  empty,
  /**
   * At least one file has been selected
   */
  viewing,
  /**
   * User has clicked on close modal button
   */
  confirmCancel,
  confirmSubmit,
  sending,
  success,
  failed
}
