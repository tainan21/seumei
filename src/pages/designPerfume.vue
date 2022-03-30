<template id="vue-base-input">
      <div>
      <input v-model="modelValue"
        v-bind="$attrs"
        :class="[
          labelInside ? 'input-label-inside' : 'input-label-outside',
          'input',
        ]"
        :placeholder="$attrs.placeholder ? $attrs.placeholder : ' '"
        :type="showPassword ? 'text' : inputType"
      />
      <button
        v-if="
          getIconCheck &&
          isValidate === false &&
          getValueLength >= 1 &&
          showIcon
        "
        @click.prevent="showErrorMessage = !showErrorMessage"
        :class="[
          returnValueByLength(
            getValueLength,
            customStyle.inputBgFull,
            customStyle.inputBgEmpty,
            1
          ),
          'button-icon',
        ]"
        type="button"
      >
      </button>
      <div
        v-if="
          getIconCheck &&
          isValidate !== false &&
          getValueLength >= 1 &&
          showIcon
        "
        :class="[
          returnValueByLength(
            getValueLength,
            customStyle.inputBgFull,
            customStyle.inputBgEmpty,
            1
          ),
          'button-icon',
        ]"
      >
        <img :src="getIconCheck.src" :alt="getIconCheck.alt" />
      </div>

      <div
        :class="[
          returnValueByLength(
            getValueLength,
            customStyle.inputBgFull,
            customStyle.inputBgEmpty,
            1
          ),
          'bloc-button',
        ]"
      >
        <button
          v-if="getIconEyes && showIconPassword && inputType === 'password'"
          @click.prevent="showPassword = !showPassword"
          class="button-icon"
          type="button"
        >
          <img :src="getIconEyes" alt="" />
        </button>
        <div v-if="icon" class="button-icon">
          <img :src="icon.src" :alt="icon.alt" />
        </div>
      </div>
      <label
        v-if="$attrs.label && !$attrs.placeholder"
        :for="$attrs.name"
        :class="[
          labelInside ? 'label-inside' : 'label-outside',
          customStyle.label,
        ]"
      >
        {{ $attrs.label }}
        <span v-if="isRequired" class="required">*</span>
      </label>
    <div class="bloc-error">
      <transition name="fade">
        <p
          v-if="showErrorMessage && isValidate === false && errorMessage"
          :class="[customStyle.errorMessage, 'error-message']"
        >
          {{ errorMessage }}
        </p>
      </transition>
    </div>
  </div>
</template>     
<script>
export default {
  name: 'vue-base-input',
  model: {
    prop: 'title',
    event: 'change',
  },
  props: {
    value: {
      type: String,
    },
    isValid: {
      type: Boolean,
      default: null,
    },
    inputType: {
      type: String,
      default: 'text',
    },
    inputClass: {
      type: String,
      default: '',
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    showBorder: {
      type: Boolean,
      default: true,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    showIconPassword: {
      type: Boolean,
      default: true,
    },
    errorMessage: {
      type: String,
      default: '',
    },
    icon: {
      type: [Object, String],
      default: null,
    },
    urlIconValid: {
      type: [Object, String],
      default: null,
    },
    urlIconFaild: {
      type: [Object, String],
      default: null,
    },
    urlIconOpenEyes: {
      type: [Object, String],
      default: null,
    },
    urlIconCloseEyes: {
      type: [Object, String],
      default: null,
    },
    regex: {
      type: [Object, String],
      default: null,
      example:
        '^(?=.*[A-Za-z])(?=.*)(?=.*[@$!%*#?&])[A-Za-z@$!%*#?&]{10,}$',
    },
    labelInside: {
      type: Boolean,
      default: false,
    },
    customStyle: {
      type: Object,
      default() {
        return {
          borderIsValid: 'border-valid',
          borderIsDefault: 'border-default',
          borderIsBad: 'border-faild',
          errorMessage: 'error-color',
          label: 'label-color',
          inputBgFull: 'bg-full',
          inputBgEmpty: 'bg-empty',
        };
      },
    },
  },
  computed: {
    getValueLength() {
      return this.modelValue !== '' && this.modelValue !== null
        ? this.modelValue?.length
        : '';
    },
    getIconCheck() {
      if (this.isValidate === false) {
        return this.urlIconFaild;
      } else {
        return this.urlIconValid;
      }
    },
    getIconEyes() {
      if (this.showPassword) {
        return this.urlIconOpenEyes;
      } else {
        return this.urlIconCloseEyes;
      }
    },
    classBorder() {
      return this.isValidate &&
        this.showBorder &&
        this.returnValueByLength(this.getValueLength, true, false, 1)
        ? this.customStyle.borderIsValid
        : this.isValidate === false
        ? this.customStyle.borderIsBad
        : this.customStyle.borderIsDefault;
    },
  },
  mounted() {
    if (this.getValueLength > 1) {
      this.update(this.modelValue);
    }
  },
  watch: {
    modelValue(value) {
      this.update(value);
    },
    regex() {
      this.update(this.modelValue);
    },
  },
  data() {
    return {
      modelValue: this.value,
      isValidate: this.isValid,
      showErrorMessage: false,
      showPassword: false,
    };
  },
  methods: {
    callUpdateIsValid(val) {
      this.isValidate = val;
      if (!val) {
        this.showErrorMessage = true;
      }
    },
    callResetValue() {
      this.modelValue = '';
      this.update('');
    },
    returnValueByLength(value, correct, incorrect, number) {
      return value >= number ? correct : incorrect;
    },
    testRegex(value) {
      if (this.regex !== null && this.regex !== '') {
        const regex = new RegExp(this.regex);
        return regex.test(value);
      } else {
        return true;
      }
    },
    update(value) {
      if (this.isRequired && this.testRegex(value) && value.length >= 1) {
        this.isValidate = true;
      } else if (
        this.isRequired &&
        !this.testRegex(value) &&
        value.length >= 1
      ) {
        this.isValidate = false;
        this.showErrorMessage = true;
      } else if (!this.isRequired && value.length >= 1) {
        this.isValidate = true;
        this.showErrorMessage = false;
      } else {
        this.isValidate = null;
        this.showErrorMessage = false;
      }
      this.$emit('update:value', value);
      this.$emit('update:isValid', this.isValidate);
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.base-input {
  border-radius: 0.37rem;
  position: relative;
  border-width: 2px;
}

.base-input input:focus {
  outline-style: none;
  box-shadow: none;
  border-color: transparent;
}
.base-input input:-webkit-autofill,
.base-input input:-webkit-autofill:hover,
.base-input input:-webkit-autofill:focus {
  border: none;
  -webkit-box-shadow: 0 0 0px 1000px transparent inset;
  transition: background-color 5000s ease-in-out 0s;
}

.border-valid {
  border: solid 2px rgb(34, 197, 94);
}
.border-default {
  border: solid 2px rgb(229, 231, 235);
}
.border-faild {
  border: solid 2px rgb(239, 68, 68);
}
.error-color {
  color: rgb(185, 28, 28);
}
.label-color {
  color: rgb(107, 114, 128);
}
.bg-full {
  border-radius: 0.37rem;
  background-color: rgb(249, 250, 251);
}
.bg-empty {
  border-radius: 0.37rem;
  background-color: rgb(243, 244, 246);
}

.bloc-input {
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
}

.input {
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 100%;
  appearance: none;
  border-width: 0px;
  background-color: transparent;
  padding-left: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  box-shadow: 0, 0, #0000;
}

/* input label inside true */
.input-label-inside {
  padding-top: 1.25rem;
  padding-bottom: 0.25rem;
}
/* input label outside true */
.input-label-outside {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.bloc-button {
  display: flex;
}

.button-icon {
  margin-right: 0.5rem;
  display: flex;
  width: 2rem;
  align-items: center;
  justify-content: center;
}
.button-icon img {
  width: 1.25rem;
  height: 1.25rem;
}

.label-outside {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0.5rem;
  z-index: -1;
  display: flex;
  transform: none;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1rem;
  transition-duration: 300ms;
}
@media (min-width: 768px) {
  .label-outside {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}

.label-inside {
  position: absolute;
  top: 0.25rem;
  bottom: 0px;
  left: 0.5rem;
  z-index: -1;
  display: flex;
  transform: none;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1rem;
  transition-duration: 300ms;
}

@media (min-width: 768px) {
  .label-inside {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}

.required {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.bloc-error {
  position: absolute;
}

.bloc-error .error-message {
  margin-top: 0.25rem;
  font-size: 0.75rem;
  line-height: 1rem;
}

@media (min-width: 768px) {
  .bloc-error .error-message {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}


/* animation label inside/outside*/

input:not(:-moz-placeholder-shown) ~ label.label-inside {
  top: 0.25rem;
  bottom: auto;
  transform: translateX(0) translateY(0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
  font-size: 0.75rem;
  line-height: 1rem;
}

input:not(:-ms-input-placeholder) ~ label.label-inside {
  top: 0.25rem;
  bottom: auto;
  transform: translateX(0) translateY(0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
  font-size: 0.75rem;
  line-height: 1rem;
}

input:focus-within ~ label.label-inside, input:not(:placeholder-shown) ~ label.label-inside {
  top: 0.25rem;
  bottom: auto;
  transform: translateX(0) translateY(0) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
  font-size: 0.75rem;
  line-height: 1rem;
}

input:not(:-moz-placeholder-shown) ~ label.label-outside {
  transform: translateX(-0.5rem) translateY(-2.25rem) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
}

input:not(:-ms-input-placeholder) ~ label.label-outside {
  transform: translateX(-0.5rem) translateY(-2.25rem) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
}

input:focus-within ~ label.label-outside, input:not(:placeholder-shown) ~ label.label-outside {
  transform: translateX(-0.5rem) translateY(-2.25rem) rotate(0) skewX(0) skewY(0) scaleX(1) scaleY(1);
}

</style>