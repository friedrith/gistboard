import { play } from 'vue-play'
import GistBoard from '../src/GistBoard.vue'

play(GistBoard)
  .add('Normal', {
    template: `
      <gist-board :gist="gist" @increment="count += 1" @decrement="count -= 1"></gist-board>
    `,
    data() {
      return {
        gist: {
          goals: [
            {
              name: 'Goal 1',
              ideas: [
                {
                  name: 'Idea 1',
                  steps: [
                    {
                      name: '1',
                      tasks: [
                        {
                          name: 'Task 1'
                        },
                        {
                          name: 'Task 2'
                        }
                      ],
                      currentTask: 0
                    },
                    {
                      name: '2'
                    }
                  ],
                  currentStep: 0
                },
                {
                  name: 'Idea 2',
                  steps: [
                    {
                      name: '1',
                      status: 'success'
                    },
                    {
                      name: '2',
                      status: 'success'
                    },
                    {
                      name: '3',
                      tasks: [
                        {
                          name: 'Task 1',
                          status: 'success'
                        },
                        {
                          name: 'Task 2'
                        },
                        {
                          name: 'Task 3'
                        }
                      ],
                      currentTask: 1
                    },
                    {
                      name: '4'
                    }
                  ],
                  currentStep: 2
                }
              ]
            },
            {
              name: 'Goal 2',
              ideas: [
                {
                  name: 'Idea 3',
                  steps: [
                    {
                      name: '1',
                      status: 'fail'
                    },
                    {
                      name: '2'
                    },
                    {
                      name: '3'
                    }
                  ],
                  currentStep: 0
                },
                {
                  name: 'Idea 4',
                  steps: [
                    {
                      name: '1'
                    },
                    {
                      name: '2'
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    }
  })
