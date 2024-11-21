<template>
  <section class="m-section">
    <div class="copy">
      <h2 class="m-title">
        {{ setting.title }}
      </h2>

      <p class="m-sub-title">
        {{ setting.content }}
      </p>
    </div>

    <div v-for="(card, index) in setting.cards" v-bind:key="index" class="block">
      <div class="up">
        <h3 class="m-sub-sub-title">
          {{ card.title }}
        </h3>

        <div class="m-content">
          {{ card.content }}
        </div>
      </div>
      <div class="down">
        <div class="soft" v-for="(v, index) in card.list" v-bind:key="index">
          <template v-if="!v.disabled">
            <img class="icon" :src="v.image" :alt="v.title" />
            <a v-if="v.link" :href="v.link" targe="_blank"> {{ v.title }} </a>
            <span v-if="!v.link"> {{ v.title }} </span>
          </template>
          <template v-else>
            <div class="icon"></div>
            <a class="disabled" v-if="v.link" :href="v.link" target="_blank" rel="noopener">
              {{ v.title }}
            </a>
            <span v-if="!v.link"> {{ v.title }} </span>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { Apps } from '@/api/model';


const { setting } = defineProps<{
  setting: Apps,
}>()

</script>


<style lang="scss">
.m-section {
  display: grid;
}

.copy {
  grid-column: 1 / span 2;
}

.block {
  width: 588px;
  max-width: 588px;
  min-height: 254px;
  background: #ffffff;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-self: center;
}

.up {
  padding: 32px;
}

.down {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.m-sub-sub-title {
  text-align: left;
  font-size: 24px;
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.soft {
  display: flex;
  align-items: center;
  padding-left: 26px;
  border: 1px solid #e3e6eb;
  border-left: none;
  border-bottom: none;
  height: 40px;
  white-space: nowrap;
  white-space: pre;
}

.soft>span {
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  color: rgba(0, 0, 0, 0.65);
  line-height: 20px;

  &.disabled {
    color: #c5c5c5;
  }
}

@media screen and (min-width: 1200px) {
  .soft:nth-child(3n + 0) {
    border-right: none;
  }

  .soft:nth-child(3n + 1) {
    border-left: none;
  }
}

@media screen and (max-width: 1200px) {
  .copy {
    grid-column: 1 / span 1;
  }

  .m-section {
    justify-content: center;
  }
}

@media screen and (max-width: 800px) {
  .m-section {
    justify-content: center;
  }

  .copy {
    grid-column: 1 / span 1;
  }

  .block {
    width: unset;
    margin: 1rem;
  }

  .down {
    grid-template-columns: 1fr 1fr;

    .soft:nth-child(2n + 0) {
      border-right: none;
    }

    .soft:nth-child(2n + 1) {
      border-left: none;
    }
  }
}

@media screen and (max-width: 400px) {
  .down {
    grid-template-columns: 1fr;
  }

  .soft {
    border-left: none;
    border-right: none;
  }

  .soft:not(:last-child) {
    border-bottom: none;
  }
}
</style>
