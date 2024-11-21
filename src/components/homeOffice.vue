<template>
  <section class="m-section">
    <div class="copy">
      <h2 class="m-title">{{ setting.title }}</h2>

      <p class="m-sub-title">
        {{ setting.content }}
      </p>
    </div>

    <div v-for="(card, index) in setting.cards" v-bind:key="index" class="block">
      <div class="content">
        <img class="icon" :src="card.image" :alt="card.title" />
        <h2 class="m-sub-sub-title">
          {{ card.title }}
        </h2>

        <div class="m-content">
          {{ card.content }}
        </div>
      </div>

      <div class="grow"></div>

      <div class="m-cover">
        <img :src="card.cover" :alt="card.title" />
        <img class="play" alt="play" :src="play" />
        <a class="cover" rel="noopener" target="_blank" :href="card.url">
          <div class="text">
            {{ card.title }}
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Office } from '@/api/model';
import play from '@/assets/play.svg'

const { setting } = defineProps<{
  setting: Office,
}>()

</script>


<style lang="scss" scoped>
.icon {
  width: 80px;
  height: 80px;
  margin-left: -0.5rem;
}

.m-section {
  display: grid;
  width: 100%;
  justify-content: space-between;
}

.block {
  width: 282px;
  background: #ffffff;
  padding-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .content {
    padding: 20px 24px;
  }

  .grow {
    flex-grow: 1;
  }

  .m-cover {
    width: 282px;
    position: relative;

    img {
      width: 262px;
      height: 100%;
      display: block;
      margin: auto;
    }

    .play {
      position: absolute;
      top: 30px;
      bottom: 0;
      left: 182px;
      right: 0;
      width: 80px;
      height: 100%;
    }

    .cover {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 10px;
      right: 0;
      height: 100%;
      width: 262px;
      opacity: 0;
      transition: 0.5s ease;
      background-color: #008cba;

      .text {
        color: white;
        font-size: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
      }
    }
  }

  .m-cover:hover .cover {
    opacity: 1;
    cursor: pointer;
  }
}

.copy {
  grid-column: 1 / span 4;
}

@media screen and (max-width: 1200px) {
  .copy {
    grid-column: 1 / span 2;
  }

  .block {
    width: unset;
    margin: 1rem;
  }
}

@media screen and (max-width: 800px) {
  .copy {
    grid-column: 1;
  }

  .block {
    margin: 1rem;

    .cover {
      width: 90%;
      margin: 0 auto;
    }
  }
}

.m-sub-sub-title {
  text-align: left;
}
</style>
