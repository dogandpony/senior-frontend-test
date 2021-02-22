<template>
    <div class='office-card-data shadow-xl mb-6 my-0 mx-auto'>
        <header :class="isOpen ? 'bg-primary':'bg-background-card rounded-b-md'"
          class=' p-6 rounded-t-md
                flex flex-row justify-between items-center relative'>
            <div class='office-card__header-text'>
                <HeaderText :class="isOpen ? 'text-primary-light':'text-primary-dark'" class='mb-2'>
                  {{ data.title }}
                </HeaderText>
                <BodyText :class="isOpen ? 'text-primary-light':'text-primary'">
                  {{ data.address }}
                </BodyText>
            </div>
            <svg v-if="isOpen" @click="toggleCard()" class='cursor-pointer' width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 9L9 1L1 9"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"/>
            </svg>
            <svg v-else @click="toggleCard()" class='cursor-pointer' width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1L9 9L17 1"
                  stroke="#33A6BA"
                  stroke-linecap="round"
                  stroke-linejoin="round"/>
            </svg>
        </header>
        <CollapseTransition easing="ease-in-out">
          <div  v-show="isOpen">
            <section>
              <ul class='bg-background-card p-6'>
                  <li class='mb-3'>
                      <HeaderText>
                      {{ data.fullName }}
                      </HeaderText>
                  </li>
                  <li class='mb-6'>
                      <BodyText class='font-bold text-primary-dark'>
                      {{ data.jobPosition }}
                      </BodyText>
                  </li>
                  <li class='mb-6'>
                      <LinkText
                        href="mailto:georgia.young@example.com">
                        {{ data.email }}
                      </LinkText>
                  </li>
                  <li class='mb-6'>
                      <BodyText class='font-bold text-primary-dark'>
                        {{ data.phone }}
                      </BodyText>
                  </li>
                  <hr class='-mb-4' />
              </ul>
            </section>
            <footer
              class='bg-background-card rounded-b-md px-6 pb-4 flex flex-row justify-between'>
                <ButtonIcon
                  @clickPrevent="() => $emit('toggleConfig')"
                  text="Edit"
                  class='focus:ring-primary'>
                  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.232 3.23199L16.768 6.76799M14.732 1.73199C15.2009
                    1.26309 15.8369 0.999664 16.5 0.999664C17.1631 0.999664 17.7991
                    1.26309 18.268 1.73199C18.7369 2.2009 19.0003 2.83687 19.0003
                    3.49999C19.0003 4.16312 18.7369 4.79909 18.268 5.26799L4.5
                    19.036H1V15.464L14.732 1.73199Z"
                    stroke="#989EA7"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </ButtonIcon>
                <ButtonIcon
                  @clickPrevent="deleteOffice(data.id)"
                  text="Delete"
                  class='text-accent-red focus:ring-accent-red'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 11V17M14 11V17M4 7H20M19 7L18.133 19.142C18.0971 19.6466 17.8713
                    20.1188 17.5011 20.4636C17.1309 20.8083 16.6439 21 16.138 21H7.862C7.35614 21
                    6.86907 20.8083 6.49889 20.4636C6.1287 20.1188 5.90292 19.6466 5.867
                    19.142L5 7H19ZM15 7V4C15 3.73478 14.8946 3.48043 14.7071 3.29289C14.5196
                    3.10536 14.2652 3 14 3H10C9.73478 3 9.48043 3.10536 9.29289 3.29289C9.10536
                    3.48043 9 3.73478 9 4V7H15Z"
                    stroke="#FF7B92"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </ButtonIcon>
            </footer>
          </div>
        </CollapseTransition>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { CollapseTransition } from '@ivanv/vue-collapse-transition';
import BodyText from '../../atoms/typography/BodyText.vue';
import ButtonIcon from '../../atoms/buttons/ButtonIcon.vue';
import HeaderText from '../../atoms/typography/HeaderText.vue';
import LinkText from '../../molecules/LinkText.vue';

export default {
  name: 'OfficeCardData',
  components: {
    BodyText,
    ButtonIcon,
    HeaderText,
    LinkText,
    CollapseTransition,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    toggleCard() {
      this.isOpen = !this.isOpen;
    },
    openEdit() {
      this.$emit('toggleConfig');
    },
    ...mapActions(['deleteOffice']),
  },
};
</script>

<style>
    .office-card-data {
        width: 317px;
    }
</style>
