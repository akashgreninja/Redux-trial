import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'
const Shop = () => {
  const dispatch=useDispatch()
  const actions=bindActionCreators(actionCreators,dispatch)
  return (
    <div>
        <h2>add/withdraw</h2>
   {/* <button className="btn btn-primary" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
   update
   <button className="btn btn-primary"  onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
   <button className="btn btn-primary" onClick={()=>{actions.withdrawMoney(100)}}>-</button>
   update
   <button className="btn btn-primary"  onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
   </div>
  )
}

export default Shop