import React, {Component, Fragment, useState, useEffect} from "react";
import { MessageHub, EventType, MessageHubControllers } from '../../utils/MessageHub';

const Details = (props: any) => {
  const  getGurrentElement = (data: any) => {
    console.log(data)
  }
  useEffect( () => {
    MessageHub.addListener(EventType.Details, getGurrentElement);
  }, [])

  return  (
    <div>
      These are the details2
    </div>
  )
}

export default Details;