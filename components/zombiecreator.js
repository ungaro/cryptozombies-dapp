import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';






@inject('store') @observer
export default class ZombieCreator extends React.Component {
 


    render() {
        const store = this.props.store

console.log("Here is my store:"+store)
console.log("Here is my props:"+JSON.stringify(this.props.store.ZombieConfig[0]))
var eyeImg= "/static/images/zombies/eyes-"+this.props.store.ZombieConfig[0]+"@2x.png"
var headImg= "/static/images/zombies/head-"+this.props.store.ZombieConfig[1]+"@2x.png"
var shirtImg= "/static/images/zombies/shirt-"+this.props.store.ZombieConfig[2]+"@2x.png"
        return (

    <div>
    

Head: 
<div className="zombieArea">
<img  src={eyeImg} className="zombie-eye" />
<img  src={headImg} className="zombie-head" />
<img  src={shirtImg} className="zombie-shirt" />

</div>

      </div>

              )
    }
}