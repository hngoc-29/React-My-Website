import { useCallback, useState, useMemo, useRef, useReducer } from 'react';

// Giải quyết vấn đề
// useState
// 1. init state: 0
// 2. Action: Up (state + 1) / Down (state - 1)

// useReducer
// 1. init state: 0
// 2. Action: Up (state + 1) / Down (state - 1)
// 3. Reducer
// 4. Dispatch (kích hoạt 1 action)

// init state
const initialState = {
    job: '',
    jobs: []
};

let isEdit = null

//action
const SET_JOB = "set_job"
const ADD_JOB = "add_job"
const EDIT_JOB = "edit_job"
const DELETE_JOB = "delete_job"

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

const editJob = payload => {
    return {
        type: EDIT_JOB,
        payload
    }
}

// Reducer
const reducer = (state, action) => {
    console.log('Action: ', action);
    console.log('Prev state: ', state);
    let newState
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break
        case EDIT_JOB:
            isEdit = action.payload
            console.log(isEdit);
            newState = {
                ...state,
                job: state.jobs[isEdit]
            }
            break
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            newState = {
                ...state,
                jobs: newJobs
            }
            break
        default:
            throw new Error('Invalid action...')
    }

    console.log('New state: ', newState);
    return newState
}

function TodoReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const inputRef = useRef()

    const { job, jobs } = state;
    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }
    const handleSaveEdit = (index) => {
        dispatch(deleteJob(index))
        dispatch(addJob(job))
        dispatch(setJob(''))
        isEdit = null
    }
    return (
        <div className="App" style={{ textAlign: "start", padding: 32 }}>
            <h1>Todo</h1>
            <input
                type="text"
                value={isEdit === null ? job : ''}
                ref={inputRef}
                placeholder='Enter todo...'
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />

            <button onClick={handleSubmit}>Add</button>

            <br />
            <ul>
                {
                    jobs.map((item, index) => (
                        <li
                            key={index}
                        >
                            <span
                                style={{
                                    display: isEdit === index ? 'none' : 'inline-block'
                                }}
                            >
                                {item}
                            </span>
                            <button
                                style={{
                                    marginLeft: 8,
                                    padding: 8,
                                    border: 'none',
                                    display: isEdit === index ? 'none' : 'inline-block'
                                }}
                                onClick={() => dispatch(editJob(index))}
                            >Edit</button>

                            <span
                                style={{
                                    marginLeft: 8,
                                    padding: 4,
                                    backgroundColor: 'red',
                                    color: 'white',
                                    cursor: 'pointer',
                                    display: isEdit === index ? 'none' : 'inline-block'
                                }}
                                onClick={() => dispatch(deleteJob(index))}
                            >&times;</span>

                            <input
                                type="text"
                                value={job}
                                style={{
                                    display: isEdit === index ? 'inline-block' : 'none'
                                }}
                                onChange={e => dispatch(setJob(e.target.value))}
                            />
                            <button
                                style={{
                                    display: isEdit === index ? 'inline-block' : 'none'
                                }}
                                onClick={(index) => handleSaveEdit(index)}
                            >
                                Save
                            </button>

                            <button
                                style={{
                                    display: isEdit === index ? 'inline-block' : 'none'
                                }}
                                onClick={(e) => {
                                    dispatch(setJob(''))
                                    isEdit = null
                                }}
                            >
                                Cancel
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoReducer