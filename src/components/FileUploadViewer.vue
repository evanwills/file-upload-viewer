<template>
  <button
    v-if="selectFirst === false"
    class="file-upload-viewer__first-btn file-upload-viewer__first-btn--btn"
    v-on:click="openModal">
    <slot name="firstBtn">
      Upload
      <span class="visually-hidden">{{ label }}</span>
    </slot>
  </button>
  <label
    v-else
    class="file-upload-viewer__first-btn file-upload-viewer__first-btn--label"
    :for="fileFieldId">
    <slot name="firstBtn">
      Upload
      <span class="visually-hidden">{{ label }}</span>
    </slot>
  </label>
  <input
    :accept="acceptStr"
    class="visually-hidden"
    :id="fileFieldId"
    :multiple="getMultiple"
    ref="fileInputField"
    type="file"
    v-on:change="" />
  <dialog ref="modal" v-on:close="closeModalDialog">
    <header>
      <slot :name="getHeadSlotName"></slot>
    </header>
    <main>
      <slot :name="getBodySlotName"></slot>
    </main>
    <footer>
      <slot :name="getFootSlotName"></slot>
    </footer>
    This is some modal content
    <button v-on:click="closeModal">Close</button>
  </dialog>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue';
import {
  IFileUploadViewerComponentProps,
  IFileUploadViewerUserProps,
} from '../types/FileUploadViewer.d';
import { chooseRightSlot } from '../utils/vue-utils';
import { propAsBytes, propAsNumber } from '../utils/data-utils';

const slots = defineSlots();

const props : IFileUploadViewerComponentProps = withDefaults(
  defineProps<IFileUploadViewerUserProps>(), { // eslint-disable-line no-unused-vars
  /**
   * Whether or not to automatically exclude any files that cannot
   * be included in file upload.
   *
   * By default user must deliberately remove any files that
   * cannot be uploaded.
   */
  autoExclude: false,

  /**
   * Text for the button shown to the user asking them to confirm
   * they want to abandon the upload, (after they have clicked the
   * close dialogue button)
   */
  cancelBtnTxt: 'Discard upload',

  /**
   * Text for the button shown to the user asking them to confirm
   * they want to upload their selected files.
   * (after they have clicked the confirm and upload dialogue button)
   */
  confirmBtnTxt: 'Send files',

  /**
   * Whether or not the user must confirm they are sure they want to
   * cancel the file upload
   *
   * This is only relevant when `<FileUploadViewer>` is in `empty` or
   * `viewing` state
   *
   * Options are:
   * * `no`    - *[default]*
   *             The dialogue modal is automatically closed and any
   *             selected files will be removed from the upload list.
   * * `yes`   - The dialogue modal is automatically closed if the
   *             list of selected files is empty or has no valid
   *             files in it.
   *             If there is one or more valid files the user will be
   *             asked to confirm they want to abandon their upload
   *             attempt.
   * * `force` - Always ask the user to wish to confirm they want to
   *             abandon their upload attempt.
   */
  confirmCancel: 'no',

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
  confirmComplete: false,

  /**
   * An async function that sends files to the server and returns
   * boolean or string
   *
   * * `TRUE`   if upload was successful.
   * * `FALSE`  if upload failed and no additional error info is
   *            available.
   * * {String} error message if we know something about the failure
   *            state of the upload)
   *
   * > __Note:__ If `file-sender` is `null` FileUpload emits a
   * >           `confirmupload` event with a `FileList` object as
   * >           its value. See
   * >  [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)
   * >           for more info
   *
   * @property {async (fileList: FileList) => boolean|string}
   */
  fileSender: null,

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
  maxFiles: '1',

  /**
   * Maximum number of pixels an image can be in any dimension
   */
  maxPixels: '1500',

  /**
   * Maximum size a single file can be
   *
   * > __Note:__ If no unit is specified, Bytes are assumed
   */
  maxSingle: '5MB',

  /**
   * Maximum total upload size for all files combined
   *
   * > __Note:__ If no unit is specified, Bytes are assumed
   */
  maxTotal: '15MB',

  /**
   * Minimum number of files the user must upload
   */
  minFiles: '1',

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
  noloop: false,

  /**
   * Whether or not the user can reorder files/images within the
   * list
   *
   * By default the selected order is the order the files get
   * sent to the server. If reorder is true, then the user can
   * change the order before the files are uploaded.
   */
  reorder: false,

  /**
   * By default FileUpload Shows the empty state before allowing
   * users to select. By including the `select-first` attribute, when
   * a user clicks on the "Upload" button, they are taken immediately
   * to the browser's File selection user interface.
   */
  selectFirst: false,

  /**
   * List of file extensions matching file types the server will
   * accept
   */
  types: 'png jpg webp pdf docx doc',

  /**
   * Whether or not the user can upload an unlimited number
   * *(999)* of files.
   *
   * > __Note:__ __`unlimited` overrides `max-files`.__
   * >
   * > If you want to allow users to upload more than 999 files in
   * one go, do __*NOT*__ use unlimited.
   */
  unlimited: false,

  /**
   * The text for the button the user first sees and uses to open
   * the full upload dialogue/widget
   */
  uploadBtnText: 'Upload',
});

//  END:  Properties/attributes
// --------------------------------------------------
// START: Local state

/**
 * Whether or not the user can confirm their selection of files
 * and send them to the server
 *
 * > __Note:__ Only TRUE if there are no bad files, and total
 * >           upload size is within maximum upload limit.
 * >           OR
 * >           `auto-exclue` attribute is present
 */
// const canConfirm = ref(false);

const fileInputField = ref<HTMLInputElement|null>(null);

/**
 * Number of valid files user has selected
 * (files that are small enough and of the right type)
 */
const goodCount = ref<number>(0);

/**
 * Maximum number of files user may upload
 */
const max = ref<number>(1);
const maxPx = ref<number>(1500);
const maxBytesSingle = ref<number>(5242880);
const maxBytesTotal = ref<number>(15728640);

/**
 * Minimum number of files user must upload
 */
const min = ref<number>(1);

/**
 * Maximum number of pixels (in either X or Y dimension) an image
 * should be after processing
 */
// const maxPx = ref(1500);

/**
 * Minimum number of files user may upload
 */
// const min = ref(1);

const modal = ref<HTMLDialogElement|null>(null);
const acceptStr = ref<string>('');
const state = ref<string>('closed');

//  END:  Local state
// --------------------------------------------------
// START: Computed properties

const fileFieldId = computed<string>(() => `file-input-field--${props.id}`);
const getMultiple = computed<boolean>(() => (max.value > 1));
const getHeadSlotName = computed<string>(() => chooseRightSlot('head', slots, state.value));
const getBodySlotName = computed<string>(() => chooseRightSlot('body', slots, state.value));
const getFootSlotName = computed<string>(() => chooseRightSlot('foot', slots, state.value));

//  END:  Computed properties
// --------------------------------------------------
// START: Local methods

const openModal = () => {
  console.group('openModal()');
  console.log('modal.value:', modal.value);
  console.log('props.label:', props.label);
  console.log('state.value (before):', state.value);
  if (props.selectFirst === true) {

  } else if (modal.value !== null && modal.value.open === false) {
    modal.value.showModal();
    state.value = 'empty';
  }

  console.log('state.value (after):', state.value);
  console.groupEnd();
};

const closeModal = () => {
  if (modal.value !== null && modal.value.open === true) {
    let doClose = false;
    switch (state.value)  {
      case 'empty':
      case 'confirm-cancel':
      case 'success':
      case 'failed':
        doClose = true;
        break;

      case 'preview':
        // if the `confirm-cancel` attribute is set to `force`
        if (props.confirmCancel === 'no' ||
          (props.confirmCancel === 'yes' && goodCount.value < 1)
        ) {
          doClose = true;
        } else {
          state.value = 'confirm-cancel';
        }
        break;
    }

    if (doClose === true) {
      modal.value.close();
      state.value = 'closed';
    }
  }
};

const closeModalDialog = (event : MouseEvent) => {
  event.preventDefault();
  closeModal();
}


//  END:  Local methods
// --------------------------------------------------
// START: Lifecycle methods

onBeforeMount(() => {
  if (['force', 'no', 'yes'].indexOf(props.confirmCancel) < 0) {
    console.error(
      '`<FileUploadViewer` expexts attribute `confirm-cancel` to ' +
      'have one of the following values: "no" (default) or "yea", ' +
      `or "force". "${props.confirmCancel}" is not valid`,
    );
  }

  max.value = propAsNumber(props, 'maxFiles', max.value);
  min.value = propAsNumber(props, 'minFiles', min.value);
  maxPx.value = propAsNumber(props, 'maxPixels', maxPx.value);
  maxBytesSingle.value = propAsBytes(props, 'maxSingle', maxBytesSingle.value);
  maxBytesTotal.value = propAsBytes(props, 'maxTotal', maxBytesTotal.value);



  acceptStr.value = props.types;
})

//  END:  Lifecycle methods
// --------------------------------------------------
</script>

<style lang="scss" src="./FileUploadViewer.scss"></style>
