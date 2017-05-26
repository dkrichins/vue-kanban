let Boards = require('../models/board')
let Lists = require('../models/list')
let Tasks = require('../models/task')
let Comments = require('../models/comment')

// var resources = {
//     Boards,
//     Lists,
//     Tasks,
//     Comments
// }

/////////////This is Jake fancy way of doing it.////////////////////
// function LoadEntityWithRelationship(resource, relation, id, action) {
//     return new Promise((resolve, reject) => {

//         resources[resource].findById(id).then(entity => {
//             var relationField = resource.toLowerCase() + 'Id'
//             var query = {}
//             query[relationField] = id
//             resources[relation].find(query).then(relations => {
//                 entity[relation.toLowerCase()] = relations
//                 resolve(handleResponse(action, entity))
//             }).catch(error => {
//                 reject(handleResponse(action, null, error))
//             })
//         }).catch(error => {
//             reject(handleResponse(action, null, error))
//         })
//     })
// }




export default {
<<<<<<< HEAD
    getListsByBoardId: {
        path: '/boards/:boardId/lists',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Return board and all Lists with that Board Id'

            // LoadEntityWithRelationship('Boards', 'Lists', req.params.boardId, action)
            //     .then(res.send)
            //     .catch(next)

            Boards.findById(req.params.boardId)
                .then(board => {                                       
                    Lists.find({ boardId: req.params.boardId })
                        .then(lists => {
                            board.lists = lists
                            res.send(handleResponse(action, board))
                        }).catch(error => {
                            return next(handleResponse(action, null, error))
                        })
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getTasksOnLists: {
        path: '/boards/:boardId/lists/:listId/tasks',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Return list and all Tasks with that List Id'
            console.log('req', req.params)
            // LoadEntityWithRelationship('Lists', 'Tasks', req.params.listId, action)
            //     .then(res.send)
            //     .catch(next)
            Lists.findById(req.params.listId)
                .then(list => {
                    //console.log('here?')
                    Tasks.find({ listId: req.params.listId })
                        .then(tasks => {
                            list.tasks = tasks
                            res.send(handleResponse(action, list))
                        }).catch(error => {
                            return next(handleResponse(action, null, error))
                        })
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    getCommentsByTask: {
        path: '/boards/:boardId/lists/:listId/tasks/:taskId/comments',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Return comments associated with a Task'
            Tasks.findById(req.params.taskId)
                .then(task => {
                    Comments.find({ taskId: req.params.taskId })
                        .then(comments => {
                            task.comments = comments
                            res.send(handleResponse(action, task))
                        }).catch(error => {
                            return next(handleResponse(action, null, error))
                        })
                }).catch(error => {
=======
  getListsByBoardId: {
    path: '/boards/:boardId/lists',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Return board and all Lists with that Board Id'

      // LoadEntityWithRelationship('Boards', 'Lists', req.params.boardId, action)
      //     .then(res.send)
      //     .catch(next)

      Boards.findById(req.params.boardId)
        .then(board => {
          Lists.find({ boardId: req.params.boardId })
            .then(lists => {
              board.lists = lists
              res.send(handleResponse(action, board))
            }).catch(error => {
              return next(handleResponse(action, null, error))
            })
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  getTasksOnLists: {
    path: '/boards/:boardId/lists/:listId/tasks',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Return list and all Tasks with that List Id'
      console.log('req', req.params)
      Lists.findById(req.params.listId)
        .then(list => {
          Tasks.find({ listId: req.params.listId })
            .then(tasks => {
              list.tasks = tasks
              res.send(handleResponse(action, list))
            }).catch(error => {
              return next(handleResponse(action, null, error))
            })
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  getCommentsByTask: {
    path: '/boards/:boardId/lists/:listId/tasks/:taskId/comments',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Return comments associated with a Task'
      Tasks.findById(req.params.taskId)
        .then(task => {
          Comments.find({ taskId: req.params.taskId })
            .then(comments => {
              task.comments = comments
              res.send(handleResponse(action, task))
            }).catch(error => {
              return next(handleResponse(action, null, error))
            })
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  getTasksAndAllComments: {
    path: '/boards/:boardId/lists/:listId/tasks/comments',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Return list and all Tasks with their Comments'
      Lists.findById(req.params.listId)
        .then(list => {
          //console.log('here?')
          Tasks.find({ listId: req.params.listId })
            .then(tasks => {
              list.tasks = tasks
              Promise.all(tasks.map(task => {
                return Comments.find({ taskId: task._id })
                  .then(comments => {
                    task.comments = comments
                  }).catch(error => {
>>>>>>> b0bf1ba25ddb9cf992301dd4b12cc8a5c20c786b
                    return next(handleResponse(action, null, error))
                  })
              })).then(() => {
                res.send(handleResponse(action, list))
              }).catch(error => {
                return next(handleResponse(action, null, error))
              })
            }).catch(error => {
              return next(handleResponse(action, null, error))
            })
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },

  deleletsChildrenOfBoards: {
    path: '/boards/:boardId',
    reqType: 'delete',
    method(req, res, next) {
      let action = 'Removing all children of a Board'
      Boards.findById(req.params.boardId)
        .then(board => {
          Tasks.find({ boardId: req.params.boardId })
            .then(tasks => {
              Lists.find({ boardId: req.params.boardId })
                .then(lists => {
                  Comments.find({ boardId: req.params.boardId })
                  res.send(handleResponse(action))
                }).catch(error => {
                  return next(handleResponse(action, null, error))
                })
            }).catch(error => {
              return next(handleResponse(action, null, error))
            })
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }
}








function handleResponse(action, data, error) {
  var response = {
    action: action,
    data: data
  }
  if (error) {
    response.error = error
  }
  return response
}