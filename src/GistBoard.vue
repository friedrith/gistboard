<template>
  <div class="gist-board">
    <ul class="gist-board-goal-list">
      <li class="gist-board-help">
        <div class="gist-board-goal-help">
          Goals
        </div>
        <div class="gist-board-idea-help">
          Ideas
        </div>
        <div class="gist-board-step-help">
          Steps
        </div>
        <div class="gist-board-task-help">
          Tasks
        </div>
      </li>
      <li v-for="goal in gist.goals" class="gist-board-goal">
        <div class="gist-board-goal-label">
          {{ goal.name }}
        </div>
        <ul class="gist-board-idea-list">
          <li v-for="idea in goal.ideas" class="gist-board-idea">
            <div class="gist-board-line" />
            <div class="gist-board-idea-label">
              {{ idea.name }}
            </div>
            <ul class="gist-board-step-list">
              <li v-for="(step, index) in idea.steps" class="gist-board-step">
                <div class="gist-board-line" v-if="index === idea.currentStep" />
                <div class="gist-board-line-none" v-if="index !== idea.currentStep"/>
                <div class="gist-board-step-label" v-bind:class="{ success: step.status === 'success', fail: step.status === 'fail' }" v-bind:title="step.name">
                  <span v-if="step.status === 'success'" class="ti ti-check">
                  </span>
                  <span v-else-if="step.status === 'fail'" class="ti ti-close">
                  </span>
                  <span v-else>
                    {{ step.name }}
                  </span>
                </div>

                <div class="gist-board-arrow" v-bind:class="{ success: idea.steps[idea.currentStep].tasks && idea.steps[idea.currentStep].tasks[0].status === 'success' }" v-if="index === idea.currentStep && idea.steps[idea.currentStep].tasks" />
              </li>
            </ul>
            <ul class="gist-board-task-list" v-if="idea.currentStep !== undefined && idea.currentStep !== null && idea.steps[idea.currentStep].tasks">
              <li v-for="(task, index) in idea.steps[idea.currentStep].tasks" class="gist-board-task"  v-bind:class="{ success: task.status === 'success' }">
                {{ task.name }}
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'gist-board',

  props: {
    gist: Object
  },

  methods: {
    increment () {
      this.$emit('increment')
    },

    decrement () {
      this.$emit('decrement')
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Tajawal");
@import url("https://cdn.jsdelivr.net/themify-icons/0.1.2/css/themify-icons.css");
.gist-board {

  $success: #1FAB89;
  $default: #C4FFDD;

  font-family: 'Tajawal', sans-serif;
  text-align: center;

  &-goal-list, &-idea-list, &-step-list, &-task-list {
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
  }

  &-help {
    padding-right: 15px;
  }

  &-goal {
    flex: 1 1 auto;
    $padding: 10px;
    padding: $padding $padding 0 0;
    &-label {
      background: #113A5D;
      color: white;
      $padding: 15px;
      padding: $padding $padding ($padding - 5px) $padding;
    }

    &-help {
      padding-top: 25px;
    }
  }

  &-line {
    display: inline-block;
    height: 30px;
    width: 1px;
    background: #bbb;
  }

  &-line-none {
    display: inline-block;
    height: 30px;
    width: 1px;
    background: transparent;
  }

  &-arrow {
    margin-top: 10px;
    display: inline-block;
    $width: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 $width $width $width;
    border-color: transparent transparent $default transparent;
    position: relative;
    bottom: -10px;

    &.success {
      border-color: transparent transparent $success transparent;
    }
  }

  &-idea {
    flex: 1 1 auto;

    & + & {
      margin-left: 10px;
    }

    &-label {
      background: #062743;
      color: white;
      text-align: center;
      $padding: 10px;
      padding: $padding $padding ($padding - 5px) $padding;
    }

    &-list {
      padding: 10px 0px 0px 0px;
      justify-content: space-between;
    }

    &-help {
      padding-top: 70px;
    }
  }

  &-step {
    flex: 0 0 auto;
    text-align: center;

    & + & {
      margin-left: 5px;
    }

    &-label {
      background: $default;
      color: black;
      text-align: center;
      $padding: 5px;
      padding: $padding $padding ($padding - 5px) $padding;
      height: 20px;

      &.success {
        background: #1FAB89;
        color: white;
      }

      &.fail {
        background: #FF4057;
        color: white;
      }
    }

    &-list {
      padding: 10px 0px 0px 10px;
      justify-content: flex-start;
    }

    &-help {
      padding-top: 55px;
    }
  }

  &-task {
    background: $default;
    color: black;
    text-align: center;
    $padding: 5px;
    padding: $padding $padding ($padding - 5px) $padding;
    margin-bottom: 10px;

    &.success {
      background: $success;
      color: white;
    }

    &-list {
      flex-direction: column;
    }

    &-help {
      padding-top: 35px;
    }
  }


}
</style>
