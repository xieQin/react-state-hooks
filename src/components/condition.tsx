import * as React from 'react'
import { JSXElement } from '@babel/types';

interface componentItem {
  [propName: string]: JSXElement;
}

const componentList: any = {
  'state1': <div>1</div>,
  'state2': <div>2</div>,
  'state3': <div>3</div>,
  'state4': <div>4</div>
}

const condition = (state: string) => {
  return (
    componentList[state]
  )
}

export default condition