<template>
    <div class='office-card-config shadow-xl mb-6 p-6 rounded-t-md bg-background-card'>
        <header class='flex flex-row justify-between items-center relative mb-10'>
          <BodyText class='text-primary-dark font-bold'>
            {{ type }} Location
          </BodyText>
          <svg
            @click="closeConfig()"
            class='cursor-pointer'
            width="14" height="14"
            viewBox="0 0 14 14" fill="none"
            xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13L13 1L1 13ZM1 1L13 13L1 1Z" fill="#989EA7"/>
              <path
                d="M1 1L13 13M1 13L13 1L1 13Z"
                stroke="#989EA7"
                stroke-linecap="round"
                stroke-linejoin="round"/>
          </svg>
        </header>
        <section>
          <GenericInput
            label="Title"
            type="text"
            errorMessage="This field cannot be empty"
            :required="true"
            v-model="title"
            :value="title"
            :error="titleErr" />
          <GenericInput
            label="Enter the address"
            type="text"
            errorMessage="This field cannot be empty"
            :required="true"
            v-model="address"
            :value="address"
            :error="adrressErr" />
          <MetaText class="uppercase mt-5 mb-3 text-accent-blue">Contact information</MetaText>
          <hr class="mb-4"/>
          <GenericInput
            label="Full name"
            type="text"
            errorMessage="This field cannot be empty"
            :required="true"
            v-model="fullName"
            :value="fullName"
            :error="fullNameErr" />
          <GenericInput
            label="Job Position"
            type="text"
            errorMessage="This field cannot be empty"
            :required="true"
            v-model="jobPosition"
            :value="jobPosition"
            :error="jobPositionErr" />
          <GenericInput
            label="Email address"
            type="email"
            placeholder="name@example.com"
            :errorMessage="emailErrMsg"
            :required="true"
            v-model="email"
            :value="email"
            :error="emailErr" />
          <PhoneInput
            @validate="(value) => {this.validNumber = value}"
            :required="true"
            :error="phoneErr"
            :errorMessage="phoneErrMsg"
            :value="phone"
            v-model="phone" />
        </section>
        <footer>
          <Button @clickPrevent="submitForms" :disabled="saveIsDisabled">Save</Button>
        </footer>
        <CollapseTransition easing="ease-in-out">
          <Toast v-if="officeEditStatus" :type="type" />
        </CollapseTransition>
    </div>
</template>

<script>
import { CollapseTransition } from '@ivanv/vue-collapse-transition';
import { mapGetters, mapActions } from 'vuex';
import validadteEmail from '../../../helpers/validateEmail';
import BodyText from '../../atoms/typography/BodyText.vue';
import MetaText from '../../atoms/typography/MetaText.vue';
import Button from '../../atoms/buttons/Button.vue';
import Toast from '../../molecules/Toast.vue';
import GenericInput from '../../molecules/inputs/GenericInput.vue';
import PhoneInput from '../../molecules/inputs/PhoneInput.vue';

export default {
  name: 'OfficeCardConfig',
  components: {
    BodyText,
    Button,
    MetaText,
    GenericInput,
    PhoneInput,
    Toast,
    CollapseTransition,
  },
  data() {
    return {
      isOpen: true,
      saveIsDisabled: false,
      id: null,
      title: '',
      address: '',
      fullName: '',
      jobPosition: '',
      email: '',
      phone: '',
      titleErr: false,
      adrressErr: false,
      fullNameErr: false,
      jobPositionErr: false,
      emailErr: false,
      phoneErr: false,
      emailErrMsg: '',
      phoneErrMsg: 'Invalid phone number format',
      validNumber: null,
    };
  },
  props: {
    type: {
      type: String,
      default: 'Edit',
    },
    data: {
      type: Object,
    },
  },
  mounted() {
    if (this.$props.type === 'Edit') {
      this.id = this.$props.data.id;
      this.title = this.$props.data.title;
      this.address = this.$props.data.address;
      this.fullName = this.$props.data.fullName;
      this.jobPosition = this.$props.data.jobPosition;
      this.email = this.$props.data.email;
      this.phone = this.$props.data.phone;
    }
  },
  methods: {
    closeConfig() {
      this.$emit('toggleConfig');
    },
    ...mapActions(['addOffice', 'updateOffice']),
    submitForms() {
      const { id } = this;
      const title = this.title.trim();
      const address = this.address.trim();
      const fullName = this.fullName.trim();
      const jobPosition = this.jobPosition.trim();
      const email = this.email.trim();
      const phone = this.phone.trim();

      this.titleErr = title.length === 0;
      this.adrressErr = address.length === 0;
      this.fullNameErr = fullName.length === 0;
      this.jobPositionErr = jobPosition.length === 0;

      if (email.length === 0) {
        this.emailErr = true;
        this.emailErrMsg = 'This field cannot be empty';
      } else if (!validadteEmail(email)) {
        this.emailErr = true;
        this.emailErrMsg = 'Invalid e-mail format';
      } else {
        this.emailErr = false;
      }

      if (phone.length === 0) {
        this.phoneErr = true;
        this.phoneErrMsg = 'This field cannot be empty';
      } else if (!this.validNumber) {
        this.phoneErr = true;
        this.phoneErrMsg = 'Invalid phone number format';
      } else {
        this.phoneErr = false;
        this.phoneErrMsg = 'Invalid phone number format';
      }

      if (!(this.titleErr
          || this.adrressErr
          || this.fullNameErr
          || this.jobPositionErr
          || this.emailErr
          || this.phoneErr)) {
        this.saveIsDisabled = false;
        if (this.$props.type === 'New') {
          this.saveIsDisabled = true;
          this.addOffice(
            {
              title,
              address,
              fullName,
              jobPosition,
              email,
              phone,
            },
          );
        } else {
          this.saveIsDisabled = true;
          this.updateOffice(
            {
              id,
              title,
              address,
              fullName,
              jobPosition,
              email,
              phone,
            },
          );
        }
      } else {
        this.saveIsDisabled = true;
      }
    },
  },
  computed: {
    ...mapGetters(['officeEditStatus']),
    changeData() {
      const {
        title, address, fullName, jobPosition, email, phone,
      } = this;
      return {
        title,
        address,
        fullName,
        jobPosition,
        email,
        phone,
      };
    },
  },
  watch: {
    changeData: {
      handler() {
        this.saveIsDisabled = false;
      },
      deep: true,
    },
  },
};
</script>

<style>
    .office-card-config {
        width: 317px;
    }
</style>
